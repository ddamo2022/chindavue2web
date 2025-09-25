import { defineStore } from 'pinia'
import { computed, reactive, ref, watch } from 'vue'
import api from '@common/api.js'

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
      config.siteInfo = data?.siteInfo || data || null
      config.layout = data?.layout || null
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
