<template>
  <section class="experiences">
    <header class="experiences__hero">
      <p class="experiences__eyebrow">SIGNATURE PROGRAMMING</p>
      <h1>Immersive journeys crafted for the desktop era.</h1>
      <p>
        Explore seasonal happenings, chef collaborations, and mixology labs designed to keep members
        inspired. Reserve directly from the web or sync with the mobile app—every touchpoint shares the
        same APIs.
      </p>
      <div class="experiences__hero-actions">
        <RouterLink to="/register" class="button button--primary button--lg">Unlock membership</RouterLink>
        <RouterLink to="/demo" class="button button--ghost button--lg">Plan an event</RouterLink>
      </div>
    </header>

    <div class="experiences__grid">
      <article v-for="experience in experiences" :key="experience.title" class="experiences__card">
        <span class="experiences__badge">{{ experience.type }}</span>
        <h2>{{ experience.title }}</h2>
        <p>{{ experience.description }}</p>
        <ul>
          <li v-for="detail in experience.details" :key="detail">{{ detail }}</li>
        </ul>
        <footer>
          <span>{{ experience.schedule }}</span>
          <RouterLink :to="experience.cta.to" class="experiences__link">{{ experience.cta.label }}</RouterLink>
        </footer>
      </article>
    </div>

    <section class="experiences__journey">
      <div class="experiences__journey-head">
        <h2>A guest journey that flows across devices.</h2>
        <p>
          Recreate the white-glove concierge model on desktop. From discovery to redemption, every step
          mirrors the native app so members never lose context.
        </p>
      </div>
      <ol class="experiences__timeline">
        <li v-for="step in journey" :key="step.title">
          <span class="experiences__timeline-time">{{ step.time }}</span>
          <div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.body }}</p>
          </div>
        </li>
      </ol>
    </section>
  </section>
</template>

<script setup>
const experiences = [
  {
    title: 'Aurora tasting flight',
    type: 'Chef series',
    description:
      'Six-course tasting with augmented reality pairings beamed to each table for interactive stories.',
    details: ['Limited to 24 seats nightly', 'Sommelier-guided cellar access', 'Digital tasting journal sync'],
    schedule: 'Fridays & Saturdays · Chinda Bangkok',
    cta: { label: 'Reserve a table', to: '/login' }
  },
  {
    title: 'Midnight botanicals',
    type: 'Mixology lab',
    description:
      'Hands-on cocktail atelier featuring Thai botanicals, wearable sensors, and live music curated by resident DJs.',
    details: ['Member +1 invitations', 'Interactive leaderboards', 'Recipe library in app'],
    schedule: 'Bi-weekly · Chinda Clubhouse',
    cta: { label: 'Join the waitlist', to: '/register' }
  },
  {
    title: 'City lights supper club',
    type: 'Pop-up',
    description:
      'One-night-only rooftop collaborations bringing guest chefs and artists together for immersive dining.',
    details: ['Dynamic seat maps', 'Exclusive merch drops', 'Priority for Aurora tier'],
    schedule: 'Quarterly rotation · Global cities',
    cta: { label: 'Explore locations', to: '/locations' }
  }
]

const journey = [
  {
    time: 'T-14 days',
    title: 'Discovery & storytelling',
    body: 'Members explore the microsite with cinematic layouts, while marketing automation delivers targeted previews.'
  },
  {
    time: 'T-7 days',
    title: 'Personalized booking',
    body: 'Seat selection syncs with the Uni-app reservation API to honour deposits, stored value, and vouchers.'
  },
  {
    time: 'Event day',
    title: 'On-site check-in',
    body: 'QR codes generated on desktop scan into the mobile host console, ensuring a seamless welcome experience.'
  },
  {
    time: 'Post-event',
    title: 'Rewards & content recap',
    body: 'Desktop dashboards visualize feedback, points, and media galleries so members relive the moment.'
  }
]
</script>

<style scoped>
.experiences {
  padding: 120px 5vw 80px;
  display: grid;
  gap: 64px;
}

.experiences__hero {
  max-width: 920px;
  display: grid;
  gap: 20px;
}

.experiences__eyebrow {
  letter-spacing: 0.24em;
  font-weight: 600;
  font-size: 0.75rem;
  color: #6366f1;
}

.experiences__hero h1 {
  font-size: clamp(2.6rem, 3.6vw, 3.4rem);
  color: #0f172a;
}

.experiences__hero p {
  color: #475569;
  line-height: 1.8;
}

.experiences__hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 12px;
}

.experiences__grid {
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.experiences__card {
  background: #ffffff;
  border-radius: 32px;
  padding: 32px;
  display: grid;
  gap: 16px;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.1);
}

.experiences__badge {
  align-self: flex-start;
  padding: 6px 14px;
  border-radius: 999px;
  background: rgba(99, 102, 241, 0.14);
  color: #312e81;
  font-weight: 600;
  font-size: 0.75rem;
  letter-spacing: 0.12em;
}

.experiences__card h2 {
  font-size: 1.6rem;
  color: #0f172a;
}

.experiences__card p {
  color: #475569;
  line-height: 1.7;
}

.experiences__card ul {
  display: grid;
  gap: 8px;
  color: #1f2937;
  font-weight: 500;
}

.experiences__card li::before {
  content: '•';
  margin-right: 8px;
  color: #6366f1;
}

.experiences__card footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  color: #6366f1;
  font-weight: 600;
}

.experiences__link {
  color: #6366f1;
}

.experiences__journey {
  background: #0f172a;
  color: rgba(248, 250, 252, 0.92);
  border-radius: 40px;
  padding: 48px;
  display: grid;
  gap: 32px;
}

.experiences__journey-head {
  max-width: 720px;
  display: grid;
  gap: 12px;
}

.experiences__journey-head h2 {
  font-size: clamp(2rem, 3vw, 2.8rem);
}

.experiences__journey-head p {
  color: rgba(203, 213, 225, 0.86);
  line-height: 1.8;
}

.experiences__timeline {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 24px;
}

.experiences__timeline li {
  display: grid;
  gap: 8px;
  grid-template-columns: 140px 1fr;
  align-items: start;
}

.experiences__timeline-time {
  font-weight: 700;
  color: #a855f7;
}

.experiences__timeline h3 {
  margin: 0;
  font-size: 1.25rem;
}

.experiences__timeline p {
  margin: 6px 0 0;
  color: rgba(226, 232, 240, 0.9);
  line-height: 1.6;
}

@media (max-width: 720px) {
  .experiences__timeline li {
    grid-template-columns: 1fr;
  }
}
</style>
