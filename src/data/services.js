export const servicesData = {
  'seo-services': {
    slug: 'seo-services',
    badge: 'AI-POWERED • RESULTS-DRIVEN',
    titleFirst: 'SEO',
    titleRest: 'SERVICES',
    fullTitle: 'SEO Services',
    description: 'Profito Interactive provides next-generation SEO services built for the AI-driven search landscape. We blend human expertise with AI-powered insights and help businesses improve visibility, attract high-intent traffic, and build lasting digital authority across search engines and AI platforms.',
    primaryCtaText: 'VIEW PACKAGES',
    primaryCtaLink: '#packages',
    secondaryCtaText: "LET'S TALK",
    secondaryCtaLink: '/contact-us',
    features: [
      {
        icon: 'Target',
        title: 'Higher Rankings',
        subtitle: 'Improve search visibility'
      },
      {
        icon: 'TrendingUp',
        title: 'High-Intent Traffic',
        subtitle: 'Attract quality leads'
      },
      {
        icon: 'ShieldCheck',
        title: 'Lasting Authority',
        subtitle: 'Build brand credibility'
      }
    ],
    stats: {
      label: 'ORGANIC TRAFFIC',
      value: '125K+',
      growth: '↑ 48%',
      period: 'vs last 6 months',
      growthSectionTitle: 'RANKING GROWTH',
      growthSectionSubtitle: 'Top Positions',
      metrics: [
        { value: '320+', label: 'Keywords' },
        { value: '85%', label: 'Top 10' },
        { value: '60%', label: 'Top 3' },
        { value: '40+', label: 'Industries' }
      ]
    }
  }
}

export const getServiceBySlug = (slug) => {
  if (slug && servicesData[slug]) {
    return servicesData[slug]
  }

  const formattedTitle = slug
    ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'SEO Services'

  const words = formattedTitle.split(' ')
  const titleFirst = words[0] || 'SEO'
  const titleRest = words.slice(1).join(' ') || 'SERVICES'

  return {
    slug: slug || 'seo-services',
    badge: 'AI-POWERED • RESULTS-DRIVEN',
    titleFirst: titleFirst.toUpperCase(),
    titleRest: titleRest.toUpperCase(),
    fullTitle: formattedTitle,
    description: `Profito Interactive provides next-generation ${formattedTitle} built for the AI-driven digital landscape. We blend human expertise with AI-powered insights and help businesses improve visibility, attract high-intent traffic, and build lasting digital authority across platforms.`,
    primaryCtaText: 'VIEW PACKAGES',
    primaryCtaLink: '#packages',
    secondaryCtaText: "LET'S TALK",
    secondaryCtaLink: '/contact-us',
    features: [
      {
        icon: 'Target',
        title: 'Higher Rankings',
        subtitle: 'Improve search visibility'
      },
      {
        icon: 'TrendingUp',
        title: 'High-Intent Traffic',
        subtitle: 'Attract quality leads'
      },
      {
        icon: 'ShieldCheck',
        title: 'Lasting Authority',
        subtitle: 'Build brand credibility'
      }
    ],
    stats: {
      label: 'ORGANIC TRAFFIC',
      value: '125K+',
      growth: '↑ 48%',
      period: 'vs last 6 months',
      growthSectionTitle: 'RANKING GROWTH',
      growthSectionSubtitle: 'Top Positions',
      metrics: [
        { value: '320+', label: 'Keywords' },
        { value: '85%', label: 'Top 10' },
        { value: '60%', label: 'Top 3' },
        { value: '40+', label: 'Industries' }
      ]
    }
  }
}
