import { defineStore } from 'pinia'
import { computed, reactive, ref, watch } from 'vue'
import api from '@common/api.js'
import siteinfoModule from '@common/siteinfo.js'

const siteinfo = siteinfoModule?.default ?? siteinfoModule ?? {}

const parseMaybeObject = (payload, contextLabel) => {
  if (!payload) return null
  if (typeof payload === 'object') return payload
  if (typeof payload === 'string') {
    try {
      const parsed = JSON.parse(payload)
      return typeof parsed === 'object' && parsed !== null ? parsed : null
    } catch (error) {
      console.warn(`Unable to parse ${contextLabel || 'payload'}`, error)
    }
  }
  return null
}

const normalizeWebConfig = (siteInfo) => {
  if (!siteInfo || typeof siteInfo !== 'object') return siteInfo
  if (siteInfo.web && typeof siteInfo.web === 'string') {
    const parsedWeb = parseMaybeObject(siteInfo.web, 'siteInfo.web')
    if (parsedWeb) {
      siteInfo.web = parsedWeb
    }
  }
  if (siteInfo.navigation && typeof siteInfo.navigation === 'string') {
    const parsedNav = parseMaybeObject(siteInfo.navigation, 'siteInfo.navigation')
    if (parsedNav) {
      siteInfo.navigation = parsedNav
    }
  }
  if (siteInfo.web && typeof siteInfo.web === 'object') {
    const navigation = siteInfo.web.navigation
    if (navigation && typeof navigation === 'string') {
      const parsed = parseMaybeObject(navigation, 'siteInfo.web.navigation')
      if (parsed) {
        siteInfo.web.navigation = parsed
      }
    }
    const footer = siteInfo.web.footer
    if (footer && typeof footer === 'string') {
      const parsed = parseMaybeObject(footer, 'siteInfo.web.footer')
      if (parsed) {
        siteInfo.web.footer = parsed
      }
    }
  }
  return siteInfo
}

const ANNOUNCEMENT_STORAGE_KEY = 'chinda-web-announcement-dismissed'

const isAbsoluteUrl = (value) => typeof value === 'string' && /^https?:/i.test(value)

const defaultLayoutParams = { page: 'index', id: '1' }

const readLocale = () => {
  if (typeof window === 'undefined') return 'en'
  const stored =
    window.localStorage.getItem('uni_lang') ||
    window.localStorage.getItem('lang') ||
    window.navigator?.language?.split('-')[0]
  return stored || 'en'
}

const readSessionToken = () => {
  if (typeof window === 'undefined') return ''
  const keys = [
    { storage: window.localStorage, key: 'chinda-web-session' },
    { storage: window.sessionStorage, key: 'chinda-web-session-temp' }
  ]
  for (const entry of keys) {
    try {
      const value = entry.storage.getItem(entry.key)
      if (!value) continue
      const parsed = JSON.parse(value)
      if (parsed && parsed.token) return parsed.token
    } catch (error) {
      console.warn('Unable to parse stored session payload', error)
    }
  }
  try {
    const legacy = window.localStorage.getItem('token')
    return legacy || ''
  } catch (error) {
    return ''
  }
}

const readStoredShopId = (info) => {
  if (typeof window !== 'undefined') {
    const stored = window.localStorage.getItem('shopId') || window.sessionStorage.getItem('shopId')
    if (stored) return stored
  }
  return (
    info?.defaultStoreId ||
    info?.default_store_id ||
    info?.shopId ||
    info?.shop_id ||
    siteinfo?.defaultStoreId ||
    siteinfo?.default_store_id ||
    ''
  )
}

const resolveApiBase = () => {
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_BASE) {
    return import.meta.env.VITE_API_BASE
  }
  if (typeof window !== 'undefined' && window.__CHINDA_API_BASE__) {
    return window.__CHINDA_API_BASE__
  }
  if (typeof siteinfo.siteroot === 'string' && siteinfo.siteroot) {
    return siteinfo.siteroot
  }
  if (typeof window !== 'undefined') {
    return window.location.origin
  }
  return ''
}

const resolveConfigUrl = () => {
  const endpoint = api.config
  if (isAbsoluteUrl(endpoint)) {
    return endpoint
  }
  const base = resolveApiBase()
  if (base) {
    try {
      return new URL(endpoint, base).toString()
    } catch (error) {
      console.warn('Unable to construct config URL with base', base, error)
    }
  }
  return endpoint
}

