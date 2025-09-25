<template>
  <a class="skip-nav" href="#main-content">{{ t('web.accessibility.skipToContent') }}</a>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.skip-nav {
  position: fixed;
  left: 50%;
  top: -64px;
  transform: translateX(-50%);
  background: var(--color-surface, #ffffff);
  color: var(--color-ink, #0f172a);
  padding: 12px 20px;
  border-radius: 999px;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.2);
  font-weight: 600;
  z-index: 40;
  transition: top 0.2s ease, opacity 0.2s ease;
  opacity: 0;
}

.skip-nav:focus-visible {
  top: 20px;
  opacity: 1;
}
</style>
