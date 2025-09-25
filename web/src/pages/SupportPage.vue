<template>
  <section class="support">
    <header>
      <h1>Support & enablement</h1>
      <p>
        Partner with our team for implementation guidance, creative assets, and operational training.
        Choose the engagement model that fits your rollout.
      </p>
    </header>

    <div v-if="plans.length" class="support__grid">
      <article class="support__card" v-for="plan in plans" :key="plan.name">
        <h2>{{ plan.name }}</h2>
        <p>{{ plan.description }}</p>
        <ul v-if="plan.items.length">
          <li v-for="item in plan.items" :key="item">{{ item }}</li>
        </ul>
        <component
          v-if="plan.cta"
          :is="plan.cta.to ? RouterLink : 'a'"
          v-bind="plan.cta.to
            ? { to: plan.cta.to }
            : { href: plan.cta.href || '#', target: plan.cta.external ? '_blank' : undefined, rel: plan.cta.external ? 'noopener' : undefined }"
          class="button"
          :class="plan.cta.variant === 'primary' ? 'button--primary' : 'button--ghost'"
        >
          {{ plan.cta.label }}
        </component>
      </article>
    </div>

    <section v-if="contacts.length" class="support__contact">
      <article v-for="contact in contacts" :key="contact.title">
        <h3>{{ contact.title }}</h3>
        <p v-if="contact.description">{{ contact.description }}</p>
        <p v-if="contact.email">
          Email <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
        </p>
        <p v-if="contact.phone">
          Call <a :href="`tel:${contact.phone}`">{{ contact.phone }}</a>
        </p>
        <a v-if="contact.href" :href="contact.href" class="support__link">Explore resources</a>
      </article>
    </section>
  </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'
import { useContentStore } from '@/stores/content'

const content = useContentStore()
const { supportPlans: plans, supportContacts: contacts } = storeToRefs(content)
</script>

<style scoped>
.support {
  padding: 120px 5vw 80px;
  display: grid;
  gap: 48px;
}

.support header {
  max-width: 720px;
}

.support h1 {
  font-size: clamp(2.4rem, 3vw, 3.1rem);
  color: #0f172a;
}

.support p {
  color: #475569;
  line-height: 1.7;
}

.support__grid {
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.support__card {
  background: #ffffff;
  border-radius: 24px;
  padding: 32px;
  display: grid;
  gap: 16px;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.08);
}

.support__card ul {
  display: grid;
  gap: 10px;
  color: #1f2937;
  font-weight: 500;
}

.support__card li::before {
  content: '•';
  margin-right: 8px;
  color: #6366f1;
}

.support__contact {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  background: #0f172a;
  color: rgba(248, 250, 252, 0.92);
  border-radius: 32px;
  padding: 40px;
}

.support__contact article {
  display: grid;
  gap: 12px;
}

.support__contact a {
  color: #a855f7;
}

.support__link {
  font-weight: 600;
}
</style>
