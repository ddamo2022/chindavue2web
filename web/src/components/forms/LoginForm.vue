<template>
  <form class="auth-form" @submit.prevent="onSubmit">
    <h2>Welcome back</h2>
    <p>Log in to manage your membership, reservations, and rewards.</p>

    <label>
      <span>Email</span>
      <input v-model="credentials.email" type="email" required placeholder="you@example.com" />
    </label>
    <label>
      <span>Password</span>
      <input v-model="credentials.password" type="password" required minlength="6" />
    </label>

    <div class="auth-form__actions">
      <label class="auth-form__checkbox">
        <input v-model="credentials.remember" type="checkbox" />
        <span>Keep me signed in</span>
      </label>
      <RouterLink to="/reset" class="auth-form__link">Forgot password?</RouterLink>
    </div>

    <button type="submit" class="button button--primary button--full" :disabled="loading">
      <span v-if="!loading">Sign in</span>
      <span v-else>Signing in...</span>
    </button>
    <p class="auth-form__hint">
      Not a member yet?
      <RouterLink to="/register">Join the experience</RouterLink>
    </p>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
const loading = ref(false)

const credentials = reactive({
  email: '',
  password: '',
  remember: true
})

const onSubmit = async () => {
  try {
    loading.value = true
    await auth.login(credentials)
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
