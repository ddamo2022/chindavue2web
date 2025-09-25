<template>
  <section class="loyalty">
    <div class="loyalty__content">
      <h2>Loyalty designed for culinary exploration.</h2>
      <p>
        Tiered journeys map to culinary stories: from discovery tastings to cellar access and chef tables.
        Configure thresholds, benefits, and experiential rewards in minutes.
      </p>
      <ul class="loyalty__tiers">
        <li v-for="tier in tiers" :key="tier.name" class="loyalty__tier">
          <h3>{{ tier.name }}</h3>
          <p>{{ tier.description }}</p>
          <dl>
            <div>
              <dt>Qualification</dt>
              <dd>{{ tier.qualification }}</dd>
            </div>
            <div>
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
        <ul>
          <li v-for="metric in metrics" :key="metric.label">
            <span>{{ metric.label }}</span>
            <strong>{{ metric.value }}</strong>
          </li>
        </ul>
        <RouterLink to="/dashboard" class="button button--full button--ghost">View analytics</RouterLink>
      </div>
      <div class="loyalty__panel loyalty__panel--gradient">
        <h4>Exchange marketplace</h4>
        <p>
          Curate experiences and merchandise using the existing points mall APIs. Manage stock, set point
          costs, and schedule limited drops.
        </p>
        <RouterLink to="/rewards" class="button button--primary button--full">Explore catalog</RouterLink>
      </div>
    </aside>
  </section>
</template>

<script setup>
const tiers = [
  {
    name: 'Lapis',
    description: 'Welcome tier with curated tasting flights and birthday surprises.',
    qualification: 'Sign up + first purchase',
    highlight: 'Complimentary artisanal drink on every third visit'
  },
  {
    name: 'Obsidian',
    description: 'Unlock chef table reservations, mixology lab sessions, and curated pairings.',
    qualification: '6 visits or 4,000 THB spend per quarter',
    highlight: 'Monthly sommelier pairing and seasonal merch drop'
  },
  {
    name: 'Aurora',
    description: 'By invitation tier with private cellar evenings and collaborative menu creation.',
    qualification: 'Invitation + 12k THB annual spend',
    highlight: 'Exclusive cellar vault experiences and VIP concierge'
  }
]

const metrics = [
  { label: 'Active members', value: '25,482' },
  { label: 'Avg. points burn', value: '68%' },
  { label: 'NPS last 30 days', value: '+56' }
]
</script>

<style scoped>
.loyalty {
  padding: 96px 5vw;
  display: grid;
  gap: 48px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
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
