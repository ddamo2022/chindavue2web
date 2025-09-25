<template>
  <section class="support">
    <header>
      <h1>Support & enablement</h1>
      <p>
        Partner with our team for implementation guidance, creative assets, and operational training.
        Choose the engagement model that fits your rollout.
      </p>
    </header>

    <div class="support__grid">
      <article class="support__card" v-for="plan in plans" :key="plan.name">
        <h2>{{ plan.name }}</h2>
        <p>{{ plan.description }}</p>
        <ul>
          <li v-for="item in plan.items" :key="item">{{ item }}</li>
        </ul>
        <button class="button button--ghost">Talk to us</button>
      </article>
    </div>

    <section class="support__contact">
      <div>
        <h3>Global concierge</h3>
        <p>Email <a href="mailto:concierge@chinda.co">concierge@chinda.co</a> or call +66 2 555 1234.</p>
      </div>
      <div>
        <h3>Technology partners</h3>
        <p>Work with our certified partners for POS integrations, analytics, and custom journeys.</p>
      </div>
      <div>
        <h3>Knowledge base</h3>
        <p>Access implementation guides, best practices, and recorded training sessions.</p>
      </div>
    </section>
  </section>
</template>

<script setup>
const plans = [
  {
    name: 'Launch assist',
    description: 'Fast-track your go-live with design templates and API walkthroughs.',
    items: ['Brand & UI kit', 'API playbook', 'Onboarding webinar']
  },
  {
    name: 'Growth partner',
    description: 'Optimize conversion with analytics reviews and campaign planning.',
    items: ['Quarterly business review', 'Campaign planning', 'Advanced segmentation workshops']
  },
  {
    name: 'Enterprise',
    description: 'Dedicated squad for multi-market rollouts and custom development.',
    items: ['Dedicated success manager', 'Custom component library', 'Solution engineering support']
  }
]
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

.support__contact a {
  color: #a855f7;
}
</style>
