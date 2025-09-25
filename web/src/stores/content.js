import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useSiteStore } from './site'

const ensureArray = (value) => (Array.isArray(value) ? value : [])
const ensureText = (value) => {
  if (typeof value === 'string') {
    return value.trim()
  }
  if (value && typeof value === 'object') {
    return ensureText(value.text || value.title || value.label || value.caption)
  }
  return ''
}

const normalizeStats = (stats, fallback) => {
  const normalized = ensureArray(stats)
    .map((stat) => ({
      value: ensureText(stat.value ?? stat.number ?? stat.count ?? stat.stat),
      label: ensureText(stat.label ?? stat.caption ?? stat.title ?? stat.description)
    }))
    .filter((stat) => stat.value && stat.label)
  return normalized.length ? normalized : fallback
}

const normalizeCtas = (ctas, fallback) => {
  const normalized = ensureArray(ctas)
    .map((cta) => {
      const label = ensureText(cta.label ?? cta.text ?? cta.title)
      if (!label) return null
      const to = typeof cta.to === 'string' ? cta.to : undefined
      const href = typeof cta.href === 'string' ? cta.href : undefined
      const external = Boolean(cta.external || (!to && href && /^https?:/i.test(href)))
      const variant = cta.variant || cta.style || cta.kind || 'ghost'
      return {
        label,
        to,
        href,
        external,
        variant: variant === 'primary' || variant === 'ghost' ? variant : variant === 'secondary' ? 'ghost' : 'primary'
      }
    })
    .filter(Boolean)
  return normalized.length ? normalized : fallback
}

const normalizeCta = (cta, fallback) => {
  const fallbackArray = fallback ? [fallback] : []
  const [normalized] = normalizeCtas(cta ? [cta] : [], fallbackArray)
  return normalized || fallback
}

const normalizeHighlights = (input) =>
  ensureArray(input)
    .map((entry) => ensureText(entry))
    .filter(Boolean)

const normalizeTiers = (tiers, fallback) => {
  const normalized = ensureArray(tiers)
    .map((tier) => {
      const name = ensureText(tier.name ?? tier.title)
      const description = ensureText(tier.description ?? tier.desc ?? tier.summary)
      const qualification = ensureText(tier.qualification ?? tier.requirement ?? tier.threshold)
      const highlight = ensureText(tier.highlight ?? tier.reward ?? tier.signature)
      if (!name || !description) return null
      return { name, description, qualification, highlight }
    })
    .filter(Boolean)
  return normalized.length ? normalized : fallback
}

const normalizeMetrics = (metrics, fallback) => {
  const normalized = ensureArray(metrics)
    .map((metric) => {
      const label = ensureText(metric.label ?? metric.title)
      const value = ensureText(metric.value ?? metric.amount ?? metric.stat)
      if (!label || !value) return null
      return { label, value }
    })
    .filter(Boolean)
  return normalized.length ? normalized : fallback
}

const deriveHeroFromLayout = (layout) => {
  if (!layout || !Array.isArray(layout.list)) return {}
  const slider = layout.list.find((block) => block?.name === 'picLunbo' && block.styles)
  if (!slider?.styles) return {}
  const styles = slider.styles
  const slide = ensureArray(styles.imgUrl).find((item) => item && (item.img || item.url)) || {}
  const hero = {}
  hero.title = ensureText(styles.title ?? slide.title)
  hero.description = ensureText(styles.description ?? styles.describe ?? styles.desc ?? slide.describe ?? slide.desc)
  hero.image = slide.img || slide.url
  hero.badge = {
    label: ensureText(slide.badgeLabel ?? styles.badgeLabel),
    text: ensureText(slide.badgeText ?? styles.badgeText)
  }
  if (styles.eyebrow || slide.eyebrow) {
    hero.eyebrow = ensureText(styles.eyebrow ?? slide.eyebrow)
  }
  if (styles.ctas || slide.button || slide.buttons) {
    const buttons = styles.ctas || slide.buttons || (slide.button ? [slide.button] : [])
    hero.ctas = ensureArray(buttons).map((button) => ({
      label: ensureText(button.text ?? button.label),
      to: typeof button.to === 'string' ? button.to : typeof button.url === 'string' && button.url.startsWith('/') ? button.url : undefined,
      href: typeof button.url === 'string' && !button.url.startsWith('/') ? button.url : undefined,
      variant: button.variant || button.style || button.kind || 'primary'
    }))
  }
  return hero
}

