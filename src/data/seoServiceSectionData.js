import ecommerceImg from '../assets/online-store.png'
import healthcareImg from '../assets/healthcare.png'
import realEstateImg from '../assets/real-esatate.png'
import lawFirmImg from '../assets/law.png'

import wordpressImg from '../assets/WordPress.webp'
import angularImg from '../assets/Angular.webp'
import bigcommerceImg from '../assets/bigcommerce.webp'
import dudaImg from '../assets/Duda.webp'
import opencartImg from '../assets/opencart.webp'
import shopifyImg from '../assets/shopify.webp'
import weeblyImg from '../assets/weebly.webp'
import wixImg from '../assets/wix.webp'
import reactImg from '../assets/react.svg'
import joomlaImg from '../assets/Joomla.webp'
import laravelImg from '../assets/Laravel.webp'
import magentoImg from '../assets/magento.webp'

export const seoServiceSectionData = {
  badge: "SEO THAT DRIVES REAL GROWTH",
  titlePrefix: "Best ",
  titleHighlight: "SEO Services",
  titleSuffix: " in India for Search Engines & AI Platforms",
  description: "At Profito, we help businesses grow online with result-driven SEO strategies that improve visibility across search engines and AI-powered platforms. From keyword research to content optimization and link building, we deliver measurable results that drive traffic, leads, and long-term growth.",
  
  features: [
    {
      icon: "Award",
      title: "16+ Years of Digital Expertise"
    },
    {
      icon: "Users",
      title: "1000+ Happy Clients Across India"
    },
    {
      icon: "FileText",
      title: "Transparent Reporting & Communication"
    },
    {
      icon: "CheckCircle2",
      title: "Ethical SEO Practices for Long-Term Growth"
    }
  ],

  dashboard: {
    branding: {
      title: "profito",
      tagline: "Your Digital Growth Partner"
    },
    
    metrics: [
      {
        value: "90%",
        label: "Keywords on 1st Page",
        growth: "↑ 32%",
        icon: "Search"
      },
      {
        value: "48%",
        label: "Total Traffic Growth",
        growth: "↑ 21%",
        icon: "BarChart3"
      },
      {
        value: "63%",
        label: "Growth in Leads",
        growth: "↑ 27%",
        icon: "Users"
      }
    ],

    performanceChart: {
      title: "SEO PERFORMANCE",
      mainValue: "72%",
      segments: [
        { percentage: 72, label: "Organic Traffic", color: "#2196F3" },
        { percentage: 24, label: "Direct Traffic", color: "#93c5fd" },
        { percentage: 4, label: "Others", color: "slate-300" }
      ]
    },

    trafficGrowth: {
      title: "ORGANIC TRAFFIC GROWTH",
      subtitle: "Last 6 Months",
      growthBadge: "↑ 124%",
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
    },

    topKeywords: [
      { name: "Digital Marketing Agency", pos: 1 },
      { name: "SEO Services India", pos: 1 },
      { name: "Best SEO Company", pos: 1 },
      { name: "Web Development Company", pos: 2 },
      { name: "Social Media Marketing", pos: 3 }
    ]
  }
}

export const aiSeoServicesData = {
  badge: "SMARTER SEO. STRONGER GROWTH.",
  titlePrefix: "AI-Powered SEO Services ",
  titleBlue: "for Growing ",
  titleLime: "Brands",
  descriptionPrefix: "We offer a comprehensive range of SEO solutions designed to support sustainable growth across industries, markets, and business sizes. Our ",
  descriptionHighlight: "affordable SEO services India",
  descriptionSuffix: " combine strategic planning with proven execution to help businesses grow with confidence and clarity. Explore our services to see how we can support you.",
  cards: [
    {
      id: "national-seo",
      number: "01",
      title: "National",
      highlightTitle: "SEO",
      accentColor: "blue",
      iconType: "National",
      description: "This is basically used for targeting broader audiences. National SEO is mostly used by large businesses & brands to enhance online visibility across the nation.",
      buttonText: "Explore SEO Plan",
      buttonLink: "/seo-services#national"
    },
    {
      id: "local-seo",
      number: "02",
      title: "Local",
      highlightTitle: "SEO",
      accentColor: "lime",
      iconType: "Local",
      description: "Local SEO help to improve a website's visibility in specific local areas or geographical location. This is used by small and local businesses to attract nearby customers.",
      buttonText: "Explore Local SEO",
      buttonLink: "/seo-services#local"
    },
    {
      id: "ai-seo",
      number: "03",
      title: "AI SEO",
      highlightTitle: "Services",
      accentColor: "blue",
      iconType: "AiSeo",
      description: "Businesses of all sizes can benefit from AI SEO. By using AI-driven optimization strategies, you can improve your brand visibility across SERP and AI-powered platform.",
      buttonText: "Explore AI SEO Plan",
      buttonLink: "/seo-services#ai-seo"
    },
    {
      id: "ecommerce-seo",
      number: "04",
      title: "E-commerce",
      highlightTitle: "SEO",
      accentColor: "lime",
      iconType: "Ecommerce",
      description: "Ecommerce SEO is used by online retail or shopping websites. It helps to boost your online stores' visibility, attract relevant traffic & enhance your sales.",
      buttonText: "Explore Ecommerce SEO",
      buttonLink: "/seo-services#ecommerce"
    }
  ]
}

