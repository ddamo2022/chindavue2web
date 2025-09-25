<template>
  <section class="not-found section">
    <div class="not-found__inner container">
      <p class="not-found__eyebrow">{{ t('web.pages.notFound.eyebrow') }}</p>
      <h1>{{ t('web.pages.notFound.title') }}</h1>
      <p class="not-found__description">{{ t('web.pages.notFound.description') }}</p>
      <RouterLink to="/" class="button button--primary button--lg">
        {{ t('web.pages.notFound.cta') }}
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { usePageMeta } from '@/composables/usePageMeta'

const { t } = useI18n()

usePageMeta({
  titleKey: 'web.pages.notFound.metaTitle',
  descriptionKey: 'web.pages.notFound.description'
})
</script>

<style scoped>
.not-found {
  display: flex;
  align-items: center;
  min-height: clamp(480px, 60vh, 640px);
  padding-block: clamp(80px, 18vh, 160px);
  background: radial-gradient(circle at top left, rgba(99, 102, 241, 0.12), transparent 55%),
    radial-gradient(circle at bottom right, rgba(14, 165, 233, 0.12), transparent 55%);
}

.not-found__inner {
  display: grid;
  gap: 24px;
  max-width: 640px;
}

.not-found__eyebrow {
  letter-spacing: 0.24em;
  text-transform: uppercase;
  font-weight: 600;
  color: #6366f1;
}

.not-found__inner h1 {
  font-size: clamp(2.6rem, 4vw, 3.4rem);
  font-weight: 700;
  color: #0f172a;
}

.not-found__description {
  font-size: 1.125rem;
  line-height: 1.9;
  color: #475569;
  max-width: 54ch;
}
</style>
