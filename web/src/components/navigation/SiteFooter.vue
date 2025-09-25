<template>
  <footer class="site-footer">
    <div class="site-footer__inner container">
      <div class="site-footer__primary">
        <div>
          <h3>{{ brandTitle }}</h3>
          <p>{{ description }}</p>
          <div class="site-footer__contact">
            <a v-if="supportEmail" :href="`mailto:${supportEmail}`">{{ supportEmail }}</a>
            <a v-if="supportPhone" :href="`tel:${supportPhone}`">{{ supportPhone }}</a>
          </div>
          <div v-if="footerCtas.length" class="site-footer__cta">
            <component
              v-for="cta in footerCtas"
              :key="ctaKey(cta)"
              :is="cta.to ? RouterLink : 'a'"
              v-bind="cta.to
                ? { to: cta.to }
                : { href: cta.href, target: cta.external ? '_blank' : undefined, rel: cta.external ? 'noopener' : undefined }"
              class="button"
              :class="cta.variant === 'primary' ? 'button--primary' : 'button--ghost'"
            >
              {{ cta.label }}
            </component>
          </div>
        </div>
        <div v-if="sections.length" class="site-footer__links">
          <div v-for="section in sections" :key="section.key">
            <span v-if="section.label" class="site-footer__label">{{ section.label }}</span>
            <template v-for="link in section.links" :key="linkKey(link)">
              <RouterLink
                v-if="link.to"
                :to="link.to"
                class="site-footer__link"
              >
                {{ link.label }}
              </RouterLink>
              <a
                v-else
                :href="link.href"
                class="site-footer__link"
                :target="link.external ? '_blank' : undefined"
                :rel="link.external ? 'noopener' : undefined"
              >
                {{ link.label }}
              </a>
            </template>
          </div>
        </div>
      </div>
      <div class="site-footer__bottom">
        <span>© {{ copyrightYear }} {{ organization }}</span>
        <div class="site-footer__socials">
          <a
            v-for="social in socialLinks"
            :key="social.label"
            :href="social.url"
            class="site-footer__social"
            :aria-label="social.label"
            target="_blank"
            rel="noopener"
          >
            {{ social.abbr }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useSiteStore } from '@/stores/site'

const site = useSiteStore()
const { config, brandName } = storeToRefs(site)
const { t } = useI18n()

const ensureText = (value) => (typeof value === 'string' ? value.trim() : '')
const ensureArray = (value) => (Array.isArray(value) ? value : [])

const footerConfig = computed(() => {
  const info = config.value.siteInfo || {}
  const base = info.web?.footer || info.footer || {}
  return typeof base === 'object' && base !== null ? base : {}
})

const resolveKeyLabel = (key) => {
  if (!key) return ''
  const footerPath = `web.footer.links.${key}`
  const footerLabel = t(footerPath)
  if (footerLabel !== footerPath) return footerLabel
  const navPath = `web.nav.${key}`
  const navLabel = t(navPath)
  return navLabel !== navPath ? navLabel : key
}

const description = computed(() => {
  const info = config.value.siteInfo || {}
  const configDescription =
    ensureText(footerConfig.value.description || footerConfig.value.copy || footerConfig.value.summary) ||
    ensureText(info.description || info.summary)
  return configDescription || t('web.footer.description')
})

const supportEmail = computed(() => {
  const info = config.value.siteInfo || {}
  return (
    ensureText(footerConfig.value.email || footerConfig.value.supportEmail) ||
    ensureText(info.email || info.contactEmail || info.serviceEmail || '')
  )
})

const supportPhone = computed(() => {
  const info = config.value.siteInfo || {}
  return (
    ensureText(footerConfig.value.phone || footerConfig.value.supportPhone) ||
    ensureText(info.tel || info.phone || info.contactPhone || '')
  )
})

const brandTitle = computed(() => brandName.value)
const organization = computed(
  () =>
    ensureText(footerConfig.value.organization) ||
    ensureText(config.value.siteInfo?.company) ||
    `${brandTitle.value}`
)
const copyrightYear = new Date().getFullYear()

const normalizeLink = (link) => {
  if (!link) return null
  const key = ensureText(link.key || link.id || '')
  const label = ensureText(link.label || link.title || link.text) || resolveKeyLabel(key)
  const to = typeof link.to === 'string' ? link.to : undefined
  const hrefCandidate = link.href ?? link.url
  const href = typeof hrefCandidate === 'string' ? hrefCandidate : undefined
  if (!label || !(to || href)) return null
  const external = Boolean(link.external || (!to && href && /^https?:/i.test(href)))
  return { key: key || label, label, to, href, external }
}

const normalizeCta = (cta, fallbackVariant = 'ghost') => {
  if (!cta) return null
  const key = ensureText(cta.key || cta.id || '')
  const label = ensureText(cta.label || cta.title || cta.text) || resolveKeyLabel(key)
  const to = typeof cta.to === 'string' ? cta.to : undefined
  const hrefCandidate = cta.href ?? cta.url
  const href = typeof hrefCandidate === 'string' ? hrefCandidate : undefined
  if (!label || !(to || href)) return null
  const variant = cta.variant || cta.style || cta.kind || fallbackVariant
  const external = Boolean(cta.external || (!to && href && /^https?:/i.test(href)))
  return {
    key: key || label,
    label,
    to,
    href,
    external,
    variant: variant === 'primary' ? 'primary' : 'ghost'
  }
}

const fallbackCtas = computed(() => [
  { label: t('web.footer.ctaJoin'), to: '/register', external: false, variant: 'primary', key: 'join' },
  { label: t('web.footer.ctaSupport'), to: '/support', external: false, variant: 'ghost', key: 'support' }
])

