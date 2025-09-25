<template>
  <div
    v-if="visible"
    class="connectivity-banner"
    role="status"
    aria-live="polite"
  >
    <div class="connectivity-banner__inner container">
      <div class="connectivity-banner__copy">
        <p class="connectivity-banner__title">{{ title }}</p>
        <p class="connectivity-banner__detail" :title="errorDetail || undefined">{{ detail }}</p>
        <p v-if="lastCheckedLabel" class="connectivity-banner__meta">{{ lastCheckedLabel }}</p>
      </div>
      <button
        type="button"
        class="button button--ghost connectivity-banner__action"
        :disabled="checking"
        @click="retry"
      >
        <span v-if="!checking">{{ retryLabel }}</span>
        <span v-else>{{ checkingLabel }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { useSiteStore } from '@/stores/site'

const site = useSiteStore()
const { connectivityStatus, connectivityError, connectivityLastChecked } = storeToRefs(site)
const { t } = useI18n()

const checking = computed(() => connectivityStatus.value === 'checking')
const offline = computed(() => connectivityStatus.value === 'offline')
const visible = computed(() => checking.value || offline.value)

const title = computed(() =>
  checking.value
    ? t('web.system.connectivity.checking')
    : t('web.system.connectivity.offline')
)

const detail = computed(() =>
  checking.value
    ? t('web.system.connectivity.checkingDetail')
    : t('web.system.connectivity.offlineDetail')
)

const errorDetail = computed(() => (!checking.value ? connectivityError.value : ''))

const lastCheckedLabel = computed(() => {
  if (!connectivityLastChecked.value || checking.value) return ''
  try {
    const formatted = new Date(connectivityLastChecked.value).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    })
    return t('web.system.connectivity.lastChecked', { time: formatted })
  } catch (error) {
    return ''
  }
})

const retryLabel = computed(() => t('web.system.connectivity.retry'))
const checkingLabel = computed(() => t('web.system.connectivity.checking'))

const retry = () => {
  site.retryConnectivity()
}
</script>

<style scoped>
.connectivity-banner {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.14), rgba(168, 85, 247, 0.08));
  border-bottom: 1px solid rgba(148, 163, 184, 0.35);
  color: #0f172a;
}

.connectivity-banner__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding-block: 14px;
}

.connectivity-banner__copy {
  display: grid;
  gap: 6px;
}

.connectivity-banner__title {
  margin: 0;
  font-weight: 600;
  font-size: 0.95rem;
}

.connectivity-banner__detail {
  margin: 0;
  font-size: 0.85rem;
  color: #1f2937;
}

.connectivity-banner__meta {
  margin: 0;
  font-size: 0.75rem;
  color: #475569;
}

.connectivity-banner__action {
  min-width: 120px;
}

.connectivity-banner__action:disabled {
  opacity: 0.7;
  cursor: wait;
}

@media (max-width: 720px) {
  .connectivity-banner__inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .connectivity-banner__action {
    width: 100%;
  }
}
</style>
