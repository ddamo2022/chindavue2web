<template>
  <article class="metric-card">
    <header>
      <h3>{{ title }}</h3>
      <slot name="icon" />
    </header>
    <strong class="metric-card__value">{{ value }}</strong>
    <p class="metric-card__description">{{ description }}</p>
    <footer v-if="$slots.footer">
      <slot name="footer" />
    </footer>
  </article>
</template>

<script setup>
defineProps({
  title: String,
  value: [String, Number],
  description: String
})
</script>

<style scoped>
.metric-card {
  background: #ffffff;
  border-radius: 24px;
  padding: 28px;
  display: grid;
  gap: 12px;
  box-shadow: 0 20px 48px rgba(15, 23, 42, 0.08);
  min-height: 180px;
}

.metric-card header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #475569;
}

.metric-card__value {
  font-size: 2.4rem;
  color: #0f172a;
  line-height: 1;
}

.metric-card__description {
  color: #475569;
}
</style>
