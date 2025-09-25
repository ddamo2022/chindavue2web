<template>
  <section class="membership-page">
    <header class="membership-page__header">
      <h1>{{ t('web.pages.membership.title') }}</h1>
      <p>{{ t('web.pages.membership.description') }}</p>
      <p v-if="loading" class="membership-page__hint">{{ t('web.pages.membership.loading') }}</p>
    </header>
    <div class="membership-page__tiers">
      <article v-for="tier in displayTiers" :key="tier.name" class="membership-tier">
        <div class="membership-tier__header">
          <h2>{{ tier.name }}</h2>
          <span v-if="tier.pointsLabel">{{ tier.pointsLabel }}</span>
        </div>
        <p>{{ tier.description }}</p>
        <ul>
          <li v-for="perk in tier.perks" :key="perk">{{ perk }}</li>
        </ul>
        <RouterLink to="/register" class="button button--ghost">{{ t('web.pages.membership.activate') }}</RouterLink>
      </article>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useMemberStore } from '@/stores/member'
import { useI18n } from 'vue-i18n'
import { usePageMeta } from '@/composables/usePageMeta'

const member = useMemberStore()
const { tiers, tiersLoading } = storeToRefs(member)
const { t, tm } = useI18n()

usePageMeta({
  titleKey: 'web.pages.membership.title',
  descriptionKey: 'web.pages.membership.description'
})

const fallbackTiers = computed(() => {
  const tiers = tm('web.pages.membership.fallbackTiers')
  return Array.isArray(tiers)
    ? tiers.map((tier) => ({
        name: tier.name,
        pointsLabel: tier.points,
        description: tier.description,
        perks: Array.isArray(tier.perks) ? tier.perks : []
      }))
    : []
})

const normalizePerks = (tier) => {
  const perks = []
  const power = tier.power || {}
  if (tier.balanceSwitch && power.balance?.showName) perks.push(power.balance.showName)
  if (tier.integralSwitch && power.integral?.showName) perks.push(power.integral.showName)
  if (tier.couponSwitch && Array.isArray(tier.couponGive)) {
    tier.couponGive.forEach((coupon) => {
      perks.push(coupon.name)
    })
  }
  if (tier.discountSwitch && power.discount?.showName) perks.push(power.discount.showName)
  if (tier.integralMultiplierSwitch && power.integralMultiplier?.showName) {
    perks.push(power.integralMultiplier.showName)
  }
  if (tier.freeMailSwitch && power.freeMail?.showName) perks.push(power.freeMail.showName)
  if (Array.isArray(tier.extPowerData)) {
    tier.extPowerData.forEach((item) => {
      if (item?.showName || item?.name) {
        perks.push(item.showName || item.name)
      }
    })
  }
  if (perks.length) return perks
  const fallbackPerks = [
    t('web.pages.membership.fallbackPerks.priority'),
    t('web.pages.membership.fallbackPerks.seasonal')
  ].filter((entry) => entry && entry !== 'web.pages.membership.fallbackPerks.priority' && entry !== 'web.pages.membership.fallbackPerks.seasonal')
  return fallbackPerks.length ? fallbackPerks : []
}

const normalizedTiers = computed(() => {
  if (!tiers.value || !tiers.value.length) return []
  return tiers.value.map((tier) => ({
    name: tier.name || tier.levelName || t('web.pages.membership.fallbackDefaults.name'),
    pointsLabel:
      tier.exp || tier.upgrade
        ? t('web.pages.membership.fallbackDefaults.points', { count: tier.exp || tier.upgrade })
        : tier.level
        ? t('web.pages.membership.fallbackDefaults.level', { level: tier.level })
        : '',
    description:
      tier.describe ||
      tier.description ||
      t('web.pages.membership.fallbackDefaults.description'),
    perks: normalizePerks(tier)
  }))
})

const displayTiers = computed(() => (normalizedTiers.value.length ? normalizedTiers.value : fallbackTiers.value))
const loading = computed(() => tiersLoading.value)

onMounted(() => {
  member.loadTiers().catch(() => {})
})
</script>

<style scoped>
.membership-page {
  padding: 120px 5vw 80px;
  display: grid;
  gap: 48px;
}

.membership-page__header {
  max-width: 760px;
}

.membership-page__hint {
  font-weight: 600;
  color: #6366f1;
}

.membership-page__header h1 {
  font-size: clamp(2.6rem, 3.4vw, 3.2rem);
  color: #0f172a;
}

.membership-page__header p {
  color: #475569;
  line-height: 1.7;
  margin-top: 16px;
}

.membership-page__tiers {
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.membership-tier {
  background: #ffffff;
  border-radius: 32px;
  padding: 32px;
  display: grid;
  gap: 18px;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.08);
}

.membership-tier__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.membership-tier__header h2 {
  font-size: 1.8rem;
  color: #312e81;
}

.membership-tier__header span {
  background: rgba(99, 102, 241, 0.12);
  color: #3730a3;
  padding: 6px 12px;
  border-radius: 999px;
  font-weight: 600;
}

.membership-tier ul {
  display: grid;
  gap: 10px;
  color: #1f2937;
  font-weight: 500;
}

.membership-tier li::before {
  content: '•';
  margin-right: 8px;
  color: #6366f1;
}
</style>
