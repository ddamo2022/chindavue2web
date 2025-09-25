<template>
  <article class="menu-card">
    <div class="menu-card__media" v-if="image">
      <img :src="image" :alt="title" loading="lazy" />
      <span v-if="!available" class="menu-card__badge">{{ unavailableLabel }}</span>
    </div>
    <div class="menu-card__body">
      <header>
        <h3>{{ title }}</h3>
        <p v-if="description">{{ description }}</p>
      </header>
      <ul v-if="tags.length" class="menu-card__tags">
        <li v-for="tag in tags" :key="tag">{{ tag }}</li>
      </ul>
      <div class="menu-card__footer">
        <div class="menu-card__price">
          <strong>{{ formattedPrice }}</strong>
          <span v-if="strikePrice && strikePrice > price">{{ formattedStrikePrice }}</span>
        </div>
        <div class="menu-card__meta">
          <span v-if="points" class="menu-card__points">{{ pointsLabel }}</span>
          <slot name="cta"></slot>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    default: 0
  },
  strikePrice: {
    type: Number,
    default: 0
  },
  points: {
    type: Number,
    default: 0
  },
  tags: {
    type: Array,
    default: () => []
  },
  available: {
    type: Boolean,
    default: true
  }
})

const { t } = useI18n()

const formatCurrency = (value) => {
  const formatter = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'THB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })
  return formatter.format(Number(value) || 0)
}

const formattedPrice = computed(() => formatCurrency(props.price))
const formattedStrikePrice = computed(() => formatCurrency(props.strikePrice))
const pointsLabel = computed(() => t('web.pages.shop.pointsLabel', { count: (props.points || 0).toLocaleString() }))
const unavailableLabel = computed(() => t('web.pages.shop.unavailable'))

const tags = computed(() => props.tags.filter((tag) => typeof tag === 'string' && tag.trim().length))
</script>

<style scoped>
.menu-card {
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: 28px;
  background: #ffffff;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.08);
  overflow: hidden;
  border: 1px solid rgba(15, 23, 42, 0.08);
}

.menu-card__media {
  position: relative;
  aspect-ratio: 4 / 3;
  background: radial-gradient(circle at top, rgba(99, 102, 241, 0.2), rgba(15, 23, 42, 0.1));
}

.menu-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.menu-card__badge {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(15, 23, 42, 0.85);
  color: #f8fafc;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
}

.menu-card__body {
  display: grid;
  gap: 16px;
  padding: 24px;
}

.menu-card__body h3 {
  margin: 0;
  font-size: 1.25rem;
  color: #0f172a;
}

.menu-card__body p {
  margin: 0;
  color: #475569;
  line-height: 1.6;
}

.menu-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.menu-card__tags li {
  background: rgba(99, 102, 241, 0.1);
  color: #4338ca;
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 0.75rem;
  font-weight: 600;
}

.menu-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 16px;
  flex-wrap: wrap;
}

.menu-card__price {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.menu-card__price strong {
  font-size: 1.4rem;
  color: #0f172a;
}

.menu-card__price span {
  font-size: 0.85rem;
  color: #94a3b8;
  text-decoration: line-through;
}

.menu-card__meta {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.menu-card__points {
  font-weight: 600;
  color: #6366f1;
}
</style>
