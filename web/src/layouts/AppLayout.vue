<template>
  <div class="app-shell">
    <MainNav
      :links="navLinks"
      :brand="brand"
      :user="navUser"
      @toggle-menu="menuOpen = !menuOpen"
      :menu-open="menuOpen"
      @logout="handleLogout"
    />
    <NotificationStack />
    <transition name="fade">
      <aside v-if="menuOpen" class="mobile-menu">
        <nav>
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="mobile-menu__link"
            @click="menuOpen = false"
          >
            {{ link.label }}
          </RouterLink>
        </nav>
      </aside>
    </transition>

    <main class="app-shell__content">
      <RouterView />
    </main>

    <SiteFooter />
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { storeToRefs } from 'pinia'
import MainNav from '@/components/navigation/MainNav.vue'
import SiteFooter from '@/components/navigation/SiteFooter.vue'
import NotificationStack from '@/components/sections/NotificationStack.vue'
import { useSiteStore } from '@/stores/site'
import { useAuthStore } from '@/stores/auth'
import { useMemberStore } from '@/stores/member'

const menuOpen = ref(false)
const site = useSiteStore()
const auth = useAuthStore()
const member = useMemberStore()

const { brandName } = storeToRefs(site)
const { profile: authProfile, isAuthenticated } = storeToRefs(auth)
const { profile: memberProfile, pointsBalance } = storeToRefs(member)

onMounted(() => {
  site.loadConfig()
  if (isAuthenticated.value && !memberProfile.value) {
    member.loadProfile({ silent: true }).catch(() => {})
  }
})

watch(isAuthenticated, (value) => {
  if (value && !memberProfile.value) {
    member.loadProfile({ silent: true }).catch(() => {})
  }
})

const baseLinks = [
  { label: 'Home', to: '/' },
  { label: 'Experiences', to: '/experiences' },
  { label: 'Membership', to: '/membership' },
  { label: 'Rewards', to: '/rewards' },
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Locations', to: '/locations' },
  { label: 'Support', to: '/support' }
]

const navLinks = computed(() => {
  if (isAuthenticated.value) {
    return baseLinks
  }
  return baseLinks.filter((link) => link.to !== '/dashboard')
})

const brand = computed(() => {
  const info = site.config.siteInfo || {}
  return {
    title: brandName.value,
    subtitle: info.slogan || info.tagline || info.subtitle || 'Experience Platform',
    logo: info.logo || '/logo.svg'
  }
})

const navUser = computed(() => {
  if (!isAuthenticated.value) return null
  const source = memberProfile.value || authProfile.value?.member || {}
  const name =
    source.nickname ||
    source.realname ||
    source.name ||
    source.email ||
    source.username ||
    'Member'
  const points = pointsBalance.value || source.integral || 0
  const tier = source.vipCard?.name || source.levelName
  return {
    name,
    tier,
    points
  }
})

const handleLogout = async () => {
  await auth.logout()
  menuOpen.value = false
}
</script>

<style scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f5f7fb;
}

.app-shell__content {
  flex: 1;
}

.mobile-menu {
  position: fixed;
  inset: 80px 0 auto 0;
  padding: 24px;
  background: rgba(15, 23, 42, 0.92);
  backdrop-filter: blur(10px);
  z-index: 15;
}

.mobile-menu__link {
  display: block;
  color: #f8fafc;
  font-weight: 600;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (min-width: 960px) {
  .mobile-menu {
    display: none;
  }
}
</style>
