<template>
  <article :class="['reward-card', locked ? 'reward-card--locked' : null]">
    <img :src="image" :alt="title" />
    <div class="reward-card__body">
      <span class="reward-card__category">{{ category }}</span>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <div class="reward-card__meta">
        <span class="reward-card__points">{{ pointsLabel }}</span>
        <button
          class="button button--ghost reward-card__button"
          :class="{
            'reward-card__button--locked': locked,
            'reward-card__button--loading': loading
          }"
          :disabled="disabled || loading"
          :aria-disabled="locked ? 'true' : undefined"
          :aria-busy="loading ? 'true' : undefined"
          type="button"
          @click="$emit('redeem')"
        >
          {{ buttonLabel }}
        </button>
      </div>
      <p v-if="lockReason" class="reward-card__notice">{{ lockReason }}</p>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  title: String,
  description: String,
  points: [String, Number],
  image: String,
  category: String,
  disabled: {
    type: Boolean,
    default: false
  },
  cash: {
    type: [String, Number],
    default: 0
  },
  currency: {
    type: String,
    default: 'THB'
  },
  loading: {
    type: Boolean,
    default: false
  },
  locked: {
    type: Boolean,
    default: false
  },
  lockReason: {
    type: String,
    default: ''
  },
  actionLabel: {
    type: String,
    default: ''
  }
})

const { t } = useI18n()

const formatNumber = (value) => {
  const number = Number(value)
  if (Number.isNaN(number)) return value || '0'
  return number.toLocaleString()
}

const pointsLabel = computed(() => {
  const points = formatNumber(props.points)
  const cash = Number(props.cash)
  if (!Number.isNaN(cash) && cash > 0) {
    return t('web.pages.rewards.pointsCashLabel', {
      points,
      cash: formatNumber(cash),
      currency: props.currency || 'THB'
    })
  }
  return t('web.pages.rewards.pointsLabel', { count: points })
})

const redeemLabel = computed(() => t('web.pages.rewards.redeem'))
const lockedLabel = computed(() => t('web.pages.rewards.lockedLabel'))
const redeemingLabel = computed(() => t('web.pages.rewards.redeeming'))

const buttonLabel = computed(() => {
  if (props.locked) {
    return lockedLabel.value
  }
  if (props.loading) {
    return redeemingLabel.value
  }
  return props.actionLabel || redeemLabel.value
})
</script>

<style scoped>
.reward-card {
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 48px rgba(15, 23, 42, 0.08);
  display: grid;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.reward-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.reward-card__body {
  padding: 24px;
  display: grid;
  gap: 12px;
}

.reward-card__category {
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  font-weight: 600;
  text-transform: uppercase;
  color: #6366f1;
}

.reward-card h3 {
  font-size: 1.3rem;
  color: #0f172a;
}

.reward-card p {
  color: #475569;
  line-height: 1.6;
}

.reward-card__meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.reward-card__points {
  font-weight: 700;
  color: #0f172a;
}

.reward-card__button {
  min-width: 132px;
}

.reward-card__button--locked {
  background: rgba(148, 163, 184, 0.16);
  color: #475569;
  cursor: not-allowed;
}

.reward-card__button--loading {
  cursor: progress;
}

.reward-card__notice {
  margin-top: 8px;
  color: #475569;
  font-size: 0.9rem;
}

.reward-card--locked {
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.06);
  transform: translateY(2px);
}

.reward-card--locked .reward-card__points {
  color: #64748b;
}

@media (hover: hover) {
  .reward-card:not(.reward-card--locked):hover {
    transform: translateY(-6px);
    box-shadow: 0 28px 70px rgba(15, 23, 42, 0.12);
  }
}
</style>
