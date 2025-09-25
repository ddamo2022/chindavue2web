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

const normalizeDetails = (input) =>
  ensureArray(input)
    .map((entry) => ensureText(entry))
    .filter(Boolean)

const normalizeTestimonialsList = (input, fallback) => {
  const normalized = ensureArray(input)
    .map((entry) => {
      const quote = ensureText(entry.quote ?? entry.testimonial ?? entry.body ?? entry.copy)
      const author = ensureText(entry.author ?? entry.name ?? entry.person)
      if (!quote || !author) return null
      const role = ensureText(entry.role ?? entry.title ?? entry.position)
      const company = ensureText(entry.company ?? entry.organization ?? entry.org)
      const avatar = ensureText(entry.avatar ?? entry.photo ?? entry.image)
      const href = typeof entry.href === 'string' ? entry.href : typeof entry.url === 'string' ? entry.url : undefined
      const external = Boolean(entry.external || (href && /^https?:/i.test(href)))
      return {
        quote,
        author,
        role,
        company,
        avatar,
        href,
        external
      }
    })
    .filter(Boolean)
  return normalized.length ? normalized : fallback
}

const normalizePressList = (input, fallback) => {
  const normalized = ensureArray(input)
    .map((entry) => {
      const outlet = ensureText(entry.outlet ?? entry.publication ?? entry.source ?? entry.title)
      const summary = ensureText(entry.summary ?? entry.snippet ?? entry.description ?? entry.copy)
      if (!outlet || !summary) return null
      const href = typeof entry.href === 'string' ? entry.href : typeof entry.url === 'string' ? entry.url : undefined
      const date = ensureText(entry.date ?? entry.publishedAt ?? entry.time)
      const badge = ensureText(entry.badge ?? entry.label ?? '')
      const external = Boolean(entry.external || (href && /^https?:/i.test(href || '')))
      return {
        outlet,
        summary,
        href,
        date,
        badge,
        external
      }
    })
    .filter(Boolean)
  return normalized.length ? normalized : fallback
}

const normalizePartnersList = (input, fallback) => {
  const normalized = ensureArray(input)
    .map((entry) => {
      const name = ensureText(entry.name ?? entry.title ?? entry.label)
      const logo = ensureText(entry.logo ?? entry.image ?? entry.icon)
      if (!name && !logo) return null
      const href = ensureText(entry.href ?? entry.url)
      const external = Boolean(entry.external || (href && /^https?:/i.test(href)))
      return {
        name: name || 'Partner',
        logo: logo || '',
        href: href || '',
        external
      }
    })
    .filter((entry) => entry.logo || entry.name)
  return normalized.length ? normalized : fallback
}

const normalizeFaqList = (input, fallback) => {
  const normalized = ensureArray(input)
    .map((entry) => {
      const question = ensureText(entry.question ?? entry.q ?? entry.title)
      const answer = ensureText(entry.answer ?? entry.a ?? entry.description ?? entry.copy)
      if (!question || !answer) return null
      return { question, answer }
    })
    .filter(Boolean)
  return normalized.length ? normalized : fallback
}

const normalizeHeroCards = (cards, fallback) => {
  const normalized = ensureArray(cards)
    .map((card) => {
      const title = ensureText(card.title ?? card.heading ?? card.name)
      const description = ensureText(card.description ?? card.body ?? card.copy)
      if (!title || !description) return null
      return { title, description }
    })
    .filter(Boolean)
  return normalized.length ? normalized : fallback
}

const normalizeJourneySteps = (steps, fallback) => {
  const normalized = ensureArray(steps)
    .map((step, index) => {
      const title = ensureText(step.title ?? step.name)
      const description = ensureText(step.description ?? step.body ?? step.copy)
      if (!title || !description) return null
      const time = ensureText(step.time ?? step.label ?? step.index) || `T-${(index + 1) * 7} days`
      const tags = normalizeHighlights(step.tags ?? step.highlights)
      return { title, description, time, tags }
    })
    .filter(Boolean)
  return normalized.length ? normalized : fallback
}

