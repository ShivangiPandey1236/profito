// Design Portfolio Page Data Store
import moroccoImg from '../assets/moroccoworldnews-s.png'
import writoholicImg from '../assets/writoholic-s.png'
import echonBImg from '../assets/echon-b.png'
import onlineStoreImg from '../assets/online-store.png'
import realEstateImg from '../assets/real-esatate.png'
import healthcareImg from '../assets/healthcare.png'
import lawImg from '../assets/law.png'
import cashfreeImg from '../assets/cashefree-new.png'
import newDesignImg from '../assets/new-design.png'

export const DESIGN_PORTFOLIO_HERO_DATA = {
  badgeText: 'WEB DEVELOPMENT PORTFOLIO',
  titleHighlight: 'Web Development',
  titleSuffix: 'Portfolio',
  subtitle: "Explore a collection of websites I've built with modern technologies, clean code, and a focus on performance and user experience."
}

export const DESIGN_PORTFOLIO_CATEGORIES = [
  { id: 'All', label: 'All' },
  { id: 'WordPress', label: 'WordPress', type: 'wordpress' },
  { id: 'PHP', label: 'PHP', type: 'php' },
  { id: 'Shopify', label: 'Shopify', type: 'shopify' },
  { id: 'App', label: 'App', type: 'app' }
]

export const DESIGN_PORTFOLIO_PROJECTS = [
  {
    id: 'bathxpertz',
    title: 'BathXpertz',
    category: 'PHP',
    categoryLabel: 'PHP',
    image: onlineStoreImg,
    previewImage: echonBImg,
    websiteUrl: 'https://bathxpertz.com',
    description: 'A premium sanitaryware & custom bathroom fitting web portal engineered for BathXpertz featuring a responsive product catalog, interactive consultation request funnels, and high-speed search.',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'HTML']
  },
  {
    id: 'echon',
    title: 'Echon',
    category: 'WordPress',
    categoryLabel: 'WORDPRESS',
    image: realEstateImg,
    previewImage: echonBImg,
    websiteUrl: 'https://echon.com',
    description: 'A modern interior design & architectural boards WordPress website built for Echon with clean UI, responsive layout, intuitive navigation, product showcase, and dynamic inquiry forms.',
    technologies: ['WordPress', 'PHP', 'Bootstrap', 'HTML']
  },
  {
    id: 'morocco-world-news',
    title: 'Morocco World News',
    category: 'PHP',
    categoryLabel: 'PHP',
    image: moroccoImg,
    previewImage: moroccoImg,
    websiteUrl: 'https://moroccoworldnews.com',
    description: 'A high-traffic international digital news publication delivering real-time news, opinion columns, multimedia reporting, and mobile-optimized publishing workflows.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'TailwindCSS', 'HTML']
  },
  {
    id: 'dreamworx-marketing',
    title: 'Dreamworx Marketing',
    category: 'WordPress',
    categoryLabel: 'WORDPRESS',
    image: healthcareImg,
    previewImage: newDesignImg,
    websiteUrl: 'https://dreamworxmarketing.com',
    description: 'Empowering service & trade businesses to thrive online. A conversion-focused WordPress digital agency platform with custom quote calculators and lead generation modules.',
    technologies: ['WordPress', 'PHP', 'Elementor', 'Bootstrap', 'HTML']
  },
  {
    id: 'allspace-group',
    title: 'Allspace Group',
    category: 'WordPress',
    categoryLabel: 'WORDPRESS',
    image: lawImg,
    previewImage: echonBImg,
    websiteUrl: 'https://allspacegroup.com',
    description: 'Allspace Group specializes in consulting, designing, and producing booths for trade shows and retail environments. A modern corporate WordPress website built with a clean UI, responsive layout, and dynamic portfolio galleries.',
    technologies: ['WordPress', 'PHP', 'Bootstrap', 'HTML']
  },
  {
    id: 'writoholic',
    title: 'Writoholic',
    category: 'WordPress',
    categoryLabel: 'WORDPRESS',
    image: writoholicImg,
    previewImage: writoholicImg,
    websiteUrl: 'https://writoholic.com',
    description: 'Let’s Collaborate to Transform How You Communicate, Hire or Learn! Writoholic is an all-in-one platform of AI content writing tools that helps you create, paraphrase, and humanize content in seconds.',
    technologies: ['WordPress', 'React', 'PHP', 'Bootstrap', 'HTML']
  },
  // Additional page items
  {
    id: 'cashefree-app',
    title: 'Cashfree Payments',
    category: 'App',
    categoryLabel: 'APP',
    image: onlineStoreImg,
    previewImage: cashfreeImg,
    websiteUrl: 'https://cashfree.com',
    description: 'Comprehensive fintech payment gateway dashboard for seamless merchant onboarding, payout processing, and real-time transaction analytics.',
    technologies: ['React', 'Node.js', 'PHP', 'HTML']
  },
  {
    id: 'shopify-store',
    title: 'Verda Organics',
    category: 'Shopify',
    categoryLabel: 'SHOPIFY',
    image: realEstateImg,
    previewImage: echonBImg,
    websiteUrl: 'https://verdaorganics.com',
    description: 'Eco-luxe D2C e-commerce storefront featuring sustainable product collections, fast checkout, and personalized skincare recommendation quizzes.',
    technologies: ['Shopify', 'Liquid', 'TailwindCSS', 'HTML']
  },
  {
    id: 'stockdaddy-edtech',
    title: 'StockDaddy Portal',
    category: 'PHP',
    categoryLabel: 'PHP',
    image: moroccoImg,
    previewImage: echonBImg,
    websiteUrl: 'https://stockdaddy.in',
    description: 'India’s premier stock market learning web portal offering interactive stock trading courses, live webinars, and student progress dashboards.',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'HTML']
  },
  {
    id: 'dypatil-edu',
    title: 'DY Patil Edu',
    category: 'WordPress',
    categoryLabel: 'WORDPRESS',
    image: writoholicImg,
    previewImage: echonBImg,
    websiteUrl: 'https://dypatil.edu',
    description: 'Comprehensive university portal for academic admissions, course curriculum downloads, faculty research papers, and campus news.',
    technologies: ['WordPress', 'PHP', 'HTML']
  },
  {
    id: 'utho-infra',
    title: 'UTHO Cloud',
    category: 'PHP',
    categoryLabel: 'PHP',
    image: healthcareImg,
    previewImage: echonBImg,
    websiteUrl: 'https://utho.com',
    description: 'Enterprise cloud infrastructure console enabling instant VPS provisioning, Kubernetes cluster management, and bandwidth monitoring.',
    technologies: ['PHP', 'React', 'HTML']
  },
  {
    id: 'probo-fintech',
    title: 'Probo Trading',
    category: 'App',
    categoryLabel: 'APP',
    image: lawImg,
    previewImage: cashfreeImg,
    websiteUrl: 'https://probo.in',
    description: 'Opinion trading web app allowing users to trade on real-world events with instant payouts and live WebSocket odds updates.',
    technologies: ['React', 'Node.js', 'HTML']
  }
]