export const seoStrategiesData = {
  titlePrefix: "Proven SEO Strategies ",
  titleHighlight: "That Drive Growth",
  description: "We deliver customized search engine optimization services designed to improve search visibility and measurable performance. Our affordable SEO services help businesses attract high-intent organic traffic, rank for high-value keywords, and strengthen visibility across traditional search engines and LLM-powered search platforms. Explore our client success stories to see how our SEO strategies deliver real, measurable results.",
  cards: [
    {
      id: "ecommerce",
      title: "E-Commerce",
      image: ecommerceImg,
      iconType: "ShoppingCart",
      stat1: { value: "+150%", label: "Organic Revenue" },
      stat2: { value: "+80%", label: "Website Traffic" }
    },
    {
      id: "healthcare",
      title: "Health Care",
      image: healthcareImg,
      iconType: "Activity",
      stat1: { value: "+210%", label: "Qualified Leads" },
      stat2: { value: "+98%", label: "Keywords Ranked Page #1" }
    },
    {
      id: "real-estate",
      title: "Real Estate",
      image: realEstateImg,
      iconType: "Home",
      stat1: { value: "+180%", label: "Online Leads" },
      stat2: { value: "+243%", label: "Website Sale" }
    },
    {
      id: "law-firm",
      title: "Law Firm",
      image: lawFirmImg,
      iconType: "Scale",
      stat1: { value: "+95%", label: "Keywords Ranked in Top 5" },
      stat2: { value: "+140%", label: "Organic Search Traffic" }
    }
  ]
}

export const platformSeoSectionData = {
  badge: "TRUSTED ACROSS PLATFORMS",
  titlePrefix: "Platform-Focused ",
  titleHighlight: "SEO Services",
  description: "We deliver quality SEO services across modern website platforms to improve website performance on traditional SERPs and AI-powered search results. Below are some of the platforms we have worked with.",
  platforms: [
    { id: "wordpress", name: "WordPress", image: wordpressImg, accentColor: "blue" },
    { id: "magento", name: "Magento", image: magentoImg, accentColor: "lime" },
    { id: "angular", name: "AngularJS", image: angularImg, accentColor: "blue" },
    { id: "bigcommerce", name: "BIGCOMMERCE", image: bigcommerceImg, accentColor: "lime" },
    { id: "duda", name: "duda", image: dudaImg, accentColor: "lime" },
    { id: "joomla", name: "Joomla!", image: joomlaImg, accentColor: "blue" },
    { id: "laravel", name: "Laravel", image: laravelImg, accentColor: "lime" },
    { id: "react", name: "React JS", image: reactImg, type: "react", accentColor: "blue" },
    { id: "opencart", name: "opencart", image: opencartImg, accentColor: "blue" },
    { id: "shopify", name: "shopify", image: shopifyImg, accentColor: "lime" },
    { id: "weebly", name: "weebly", image: weeblyImg, accentColor: "blue" },
    { id: "wix", name: "Wix.com", image: wixImg, accentColor: "lime" }
  ]
}

