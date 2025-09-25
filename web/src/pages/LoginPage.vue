<template>
  <section class="auth-page">
    <div class="auth-page__intro">
      <h1>{{ t('web.pages.login.title') }}</h1>
      <p>{{ t('web.pages.login.description') }}</p>
      <ul>
        <li v-for="item in bullets" :key="item">{{ item }}</li>
      </ul>
    </div>
    <LoginForm />
  </section>
</template>

<script setup>
import LoginForm from '@/components/forms/LoginForm.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { usePageMeta } from '@/composables/usePageMeta'

const { t, tm } = useI18n()

usePageMeta({
  titleKey: 'web.pages.login.title',
  descriptionKey: 'web.pages.login.description'
})

const bullets = computed(() => {
  const list = tm('web.pages.login.bullets')
  return Array.isArray(list) ? list : []
})
</script>

<style scoped>
.auth-page {
  padding: 120px 5vw;
  display: grid;
  gap: 48px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  align-items: center;
}

.auth-page__intro h1 {
  font-size: clamp(2.4rem, 3vw, 3rem);
  color: #0f172a;
  margin-bottom: 16px;
}

.auth-page__intro p {
  color: #475569;
  line-height: 1.7;
}

.auth-page__intro ul {
  margin-top: 24px;
  display: grid;
  gap: 12px;
  color: #1e293b;
  font-weight: 600;
}

.auth-page__intro li::before {
  content: '✓';
  margin-right: 8px;
  color: #6366f1;
}
</style>
