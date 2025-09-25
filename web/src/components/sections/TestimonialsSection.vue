<template>
  <section v-if="cards.length" class="testimonials section section--compact">
    <div class="testimonials__inner container">
      <header class="testimonials__header">
        <h2>{{ title }}</h2>
        <p v-if="description">{{ description }}</p>
      </header>
      <div class="testimonials__grid">
        <article v-for="card in cards" :key="card.id" class="testimonials__card">
          <div class="testimonials__icon" aria-hidden="true">“</div>
          <p class="testimonials__quote">{{ card.quote }}</p>
          <footer>
            <div class="testimonials__profile">
              <img
                v-if="card.avatar"
                :src="card.avatar"
                :alt="card.author"
                class="testimonials__avatar"
                loading="lazy"
              />
              <div>
                <p class="testimonials__author">{{ card.author }}</p>
                <p v-if="card.subtitle" class="testimonials__subtitle">{{ card.subtitle }}</p>
              </div>
            </div>
            <a
              v-if="card.href"
              :href="card.href"
              class="testimonials__link"
              :target="card.external ? '_blank' : undefined"
              :rel="card.external ? 'noopener' : undefined"
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
const { testimonials, testimonialsMeta } = storeToRefs(content)
const { t } = useI18n()

const title = computed(
  () => testimonialsMeta.value.title || t('web.pages.home.testimonials.title')
)
const description = computed(
  () => testimonialsMeta.value.description || t('web.pages.home.testimonials.description')
)
const ctaLabel = computed(() => t('web.pages.home.testimonials.cta'))

const cards = computed(() =>
  (testimonials.value || []).map((item, index) => {
    const parts = []
    if (item.role) parts.push(item.role)
    if (item.company) parts.push(item.company)
    return {
      id: `${item.author || 'testimonial'}-${index}`,
      quote: item.quote,
      author: item.author,
      subtitle: parts.join(' · '),
      avatar: item.avatar,
      href: item.href,
      external: item.external
    }
  })
)
</script>

<style scoped>
.testimonials__inner {
  display: grid;
  gap: 32px;
}

.testimonials__header {
  max-width: 840px;
  display: grid;
  gap: 12px;
}

.testimonials__header h2 {
  font-size: clamp(2rem, 2.8vw, 2.6rem);
  color: #0f172a;
}

.testimonials__header p {
  color: #475569;
  line-height: 1.7;
}

.testimonials__grid {
  display: grid;
  gap: 28px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.testimonials__card {
  background: linear-gradient(145deg, rgba(15, 23, 42, 0.92), rgba(30, 64, 175, 0.85));
  color: rgba(248, 250, 252, 0.96);
  border-radius: 32px;
  padding: 32px;
  display: grid;
  gap: 18px;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.16);
  position: relative;
  overflow: hidden;
}

.testimonials__card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top right, rgba(99, 102, 241, 0.45), transparent 60%);
  pointer-events: none;
}

.testimonials__icon {
  font-size: 4rem;
  line-height: 1;
  opacity: 0.35;
}

.testimonials__quote {
  font-size: 1.05rem;
  line-height: 1.8;
  margin: 0;
  position: relative;
  z-index: 1;
}

.testimonials__profile {
  display: flex;
  gap: 12px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.testimonials__avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(148, 163, 184, 0.35);
}

.testimonials__author {
  margin: 0;
  font-weight: 600;
  color: rgba(248, 250, 252, 0.98);
}

.testimonials__subtitle {
  margin: 4px 0 0;
  font-size: 0.9rem;
  color: rgba(226, 232, 240, 0.8);
}

.testimonials__link {
  align-self: flex-start;
  margin-top: 6px;
  color: #c4b5fd;
  font-weight: 600;
  text-decoration: none;
}

.testimonials__link:hover,
.testimonials__link:focus {
  text-decoration: underline;
}
</style>
