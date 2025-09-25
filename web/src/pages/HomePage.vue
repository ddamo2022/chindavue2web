<template>
  <div class="home">
    <HeroPrimary />
    <FeatureGrid />
    <ExperienceTimeline />
    <LoyaltyOverview />
    <section class="home__showcase">
      <article class="home__card">
        <h2>Signature experiences</h2>
        <p>
          From augmented reality tastings to rooftop supper clubs, explore the journeys curated for members
          across our flagship cities.
        </p>
        <RouterLink to="/experiences" class="button button--ghost">Discover the lineup</RouterLink>
      </article>
      <article class="home__card home__card--accent">
        <h2>Visit our destinations</h2>
        <p>
          Browse immersive lounges, check amenities, and sync reservations with the same APIs powering the
          mobile app.
        </p>
        <RouterLink to="/locations" class="button button--primary">Explore locations</RouterLink>
      </article>
    </section>
  </div>
</template>

<script setup>
import HeroPrimary from '@/components/hero/HeroPrimary.vue'
import FeatureGrid from '@/components/sections/FeatureGrid.vue'
import ExperienceTimeline from '@/components/sections/ExperienceTimeline.vue'
import LoyaltyOverview from '@/components/sections/LoyaltyOverview.vue'
</script>

<style scoped>
.home {
  display: grid;
  gap: 40px;
}

.home__showcase {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.home__card {
  background: #ffffff;
  border-radius: 28px;
  padding: 32px;
  display: grid;
  gap: 16px;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.08);
}

.home__card h2 {
  font-size: 1.6rem;
  color: #0f172a;
}

.home__card p {
  color: #475569;
  line-height: 1.6;
}

.home__card--accent {
  background: linear-gradient(140deg, rgba(99, 102, 241, 0.95), rgba(168, 85, 247, 0.95));
  color: rgba(248, 250, 252, 0.95);
}

.home__card--accent p {
  color: rgba(226, 232, 240, 0.92);
}
</style>
