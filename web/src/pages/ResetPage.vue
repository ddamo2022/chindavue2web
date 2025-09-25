<template>
  <section class="reset">
    <div class="reset__intro">
      <h1>Reset your password</h1>
      <p>
        Enter your email, request a verification code, and set a new password. The credentials you update
        here sync instantly with the existing Uni-app experience and native channels.
      </p>
      <p class="reset__help">
        Need assistance? Email <a href="mailto:help@chinda.co">help@chinda.co</a> or call +66 2 555 1234.
      </p>
    </div>

    <form class="reset__form" @submit.prevent="onSubmit">
      <label>
        <span>Email</span>
        <input v-model.trim="form.email" type="email" required placeholder="you@example.com" />
      </label>
      <div class="reset__code-row">
        <label>
          <span>Verification code</span>
          <input v-model.trim="form.code" required placeholder="Enter 6-digit code" />
        </label>
        <button type="button" class="button button--ghost" :disabled="sending || countdown > 0" @click="sendCode">
          <span v-if="countdown === 0 && !sending">Send code</span>
          <span v-else-if="sending">Sending...</span>
          <span v-else>Resend in {{ countdown }}s</span>
        </button>
      </div>
      <label>
        <span>New password</span>
        <input v-model="form.password" type="password" required minlength="6" />
      </label>
      <label>
        <span>Confirm password</span>
        <input v-model="form.confirm" type="password" required minlength="6" />
      </label>
      <button type="submit" class="button button--primary button--full" :disabled="loading">
        <span v-if="!loading">Save new password</span>
        <span v-else>Saving...</span>
      </button>
      <RouterLink to="/login" class="reset__back">Return to sign in</RouterLink>
    </form>
  </section>
</template>

<script setup>
import { onBeforeUnmount, reactive, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useSiteStore } from '@/stores/site'

const auth = useAuthStore()
const site = useSiteStore()
const loading = ref(false)
const sending = ref(false)
const countdown = ref(0)
const timer = ref()

const form = reactive({
  email: '',
  code: '',
  password: '',
  confirm: ''
})

const clearTimer = () => {
  if (timer.value) {
    clearInterval(timer.value)
    timer.value = undefined
  }
}

const startCountdown = () => {
  countdown.value = 60
  clearTimer()
  timer.value = setInterval(() => {
    countdown.value -= 1
    if (countdown.value <= 0) {
      clearTimer()
    }
  }, 1000)
}

const sendCode = async () => {
  if (!form.email) {
    site.notify({
      title: 'Enter email first',
      message: 'We need your email to send a verification code.',
      tone: 'neutral'
    })
    return
  }
  sending.value = true
  try {
    await auth.sendResetCode({ email: form.email, type: 0 })
    site.notify({
      title: 'Verification sent',
      message: 'Check your inbox for the reset code.',
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
  if (form.password !== form.confirm) {
    site.notify({
      title: 'Passwords do not match',
      message: 'Please confirm your new password.',
      tone: 'error'
    })
    return
  }
  loading.value = true
  try {
    await auth.requestPasswordReset({
      email: form.email,
      code: form.code,
      password: form.password,
      type: 0
    })
    site.notify({
      title: 'Password updated',
      message: 'You can now sign in with your new password.',
      tone: 'success'
    })
    Object.assign(form, { email: '', code: '', password: '', confirm: '' })
    clearTimer()
    countdown.value = 0
  } catch (error) {
    site.notify({
      title: 'Unable to reset password',
      message: error.message || 'Check the code and try again.',
      tone: 'error'
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
.reset {
  padding: 120px 5vw 80px;
  display: grid;
  gap: 48px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  align-items: start;
}

.reset__intro h1 {
  font-size: clamp(2.4rem, 3vw, 3.1rem);
  color: #0f172a;
  margin-bottom: 16px;
}

.reset__intro p {
  color: #475569;
  line-height: 1.7;
}

.reset__help {
  font-weight: 600;
}

.reset__form {
  background: #ffffff;
  border-radius: 28px;
  padding: 36px;
  display: grid;
  gap: 18px;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.12);
  max-width: 420px;
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
}

.reset__code-row {
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr auto;
  align-items: end;
}

.reset__back {
  text-align: center;
  font-weight: 600;
  color: #6366f1;
}

@media (max-width: 640px) {
  .reset__code-row {
    grid-template-columns: 1fr;
  }
}
</style>