const deriveFeatureCards = (layout) => {
  if (!layout || !Array.isArray(layout.list)) return []
  const candidates = layout.list.filter((block) =>
    ['hot', 'btn', 'listNav', 'pictures'].includes(block?.name) && block.styles
  )
  const features = []
  candidates.forEach((block) => {
    const styles = block.styles || {}
    const items = ensureArray(styles.list || styles.data || styles.btnList || styles.nav)
    items.forEach((item) => {
      const title = ensureText(item.title ?? item.text)
      const description = ensureText(item.description ?? item.describe ?? item.desc)
      if (!title || !description) return
      features.push({
        title,
        description,
        icon: ensureText(item.icon ?? item.emoji) || '✨',
        tint: item.tint || item.gradient || styles.background || 'linear-gradient(135deg, #6366f1, #a855f7)',
        highlights: normalizeHighlights(item.highlights ?? item.points ?? item.bullets)
      })
    })
  })
  return features
}

const deriveTimelineFromLayout = (layout) => {
  if (!layout || !Array.isArray(layout.list)) return []
  const timelineBlock = layout.list.find((block) => block?.name === 'notice' && block.styles)
  if (!timelineBlock?.styles) return []
  const items = ensureArray(timelineBlock.styles.data || timelineBlock.styles.list)
  return items
    .map((item, index) => {
      const title = ensureText(item.title)
      const description = ensureText(item.description ?? item.content ?? item.desc)
      if (!title || !description) return null
      return {
        index: String(index + 1).padStart(2, '0'),
        title,
        description,
        tags: normalizeHighlights(item.tags ?? item.labels ?? item.highlights)
      }
    })
    .filter(Boolean)
}

const defaultHero = {
  eyebrow: 'NEXT-GEN HOSPITALITY PLATFORM',
  title: 'Deliver a unified guest experience across dine-in, delivery and loyalty.',
  description:
    'Design inspired by our flagship concept. Engage guests with immersive storytelling, effortless ordering, and a membership journey that feels bespoke.',
  image: '/hero-shot.svg',
  badge: {
    label: 'Members first',
    text: 'Personalized tasting menus, seasonal drinks, and curated pairings.'
  },
  stats: [
    { value: '25k+', label: 'Monthly active members' },
    { value: '86%', label: 'Repeat purchase uplift' },
    { value: '12', label: 'Markets with localized experience' }
  ],
  ctas: [
    { label: 'Launch membership', to: '/register', variant: 'primary' },
    { label: 'Request a demo', to: '/demo', variant: 'ghost' }
  ]
}

const defaultFeatures = [
  {
    title: 'Omni-channel ordering',
    icon: '💠',
    tint: 'linear-gradient(135deg, #6366f1, #a855f7)',
    description:
      'Responsive UI for dine-in, takeaway and delivery flows with keyboard-first support and accessibility baked in.',
    highlights: ['Adaptive product cards', 'Table & queue management', 'Invoice-ready receipts']
  },
  {
    title: 'Membership control center',
    icon: '👑',
    tint: 'linear-gradient(135deg, #f97316, #fb7185)',
    description:
      'Manage loyalty tiers, personalized offers, and stored value with real-time analytics directly on the dashboard.',
    highlights: ['Tier rule builder', 'Segment designer', 'Reward automation']
  },
  {
    title: 'Marketing automation',
    icon: '📡',
    tint: 'linear-gradient(135deg, #22d3ee, #3b82f6)',
    description:
      'Trigger email, SMS, and LINE campaigns using audience segments defined in the core platform.',
    highlights: ['Journey orchestration', 'Dynamic voucher templates', 'Campaign attribution']
  }
]

