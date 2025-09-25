<template>
  <section class="auth-page">
    <div class="auth-page__intro">
      <h1>Elevate every visit.</h1>
      <p>
        Become part of the Chinda collective and receive curated itineraries, priority reservations, and
        experiential rewards. We combine culinary craft with digital convenience.
      </p>
      <ul>
        <li>Personalized welcome experiences</li>
        <li>Seasonal drops tailored to your tastes</li>
        <li>Priority access to chef collaborations</li>
      </ul>
    </div>
    <RegisterForm />
  </section>
</template>

<script setup>
import RegisterForm from '@/components/forms/RegisterForm.vue'
</script>

<style scoped>
.auth-page {
  padding: 120px 5vw;
  display: grid;
  gap: 48px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  align-items: center;
}

.auth-page__intro h1 {
  font-size: clamp(2.4rem, 3vw, 3rem);
  color: #0f172a;
  margin-bottom: 16px;
}

.auth-page__intro p {
  color: #475569;
  line-height: 1.7;
}

.auth-page__intro ul {
  margin-top: 24px;
  display: grid;
  gap: 12px;
  color: #1e293b;
  font-weight: 600;
}

.auth-page__intro li::before {
  content: '✓';
  margin-right: 8px;
  color: #6366f1;
}
</style>
