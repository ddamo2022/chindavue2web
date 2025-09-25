<template>
  <section class="demo">
    <header class="demo__header">
      <h1>Request a guided demo</h1>
      <p>
        Share a few details and our partnerships team will coordinate a tailored walkthrough covering
        loyalty, reservations, and integrations. Desktop, mobile, and in-venue workflows are all included.
      </p>
    </header>

    <form class="demo__form" @submit.prevent="onSubmit">
      <div class="demo__grid">
        <label>
          <span>Full name</span>
          <input v-model="form.name" required />
        </label>
        <label>
          <span>Company</span>
          <input v-model="form.company" required />
        </label>
        <label>
          <span>Email</span>
          <input v-model="form.email" type="email" required />
        </label>
        <label>
          <span>Phone</span>
          <input v-model="form.phone" type="tel" />
        </label>
      </div>

      <label>
        <span>Primary interest</span>
        <select v-model="form.interest" required>
          <option disabled value="">Select one</option>
          <option>Membership & loyalty</option>
          <option>Ordering & payments</option>
          <option>Experiential events</option>
          <option>Partnership opportunities</option>
        </select>
      </label>

      <label>
        <span>Notes</span>
        <textarea v-model="form.notes" rows="4" placeholder="Tell us about your goals"></textarea>
      </label>

      <button type="submit" class="button button--primary button--lg" :disabled="loading">
        <span v-if="!loading">Submit request</span>
        <span v-else>Sending...</span>
      </button>
    </form>

    <section class="demo__aside">
      <article>
        <h2>What to expect</h2>
        <ul>
          <li>Live demo mapped to your current tech stack</li>
          <li>API reuse plan aligned with the existing Vue 2 app</li>
          <li>PC-first design system starter kit</li>
        </ul>
      </article>
      <article>
        <h2>Availability</h2>
        <p>Weekdays 10:00–18:00 ICT · Virtual or on-site sessions</p>
        <p>Email <a href="mailto:partners@chinda.co">partners@chinda.co</a> for urgent requests.</p>
      </article>
    </section>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useSiteStore } from '@/stores/site'

const site = useSiteStore()
const loading = ref(false)

const form = reactive({
  name: '',
  company: '',
  email: '',
  phone: '',
  interest: '',
  notes: ''
})

const onSubmit = async () => {
  loading.value = true
  try {
    await new Promise((resolve) => setTimeout(resolve, 600))
    site.notify({
      title: 'Demo request received',
      message: 'Our partnerships team will reach out within 24 hours.',
      tone: 'success'
    })
    Object.assign(form, { name: '', company: '', email: '', phone: '', interest: '', notes: '' })
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.demo {
  padding: 120px 5vw 80px;
  display: grid;
  gap: 48px;
}

.demo__header {
  max-width: 760px;
  display: grid;
  gap: 16px;
}

.demo__header h1 {
  font-size: clamp(2.6rem, 3.2vw, 3.2rem);
  color: #0f172a;
}

.demo__header p {
  color: #475569;
  line-height: 1.7;
}

.demo__form {
  background: #ffffff;
  border-radius: 32px;
  padding: 40px;
  display: grid;
  gap: 20px;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.08);
  max-width: 860px;
}

.demo__grid {
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

label {
  display: grid;
  gap: 8px;
  font-weight: 600;
  color: #475569;
}

input,
select,
textarea {
  border-radius: 16px;
  border: 1px solid rgba(148, 163, 184, 0.35);
  padding: 14px 16px;
  font-size: 1rem;
}

textarea {
  resize: vertical;
}

.demo__aside {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.demo__aside article {
  background: #0f172a;
  color: rgba(248, 250, 252, 0.92);
  border-radius: 32px;
  padding: 32px;
  display: grid;
  gap: 12px;
}

.demo__aside ul {
  margin: 0;
  padding-left: 18px;
  line-height: 1.6;
}

.demo__aside a {
  color: #a855f7;
}
</style>