const defaultTimeline = [
  {
    index: '01',
    title: 'Discover',
    description:
      'A storytelling landing page highlights signature menus, flagship locations, and brand collaborations. Built with modular hero, story and CTA sections.',
    tags: ['Landing CMS', 'Menu previews', 'Location cards']
  },
  {
    index: '02',
    title: 'Engage & Join',
    description:
      'Guests create an account, bind their mobile/email, and unlock sign-up rewards. Identity is synced with the existing Uni-app membership service.',
    tags: ['Unified auth', 'Real-time validation', 'Social sign-on']
  },
  {
    index: '03',
    title: 'Transact',
    description:
      'Responsive ordering, table service, and payment experiences integrated with the existing checkout APIs.',
    tags: ['Cart sync', 'Table QR mode', 'Multi-channel pay']
  },
  {
    index: '04',
    title: 'Retain',
    description:
      'Members track points, redeem catalog rewards, and receive curated experiences. All powered by the loyalty endpoints already in production.',
    tags: ['Points ledger', 'Reward redemption', 'Experience bundles']
  }
]

const defaultShowcase = [
  {
    title: 'Signature experiences',
    description:
      'From augmented reality tastings to rooftop supper clubs, explore the journeys curated for members across our flagship cities.',
    to: '/experiences',
    external: false,
    label: 'Discover the lineup',
    variant: 'ghost'
  },
  {
    title: 'Visit our destinations',
    description:
      'Browse immersive lounges, check amenities, and sync reservations with the same APIs powering the mobile app.',
    to: '/locations',
    external: false,
    label: 'Explore locations',
    variant: 'primary',
    accent: true,
    gradient: 'linear-gradient(140deg, rgba(99, 102, 241, 0.95), rgba(168, 85, 247, 0.95))'
  }
]

const defaultLoyalty = {
  headline: 'Loyalty designed for culinary exploration.',
  copy:
    'Tiered journeys map to culinary stories: from discovery tastings to cellar access and chef tables. Configure thresholds, benefits, and experiential rewards in minutes.',
  tiers: [
    {
      name: 'Lapis',
      description: 'Welcome tier with curated tasting flights and birthday surprises.',
      qualification: 'Sign up + first purchase',
      highlight: 'Complimentary artisanal drink on every third visit'
    },
    {
      name: 'Obsidian',
      description: 'Unlock chef table reservations, mixology lab sessions, and curated pairings.',
      qualification: '6 visits or 4,000 THB spend per quarter',
      highlight: 'Monthly sommelier pairing and seasonal merch drop'
    },
    {
      name: 'Aurora',
      description: 'By invitation tier with private cellar evenings and collaborative menu creation.',
      qualification: 'Invitation + 12k THB annual spend',
      highlight: 'Exclusive cellar vault experiences and VIP concierge'
    }
  ],
  metrics: [
    { label: 'Active members', value: '25,482' },
    { label: 'Avg. points burn', value: '68%' },
    { label: 'NPS last 30 days', value: '+56' }
  ],
  analyticsCta: { label: 'View analytics', to: '/dashboard', variant: 'ghost', external: false },
  rewardsCta: { label: 'Explore catalog', to: '/rewards', variant: 'primary', external: false }
}

const mergePanels = (source = {}, fallback) => ({
  analyticsCta: normalizeCta(source.analyticsCta, fallback.analyticsCta),
  rewardsCta: normalizeCta(source.rewardsCta, fallback.rewardsCta)
})

const deriveShowcaseFromLayout = (layout) => {
  if (!layout || !Array.isArray(layout.list)) return []
  const calloutBlock = layout.list.find((block) => block?.name === 'btn' && block.styles?.btnList)
  if (!calloutBlock) return []
  return ensureArray(calloutBlock.styles.btnList)
    .map((item) => {
      const title = ensureText(item.title ?? item.text)
      const description = ensureText(item.description ?? item.desc)
      if (!title || !description) return null
      const url = typeof item.url === 'string' ? item.url : ensureText(item.to)
      const to = url && url.startsWith('/') ? url : undefined
      const href = url && !url.startsWith('/') ? url : undefined
      const external = Boolean(item.external || (!to && href && /^https?:/i.test(href || '')))
      return {
        title,
        description,
        to,
        href,
        external,
        gradient: item.gradient || styles.background,
        label: ensureText(item.buttonText ?? item.label ?? item.cta) || 'Learn more',
        variant: item.variant || item.style || 'ghost',
        accent: Boolean(item.accent || item.highlight)
      }
    })
    .filter(Boolean)
}

