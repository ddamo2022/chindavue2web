import { defineStore } from 'pinia'
import { computed, reactive, ref, watch } from 'vue'
import { goodsApi, storeApi } from '@/api/client'
import { useSiteStore } from '@/stores/site'

const DEFAULT_COORDINATES = { lat: 13.7563, lng: 100.5018 }

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

  const selectedStoreId = ref('')
  const selectedStore = ref(null)

  const categories = ref([])
  const categoriesLoading = ref(false)
  const goods = ref([])
  const goodsLoading = ref(false)
  const selectedCategoryId = ref('')
  const goodsError = ref('')

  const diningType = ref(0)

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

  const loadStores = async ({ refresh = false } = {}) => {
    if (storesLoading.value) return
    if (refresh) {
      pagination.page = 1
      pagination.hasMore = true
      stores.value = []
    }
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
      if (!selectedStoreId.value && list.length) {
        await selectStore(list[0].id, { skipDetail: true })
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
        diningType.value = resolveInitialDiningType(normalized)
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

  const selectStore = async (storeId, { skipDetail = false } = {}) => {
    if (!storeId) return
    const normalizedId = String(storeId)
    selectedStoreId.value = normalizedId
    persistSelectedStore(normalizedId)
    if (!skipDetail) {
      await loadStoreDetail(normalizedId)
    }
    if (!selectedStore.value || selectedStore.value.id !== normalizedId) {
      await loadStoreDetail(normalizedId)
    }
    await loadCategories({ storeId: normalizedId, refresh: true })
  }

  const loadCategories = async ({ storeId = selectedStoreId.value, refresh = false } = {}) => {
    if (!storeId) return
    if (categoriesLoading.value) return
    categoriesLoading.value = true
    try {
      const normalizedStoreId = String(storeId)
      const data = await goodsApi.categories({ storeId: normalizedStoreId, diningType: diningType.value })
      const list = normalizeCategories(data)
      categories.value = list
      if (refresh || !selectedCategoryId.value || !list.find((item) => item.id === selectedCategoryId.value)) {
        selectedCategoryId.value = list[0]?.id || ''
      }
      if (selectedCategoryId.value) {
        await loadGoods({ storeId: normalizedStoreId, categoryId: selectedCategoryId.value })
      } else {
        goods.value = []
      }
    } catch (error) {
      goodsError.value = error?.message || 'Unable to load categories'
      categories.value = []
      goods.value = []
    } finally {
      categoriesLoading.value = false
    }
  }

  const loadGoods = async ({ storeId = selectedStoreId.value, categoryId = selectedCategoryId.value } = {}) => {
    if (!storeId) return
    goodsLoading.value = true
    goodsError.value = ''
    try {
      const params = {
        storeId: String(storeId),
        diningType: diningType.value
      }
      if (categoryId) {
        params.categoryId = categoryId
      }
      const data = await goodsApi.list(params)
      goods.value = normalizeGoods(data)
    } catch (error) {
      goodsError.value = error?.message || 'Unable to load menu items'
      goods.value = []
    } finally {
      goodsLoading.value = false
    }
  }

  const selectCategory = async (categoryId) => {
    if (!categoryId || categoryId === selectedCategoryId.value) return
    const normalizedId = String(categoryId)
    selectedCategoryId.value = normalizedId
    await loadGoods({ categoryId: normalizedId })
  }

  const setDiningType = async (type) => {
    const normalized = Number(type)
    if (!Number.isFinite(normalized)) return
    diningType.value = normalized
    await loadCategories({ refresh: true })
  }

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

  if (typeof window !== 'undefined') {
    const persistedId = localStorage.getItem('shopId') || sessionStorage.getItem('shopId')
    if (persistedId) {
      selectedStoreId.value = persistedId
    }
  }

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
    availableServices,
    loadStores,
    selectStore,
    loadCategories,
    loadGoods,
    selectCategory,
    setDiningType,
    loadFeaturedStore,
    loadStoreDetail
  }
})
