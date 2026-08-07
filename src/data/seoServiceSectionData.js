import ecommerceImg from '../assets/online-store.png'
import healthcareImg from '../assets/healthcare.png'
import realEstateImg from '../assets/real-esatate.png'
import lawFirmImg from '../assets/law.png'

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
