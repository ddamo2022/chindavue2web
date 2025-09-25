<template>
  <form class="auth-form" @submit.prevent="onSubmit">
    <h2>{{ t('web.auth.register.title') }}</h2>
    <p>{{ t('web.auth.register.subtitle') }}</p>

    <div class="auth-form__grid">
      <label>
        <span>{{ t('web.auth.register.firstName') }}</span>
        <input v-model="payload.firstName" required />
      </label>
      <label>
        <span>{{ t('web.auth.register.lastName') }}</span>
        <input v-model="payload.lastName" required />
      </label>
    </div>
    <label>
      <span>{{ t('web.auth.register.email') }}</span>
      <input v-model="payload.email" type="email" required />
    </label>
    <label>
      <span>{{ t('web.auth.register.mobile') }}</span>
      <input v-model="payload.mobile" type="tel" />
    </label>
    <div class="auth-form__code">
      <label>
        <span>{{ t('web.auth.register.code') }}</span>
        <input
          v-model="payload.code"
          required
          :placeholder="t('web.auth.register.codePlaceholder')"
        />
      </label>
      <button
        type="button"
        class="button button--ghost"
        :disabled="sending || countdown > 0"
        @click="sendCode"
      >
        <span v-if="countdown === 0 && !sending">{{ t('web.auth.shared.sendCode') }}</span>
        <span v-else-if="sending">{{ t('web.auth.shared.sending') }}</span>
        <span v-else>{{ t('web.auth.shared.resend', { seconds: countdown }) }}</span>
      </button>
    </div>
    <label>
      <span>{{ t('web.auth.register.password') }}</span>
      <input v-model="payload.password" type="password" required minlength="6" />
    </label>
    <label>
      <span>{{ t('web.auth.register.confirm') }}</span>
      <input v-model="payload.confirm" type="password" required minlength="6" />
    </label>

    <label class="auth-form__checkbox">
      <input v-model="payload.optIn" type="checkbox" />
      <span>{{ t('web.auth.register.optIn') }}</span>
    </label>

    <button type="submit" class="button button--primary button--full" :disabled="loading">
      <span v-if="!loading">{{ t('web.auth.register.submit') }}</span>
      <span v-else>{{ t('web.auth.register.submitting') }}</span>
    </button>
    <p class="auth-form__hint">
      {{ t('web.auth.register.hint') }}
      <RouterLink to="/login">{{ t('web.auth.register.hintCta') }}</RouterLink>
    </p>
  </form>
</template>

<script setup>
import { onBeforeUnmount, reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useSiteStore } from '@/stores/site'
import { useI18n } from 'vue-i18n'

const auth = useAuthStore()
const site = useSiteStore()
const loading = ref(false)
const sending = ref(false)
const countdown = ref(0)
const timer = ref()
const { t } = useI18n()

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
      title: t('web.notifications.emailRequired.title'),
      message: t('web.notifications.emailRequired.message'),
      tone: 'neutral'
    })
    return
  }
  sending.value = true
  try {
    await auth.sendRegisterCode({ email: payload.email, type: 0 })
    site.notify({
      title: t('web.notifications.verificationRegister.title'),
      message: t('web.notifications.verificationRegister.message'),
      tone: 'success'
    })
    startCountdown()
  } catch (error) {
    site.notify({
      title: t('web.notifications.unableToSend.title'),
      message: error.message || t('web.notifications.unableToSend.message'),
      tone: 'error'
    })
  } finally {
    sending.value = false
  }
}

const onSubmit = async () => {
  if (payload.password !== payload.confirm) {
    site.notify({
      title: t('web.notifications.passwordMismatchRegister.title'),
      message: t('web.notifications.passwordMismatchRegister.message'),
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