export const useContentStore = defineStore('content', () => {
  const site = useSiteStore()

  const marketing = computed(() => site.config.siteInfo?.web || {})

  const hero = computed(() => {
    const layoutHero = deriveHeroFromLayout(site.config.layout)
    const remoteHero = marketing.value.hero || {}
    const badge = {
      ...defaultHero.badge,
      ...layoutHero.badge,
      ...(remoteHero.badge || {})
    }
    const stats = normalizeStats(remoteHero.stats || layoutHero.stats, defaultHero.stats)
    const ctas = normalizeCtas(remoteHero.ctas || layoutHero.ctas, defaultHero.ctas)
    return {
      eyebrow: ensureText(remoteHero.eyebrow ?? layoutHero.eyebrow) || defaultHero.eyebrow,
      title: ensureText(remoteHero.title ?? layoutHero.title) || defaultHero.title,
      description: ensureText(remoteHero.description ?? layoutHero.description) || defaultHero.description,
      image: remoteHero.image || layoutHero.image || defaultHero.image,
      badge: badge.label || badge.text ? badge : null,
      stats,
      ctas
    }
  })

  const features = computed(() => {
    const layoutFeatures = deriveFeatureCards(site.config.layout)
    const remoteFeatures = ensureArray(marketing.value.features)
      .map((feature) => ({
        title: ensureText(feature.title),
        description: ensureText(feature.description ?? feature.summary),
        icon: ensureText(feature.icon) || '✨',
        tint: feature.tint || feature.gradient || 'linear-gradient(135deg, #6366f1, #a855f7)',
        highlights: normalizeHighlights(feature.highlights ?? feature.details)
      }))
      .filter((feature) => feature.title && feature.description)
    const merged = [...remoteFeatures, ...layoutFeatures]
    return merged.length ? merged : defaultFeatures
  })

  const timeline = computed(() => {
    const layoutTimeline = deriveTimelineFromLayout(site.config.layout)
    const remoteTimeline = ensureArray(marketing.value.timeline).map((item, index) => ({
      index: ensureText(item.index) || String(index + 1).padStart(2, '0'),
      title: ensureText(item.title),
      description: ensureText(item.description ?? item.summary ?? item.content),
      tags: normalizeHighlights(item.tags ?? item.labels)
    }))
    const merged = [...remoteTimeline, ...layoutTimeline].filter((item) => item.title && item.description)
    return merged.length ? merged : defaultTimeline
  })

  const showcaseCards = computed(() => {
    const remoteShowcase = ensureArray(marketing.value.showcase).map((item) => {
      const title = ensureText(item.title)
      const description = ensureText(item.description ?? item.summary)
      if (!title || !description) return null
      const to = typeof item.to === 'string' ? item.to : undefined
      const href = typeof item.href === 'string' ? item.href : undefined
      const external = Boolean(item.external || (!to && href && /^https?:/i.test(href || '')))
      return {
        title,
        description,
        to,
        href,
        external,
        gradient: item.gradient || item.background,
        label: ensureText(item.label ?? item.button ?? item.cta) || 'Learn more',
        variant: item.variant || item.style || 'ghost',
        accent: Boolean(item.accent)
      }
    }).filter(Boolean)
    const layoutShowcase = deriveShowcaseFromLayout(site.config.layout)
    const merged = [...remoteShowcase, ...layoutShowcase]
    return merged.length ? merged : defaultShowcase
  })

  const loyalty = computed(() => {
    const remoteLoyalty = marketing.value.loyalty || {}
    const headline = ensureText(remoteLoyalty.headline) || defaultLoyalty.headline
    const copy = ensureText(remoteLoyalty.copy ?? remoteLoyalty.description) || defaultLoyalty.copy
    const tiers = normalizeTiers(remoteLoyalty.tiers, defaultLoyalty.tiers)
    const metrics = normalizeMetrics(remoteLoyalty.metrics, defaultLoyalty.metrics)
    const panels = mergePanels({
      analyticsCta: remoteLoyalty.analyticsCta,
      rewardsCta: remoteLoyalty.rewardsCta
    }, defaultLoyalty)
    return {
      headline,
      copy,
      tiers,
      metrics,
      analyticsCta: panels.analyticsCta,
      rewardsCta: panels.rewardsCta
    }
  })

  return {
    hero,
    features,
    timeline,
    showcaseCards,
    loyalty
  }
})