const resolveLayoutParams = (info, overrides = {}) => {
  const source = info || {}
  const webConfig = source.web || {}
  const params = { ...defaultLayoutParams }
  const pageCandidate =
    overrides.page ||
    webConfig.layoutPage ||
    webConfig.page ||
    source.layoutPage ||
    source.page
  const idCandidate =
    overrides.id ||
    webConfig.layoutId ||
    webConfig.layout_id ||
    webConfig.id ||
    source.layoutId ||
    source.layout_id ||
    source.id
  if (pageCandidate) {
    params.page = String(pageCandidate)
  }
  if (idCandidate) {
    params.id = String(idCandidate)
  }
  if (overrides.page) {
    params.page = String(overrides.page)
  }
  if (overrides.id) {
    params.id = String(overrides.id)
  }
  return params
}

const resolveLayoutUrl = (params = {}) => {
  const endpoint = api.layout
  let url
  if (isAbsoluteUrl(endpoint)) {
    url = new URL(endpoint)
  } else {
    const base = resolveApiBase()
    if (!base) return ''
    url = new URL(endpoint, base)
  }
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.set(key, value)
    }
  })
  return url.toString()
}

const createRequestHeaders = (info) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    appType: api.platform || 'h5',
    module: 'yb_wm_v3',
    lang: readLocale()
  }
  const source = info || siteinfo || {}
  const uniacid = source.uniacid || siteinfo.uniacid
  if (uniacid) {
    headers.uniacid = uniacid
  }
  const shopId = readStoredShopId(source)
  if (shopId) {
    headers.shopId = shopId
  }
  const token = readSessionToken()
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }
  return headers
}

const fetchLayoutConfig = async (info, params = {}) => {
  const mergedParams = resolveLayoutParams(info, params)
  const url = resolveLayoutUrl(mergedParams)
  if (!url) return null
  try {
    const response = await fetch(url, {
      credentials: 'include',
      headers: createRequestHeaders(info)
    })
    if (!response.ok) {
      throw new Error(`Layout request failed with status ${response.status}`)
    }
    const payload = await response.json()
    if (payload?.code === 200 && payload.data) {
      return payload.data
    }
    if (payload?.data && !payload.code) {
      return payload.data
    }
    if (payload && typeof payload === 'object') {
      return payload.layout || payload
    }
  } catch (error) {
    console.warn('Unable to load layout configuration', error)
  }
  return null
}

const readDismissedAnnouncements = () => {
  if (typeof window === 'undefined') return []
  try {
    const stored = localStorage.getItem(ANNOUNCEMENT_STORAGE_KEY)
    if (!stored) return []
    const parsed = JSON.parse(stored)
    if (!Array.isArray(parsed)) return []
    return parsed
      .map((entry) => {
        if (typeof entry === 'string') {
          const id = entry.trim()
          return id ? { id, hash: null } : null
        }
        if (entry && typeof entry === 'object') {
          const id = typeof entry.id === 'string' ? entry.id.trim() : ''
          if (!id) return null
          const hash = typeof entry.hash === 'string' ? entry.hash : null
          return { id, hash }
        }
        return null
      })
      .filter((entry) => entry && entry.id)
  } catch (error) {
    console.warn('Unable to read dismissed announcements', error)
  }
  return []
}

const persistDismissedAnnouncements = (entries) => {
  if (typeof window === 'undefined') return
  try {
    const payload = entries
      .filter((entry) => entry && entry.id)
      .map((entry) => ({ id: entry.id, hash: entry.hash || null }))
    if (!payload.length) {
      localStorage.removeItem(ANNOUNCEMENT_STORAGE_KEY)
    } else {
      localStorage.setItem(ANNOUNCEMENT_STORAGE_KEY, JSON.stringify(payload))
    }
  } catch (error) {
    console.warn('Unable to persist dismissed announcements', error)
  }
}

const ensureText = (value) => (typeof value === 'string' ? value.trim() : '')

const createAnnouncementFingerprint = (entry) =>
  JSON.stringify({
    message: entry.message,
    tone: entry.tone,
    cta: entry.cta
      ? {
          label: entry.cta.label,
          to: entry.cta.to,
          href: entry.cta.href
        }
      : null
  })

