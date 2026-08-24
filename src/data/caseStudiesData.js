// Case Studies Page Data Store
import scsiImg from '../assets/SCSI-case-study.png'
import pinnacleImg from '../assets/pinnacle.png'
import moroccoImg from '../assets/moroccoworldnews-s.png'
import writoholicImg from '../assets/writoholic-s.png'
import echonBImg from '../assets/echon-b.png'
import onlineStoreImg from '../assets/online-store.png'
import realEstateImg from '../assets/real-esatate.png'
import healthcareImg from '../assets/healthcare.png'
import lawImg from '../assets/law.png'
import cashefreeImg from '../assets/cashefree-new.png'
import newDesignImg from '../assets/new-design.png'

export const CASE_STUDIES_HERO_DATA = {
  badgeText: 'OUR CASE STUDIES',
  titleHighlight: 'Our Case',
  titleSuffix: 'Studies',
  subtitle: "Explore our in-depth case studies showcasing how we help businesses scale with data-driven strategies, modern tech stacks, and high-impact digital solutions."
}

export const CASE_STUDIES_CATEGORIES = [
  { id: 'All', label: 'All' },
  { id: 'SEO', label: 'SEO' },
  { id: 'SMO', label: 'SMO' },
  { id: 'PPC', label: 'PPC' },
  { id: 'CRM', label: 'CRM' },
  { id: 'Performance Marketing', label: 'Performance Marketing' }
]

