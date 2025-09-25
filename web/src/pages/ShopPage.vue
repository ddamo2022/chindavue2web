<template>
  <section class="shop">
    <header class="shop__hero">
      <div class="shop__breadcrumbs">
        <RouterLink to="/">{{ t('web.pages.shop.breadcrumbHome') }}</RouterLink>
        <span aria-hidden="true">›</span>
        <span>{{ t('web.pages.shop.title') }}</span>
      </div>
      <h1>{{ t('web.pages.shop.title') }}</h1>
      <p>{{ t('web.pages.shop.description') }}</p>
      <div class="shop__meta" v-if="activeStore">
        <div>
          <span class="shop__meta-label">{{ t('web.pages.shop.storeLabel') }}</span>
          <strong>{{ activeStore.name }}</strong>
        </div>
        <div v-if="activeStore.address">
          <span class="shop__meta-label">{{ t('web.pages.shop.addressLabel') }}</span>
          <p>{{ activeStore.address }}</p>
        </div>
        <div class="shop__meta-inline">
          <span v-if="activeStore.statusLabel" class="shop__status" :data-status="activeStore.statusLabel">
            {{ statusCopy(activeStore.statusLabel) }}
          </span>
          <a v-if="activeStore.phone" :href="`tel:${activeStore.phone}`">{{ activeStore.phone }}</a>
          <span v-if="activeStore.hours">{{ activeStore.hours }}</span>
        </div>
        <div class="shop__actions">
          <label>
            {{ t('web.pages.shop.storePicker') }}
            <select :value="selectedStoreId" @change="onStoreChange" :disabled="storesLoading">
              <option v-for="store in stores" :key="store.id" :value="store.id">{{ store.name }}</option>
            </select>
          </label>
          <div class="shop__service-toggle" v-if="services.length > 1">
            <span>{{ t('web.pages.shop.serviceLabel') }}</span>
            <div class="shop__toggle">
              <button
                v-for="service in services"
                :key="service.value"
                type="button"
                :class="['shop__toggle-option', { 'shop__toggle-option--active': diningType === service.value }]"
                @click="setDining(service.value)"
              >
                {{ serviceLabel(service.key) }}
              </button>
            </div>
          </div>
          <a class="button button--ghost" :href="activeStore.link" target="_blank" rel="noopener">
            {{ t('web.pages.shop.openH5') }}
          </a>
        </div>
      </div>
    </header>

    <div class="shop__layout">
      <aside class="shop__sidebar">
        <h2>{{ t('web.pages.shop.menuHeading') }}</h2>
        <button
          v-for="category in categories"
          :key="category.id"
          type="button"
          :class="['shop__category', { 'shop__category--active': category.id === selectedCategoryId }]"
          @click="selectCategory(category.id)"
        >
          <span>{{ category.name }}</span>
          <small v-if="category.description">{{ category.description }}</small>
        </button>
        <p v-if="!categories.length && !categoriesLoading" class="shop__empty">{{ t('web.pages.shop.emptyCategories') }}</p>
      </aside>
      <main class="shop__content">
        <div class="shop__toolbar">
          <span v-if="goodsLoading">{{ t('web.pages.shop.loading') }}</span>
          <span v-else>{{ t('web.pages.shop.resultCount', { count: goods.length }) }}</span>
        </div>
        <div class="shop__grid">
          <MenuItemCard
            v-for="item in goods"
            :key="item.id"
            :title="item.name"
            :description="item.description"
            :price="item.price"
            :strike-price="item.strikePrice"
            :points="item.points"
            :tags="item.tags"
            :image="item.image"
            :available="item.available"
          >
            <template #cta>
              <a :href="activeStore.link" target="_blank" rel="noopener" class="button button--ghost button--sm">
                {{ t('web.pages.shop.orderButton') }}
              </a>
            </template>
          </MenuItemCard>
        </div>
        <p v-if="!goods.length && !goodsLoading" class="shop__empty">{{ t('web.pages.shop.emptyMenu') }}</p>
        <p v-if="goodsError" class="shop__error">{{ goodsError }}</p>
      </main>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import MenuItemCard from '@/components/cards/MenuItemCard.vue'
import { useCatalogStore } from '@/stores/catalog'
import { usePageMeta } from '@/composables/usePageMeta'

const catalog = useCatalogStore()
const {
  stores,
  storesLoading,
  selectedStore,
  selectedStoreId,
  categories,
  categoriesLoading,
  goods,
  goodsLoading,
  goodsError,
  selectedCategoryId,
  diningType,
  availableServices
} = storeToRefs(catalog)

const { t } = useI18n()