const normalizeLocationsList = (locations, fallback) => {
  const normalized = ensureArray(locations)
    .map((location) => {
      const name = ensureText(location.name ?? location.title)
      const region = ensureText(location.region ?? location.area ?? location.country)
      const story = ensureText(location.story ?? location.description ?? location.copy)
      if (!name || !story) return null
      const highlights = normalizeHighlights(location.highlights ?? location.amenities ?? location.features)
      const phone = ensureText(location.phone ?? location.tel ?? location.contact)
      const cta = normalizeCta(location.cta, {
        label: 'Plan a visit',
        to: '/demo',
        variant: 'ghost',
        external: false
      })
      return {
        name,
        region,
        story,
        highlights,
        phone,
        cta
      }
    })
    .filter(Boolean)
  return normalized.length ? normalized : fallback
}

const normalizeSupportPlans = (plans, fallback) => {
  const normalized = ensureArray(plans)
    .map((plan) => {
      const name = ensureText(plan.name ?? plan.title)
      const description = ensureText(plan.description ?? plan.summary ?? plan.copy)
      if (!name || !description) return null
      const items = normalizeHighlights(plan.items ?? plan.features ?? plan.points)
      const cta = normalizeCta(plan.cta, {
        label: 'Talk to us',
        to: '/demo',
        variant: 'ghost',
        external: false
      })
      return { name, description, items, cta }
    })
    .filter(Boolean)
  return normalized.length ? normalized : fallback
}

const normalizeSupportContacts = (contacts, fallback, siteInfo) => {
  const normalized = ensureArray(contacts)
    .map((contact) => {
      const title = ensureText(contact.title ?? contact.name)
      const description = ensureText(contact.description ?? contact.summary ?? contact.copy)
      if (!title && !description) return null
      const email = ensureText(contact.email ?? contact.mail)
      const phone = ensureText(contact.phone ?? contact.tel)
      const href = typeof contact.href === 'string' ? contact.href : undefined
      return {
        title,
        description,
        email: email || ensureText(siteInfo?.email || siteInfo?.contactEmail || siteInfo?.serviceEmail),
        phone: phone || ensureText(siteInfo?.tel || siteInfo?.phone),
        href
      }
    })
    .filter(Boolean)
  if (normalized.length) return normalized
  const info = siteInfo || {}
  return fallback.map((entry) => ({
    title: entry.title,
    description: entry.description,
    email: entry.email || ensureText(info.email || info.contactEmail || info.serviceEmail) || '',
    phone: entry.phone || ensureText(info.tel || info.phone || info.contactPhone) || '',
    href: entry.href
  }))
}

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

const defaultExperiencesHero = {
  eyebrow: 'SIGNATURE PROGRAMMING',
  title: 'Immersive journeys crafted for the desktop era.',
  description:
    'Explore seasonal happenings, chef collaborations, and mixology labs designed to keep members inspired. Reserve directly from the web or sync with the mobile app—every touchpoint shares the same APIs.',
  ctas: [
    { label: 'Unlock membership', to: '/register', variant: 'primary', external: false },
    { label: 'Plan an event', to: '/demo', variant: 'ghost', external: false }
  ],
  cards: [
    {
      title: 'Chef residencies',
      description: 'Omakase pop-ups, guest collaborations, and live storytelling broadcast to every seat.'
    },
    {
      title: 'Immersive lounges',
      description: 'Projection-mapped mixology labs and listening bars, all powered by the shared loyalty stack.'
    }
  ]
}

