<template>
  <section class="experiences">
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

    <section v-if="journey.length" class="experiences__journey">
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
    </section>
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
.experiences {
  padding: 120px 5vw 80px;
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

.experiences__card footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  color: #6366f1;
}

.experiences__link {
  font-weight: 600;
  color: #6366f1;
}

.experiences__journey {
  display: grid;
  gap: 32px;
  background: #0f172a;
  color: rgba(248, 250, 252, 0.92);
  border-radius: 36px;
  padding: 48px 40px;
}

.experiences__journey-head {
  max-width: 640px;
  display: grid;
  gap: 12px;
}

.experiences__journey-head h2 {
  font-size: clamp(2rem, 2.6vw, 2.6rem);
}

.experiences__timeline {
  display: grid;
  gap: 32px;
}

.experiences__timeline-time {
  font-weight: 700;
  color: #6366f1;
  letter-spacing: 0.12em;
}

.experiences__timeline-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 12px;
  padding: 0;
  list-style: none;
}

.experiences__timeline-tags li {
  background: rgba(99, 102, 241, 0.12);
  color: #312e81;
  border-radius: 999px;
  padding: 6px 14px;
  font-size: 0.8rem;
  font-weight: 600;
}
</style>
