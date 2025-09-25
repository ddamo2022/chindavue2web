<template>
  <header class="main-nav">
    <RouterLink to="/" class="brand">
      <img :src="brandLogo" :alt="brandTitle" class="brand__logo" />
      <div class="brand__text">
        <span class="brand__title">{{ brandTitle }}</span>
        <span v-if="brandSubtitle" class="brand__subtitle">{{ brandSubtitle }}</span>
      </div>
    </RouterLink>
    <nav class="main-nav__links">
      <template v-for="link in normalizedLinks" :key="linkKey(link)">
        <RouterLink
          v-if="link.to"
          :to="link.to"
          class="main-nav__link"
          active-class="main-nav__link--active"
        >
          {{ link.label }}
        </RouterLink>
        <a
          v-else
          :href="link.href"
          class="main-nav__link main-nav__link--external"
          :target="link.external ? '_blank' : undefined"
          :rel="link.external ? 'noopener' : undefined"
        >
          {{ link.label }}
        </a>
      </template>
    </nav>
    <div class="main-nav__actions">
      <LanguageSwitcher class="main-nav__language" />
      <div v-if="user" class="main-nav__session">
        <RouterLink to="/dashboard" class="main-nav__account">
          <span class="main-nav__avatar">{{ userInitials }}</span>
          <div class="main-nav__details">
            <span class="main-nav__name">{{ user.name }}</span>
            <span class="main-nav__meta">
              <template v-if="user.tier">{{ user.tier }} · </template>{{ userPointsLabel }}
            </span>
          </div>
        </RouterLink>
        <button class="main-nav__logout" @click="$emit('logout')">{{ logoutLabel }}</button>
      </div>
      <template v-else>
        <RouterLink to="/login" class="button button--ghost">{{ loginLabel }}</RouterLink>
        <RouterLink to="/register" class="button button--primary">{{ joinLabel }}</RouterLink>
      </template>
      <button class="main-nav__toggle" @click="$emit('toggle-menu')">
        <span :class="['main-nav__burger', { 'main-nav__burger--open': menuOpen }]"></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import LanguageSwitcher from '@/components/navigation/LanguageSwitcher.vue'

const props = defineProps({
  links: {
    type: Array,
    default: () => []
  },
  menuOpen: {
    type: Boolean,
    default: false
  },
  brand: {
    type: Object,
    default: () => ({})
  },
  user: {
    type: Object,
    default: null
  }
})

defineEmits(['toggle-menu', 'logout'])

const { t } = useI18n()

const brandTitle = computed(() => props.brand?.title || 'Chinda')
const brandSubtitle = computed(() => props.brand?.subtitle || 'Experience Platform')
const brandLogo = computed(() => props.brand?.logo || '/logo.svg')

const normalizedLinks = computed(() =>
  props.links
    .map((link) => ({
      ...link,
      label: typeof link.label === 'string' ? link.label : '',
      to: typeof link.to === 'string' ? link.to : undefined,
      href: typeof link.href === 'string' ? link.href : undefined,
      external: Boolean(link.external)
    }))
    .filter((link) => link.label && (link.to || link.href))
)

const linkKey = (link) => link.key || link.to || link.href || link.label

const userInitials = computed(() => {
  if (!props.user?.name) return 'MB'
  const initials = props.user.name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase())
    .join('')
  return initials.slice(0, 2) || 'MB'
})

const userPointsLabel = computed(() => {
  const points = Number(props.user?.points ?? 0)
  const formatted = Number.isFinite(points) ? points.toLocaleString() : '0'
  return t('web.nav.points', { count: formatted })
})

const loginLabel = computed(() => t('web.nav.login'))
const joinLabel = computed(() => t('web.nav.join'))
const logoutLabel = computed(() => t('web.nav.logout'))
</script>

<style scoped>
.main-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 20px 5vw;
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(248, 250, 252, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: inherit;
}

.brand__logo {
  width: 40px;
  height: 40px;
}

.brand__text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.brand__title {
  font-weight: 700;
  font-size: 1.25rem;
  color: #0f172a;
}

.brand__subtitle {
  font-weight: 500;
  font-size: 0.75rem;
  color: #64748b;
}

.main-nav__links {
  display: none;
  align-items: center;
  gap: 18px;
  font-weight: 600;
  flex-wrap: wrap;
}

.main-nav__link {
  color: #475569;
  padding: 8px 12px;
  border-radius: 999px;
  transition: background 0.2s ease, color 0.2s ease;
}

.main-nav__link:hover {
  background: rgba(99, 102, 241, 0.12);
  color: #312e81;
}

.main-nav__link--active {
  color: #312e81;
  background: rgba(99, 102, 241, 0.18);
}

.main-nav__link--external::after {
  content: '↗';
  font-size: 0.7em;
  margin-left: 6px;
}

.main-nav__actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.main-nav__language {
  display: none;
}

.main-nav__session {
  display: inline-flex;
  align-items: center;
  gap: 16px;
}

.main-nav__account {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(148, 163, 184, 0.32);
}

.main-nav__avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.85), rgba(168, 85, 247, 0.85));
  color: #fff;
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
}

.main-nav__details {
  display: grid;
  line-height: 1.2;
}

.main-nav__name {
  font-weight: 600;
  color: #0f172a;
}

.main-nav__meta {
  font-size: 0.75rem;
  color: #6366f1;
  font-weight: 600;
}

.main-nav__logout {
  padding: 0 12px;
  height: 36px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.32);
  background: #ffffff;
  font-weight: 600;
  color: #475569;
}

.main-nav__toggle {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid rgba(15, 23, 42, 0.12);
  background: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.main-nav__burger,
.main-nav__burger::before,
.main-nav__burger::after {
  content: '';
  display: block;
  width: 18px;
  height: 2px;
  background: #0f172a;
  transition: transform 0.3s ease;
  position: relative;
}

.main-nav__burger::before {
  transform: translateY(-6px);
}

.main-nav__burger::after {
  transform: translateY(4px);
}

.main-nav__burger--open {
  background: transparent;
}

.main-nav__burger--open::before {
  transform: rotate(45deg);
}

.main-nav__burger--open::after {
  transform: rotate(-45deg);
}

@media (min-width: 960px) {
  .main-nav__links {
    display: flex;
  }

  .main-nav__language {
    display: inline-flex;
  }

  .main-nav__toggle {
    display: none;
  }
}
</style>