const defaultExperiences = [
  {
    title: 'Aurora tasting flight',
    type: 'Chef series',
    description:
      'Six-course tasting with augmented reality pairings beamed to each table for interactive stories.',
    details: ['Limited to 24 seats nightly', 'Sommelier-guided cellar access', 'Digital tasting journal sync'],
    schedule: 'Fridays & Saturdays · Chinda Bangkok',
    cta: { label: 'Reserve a table', to: '/login', variant: 'primary', external: false }
  },
  {
    title: 'Midnight botanicals',
    type: 'Mixology lab',
    description:
      'Hands-on cocktail atelier featuring Thai botanicals, wearable sensors, and live music curated by resident DJs.',
    details: ['Member +1 invitations', 'Interactive leaderboards', 'Recipe library in app'],
    schedule: 'Bi-weekly · Chinda Clubhouse',
    cta: { label: 'Join the waitlist', to: '/register', variant: 'ghost', external: false }
  },
  {
    title: 'City lights supper club',
    type: 'Pop-up',
    description:
      'One-night-only rooftop collaborations bringing guest chefs and artists together for immersive dining.',
    details: ['Dynamic seat maps', 'Exclusive merch drops', 'Priority for Aurora tier'],
    schedule: 'Quarterly rotation · Global cities',
    cta: { label: 'Explore locations', to: '/locations', variant: 'ghost', external: false }
  }
]

const defaultExperienceJourney = [
  {
    time: 'T-14 days',
    title: 'Discovery & storytelling',
    description: 'Members explore the microsite with cinematic layouts, while marketing automation delivers targeted previews.'
  },
  {
    time: 'T-7 days',
    title: 'Personalized booking',
    description: 'Seat selection syncs with the Uni-app reservation API to honour deposits, stored value, and vouchers.'
  },
  {
    time: 'Event day',
    title: 'On-site check-in',
    description: 'QR codes generated on desktop scan into the mobile host console, ensuring a seamless welcome experience.'
  },
  {
    time: 'Post-event',
    title: 'Rewards & content recap',
    description: 'Desktop dashboards visualize feedback, points, and media galleries so members relive the moment.'
  }
]

const defaultLocationsHero = {
  title: 'Flagship locations',
  description:
    'Desktop visitors can browse spaces, amenities, and live availability before syncing reservations to the Uni-app mobile wallet. Each lounge is designed with hybrid dining and digital storytelling in mind.',
  cards: [
    {
      title: 'Bangkok · Riverside',
      description: 'Immersive LED galleries, private tasting suites, and riverside terraces with projection mapping.'
    },
    {
      title: 'Singapore · Marina',
      description: 'Skyline views with mixology theatre, AI-personalized menus, and after-hours supper clubs.'
    }
  ],
  mapNote: 'Interactive map coming soon — synced with existing store endpoints.'
}

const defaultLocations = [
  {
    name: 'Chinda Bangkok',
    region: 'Thailand',
    story: 'Multi-sensory dining with Thai botanicals, a members-only listening lounge, and private river cruises.',
    highlights: ['24/7 concierge desk', 'LINE mini-app integration', 'Loyalty point redemption at bar'],
    phone: '+6625551234',
    cta: { label: 'Plan a visit', to: '/register', variant: 'ghost', external: false }
  },
  {
    name: 'Chinda Singapore',
    region: 'Singapore',
    story: 'Suspended gardens, omakase counters, and interactive chef tables broadcast to remote guests.',
    highlights: ['Chef residency program', 'Corporate suites', 'Data-driven sustainability tracker'],
    phone: '+6565557890',
    cta: { label: 'Book a consultation', to: '/demo', variant: 'ghost', external: false }
  },
  {
    name: 'Chinda Tokyo',
    region: 'Japan',
    story: 'Neo-noir aesthetics with underground listening bar, curated whisky vaults, and projection art corridors.',
    highlights: ['In-language concierge', 'Digital collectibles', 'Aurora tier speakeasy'],
    phone: '+8135550468',
    cta: { label: 'Explore experiences', to: '/experiences', variant: 'ghost', external: false }
  }
]

