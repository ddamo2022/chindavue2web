<template>
  <section class="feature-grid section section--compact">
    <div class="feature-grid__inner container">
      <header>
        <h2>Web-first experience with operational depth.</h2>
        <p>
          Built on top of our existing API stack to keep logic in sync with the Vue 2 mobile app while delivering a desktop-grade
          UI.
        </p>
      </header>
      <div class="feature-grid__items">
        <article v-for="feature in featureCards" :key="feature.title" class="feature-grid__item">
          <span class="feature-grid__icon" :style="{ background: feature.tint }">
            {{ feature.icon }}
          </span>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
          <ul v-if="feature.highlights?.length">
            <li v-for="highlight in feature.highlights" :key="highlight">{{ highlight }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useContentStore } from '@/stores/content'

const content = useContentStore()
const { features: featureCards } = storeToRefs(content)
</script>

<style scoped>
.feature-grid__inner {
  display: grid;
  gap: 48px;
}

.feature-grid header {
  max-width: 640px;
}

.feature-grid h2 {
  font-size: clamp(2rem, 3vw, 2.75rem);
  color: #0f172a;
}

.feature-grid p {
  color: #475569;
  line-height: 1.6;
  margin-top: 12px;
}

.feature-grid__items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 28px;
}

.feature-grid__item {
  padding: 32px;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
  display: grid;
  gap: 16px;
}

.feature-grid__icon {
  width: 56px;
  height: 56px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  color: #ffffff;
  font-size: 24px;
}

.feature-grid__item ul {
  margin-top: 8px;
  color: #1e293b;
  font-weight: 500;
  line-height: 1.6;
  display: grid;
  gap: 6px;
}

.feature-grid__item li::before {
  content: '•';
  margin-right: 8px;
  color: #6366f1;
}
</style>
