import axios from 'axios'
import api from '@common/api.js'
import siteinfo from '@common/siteinfo.js'
import { useAuthStore } from '@/stores/auth'
import { useSiteStore } from '@/stores/site'

if (!api.platform) {
  api.platform = 'h5'
}

const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || '',
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