export const seoScopeData = {
  titlePrefix: "What Our ",
  titleHighlight: "SEO Services",
  titleSuffix: " Cover",
  tabs: [
    {
      id: "discovery",
      tabTitle: "Discovery & Analysis",
      contentTitlePrefix: "Discovery & ",
      contentTitleHighlight: "Business Analysis",
      iconName: "Search",
      paragraphs: [
        "This is the foundation for a successful SEO strategy. We begin by understanding your business goals, challenges, target audience, and growth objectives through a focused intake call to ensure complete alignment between our team and your business.",
        "We evaluate your website's current visibility across traditional search engines and AI-driven search platforms, identifying performance gaps, competitive positioning, and authority opportunities. This includes analyzing how your brand appears in search results and where improvements are needed.",
        "A comprehensive website audit is done, covering content quality, technical health, indexing, and backlink risks. Based on these results, we create a clear, custom SEO roadmap that outlines what needs to be fixed, optimized, and scaled to support sustainable, long-term growth."
      ]
    },
    {
      id: "keyword-mapping",
      tabTitle: "Keyword & Intent Mapping",
      contentTitlePrefix: "Keyword & ",
      contentTitleHighlight: "Search Intent Mapping",
      iconName: "Target",
      paragraphs: [
        "Keywords are the bridge between customer intent and your services. We perform in-depth keyword research to identify high-value search terms, transactional queries, and long-tail phrases that drive qualified leads.",
        "We map search queries to specific funnel stages—top, middle, and bottom of funnel—ensuring every page targets keywords matching user expectations and buying intent.",
        "Beyond traditional volume metrics, we analyze AI search patterns, conversational prompts, and semantic topic clusters to ensure your brand ranks across all modern discovery platforms."
      ]
    },
    {
      id: "competitor-analysis",
      tabTitle: "Competitor Analysis",
      contentTitlePrefix: "Competitive ",
      contentTitleHighlight: "Market Intelligence",
      iconName: "Users",
      paragraphs: [
        "Understanding your market competitors reveals valuable gaps and strategic growth opportunities. We perform a thorough analysis of top ranking competitors in your industry.",
        "We evaluate competitor backlink profiles, content strategies, keyword rankings, and technical architecture to uncover why they rank and how you can outperform them.",
        "Our strategic insights allow us to target high-yield opportunities, outrank market rivals, and capture market share in competitive search landscapes."
      ]
    },
    {
      id: "content-ux",
      tabTitle: "Content & UX Optimization",
      contentTitlePrefix: "Content & ",
      contentTitleHighlight: "UX Optimization",
      iconName: "FileText",
      paragraphs: [
        "High-quality content drives organic search success and visitor engagement. We refine and optimize on-page content for clarity, depth, E-E-A-T, and search relevance.",
        "We align user experience (UX) with content flow, optimizing readability, conversion elements, internal link structures, and call-to-actions to keep visitors engaged.",
        "By structuring content cleanly with proper header hierarchies and rich snippet targets, we maximize both SERP visibility and on-site conversions."
      ]
    },
    {
      id: "technical-seo",
      tabTitle: "Technical SEO",
      contentTitlePrefix: "Technical ",
      contentTitleHighlight: "Infrastructure & Health",
      iconName: "Settings",
      paragraphs: [
        "A strong technical foundation ensures search crawlers can efficiently index and rank your web pages without structural bottlenecks.",
        "We resolve crawl errors, optimize site architecture, fix broken links, enhance page load speed, and ensure seamless mobile responsiveness.",
        "We continuously monitor Google Search Console metrics, Core Web Vitals, and XML sitemaps to maintain peak website performance and crawl efficiency."
      ]
    },
    {
      id: "ai-search",
      tabTitle: "AI Search Optimization",
      contentTitlePrefix: "AI & LLM ",
      contentTitleHighlight: "Search Optimization",
      iconName: "Sparkles",
      paragraphs: [
        "Generative search engines like ChatGPT, Perplexity, Google Gemini, and Bing Copilot are transforming how users discover information online.",
        "We optimize your brand presence for AI answer engines through entity mapping, structured data, conversational Q&A content, and authoritative citation building.",
        "Positioning your business as a primary trusted reference ensures your brand is recommended in direct AI-generated answers."
      ]
    },
    {
      id: "schema",
      tabTitle: "Schema Implementation",
      contentTitlePrefix: "Schema & ",
      contentTitleHighlight: "Structured Data Markup",
      iconName: "Code",
      paragraphs: [
        "Structured data helps search engines accurately understand your content type, organization details, services, reviews, and FAQs.",
        "We implement custom JSON-LD schema markup across product pages, local business listings, articles, and service landing pages.",
        "This enhances your search listings with rich snippets, star ratings, price info, and FAQ accordions that significantly boost click-through rates (CTR)."
      ]
    },
    {
      id: "authority-building",
      tabTitle: "Authority Building",
      contentTitlePrefix: "Authority & ",
      contentTitleHighlight: "Link Building",
      iconName: "ShieldCheck",
      paragraphs: [
        "Domain authority and brand reputation are vital ranking factors. We build high-quality, contextual backlinks from reputable industry platforms.",
        "Our ethical link building strategies focus on digital PR, content outreach, guest publishing, and strategic brand citations.",
        "We maintain a natural link velocity and audit backlink profiles regularly to defend your website against toxic links or algorithmic penalties."
      ]
    },
    {
      id: "performance-reporting",
      tabTitle: "Performance Reporting",
      contentTitlePrefix: "Transparent ",
      contentTitleHighlight: "Performance Reporting",
      iconName: "BarChart3",
      paragraphs: [
        "Transparency and measurable outcomes are at the core of our SEO services. We provide comprehensive monthly performance reports detailing key milestones.",
        "We track keyword positions, organic traffic trends, conversion rates, and ROI metrics using custom Google Analytics 4 and Search Console dashboards.",
        "Regular review meetings keep you updated on progress, upcoming strategy refinements, and competitive market opportunities."
      ]
    }
  ]
}