export const CASE_STUDIES_LIST = [
  {
    id: 'health-and-safety-consultancy',
    title: 'Health and Safety Consultancy',
    subtitle: 'Market leader in Information Consulting, Health and Safety Consulting',
    category: 'SEO',
    image: pinnacleImg,
    metrics: [
      { label: 'Organic Traffic', value: '+320%' },
      { label: 'Leads Generated', value: '4.5x' },
      { label: 'Google Rank', value: '#1 Page' }
    ],
    organicPresence: {
      clicks: '840',
      impressions: '62.4K',
      ctr: '2.1%',
      position: '9.4'
    },
    recentKeywords: [
      { keyword: 'Health and Safety Audit Consultancy', initial: 'Not in 100', current: 1 },
      { keyword: 'ISO 45001 Certification Services', initial: 'Not in 100', current: 2 },
      { keyword: 'Corporate Health Risk Assessment', initial: 'Not in 100', current: 3 },
      { keyword: 'Workplace Safety Training Advisor', initial: 'Not in 100', current: 4 },
      { keyword: 'EHS Compliance Consulting', initial: 'Not in 100', current: 5 }
    ],
    challenge: 'Nbiz Infosol needed to dominate competitive enterprise compliance keywords across global markets and generate verified corporate leads.',
    solution: 'We executed a comprehensive technical SEO restructure, authority link building campaign, and conversion rate optimization (CRO) landing pages.',
    results: 'Generated 4.5x increase in qualified B2B inquiries and secured #1 ranking for core health and safety compliance terms.'
  },
  {
    id: 'age-less-laser-centres',
    title: 'Age Less Laser Centres',
    subtitle: 'TOP Google Ranking for all Keywords',
    category: 'SEO',
    image: healthcareImg,
    metrics: [
      { label: 'Organic Traffic', value: '+450%' },
      { label: 'Top Keywords', value: '85+' },
      { label: 'Appointment Bookings', value: '+210%' }
    ],
    organicPresence: {
      clicks: '574',
      impressions: '43.7K',
      ctr: '1.3%',
      position: '13.9'
    },
    recentKeywords: [
      { keyword: 'Spider Vein Treatment Victoria', initial: 'Not in 100', current: 2 },
      { keyword: 'Victoria Hair Removal', initial: 'Not in 100', current: 3 },
      { keyword: 'Victoria Weight Loss Clinic', initial: 'Not in 100', current: 3 },
      { keyword: 'Microblading Victoria', initial: 'Not in 100', current: 6 },
      { keyword: 'Microblading Victoria BC', initial: 'Not in 100', current: 6 }
    ],
    challenge: 'Age Less Laser Centres faced stiff local competition in medical aesthetics and search engine invisibility for high-intent treatment keywords.',
    solution: 'Engineered a hyper-local SEO strategy, optimized Google Business Profile signals, and created authoritative medical content hubs.',
    results: 'Achieved top 3 Google rankings for 85+ competitive aesthetic treatment keywords across regional locations.'
  },
  {
    id: 'scsisd',
    title: 'SCSISD',
    subtitle: 'Manufacturing company, developing superior-quality SCSI storage devices',
    category: 'PPC',
    image: scsiImg,
    metrics: [
      { label: 'ROAS', value: '6.2x' },
      { label: 'Sales Volume', value: '+280%' },
      { label: 'CAC Reduction', value: '-38%' }
    ],
    organicPresence: {
      clicks: '1.4K',
      impressions: '98.2K',
      ctr: '3.4%',
      position: '6.8'
    },
    recentKeywords: [
      { keyword: '50-Pin SCSI Storage Variant', initial: 'Not in 100', current: 1 },
      { keyword: '80-Pin SCSI Drive Adapter', initial: 'Not in 100', current: 1 },
      { keyword: 'Industrial SCSI Storage Controller', initial: 'Not in 100', current: 2 },
      { keyword: 'Legacy SCSI Hard Disk Replacement', initial: 'Not in 100', current: 3 },
      { keyword: 'SCSI Emulator Hardware Component', initial: 'Not in 100', current: 4 }
    ],
    challenge: 'SCSISD required targeted international B2B buyer acquisition for industrial SCSI hardware components with high conversion efficiency.',
    solution: 'Built precision Google Search & Display PPC funnels targeting global OEM procurement managers and industrial hardware specifiers.',
    results: 'Delivered a 6.2x return on ad spend (ROAS) and expanded global distributor orders across 14 countries.'
  },
  {
    id: 'all-4-kids',
    title: 'All 4 Kids',
    subtitle: 'Fun and engaging kids apparel & activity portal scaling social reach',
    category: 'SMO',
    image: onlineStoreImg,
    metrics: [
      { label: 'Social Reach', value: '1.2M+' },
      { label: 'Engagement Rate', value: '+380%' },
      { label: 'D2C Orders', value: '+190%' }
    ],
    organicPresence: {
      clicks: '3.2K',
      impressions: '185K',
      ctr: '4.1%',
      position: '5.2'
    },
    recentKeywords: [
      { keyword: 'Organic Toddler Apparel Online', initial: 'Not in 100', current: 1 },
      { keyword: 'Kids Sensory Toys Online Store', initial: 'Not in 100', current: 2 },
      { keyword: 'Child Educational Play Kits', initial: 'Not in 100', current: 2 },
      { keyword: 'Sustainable Kids Clothing Brand', initial: 'Not in 100', current: 4 },
      { keyword: 'Parenting Activity Bundles', initial: 'Not in 100', current: 5 }
    ],
    challenge: 'All 4 Kids struggled with low brand recall and needed a vibrant social media strategy to engage young parents.',
    solution: 'Designed viral Instagram & Meta ad creatives, parent influencer collaborations, and video content campaigns.',
    results: 'Scaled monthly social impressions over 1.2 Million and doubled direct-to-consumer store revenues.'
  },
  {
    id: 'music-box-attic',
    title: 'Music Box Attic',
    subtitle: 'Handcrafted luxury music box portal scaling organic traffic and sales',
    category: 'Performance Marketing',
    image: newDesignImg,
    metrics: [
      { label: 'Revenue Growth', value: '+240%' },
      { label: 'Google Shopping ROAS', value: '5.8x' }
    ],
    organicPresence: {
      clicks: '2.8K',
      impressions: '142K',
      ctr: '3.9%',
      position: '7.1'
    },
    recentKeywords: [
      { keyword: 'Handcrafted Wooden Music Box', initial: 'Not in 100', current: 1 },
      { keyword: 'Custom Engraved Carousel Music Box', initial: 'Not in 100', current: 2 },
      { keyword: 'Reuge Swiss Movement Box', initial: 'Not in 100', current: 2 },
      { keyword: 'Luxury Anniversary Keepsake Box', initial: 'Not in 100', current: 3 },
      { keyword: 'Vintage Ballerina Music Box', initial: 'Not in 100', current: 4 }
    ],
    challenge: 'Needed to scale international luxury gift orders during peak holiday seasons with optimized acquisition costs.',
    solution: 'Executed high-performing Google Shopping Ads, dynamic Meta remarketing, and abandoned cart recovery sequences.',
    results: 'Achieved 5.8x ROAS and a 240% increase in holiday sales volume.'
  },
  {
    id: 'greedier-social-media',
    title: 'Greedier Social Media',
    subtitle: 'Social media growth strategy & viral marketing engine for creators',
    category: 'SMO',
    image: writoholicImg,
    metrics: [
      { label: 'Follower Growth', value: '+500K' },
      { label: 'Client Retention', value: '96%' }
    ],
    organicPresence: {
      clicks: '1.9K',
      impressions: '110K',
      ctr: '2.8%',
      position: '8.4'
    },
    recentKeywords: [
      { keyword: 'Viral Social Media Agency', initial: 'Not in 100', current: 1 },
      { keyword: 'Short Form Video Marketing', initial: 'Not in 100', current: 2 },
      { keyword: 'Instagram Growth Manager', initial: 'Not in 100', current: 3 },
      { keyword: 'Creator Audience Monetization', initial: 'Not in 100', current: 4 },
      { keyword: 'TikTok Brand Content Engine', initial: 'Not in 100', current: 5 }
    ],
    challenge: 'Scaling audience engagement for high-net-worth creators and brands across competitive social channels.',
    solution: 'Implemented short-form video production, trending audio strategies, and algorithmic distribution funnels.',
    results: 'Generated over 500K net new followers across client profiles within 6 months.'
  },
  {
    id: 'foreclosuresdaily',
    title: 'Foreclosuresdaily',
    subtitle: 'Foreclosure and Preforeclosure Information',
    category: 'SEO',
    image: realEstateImg,
    metrics: [
      { label: 'Lead Growth', value: '+310%' },
      { label: 'Organic Traffic', value: '+180%' }
    ],
    organicPresence: {
      clicks: '4.1K',
      impressions: '215K',
      ctr: '3.6%',
      position: '4.9'
    },
    recentKeywords: [
      { keyword: 'Pre-Foreclosure Property Leads', initial: 'Not in 100', current: 1 },
      { keyword: 'Real Estate Investor Deals List', initial: 'Not in 100', current: 2 },
      { keyword: 'Tax Deed Auction Property Data', initial: 'Not in 100', current: 2 },
      { keyword: 'Distressed Property Finder', initial: 'Not in 100', current: 3 },
      { keyword: 'Wholesale Real Estate Leads', initial: 'Not in 100', current: 4 }
    ],
    challenge: 'Inbound real estate investor lead acquisition required top ranking authority for pre-foreclosure property leads.',
    solution: 'Executed programmatic SEO content clusters and technical website speed optimization.',
    results: 'Boosted qualified investor subscription leads by 310% YoY.'
  },
  {
    id: 'dance-dynamics',
    title: 'Dance Dynamics',
    subtitle: 'Fun and Entertainment Dance Studio',
    category: 'PPC',
    image: healthcareImg,
    metrics: [
      { label: 'Student Enrollments', value: '+220%' },
      { label: 'Cost Per Lead', value: '-45%' }
    ],
    organicPresence: {
      clicks: '920',
      impressions: '54.8K',
      ctr: '2.6%',
      position: '10.2'
    },
    recentKeywords: [
      { keyword: 'Adult Hip Hop Dance Classes', initial: 'Not in 100', current: 1 },
      { keyword: 'Beginner Salsa Workshop Near Me', initial: 'Not in 100', current: 2 },
      { keyword: 'Contemporary Dance Studio', initial: 'Not in 100', current: 3 },
      { keyword: 'Kids Ballet Fitness Class', initial: 'Not in 100', current: 4 },
      { keyword: 'Private Wedding Dance Choreography', initial: 'Not in 100', current: 5 }
    ],
    challenge: 'Filling seasonal dance class slots quickly across multiple studio locations.',
    solution: 'Targeted local Meta lead ads and Google Maps local search ads with instant class trial offers.',
    results: 'Filled 100% of seasonal workshop slots within 3 weeks of launch.'
  },
  {
    id: 'real-estate-software',
    title: 'Real Estate Software',
    subtitle: 'To improve the lead traffic on the website by 22%',
    category: 'CRM',
    image: lawImg,
    metrics: [
      { label: 'Lead Traffic Increase', value: '+22%' },
      { label: 'CRM Conversion', value: '+35%' }
    ],
    organicPresence: {
      clicks: '1.1K',
      impressions: '76.3K',
      ctr: '2.2%',
      position: '11.5'
    },
    recentKeywords: [
      { keyword: 'Real Estate Agent CRM Software', initial: 'Not in 100', current: 2 },
      { keyword: 'Automated Property Lead Pipeline', initial: 'Not in 100', current: 3 },
      { keyword: 'Realtor Transaction Coordinator Tool', initial: 'Not in 100', current: 3 },
      { keyword: 'MLS Listing Sync CRM', initial: 'Not in 100', current: 5 },
      { keyword: 'Brokerage Client Management System', initial: 'Not in 100', current: 6 }
    ],
    challenge: 'Pro Agent Solutions needed higher qualified software trial signups and CRM pipeline tracking.',
    solution: 'Redesigned software demo landing funnels and integrated automated email follow-up workflows.',
    results: 'Increased qualified software trial signups by 22% in the first quarter.'
  },
  {
    id: 'monkhouse-law-firm',
    title: 'Monkhouse Law Firm',
    subtitle: 'Helped in improving Rankings and Traffic',
    category: 'SEO',
    image: lawImg,
    metrics: [
      { label: 'Organic Search Traffic', value: '+290%' },
      { label: 'High-Value Inquiries', value: '3.4x' }
    ],
    organicPresence: {
      clicks: '3.6K',
      impressions: '190K',
      ctr: '3.7%',
      position: '3.8'
    },
    recentKeywords: [
      { keyword: 'Wrongful Dismissal Lawyer', initial: 'Not in 100', current: 1 },
      { keyword: 'Employment Severance Pay Calculator', initial: 'Not in 100', current: 1 },
      { keyword: 'Workplace Discrimination Attorney', initial: 'Not in 100', current: 2 },
      { keyword: 'Executive Employment Contract Review', initial: 'Not in 100', current: 3 },
      { keyword: 'Labor Standards Class Action Lawyer', initial: 'Not in 100', current: 4 }
    ],
    challenge: 'Dominating employment law search queries in competitive metropolitan legal markets.',
    solution: 'Authored comprehensive legal guide pillars and earned high-authority legal news backlinks.',
    results: 'Achieved #1 position for top employment law terms and tripled client case inquiries.'
  },
  {
    id: 'free-sim-unlocker',
    title: 'Free Sim Unlocker',
    subtitle: 'Free Sim Unlocker - California, USA',
    category: 'SEO',
    image: onlineStoreImg,
    metrics: [
      { label: 'Global Visits', value: '850K/mo' },
      { label: 'Keyword Ranks', value: '#1 Worldwide' }
    ],
    organicPresence: {
      clicks: '12.4K',
      impressions: '680K',
      ctr: '4.8%',
      position: '2.1'
    },
    recentKeywords: [
      { keyword: 'Free IMEI Sim Unlock Code Generator', initial: 'Not in 100', current: 1 },
      { keyword: 'Unlock iPhone Carrier Lock Online', initial: 'Not in 100', current: 1 },
      { keyword: 'Samsung Network Sim Pin Unlock', initial: 'Not in 100', current: 2 },
      { keyword: 'Android Carrier Unlock Software', initial: 'Not in 100', current: 2 },
      { keyword: 'Permanent Device Unlock Service', initial: 'Not in 100', current: 3 }
    ],
    challenge: 'Scaling global organic search authority for mobile device unlock services.',
    solution: 'Technical international SEO architecture with multi-language hreflang implementation.',
    results: 'Scaled monthly organic search visitors to over 850,000 users worldwide.'
  },
  {
    id: 'bvs-global',
    title: 'BVS Global',
    subtitle: 'BVS Global has a strong presence in more than 100 countries.',
    category: 'Performance Marketing',
    image: cashefreeImg,
    metrics: [
      { label: 'Global Presence', value: '100+ Countries' },
      { label: 'B2B Accounts', value: '+140%' }
    ],
    organicPresence: {
      clicks: '2.5K',
      impressions: '135K',
      ctr: '3.1%',
      position: '7.8'
    },
    recentKeywords: [
      { keyword: 'Global Document Attestation Services', initial: 'Not in 100', current: 1 },
      { keyword: 'Corporate Work Permit Visa Processing', initial: 'Not in 100', current: 2 },
      { keyword: 'Embassy Commercial Verification', initial: 'Not in 100', current: 3 },
      { keyword: 'Apostille Legalization Partner', initial: 'Not in 100', current: 3 },
      { keyword: 'Expat Background Screening Service', initial: 'Not in 100', current: 5 }
    ],
    challenge: 'Expanding global corporate visa, attestation, and document verification client contracts.',
    solution: 'Multi-regional Google Search campaigns and LinkedIn account-based marketing (ABM).',
    results: 'Expanded enterprise B2B service contracts across 100+ international countries.'
  },
  {
    id: 'doers',
    title: 'Doers',
    subtitle: 'Doers are a group of people who are making sure so exclusive cater to maintain & survive their lifestyle.',
    category: 'CRM',
    image: echonBImg,
    metrics: [
      { label: 'Member Retention', value: '98%' },
      { label: 'Community Engagement', value: '+400%' }
    ],
    organicPresence: {
      clicks: '780',
      impressions: '42.1K',
      ctr: '2.4%',
      position: '12.1'
    },
    recentKeywords: [
      { keyword: 'Exclusive Lifestyle Concierge Membership', initial: 'Not in 100', current: 1 },
      { keyword: 'Private VIP Networking Club', initial: 'Not in 100', current: 2 },
      { keyword: 'HNW Lifestyle Event Concierge', initial: 'Not in 100', current: 3 },
      { keyword: 'Curated Luxury Experiences', initial: 'Not in 100', current: 4 },
      { keyword: 'Private Member Portal CRM', initial: 'Not in 100', current: 5 }
    ],
    challenge: 'Exclusive lifestyle membership network required automated member onboarding and event CRM.',
    solution: 'Deployed custom CRM dashboard with automated WhatsApp notifications and private event booking.',
    results: 'Automated 90% of member concierge management with 98% retention rate.'
  },
  {
    id: 'zenithactive',
    title: 'Zenithactive',
    subtitle: "The only thing you've always wanted is right. Kickboxing, traditional Muay Thai and more.",
    category: 'PPC',
    image: healthcareImg,
    metrics: [
      { label: 'Membership Signups', value: '+310%' },
      { label: 'Ad ROI', value: '5.2x' }
    ],
    organicPresence: {
      clicks: '1.6K',
      impressions: '88.5K',
      ctr: '3.2%',
      position: '8.9'
    },
    recentKeywords: [
      { keyword: 'Traditional Muay Thai Gym Near Me', initial: 'Not in 100', current: 1 },
      { keyword: 'Kickboxing Conditioning Classes', initial: 'Not in 100', current: 2 },
      { keyword: 'Pro Combat Sports Training Facility', initial: 'Not in 100', current: 3 },
      { keyword: 'Personal Fitness Boxing Coach', initial: 'Not in 100', current: 4 },
      { keyword: 'MMA Conditioning Membership', initial: 'Not in 100', current: 5 }
    ],
    challenge: 'Scaling fitness club memberships and private training package sales.',
    solution: 'High-converting video ad campaigns on Meta & YouTube showcasing real combat training results.',
    results: 'Generated 310% increase in paid annual fitness memberships.'
  },
  {
    id: 'bio-tech',
    title: 'Bio-Tech',
    subtitle: 'To 10x attempted to improve their online presence through Digital marketing',
    category: 'SEO',
    image: healthcareImg,
    metrics: [
      { label: 'Online Visibility', value: '10x Growth' },
      { label: 'Domain Authority', value: '+35 Pts' }
    ],
    organicPresence: {
      clicks: '2.1K',
      impressions: '128K',
      ctr: '2.9%',
      position: '6.4'
    },
    recentKeywords: [
      { keyword: 'Biotechnology Lab Equipment Supplier', initial: 'Not in 100', current: 1 },
      { keyword: 'Industrial Bioreactor Systems', initial: 'Not in 100', current: 2 },
      { keyword: 'Pharmaceutical Centrifuge Manufacturer', initial: 'Not in 100', current: 3 },
      { keyword: 'Cleanroom Environmental Sensors', initial: 'Not in 100', current: 4 },
      { keyword: 'Life Science Research Consumables', initial: 'Not in 100', current: 5 }
    ],
    challenge: 'Biotechnology equipment vendor needed a 10x surge in digital visibility.',
    solution: 'Enterprise SEO content overhaul, B2B industry outreach, and schema structured data.',
    results: 'Multiplied digital brand visibility by 10x within 8 months.'
  },
  {
    id: 'tej-co-ltd',
    title: 'Tej Co. Ltd.',
    subtitle: 'Strengthening bonds, building stronger connections.',
    category: 'CRM',
    image: onlineStoreImg,
    metrics: [
      { label: 'Partner Inquiries', value: '+175%' },
      { label: 'Pipeline Velocity', value: '2x Faster' }
    ],
    organicPresence: {
      clicks: '1.3K',
      impressions: '79.6K',
      ctr: '2.5%',
      position: '9.8'
    },
    recentKeywords: [
      { keyword: 'Industrial Polymer Distribution Partner', initial: 'Not in 100', current: 1 },
      { keyword: 'Cross-Border OEM Component Supply', initial: 'Not in 100', current: 2 },
      { keyword: 'Chemical Raw Material Exporter', initial: 'Not in 100', current: 3 },
      { keyword: 'B2B Supply Chain Network Tool', initial: 'Not in 100', current: 4 },
      { keyword: 'International Trade Distributor CRM', initial: 'Not in 100', current: 5 }
    ],
    challenge: 'Strengthening global industrial partner distributor networks and sales pipelines.',
    solution: 'Custom CRM integration, automated lead scoring, and multi-lingual partner portal.',
    results: 'Doubled sales pipeline velocity and expanded global distributor partnerships.'
  }
]