const normalizeAnnouncementTone = (tone) => {
  const normalized = ensureText(tone).toLowerCase()
  if (['success', 'positive', 'good', 'ready'].includes(normalized)) return 'success'
  if (['warning', 'caution', 'alert'].includes(normalized)) return 'warning'
  if (['error', 'danger', 'critical'].includes(normalized)) return 'danger'
  if (['promo', 'highlight', 'brand'].includes(normalized)) return 'promo'
  return 'info'
}

const normalizeAnnouncementCta = (cta) => {
  if (!cta) return null
  const label = ensureText(cta.label || cta.title || cta.text)
  const to = typeof cta.to === 'string' ? cta.to : undefined
  const hrefCandidate = cta.href ?? cta.url
  const href = typeof hrefCandidate === 'string' ? hrefCandidate : undefined
  if (!label || !(to || href)) return null
  const external = Boolean(cta.external || (!to && href && /^https?:/i.test(href)))
  const variant = cta.variant || cta.style || 'ghost'
  return {
    label,
    to,
    href,
    external,
    variant: variant === 'primary' ? 'primary' : 'ghost'
  }
}

const extractAnnouncement = (source) => {
  if (!source) return null
  if (Array.isArray(source)) {
    return source.map((item) => extractAnnouncement(item)).find(Boolean) || null
  }
  if (typeof source === 'string') {
    const message = ensureText(source)
    return message
      ? {
          id: message,
          message,
          tone: 'info',
          dismissible: true,
          cta: null,
          icon: ''
        }
      : null
  }
  if (typeof source !== 'object') return null
  if (source.enabled === false || source.active === false) return null

  const message =
    ensureText(source.message || source.text || source.copy || source.description || source.body) || ''
  if (!message) return null
  const id = ensureText(source.id || source.key || source.slug || source.code || message) || message
  const tone = normalizeAnnouncementTone(source.tone || source.variant || source.style)
  const cta = normalizeAnnouncementCta(source.cta || source.action || (Array.isArray(source.ctas) ? source.ctas[0] : null))
  const dismissible = source.dismissible !== false
  const icon = ensureText(source.icon || source.emoji || '')

  if (source.start || source.end || source.startDate || source.endDate) {
    const now = Date.now()
    const start = source.start || source.startDate
    const end = source.end || source.endDate
    if (start) {
      const startTime = new Date(start).getTime()
      if (!Number.isNaN(startTime) && startTime > now) {
        return null
      }
    }
    if (end) {
      const endTime = new Date(end).getTime()
      if (!Number.isNaN(endTime) && endTime < now) {
        return null
      }
    }
  }

  return { id, message, tone, dismissible, cta, icon }
}

