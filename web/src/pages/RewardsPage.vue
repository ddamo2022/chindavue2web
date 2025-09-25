<template>
  <section class="rewards-page">
    <header>
      <h1>{{ t('web.pages.rewards.title') }}</h1>
      <p>{{ t('web.pages.rewards.description') }}</p>
      <div class="rewards-page__summary">
        <template v-if="isAuthenticated">
          <p>
            <span v-if="summaryLoading">{{ t('web.pages.rewards.balanceLoading') }}</span>
            <span v-else>{{ t('web.pages.rewards.balanceLabel', { count: formattedBalance }) }}</span>
          </p>
          <RouterLink to="/dashboard" class="rewards-page__link">
            {{ t('web.pages.rewards.viewDashboard') }}
          </RouterLink>
        </template>
        <template v-else>
          <p>{{ t('web.pages.rewards.signInPrompt') }}</p>
          <RouterLink to="/login" class="button button--ghost">
            {{ t('web.pages.rewards.signInButton') }}
          </RouterLink>
        </template>
      </div>
      <div class="rewards-page__filters">
        <label>
          <span>{{ t('web.pages.rewards.filters.category') }}</span>
          <select v-model="filters.category" :disabled="categoriesLoading">
            <option value="">{{ t('web.pages.rewards.filters.categoryAll') }}</option>
            <option v-for="category in categories" :key="category.id" :value="category.id">
              {{ category.name }}
            </option>
          </select>
        </label>
        <label>
          <span>{{ t('web.pages.rewards.filters.maxPoints') }}</span>
          <input type="number" v-model.number="filters.maxPoints" min="0" />
        </label>
        <button class="button button--ghost" @click="loadRewards" :disabled="loading">
          <span v-if="!loading">{{ t('web.pages.rewards.filters.apply') }}</span>
          <span v-else>{{ t('web.pages.rewards.loading') }}</span>
        </button>
      </div>
    </header>

    <div class="rewards-page__grid">
      <RewardCard
        v-for="reward in catalog"
        :key="reward.id"
        :title="reward.title"
        :description="reward.description"
        :image="reward.image"
        :points="reward.points"
        :cash="reward.cash"
        :currency="reward.currency"
        :category="reward.category"
        :locked="reward.locked"
        :lock-reason="reward.lockReason"
        :loading="redeeming === reward.id"
        :action-label="actionLabel"
        :disabled="redeeming === reward.id"
        @redeem="redeemReward(reward)"
      />
    </div>
    <p v-if="!rewards.length && !loading" class="rewards-page__empty">
      {{ t('web.pages.rewards.empty') }}
    </p>
  </section>
</template>

<script setup>
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import RewardCard from '@/components/cards/RewardCard.vue'
import { rewardsApi, memberApi } from '@/api/client'
import { useSiteStore } from '@/stores/site'
import { useAuthStore } from '@/stores/auth'
import { useMemberStore } from '@/stores/member'
import { useI18n } from 'vue-i18n'
import { usePageMeta } from '@/composables/usePageMeta'

const site = useSiteStore()
const auth = useAuthStore()
const member = useMemberStore()
const router = useRouter()
const { isAuthenticated } = storeToRefs(auth)
const { profile, pointsBalance, profileLoading } = storeToRefs(member)
const rewards = ref([])
const categories = ref([])
const placeholder = '/reward-placeholder.svg'
const filters = reactive({
  category: '',
  maxPoints: ''
})
const loading = ref(false)
const categoriesLoading = ref(false)
const redeeming = ref('')
const { t } = useI18n()

usePageMeta({
  titleKey: 'web.pages.rewards.title',
  descriptionKey: 'web.pages.rewards.description'
})

const loadCategories = async () => {
  try {
    categoriesLoading.value = true
    const data = await rewardsApi.categories()
    categories.value = Array.isArray(data?.list) ? data.list : Array.isArray(data) ? data : []
  } catch (error) {
    console.warn('Failed to load categories', error)
  } finally {
    categoriesLoading.value = false
  }
}

const loadRewards = async () => {
  try {
    loading.value = true
    const params = {}
    if (filters.category) params.category_id = filters.category
    if (filters.maxPoints) params.max_points = filters.maxPoints
    const data = await rewardsApi.catalog(params)
    rewards.value = Array.isArray(data?.list) ? data.list : Array.isArray(data) ? data : []
  } catch (error) {
    console.warn('Failed to load rewards', error)
  } finally {
    loading.value = false
  }
}

const summaryLoading = computed(() => isAuthenticated.value && profileLoading.value)
const formattedBalance = computed(() => pointsBalance.value.toLocaleString())

const formatNumber = (value) => {
  const number = Number(value)
  if (Number.isNaN(number)) return 0
  return number
}