export const seoApproachData = {
  badge: "OUR SEO PROCESS",
  titlePrefix: "Our SEO ",
  titleMiddle: "Approach for ",
  titleHighlightBlue: "Sustainable ",
  titleHighlightLime: "Growth",
  description: "We follow a proven, data-driven SEO process that helps businesses improve visibility, attract the right audience, and achieve long-term growth.",
  stats: [
    { value: "+120%", label: "Organic Growth", iconName: "BarChart3" },
    { value: "3x", label: "More Visibility", iconName: "Users" },
    { value: "Long-term", label: "Results", iconName: "Rocket" }
  ],
  ctaText: "Grow Your Business with SEO",
  steps: [
    {
      number: "01",
      title: "Business & Market Research",
      description: "We analyze your business, industry, competitors, and audience to find growth opportunities.",
      color: "#2196F3",
      bgColor: "#eef6ff",
      iconName: "Search"
    },
    {
      number: "02",
      title: "Keyword & Intent Strategy",
      description: "We identify high-value keywords and search intent to target the right audience.",
      color: "#c5f015",
      bgColor: "#f7fce5",
      iconName: "Target"
    },
    {
      number: "03",
      title: "Content & UX Optimization",
      description: "We optimize your content and user experience to match search intent and boost engagement.",
      color: "#00bcd4",
      bgColor: "#e0f7fa",
      iconName: "Users"
    },
    {
      number: "04",
      title: "Technical SEO",
      description: "We fix technical issues and optimize your site structure for better crawling and indexing.",
      color: "#a855f7",
      bgColor: "#f3e8ff",
      iconName: "Settings"
    },
    {
      number: "05",
      title: "Authority & Link Building",
      description: "We build high-quality backlinks and strengthen your domain authority.",
      color: "#ec4899",
      bgColor: "#fce7f3",
      iconName: "TrendingUp"
    },
    {
      number: "06",
      title: "Monitoring & Performance",
      description: "We track performance, analyze data, and continuously refine strategies for growth.",
      color: "#ffba00",
      bgColor: "#fff8e6",
      iconName: "ShieldCheck"
    }
  ]
}

