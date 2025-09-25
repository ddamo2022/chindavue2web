<template>
  <section class="hero">
    <div class="hero__content">
      <p v-if="hero.eyebrow" class="hero__eyebrow">{{ hero.eyebrow }}</p>
      <h1>{{ hero.title }}</h1>
      <p class="hero__lead">{{ hero.description }}</p>
      <div v-if="hero.ctas?.length" class="hero__actions">
        <component
          v-for="cta in hero.ctas"
          :key="cta.label"
          :is="cta.to ? RouterLink : 'a'"
          v-bind="cta.to ? { to: cta.to } : { href: cta.href || '#', target: cta.external ? '_blank' : undefined, rel: cta.external ? 'noopener' : undefined }"
          class="button"
          :class="['button--lg', cta.variant === 'primary' ? 'button--primary' : 'button--ghost']"
        >
          {{ cta.label }}
        </component>
      </div>
      <dl v-if="hero.stats?.length" class="hero__stats">
        <div v-for="stat in hero.stats" :key="stat.label">
          <dt>{{ stat.value }}</dt>
          <dd>{{ stat.label }}</dd>
        </div>
      </dl>
    </div>
    <div class="hero__media">
      <div class="hero__card">
        <img :src="hero.image || '/hero-shot.svg'" alt="Chinda dining" />
        <div v-if="hero.badge" class="hero__badge">
          <span v-if="hero.badge.label" class="hero__badge-label">{{ hero.badge.label }}</span>
          <p v-if="hero.badge.text" class="hero__badge-text">{{ hero.badge.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'
import { useContentStore } from '@/stores/content'

const content = useContentStore()
const { hero } = storeToRefs(content)
</script>

<style scoped>
.hero {
  display: grid;
  gap: 48px;
  padding: 96px 5vw 72px;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}

.hero__eyebrow {
  letter-spacing: 0.24em;
  font-weight: 600;
  color: #6366f1;
  font-size: 0.75rem;
  text-transform: uppercase;
}

.hero h1 {
  font-size: clamp(2.5rem, 3.8vw, 3.5rem);
  line-height: 1.05;
  color: #0f172a;
  margin: 16px 0;
}

.hero__lead {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #475569;
  max-width: 560px;
}

.hero__actions {
  display: flex;
  gap: 16px;
  margin: 32px 0 40px;
  flex-wrap: wrap;
}

.hero__stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 24px;
}

.hero__stats dt {
  font-size: 2rem;
  font-weight: 700;
  color: #0f172a;
}

.hero__stats dd {
  color: #64748b;
}

.hero__media {
  display: flex;
  justify-content: center;
}

.hero__card {
  position: relative;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.12);
}

.hero__card img {
  display: block;
  width: min(520px, 80vw);
  height: auto;
}

.hero__badge {
  position: absolute;
  inset: auto 24px 24px 24px;
  background: rgba(15, 23, 42, 0.85);
  color: rgba(248, 250, 252, 0.92);
  border-radius: 20px;
  padding: 20px 24px;
  backdrop-filter: blur(8px);
}

.hero__badge-label {
  font-weight: 600;
  font-size: 0.75rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #a855f7;
}

.hero__badge-text {
  margin-top: 8px;
  line-height: 1.6;
}
</style>
