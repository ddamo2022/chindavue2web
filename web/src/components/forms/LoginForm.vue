<template>
  <form class="auth-form" @submit.prevent="onSubmit">
    <h2>{{ t('web.auth.login.title') }}</h2>
    <p>{{ t('web.auth.login.subtitle') }}</p>

    <label>
      <span>{{ t('web.auth.login.identifier') }}</span>
      <input
        v-model="credentials.identifier"
        type="text"
        required
        autocomplete="username"
        :placeholder="t('web.auth.login.identifierPlaceholder')"
      />
    </label>
    <label>
      <span>{{ t('web.auth.login.password') }}</span>
      <input v-model="credentials.password" type="password" required minlength="6" />
    </label>

    <div class="auth-form__actions">
      <label class="auth-form__checkbox">
        <input v-model="credentials.remember" type="checkbox" />
        <span>{{ t('web.auth.login.remember') }}</span>
      </label>
      <RouterLink to="/reset" class="auth-form__link">{{ t('web.auth.login.forgot') }}</RouterLink>
    </div>

    <button type="submit" class="button button--primary button--full" :disabled="loading">
      <span v-if="!loading">{{ t('web.auth.login.submit') }}</span>
      <span v-else>{{ t('web.auth.login.submitting') }}</span>
    </button>
    <p class="auth-form__hint">
      {{ t('web.auth.login.hint') }}
      <RouterLink to="/register">{{ t('web.auth.login.hintCta') }}</RouterLink>
    </p>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useI18n } from 'vue-i18n'

const auth = useAuthStore()
const loading = ref(false)
const { t } = useI18n()

const credentials = reactive({
  identifier: '',
  password: '',
  remember: true
})

const onSubmit = async () => {
  try {
    loading.value = true
    await auth.login({
      identifier: credentials.identifier.trim(),
      password: credentials.password,
      remember: credentials.remember
    })
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.auth-form {
  display: grid;
  gap: 18px;
  padding: 40px;
  border-radius: 28px;
  background: #ffffff;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.14);
  max-width: 420px;
}

.auth-form h2 {
  font-size: 2rem;
  color: #0f172a;
}

.auth-form p {
  color: #475569;
}

label {
  display: grid;
  gap: 8px;
  font-weight: 600;
  color: #475569;
}

input[type='text'],
input[type='email'],
input[type='password'] {
  border-radius: 14px;
  border: 1px solid rgba(148, 163, 184, 0.4);
  padding: 14px 16px;
  font-size: 1rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

input:focus {
  border-color: #6366f1;
  outline: none;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.18);
}

.auth-form__actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.auth-form__checkbox {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
}

.auth-form__link {
  font-weight: 600;
  color: #6366f1;
}

.auth-form__hint {
  text-align: center;
}
</style>
