// Portfolio Page Data Store

export const HERO_BANNER_DATA = {
  badge: 'DIGITAL SOLUTIONS THAT DELIVER RESULTS',
  titlePrefix: 'The ',
  titleHighlight: 'Profito',
  titleSuffix: ' Portfolio',
  subtitle: 'When you partner with Profito, we take care of the heavy lifting, so you can enjoy more website traffic, leads, and revenue.',
  primaryBtnText: 'View Case Studies',
  primaryBtnLink: '#case-studies',
  secondaryBtnText: 'View Design Portfolio',
  secondaryBtnLink: '#portfolio-grid'
}

export const TESTIMONIALS_SECTION_DATA = {
  badge: 'TESTIMONIALS',
  title: 'What Our Clients Say',
  subtitleLine1: "We're proud to have earned the trust of amazing clients.",
  subtitleLine2: "Here's what they have to say about working with us.",
  items: [
    {
      id: 1,
      quote: 'Profito transformed our website into a powerful growth engine. Their team is responsive, skilled, and delivers beyond expectations.',
      author: 'Rohit Sharma',
      role: 'Marketing Head',
      company: 'StockDaddy',
      accent: 'blue',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80'
    },
    {
      id: 2,
      quote: 'The Profito team is highly skilled and understands our business goals perfectly. Their SEO and content strategies have boosted our traffic and leads significantly.',
      author: 'Sneha Patil',
      role: 'Digital Head',
      company: 'DY Patil University',
      accent: 'lime',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80'
    },
    {
      id: 3,
      quote: 'From website development to ongoing support, Profito has been an incredible partner. Their attention to detail and commitment are unmatched.',
      author: 'Amit Verma',
      role: 'Director',
      company: 'GCL Broking',
      accent: 'blue',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80'
    },
    {
      id: 4,
      quote: 'Working with Profito was a game-changer for our e-commerce platform. Our site speed improved by 60% and online sales doubled within 3 months.',
      author: 'Vikram Malhotra',
      role: 'CTO',
      company: 'Volt Electronics',
      accent: 'lime',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=250&q=80'
    },
    {
      id: 5,
      quote: 'Their data-driven digital marketing campaigns brought us qualified leads faster than any other agency we have worked with in the past.',
      author: 'Priya Ananth',
      role: 'Growth Head',
      company: 'Aura Couture',
      accent: 'blue',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=250&q=80'
    },
    {
      id: 6,
      quote: 'Profito delivered our complex custom web application ahead of schedule with flawless code quality and exceptional user experience.',
      author: 'Siddharth Rao',
      role: 'Founder',
      company: 'OmniShop D2C',
      accent: 'lime',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=250&q=80'
    },
    {
      id: 7,
      quote: 'Exceptional team! Their AI automation solutions streamlined our patient onboarding and reduced manual administrative effort by 40%.',
      author: 'Meera Nair',
      role: 'Managing Director',
      company: 'HealthPulse Network',
      accent: 'blue',
      avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=250&q=80'
    }
  ]
}

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

// ── OUR PORTFOLIO SECTION DATA ──
export const OUR_PORTFOLIO_CATEGORIES = [
  { id: 'All', label: 'All', icon: 'Grid' },
  { id: 'Automobile', label: 'Automobile', icon: 'Car' },
  { id: 'BFSI', label: 'BFSI', icon: 'Landmark' },
  { id: 'Broking', label: 'Broking', icon: 'Handshake' },
  { id: 'Business Services', label: 'Business Services', icon: 'Briefcase' },
  { id: 'E-Commerce', label: 'E-Commerce', icon: 'ShoppingCart' },
  { id: 'EdTech', label: 'EdTech', icon: 'GraduationCap' },
  { id: 'Education', label: 'Education', icon: 'GraduationCap' },
  { id: 'Electronics & Appliances', label: 'Electronics & Appliances', icon: 'Tv' },
  { id: 'Fashion', label: 'Fashion', icon: 'Shirt' },
  { id: 'FMCG', label: 'FMCG', icon: 'ShoppingBag' },
  { id: 'Healthcare', label: 'Healthcare', icon: 'HeartPulse' },
  { id: 'Home & Building', label: 'Home & Building', icon: 'Building' },
  { id: 'Hospitality', label: 'Hospitality', icon: 'Utensils' },
  { id: 'Hospitals & Clinics', label: 'Hospitals & Clinics', icon: 'Hospital' },
  { id: 'Insurance', label: 'Insurance', icon: 'ShieldCheck' },
  { id: 'IT/Technology', label: 'IT/Technology', icon: 'Cpu' },
  { id: 'Manufacturing & Industrial', label: 'Manufacturing & Industrial', icon: 'Factory' },
  { id: 'Others', label: 'Others', icon: 'LayoutGrid' },
  { id: 'Real Estate', label: 'Real Estate', icon: 'Building2' },
  { id: 'SaaS & Telecom', label: 'SaaS & Telecom', icon: 'Radio' }
]