const defaultSupportPlans = [
  {
    name: 'Launch assist',
    description: 'Fast-track your go-live with design templates and API walkthroughs.',
    items: ['Brand & UI kit', 'API playbook', 'Onboarding webinar'],
    cta: { label: 'Talk to us', to: '/demo', variant: 'ghost', external: false }
  },
  {
    name: 'Growth partner',
    description: 'Optimize conversion with analytics reviews and campaign planning.',
    items: ['Quarterly business review', 'Campaign planning', 'Advanced segmentation workshops'],
    cta: { label: 'Chat with success', to: '/demo', variant: 'ghost', external: false }
  },
  {
    name: 'Enterprise',
    description: 'Dedicated squad for multi-market rollouts and custom development.',
    items: ['Dedicated success manager', 'Custom component library', 'Solution engineering support'],
    cta: { label: 'Schedule a strategy call', to: '/demo', variant: 'ghost', external: false }
  }
]

const defaultSupportContacts = [
  {
    title: 'Global concierge',
    description: 'Email our concierge desk or call the hotline for immediate assistance.',
    email: 'concierge@chinda.co',
    phone: '+66 2 555 1234'
  },
  {
    title: 'Technology partners',
    description: 'Work with certified specialists for POS integrations, analytics, and custom journeys.'
  },
  {
    title: 'Knowledge base',
    description: 'Access implementation guides, best practices, and recorded training sessions.',
    href: '/support'
  }
]

const defaultTestimonialsSection = {
  title: 'Trusted by teams crafting hospitality at scale.',
  description:
    'Operators across Asia use Chinda to orchestrate member journeys, unify reservations, and deliver cinematic brand stories on every screen.'
}

const defaultTestimonials = [
  {
    quote:
      'We replaced three legacy tools with Chinda’s desktop portal. Marketing now launches journeys in hours, and guest services finally shares the same live data as the mobile team.',
    author: 'Somsri V.',
    role: 'Director of Customer Experience',
    company: 'Bangkok Hospitality Group'
  },
  {
    quote:
      'Integrating the rewards catalogue was effortless. We reused our Uni-app endpoints and immediately unlocked desktop redemptions for premium members.',
    author: 'Niran P.',
    role: 'Head of Loyalty',
    company: 'Siam Discovery Labs'
  },
  {
    quote:
      'The operations dashboard gives our concierge team real-time visibility into ledger activity. It has become the single source of truth for member engagements.',
    author: 'Alice Chen',
    role: 'VP, Guest Services',
    company: 'Harborlight Collective'
  }
]

const defaultPressSection = {
  title: 'In the press',
  description: 'See how global publications are covering the flagship Chinda experience platform.'
}

const defaultPressMentions = [
  {
    outlet: 'Monocle',
    summary: '“Chinda’s immersive lounges blend physical design with responsive digital touchpoints for a new era of hospitality.”',
    href: 'https://monocle.com/',
    badge: 'Feature'
  },
  {
    outlet: 'Wallpaper*',
    summary: '“From AR tastings to concierge dashboards, the platform redefines what members expect from premium dining.”',
    href: 'https://www.wallpaper.com/',
    badge: 'Design'
  },
  {
    outlet: 'Tech in Asia',
    summary: '“A unified loyalty stack that helps operators launch campaigns across LINE, email, and in-venue displays.”',
    href: 'https://www.techinasia.com/',
    badge: 'Product'
  }
]

const defaultPartners = [
  {
    name: 'Siam Culinary Group',
    logo: 'https://dummyimage.com/160x60/0f172a/ffffff&text=Siam+Culinary',
    href: 'https://example.com/partners/siam',
    external: true
  },
  {
    name: 'Luminous Hotels',
    logo: 'https://dummyimage.com/160x60/111827/ffffff&text=Luminous',
    href: 'https://example.com/partners/luminous',
    external: true
  },
  {
    name: 'Azure Mixology Lab',
    logo: 'https://dummyimage.com/160x60/1e293b/ffffff&text=Azure+Lab',
    href: 'https://example.com/partners/azure',
    external: true
  },
  {
    name: 'Chroma Events',
    logo: 'https://dummyimage.com/160x60/0f172a/ffffff&text=Chroma',
    href: 'https://example.com/partners/chroma',
    external: true
  }
]

