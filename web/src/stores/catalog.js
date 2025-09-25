import { defineStore } from 'pinia'
import { computed, reactive, ref, watch } from 'vue'
import { goodsApi, storeApi } from '@/api/client'
import { useSiteStore } from '@/stores/site'

const DEFAULT_COORDINATES = { lat: 13.7563, lng: 100.5018 }

const DINING_STORAGE_PREFIX = 'chinda-web-dining'

const createDiningStorageKey = (storeId) => `${DINING_STORAGE_PREFIX}::${storeId || 'global'}`

const readPersistedDiningType = (storeId) => {
  if (typeof window === 'undefined') return null
  const keys = []
  if (storeId) keys.push(createDiningStorageKey(storeId))
  keys.push(createDiningStorageKey('global'))
  for (const key of keys) {
    if (!key) continue
    try {
      const value = window.localStorage.getItem(key)
      if (value !== null && value !== undefined && value !== '') {
        const parsed = Number(value)
        if (Number.isFinite(parsed)) return parsed
      }
    } catch (error) {
      // localStorage may be unavailable; skip persistence silently
    }
    try {
      const value = window.sessionStorage.getItem(key)
      if (value !== null && value !== undefined && value !== '') {
        const parsed = Number(value)
        if (Number.isFinite(parsed)) return parsed
      }
    } catch (error) {
      // sessionStorage might be unavailable (private mode, etc.). Ignore softly.
    }
  }
  return null
}

const persistDiningType = (storeId, value) => {
  if (typeof window === 'undefined') return
  if (!Number.isFinite(value)) return
  const stringValue = String(value)
  const targets = new Set([createDiningStorageKey('global')])
  if (storeId) {
    targets.add(createDiningStorageKey(storeId))
  }
  for (const key of targets) {
    try {
      window.localStorage.setItem(key, stringValue)
    } catch (error) {
      // Ignore persistence failures in restricted environments
    }
    try {
      window.sessionStorage.setItem(key, stringValue)
    } catch (error) {
      // sessionStorage write failures are non-fatal
    }
  }
}

const createCategoryCacheKey = (storeId, diningType) => {
  const resolvedStore = storeId ? String(storeId) : 'default'
  const resolvedType = Number.isFinite(diningType) ? Number(diningType) : 0
  return `${resolvedStore}::${resolvedType}`
}

const createGoodsCacheKey = (storeId, diningType, categoryId) => {
  const category = categoryId ? String(categoryId) : 'all'
  return `${createCategoryCacheKey(storeId, diningType)}::${category}`
}

const cloneCategoryList = (items) =>
  Array.isArray(items) ? items.map((item) => ({ ...item })) : []

const cloneGoodsList = (items) =>
  Array.isArray(items)
    ? items.map((item) => ({
        ...item,
        tags: Array.isArray(item.tags) ? [...item.tags] : [],
        raw: item.raw
      }))
    : []

const ensureArray = (value) => (Array.isArray(value) ? value : [])
const ensureNumber = (value) => {
  const number = Number(value)
  return Number.isFinite(number) ? number : 0
}

const ensureText = (value) => {
  if (typeof value === 'string') return value.trim()
  if (value && typeof value === 'object') {
    return ensureText(value.text || value.title || value.name || value.label || value.content)
  }
  return ''
}

