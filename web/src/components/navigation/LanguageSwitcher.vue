<template>
  <label class="language-switcher">
    <span class="sr-only">{{ t('web.language.label') }}</span>
    <select v-model="selectedLocale" class="language-switcher__select">
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </label>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { setActiveLocale, supportedLocales } from '@/plugins/i18n'

const { locale, t } = useI18n()

const selectedLocale = computed({
  get: () => locale.value,
  set: (value) => {
    setActiveLocale(value)
  }
})

const options = computed(() =>
  supportedLocales.map((value) => ({
    value,
    label: t(`web.language.options.${value}`)
  }))
)
</script>

<style scoped>
.language-switcher {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 2px 8px;
  background: rgba(148, 163, 184, 0.18);
}

.language-switcher__select {
  appearance: none;
  border: none;
  background: transparent;
  font-weight: 600;
  color: #1e293b;
  padding: 6px 10px;
  cursor: pointer;
  outline: none;
}

.language-switcher__select:focus {
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.35);
  border-radius: 999px;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