const defaultFaqs = [
  {
    question: 'How does the desktop site stay in sync with our existing Uni-app?',
    answer:
      'The web client consumes the same configuration, membership, and loyalty endpoints as the Uni-app build. Updates published in your existing CMS and API propagate instantly to the desktop experience.'
  },
  {
    question: 'Can we localize content for each market?',
    answer:
      'Yes. Marketing copy, navigation, and footer content respect the locale dictionaries bundled with the project. You can extend the dictionaries or supply localized overrides from remote configuration.'
  },
  {
    question: 'What integrations are supported at launch?',
    answer:
      'Out of the box, the site supports loyalty ledgers, points redemption, reservations, and demo request workflows. Additional hospitality integrations can be added without disrupting the shared API contract.'
  }
]

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

  const experiencesConfig = computed(
    () =>
      marketing.value.experiences ||
      marketing.value.experiencesPage ||
      marketing.value.events ||
      marketing.value.programming ||
      {}
  )

  const experiencesHero = computed(() => {
    const config = experiencesConfig.value || {}
    const heroSource = config.hero || config.header || {}
    const eyebrow = ensureText(heroSource.eyebrow ?? config.eyebrow)
    const title = ensureText(heroSource.title ?? config.title)
    const description = ensureText(heroSource.description ?? heroSource.copy ?? config.description)
    const ctas = normalizeCtas(heroSource.ctas || heroSource.actions || config.ctas, defaultExperiencesHero.ctas)
    const cards = normalizeHeroCards(heroSource.cards || config.cards, defaultExperiencesHero.cards)
    return {
      eyebrow: eyebrow || defaultExperiencesHero.eyebrow,
      title: title || defaultExperiencesHero.title,
      description: description || defaultExperiencesHero.description,
      ctas,
      cards
    }
  })

  const experiences = computed(() => {
    const config = experiencesConfig.value || {}
    const remote = ensureArray(config.list || config.items || config.cards || marketing.value.experiencesList)
      .map((item) => {
        const title = ensureText(item.title ?? item.name)
        const description = ensureText(item.description ?? item.summary ?? item.copy)
        if (!title || !description) return null
        const type = ensureText(item.type ?? item.category)
        const details = normalizeDetails(item.details ?? item.highlights ?? item.points)
        const schedule = ensureText(item.schedule ?? item.time ?? item.subtitle)
        const cta = normalizeCta(item.cta, {
          label: 'Reserve now',
          to: '/register',
          variant: 'primary',
          external: false
        })
        return {
          title,
          description,
          type,
          details,
          schedule,
          cta
        }
      })
      .filter(Boolean)
    return remote.length ? remote : defaultExperiences
  })

  const experienceJourney = computed(() => {
    const config = experiencesConfig.value || {}
    return normalizeJourneySteps(
      config.journey || config.timeline || marketing.value.experienceJourney,
      defaultExperienceJourney
    )
  })

  const locationsConfig = computed(
    () =>
      marketing.value.locations ||
      marketing.value.locationsPage ||
      marketing.value.destinations ||
      marketing.value.spaces ||
      {}
  )

  const locationsHero = computed(() => {
    const config = locationsConfig.value || {}
    const heroSource = config.hero || config.header || {}
    const title = ensureText(heroSource.title ?? config.title) || defaultLocationsHero.title
    const description = ensureText(heroSource.description ?? heroSource.copy ?? config.description)
    const cards = normalizeHeroCards(heroSource.cards || config.cards, defaultLocationsHero.cards)
    const mapNote = ensureText(config.mapNote ?? heroSource.mapNote ?? heroSource.note) || defaultLocationsHero.mapNote
    const ctas = normalizeCtas(heroSource.ctas || heroSource.actions || config.ctas, [])
    return {
      title,
      description: description || defaultLocationsHero.description,
      cards,
      mapNote,
      ctas
    }
  })

  const locations = computed(() => {
    const config = locationsConfig.value || {}
    return normalizeLocationsList(
      config.list || config.locations || config.items || marketing.value.locationsList,
      defaultLocations
    )
  })

  const supportConfig = computed(
    () => marketing.value.support || marketing.value.enablement || marketing.value.services || {}
  )

  const supportPlans = computed(() => {
    const config = supportConfig.value || {}
    return normalizeSupportPlans(config.plans || config.tiers || config.packages, defaultSupportPlans)
  })

  const supportContacts = computed(() => {
    const config = supportConfig.value || {}
    return normalizeSupportContacts(
      config.contacts || config.points || config.resources,
      defaultSupportContacts,
      site.config.siteInfo
    )
  })

  const testimonialsConfig = computed(
    () =>
      marketing.value.testimonials ||
      marketing.value.quotes ||
      marketing.value.voices ||
      marketing.value.testimonialSection ||
      {}
  )

  const testimonialsMeta = computed(() => {
    const config = testimonialsConfig.value || {}
    const header = config.header || {}
    const title =
      ensureText(config.title || header.title || config.heading) || defaultTestimonialsSection.title
    const description =
      ensureText(config.description || header.description || config.subtitle) || defaultTestimonialsSection.description
    return { title, description }
  })

  const testimonials = computed(() => {
    const config = testimonialsConfig.value || {}
    return normalizeTestimonialsList(
      config.list || config.items || config.testimonials || marketing.value.testimonialList,
      defaultTestimonials
    )
  })

  const pressConfig = computed(
    () =>
      marketing.value.press ||
      marketing.value.pressroom ||
      marketing.value.media ||
      marketing.value.news ||
      {}
  )

  const pressMeta = computed(() => {
    const config = pressConfig.value || {}
    const header = config.header || {}
    const title = ensureText(config.title || header.title || config.heading) || defaultPressSection.title
    const description =
      ensureText(config.description || header.description || config.subtitle) || defaultPressSection.description
    return { title, description }
  })

  const pressMentions = computed(() => {
    const config = pressConfig.value || {}
    return normalizePressList(
      config.list || config.items || config.press || marketing.value.pressMentions,
      defaultPressMentions
    )
  })

  const partners = computed(() => {
    const config =
      marketing.value.partners || marketing.value.clients || marketing.value.brands || marketing.value.partnerLogos || {}
    const layoutPartners = ensureArray(site.config.layout?.list).find(
      (block) => block?.name === 'ad' && Array.isArray(block?.styles?.adList)
    )
    const layoutLogos = Array.isArray(layoutPartners?.styles?.adList)
      ? layoutPartners.styles.adList
          .map((item) => ({
            name: ensureText(item.title ?? item.name ?? item.label),
            logo: ensureText(item.image ?? item.pic ?? item.img ?? item.logo),
            href: ensureText(item.link ?? item.url ?? item.to),
            external: Boolean(item.external || (item.link && /^https?:/i.test(item.link)))
          }))
          .filter((entry) => entry.logo || entry.name)
      : []
    return normalizePartnersList(
      config.list || config.items || config.logos || marketing.value.partnerLogos || layoutLogos,
      defaultPartners
    )
  })

  const faqs = computed(() => {
    const support = marketing.value.support || marketing.value.enablement || marketing.value.services || {}
    return normalizeFaqList(support.faqs || support.questions || support.qna || marketing.value.faqs, defaultFaqs)
  })

  return {
    hero,
    features,
    timeline,
    showcaseCards,
    loyalty,
    experiencesHero,
    experiences,
    experienceJourney,
    locationsHero,
    locations,
    supportPlans,
    supportContacts,
    testimonials,
    testimonialsMeta,
    pressMentions,
    pressMeta,
    partners,
    faqs
  }
})
