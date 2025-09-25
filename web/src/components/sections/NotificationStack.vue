<template>
  <transition-group name="toast" tag="ul" class="toast-stack">
    <li v-for="notification in notifications" :key="notification.id" :class="['toast', `toast--${notification.tone}`]">
      <strong>{{ notification.title }}</strong>
      <p>{{ notification.message }}</p>
    </li>
  </transition-group>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useSiteStore } from '@/stores/site'

const site = useSiteStore()
const { notifications } = storeToRefs(site)
</script>

<style scoped>
.toast-stack {
  position: fixed;
  top: 96px;
  right: 32px;
  display: grid;
  gap: 12px;
  z-index: 50;
  padding: 0;
  margin: 0;
  list-style: none;
}

.toast {
  background: #ffffff;
  border-radius: 18px;
  padding: 16px 20px;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.18);
  max-width: 320px;
}

.toast strong {
  display: block;
  font-weight: 700;
  margin-bottom: 6px;
}

.toast--success {
  border-left: 4px solid #16a34a;
}

.toast--error {
  border-left: 4px solid #dc2626;
}

.toast--neutral {
  border-left: 4px solid #6366f1;
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.25s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
