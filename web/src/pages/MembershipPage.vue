<template>
  <section class="membership-page">
    <header class="membership-page__header">
      <h1>Membership experience</h1>
      <p>
        Visualize tier journeys, benefits, and upgrade mechanics sourced directly from the Uni-app
        membership APIs. Customize copy, imagery, and reward structures to align with local market
        stories while keeping backend logic in sync.
      </p>
      <p v-if="loading" class="membership-page__hint">Loading membership tiers…</p>
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
        <RouterLink to="/register" class="button button--ghost">Activate</RouterLink>
      </article>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useMemberStore } from '@/stores/member'

const member = useMemberStore()
const { tiers, tiersLoading } = storeToRefs(member)

const fallbackTiers = [
  {
    name: 'Lapis',
    pointsLabel: 'Entry tier',
    description: 'Ignite curiosity with welcome drinks, curated playlists, and tasting notes.',
    perks: ['Birthday surprise', 'Access to tasting events', 'Member-only menu content']
  },
  {
    name: 'Obsidian',
    pointsLabel: '4,000+ points',
    description: 'Elevate regular visits with seasonal pairings, mixology labs, and chef intros.',
    perks: ['Chef table reservations', 'Sommelier concierge', 'Monthly mixology labs']
  },
  {
    name: 'Aurora',
    pointsLabel: 'Invite only',
    description: 'Craft unforgettable evenings with cellar access and behind-the-scenes collaborations.',
    perks: ['Private cellar evenings', 'Menu co-creation', 'Dedicated lifestyle concierge']
  }
]

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
  return perks.length ? perks : ['Priority reservations', 'Seasonal tasting invitations']
}

const normalizedTiers = computed(() => {
  if (!tiers.value || !tiers.value.length) return []
  return tiers.value.map((tier) => ({
    name: tier.name || tier.levelName || 'Membership tier',
    pointsLabel:
      tier.exp || tier.upgrade ? `${tier.exp || tier.upgrade}+ pts` : tier.level ? `Level ${tier.level}` : '',
    description:
      tier.describe ||
      tier.description ||
      'Unlock elevated hospitality moments curated around your preferences.',
    perks: normalizePerks(tier)
  }))
})

const displayTiers = computed(() => (normalizedTiers.value.length ? normalizedTiers.value : fallbackTiers))
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
