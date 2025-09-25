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

    <div class="locations__stores">
      <h2>{{ t('web.pages.locations.liveHeading') }}</h2>
      <p>{{ t('web.pages.locations.liveDescription') }}</p>
      <div class="locations__store-grid">
        <article v-for="store in normalizedStores" :key="store.id" class="locations__store-card">
          <header>
            <div>
              <h3>{{ store.name }}</h3>
              <span v-if="store.region">{{ store.region }}</span>
            </div>
            <span class="locations__status" :data-status="store.statusLabel">{{ store.statusCopy }}</span>
          </header>
          <p v-if="store.address">{{ store.address }}</p>
          <p v-if="store.hours" class="locations__hours">{{ store.hours }}</p>
          <ul v-if="store.labels && store.labels.length" class="locations__tags">
            <li v-for="tag in store.labels" :key="tag">{{ tag }}</li>
          </ul>
          <footer>
            <a v-if="store.phone" :href="`tel:${store.phone}`">{{ store.phone }}</a>
            <a :href="store.link" target="_blank" rel="noopener" class="button button--ghost button--sm">
              {{ t('web.pages.locations.viewMenu') }}
            </a>
            <button
              type="button"
              class="button button--sm"
              :class="{ 'button--primary': store.isSelected }"
              @click="selectStore(store.id)"
            >
              {{ store.isSelected ? t('web.pages.locations.selectedStore') : t('web.pages.locations.selectStore') }}
            </button>
          </footer>
        </article>
      </div>
      <p v-if="storesLoading" class="locations__loading">{{ t('web.pages.locations.loadingStores') }}</p>
      <p v-if="!storesLoading && !stores.length" class="locations__empty">
        {{ t('web.pages.locations.emptyStores') }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useContentStore } from '@/stores/content'
import { useCatalogStore } from '@/stores/catalog'
import { usePageMeta } from '@/composables/usePageMeta'

const content = useContentStore()
const catalog = useCatalogStore()
const { locationsHero: hero, locations } = storeToRefs(content)
const { stores, storesLoading, selectedStoreId } = storeToRefs(catalog)
const { t } = useI18n()

usePageMeta({
  titleKey: 'web.pages.locations.title',
  descriptionKey: 'web.pages.locations.description'
})

const statusCopy = (status) => {
  switch (status) {
    case 'open':
      return t('web.pages.shop.status.open')
    case 'busy':
      return t('web.pages.shop.status.busy')
    case 'closed':
      return t('web.pages.shop.status.closed')
    default:
      return t('web.pages.shop.status.unknown')
  }
}

const normalizedStores = computed(() =>
  stores.value.map((store) => ({
    ...store,
    statusCopy: statusCopy(store.statusLabel),
    isSelected: String(store.id) === String(selectedStoreId.value)
  }))
)

const selectStore = (id) => {
  catalog.selectStore(id)
}

onMounted(() => {
  if (!stores.value.length && !storesLoading.value) {
    catalog.loadStores({ refresh: true })
  }
})
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
  color: #6366f1;
  font-weight: 600;
}

.locations__stores {
  display: grid;
  gap: 24px;
}

.locations__store-grid {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.locations__store-card {
  background: #ffffff;
  border-radius: 28px;
  padding: 24px;
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.08);
  display: grid;
  gap: 16px;
}

.locations__store-card header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
}

.locations__store-card h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #0f172a;
}

.locations__status {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.08);
  color: #0f172a;
}

.locations__status[data-status='open'] {
  background: rgba(22, 163, 74, 0.15);
  color: #15803d;
}

.locations__status[data-status='busy'] {
  background: rgba(251, 191, 36, 0.15);
  color: #b45309;
}

.locations__status[data-status='closed'] {
  background: rgba(239, 68, 68, 0.15);
  color: #b91c1c;
}

.locations__hours {
  color: #475569;
  font-weight: 500;
}

.locations__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.locations__tags li {
  background: rgba(99, 102, 241, 0.08);
  color: #4338ca;
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 0.75rem;
  font-weight: 600;
}

.locations__store-card footer {
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
}

.locations__store-card footer a {
  color: #6366f1;
  font-weight: 600;
}

.locations__loading {
  color: #475569;
  font-weight: 500;
}

.locations__empty {
  color: #6366f1;
  font-weight: 600;
}

@media (max-width: 960px) {
  .locations {
    padding-top: 80px;
  }
}
</style>
