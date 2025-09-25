<template>
  <section class="experiences section">
    <div class="experiences__inner container">
      <header class="experiences__hero">
        <p v-if="hero.eyebrow" class="experiences__eyebrow">{{ hero.eyebrow }}</p>
        <h1>{{ hero.title }}</h1>
        <p v-if="hero.description">{{ hero.description }}</p>
        <div v-if="hero.ctas.length" class="experiences__hero-actions">
          <component
            v-for="cta in hero.ctas"
            :key="cta.label + (cta.to || cta.href || '')"
            :is="cta.to ? RouterLink : 'a'"
            v-bind="cta.to
              ? { to: cta.to }
              : { href: cta.href || '#', target: cta.external ? '_blank' : undefined, rel: cta.external ? 'noopener' : undefined }"
            class="button button--lg"
            :class="cta.variant === 'primary' ? 'button--primary' : 'button--ghost'"
          >
            {{ cta.label }}
          </component>
        </div>
        <div v-if="hero.cards.length" class="experiences__hero-grid">
          <article v-for="card in hero.cards" :key="card.title" class="experiences__hero-card">
            <h3>{{ card.title }}</h3>
            <p>{{ card.description }}</p>
          </article>
        </div>
      </header>

      <div v-if="experiences.length" class="experiences__grid">
        <article v-for="experience in experiences" :key="experience.title" class="experiences__card">
          <span v-if="experience.type" class="experiences__badge">{{ experience.type }}</span>
          <h2>{{ experience.title }}</h2>
          <p>{{ experience.description }}</p>
          <ul v-if="experience.details.length">
            <li v-for="detail in experience.details" :key="detail">{{ detail }}</li>
          </ul>
          <footer>
            <span v-if="experience.schedule">{{ experience.schedule }}</span>
            <component
              v-if="experience.cta"
              :is="experience.cta.to ? RouterLink : 'a'"
              v-bind="experience.cta.to
                ? { to: experience.cta.to }
                : {
                    href: experience.cta.href || '#',
                    target: experience.cta.external ? '_blank' : undefined,
                    rel: experience.cta.external ? 'noopener' : undefined
                  }"
              class="experiences__link"
            >
              {{ experience.cta.label }}
            </component>
          </footer>
        </article>
      </div>
    </div>

    <div v-if="journey.length" class="experiences__journey section section--compact">
      <div class="experiences__journey-inner container">
        <div class="experiences__journey-head">
          <h2>{{ t('web.pages.experiences.journeyTitle') }}</h2>
          <p>{{ t('web.pages.experiences.journeyDescription') }}</p>
        </div>
        <ol class="experiences__timeline">
          <li v-for="step in journey" :key="step.title">
            <span v-if="step.time" class="experiences__timeline-time">{{ step.time }}</span>
            <div>
              <h3>{{ step.title }}</h3>
              <p v-if="step.description">{{ step.description }}</p>
              <ul v-if="step.tags && step.tags.length" class="experiences__timeline-tags">
                <li v-for="tag in step.tags" :key="tag">{{ tag }}</li>
              </ul>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useContentStore } from '@/stores/content'
import { usePageMeta } from '@/composables/usePageMeta'

const { t } = useI18n()
const content = useContentStore()
const { experiencesHero: hero, experiences, experienceJourney: journey } = storeToRefs(content)

usePageMeta({
  titleKey: 'web.pages.experiences.title',
  descriptionKey: 'web.pages.experiences.description'
})
</script>

<style scoped>
.experiences__inner {
  display: grid;
  gap: 64px;
}

.experiences__hero {
  max-width: 920px;
  display: grid;
  gap: 20px;
}

.experiences__eyebrow {
  letter-spacing: 0.24em;
  font-weight: 600;
  font-size: 0.75rem;
  color: #6366f1;
}

.experiences__hero h1 {
  font-size: clamp(2.6rem, 3.6vw, 3.4rem);
  color: #0f172a;
}

.experiences__hero p {
  color: #475569;
  line-height: 1.8;
}

.experiences__hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 12px;
}

.experiences__hero-grid {
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  margin-top: 24px;
}

.experiences__hero-card {
  background: rgba(15, 23, 42, 0.04);
  border-radius: 24px;
  padding: 24px;
  display: grid;
  gap: 8px;
}

.experiences__hero-card h3 {
  font-size: 1.1rem;
  color: #312e81;
}

.experiences__hero-card p {
  color: #475569;
}

.experiences__grid {
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.experiences__card {
  background: #ffffff;
  border-radius: 32px;
  padding: 32px;
  display: grid;
  gap: 16px;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.1);
}

.experiences__badge {
  align-self: flex-start;
  padding: 6px 14px;
  border-radius: 999px;
  background: rgba(99, 102, 241, 0.14);
  color: #312e81;
  font-weight: 600;
  font-size: 0.75rem;
  letter-spacing: 0.12em;
}

.experiences__card h2 {
  font-size: 1.6rem;
  color: #0f172a;
}

.experiences__card p {
  color: #475569;
  line-height: 1.7;
}

.experiences__card ul {
  display: grid;
  gap: 8px;
  color: #1f2937;
  font-weight: 500;
}

.experiences__card li::before {
  content: '•';
  margin-right: 8px;
  color: #6366f1;
}

.experiences__link {
  color: #6366f1;
  font-weight: 600;
}

.experiences__journey {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.12), rgba(14, 165, 233, 0.12));
}

.experiences__journey-inner {
  display: grid;
  gap: 32px;
}

.experiences__journey-head {
  max-width: 720px;
  display: grid;
  gap: 12px;
}

.experiences__journey-head h2 {
  font-size: clamp(2.1rem, 3vw, 2.8rem);
  color: #0f172a;
}

.experiences__journey-head p {
  color: #475569;
  line-height: 1.7;
}

.experiences__timeline {
  display: grid;
  gap: 24px;
  counter-reset: experience;
}

.experiences__timeline li {
  display: grid;
  gap: 12px;
  grid-template-columns: auto 1fr;
  align-items: start;
  padding: 24px;
  background: rgba(255, 255, 255, 0.88);
  border-radius: 24px;
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08);
}

.experiences__timeline-time {
  font-weight: 700;
  color: #312e81;
  font-size: 0.9rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.experiences__timeline h3 {
  margin: 0;
  font-size: 1.3rem;
  color: #0f172a;
}

.experiences__timeline p {
  margin: 8px 0 0;
  color: #475569;
  line-height: 1.6;
}

.experiences__timeline-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 12px;
}

.experiences__timeline-tags li {
  background: rgba(99, 102, 241, 0.18);
  color: #312e81;
  padding: 4px 12px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.8rem;
}
</style>
