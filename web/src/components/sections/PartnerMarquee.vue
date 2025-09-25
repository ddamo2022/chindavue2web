<template>
  <section v-if="partners.length" class="partner-marquee section section--compact">
    <div class="partner-marquee__inner container">
      <div class="partner-marquee__header">
        <p class="partner-marquee__eyebrow">{{ t('web.pages.home.partners.eyebrow') }}</p>
        <h2>{{ t('web.pages.home.partners.title') }}</h2>
        <p>{{ t('web.pages.home.partners.description') }}</p>
      </div>
      <div class="partner-marquee__grid" role="list">
        <component
          v-for="partner in partners"
          :is="partner.href ? 'a' : 'div'"
          :key="partner.name + partner.logo"
          class="partner-marquee__item"
          role="listitem"
          :href="partner.href || undefined"
          :target="partner.external ? '_blank' : undefined"
          :rel="partner.external ? 'noopener noreferrer' : undefined"
          :title="partner.name"
        >
          <img v-if="partner.logo" :src="partner.logo" :alt="partner.name" />
          <span v-else>{{ partner.name }}</span>
        </component>
      </div>
    </div>
  </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { useContentStore } from '@/stores/content'

const { t } = useI18n()
const content = useContentStore()
const { partners } = storeToRefs(content)
</script>

<style scoped>
.partner-marquee {
  border-radius: 32px;
  background: linear-gradient(130deg, rgba(99, 102, 241, 0.12), rgba(236, 72, 153, 0.1));
}

.partner-marquee__inner {
  display: grid;
  gap: 32px;
}

.partner-marquee__header {
  text-align: center;
  max-width: 720px;
  margin: 0 auto;
  display: grid;
  gap: 12px;
}

.partner-marquee__eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.28em;
  font-weight: 600;
  color: #6366f1;
  font-size: 0.75rem;
}

.partner-marquee h2 {
  font-size: clamp(1.8rem, 2.6vw, 2.4rem);
  color: #0f172a;
}

.partner-marquee__header p {
  color: #475569;
  margin: 0;
}

.partner-marquee__grid {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  align-items: center;
  justify-items: center;
}

.partner-marquee__item {
  background: rgba(15, 23, 42, 0.02);
  border-radius: 18px;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80px;
  width: 100%;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.partner-marquee__item:hover,
.partner-marquee__item:focus {
  transform: translateY(-4px);
  box-shadow: 0 18px 48px rgba(15, 23, 42, 0.08);
}

.partner-marquee__item img {
  max-width: 100%;
  max-height: 48px;
  filter: grayscale(40%);
}

.partner-marquee__item span {
  font-weight: 600;
  color: #334155;
}

@media (max-width: 768px) {
  .partner-marquee__inner {
    padding-inline: 0;
  }
}
</style>
