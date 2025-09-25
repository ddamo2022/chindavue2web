<template>
  <section class="locations">
    <header class="locations__hero">
      <h1>Flagship locations</h1>
      <p>
        Desktop visitors can browse spaces, amenities, and live availability before syncing reservations to
        the Uni-app mobile wallet. Each lounge is designed with hybrid dining and digital storytelling in
        mind.
      </p>
      <div class="locations__hero-grid">
        <div class="locations__hero-card">
          <strong>Bangkok · Riverside</strong>
          <p>Immersive LED galleries, private tasting suites, and riverside terraces with projection mapping.</p>
        </div>
        <div class="locations__hero-card">
          <strong>Singapore · Marina</strong>
          <p>Skyline views with mixology theatre, AI-personalized menus, and after-hours supper clubs.</p>
        </div>
      </div>
    </header>

    <div class="locations__map">
      <span>Interactive map coming soon — synced with existing store endpoints.</span>
    </div>

    <div class="locations__grid">
      <article v-for="location in locations" :key="location.name" class="locations__card">
        <header>
          <h2>{{ location.name }}</h2>
          <span>{{ location.region }}</span>
        </header>
        <p>{{ location.story }}</p>
        <ul>
          <li v-for="highlight in location.highlights" :key="highlight">{{ highlight }}</li>
        </ul>
        <footer>
          <a :href="`tel:${location.phone}`" class="locations__phone">{{ location.phone }}</a>
          <RouterLink :to="location.cta" class="button button--ghost">Plan a visit</RouterLink>
        </footer>
      </article>
    </div>
  </section>
</template>

<script setup>
const locations = [
  {
    name: 'Chinda Bangkok',
    region: 'Thailand',
    story:
      'Multi-sensory dining with Thai botanicals, a members-only listening lounge, and private river cruises.',
    highlights: ['24/7 concierge desk', 'LINE mini-app integration', 'Loyalty point redemption at bar'],
    phone: '+6625551234',
    cta: '/register'
  },
  {
    name: 'Chinda Singapore',
    region: 'Singapore',
    story:
      'Suspended gardens, omakase counters, and interactive chef tables broadcast to remote guests.',
    highlights: ['Chef residency program', 'Corporate suites', 'Data-driven sustainability tracker'],
    phone: '+6565557890',
    cta: '/demo'
  },
  {
    name: 'Chinda Tokyo',
    region: 'Japan',
    story:
      'Neo-noir aesthetics with underground listening bar, curated whisky vaults, and projection art corridors.',
    highlights: ['In-language concierge', 'Digital collectibles', 'Aurora tier speakeasy'],
    phone: '+8135550468',
    cta: '/experiences'
  }
]
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
  font-weight: 700;
  color: #0f172a;
}
</style>
