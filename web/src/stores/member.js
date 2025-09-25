import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'
import { memberApi } from '@/api/client'
import { useSiteStore } from './site'

const normalizeMember = (payload) => payload?.userInfo || payload || null

export const useMemberStore = defineStore('member', () => {
  const site = useSiteStore()

  const profile = ref(null)
  const profileLoading = ref(false)

  const ledger = ref([])
  const ledgerState = reactive({
    page: 1,
    size: 10,
    hasMore: true,
    loading: false
  })

  const tiers = ref([])
  const tiersLoading = ref(false)

  const loadProfile = async ({ silent = false } = {}) => {
    if (profileLoading.value) return profile.value
    profileLoading.value = true
    try {
      const data = await memberApi.profile()
      profile.value = normalizeMember(data)
      return profile.value
    } catch (error) {
      if (!silent) {
        site.notify({
          title: 'Unable to load profile',
          message: error.message || 'Please try again later.',
          tone: 'error'
        })
      }
      throw error
    } finally {
      profileLoading.value = false
    }
  }

  const resetLedger = () => {
    ledger.value = []
    ledgerState.page = 1
    ledgerState.hasMore = true
  }

  const loadLedger = async ({ reset = false } = {}) => {
    if (ledgerState.loading) return []
    if (reset) {
      resetLedger()
    }
    if (!ledgerState.hasMore) return []

    ledgerState.loading = true
    try {
      const data = await memberApi.pointsLog({ page: ledgerState.page, size: ledgerState.size })
      const list = Array.isArray(data?.list) ? data.list : []
      ledger.value = reset || ledgerState.page === 1 ? list : [...ledger.value, ...list]
      ledgerState.hasMore = list.length >= ledgerState.size
      if (ledgerState.hasMore) {
        ledgerState.page += 1
      }
      return list
    } finally {
      ledgerState.loading = false
    }
  }

  const loadTiers = async () => {
    if (tiersLoading.value) return tiers.value
    tiersLoading.value = true
    try {
      const data = await memberApi.tiers()
      tiers.value = Array.isArray(data) ? data : Array.isArray(data?.list) ? data.list : []
      return tiers.value
    } finally {
      tiersLoading.value = false
    }
  }

  const pointsBalance = computed(() => Number(profile.value?.integral || profile.value?.points || 0))
  const storedValueBalance = computed(() => Number(profile.value?.balance || 0))

  const clear = () => {
    profile.value = null
    resetLedger()
    tiers.value = []
  }

  return {
    profile,
    profileLoading,
    ledger,
    ledgerState,
    tiers,
    tiersLoading,
    pointsBalance,
    storedValueBalance,
    loadProfile,
    loadLedger,
    loadTiers,
    resetLedger,
    clear
  }
})
