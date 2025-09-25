<template>
  <footer class="site-footer">
    <div class="site-footer__primary">
      <div>
        <h3>{{ brandTitle }}</h3>
        <p>{{ description }}</p>
        <div class="site-footer__contact">
          <a v-if="supportEmail" :href="`mailto:${supportEmail}`">{{ supportEmail }}</a>
          <a v-if="supportPhone" :href="`tel:${supportPhone}`">{{ supportPhone }}</a>
        </div>
        <div class="site-footer__cta">
          <RouterLink to="/register" class="button button--primary">{{ t('web.footer.ctaJoin') }}</RouterLink>
          <RouterLink to="/support" class="button button--ghost">{{ t('web.footer.ctaSupport') }}</RouterLink>
        </div>
      </div>
      <div class="site-footer__links">
        <div>
          <span class="site-footer__label">{{ t('web.footer.sections.platform') }}</span>
          <RouterLink to="/" class="site-footer__link">{{ t('web.footer.links.overview') }}</RouterLink>
          <RouterLink to="/experiences" class="site-footer__link">{{ t('web.footer.links.experiences') }}</RouterLink>
          <RouterLink to="/membership" class="site-footer__link">{{ t('web.footer.links.membership') }}</RouterLink>
          <RouterLink to="/rewards" class="site-footer__link">{{ t('web.footer.links.rewards') }}</RouterLink>
          <RouterLink to="/locations" class="site-footer__link">{{ t('web.footer.links.locations') }}</RouterLink>
          <RouterLink to="/dashboard" class="site-footer__link">{{ t('web.footer.links.dashboard') }}</RouterLink>
        </div>
        <div>
          <span class="site-footer__label">{{ t('web.footer.sections.resources') }}</span>
          <RouterLink to="/demo" class="site-footer__link">{{ t('web.footer.links.demo') }}</RouterLink>
          <a class="site-footer__link" href="#">{{ t('web.footer.links.implementation') }}</a>
          <a class="site-footer__link" href="#">{{ t('web.footer.links.brand') }}</a>
          <a class="site-footer__link" href="#">{{ t('web.footer.links.api') }}</a>
          <a class="site-footer__link" href="#">{{ t('web.footer.links.security') }}</a>
        </div>
        <div>
          <span class="site-footer__label">{{ t('web.footer.sections.legal') }}</span>
          <a class="site-footer__link" href="#">{{ t('web.footer.links.terms') }}</a>
          <a class="site-footer__link" href="#">{{ t('web.footer.links.privacy') }}</a>
          <a class="site-footer__link" href="#">{{ t('web.footer.links.cookies') }}</a>
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

const description = computed(() => {
  const info = config.value.siteInfo || {}
  return (
    info.description ||
    info.summary ||
    t('web.footer.description')
  )
})

const supportEmail = computed(() => config.value.siteInfo?.email || config.value.siteInfo?.contactEmail || '')
const supportPhone = computed(() => config.value.siteInfo?.tel || config.value.siteInfo?.phone || '')

const brandTitle = computed(() => brandName.value)
const organization = computed(() => config.value.siteInfo?.company || `${brandTitle.value}`)
const copyrightYear = new Date().getFullYear()

const resolveLink = (info, keys) => keys.map((key) => info[key]).find((value) => !!value)

const socialLinks = computed(() => {
  const info = config.value.siteInfo || {}
  const entries = [
    { label: 'Facebook', abbr: 'Fb', keys: ['facebook', 'facebookLink', 'facebook_url'] },
    { label: 'Instagram', abbr: 'Ig', keys: ['instagram', 'instagramLink', 'instagram_url'] },
    { label: 'Line', abbr: 'Ln', keys: ['line', 'lineLink', 'line_url', 'lineOfficial'] }
  ]
  return entries
    .map((entry) => ({ ...entry, url: resolveLink(info, entry.keys) }))
    .filter((entry) => entry.url)
})
</script>

<style scoped>
.site-footer {
  margin-top: 80px;
  padding: 80px 5vw 48px;
  background: #0f172a;
  color: rgba(255, 255, 255, 0.92);
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

.site-footer__bottom {
  margin-top: 64px;
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
