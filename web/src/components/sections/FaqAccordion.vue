<template>
  <section class="faq" :aria-labelledby="titleId">
    <header class="faq__header">
      <h2 :id="titleId">{{ t('web.pages.support.faq.title') }}</h2>
      <p>{{ t('web.pages.support.faq.description') }}</p>
    </header>
    <div v-if="faqs.length" class="faq__list">
      <details v-for="item in faqs" :key="item.question" class="faq__item">
        <summary>
          <span>{{ item.question }}</span>
          <span class="faq__icon" aria-hidden="true">+</span>
        </summary>
        <p>{{ item.answer }}</p>
      </details>
    </div>
    <p v-else class="faq__empty">{{ t('web.pages.support.faq.empty') }}</p>
  </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { useContentStore } from '@/stores/content'

const { t } = useI18n()
const content = useContentStore()
const { faqs } = storeToRefs(content)
const titleId = 'faq-' + Math.random().toString(36).slice(2)
</script>

<style scoped>
.faq {
  display: grid;
  gap: 32px;
}

.faq__header {
  display: grid;
  gap: 12px;
  max-width: 720px;
}

.faq h2 {
  font-size: clamp(1.8rem, 2.6vw, 2.4rem);
  color: #0f172a;
}

.faq__header p {
  color: #475569;
  line-height: 1.6;
}

.faq__list {
  display: grid;
  gap: 16px;
}

.faq__item {
  background: #ffffff;
  border-radius: 20px;
  padding: 20px 24px;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
  transition: border 0.2s ease;
}

.faq__item[open] {
  border: 1px solid rgba(99, 102, 241, 0.4);
}

summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-weight: 600;
  color: #1f2937;
  list-style: none;
}

summary::-webkit-details-marker {
  display: none;
}

summary:focus {
  outline: none;
}

.faq__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(99, 102, 241, 0.16);
  color: #312e81;
  font-weight: 700;
}

.faq__item[open] .faq__icon {
  transform: rotate(45deg);
}

.faq__item p {
  margin-top: 12px;
  color: #475569;
  line-height: 1.6;
}

.faq__empty {
  color: #6366f1;
  font-weight: 600;
}
</style>
