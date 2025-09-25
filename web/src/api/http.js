import axios from 'axios'
import { getActivePinia } from 'pinia'
import api from '@common/api.js'
import siteinfo from '@common/siteinfo.js'
import { useAuthStore } from '@/stores/auth'
import { useSiteStore } from '@/stores/site'

if (!api.platform) {
  api.platform = 'h5'
}

const resolveBaseUrl = () => {
  if (typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_BASE) {
    return import.meta.env.VITE_API_BASE
  }

  if (typeof window !== 'undefined' && window.__CHINDA_API_BASE__) {
    return window.__CHINDA_API_BASE__
  }

  try {
    if (getActivePinia()) {
      const siteStore = useSiteStore()
      const siteInfo = siteStore?.config?.siteInfo || siteinfo || {}
      if (typeof siteInfo.siteroot === 'string' && siteInfo.siteroot) {
        return siteInfo.siteroot
      }
    }
  } catch (error) {
    // Pinia may not be initialised yet during module evaluation; ignore and continue.
  }

  if (typeof siteinfo?.siteroot === 'string' && siteinfo.siteroot) {
    return siteinfo.siteroot
  }

  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin
  }

  return ''
}

const http = axios.create({
  baseURL: resolveBaseUrl(),
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

const readLocale = () => {
  if (typeof window === 'undefined') return 'en'
  return localStorage.getItem('uni_lang') || navigator.language?.split('-')[0] || 'en'
}

const ensureHeaders = (config) => {
  config.headers = config.headers || {}
  const site = useSiteStore()
  const auth = useAuthStore()

  const siteInfo = site.config.siteInfo || siteinfo

  const baseCandidate = resolveBaseUrl()
  if (baseCandidate && config.baseURL !== baseCandidate) {
    config.baseURL = baseCandidate
  }

  config.headers.appType = api.platform || 'h5'
  if (siteInfo?.uniacid) {
    config.headers.uniacid = siteInfo.uniacid
  }
  config.headers.module = 'yb_wm_v3'
  config.headers.lang = readLocale()

  const memberId = auth.profile.member?.id
  if (memberId) {
    config.headers.userId = memberId
  }

  const storedShopId =
    (typeof window !== 'undefined' && (localStorage.getItem('shopId') || sessionStorage.getItem('shopId')))
      || siteInfo?.defaultStoreId
      || siteInfo?.default_store_id
  if (storedShopId) {
    config.headers.shopId = storedShopId
  }

  if (auth.profile.token) {
    config.headers.Authorization = `Bearer ${auth.profile.token}`
  }

  return config
}

http.interceptors.request.use((config) => {
  ensureHeaders(config)
  return config
})

http.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      const message = error.response.data?.msg || error.response.data?.message || 'Request failed'
      throw new Error(message)
    }
    throw error
  }
)

export default http
