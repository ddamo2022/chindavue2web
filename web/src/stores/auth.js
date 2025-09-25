import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { computed, reactive, ref } from 'vue'
import { useSiteStore } from './site'
import { useMemberStore } from './member'
import { authApi } from '@/api/client'

const STORAGE_KEY = 'chinda-web-session'
const SESSION_KEY = 'chinda-web-session-temp'

const persistSession = (session, remember = true) => {
  if (typeof window === 'undefined') return
  if (!session || !session.token) {
    localStorage.removeItem(STORAGE_KEY)
    sessionStorage.removeItem(SESSION_KEY)
    return
  }
  const payload = JSON.stringify({ token: session.token, member: session.member || null })
  if (remember) {
    localStorage.setItem(STORAGE_KEY, payload)
    sessionStorage.removeItem(SESSION_KEY)
  } else {
    sessionStorage.setItem(SESSION_KEY, payload)
    localStorage.removeItem(STORAGE_KEY)
  }
}

const hydrateSession = () => {
  if (typeof window === 'undefined') return { session: null, remember: true }
  const localValue = localStorage.getItem(STORAGE_KEY)
  if (localValue) {
    try {
      return { session: JSON.parse(localValue), remember: true }
    } catch (error) {
      console.warn('Failed to parse stored session', error)
    }
  }
  const sessionValue = sessionStorage.getItem(SESSION_KEY)
  if (sessionValue) {
    try {
      return { session: JSON.parse(sessionValue), remember: false }
    } catch (error) {
      console.warn('Failed to parse temporary session', error)
    }
  }
  return { session: null, remember: true }
}

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()
  const site = useSiteStore()
  const memberStore = useMemberStore()
  const profile = reactive({
    token: '',
    member: null
  })
  const status = ref('idle')
  const hydrated = ref(false)

  const setSession = (payload = {}, options = {}) => {
    const remember = options.remember ?? true
    profile.token = payload?.token || ''
    profile.member = payload?.member || payload?.userInfo || null
    if (profile.token) {
      persistSession({ token: profile.token, member: profile.member }, remember)
      status.value = 'authenticated'
    } else {
      persistSession(null)
      if (status.value !== 'loading') {
        status.value = 'idle'
      }
    }
  }

  const restoreSession = () => {
    if (hydrated.value) return
    const { session, remember } = hydrateSession()
    if (session?.token) {
      setSession(session, { remember })
    }
    hydrated.value = true
  }

  const isAuthenticated = computed(() => Boolean(profile.token))

  restoreSession()

  const login = async (credentials) => {
    status.value = 'loading'
    try {
      const { email, password, remember = true } = credentials
      const response = await authApi.login({ username: email, password })
      setSession(response, { remember })
      await memberStore.loadProfile({ silent: true }).catch(() => {})
      status.value = 'authenticated'
      site.notify({
        title: 'Welcome back',
        message: 'You are now signed in.',
        tone: 'success'
      })
      const redirect = router.currentRoute.value.query.redirect
      router.push(typeof redirect === 'string' ? redirect : '/dashboard')
    } catch (error) {
      console.error(error)
      status.value = 'error'
      site.notify({
        title: 'Unable to sign in',
        message: 'Please check your credentials and try again.',
        tone: 'error'
      })
      throw error
    }
  }

  const register = async (payload) => {
    status.value = 'loading'
    try {
      const body = {
        type: payload.type ?? 0,
        email: payload.email,
        phone: payload.phone || '',
        code: payload.code,
        password: payload.password
      }
      const response = await authApi.register(body)
      setSession(response, { remember: true })
      await memberStore.loadProfile({ silent: true }).catch(() => {})
      status.value = 'authenticated'
      site.notify({
        title: 'Account created',
        message: 'Welcome to the Chinda experience.',
        tone: 'success'
      })
      router.push('/membership')
    } catch (error) {
      console.error(error)
      status.value = 'error'
      site.notify({
        title: 'Registration failed',
        message: 'We could not create your account. Please verify your information.',
        tone: 'error'
      })
      throw error
    }
  }

  const logout = async () => {
    if (!profile.token) return
    try {
      await authApi.logout()
    } catch (error) {
      console.warn('Logout request failed', error)
    }
    setSession({ token: '', member: null }, { remember: true })
    memberStore.clear()
    status.value = 'idle'
    site.notify({
      title: 'Signed out',
      message: 'You have been logged out safely.',
      tone: 'neutral'
    })
    router.push('/')
  }

  const requestPasswordReset = async ({ email, phone, code, password, type = 0 }) => {
    if (!email && !phone) return
    status.value = 'loading'
    try {
      await authApi.resetPassword({ email, phone, code, password, type })
    } catch (error) {
      status.value = 'error'
      throw error
    } finally {
      if (status.value !== 'authenticated') {
        status.value = 'idle'
      }
    }
  }

  const sendResetCode = async ({ email, phone, type }) => {
    status.value = 'loading'
    try {
      await authApi.sendResetCode({ email, phone, type })
    } catch (error) {
      status.value = 'error'
      throw error
    } finally {
      if (status.value !== 'authenticated') {
        status.value = 'idle'
      }
    }
  }

  const sendRegisterCode = async ({ email, phone, type }) => {
    status.value = 'loading'
    try {
      await authApi.sendRegisterCode({ email, phone, type })
    } catch (error) {
      status.value = 'error'
      throw error
    } finally {
      if (status.value !== 'authenticated') {
        status.value = 'idle'
      }
    }
  }

  return {
    profile,
    status,
    hydrated,
    isAuthenticated,
    login,
    register,
    logout,
    setSession,
    restoreSession,
    requestPasswordReset,
    sendResetCode,
    sendRegisterCode
  }
})
