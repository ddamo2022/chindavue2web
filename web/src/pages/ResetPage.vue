<template>
  <section class="reset">
    <div class="reset__intro">
      <h1>{{ t('web.pages.reset.title') }}</h1>
      <p>{{ t('web.pages.reset.description') }}</p>
      <p class="reset__help">
        {{ t('web.pages.reset.helpPrefix') }}
        <a :href="`mailto:${helpEmail}`">{{ helpEmail }}</a>
        {{ t('web.pages.reset.helpConnector') }}
        <a :href="helpPhoneHref">{{ helpPhone }}</a>
      </p>
    </div>

    <form class="reset__form" @submit.prevent="onSubmit">
      <label>
        <span>{{ t('web.auth.reset.email') }}</span>
        <input
          v-model.trim="form.email"
          type="email"
          required
          :placeholder="t('web.auth.login.emailPlaceholder')"
        />
      </label>
      <div class="reset__code-row">
        <label>
          <span>{{ t('web.auth.reset.code') }}</span>
          <input
            v-model.trim="form.code"
            required
            :placeholder="t('web.auth.reset.codePlaceholder')"
          />
        </label>
        <button type="button" class="button button--ghost" :disabled="sending || countdown > 0" @click="sendCode">
          <span v-if="countdown === 0 && !sending">{{ t('web.auth.shared.sendCode') }}</span>
          <span v-else-if="sending">{{ t('web.auth.shared.sending') }}</span>
          <span v-else>{{ t('web.auth.shared.resend', { seconds: countdown }) }}</span>
        </button>
      </div>
      <label>
        <span>{{ t('web.auth.reset.password') }}</span>
        <input v-model="form.password" type="password" required minlength="6" />
      </label>
      <label>
        <span>{{ t('web.auth.reset.confirm') }}</span>
        <input v-model="form.confirm" type="password" required minlength="6" />
      </label>
      <button type="submit" class="button button--primary button--full" :disabled="loading">
        <span v-if="!loading">{{ t('web.auth.reset.submit') }}</span>
        <span v-else>{{ t('web.auth.reset.submitting') }}</span>
      </button>
      <RouterLink to="/login" class="reset__back">{{ t('web.auth.reset.back') }}</RouterLink>
    </form>
  </section>
</template>

<script setup>
import { onBeforeUnmount, reactive, ref, computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useSiteStore } from '@/stores/site'
import { useI18n } from 'vue-i18n'
import { usePageMeta } from '@/composables/usePageMeta'

const auth = useAuthStore()
const site = useSiteStore()
const loading = ref(false)
const sending = ref(false)
const countdown = ref(0)
const timer = ref()
const { t } = useI18n()

usePageMeta({
  titleKey: 'web.pages.reset.title',
  descriptionKey: 'web.pages.reset.description'
})

const form = reactive({
  email: '',
  code: '',
  password: '',
  confirm: ''
})

const helpEmail = computed(() => t('web.pages.reset.helpEmail'))
const helpPhone = computed(() => t('web.pages.reset.helpPhone'))
const helpPhoneHref = computed(() => `tel:${helpPhone.value.replace(/\s+/g, '')}`)

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
      title: t('web.notifications.emailRequired.title'),
      message: t('web.notifications.emailRequired.message'),
      tone: 'neutral'
    })
    return
  }
  sending.value = true
  try {
    await auth.sendResetCode({ email: form.email, type: 0 })
    site.notify({
      title: t('web.notifications.verificationReset.title'),
      message: t('web.notifications.verificationReset.message'),
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
  if (form.password !== form.confirm) {
    site.notify({
      title: t('web.notifications.passwordMismatchReset.title'),
      message: t('web.notifications.passwordMismatchReset.message'),
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
      title: t('web.notifications.passwordUpdated.title'),
      message: t('web.notifications.passwordUpdated.message'),
      tone: 'success'
    })
    Object.assign(form, { email: '', code: '', password: '', confirm: '' })
    clearTimer()
    countdown.value = 0
  } catch (error) {
    site.notify({
      title: t('web.notifications.resetFailed.title'),
      message: error.message || t('web.notifications.resetFailed.message'),
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