export const seoExplainedData = {
  titlePrefix: "SEO Services Explained: ",
  titleHighlight: "What, How & Costs",
  description: "For businesses seeking affordable SEO services in India, it's important to understand how SEO works before making the right investment. Below are common questions and clear answers to help you understand what SEO is, how it works, and why it matters.",
  tabs: [
    {
      id: "what-is-seo",
      tabTitle: "What Are SEO Services?",
      iconName: "HelpCircle",
      isLimeIcon: false,
      contentTitlePrefix: "What Are ",
      contentTitleHighlight: "SEO Services?",
      intro: "SEO (Search Engine Optimization) services are strategic digital marketing solutions designed to increase your website's visibility on search engine results pages (SERPs) like Google and Bing.",
      items: [
        {
          iconName: "Search",
          label: "Organic Traffic Growth:",
          description: "Attract targeted, high-intent users actively searching for your products or services without paying for ad clicks.",
          color: "blue"
        },
        {
          iconName: "Award",
          label: "Brand Credibility & Trust:",
          description: "Ranking high on search engines establishes authority, user trust, and industry leadership in the eyes of potential buyers.",
          color: "lime"
        },
        {
          iconName: "TrendingUp",
          label: "Long-Term Digital Equity:",
          description: "Unlike paid advertising that stops when budget ends, SEO creates compounding, sustainable traffic growth over time.",
          color: "blue"
        }
      ]
    },
    {
      id: "how-it-works",
      tabTitle: "How Does It Work?",
      iconName: "Settings",
      isLimeIcon: false,
      contentTitlePrefix: "How Does ",
      contentTitleHighlight: "SEO Work?",
      intro: "SEO works by aligning your website's technical structure, content quality, and domain authority with search engine algorithms to deliver the best answer for user search queries.",
      items: [
        {
          iconName: "Globe",
          label: "Crawling & Indexing:",
          description: "Search engines send automated bots to discover, read, and organize web pages into massive searchable digital databases.",
          color: "blue"
        },
        {
          iconName: "Target",
          label: "Relevance & Quality Ranking:",
          description: "Algorithms evaluate content depth, keyword intent, mobile UX, and page performance to rank top search results.",
          color: "lime"
        },
        {
          iconName: "ShieldCheck",
          label: "Authority & Signal Building:",
          description: "Search engines measure domain trust through quality backlinks, brand references, and positive user engagement signals.",
          color: "blue"
        }
      ]
    },
    {
      id: "who-can-use",
      tabTitle: "Who Can Use SEO",
      iconName: "User",
      isLimeIcon: false,
      contentTitlePrefix: "Who Can Benefit From ",
      contentTitleHighlight: "SEO?",
      intro: "SEO is essential for any business or organization seeking to expand online reach, capture customer demand, and build a scalable competitive advantage.",
      items: [
        {
          iconName: "ShoppingCart",
          label: "E-Commerce & Online Stores:",
          description: "Drive product discovery, category traffic, and online store sales directly from organic search queries.",
          color: "blue"
        },
        {
          iconName: "Users",
          label: "Local & B2B Businesses:",
          description: "Connect with nearby buyers searching for local services, professional consultants, or enterprise solutions.",
          color: "lime"
        },
        {
          iconName: "Sparkles",
          label: "Startups & Emerging Brands:",
          description: "Build cost-effective market awareness and outrank established competitors through targeted keyword strategies.",
          color: "blue"
        }
      ]
    },
    {
      id: "types-of-seo",
      tabTitle: "Type of SEO Services?",
      iconName: "Layers",
      isLimeIcon: false,
      contentTitlePrefix: "Type of ",
      contentTitleHighlight: "SEO Services?",
      intro: "Search engine optimization services can be categorized into three key types, and all of them are essential for your SEO marketing strategy. To enhance your website's performance, explore these 3 SEO types.",
      items: [
        {
          iconName: "FileText",
          label: "On-page optimization:",
          description: "On-page optimization involves modifying elements of a website's content, including titles, Meta descriptions, headers, and the use of keywords, in order to raise its search engine visibility and enhance user experience.",
          color: "blue"
        },
        {
          iconName: "Link",
          label: "Off-page optimization:",
          description: "Off-page optimization improves a website's visibility, credibility, and search engine rankings by boosting its online presence and building high-quality backlinks in the form of Guest posting, PR & media outreach, broken link building, brand mentions, and more.",
          color: "lime"
        },
        {
          iconName: "Settings",
          label: "Technical SEO:",
          description: "It's include optimizing the technical aspects of a website, like site speed, mobile-friendliness, website structure and ensuring search engines can crawl and index the site easily.",
          color: "blue"
        }
      ]
    },
    {
      id: "cost-of-seo",
      tabTitle: "Cost of SEO Services",
      iconName: "DollarSign",
      isLimeIcon: true,
      contentTitlePrefix: "Cost of ",
      contentTitleHighlight: "SEO Services",
      intro: "SEO pricing varies based on project scope, competitive environment, business goals, and campaign execution speed. Investing in SEO yields exceptionally high ROI.",
      items: [
        {
          iconName: "Award",
          label: "Custom Tailored Packages:",
          description: "Flexible monthly retainers customized for local businesses, national brands, or enterprise e-commerce portals.",
          color: "blue"
        },
        {
          iconName: "FileText",
          label: "Transparent Pricing Model:",
          description: "Clear deliverables with no hidden costs covering audits, technical fixes, content creation, and link building.",
          color: "lime"
        },
        {
          iconName: "TrendingUp",
          label: "High Return on Investment:",
          description: "Sustainable organic rankings continue driving qualified leads and revenue long after initial optimizations are deployed.",
          color: "blue"
        }
      ]
    }
  ]
}