export const TESTIMONIALS_SECTION_DATA = {
  badge: 'TESTIMONIALS',
  title: 'What Our Clients Say',
  subtitleLine1: "We're proud to have earned the trust of amazing clients.",
  subtitleLine2: "Here's what they have to say about working with us.",
  items: [
    {
      id: 1,
      quote: 'Profito transformed our financial platform organic search authority. Their case study strategies generated over $1.4M in new platform volume in 6 months.',
      author: 'Rohit Sharma',
      role: 'Marketing Head',
      company: 'StockDaddy',
      accent: 'blue',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80'
    },
    {
      id: 2,
      quote: 'The data-driven SEO & LLM content strategies delivered measurable ROI within 90 days. Their case study methodology is rock solid.',
      author: 'Sneha Patil',
      role: 'Digital Head',
      company: 'DY Patil University',
      accent: 'lime',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80'
    },
    {
      id: 3,
      quote: 'From technical website optimization to ongoing performance campaigns, Profito has been an invaluable growth partner.',
      author: 'Amit Verma',
      role: 'Director',
      company: 'GCL Broking',
      accent: 'blue',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80'
    },
    {
      id: 4,
      quote: 'Our site performance and lead conversion rates doubled within 3 months of implementing Profito’s full-funnel optimization strategy.',
      author: 'Vikram Malhotra',
      role: 'CTO',
      company: 'Volt Electronics',
      accent: 'lime',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=250&q=80'
    },
    {
      id: 5,
      quote: 'Profito’s targeted digital campaigns brought qualified B2B leads faster and at a much lower CAC than any other partner.',
      author: 'Priya Ananth',
      role: 'Growth Head',
      company: 'Aura Couture',
      accent: 'blue',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=250&q=80'
    },
    {
      id: 6,
      quote: 'The AI automation workflows Profito deployed streamlined our operations and cut administrative response time by over 50%.',
      author: 'Siddharth Rao',
      role: 'Founder',
      company: 'OmniShop D2C',
      accent: 'lime',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=250&q=80'
    }
  ]
}

