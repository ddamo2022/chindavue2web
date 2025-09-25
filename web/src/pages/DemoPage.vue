<template>
  <section class="demo">
    <header class="demo__header">
      <h1>{{ t('web.pages.demo.title') }}</h1>
      <p>{{ t('web.pages.demo.description') }}</p>
    </header>

    <form class="demo__form" @submit.prevent="onSubmit">
      <div class="demo__grid">
        <label>
          <span>{{ t('web.pages.demo.form.name') }}</span>
          <input v-model="form.name" required />
        </label>
        <label>
          <span>{{ t('web.pages.demo.form.company') }}</span>
          <input v-model="form.company" required />
        </label>
        <label>
          <span>{{ t('web.pages.demo.form.email') }}</span>
          <input v-model="form.email" type="email" required />
        </label>
        <label>
          <span>{{ t('web.pages.demo.form.phone') }}</span>
          <input v-model="form.phone" type="tel" />
        </label>
      </div>

      <label>
        <span>{{ t('web.pages.demo.form.interest') }}</span>
        <select v-model="form.interest" required>
          <option disabled value="">{{ t('web.pages.demo.form.interestPlaceholder') }}</option>
          <option>{{ t('web.pages.demo.form.interestOptions.loyalty') }}</option>
          <option>{{ t('web.pages.demo.form.interestOptions.ordering') }}</option>
          <option>{{ t('web.pages.demo.form.interestOptions.experiences') }}</option>
          <option>{{ t('web.pages.demo.form.interestOptions.partnerships') }}</option>
        </select>
      </label>

      <label>
        <span>{{ t('web.pages.demo.form.notes') }}</span>
        <textarea
          v-model="form.notes"
          rows="4"
          :placeholder="t('web.pages.demo.form.notesPlaceholder')"
        ></textarea>
      </label>

      <button type="submit" class="button button--primary button--lg" :disabled="loading">
        <span v-if="!loading">{{ t('web.pages.demo.form.submit') }}</span>
        <span v-else>{{ t('web.pages.demo.form.submitting') }}</span>
      </button>
    </form>

    <section class="demo__aside">
      <article>
        <h2>{{ t('web.pages.demo.aside.expectationsTitle') }}</h2>
        <ul>
          <li v-for="item in expectations" :key="item">{{ item }}</li>
        </ul>
      </article>
      <article>
        <h2>{{ t('web.pages.demo.aside.availabilityTitle') }}</h2>
        <p>{{ t('web.pages.demo.aside.availabilityBody') }}</p>
        <p>{{ t('web.pages.demo.aside.emailPrompt') }}</p>
      </article>
    </section>
  </section>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import { useSiteStore } from '@/stores/site'
import { useI18n } from 'vue-i18n'
import { usePageMeta } from '@/composables/usePageMeta'

const site = useSiteStore()
const loading = ref(false)
const { t, tm } = useI18n()

usePageMeta({
  titleKey: 'web.pages.demo.title',
  descriptionKey: 'web.pages.demo.description'
})

const form = reactive({
  name: '',
  company: '',
  email: '',
  phone: '',
  interest: '',
  notes: ''
})

const expectations = computed(() => {
  const list = tm('web.pages.demo.aside.expectations')
  return Array.isArray(list) ? list : []
})

const onSubmit = async () => {
  loading.value = true
  try {
    await new Promise((resolve) => setTimeout(resolve, 600))
    site.notify({
      title: t('web.notifications.demoReceived.title'),
      message: t('web.notifications.demoReceived.message'),
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
