<template>
  <section class="hero">
    <div class="hero__content">
      <p class="hero__eyebrow">NEXT-GEN HOSPITALITY PLATFORM</p>
      <h1>Deliver a unified guest experience across dine-in, delivery and loyalty.</h1>
      <p class="hero__lead">
        Design inspired by our flagship concept. Engage guests with immersive storytelling, effortless
        ordering, and a membership journey that feels bespoke.
      </p>
      <div class="hero__actions">
        <RouterLink to="/register" class="button button--primary button--lg">Launch membership</RouterLink>
        <RouterLink to="/demo" class="button button--ghost button--lg">Request a demo</RouterLink>
      </div>
      <dl class="hero__stats">
        <div>
          <dt>25k+</dt>
          <dd>Monthly active members</dd>
        </div>
        <div>
          <dt>86%</dt>
          <dd>Repeat purchase uplift</dd>
        </div>
        <div>
          <dt>12</dt>
          <dd>Markets with localized experience</dd>
        </div>
      </dl>
    </div>
    <div class="hero__media">
      <div class="hero__card">
        <img src="/hero-shot.svg" alt="Chinda dining" />
        <div class="hero__badge">
          <span class="hero__badge-label">Members first</span>
          <p class="hero__badge-text">Personalized tasting menus, seasonal drinks, and curated pairings.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: grid;
  gap: 48px;
  padding: 96px 5vw 72px;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}

.hero__eyebrow {
  letter-spacing: 0.24em;
  font-weight: 600;
  color: #6366f1;
  font-size: 0.75rem;
  text-transform: uppercase;
}

.hero h1 {
  font-size: clamp(2.5rem, 3.8vw, 3.5rem);
  line-height: 1.05;
  color: #0f172a;
  margin: 16px 0;
}

.hero__lead {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #475569;
  max-width: 560px;
}

.hero__actions {
  display: flex;
  gap: 16px;
  margin: 32px 0 40px;
  flex-wrap: wrap;
}

.hero__stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 24px;
}

.hero__stats dt {
  font-size: 2rem;
  font-weight: 700;
  color: #0f172a;
}

.hero__stats dd {
  color: #64748b;
}

.hero__media {
  display: flex;
  justify-content: center;
}

.hero__card {
  position: relative;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.12);
}

.hero__card img {
  display: block;
  width: min(520px, 80vw);
  height: auto;
}

.hero__badge {
  position: absolute;
  inset: auto 24px 24px 24px;
  background: rgba(15, 23, 42, 0.85);
  color: rgba(248, 250, 252, 0.92);
  border-radius: 20px;
  padding: 20px 24px;
  backdrop-filter: blur(8px);
}

.hero__badge-label {
  font-weight: 600;
  font-size: 0.75rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #a855f7;
}

.hero__badge-text {
  margin-top: 8px;
  line-height: 1.6;
}
</style>
