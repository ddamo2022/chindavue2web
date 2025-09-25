<template>
  <section v-if="items.length" class="press section section--compact">
    <div class="press__inner container">
      <header class="press__header">
        <h2>{{ title }}</h2>
        <p v-if="description">{{ description }}</p>
      </header>
      <div class="press__grid">
        <article v-for="mention in items" :key="mention.id" class="press__card">
          <div class="press__card-head">
            <span class="press__outlet">{{ mention.outlet }}</span>
            <span v-if="mention.badge" class="press__badge">{{ mention.badge }}</span>
          </div>
          <p class="press__summary">{{ mention.summary }}</p>
          <footer class="press__footer">
            <span v-if="mention.date" class="press__date">{{ mention.date }}</span>
            <a
              v-if="mention.href"
              :href="mention.href"
              class="press__link"
              :target="mention.external ? '_blank' : undefined"
              :rel="mention.external ? 'noopener' : undefined"
            >
              {{ ctaLabel }}
            </a>
          </footer>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { useContentStore } from '@/stores/content'

const content = useContentStore()
const { pressMentions, pressMeta } = storeToRefs(content)
const { t } = useI18n()

const title = computed(() => pressMeta.value.title || t('web.pages.home.press.title'))
const description = computed(
  () => pressMeta.value.description || t('web.pages.home.press.description')
)
const ctaLabel = computed(() => t('web.pages.home.press.cta'))

const items = computed(() =>
  (pressMentions.value || []).map((entry, index) => ({
    id: `${entry.outlet || 'press'}-${index}`,
    outlet: entry.outlet,
    summary: entry.summary,
    href: entry.href,
    badge: entry.badge,
    date: entry.date,
    external: entry.external
  }))
)
</script>

<style scoped>
.press__inner {
  display: grid;
  gap: 32px;
}

.press__header {
  max-width: 820px;
  display: grid;
  gap: 12px;
}

.press__header h2 {
  font-size: clamp(2rem, 2.8vw, 2.5rem);
  color: #0f172a;
}

.press__header p {
  color: #475569;
  line-height: 1.7;
}

.press__grid {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.press__card {
  background: #ffffff;
  border-radius: 28px;
  padding: 28px;
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.12);
  display: grid;
  gap: 16px;
  border: 1px solid rgba(99, 102, 241, 0.08);
}

.press__card-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.press__outlet {
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #312e81;
}

.press__badge {
  padding: 4px 12px;
  border-radius: 999px;
  background: rgba(99, 102, 241, 0.12);
  color: #4338ca;
  font-size: 0.75rem;
  font-weight: 600;
}

.press__summary {
  margin: 0;
  color: #1f2937;
  line-height: 1.6;
}

.press__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.press__date {
  color: #64748b;
  font-size: 0.9rem;
}

.press__link {
  color: #6366f1;
  font-weight: 600;
  text-decoration: none;
}

.press__link:hover,
.press__link:focus {
  text-decoration: underline;
}
</style>
