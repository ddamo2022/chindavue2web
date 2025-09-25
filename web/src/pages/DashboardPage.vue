<template>
  <section class="dashboard">
    <header class="dashboard__header">
      <h1>{{ t('web.pages.dashboard.title') }}</h1>
      <p>{{ t('web.pages.dashboard.description') }}</p>
      <div class="dashboard__actions">
        <button class="button button--primary" @click="refresh" :disabled="loading">
          {{ t('web.pages.dashboard.refresh') }}
        </button>
      </div>
    </header>

    <section class="dashboard__metrics">
      <MetricCard
        v-for="metric in metrics"
        :key="metric.title"
        :title="metric.title"
        :value="metric.value"
        :description="metric.description"
      />
    </section>

    <section class="dashboard__panels">
      <article class="panel">
        <h2>{{ t('web.pages.dashboard.ledger.title') }}</h2>
        <p>{{ t('web.pages.dashboard.ledger.description') }}</p>
        <table>
          <thead>
            <tr>
              <th>{{ t('web.pages.dashboard.ledger.headers.action') }}</th>
              <th>{{ t('web.pages.dashboard.ledger.headers.points') }}</th>
              <th>{{ t('web.pages.dashboard.ledger.headers.date') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="entry in ledgerPreview" :key="entry.id">
              <td>{{ entry.action }}</td>
              <td :class="['ledger-points', { 'ledger-points--positive': entry.points > 0 }]">
                {{ entry.pointsFormatted }}
              </td>
              <td>{{ entry.date }}</td>
            </tr>
            <tr v-if="!ledgerPreview.length && !ledgerLoading">
              <td colspan="3" class="dashboard__empty">{{ t('web.pages.dashboard.ledger.empty') }}</td>
            </tr>
            <tr v-if="ledgerLoading">
              <td colspan="3" class="dashboard__empty">{{ t('web.pages.dashboard.ledger.loading') }}</td>
            </tr>
          </tbody>
        </table>
      </article>
      <article class="panel">
        <h2>{{ t('web.pages.dashboard.roadmap.title') }}</h2>
        <p>{{ t('web.pages.dashboard.roadmap.description') }}</p>
        <ul class="roadmap">
          <li v-for="item in roadmap" :key="item.title">
            <span class="roadmap__badge" :class="`roadmap__badge--${item.status}`">{{ item.statusLabel }}</span>
            <div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </li>
        </ul>
      </article>
    </section>
  </section>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import MetricCard from '@/components/cards/MetricCard.vue'
import { useMemberStore } from '@/stores/member'
import { useAuthStore } from '@/stores/auth'
import { useI18n } from 'vue-i18n'
import { usePageMeta } from '@/composables/usePageMeta'

const member = useMemberStore()
const auth = useAuthStore()
const { profile, ledger, ledgerState, pointsBalance, storedValueBalance } = storeToRefs(member)
const { isAuthenticated } = storeToRefs(auth)
const { t, tm } = useI18n()

usePageMeta({
  titleKey: 'web.pages.dashboard.title',
  descriptionKey: 'web.pages.dashboard.description'
})

const currencyCode = computed(() => profile.value?.currency || 'THB')

const formatCurrency = (value) => {
  try {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: currencyCode.value }).format(Number(value || 0))
  } catch (error) {
    return `${Number(value || 0).toFixed(2)} ${currencyCode.value}`
  }
}

const formatPoints = (value) => {
  const number = Number(value || 0)
  return `${number > 0 ? '+' : ''}${number}`
}

const metrics = computed(() => {
  const tierName = profile.value?.vipCard?.name || t('web.pages.dashboard.metrics.tier.title')
  return [
    {
      title: t('web.pages.dashboard.metrics.points.title'),
      value: pointsBalance.value.toLocaleString(),
      description: t('web.pages.dashboard.metrics.points.description')
    },
    {
      title: t('web.pages.dashboard.metrics.storedValue.title'),
      value: formatCurrency(storedValueBalance.value),
      description: t('web.pages.dashboard.metrics.storedValue.description')
    },
    {
      title: t('web.pages.dashboard.metrics.tier.title'),
      value: tierName,
      description: t('web.pages.dashboard.metrics.tier.description')
    }
  ]
})

const ledgerFallbackAction = computed(() => t('web.pages.dashboard.ledger.fallbackAction'))

const ledgerPreview = computed(() => {
  if (!ledger.value) return []
  return ledger.value.slice(0, 6).map((entry) => ({
    id: entry.id || `${entry.behavior}_${entry.created_at}`,
    action: entry.behaviorFormat || entry.behavior || ledgerFallbackAction.value,
    points: Number(entry.value || entry.integral || 0),
    pointsFormatted: formatPoints(entry.value || entry.integral || 0),
    date: entry.created_at || entry.createdAt || ''
  }))
})

const roadmap = computed(() => {
  const items = tm('web.pages.dashboard.roadmap.items')
  const statusLabels = tm('web.pages.dashboard.roadmap.statusLabels') || {}
  if (!Array.isArray(items)) return []
  return items.map((item) => ({
    title: item.title,
    description: item.description,
    status: item.status,
    statusLabel: statusLabels[item.status] || item.status
  }))
})

const ledgerLoading = computed(() => ledgerState.value.loading)
const loading = computed(() => ledgerState.value.loading)

const refresh = async () => {
  if (!isAuthenticated.value) return
  await Promise.all([
    member.loadProfile({ silent: true }),
    member.loadLedger({ reset: true })
  ])
}

onMounted(() => {
  refresh()
})
</script>

<style scoped>
.dashboard {
  padding: 120px 5vw 80px;
  display: grid;
  gap: 48px;
}

.dashboard__header {
  max-width: 840px;
  display: grid;
  gap: 20px;
}

.dashboard__header h1 {
  font-size: clamp(2.4rem, 3.2vw, 3.1rem);
  color: #0f172a;
}

.dashboard__header p {
  color: #475569;
  line-height: 1.7;
}

.dashboard__actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.dashboard__metrics {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.dashboard__panels {
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}

.panel {
  background: #ffffff;
  border-radius: 28px;
  padding: 32px;
  display: grid;
  gap: 20px;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.08);
}

.panel table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}

.panel th,
.panel td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid rgba(148, 163, 184, 0.24);
}

.dashboard__empty {
  text-align: center;
  font-weight: 600;
  color: #6366f1;
}

.ledger-points {
  font-weight: 600;
  color: #dc2626;
}

.ledger-points--positive {
  color: #16a34a;
}

.roadmap {
  display: grid;
  gap: 16px;
}

.roadmap__badge {
  display: inline-flex;
  min-width: 90px;
  justify-content: center;
  padding: 4px 12px;
  border-radius: 999px;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 700;
}

.roadmap__badge--building {
  background: rgba(99, 102, 241, 0.2);
  color: #3730a3;
}

.roadmap__badge--design {
  background: rgba(249, 115, 22, 0.2);
  color: #9a3412;
}

.roadmap__badge--planned {
  background: rgba(14, 165, 233, 0.2);
  color: #0c4a6e;
}
</style>
