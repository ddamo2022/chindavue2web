<template>
  <section class="locations">
    <header class="locations__hero">
      <h1>{{ hero.title }}</h1>
      <p v-if="hero.description">{{ hero.description }}</p>
      <div v-if="hero.cards.length" class="locations__hero-grid">
        <article v-for="card in hero.cards" :key="card.title" class="locations__hero-card">
          <strong>{{ card.title }}</strong>
          <p>{{ card.description }}</p>
        </article>
      </div>
      <div v-if="hero.ctas && hero.ctas.length" class="locations__hero-actions">
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
    </header>

    <div class="locations__map" v-if="hero.mapNote">
      <span>{{ hero.mapNote }}</span>
    </div>

    <div v-if="locations.length" class="locations__grid">
      <article v-for="location in locations" :key="location.name" class="locations__card">
        <header>
          <h2>{{ location.name }}</h2>
          <span v-if="location.region">{{ location.region }}</span>
        </header>
        <p>{{ location.story }}</p>
        <ul v-if="location.highlights.length">
          <li v-for="highlight in location.highlights" :key="highlight">{{ highlight }}</li>
        </ul>
        <footer>
          <a v-if="location.phone" :href="`tel:${location.phone}`" class="locations__phone">{{ location.phone }}</a>
          <component
            v-if="location.cta"
            :is="location.cta.to ? RouterLink : 'a'"
            v-bind="location.cta.to
              ? { to: location.cta.to }
              : {
                  href: location.cta.href || '#',
                  target: location.cta.external ? '_blank' : undefined,
                  rel: location.cta.external ? 'noopener' : undefined
                }"
            class="button button--ghost"
            :class="location.cta.variant === 'primary' ? 'button--primary' : 'button--ghost'"
          >
            {{ location.cta.label }}
          </component>
        </footer>
      </article>
    </div>
  </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'
import { useContentStore } from '@/stores/content'

const content = useContentStore()
const { locationsHero: hero, locations } = storeToRefs(content)
</script>

<style scoped>
.locations {
  padding: 120px 5vw 80px;
  display: grid;
  gap: 64px;
}

.locations__hero {
  display: grid;
  gap: 24px;
  max-width: 960px;
}

.locations__hero h1 {
  font-size: clamp(2.6rem, 3.2vw, 3.3rem);
  color: #0f172a;
}

.locations__hero p {
  color: #475569;
  line-height: 1.7;
}

.locations__hero-grid {
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.locations__hero-card {
  background: #ffffff;
  border-radius: 28px;
  padding: 24px;
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.08);
  display: grid;
  gap: 8px;
}

.locations__hero-card strong {
  font-size: 1.2rem;
  color: #312e81;
}

.locations__hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.locations__map {
  position: relative;
  border-radius: 36px;
  padding: 120px 24px;
  background: radial-gradient(circle at top left, rgba(99, 102, 241, 0.35), rgba(15, 23, 42, 0.9));
  color: rgba(248, 250, 252, 0.9);
  display: grid;
  place-items: center;
  text-align: center;
  font-weight: 600;
  font-size: 1.1rem;
}

.locations__grid {
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.locations__card {
  background: #ffffff;
  border-radius: 32px;
  padding: 32px;
  display: grid;
  gap: 18px;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.1);
}

.locations__card header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
}

.locations__card h2 {
  font-size: 1.6rem;
  color: #0f172a;
}

.locations__card span {
  font-weight: 600;
  color: #6366f1;
}

.locations__card p {
  color: #475569;
  line-height: 1.6;
}

.locations__card ul {
  display: grid;
  gap: 8px;
  color: #1f2937;
  font-weight: 500;
}

.locations__card li::before {
  content: '•';
  margin-right: 8px;
  color: #6366f1;
}

.locations__card footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.locations__phone {
  font-weight: 700;
  color: #0f172a;
}
</style>
