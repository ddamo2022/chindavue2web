<template>
  <div class="app-shell">
    <SkipNav />
    <AnnouncementBar />
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
      <aside v-if="menuOpen" id="main-nav-drawer" class="mobile-menu">
        <nav>
          <template v-for="link in navLinks" :key="link.key">
            <RouterLink
              v-if="link.to"
              :to="link.to"
              class="mobile-menu__link"
              @click="closeMenu"
            >
              {{ link.label }}
            </RouterLink>
            <a
              v-else-if="link.href"
              :href="link.href"
              class="mobile-menu__link"
              :target="link.external ? '_blank' : undefined"
              :rel="link.external ? 'noopener' : undefined"
              @click="closeMenu"
            >
              {{ link.label }}
            </a>
          </template>
        </nav>
        <LanguageSwitcher class="mobile-menu__language" />
      </aside>
    </transition>

    <main id="main-content" class="app-shell__content" tabindex="-1">
      <RouterView />
    </main>

    <SiteFooter />
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink, RouterView } from 'vue-router'
import { storeToRefs } from 'pinia'
import AnnouncementBar from '@/components/navigation/AnnouncementBar.vue'
import MainNav from '@/components/navigation/MainNav.vue'
import SiteFooter from '@/components/navigation/SiteFooter.vue'
import NotificationStack from '@/components/sections/NotificationStack.vue'
import LanguageSwitcher from '@/components/navigation/LanguageSwitcher.vue'
import SkipNav from '@/components/layout/SkipNav.vue'
import { useSiteStore } from '@/stores/site'
import { useAuthStore } from '@/stores/auth'
import { useMemberStore } from '@/stores/member'

const menuOpen = ref(false)
const site = useSiteStore()
const auth = useAuthStore()
const member = useMemberStore()
const { t } = useI18n()

const { brandName } = storeToRefs(site)
const { profile: authProfile, isAuthenticated } = storeToRefs(auth)
const { profile: memberProfile, pointsBalance } = storeToRefs(member)

const ensureArray = (value) => (Array.isArray(value) ? value : [])
const ensureText = (value) => (typeof value === 'string' ? value.trim() : '')
const normalizeLinkTarget = (value) => (typeof value === 'string' ? value : undefined)

const translateNavKey = (key) => {
  if (!key) return ''
  const navPath = `web.nav.${key}`
  const navLabel = t(navPath)
  if (navLabel !== navPath) return navLabel
  const footerPath = `web.footer.links.${key}`
  const footerLabel = t(footerPath)
  return footerLabel !== footerPath ? footerLabel : key
}

const navBlueprint = [
  { key: 'home', to: '/', requiresAuth: false },
  { key: 'experiences', to: '/experiences', requiresAuth: false },
  { key: 'membership', to: '/membership', requiresAuth: false },
  { key: 'rewards', to: '/rewards', requiresAuth: false },
  { key: 'dashboard', to: '/dashboard', requiresAuth: true },
  { key: 'locations', to: '/locations', requiresAuth: false },
  { key: 'support', to: '/support', requiresAuth: false }
]

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

const navConfig = computed(() => {
  const info = site.config.siteInfo || {}
  const webNavigation = info.web?.navigation || info.navigation || {}
  if (Array.isArray(webNavigation)) return { links: webNavigation }
  return typeof webNavigation === 'object' && webNavigation !== null ? webNavigation : {}
})

const normalizedRemoteLinks = computed(() => {
  const config = navConfig.value
  return ensureArray(config.links || config.items || config.routes)
    .map((item) => {
      const label = ensureText(item.label ?? item.title ?? item.text)
      const to = normalizeLinkTarget(item.to)
      const hrefCandidate = item.href ?? item.url
      const href = normalizeLinkTarget(hrefCandidate)
      if (!label && !(to || href)) return null
      const key = ensureText(item.key ?? item.id ?? '') || to || href || label
      const requiresAuth = Boolean(item.requiresAuth ?? item.protected ?? item.auth)
      const external = Boolean(item.external || (!to && href && /^https?:/i.test(href)))
      return {
        key,
        label,
        to,
        href,
        external,
        requiresAuth
      }
    })
    .filter((link) => link && (link.to || link.href))
})

const fallbackNavLinks = computed(() =>
  navBlueprint.map((entry) => ({
    key: entry.key,
    to: entry.to,
    href: undefined,
    external: false,
    requiresAuth: entry.requiresAuth,
    label: translateNavKey(entry.key)
  }))
)

const navLinks = computed(() => {
  const source = normalizedRemoteLinks.value.length ? normalizedRemoteLinks.value : fallbackNavLinks.value
  return source
    .map((entry) => ({
      ...entry,
      label: entry.label || (entry.key ? translateNavKey(entry.key) : ''),
      to: normalizeLinkTarget(entry.to),
      href: normalizeLinkTarget(entry.href),
      external: Boolean(entry.external || (!entry.to && entry.href && /^https?:/i.test(entry.href))),
      requiresAuth: Boolean(entry.requiresAuth)
    }))
    .filter((entry) => {
      if (entry.requiresAuth && !isAuthenticated.value) return false
      return entry.label && (entry.to || entry.href)
    })
    .map((entry) => ({
      ...entry,
      key: entry.key || entry.to || entry.href || entry.label
    }))
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

const closeMenu = () => {
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

.mobile-menu__language {
  margin-top: 24px;
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