const resolveRewardId = (reward) =>
  reward?.id ??
  reward?.goods_id ??
  reward?.goodsId ??
  reward?.good_id ??
  reward?.product_id ??
  reward?.spu_id ??
  null

const catalog = computed(() =>
  rewards.value.map((entry, index) => {
    const id = resolveRewardId(entry) || `reward-${index}`
    const points = formatNumber(entry.integral ?? entry.points ?? entry.integralnum ?? entry.score)
    const cash = formatNumber(entry.money ?? entry.cash ?? 0)
    const currency = entry.currency || entry.money_unit || 'THB'
    const title = entry.name || entry.title || t('web.pages.rewards.categoryFallback')
    const description = entry.intro || entry.description || entry.desc || ''
    const category =
      entry.category?.name ||
      entry.category_name ||
      entry.category ||
      entry.type_name ||
      t('web.pages.rewards.categoryFallback')
    const image = entry.cover || entry.icon || entry.image || entry.pic || placeholder
    const locked = Boolean(isAuthenticated.value && points > pointsBalance.value)
    const shortfall = Math.max(points - pointsBalance.value, 0)
    const lockReason = locked
      ? t('web.pages.rewards.lockedInsufficient', { shortfall: shortfall.toLocaleString() })
      : ''
    return {
      id,
      raw: entry,
      title,
      description,
      category,
      image,
      points,
      cash,
      currency,
      locked,
      lockReason
    }
  })
)

const actionLabel = computed(() =>
  isAuthenticated.value ? t('web.pages.rewards.redeem') : t('web.pages.rewards.signInButton')
)

const redeemReward = async (reward) => {
  if (!isAuthenticated.value) {
    site.notify({
      title: t('web.notifications.signInRequired.title'),
      message: t('web.notifications.signInRequired.message'),
      tone: 'neutral'
    })
    router.push({ name: 'login', query: { redirect: '/rewards' } })
    return
  }
  if (reward.locked) {
    site.notify({
      title: t('web.notifications.insufficientPoints.title'),
      message: t('web.notifications.insufficientPoints.message', {
        needed: reward.points.toLocaleString()
      }),
      tone: 'warning'
    })
    return
  }
  const rewardId = resolveRewardId(reward.raw)
  if (!rewardId) {
    site.notify({
      title: t('web.notifications.redeemFailed.title'),
      message: t('web.notifications.redeemFailed.message'),
      tone: 'error'
    })
    return
  }
  try {
    redeeming.value = reward.id
    await memberApi.redeem({ reward_id: rewardId })
    site.notify({
      title: t('web.notifications.redeemSuccess.title'),
      message: t('web.notifications.redeemSuccess.message', { name: reward.title }),
      tone: 'success'
    })
    member.loadProfile({ silent: true }).catch(() => {})
    member.loadRedemptions({ reset: true }).catch(() => {})
  } catch (error) {
    site.notify({
      title: t('web.notifications.redeemFailed.title'),
      message: t('web.notifications.redeemFailed.message'),
      tone: 'error'
    })
  } finally {
    redeeming.value = ''
  }
}

onMounted(async () => {
  if (isAuthenticated.value && !profile.value) {
    member.loadProfile({ silent: true }).catch(() => {})
  }
  if (isAuthenticated.value) {
    member.loadRedemptions({ reset: true }).catch(() => {})
  }
  await Promise.all([loadCategories(), loadRewards()])
})

watch(
  () => isAuthenticated.value,
  (value) => {
    if (value) {
      member.loadProfile({ silent: true }).catch(() => {})
      member.loadRedemptions({ reset: true }).catch(() => {})
    } else {
      redeeming.value = ''
    }
  }
)

</script>

<style scoped>
.rewards-page {
  padding: 120px 5vw 80px;
  display: grid;
  gap: 40px;
}

.rewards-page header {
  display: grid;
  gap: 18px;
  max-width: 840px;
}

.rewards-page h1 {
  font-size: clamp(2.4rem, 3.2vw, 3.1rem);
  color: #0f172a;
}

.rewards-page p {
  color: #475569;
  line-height: 1.7;
}

.rewards-page__summary {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  align-items: center;
}

.rewards-page__summary p {
  margin: 0;
  font-weight: 600;
  color: #0f172a;
}

.rewards-page__link {
  font-weight: 600;
  color: #6366f1;
}

.rewards-page__filters {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  align-items: flex-end;
}

.rewards-page__filters label {
  display: grid;
  gap: 8px;
  font-weight: 600;
  color: #475569;
}

select,
input[type='number'] {
  border-radius: 14px;
  border: 1px solid rgba(148, 163, 184, 0.4);
  padding: 12px 16px;
  min-width: 200px;
}

.rewards-page__grid {
  display: grid;
  gap: 28px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.rewards-page__empty {
  font-weight: 600;
  color: #6366f1;
}
</style>