export const seoCtaSectionData = {
  badge: "SEO THAT DRIVES REAL GROWTH",
  titlePrefix: "Ready to Stay Visible and ",
  titleHighlight: "Grow Revenue ",
  titleSuffix: "With SEO?",
  descriptionPrefix: "Get a personalized look at how our AI + SEO experts can ",
  descriptionHighlight: "accelerate your growth.",
  inputPlaceholder: "Enter your website",
  buttonText: "Get My SEO Growth Plan",
  trustBadges: [
    { iconName: "ShieldCheck", label: "No Commitment" },
    { iconName: "Zap", label: "Quick & Easy" },
    { iconName: "Lock", label: "100% Secure" }
  ]
}

export const seoBenefitsData = {
  badge: "NEXT-GEN SEO BENEFITS",
  titlePrefix: "Why Your Business Need ",
  titleHighlight: "Next-Gen SEO Services",
  description: "Most users research products/services through search engines before making a decision. If your business is not visible there, you risk losing potential customers. This is where search engine optimization services play a crucial role by improving your website's visibility across SERPs and AI platforms.",
  cards: [
    {
      number: "01",
      title: "Increased Online Visibility",
      description: "Our SEO team understands the importance of online visibility. We improve visibility by optimizing your website for relevant keywords, building a strong content plan, and enhancing technical SEO, link building, and PR activities.",
      color: "#2196F3",
      bgColor: "#eef6ff",
      iconName: "Eye"
    },
    {
      number: "02",
      title: "High-Quality Leads",
      description: "Rankings, our SEO experts focus on all aspects of SEO, from technical optimization and content creation to link building, to drive targeted traffic. With our best SEO services, you can stay ahead of competitors and generate consistent, high-quality leads.",
      color: "#00d487",
      bgColor: "#e6fbf3",
      iconName: "UserCheck"
    },
    {
      number: "03",
      title: "Sustainable Business Growth",
      description: "SEO supports sustainable business growth by building a strong and lasting online presence. We help businesses stay ahead of the competition with customized search engine optimization services, focused on delivering maximum visibility.",
      color: "#00bcd4",
      bgColor: "#e0f7fa",
      iconName: "TrendingUp"
    },
    {
      number: "04",
      title: "Better ROI & Long-Term Results",
      description: "Unlike paid ads, SEO delivers long-term results with compounding returns. It's a cost-effective strategy that brings continuous traffic, higher conversions, and measurable ROI for your business.",
      color: "#ffba00",
      bgColor: "#fff8e6",
      iconName: "Target"
    }
  ]
}

