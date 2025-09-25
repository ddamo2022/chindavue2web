<template>
  <section class="loyalty section section--compact">
    <div class="loyalty__inner container">
      <div class="loyalty__content">
        <h2>{{ loyalty.headline }}</h2>
        <p>{{ loyalty.copy }}</p>
        <ul v-if="loyalty.tiers?.length" class="loyalty__tiers">
          <li v-for="tier in loyalty.tiers" :key="tier.name" class="loyalty__tier">
            <h3>{{ tier.name }}</h3>
            <p>{{ tier.description }}</p>
            <dl>
              <div v-if="tier.qualification">
                <dt>Qualification</dt>
                <dd>{{ tier.qualification }}</dd>
              </div>
              <div v-if="tier.highlight">
                <dt>Signature reward</dt>
                <dd>{{ tier.highlight }}</dd>
              </div>
            </dl>
          </li>
        </ul>
      </div>
      <aside class="loyalty__aside">
        <div class="loyalty__panel">
          <h4>Points health snapshot</h4>
          <ul v-if="loyalty.metrics?.length">
            <li v-for="metric in loyalty.metrics" :key="metric.label">
              <span>{{ metric.label }}</span>
              <strong>{{ metric.value }}</strong>
            </li>
          </ul>
          <component
            v-if="loyalty.analyticsCta"
            :is="loyalty.analyticsCta.to ? RouterLink : 'a'"
            v-bind="loyalty.analyticsCta.to
              ? { to: loyalty.analyticsCta.to }
              : { href: loyalty.analyticsCta.href || '#', target: loyalty.analyticsCta.external ? '_blank' : undefined, rel: loyalty.analyticsCta.external ? 'noopener' : undefined }"
            class="button button--full"
            :class="loyalty.analyticsCta.variant === 'primary' ? 'button--primary' : 'button--ghost'"
          >
            {{ loyalty.analyticsCta.label }}
          </component>
        </div>
        <div class="loyalty__panel loyalty__panel--gradient">
          <h4>Exchange marketplace</h4>
          <p>
            Curate experiences and merchandise using the existing points mall APIs. Manage stock, set point costs, and schedule
            limited drops.
          </p>
          <component
            v-if="loyalty.rewardsCta"
            :is="loyalty.rewardsCta.to ? RouterLink : 'a'"
            v-bind="loyalty.rewardsCta.to
              ? { to: loyalty.rewardsCta.to }
              : { href: loyalty.rewardsCta.href || '#', target: loyalty.rewardsCta.external ? '_blank' : undefined, rel: loyalty.rewardsCta.external ? 'noopener' : undefined }"
            class="button button--full"
            :class="loyalty.rewardsCta.variant === 'primary' ? 'button--primary' : 'button--ghost'"
          >
            {{ loyalty.rewardsCta.label }}
          </component>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'
import { useContentStore } from '@/stores/content'

const content = useContentStore()
const { loyalty } = storeToRefs(content)
</script>

<style scoped>
.loyalty__inner {
  display: grid;
  gap: 48px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  align-items: start;
}

.loyalty__content h2 {
  font-size: clamp(2rem, 3vw, 2.6rem);
  color: #0f172a;
}

.loyalty__content p {
  margin-top: 12px;
  color: #475569;
  line-height: 1.7;
}

.loyalty__tiers {
  margin-top: 32px;
  display: grid;
  gap: 20px;
}

.loyalty__tier {
  padding: 28px;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
}

.loyalty__tier h3 {
  font-size: 1.4rem;
  color: #1e293b;
}

.loyalty__tier p {
  margin: 8px 0 16px;
}

.loyalty__tier dl {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

.loyalty__tier dt {
  font-weight: 600;
  color: #475569;
}

.loyalty__tier dd {
  color: #0f172a;
}

.loyalty__aside {
  display: grid;
  gap: 24px;
}

.loyalty__panel {
  background: #0f172a;
  color: rgba(248, 250, 252, 0.92);
  border-radius: 28px;
  padding: 32px;
  display: grid;
  gap: 18px;
  box-shadow: 0 22px 50px rgba(15, 23, 42, 0.2);
}

.loyalty__panel h4 {
  font-size: 1.3rem;
  font-weight: 600;
}

.loyalty__panel ul {
  display: grid;
  gap: 12px;
}

.loyalty__panel li {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
}

.loyalty__panel strong {
  font-size: 1.1rem;
}

.loyalty__panel--gradient {
  background: linear-gradient(135deg, #6366f1, #22d3ee);
}
</style>
