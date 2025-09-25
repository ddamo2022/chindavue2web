<template>
  <div class="home">
    <HeroPrimary />
    <FeatureGrid />
    <ExperienceTimeline />
    <LoyaltyOverview />
    <section v-if="showcaseCards.length" class="home__showcase">
      <article
        v-for="card in showcaseCards"
        :key="card.title"
        :class="['home__card', card.accent ? 'home__card--accent' : null]"
        :style="card.gradient ? { background: card.gradient } : undefined"
      >
        <h2>{{ card.title }}</h2>
        <p>{{ card.description }}</p>
        <component
          :is="card.to ? RouterLink : 'a'"
          v-bind="card.to
            ? { to: card.to }
            : { href: card.href || '#', target: card.external ? '_blank' : undefined, rel: card.external ? 'noopener' : undefined }
          "
          class="button"
          :class="card.variant === 'primary' ? 'button--primary' : 'button--ghost'"
        >
          {{ card.label }}
        </component>
      </article>
    </section>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'
import HeroPrimary from '@/components/hero/HeroPrimary.vue'
import FeatureGrid from '@/components/sections/FeatureGrid.vue'
import ExperienceTimeline from '@/components/sections/ExperienceTimeline.vue'
import LoyaltyOverview from '@/components/sections/LoyaltyOverview.vue'
import { useContentStore } from '@/stores/content'

const content = useContentStore()
const { showcaseCards } = storeToRefs(content)
</script>

<style scoped>
.home {
  display: grid;
  gap: 40px;
}

.home__showcase {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.home__card {
  background: #ffffff;
  border-radius: 28px;
  padding: 32px;
  display: grid;
  gap: 16px;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.08);
}

.home__card h2 {
  font-size: 1.6rem;
  color: #0f172a;
}

.home__card p {
  color: #475569;
  line-height: 1.6;
}

.home__card--accent {
  background: linear-gradient(140deg, rgba(99, 102, 241, 0.95), rgba(168, 85, 247, 0.95));
  color: rgba(248, 250, 252, 0.95);
}

.home__card--accent p {
  color: rgba(226, 232, 240, 0.92);
}
</style>
