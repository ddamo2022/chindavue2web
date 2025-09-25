<template>
  <section class="timeline">
    <header>
      <h2>Guest journey mapped end-to-end.</h2>
      <p>
        Our desktop suite mirrors the mobile touchpoints and shares the same API contracts. Start with the familiar flows and
        iterate with richer storytelling, high-fidelity imagery, and advanced loyalty rules.
      </p>
    </header>
    <ol class="timeline__steps">
      <li v-for="step in timelineSteps" :key="step.title" class="timeline__step">
        <span class="timeline__step-index">{{ step.index }}</span>
        <div class="timeline__step-body">
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
          <div v-if="step.tags?.length" class="timeline__meta">
            <span v-for="tag in step.tags" :key="tag">{{ tag }}</span>
          </div>
        </div>
      </li>
    </ol>
  </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useContentStore } from '@/stores/content'

const content = useContentStore()
const { timeline: timelineSteps } = storeToRefs(content)
</script>

<style scoped>
.timeline {
  padding: 96px 5vw;
  background: linear-gradient(180deg, #eef2ff 0%, #e0f2fe 100%);
  border-radius: 40px 40px 0 0;
  margin-top: 80px;
  display: grid;
  gap: 48px;
}

.timeline header {
  max-width: 640px;
}

.timeline h2 {
  font-size: clamp(2.1rem, 3vw, 2.75rem);
  color: #1e1b4b;
}

.timeline p {
  color: #312e81;
  line-height: 1.7;
  margin-top: 12px;
}

.timeline__steps {
  display: grid;
  gap: 24px;
}

.timeline__step {
  display: grid;
  gap: 18px;
  grid-template-columns: auto 1fr;
  background: rgba(248, 250, 252, 0.85);
  border-radius: 24px;
  padding: 24px 28px;
  align-items: center;
  backdrop-filter: blur(10px);
}

.timeline__step-index {
  width: 56px;
  height: 56px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 1.1rem;
  color: #1e1b4b;
  background: rgba(99, 102, 241, 0.15);
}

.timeline__step-body h3 {
  font-size: 1.5rem;
  color: #1e293b;
  margin-bottom: 8px;
}

.timeline__meta {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 16px;
}

.timeline__meta span {
  background: rgba(99, 102, 241, 0.18);
  color: #3730a3;
  padding: 4px 12px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.85rem;
}
</style>