const normalizeStore = (entry) => {
  if (!entry || typeof entry !== 'object') return null
  const rawId = entry.id || entry.storeId || entry.store_id || entry.ID
  const id = rawId !== undefined && rawId !== null ? String(rawId) : null
  const name = ensureText(entry.name || entry.storeName)
  if (!id || !name) return null
  const address = ensureText(entry.address || entry.location || entry.detailAddress)
  const region =
    ensureText(entry.cityName || entry.city || entry.region || entry.areaName) || ensureText(entry.country)
  const phone = ensureText(entry.mobile || entry.phone || entry.tel)
  const lat = ensureNumber(entry.lat || entry.latitude)
  const lng = ensureNumber(entry.lng || entry.longitude)
  const distance = ensureText(entry.distance)
  const status = Number(entry.realtimeState ?? entry.status ?? entry.businessStatus ?? 0)
  const businessData = entry.businessData || entry.business_data || {}
  const times = ensureArray(businessData.times || entry.businessHours)
  const labels = ensureArray(entry.label || entry.tags || entry.labels).map((item) => ensureText(item.name || item))
  const storeSetting = entry.storeSetting || entry.store_setting || {}
  const takeout = Number(storeSetting.takeoutSwitch ?? storeSetting.takeout_switch ?? 0) === 1
  const pickup = Number(storeSetting.pickupSwitch ?? storeSetting.pickup_switch ?? 0) === 1
  const defaultType = Number(storeSetting.defaultType ?? storeSetting.default_type ?? 0)

  const formatTimes = () => {
    if (!times.length) return ''
    return times
      .slice(0, 3)
      .map((time) => {
        const start = ensureText(time.start || time.begin)
        const end = ensureText(time.end || time.finish)
        if (!start || !end) return ''
        const spansNextDay = Boolean(time.ciri || time.nextDay)
        return `${start} - ${spansNextDay ? 'Next day ' : ''}${end}`.trim()
      })
      .filter(Boolean)
      .join(' · ')
  }

  const statusLabel = (() => {
    switch (status) {
      case 1:
        return 'open'
      case 2:
        return 'busy'
      case 3:
        return 'closed'
      default:
        return 'unknown'
    }
  })()

  const link = `https://www.vdamo.com/h5/#/pages/index/goods?storeId=${id}`

  return {
    id,
    name,
    address,
    region,
    phone,
    lat,
    lng,
    distance,
    status,
    statusLabel,
    hours: formatTimes(),
    labels,
    raw: entry,
    storeSetting,
    takeout,
    pickup,
    defaultType,
    link
  }
}

const normalizeStoreList = (data) => {
  if (!data) return []
  if (Array.isArray(data)) return data.map(normalizeStore).filter(Boolean)
  if (Array.isArray(data.list)) return data.list.map(normalizeStore).filter(Boolean)
  if (Array.isArray(data.data)) return data.data.map(normalizeStore).filter(Boolean)
  return Object.values(data)
    .flatMap((entry) => (Array.isArray(entry) ? entry : [entry]))
    .map(normalizeStore)
    .filter(Boolean)
}

const normalizeCategories = (data) => {
  if (!data) return []
  const candidates = Array.isArray(data?.list) ? data.list : Array.isArray(data) ? data : []
  return candidates
    .map((entry, index) => {
      const rawId = entry.id || entry.categoryId || entry.category_id
      const id = rawId !== undefined && rawId !== null ? String(rawId) : `category-${index}`
      const name = ensureText(entry.name || entry.title || entry.label)
      if (!id || !name) return null
      const description = ensureText(entry.description || entry.desc || entry.summary)
      const image = ensureText(entry.image || entry.banner || entry.cover)
      const isMust = Boolean(entry.isMust || entry.required)
      return { id, name, description, image, raw: entry, isMust }
    })
    .filter(Boolean)
}

const flattenGoods = (payload) => {
  if (!payload) return []
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload.list)) return payload.list
  if (Array.isArray(payload.goodsList)) return payload.goodsList
  if (Array.isArray(payload.goods)) return payload.goods
  if (Array.isArray(payload.data)) return payload.data
  return Object.values(payload)
    .flatMap((entry) => {
      if (Array.isArray(entry)) return entry
      if (Array.isArray(entry?.list)) return entry.list
      if (Array.isArray(entry?.goodsList)) return entry.goodsList
      return [entry]
    })
    .filter(Boolean)
}

const normalizeGoods = (data) =>
  flattenGoods(data)
    .map((item, index) => {
      if (!item || typeof item !== 'object') return null
      const rawId = item.id || item.goodsId || item.goods_id || item.spuId
      const id = rawId !== undefined && rawId !== null ? String(rawId) : `menu-${index}`
      const name = ensureText(item.name || item.title)
      if (!name) return null
      const description = ensureText(item.intro || item.description || item.sellingPoint)
      const price = ensureNumber(item.sellPrice ?? item.salePrice ?? item.price)
      const strikePrice = ensureNumber(item.originalPrice ?? item.marketPrice ?? item.linePrice)
      const image = ensureText(item.pic || item.image || item.cover)
      const points = ensureNumber(item.integral ?? item.points ?? item.point)
      const categoryRaw = item.categoryId || item.category_id || item.cid
      const categoryId = categoryRaw !== undefined && categoryRaw !== null ? String(categoryRaw) : ''
      const tags = ensureArray(item.labels || item.tags || item.label).map((entry) =>
        ensureText(entry?.name || entry)
      )
      const available = item.status !== 0 && item.status !== '0'
      return {
        id,
        name,
        description,
        price,
        strikePrice,
        image,
        points,
        categoryId,
        tags,
        available,
        raw: item
      }
    })
    .filter(Boolean)

