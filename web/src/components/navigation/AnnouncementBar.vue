<template>
  <transition name="announcement">
    <div
      v-if="announcement"
      :class="['announcement', `announcement--${announcement.tone}`]"
      role="status"
      aria-live="polite"
    >
      <div class="announcement__content">
        <span v-if="announcement.icon" class="announcement__icon" aria-hidden="true">
          {{ announcement.icon }}
        </span>
        <p class="announcement__message">{{ announcement.message }}</p>
        <component
          v-if="ctaProps"
          :is="ctaProps.component"
          v-bind="ctaProps.attrs"
          class="announcement__cta"
          :class="ctaProps.variant === 'primary' ? 'button button--primary' : 'button button--ghost'"
        >
          {{ ctaProps.label }}
        </component>
      </div>
      <button
        v-if="announcement.dismissible"
        class="announcement__close"
        type="button"
        @click="dismiss"
        aria-label="Dismiss announcement"
      >
        ×
      </button>
    </div>
  </transition>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useSiteStore } from '@/stores/site'

const site = useSiteStore()
const { announcement } = storeToRefs(site)

const ctaProps = computed(() => {
  const value = announcement.value
  if (!value?.cta) return null
  if (value.cta.to) {
    return {
      component: RouterLink,
      attrs: { to: value.cta.to },
      label: value.cta.label,
      variant: value.cta.variant || 'ghost'
    }
  }
  if (value.cta.href) {
    return {
      component: 'a',
      attrs: {
        href: value.cta.href,
        target: value.cta.external ? '_blank' : undefined,
        rel: value.cta.external ? 'noopener' : undefined
      },
      label: value.cta.label,
      variant: value.cta.variant || 'ghost'
    }
  }
  return null
})

const dismiss = () => {
  if (announcement.value) {
    site.dismissAnnouncement(announcement.value.id)
  }
}
</script>

<style scoped>
.announcement-enter-active,
.announcement-leave-active {
  transition: all 0.25s ease;
}

.announcement-enter-from,
.announcement-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.announcement {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 14px 5vw;
  font-size: 0.95rem;
  color: #0f172a;
}

.announcement__content {
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
}

.announcement__icon {
  font-size: 1.2rem;
}

.announcement__message {
  margin: 0;
  line-height: 1.5;
}

.announcement__cta {
  margin-left: auto;
}

.announcement__close {
  background: transparent;
  border: none;
  color: inherit;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  padding: 4px;
}

.announcement--info {
  background: rgba(148, 163, 184, 0.18);
}

.announcement--success {
  background: rgba(34, 197, 94, 0.18);
}

.announcement--warning {
  background: rgba(250, 204, 21, 0.22);
}

.announcement--danger {
  background: rgba(248, 113, 113, 0.2);
}

.announcement--promo {
  background: linear-gradient(90deg, rgba(99, 102, 241, 0.18), rgba(168, 85, 247, 0.24));
}

@media (max-width: 720px) {
  .announcement {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .announcement__content {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .announcement__cta {
    margin-left: 0;
  }

  .announcement__close {
    align-self: flex-end;
  }
}
</style>