export const useSiteStore = defineStore('site', () => {
  const notifications = ref([])
  const config = reactive({
    siteInfo: null,
    layout: null
  })
  const loading = ref(false)
  const ready = ref(false)
  const layoutLoading = ref(false)
  const layoutHydrated = ref(false)
  const dismissedAnnouncements = ref(readDismissedAnnouncements())
  const connectivity = reactive({
    status: 'idle',
    error: '',
    lastChecked: 0
  })

  const markConnectivityChecking = () => {
    connectivity.status = 'checking'
  }

  const markConnectivityOnline = () => {
    connectivity.status = 'online'
    connectivity.error = ''
    connectivity.lastChecked = Date.now()
  }

  const markConnectivityOffline = (error) => {
    connectivity.status = 'offline'
    connectivity.error = typeof error === 'string' ? error : error?.message || ''
    connectivity.lastChecked = Date.now()
  }

  const applySiteMetadata = (info) => {
    if (typeof document !== 'undefined' && info?.name) {
      document.title = info.name
    }
  }

  const loadConfig = async ({ force = false } = {}) => {
    if (ready.value && !force) return
    if (loading.value) return
    loading.value = true
    markConnectivityChecking()
    try {
      const response = await fetch(resolveConfigUrl(), {
        credentials: 'include',
        headers: {
          Accept: 'application/json'
        }
      })
      if (!response.ok) {
        throw new Error(`Config request failed with status ${response.status}`)
      }
      const data = await response.json()
      const siteInfo =
        parseMaybeObject(data?.siteInfo, 'siteInfo') ||
        parseMaybeObject(data, 'configRoot') ||
        data?.siteInfo ||
        data ||
        null
      const normalizedSiteInfo = normalizeWebConfig(siteInfo || {})
      config.siteInfo = normalizedSiteInfo || null

      const layoutSource =
        parseMaybeObject(data?.layout, 'layout') ||
        parseMaybeObject(normalizedSiteInfo?.layout, 'siteInfo.layout') ||
        data?.layout ||
        normalizedSiteInfo?.layout ||
        null
      config.layout = typeof layoutSource === 'object' && layoutSource !== null ? layoutSource : null
      if (config.siteInfo?.uniacid && typeof window !== 'undefined') {
        localStorage.setItem('uniacid', config.siteInfo.uniacid)
      }
      applySiteMetadata(config.siteInfo)
      if (!layoutHydrated.value || force) {
        await loadLayout({ force: true })
      }
      ready.value = true
      markConnectivityOnline()
    } catch (error) {
      console.warn('Unable to load remote config', error)
      markConnectivityOffline(error)
    } finally {
      loading.value = false
    }
  }

  const loadLayout = async ({ force = false, params = {} } = {}) => {
    if (layoutLoading.value) return config.layout
    if (config.layout && !force) return config.layout
    layoutLoading.value = true
    try {
      const info = config.siteInfo || siteinfo || {}
      const data = await fetchLayoutConfig(info, params)
      if (data && typeof data === 'object') {
        config.layout = data
        layoutHydrated.value = true
      }
      return config.layout
    } finally {
      layoutLoading.value = false
    }
  }

  const notify = ({ title, message, tone = 'neutral' }) => {
    const entry = {
      id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36),
      title,
      message,
      tone
    }
    notifications.value.push(entry)
    setTimeout(() => {
      notifications.value = notifications.value.filter((item) => item.id !== entry.id)
    }, 4000)
  }

  const announcementConfig = computed(() => {
    const info = config.siteInfo || {}
    const webConfig = info.web || {}
    return (
      extractAnnouncement(webConfig.announcement || webConfig.banner || webConfig.notice) ||
      extractAnnouncement(info.announcement || info.notice || info.banner) ||
      null
    )
  })

  const announcement = computed(() => {
    const candidate = announcementConfig.value
    if (!candidate) return null
    const existing = dismissedAnnouncements.value.find((entry) => entry.id === candidate.id)
    if (existing) return null
    return candidate
  })

  const dismissAnnouncement = (id) => {
    if (!id) return
    if (dismissedAnnouncements.value.find((entry) => entry.id === id)) return
    const candidate = announcementConfig.value
    const hash = candidate && candidate.id === id ? createAnnouncementFingerprint(candidate) : null
    dismissedAnnouncements.value = [...dismissedAnnouncements.value, { id, hash }]
    persistDismissedAnnouncements(dismissedAnnouncements.value)
  }

  watch(announcementConfig, (value) => {
    if (!value) return
    const index = dismissedAnnouncements.value.findIndex((entry) => entry.id === value.id)
    if (index === -1) return
    const fingerprint = createAnnouncementFingerprint(value)
    const entry = dismissedAnnouncements.value[index]
    if (entry.hash && entry.hash === fingerprint) return
    dismissedAnnouncements.value = [
      ...dismissedAnnouncements.value.slice(0, index),
      ...dismissedAnnouncements.value.slice(index + 1)
    ]
    persistDismissedAnnouncements(dismissedAnnouncements.value)
  })

  watch(
    () => config.siteInfo,
    (info) => {
      applySiteMetadata(info)
    },
    { immediate: true }
  )

  const connectivityStatus = computed(() => connectivity.status)
  const connectivityError = computed(() => connectivity.error)
  const connectivityLastChecked = computed(() => connectivity.lastChecked)

  const retryConnectivity = async () => {
    await loadConfig({ force: true })
  }

  const brandName = computed(() => config.siteInfo?.name || 'Chinda Experience Platform')

  return {
    notifications,
    config,
    loading,
    ready,
    brandName,
    announcement,
    dismissAnnouncement,
    loadConfig,
    loadLayout,
    layoutLoading,
    layoutHydrated,
    notify,
    connectivityStatus,
    connectivityError,
    connectivityLastChecked,
    retryConnectivity
  }
})