usePageMeta({
  titleKey: 'web.pages.shop.title',
  descriptionKey: 'web.pages.shop.description'
})

const services = availableServices

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

const serviceLabel = (key) => {
  if (key === 'delivery') return t('web.pages.shop.service.delivery')
  return t('web.pages.shop.service.pickup')
}

const activeStore = selectedStore

const onStoreChange = (event) => {
  const id = event.target.value
  if (id) {
    catalog.selectStore(id)
  }
}

const selectCategory = (id) => {
  catalog.selectCategory(id)
}

const setDining = (value) => {
  catalog.setDiningType(value)
}

onMounted(async () => {
  if (!stores.value.length && !storesLoading.value) {
    await catalog.loadStores({ refresh: true })
  }
  if (!selectedStoreId.value) {
    await catalog.loadFeaturedStore()
  }
  if (selectedStoreId.value && !categories.value.length) {
    await catalog.loadCategories({ refresh: true })
  }
})
</script>

<style scoped>
.shop {
  padding: 120px 5vw 80px;
  display: grid;
  gap: 48px;
}

.shop__hero {
  display: grid;
  gap: 18px;
  max-width: 960px;
}

.shop__breadcrumbs {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: #64748b;
}

.shop__breadcrumbs a {
  color: inherit;
}

.shop__hero h1 {
  font-size: clamp(2.6rem, 3.4vw, 3.4rem);
  color: #0f172a;
}

.shop__hero p {
  color: #475569;
  line-height: 1.7;
}

.shop__meta {
  display: grid;
  gap: 12px;
  padding: 24px;
  border-radius: 32px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.08), rgba(15, 23, 42, 0.08));
}

.shop__meta strong {
  font-size: 1.4rem;
  color: #0f172a;
}

.shop__meta-label {
  display: block;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #64748b;
  font-weight: 600;
}

.shop__meta-inline {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  color: #1f2937;
  font-weight: 500;
}

.shop__status {
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
}

.shop__status[data-status='open'] {
  background: rgba(22, 163, 74, 0.15);
  color: #15803d;
}

.shop__status[data-status='busy'] {
  background: rgba(251, 191, 36, 0.15);
  color: #b45309;
}

.shop__status[data-status='closed'] {
  background: rgba(239, 68, 68, 0.15);
  color: #b91c1c;
}

.shop__actions {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.shop__actions label {
  display: grid;
  gap: 8px;
  font-weight: 600;
  color: #475569;
}

.shop__actions select {
  min-width: 220px;
  border-radius: 16px;
  border: 1px solid rgba(148, 163, 184, 0.4);
  padding: 12px 14px;
}

.shop__service-toggle {
  display: flex;
  align-items: center;
  gap: 12px;
}

.shop__toggle {
  display: inline-flex;
  background: rgba(15, 23, 42, 0.08);
  border-radius: 999px;
  padding: 4px;
}

.shop__toggle-option {
  border: none;
  background: transparent;
  padding: 8px 18px;
  border-radius: 999px;
  font-weight: 600;
  color: #475569;
  cursor: pointer;
}

.shop__toggle-option--active {
  background: #312e81;
  color: #f8fafc;
}

.shop__layout {
  display: grid;
  gap: 36px;
  grid-template-columns: minmax(220px, 280px) 1fr;
}

.shop__sidebar {
  display: grid;
  gap: 12px;
  align-content: start;
}

.shop__sidebar h2 {
  font-size: 1.2rem;
  color: #0f172a;
}

.shop__category {
  border: 1px solid rgba(148, 163, 184, 0.24);
  background: #ffffff;
  border-radius: 20px;
  padding: 12px 16px;
  text-align: left;
  display: grid;
  gap: 4px;
  font-weight: 600;
  color: #1f2937;
  transition: border 0.2s ease, transform 0.2s ease;
}

.shop__category small {
  font-weight: 400;
  color: #64748b;
}

.shop__category:hover {
  border-color: rgba(99, 102, 241, 0.6);
  transform: translateX(4px);
}

.shop__category--active {
  border-color: #312e81;
  background: rgba(49, 46, 129, 0.08);
}

.shop__content {
  display: grid;
  gap: 24px;
}

.shop__toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #475569;
}

.shop__grid {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.shop__empty {
  color: #6366f1;
  font-weight: 600;
}

.shop__error {
  color: #dc2626;
  font-weight: 600;
}

@media (max-width: 1024px) {
  .shop {
    padding-top: 80px;
  }

  .shop__layout {
    grid-template-columns: 1fr;
  }

  .shop__sidebar {
    order: 2;
  }
}
</style>
