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

    <div class="auth-form__toggle" role="group" :aria-label="t('web.auth.register.contactToggleAria')">
      <button
        type="button"
        class="auth-form__toggle-button"
        :class="{ 'auth-form__toggle-button--active': contactMethod === 'email' }"
        :aria-pressed="contactMethod === 'email'"
        @click="setContactMethod('email')"
      >
        {{ t('web.auth.shared.contactToggle.email') }}
      </button>
      <button
        type="button"
        class="auth-form__toggle-button"
        :class="{ 'auth-form__toggle-button--active': contactMethod === 'phone' }"
        :aria-pressed="contactMethod === 'phone'"
        @click="setContactMethod('phone')"
      >
        {{ t('web.auth.shared.contactToggle.phone') }}
      </button>
    </div>

    <label v-if="contactMethod === 'email'">
      <span>{{ contactLabel }}</span>
      <input
        v-model.trim="payload.email"
        type="email"
        autocomplete="email"
        required
        :placeholder="contactPlaceholder"
      />
    </label>
    <label v-else>
      <span>{{ contactLabel }}</span>
      <input
        v-model.trim="payload.phone"
        type="tel"
        inputmode="tel"
        autocomplete="tel"
        required
        :placeholder="contactPlaceholder"
      />
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
import { computed, onBeforeUnmount, reactive, ref } from 'vue'
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
const contactMethod = ref('email')
const { t } = useI18n()

const payload = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  confirm: '',
  code: '',
  optIn: true
})

const contactLabel = computed(() => t(`web.auth.shared.contactLabel.${contactMethod.value}`))
const contactPlaceholder = computed(() => t(`web.auth.shared.contactPlaceholder.${contactMethod.value}`))
const contactValue = computed(() =>
  contactMethod.value === 'email' ? payload.email.trim() : payload.phone.trim()
)

const contactType = computed(() => (contactMethod.value === 'phone' ? 1 : 0))

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

const setContactMethod = (method) => {
  if (contactMethod.value === method) return
  contactMethod.value = method
  payload.code = ''
  countdown.value = 0
  clearTimer()
}

const sendCode = async () => {
  if (!contactValue.value) {
    site.notify({
      title: t('web.notifications.contactRequired.title'),
      message: t('web.notifications.contactRequired.message'),
      tone: 'neutral'
    })
    return
  }
  sending.value = true
  try {
    const type = contactType.value
    const email = type === 0 ? contactValue.value : ''
    const phone = type === 1 ? contactValue.value : ''
    await auth.sendRegisterCode({ email, phone, type })
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
  if (!contactValue.value) {
    site.notify({
      title: t('web.notifications.contactRequired.title'),
      message: t('web.notifications.contactRequired.message'),
      tone: 'neutral'
    })
    return
  }
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
    const type = contactType.value
    await auth.register({
      type,
      email: type === 0 ? payload.email.trim() : '',
      phone: type === 1 ? payload.phone.trim() : '',
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

.auth-form__toggle {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px;
  border-radius: 999px;
  background: rgba(99, 102, 241, 0.08);
  width: fit-content;
}

.auth-form__toggle-button {
  border: none;
  background: transparent;
  padding: 8px 16px;
  border-radius: 999px;
  font-weight: 600;
  color: #6366f1;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
}

.auth-form__toggle-button--active {
  background: #6366f1;
  color: #ffffff;
  box-shadow: 0 18px 32px rgba(79, 70, 229, 0.28);
}

.auth-form__toggle-button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.35);
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