export const useCatalogStore = defineStore('catalog', () => {
  const site = useSiteStore()

  const stores = ref([])
  const storesLoading = ref(false)
  const storesError = ref('')
  const pagination = reactive({ page: 1, size: 12, hasMore: true })

  const readPersistedStoreId = () => {
    if (typeof window === 'undefined') return ''
    return localStorage.getItem('shopId') || sessionStorage.getItem('shopId') || ''
  }

  const selectedStoreId = ref(readPersistedStoreId())
  const selectedStore = ref(null)

  const categories = ref([])
  const categoriesLoading = ref(false)
  const goods = ref([])
  const goodsLoading = ref(false)
  const selectedCategoryId = ref('')
  const goodsError = ref('')

  const searchTerm = ref('')
  const searchResults = ref([])
  const searchLoading = ref(false)
  const searchError = ref('')
  const hasActiveSearch = ref(false)

  const initialDiningPreference = readPersistedDiningType(selectedStoreId.value || '')
  const diningType = ref(Number.isFinite(initialDiningPreference) ? Number(initialDiningPreference) : 0)

  const categoryCache = new Map()
  const goodsCache = new Map()

  const defaultLocation = computed(() => {
    const info = site.config.siteInfo || {}
    const lat = Number(info.lat || info.latitude || info.defaultLat || info.lat_default)
    const lng = Number(info.lng || info.longitude || info.defaultLng || info.lng_default)
    if (Number.isFinite(lat) && Number.isFinite(lng)) {
      return { lat, lng }
    }
    return DEFAULT_COORDINATES
  })

  const currentLocation = computed(() => defaultLocation.value)

  const serviceAvailability = computed(() => {
    const store = selectedStore.value
    if (!store) {
      return { pickup: true, takeout: true, defaultType: 0 }
    }
    return {
      pickup: store.pickup !== false,
      takeout: store.takeout !== false,
      defaultType: Number.isFinite(store.defaultType) ? store.defaultType : 0
    }
  })

  const resolveInitialDiningType = (store) => {
    if (!store) return 0
    const setting = store.storeSetting || {}
    const pickupEnabled = Number(setting.pickupSwitch ?? setting.pickup_switch ?? (store.pickup ? 1 : 0)) === 1
    const takeoutEnabled = Number(setting.takeoutSwitch ?? setting.takeout_switch ?? (store.takeout ? 1 : 0)) === 1
    const defaultType = Number(setting.defaultType ?? setting.default_type ?? store.defaultType ?? 0)
    if (pickupEnabled && takeoutEnabled) {
      return Number.isFinite(defaultType) ? defaultType : 0
    }
    if (takeoutEnabled && !pickupEnabled) {
      return 1
    }
    return 0
  }

  const persistSelectedStore = (id) => {
    if (typeof window === 'undefined') return
    if (id) {
      localStorage.setItem('shopId', id)
      sessionStorage.setItem('shopId', id)
    }
  }

  const clearSearch = () => {
    searchTerm.value = ''
    searchResults.value = []
    searchLoading.value = false
    searchError.value = ''
    hasActiveSearch.value = false
  }

  const loadStores = async ({ refresh = false } = {}) => {
    if (storesLoading.value) return
    if (refresh) {
      pagination.page = 1
      pagination.hasMore = true
      stores.value = []
      categoryCache.clear()
      goodsCache.clear()
    }
    const wasEmpty = stores.value.length === 0
    if (!pagination.hasMore) return
    storesLoading.value = true
    storesError.value = ''
    try {
      const coords = currentLocation.value
      const params = {
        page: pagination.page,
        size: pagination.size,
        lat: coords.lat,
        lng: coords.lng
      }
      const data = await storeApi.list(params)
      const list = normalizeStoreList(data)
      if (refresh) {
        stores.value = list
      } else {
        stores.value = [...stores.value, ...list]
      }
      pagination.hasMore = list.length >= pagination.size
      if (pagination.hasMore) {
        pagination.page += 1
      }
      const shouldAutoSelect = refresh || wasEmpty || !selectedStoreId.value
      if (stores.value.length && shouldAutoSelect) {
        const persistedId = selectedStoreId.value || readPersistedStoreId()
        if (persistedId) {
          const match = stores.value.find((store) => String(store.id) === String(persistedId))
          if (match) {
            await selectStore(match.id, { persist: false })
            return
          }
        }
        await selectStore(stores.value[0].id)
      }
    } catch (error) {
      storesError.value = error?.message || 'Unable to load stores'
    } finally {
      storesLoading.value = false
    }
  }

  const loadStoreDetail = async (storeId) => {
    if (!storeId) return null
    try {
      const coords = currentLocation.value
      const data = await storeApi.detail(storeId, { lat: coords.lat, lng: coords.lng })
      const normalized = normalizeStore(data)
      if (normalized) {
        selectedStore.value = normalized
        const persistedDining = readPersistedDiningType(normalized.id)
        if (Number.isFinite(persistedDining) && persistedDining !== null) {
          diningType.value = Number(persistedDining)
        } else {
          const initialType = resolveInitialDiningType(normalized)
          diningType.value = initialType
          persistDiningType(normalized.id, initialType)
        }
      }
      return normalized
    } catch (error) {
      storesError.value = error?.message || 'Unable to load store details'
      return null
    }
  }

  const loadFeaturedStore = async () => {
    try {
      const coords = currentLocation.value
      const data = await storeApi.featured({ lat: coords.lat, lng: coords.lng })
      const id = typeof data === 'object' ? data.id || data.storeId || data.store_id : data
      if (id) {
        await selectStore(id)
      }
    } catch (error) {
      // Soft fail, fallback to store list selection
    }
  }

  const selectStore = async (storeId, { skipDetail = false, persist = true } = {}) => {
    if (!storeId) return
    const normalizedId = String(storeId)
    selectedStoreId.value = normalizedId
    if (persist) {
      persistSelectedStore(normalizedId)
    }
    const persistedDining = readPersistedDiningType(normalizedId)
    if (Number.isFinite(persistedDining) && persistedDining !== null) {
      diningType.value = Number(persistedDining)
    }
    clearSearch()
    if (!skipDetail || !selectedStore.value || selectedStore.value.id !== normalizedId) {
      await loadStoreDetail(normalizedId)
    }
    const cacheKey = createCategoryCacheKey(normalizedId, diningType.value)
    const shouldRefresh = !categoryCache.has(cacheKey)
    await loadCategories({ storeId: normalizedId, refresh: shouldRefresh })
  }

  const loadCategories = async ({ storeId = selectedStoreId.value, refresh = false } = {}) => {
    if (!storeId) return
    if (categoriesLoading.value) return
    const normalizedStoreId = String(storeId)
    const cacheKey = createCategoryCacheKey(normalizedStoreId, diningType.value)
    const shouldFetch = refresh || !categoryCache.has(cacheKey)

    if (!shouldFetch) {
      const cachedCategories = cloneCategoryList(categoryCache.get(cacheKey))
      categories.value = cachedCategories
      if (!selectedCategoryId.value || !cachedCategories.find((item) => item.id === selectedCategoryId.value)) {
        selectedCategoryId.value = cachedCategories[0]?.id || ''
      }
      if (selectedCategoryId.value) {
        await loadGoods({ storeId: normalizedStoreId, categoryId: selectedCategoryId.value, refresh: false })
      } else {
        goods.value = []
      }
      return cachedCategories
    }

    categoriesLoading.value = true
    try {
      const data = await goodsApi.categories({ storeId: normalizedStoreId, diningType: diningType.value })
      const list = normalizeCategories(data)
      categories.value = list
      categoryCache.set(cacheKey, cloneCategoryList(list))
      if (refresh || !selectedCategoryId.value || !list.find((item) => item.id === selectedCategoryId.value)) {
        selectedCategoryId.value = list[0]?.id || ''
      }
      if (selectedCategoryId.value) {
        await loadGoods({ storeId: normalizedStoreId, categoryId: selectedCategoryId.value, refresh: true })
      } else {
        goods.value = []
      }
      return list
    } catch (error) {
      goodsError.value = error?.message || 'Unable to load categories'
      categoryCache.delete(cacheKey)
      categories.value = []
      goods.value = []
    } finally {
      categoriesLoading.value = false
    }
  }

  const loadGoods = async ({ storeId = selectedStoreId.value, categoryId = selectedCategoryId.value, refresh = false } = {}) => {
    if (!storeId) return
    const normalizedStoreId = String(storeId)
    const normalizedCategoryId = categoryId ? String(categoryId) : ''
    const cacheKey = createGoodsCacheKey(normalizedStoreId, diningType.value, normalizedCategoryId)
    const shouldFetch = refresh || !goodsCache.has(cacheKey)

    if (!shouldFetch) {
      goodsLoading.value = false
      goodsError.value = ''
      goods.value = cloneGoodsList(goodsCache.get(cacheKey))
      return goods.value
    }

    goodsLoading.value = true
    goodsError.value = ''
    try {
      const params = {
        storeId: normalizedStoreId,
        diningType: diningType.value
      }
      if (normalizedCategoryId) {
        params.categoryId = normalizedCategoryId
      }
      const data = await goodsApi.list(params)
      goods.value = normalizeGoods(data)
      goodsCache.set(cacheKey, cloneGoodsList(goods.value))
      return goods.value
    } catch (error) {
      goodsError.value = error?.message || 'Unable to load menu items'
      goodsCache.delete(cacheKey)
      goods.value = []
    } finally {
      goodsLoading.value = false
    }
  }

  const selectCategory = async (categoryId) => {
    if (!categoryId || categoryId === selectedCategoryId.value) return
    const normalizedId = String(categoryId)
    selectedCategoryId.value = normalizedId
    clearSearch()
    await loadGoods({ categoryId: normalizedId })
  }

  const setDiningType = async (type) => {
    const normalized = Number(type)
    if (!Number.isFinite(normalized)) return
    if (diningType.value === normalized && selectedStoreId.value) {
      const existingKey = createCategoryCacheKey(String(selectedStoreId.value), normalized)
      if (categoryCache.has(existingKey)) {
        persistDiningType(selectedStoreId.value, normalized)
        return
      }
    }
    diningType.value = normalized
    persistDiningType(selectedStoreId.value, normalized)
    clearSearch()
    const activeStoreId = selectedStoreId.value ? String(selectedStoreId.value) : ''
    const cacheKey = activeStoreId ? createCategoryCacheKey(activeStoreId, normalized) : null
    const shouldRefresh = cacheKey ? !categoryCache.has(cacheKey) : false
    await loadCategories({ storeId: activeStoreId || selectedStoreId.value, refresh: shouldRefresh })
  }

  const searchGoods = async ({ keyword, storeId = selectedStoreId.value } = {}) => {
    const trimmed = typeof keyword === 'string' ? keyword.trim() : searchTerm.value.trim()
    if (!storeId) {
      searchError.value = '__select__'
      return
    }
    if (!trimmed) {
      clearSearch()
      return
    }

    searchTerm.value = trimmed
    searchLoading.value = true
    searchError.value = ''
    hasActiveSearch.value = true

    try {
      const data = await goodsApi.search(String(storeId), {
        keyword: trimmed,
        page: 1,
        size: 50,
        diningType: diningType.value
      })
      searchResults.value = normalizeGoods(data)
      searchError.value = ''
    } catch (error) {
      searchError.value = error?.message || '__error__'
      searchResults.value = []
    } finally {
      searchLoading.value = false
    }
  }

  const displayedGoods = computed(() => (hasActiveSearch.value ? searchResults.value : goods.value))

  const availableServices = computed(() => {
    const availability = serviceAvailability.value
    const services = []
    if (availability.pickup) {
      services.push({ value: 0, key: 'pickup' })
    }
    if (availability.takeout) {
      services.push({ value: 1, key: 'delivery' })
    }
    if (!services.length) {
      services.push({ value: 0, key: 'pickup' })
    }
    return services
  })

  watch(
    () => site.config.siteInfo,
    () => {
      if (!stores.value.length) {
        loadStores({ refresh: true })
      }
      if (!selectedStoreId.value) {
        loadFeaturedStore()
      } else if (!selectedStore.value) {
        loadStoreDetail(selectedStoreId.value).then(() => {
          loadCategories({ storeId: selectedStoreId.value, refresh: true })
        })
      }
    },
    { immediate: true }
  )

  return {
    stores,
    storesLoading,
    storesError,
    selectedStoreId,
    selectedStore,
    categories,
    categoriesLoading,
    goods,
    goodsLoading,
    goodsError,
    selectedCategoryId,
    diningType,
    searchTerm,
    searchResults,
    searchLoading,
    searchError,
    hasActiveSearch,
    displayedGoods,
    availableServices,
    loadStores,
    selectStore,
    loadCategories,
    loadGoods,
    selectCategory,
    setDiningType,
    searchGoods,
    clearSearch,
    loadFeaturedStore,
    loadStoreDetail
  }
})
