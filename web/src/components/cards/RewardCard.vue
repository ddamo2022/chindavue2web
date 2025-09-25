<template>
  <article class="reward-card">
    <img :src="image" :alt="title" />
    <div class="reward-card__body">
      <span class="reward-card__category">{{ category }}</span>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <div class="reward-card__meta">
        <span class="reward-card__points">{{ points }} pts</span>
        <button class="button button--ghost" @click="$emit('redeem')" :disabled="disabled">Redeem</button>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  points: [String, Number],
  image: String,
  category: String,
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.reward-card {
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 48px rgba(15, 23, 42, 0.08);
  display: grid;
}

.reward-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.reward-card__body {
  padding: 24px;
  display: grid;
  gap: 12px;
}

.reward-card__category {
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  font-weight: 600;
  text-transform: uppercase;
  color: #6366f1;
}

.reward-card h3 {
  font-size: 1.3rem;
  color: #0f172a;
}

.reward-card p {
  color: #475569;
  line-height: 1.6;
}

.reward-card__meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.reward-card__points {
  font-weight: 700;
  color: #0f172a;
}
</style>