const footerCtas = computed(() => {
  const raw = footerConfig.value
  const entries = [raw.primaryCta, raw.secondaryCta, ...(ensureArray(raw.ctas))]
    .map((entry, index) => normalizeCta(entry, index === 0 ? 'primary' : 'ghost'))
    .filter(Boolean)
  return entries.length ? entries : fallbackCtas.value
})

const defaultSections = computed(() => [
  {
    key: 'platform',
    label: t('web.footer.sections.platform'),
    links: [
      { key: 'overview', to: '/', label: t('web.footer.links.overview') },
      { key: 'experiences', to: '/experiences', label: t('web.footer.links.experiences') },
      { key: 'membership', to: '/membership', label: t('web.footer.links.membership') },
      { key: 'rewards', to: '/rewards', label: t('web.footer.links.rewards') },
      { key: 'locations', to: '/locations', label: t('web.footer.links.locations') },
      { key: 'dashboard', to: '/dashboard', label: t('web.footer.links.dashboard') }
    ]
  },
  {
    key: 'resources',
    label: t('web.footer.sections.resources'),
    links: [
      { key: 'demo', to: '/demo', label: t('web.footer.links.demo') },
      { key: 'implementation', href: '#', label: t('web.footer.links.implementation') },
      { key: 'brand', href: '#', label: t('web.footer.links.brand') },
      { key: 'api', href: '#', label: t('web.footer.links.api') },
      { key: 'security', href: '#', label: t('web.footer.links.security') }
    ]
  },
  {
    key: 'legal',
    label: t('web.footer.sections.legal'),
    links: [
      { key: 'terms', href: '#', label: t('web.footer.links.terms') },
      { key: 'privacy', href: '#', label: t('web.footer.links.privacy') },
      { key: 'cookies', href: '#', label: t('web.footer.links.cookies') }
    ]
  }
])

const sections = computed(() => {
  const configSections = ensureArray(footerConfig.value.sections || footerConfig.value.columns || footerConfig.value.groups)
    .map((section) => {
      const key = ensureText(section.key || section.id || '')
      const label = ensureText(section.label || section.title) || resolveKeyLabel(key)
      const links = ensureArray(section.links || section.items || section.children)
        .map((item) => normalizeLink(item))
        .filter(Boolean)
      if (!links.length) return null
      return {
        key: key || label || links[0]?.key,
        label,
        links
      }
    })
    .filter(Boolean)
  if (configSections.length) {
    return configSections
  }
  return defaultSections.value.map((section) => ({
    key: section.key,
    label: section.label,
    links: section.links.map((link) => normalizeLink(link)).filter(Boolean)
  }))
})

const linkKey = (link) => link.key || link.to || link.href || link.label
const ctaKey = (cta) => cta.key || cta.to || cta.href || cta.label

const resolveLink = (info, keys) => keys.map((key) => info[key]).find((value) => !!value)

const socialLinks = computed(() => {
  const rawSocials = ensureArray(footerConfig.value.socials)
    .map((entry) => {
      const label = ensureText(entry.label || entry.title || entry.name)
      const url = ensureText(entry.url || entry.href)
      if (!label || !url) return null
      const abbr = ensureText(entry.abbr || entry.short || label.slice(0, 2))
      return { label, url, abbr: abbr || label.slice(0, 2).toUpperCase() }
    })
    .filter(Boolean)

  if (rawSocials.length) {
    return rawSocials
  }

  const info = config.value.siteInfo || {}
  const fallback = [
    { label: 'Facebook', abbr: 'Fb', keys: ['facebook', 'facebookLink', 'facebook_url'] },
    { label: 'Instagram', abbr: 'Ig', keys: ['instagram', 'instagramLink', 'instagram_url'] },
    { label: 'Line', abbr: 'Ln', keys: ['line', 'lineLink', 'line_url', 'lineOfficial'] }
  ]
  return fallback
    .map((entry) => ({ ...entry, url: resolveLink(info, entry.keys) }))
    .filter((entry) => entry.url)
})
</script>

<style scoped>
.site-footer {
  margin-top: 80px;
  padding: 96px 0 48px;
  background: #0f172a;
  color: rgba(255, 255, 255, 0.92);
}

.site-footer__inner {
  display: grid;
  gap: 64px;
}

.site-footer__primary {
  display: grid;
  gap: 48px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.site-footer h3 {
  font-size: 1.5rem;
  margin-bottom: 12px;
}

.site-footer p {
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.72);
}

.site-footer__cta {
  display: flex;
  gap: 12px;
  margin-top: 24px;
  flex-wrap: wrap;
}

.site-footer__contact {
  display: flex;
  gap: 12px;
  margin: 20px 0 0;
  flex-wrap: wrap;
}

.site-footer__contact a {
  color: rgba(255, 255, 255, 0.72);
  font-weight: 600;
}

.site-footer__links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 32px;
}

.site-footer__label {
  display: block;
  font-weight: 600;
  margin-bottom: 12px;
}

.site-footer__link {
  display: block;
  color: rgba(255, 255, 255, 0.72);
  padding: 6px 0;
}

.site-footer__link:hover {
  color: #ffffff;
}

.site-footer__link:focus-visible {
  outline: 2px solid rgba(148, 163, 184, 0.6);
  outline-offset: 2px;
}

.site-footer__bottom {
  border-top: 1px solid rgba(148, 163, 184, 0.24);
  padding-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
}

.site-footer__socials {
  display: flex;
  gap: 12px;
}

.site-footer__social {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(148, 163, 184, 0.24);
  display: grid;
  place-items: center;
  color: rgba(255, 255, 255, 0.8);
}

.site-footer__social:hover {
  border-color: rgba(255, 255, 255, 0.6);
  color: #ffffff;
}
</style>
