import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/HomePage.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/LoginPage.vue')
  },
  {
    path: '/reset',
    name: 'reset',
    component: () => import('@/pages/ResetPage.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/pages/RegisterPage.vue')
  },
  {
    path: '/experiences',
    name: 'experiences',
    component: () => import('@/pages/ExperiencesPage.vue')
  },
  {
    path: '/membership',
    name: 'membership',
    component: () => import('@/pages/MembershipPage.vue')
  },
  {
    path: '/rewards',
    name: 'rewards',
    component: () => import('@/pages/RewardsPage.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('@/pages/ShopPage.vue')
  },
  {
    path: '/locations',
    name: 'locations',
    component: () => import('@/pages/LocationsPage.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/pages/DashboardPage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/support',
    name: 'support',
    component: () => import('@/pages/SupportPage.vue')
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('@/pages/DemoPage.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/pages/NotFoundPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore()
  auth.restoreSession()
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    next({ name: 'login', query: { redirect: to.fullPath } })
  } else {
    next()
  }
})

export default router
