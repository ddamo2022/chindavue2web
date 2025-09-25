<template>
  <form class="auth-form" @submit.prevent="onSubmit">
    <h2>Join the culinary collective</h2>
    <p>Create a member account to access table reservations, tasting events, and loyalty rewards.</p>

    <div class="auth-form__grid">
      <label>
        <span>First name</span>
        <input v-model="payload.firstName" required />
      </label>
      <label>
        <span>Last name</span>
        <input v-model="payload.lastName" required />
      </label>
    </div>
    <label>
      <span>Email</span>
      <input v-model="payload.email" type="email" required />
    </label>
    <label>
      <span>Mobile number (optional)</span>
      <input v-model="payload.mobile" type="tel" />
    </label>
    <div class="auth-form__code">
      <label>
        <span>Verification code</span>
        <input v-model="payload.code" required placeholder="Enter 6-digit code" />
      </label>
      <button
        type="button"
        class="button button--ghost"
        :disabled="sending || countdown > 0"
        @click="sendCode"
      >
        <span v-if="countdown === 0 && !sending">Send code</span>
        <span v-else-if="sending">Sending…</span>
        <span v-else>Resend in {{ countdown }}s</span>
      </button>
    </div>
    <label>
      <span>Password</span>
      <input v-model="payload.password" type="password" required minlength="6" />
    </label>
    <label>
      <span>Confirm password</span>
      <input v-model="payload.confirm" type="password" required minlength="6" />
    </label>

    <label class="auth-form__checkbox">
      <input v-model="payload.optIn" type="checkbox" />
      <span>Subscribe to seasonal drops and exclusive invitations.</span>
    </label>

    <button type="submit" class="button button--primary button--full" :disabled="loading">
      <span v-if="!loading">Create account</span>
      <span v-else>Creating…</span>
    </button>
    <p class="auth-form__hint">
      Already have an account?
      <RouterLink to="/login">Sign in</RouterLink>
    </p>
  </form>
</template>

<script setup>
import { onBeforeUnmount, reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useSiteStore } from '@/stores/site'

const auth = useAuthStore()
const site = useSiteStore()
const loading = ref(false)
const sending = ref(false)
const countdown = ref(0)
const timer = ref()

const payload = reactive({
  firstName: '',
  lastName: '',
  email: '',
  mobile: '',
  password: '',
  confirm: '',
  code: '',
  optIn: true
})

const startCountdown = () => {
  countdown.value = 60
  timer.value = setInterval(() => {
    countdown.value -= 1
    if (countdown.value <= 0) {
      clearTimer()
    }
  }, 1000)
}

const clearTimer = () => {
  if (timer.value) {
    clearInterval(timer.value)
    timer.value = undefined
  }
}

const sendCode = async () => {
  if (!payload.email) {
    site.notify({
      title: 'Enter email first',
      message: 'Provide your email so we can send a verification code.',
      tone: 'neutral'
    })
    return
  }
  sending.value = true
  try {
    await auth.sendRegisterCode({ email: payload.email, type: 0 })
    site.notify({
      title: 'Verification sent',
      message: 'Check your inbox for the registration code.',
      tone: 'success'
    })
    startCountdown()
  } catch (error) {
    site.notify({
      title: 'Unable to send code',
      message: error.message || 'Please try again shortly.',
      tone: 'error'
    })
  } finally {
    sending.value = false
  }
}

const onSubmit = async () => {
  if (payload.password !== payload.confirm) {
    site.notify({
      title: 'Passwords do not match',
      message: 'Please confirm your password before continuing.',
      tone: 'error'
    })
    return
  }
  loading.value = true
  try {
    await auth.register({
      type: 0,
      email: payload.email,
      phone: payload.mobile,
      code: payload.code,
      password: payload.password
    })
  } finally {
    loading.value = false
  }
}

onBeforeUnmount(() => {
  clearTimer()
})
</script>

<style scoped>
.auth-form {
  display: grid;
  gap: 18px;
  padding: 40px;
  border-radius: 28px;
  background: #ffffff;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.14);
  max-width: 520px;
}

.auth-form__grid {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

.auth-form__code {
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr auto;
  align-items: end;
}

label {
  display: grid;
  gap: 8px;
  font-weight: 600;
  color: #475569;
}

input {
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

.auth-form__checkbox {
  display: inline-flex;
  align-items: flex-start;
  gap: 12px;
  font-weight: 500;
}

.auth-form__hint {
  text-align: center;
}
</style>
