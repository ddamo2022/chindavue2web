import { computed, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'
import { useSiteStore } from '@/stores/site'

const ensureText = (value) => (typeof value === 'string' ? value.trim() : '')

const resolveMessage = (t, key, fallback) => {
  if (!key) return ensureText(fallback)
  const translated = t(key)
  if (translated && translated !== key) {
    return ensureText(translated)
  }
  return ensureText(fallback)
}

const applyMeta = (title, description, brand) => {
  if (typeof document === 'undefined') return
  const safeBrand = brand || 'Chinda'
  const titleText = title ? `${title} · ${safeBrand}` : safeBrand
  if (titleText) {
    document.title = titleText
  }
  const existing = document.querySelector('meta[name="description"]')
  const meta = existing || document.createElement('meta')
  meta.setAttribute('name', 'description')
  if (description) {
    meta.setAttribute('content', description)
  }
  if (!existing && document.head) {
    document.head.appendChild(meta)
  }
}

export const usePageMeta = ({ titleKey, titleFallback, descriptionKey, descriptionFallback } = {}) => {
  const { t, locale } = useI18n()
  const site = useSiteStore()
  const { brandName } = storeToRefs(site)

  const pageTitle = computed(() => resolveMessage(t, titleKey, titleFallback))
  const pageDescription = computed(() => resolveMessage(t, descriptionKey, descriptionFallback))

  const sync = () => {
    applyMeta(pageTitle.value, pageDescription.value, brandName.value)
  }

  onMounted(sync)
  watch([pageTitle, pageDescription, brandName, locale], sync, { immediate: true })

  return { pageTitle, pageDescription }
}

export default usePageMeta
