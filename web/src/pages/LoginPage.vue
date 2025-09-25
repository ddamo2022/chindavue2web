<template>
  <section class="auth-page">
    <div class="auth-page__intro">
      <h1>Member access</h1>
      <p>
        Use your Chinda account to manage reservations, track points, and unlock curated events across
        all of our venues. Your login works across mobile and the new desktop experience.
      </p>
      <ul>
        <li>Unified credentials across platforms</li>
        <li>Track points and stored value balances</li>
        <li>Redeem rewards and experiences instantly</li>
      </ul>
    </div>
    <LoginForm />
  </section>
</template>

<script setup>
import LoginForm from '@/components/forms/LoginForm.vue'
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