export const OUR_PORTFOLIO_CARDS = [
  {
    id: 'stock-daddy',
    title: 'Stock Daddy',
    categoryTag: 'EdTech, Education',
    categories: ['EdTech', 'Education'],
    imageType: 'stockDaddy',
    tags: ['PPC', 'SEO', 'Performance Marketing'],
    accent: 'blue'
  },
  {
    id: 'dy-patil',
    title: 'DY Patil University',
    categoryTag: 'Education, EdTech',
    categories: ['Education', 'EdTech'],
    imageType: 'dyPatil',
    tags: ['Content', 'LLM Tool', 'SEO'],
    accent: 'lime'
  },
  {
    id: 'gcl-broking',
    title: 'GCL Broking',
    categoryTag: 'Broking, BFSI',
    categories: ['Broking', 'BFSI'],
    imageType: 'stockDaddy',
    tags: ['Content', 'SEO', 'Website maintenance'],
    accent: 'blue'
  },
  {
    id: 'drive-auto',
    title: 'DriveAuto Global',
    categoryTag: 'Automobile',
    categories: ['Automobile'],
    imageType: 'dyPatil',
    tags: ['Meta Ads', 'PPC', 'Lead Gen'],
    accent: 'lime'
  },
  {
    id: 'finedge-bfsi',
    title: 'FinEdge Banking',
    categoryTag: 'BFSI, Finance',
    categories: ['BFSI'],
    imageType: 'stockDaddy',
    tags: ['App Marketing', 'SEO', 'CRO'],
    accent: 'blue'
  },
  {
    id: 'vanguard-services',
    title: 'Vanguard Corp',
    categoryTag: 'Business Services',
    categories: ['Business Services'],
    imageType: 'dyPatil',
    tags: ['B2B Lead Gen', 'LinkedIn Ads', 'SEO'],
    accent: 'lime'
  },
  {
    id: 'omnishop-ecom',
    title: 'OmniShop D2C',
    categoryTag: 'E-Commerce',
    categories: ['E-Commerce'],
    imageType: 'stockDaddy',
    tags: ['Meta Ads', 'Google Shopping', 'SEO'],
    accent: 'blue'
  },
  {
    id: 'volt-appliances',
    title: 'Volt Electronics',
    categoryTag: 'Electronics & Appliances',
    categories: ['Electronics & Appliances'],
    imageType: 'dyPatil',
    tags: ['Performance Ads', 'CRO', 'Branding'],
    accent: 'lime'
  },
  {
    id: 'aura-fashion',
    title: 'Aura Couture',
    categoryTag: 'Fashion, D2C',
    categories: ['Fashion'],
    imageType: 'stockDaddy',
    tags: ['Influencer Ads', 'Social Media', 'Shopify SEO'],
    accent: 'blue'
  },
  {
    id: 'verda-fmcg',
    title: 'Verda Organics',
    categoryTag: 'FMCG, Consumer Goods',
    categories: ['FMCG'],
    imageType: 'dyPatil',
    tags: ['Packaging UI', 'Social Marketing', 'SEO'],
    accent: 'lime'
  },
  {
    id: 'healthpulse-care',
    title: 'HealthPulse Network',
    categoryTag: 'Healthcare',
    categories: ['Healthcare'],
    imageType: 'stockDaddy',
    tags: ['AI Bot', 'WhatsApp CRM', 'SEO'],
    accent: 'blue'
  },
  {
    id: 'apex-building',
    title: 'Apex Interiors',
    categoryTag: 'Home & Building',
    categories: ['Home & Building'],
    imageType: 'dyPatil',
    tags: ['Google PPC', 'Local SEO', 'Web Design'],
    accent: 'lime'
  },
  {
    id: 'urbanstay-hotels',
    title: 'UrbanStay Luxury',
    categoryTag: 'Hospitality',
    categories: ['Hospitality'],
    imageType: 'stockDaddy',
    tags: ['Booking App', 'Local SEO', 'PPC'],
    accent: 'blue'
  },
  {
    id: 'medicare-clinics',
    title: 'MediCare Clinics',
    categoryTag: 'Hospitals & Clinics',
    categories: ['Hospitals & Clinics', 'Healthcare'],
    imageType: 'dyPatil',
    tags: ['Patient Booking', 'SEO', 'Local Ads'],
    accent: 'lime'
  },
  {
    id: 'shieldguard-insurance',
    title: 'ShieldGuard Insurance',
    categoryTag: 'Insurance, BFSI',
    categories: ['Insurance', 'BFSI'],
    imageType: 'stockDaddy',
    tags: ['Lead Gen', 'PPC', 'CRO'],
    accent: 'blue'
  },
  {
    id: 'utho-tech',
    title: 'UTHO Cloud Infra',
    categoryTag: 'IT/Technology',
    categories: ['IT/Technology'],
    imageType: 'dyPatil',
    tags: ['Cloud Strategy', 'B2B Marketing', 'SEO'],
    accent: 'lime'
  },
  {
    id: 'steelcore-industrial',
    title: 'SteelCore Global',
    categoryTag: 'Manufacturing & Industrial',
    categories: ['Manufacturing & Industrial'],
    imageType: 'stockDaddy',
    tags: ['Export SEO', 'B2B Portal', 'PPC'],
    accent: 'blue'
  },
  {
    id: 'probo-others',
    title: 'Probo Trade',
    categoryTag: 'Others, Fintech',
    categories: ['Others'],
    imageType: 'dyPatil',
    tags: ['Mobile App Marketing', 'Growth', 'SEO'],
    accent: 'lime'
  },
  {
    id: 'skyline-realestate',
    title: 'Skyline Realty',
    categoryTag: 'Real Estate',
    categories: ['Real Estate'],
    imageType: 'stockDaddy',
    tags: ['Meta Lead Ads', 'Virtual Tours', 'SEO'],
    accent: 'blue'
  },
  {
    id: 'saasify-telecom',
    title: 'SaaSify AI Engine',
    categoryTag: 'SaaS & Telecom',
    categories: ['SaaS & Telecom', 'IT/Technology'],
    imageType: 'dyPatil',
    tags: ['AI SDR Bot', 'Automation', 'LinkedIn Ads'],
    accent: 'lime'
  }
]

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