export const seoFaqData = {
  badge: "FAQS",
  titleLine1: "Frequently",
  titleLine2: "Asked",
  titleHighlight: "Questions",
  description: "We are here to help you with any questions you may have.",
  primaryButtonText: "Speak to an expert",
  secondaryButtonText: "Read more FAQs",
  faqs: [
    {
      id: "faq-1",
      question: "What digital marketing services does Profito Interactive offer?",
      answer: "Profito Interactive offers a wide range of digital marketing services including SEO, PPC, Social Media Marketing, Content Marketing, Web Design, and more — tailored to help your business grow online.",
      iconName: "FileText"
    },
    {
      id: "faq-2",
      question: "How long does it take to see results from SEO?",
      answer: "SEO is a long-term investment. Most businesses start seeing noticeable improvements in rankings, traffic, and leads within 3 to 6 months, depending on competition and website history.",
      iconName: "Clock"
    },
    {
      id: "faq-3",
      question: "Do you work with businesses outside of India?",
      answer: "Yes! We partner with clients globally across the US, UK, UAE, Australia, and Europe, providing localized and international SEO strategies that deliver measurable growth.",
      iconName: "Globe"
    },
    {
      id: "faq-4",
      question: "How do you measure the success of a campaign?",
      answer: "We track key performance metrics including organic traffic growth, keyword rankings, conversion rates, organic leads, bounce rate, and overall ROI using transparent weekly and monthly analytics reports.",
      iconName: "BarChart3"
    },
    {
      id: "faq-5",
      question: "Can you help with both B2B and B2C marketing?",
      answer: "Absolutely! We tailor our search engine optimization and digital marketing strategies specifically for B2B lead generation and B2C consumer conversions based on your target audience behavior.",
      iconName: "Users"
    },
    {
      id: "faq-6",
      question: "How do I get started with Profito Interactive?",
      answer: "Getting started is simple! Contact us for a free SEO audit and consultation. Our experts will analyze your website, discuss your business goals, and create a customized growth plan.",
      iconName: "Rocket"
    },
    {
      id: "faq-7",
      question: "What makes Profito Interactive different from other agencies?",
      answer: "We combine AI-driven SEO technologies, data-backed strategies, 100% transparent reporting, and dedicated account managers to deliver sustainable revenue growth rather than just temporary rankings.",
      iconName: "Star"
    }
  ]
}

export const seoClientsData = {
  badge: "OUR CLIENTS",
  titlePrefix: "Trusted by ",
  titleHighlight: "Corporate Partners",
  description: "We are proud to serve businesses and brands across a wide range of industries, delivering best SEO services focused on long-term growth. Below are some of the key clients we have worked with:",
  clients: [
    { name: "BP Group", logoKey: "bpLogo", color: "#2196f3" },
    { name: "Utho Cloud", logoKey: "uthoLogo", color: "#bcd32e" },
    { name: "Probo", logoKey: "proboLogo", color: "#2196f3" },
    { name: "IBCME", logoKey: "ibcmeLogo", color: "#bcd32e" },
    { name: "AJ", logoKey: "ajLogo", color: "#2196f3" },
    { name: "India TV", logoKey: "indiatvLogo", color: "#bcd32e" },
    { name: "Tau", logoKey: "tauLogo", color: "#2196f3" },
    { name: "Zopper", logoKey: "zopperLogo", color: "#bcd32e" }
  ]
}

export const seoTestimonialsData = {
  badge: "CLIENT TESTIMONIALS",
  titlePrefix: "What Our ",
  titleHighlight: "Clients Say",
  description: "We take pride in delivering result-driven SEO services that help businesses grow. Here's what our happy clients have to say about working with us.",
  testimonials: [
    {
      id: 1,
      quote: "Profito Interactive has been a game changer for our online presence. Their SEO strategies boosted our rankings and increased organic traffic significantly.",
      author: "Amit Sharma",
      role: "Marketing Head",
      company: "ChannelSales",
      companyColor: "#2196f3",
      rating: 5
    },
    {
      id: 2,
      quote: "The team is highly professional, transparent, and delivers measurable results. We've seen consistent growth in leads and revenue since partnering with them.",
      author: "Neha Verma",
      role: "CEO",
      company: "Plantasia",
      companyColor: "#bcd32e",
      rating: 5
    },
    {
      id: 3,
      quote: "Their technical SEO expertise and content strategy helped us outrank our top competitors. Excellent communication and timely delivery!",
      author: "Rahul Mehta",
      role: "Director",
      company: "Vortex Flex",
      companyColor: "#2196f3",
      rating: 5
    },
    {
      id: 4,
      quote: "From SEO to overall digital strategy, Profito Interactive understands our goals and delivers beyond expectations. Highly recommended!",
      author: "Priya Singh",
      role: "Brand Manager",
      company: "Baidyanath",
      companyColor: "#bcd32e",
      rating: 5
    },
    {
    id: 5,
    quote: "From SEO to overall digital strategy, Profito Interactive understands our goals and delivers beyond expectations. Highly recommended!",
    author: "Priya Singh",
    role: "Brand Manager",
    company: "Baidyanath",
    companyColor: "#bcd32e",
    rating: 5
    },
    

    
  ]
}






