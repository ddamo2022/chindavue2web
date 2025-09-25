import { defineStore } from 'pinia'
import { computed, reactive, ref, watch } from 'vue'
import api from '@common/api.js'

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

export const useSiteStore = defineStore('site', () => {
  const notifications = ref([])
  const config = reactive({
    siteInfo: null,
    layout: null
  })
  const loading = ref(false)
  const ready = ref(false)

  const applySiteMetadata = (info) => {
    if (typeof document !== 'undefined' && info?.name) {
      document.title = info.name
    }
  }

  const loadConfig = async ({ force = false } = {}) => {
    if (ready.value && !force) return
    if (loading.value) return
    loading.value = true
    try {
      const response = await fetch(api.config, { credentials: 'include' })
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
      ready.value = true
    } catch (error) {
      console.warn('Unable to load remote config', error)
    } finally {
      loading.value = false
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

  watch(
    () => config.siteInfo,
    (info) => {
      applySiteMetadata(info)
    },
    { immediate: true }
  )

  const brandName = computed(() => config.siteInfo?.name || 'Chinda Experience Platform')

  return {
    notifications,
    config,
    loading,
    ready,
    brandName,
    loadConfig,
    notify
  }
})
