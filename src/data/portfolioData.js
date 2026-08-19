// Portfolio Page Data Store

export const PORTFOLIO_STATS = [
  {
    end: 500,
    suffix: '+',
    decimals: 0,
    label: 'Projects Delivered',
    highlight: false
  },
  {
    end: 4.9,
    suffix: 'x',
    decimals: 1,
    label: 'Avg Client ROI',
    highlight: true
  },
  {
    end: 98,
    suffix: '%',
    decimals: 0,
    label: 'Client Satisfaction',
    highlight: false
  },
  {
    prefix: '$',
    end: 120,
    suffix: 'M+',
    decimals: 0,
    label: 'Revenue Generated',
    highlight: true
  }
]

export const PORTFOLIO_CATEGORIES = [
  'All',
  'Web & App',
  'Digital Marketing & SEO',
  'AI & Automation',
  'Branding'
]

export const PORTFOLIO_FEATURED_QUOTE = {
  rating: 5,
  quote:
    'Profito Interactive transformed our digital infrastructure and organic search authority. Their data-driven approach generated over $1.4M in new platform volume within 6 months.',
  author: 'Marcus Vance',
  role: 'CTO, FinEdge Global Trading'
}

export const PORTFOLIO_PROJECTS = [
  {
    id: 'finedge-global',
    title: 'FinEdge Global Trading Platform',
    client: 'FinEdge Corp (USA)',
    category: 'Web & App',
    categoryLabel: 'Web & Mobile App',
    industry: 'Financial Technology',
    featured: true,
    year: '2025',
    summary:
      'Next-generation algorithmic trading portal with real-time WebSocket charts, AI risk detection, and seamless iOS/Android mobile apps.',
    challenge:
      'FinEdge needed a high-performance web dashboard capable of rendering 10,000+ live tick streams per second with sub-50ms latency, coupled with biometric authentication and institutional-grade security compliance.',
    solution:
      'We engineered a resilient React micro-frontend architecture paired with Node.js microservices and WebSockets. Designed a clean, dark-themed responsive UI with customized Canvas charting engines and built cross-platform mobile apps in React Native.',
    techStack: [
      'React',
      'Node.js',
      'React Native',
      'WebSockets',
      'TailwindCSS',
      'PostgreSQL',
      'AWS'
    ],
    metrics: [
      { label: 'Latency Reduction', value: '68%' },
      { label: 'Active Daily Traders', value: '250K+' },
      { label: 'User Rating', value: '4.9/5' },
      { label: 'Volume Processed', value: '$1.4B+' }
    ],
    testimonial: {
      quote:
        'Profito delivered a state-of-the-art fintech platform that far exceeded our performance metrics. Their technical mastery and UI precision are unrivaled.',
      author: 'Marcus Vance',
      role: 'CTO, FinEdge Global'
    },
    gradient: 'from-[#0f172a] via-[#1e293b] to-[#0284c7]',
    accentColor: '#2196F3',
    previewSvgType: 'fintech'
  },
  {
    id: 'omnishop-retail',
    title: 'OmniShop D2C Omnichannel Scale-Up',
    client: 'OmniShop Retail Inc.',
    category: 'Digital Marketing & SEO',
    categoryLabel: 'Digital Marketing & SEO',
    industry: 'Ecommerce & Retail',
    featured: true,
    year: '2025',
    summary:
      'Comprehensive multi-channel SEO, Meta Ads & Performance Marketing strategy driving 340% YoY organic revenue increase.',
    challenge:
      'OmniShop was struggling with high customer acquisition costs (CAC) and stagnating organic search rankings due to duplicate product catalog indexing across 12 regional domain storefronts.',
    solution:
      'Implemented technical programmatic SEO restructure, canonical indexing architecture, authority link campaigns, alongside high-converting AI-driven Meta & Google Ads remarketing funnels.',
    techStack: [
      'Programmatic SEO',
      'Google Ads',
      'Meta Ads',
      'Shopify Plus',
      'GA4 Analytics',
      'AEO'
    ],
    metrics: [
      { label: 'Organic Revenue', value: '+340%' },
      { label: 'ROAS Delivered', value: '6.4x' },
      { label: 'Keyword #1 Rank', value: '145+' },
      { label: 'CAC Reduction', value: '-42%' }
    ],
    testimonial: {
      quote:
        'Our ROI skyrocketed within 90 days. Profito is not just an agency; they operate as a core growth engine for our brand.',
      author: 'Elena Rostova',
      role: 'CMO, OmniShop Retail'
    },
    gradient: 'from-[#111827] via-[#1f2937] to-[#0d9488]',
    accentColor: '#0d9488',
    previewSvgType: 'ecommerce'
  },
  {
    id: 'healthpulse-ai',
    title: 'HealthPulse Autonomous Patient Bot & CRM',
    client: 'HealthPulse Hospitals Network',
    category: 'AI & Automation',
    categoryLabel: 'AI & Automation',
    industry: 'Healthcare & Wellness',
    featured: true,
    year: '2026',
    summary:
      'HIPAA-compliant LLM patient triage chatbot, automated WhatsApp appointment scheduling, and doctor dispatch workflows.',
    challenge:
      'Patient support desks were overwhelmed with over 8,000 daily phone inquiries, leading to long wait times, missed follow-ups, and operational bottlenecks across 14 hospital branches.',
    solution:
      'Deployed a custom-trained GenAI Assistant integrating with Hospital Information System (HIS) APIs, enabling automatic appointment booking, symptom analysis, and instant prescription retrieval.',
    techStack: [
      'Python LLM',
      'LangChain',
      'FastAPI',
      'WhatsApp API',
      'Twilio',
      'PostgreSQL',
      'Docker'
    ],
    metrics: [
      { label: 'Support Calls Automated', value: '78%' },
      { label: 'Appointment No-Shows', value: '-55%' },
      { label: 'Response Time', value: '< 2 sec' },
      { label: 'Patient Satisfaction', value: '96%' }
    ],
    testimonial: {
      quote:
        'The AI automation saved hundreds of hours for our nursing staff while offering our patients instant 24/7 care support.',
      author: 'Dr. Aris Thorne',
      role: 'Chief Medical Officer'
    },
    gradient: 'from-[#064e3b] via-[#047857] to-[#10b981]',
    accentColor: '#10b981',
    previewSvgType: 'healthcare'
  },
  {
    id: 'aerologistics-cloud',
    title: 'AeroLogistics Global Supply Fleet Portal',
    client: 'AeroLogistics Group',
    category: 'Web & App',
    categoryLabel: 'Web & App',
    industry: 'Logistics & Supply Chain',
    featured: false,
    year: '2025',
    summary:
      'Real-time GPS fleet monitoring, route optimization engine, and automated freight dispatch control center.',
    challenge:
      'Managing over 1,500 active freight trucks without unified real-time telemetry caused delivery delays, excessive fuel wastage, and manual dispatch errors.',
    solution:
      'Designed and built a sleek SaaS control platform with interactive Leaflet map overlays, predictive fuel routing algorithms, and automated driver mobile app notifications.',
    techStack: [
      'Vue.js 3',
      'Node.js',
      'Go Microservices',
      'Leaflet / Mapbox',
      'Redis',
      'Docker'
    ],
    metrics: [
      { label: 'Fuel Costs Saved', value: '22%' },
      { label: 'On-Time Deliveries', value: '99.4%' },
      { label: 'Fleet Visibility', value: '100%' }
    ],
    testimonial: {
      quote:
        'Profito transformed our logistics operations into a streamlined data-driven machine.',
      author: 'David Sterling',
      role: 'Head of Operations'
    },
    gradient: 'from-[#1e1b4b] via-[#312e81] to-[#6366f1]',
    accentColor: '#6366f1',
    previewSvgType: 'logistics'
  },
  {
    id: 'verda-organics',
    title: 'Verda Organics Brand Identity & Packaging',
    client: 'Verda Life Inc.',
    category: 'Branding',
    categoryLabel: 'Branding & Creative',
    industry: 'D2C Consumer Goods',
    featured: false,
    year: '2025',
    summary:
      'Complete eco-luxe brand identity, sustainable packaging guidelines, 3D product renders, and storefront UI redesign.',
    challenge:
      'Verda needed to rebrand from a generic organic supplier into a premium luxury wellness brand to enter retail chains across Europe and North America.',
    solution:
      'Created an evocative visual identity featuring custom typography, earthy botanical color palettes, eco-friendly tactile packaging textures, and an immersive Shopify ecommerce layout.',
    techStack: [
      'Figma',
      'Adobe Illustrator',
      'Cinema4D 3D',
      'Brand Guidelines',
      'Shopify UI'
    ],
    metrics: [
      { label: 'Retail Distribution', value: '+120 Stores' },
      { label: 'AOV Increase', value: '45%' },
      { label: 'Brand Recall Rate', value: '89%' }
    ],
    testimonial: {
      quote:
        'The new branding elevated us from a regional supplier to an international boutique eco-brand.',
      author: 'Sophia Chen',
      role: 'Founder & CEO, Verda'
    },
    gradient: 'from-[#14532d] via-[#15803d] to-[#84cc16]',
    accentColor: '#84cc16',
    previewSvgType: 'branding'
  },
  {
    id: 'apex-law-seo',
    title: 'Apex Law National SEO & Lead Engine',
    client: 'Apex Law Partners',
    category: 'Digital Marketing & SEO',
    categoryLabel: 'Digital Marketing & SEO',
    industry: 'Professional Services',
    featured: false,
    year: '2025',
    summary:
      'Dominating competitive corporate litigation & personal injury law SEO terms across 18 major metro regions.',
    challenge:
      'Apex Law was paying over $180 per click on Google PPC with low landing page conversion rates and zero organic search footprint.',
    solution:
      'Rebuilt website structure for fast mobile indexing, crafted authoritative legal content clusters, executed high-DA press outreach, and built conversion-optimized quote funnels.',
    techStack: [
      'Enterprise SEO',
      'Local SEO',
      'High-Authority Outreach',
      'CRO',
      'WordPress'
    ],
    metrics: [
      { label: 'Qualified Legal Leads', value: '+290%' },
      { label: 'Page 1 Keyword Ranks', value: '86 Terms' },
      { label: 'PPC Spend Saved', value: '$45K/mo' }
    ],
    testimonial: {
      quote:
        'Our inbound high-value corporate inquiries tripled within 6 months of launching the campaign.',
      author: 'Robert Vance, Esq.',
      role: 'Managing Partner'
    },
    gradient: 'from-[#450a0a] via-[#7f1d1d] to-[#dc2626]',
    accentColor: '#dc2626',
    previewSvgType: 'legal'
  },
  {
    id: 'saasify-ai-workflow',
    title: 'SaaSify Automated Lead Nurturing AI Engine',
    client: 'SaaSify Inc.',
    category: 'AI & Automation',
    categoryLabel: 'AI & Automation',
    industry: 'SaaS & Technology',
    featured: false,
    year: '2026',
    summary:
      'Autonomous AI SDR agent that scores, qualifies, and schedules demo meetings via email & LinkedIn automatically.',
    challenge:
      'SaaSify’s sales team spent 65% of their working hours manually prospecting and responding to cold leads with low conversion rates.',
    solution:
      'Designed a multi-agent AI system that enriches lead data, generates hyper-personalized video & email outreach messages, and books calendar slots without human intervention.',
    techStack: [
      'Python',
      'OpenAI GPT-4o',
      'HubSpot CRM',
      'Make.com',
      'Zapier',
      'LinkedIn API'
    ],
    metrics: [
      { label: 'Demo Bookings', value: '+185%' },
      { label: 'Sales Cycle Speed', value: '2.5x Faster' },
      { label: 'Hours Saved Monthly', value: '420 Hrs' }
    ],
    testimonial: {
      quote:
        'Our sales team now focuses 100% of their time closing deals instead of chasing cold prospects.',
      author: 'Michael Chang',
      role: 'VP of Global Sales'
    },
    gradient: 'from-[#3b0764] via-[#581c87] to-[#a855f7]',
    accentColor: '#a855f7',
    previewSvgType: 'ai'
  },
  {
    id: 'urbanstay-app',
    title: 'UrbanStay Boutique Luxury Booking App',
    client: 'UrbanStay Resorts',
    category: 'Web & App',
    categoryLabel: 'Web & App',
    industry: 'Hospitality & Travel',
    featured: false,
    year: '2025',
    summary:
      'Native iOS & Android mobile booking application with digital key access, room service order system, and concierge chat.',
    challenge:
      'Guests experienced long lobby check-in queues and had no convenient digital way to customize their stay or request room services.',
    solution:
      'Crafted an intuitive luxury mobile app featuring Bluetooth keyless door unlock, real-time concierge chat, and seamless Stripe instant booking payments.',
    techStack: [
      'Flutter',
      'Firebase',
      'Stripe Payments',
      'BLE IoT Key',
      'GraphQL API',
      'Node.js'
    ],
    metrics: [
      { label: 'Mobile Bookings', value: '62% Share' },
      { label: 'In-App Ancillary Spend', value: '+38%' },
      { label: 'Check-in Time', value: 'Instant' }
    ],
    testimonial: {
      quote:
        'UrbanStay app revolutionized our guest experience score from 4.1 to 4.9 stars on TripAdvisor.',
      author: 'Clara Montrose',
      role: 'Director of Guest Experience'
    },
    gradient: 'from-[#1e3a8a] via-[#1d4ed8] to-[#3b82f6]',
    accentColor: '#3b82f6',
    previewSvgType: 'hospitality'
  }
]
