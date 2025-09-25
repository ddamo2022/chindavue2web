import { createI18n } from 'vue-i18n'
import en from '@locale/en.json'
import zh from '@locale/zh.json'
import th from '@locale/th.json'

const SUPPORTED_LOCALES = ['en', 'zh', 'th']
const FALLBACK_LOCALE = 'en'

const readStoredLocale = () => {
  if (typeof window === 'undefined') {
    return FALLBACK_LOCALE
  }

  try {
    const stored =
      localStorage.getItem('language') ||
      localStorage.getItem('uni_lang') ||
      sessionStorage.getItem('uni_lang') ||
      navigator.language?.split('-')[0]

    if (stored && SUPPORTED_LOCALES.includes(stored)) {
      return stored
    }
  } catch (error) {
    console.warn('Unable to read stored locale', error)
  }

  return FALLBACK_LOCALE
}

const persistLocale = (locale) => {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem('language', locale)
    localStorage.setItem('uni_lang', locale)
    sessionStorage.setItem('uni_lang', locale)
  } catch (error) {
    console.warn('Unable to persist locale preference', error)
  }

  if (typeof uni !== 'undefined' && typeof uni.setLocale === 'function') {
    try {
      uni.setLocale(locale)
    } catch (error) {
      console.warn('Failed to sync locale with Uni-app runtime', error)
    }
  }
}

const applyDocumentLang = (locale) => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = locale
  }
}

const initialLocale = readStoredLocale()

const i18n = createI18n({
  legacy: false,
  locale: initialLocale,
  fallbackLocale: FALLBACK_LOCALE,
  messages: {
    en,
    zh,
    th
  }
})

persistLocale(initialLocale)
applyDocumentLang(initialLocale)

const setActiveLocale = (locale) => {
  const nextLocale = SUPPORTED_LOCALES.includes(locale) ? locale : FALLBACK_LOCALE
  i18n.global.locale.value = nextLocale
  persistLocale(nextLocale)
  applyDocumentLang(nextLocale)

  if (typeof window !== 'undefined') {
    try {
      window.dispatchEvent(
        new CustomEvent('chinda:locale-changed', {
          detail: { locale: nextLocale }
        })
      )
    } catch (error) {
      console.warn('Unable to broadcast locale change event', error)
    }
  }

  return nextLocale
}

export const supportedLocales = SUPPORTED_LOCALES
export { setActiveLocale }
export default i18n
