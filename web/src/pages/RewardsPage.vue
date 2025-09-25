<template>
  <section class="rewards-page">
    <header>
      <h1>{{ t('web.pages.rewards.title') }}</h1>
      <p>{{ t('web.pages.rewards.description') }}</p>
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
        v-for="reward in rewards"
        :key="reward.id"
        :title="reward.name"
        :description="reward.intro"
        :image="reward.cover || placeholder"
        :points="reward.points"
        :category="reward.category?.name || reward.category || t('web.pages.rewards.categoryFallback')"
        :disabled="!isAuthenticated"
        @redeem="redeemReward(reward)"
      />
    </div>
    <p v-if="!rewards.length && !loading" class="rewards-page__empty">
      {{ t('web.pages.rewards.empty') }}
    </p>
  </section>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
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
const rewards = ref([])
const categories = ref([])
const placeholder = '/reward-placeholder.svg'
const filters = reactive({
  category: '',
  maxPoints: ''
})
const loading = ref(false)
const categoriesLoading = ref(false)
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
  try {
    await memberApi.redeem({ reward_id: reward.id })
    site.notify({
      title: t('web.notifications.redeemSuccess.title'),
      message: t('web.notifications.redeemSuccess.message', { name: reward.name }),
      tone: 'success'
    })
    member.loadProfile({ silent: true }).catch(() => {})
  } catch (error) {
    site.notify({
      title: t('web.notifications.redeemFailed.title'),
      message: t('web.notifications.redeemFailed.message'),
      tone: 'error'
    })
  }
}

onMounted(async () => {
  await Promise.all([loadCategories(), loadRewards()])
})

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
