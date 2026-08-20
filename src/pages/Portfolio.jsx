import React, { useState, useEffect, useRef } from 'react'
import {
  ExternalLink,
  Search,
  Filter,
  Layers,
  Sparkles,
  TrendingUp,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  X,
  Star,
  Globe,
  Smartphone,
  Bot,
  Palette,
  Zap,
  BarChart3,
  ChevronRight,
  ChevronLeft,
  Eye,
  Quote,
  Folder,
  LayoutGrid,
  Grid,
  Car,
  Landmark,
  Handshake,
  Briefcase,
  ShoppingCart,
  GraduationCap,
  Tv,
  Shirt,
  ShoppingBag,
  HeartPulse,
  Building,
  Building2,
  Utensils,
  Hospital,
  ShieldCheck,
  Cpu,
  Factory,
  Radio
} from 'lucide-react'
import CTASection from '../components/CTASection'
import ClientsSection from '../components/ClientsSection'
import {
  HERO_BANNER_DATA,
  TESTIMONIALS_SECTION_DATA,
  PORTFOLIO_PROJECTS,
  PORTFOLIO_STATS,
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_FEATURED_QUOTE,
  OUR_PORTFOLIO_CATEGORIES,
  OUR_PORTFOLIO_CARDS
} from '../data/portfolioData'

import dyPatilImg from '../assets/DY-Patil.png'
import stockDaddyImg from '../assets/Stock-Daddy.png'

const ICON_MAP = {
  Grid: Grid,
  Car: Car,
  Landmark: Landmark,
  Handshake: Handshake,
  Briefcase: Briefcase,
  ShoppingCart: ShoppingCart,
  GraduationCap: GraduationCap,
  Tv: Tv,
  Shirt: Shirt,
  ShoppingBag: ShoppingBag,
  HeartPulse: HeartPulse,
  Building: Building,
  Building2: Building2,
  Utensils: Utensils,
  Hospital: Hospital,
  ShieldCheck: ShieldCheck,
  Cpu: Cpu,
  Factory: Factory,
  LayoutGrid: LayoutGrid,
  Radio: Radio
}

// Animated CountUp component
function CountUp({ end, duration = 1600, decimals = 0, suffix = '' }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const current = elementRef.current
    if (!current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return

    let startTime = null
    const startValue = 0

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      const currentValue = startValue + easeProgress * (end - startValue)
      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [started, end, duration])

  return (
    <span ref={elementRef}>
      {decimals > 0 ? count.toFixed(decimals) : Math.round(count)}
      {suffix}
    </span>
  )
}

// Render stylized graphic preview for project card header
function ProjectGraphicPreview({ type, gradient, title }) {
  return (
    <div className={`relative w-full h-52 sm:h-60 bg-gradient-to-br ${gradient} p-6 flex flex-col justify-between overflow-hidden group-hover:scale-[1.02] transition-transform duration-500`}>
      {/* Decorative ambient overlay pattern */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}
      />

      {/* Floating ambient glow circles */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />

      {/* Top Bar Mockup elements */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
          <span className="w-2 h-2 rounded-full bg-red-400" />
          <span className="w-2 h-2 rounded-full bg-yellow-400" />
          <span className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-[10px] text-white/70 font-mono pl-1 select-none">profito.case-study</span>
        </div>
        <div className="bg-white/15 backdrop-blur-md p-1.5 rounded-lg border border-white/20 text-white">
          <Sparkles className="w-4 h-4" />
        </div>
      </div>

      {/* Center Simulated UI Mockup Widget */}
      <div className="relative z-10 my-auto bg-black/40 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-2xl transition-transform duration-300 group-hover:translate-y-[-2px]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-black text-white tracking-wide truncate max-w-[200px]">{title}</span>
          <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-400/30">
            LIVE METRICS
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 pt-1 border-t border-white/10">
          <div className="bg-white/5 rounded p-1.5 text-center">
            <span className="block text-[9px] text-white/60 font-medium">Growth</span>
            <span className="block text-xs font-bold text-sky-300">+340%</span>
          </div>
          <div className="bg-white/5 rounded p-1.5 text-center">
            <span className="block text-[9px] text-white/60 font-medium">Speed</span>
            <span className="block text-xs font-bold text-amber-300">0.3s</span>
          </div>
          <div className="bg-white/5 rounded p-1.5 text-center">
            <span className="block text-[9px] text-white/60 font-medium">Rating</span>
            <span className="block text-xs font-bold text-emerald-300">4.9 ★</span>
          </div>
        </div>
      </div>

      {/* Bottom overlay badge */}
      <div className="relative z-10 flex justify-between items-center text-xs text-white/80 font-medium">
        <span className="flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" /> Profito Verified Project
        </span>
        <span className="underline underline-offset-4 group-hover:text-white transition-colors flex items-center gap-1 font-bold">
          View Case Study <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const containerRef = useRef(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeOurCategory, setActiveOurCategory] = useState('All')
  const [showAllCards, setShowAllCards] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProject, setSelectedProject] = useState(null)

  // Track responsive mobile state for card limits (3 mobile / 6 desktop)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Filter Our Portfolio cards
  const filteredOurCards = OUR_PORTFOLIO_CARDS.filter((card) => {
    if (activeOurCategory === 'All') return true
    return card.categories.includes(activeOurCategory)
  })

  // Responsive limit: 3 on mobile (<640px), 8 on desktop (>=640px)
  const initialLimit = isMobile ? 3 : 8
  const displayedOurCards = showAllCards ? filteredOurCards : filteredOurCards.slice(0, initialLimit)

  // Testimonials Carousel & Pagination Logic
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)
  const testimonialsPerPage = isMobile ? 1 : 3
  const totalTestimonialPages = Math.ceil(TESTIMONIALS_SECTION_DATA.items.length / testimonialsPerPage)

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % totalTestimonialPages)
  }

  const handlePrevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + totalTestimonialPages) % totalTestimonialPages)
  }

  const startTestimonialIdx = currentTestimonialIndex * testimonialsPerPage
  const visibleTestimonials = TESTIMONIALS_SECTION_DATA.items.slice(
    startTestimonialIdx,
    startTestimonialIdx + testimonialsPerPage
  )

  // Scroll reveal setup
  useEffect(() => {
    const root = containerRef.current
    if (!root) return

    const elements = root.querySelectorAll(
      '.reveal-on-scroll, .reveal-left, .reveal-right, .reveal-scale'
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [activeCategory, searchQuery])

  // Filter categories
  const categories = PORTFOLIO_CATEGORIES

  // Filter projects logic
  const filteredProjects = PORTFOLIO_PROJECTS.filter((proj) => {
    const matchesCategory =
      activeCategory === 'All' || proj.category === activeCategory
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.techStack.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      )
    return matchesCategory && matchesSearch
  })

  // Spotlight flagship project
  const flagshipProject = PORTFOLIO_PROJECTS[0]

  return (
    <div
      ref={containerRef}
      className="portfolio-page-wrapper bg-gradient-to-b from-white via-[#f4faff] to-[#eaf5ff] pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen text-black"
    >
      <div className="max-w-[1400px] mx-auto">

        {/* ── NEW PORTFOLIO HERO BANNER MATCHING DESIGN ── */}
        <div className="reveal-on-scroll mb-16 sm:mb-20">
          <div className="portfolio-hero-banner relative p-8 sm:p-14 lg:p-16 text-center overflow-hidden z-10">

            {/* Top-left dot accent (4 blue dots, 1 lime dot) */}
            <div className="absolute top-6 left-6 sm:top-8 sm:left-10 flex items-center gap-2 pointer-events-none z-20">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2196F3]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#2196F3]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#2196F3]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#2196F3]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#bcd32e]" />
            </div>

            {/* Top-right overlapping circles graphic */}
            <div className="absolute -top-6 -right-6 pointer-events-none z-10 hidden sm:block">
              <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="120" cy="60" r="55" stroke="#bcd32e" strokeWidth="1.8" opacity="0.85" />
                <circle cx="95" cy="45" r="75" stroke="#bcd32e" strokeWidth="1" opacity="0.45" />
              </svg>
            </div>

            {/* Right side diagonal hatch lines */}
            <div className="absolute top-10 right-0 w-44 h-64 pointer-events-none opacity-30 hidden md:block z-0">
              <svg width="180" height="260" viewBox="0 0 180 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                {Array.from({ length: 16 }).map((_, i) => (
                  <line
                    key={i}
                    x1={-20 + i * 14}
                    y1="0"
                    x2={70 + i * 14}
                    y2="260"
                    stroke="#2196F3"
                    strokeWidth="1.2"
                  />
                ))}
              </svg>
            </div>

            {/* Center-left soft glowing orb */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-10 w-40 h-40 rounded-full bg-gradient-to-tr from-[#2196F3]/25 via-[#42a5f5]/15 to-transparent blur-2xl pointer-events-none" />

            {/* Bottom-left layered blue vector waves */}
            {/* <div className="absolute bottom-0 left-0 w-full sm:w-[60%] h-36 sm:h-48 pointer-events-none z-0">
              <svg viewBox="0 0 500 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full preserve-3d">
                <path
                  d="M0 120C120 110 200 175 300 155C400 135 440 185 500 180V200H0V120Z"
                  fill="url(#waveGradientLight)"
                  opacity="0.75"
                />
                <path
                  d="M0 145C90 135 150 185 250 165C350 145 420 190 500 185V200H0V145Z"
                  fill="url(#waveGradientMain)"
                />
                <defs>
                  <linearGradient id="waveGradientLight" x1="0" y1="110" x2="500" y2="200" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2196F3" stopOpacity="0.45" />
                    <stop offset="1" stopColor="#42a5f5" stopOpacity="0.1" />
                  </linearGradient>
                  <linearGradient id="waveGradientMain" x1="0" y1="135" x2="500" y2="200" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0088FF" />
                    <stop offset="1" stopColor="#2196F3" />
                  </linearGradient>
                </defs>
              </svg>
            </div> */}

            {/* Bottom-right 5x4 dot matrix */}
            <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 grid grid-cols-5 gap-2.5 pointer-events-none z-10 hidden sm:grid">
              {Array.from({ length: 15 }).map((_, i) => (
                <span key={`blue-${i}`} className="w-2 h-2 rounded-full bg-[#2196F3]" />
              ))}
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={`lime-${i}`} className="w-2 h-2 rounded-full bg-[#bcd32e]" />
              ))}
            </div>

            {/* Main Hero Content */}
            <div className="relative z-20 max-w-3xl mx-auto">

              {/* Badge */}
              <div className="portfolio-hero-badge inline-flex items-center justify-center mb-6">
                <Sparkles className="w-4 h-4 text-[#2196F3]" />
                <span className="text-[11px] sm:text-xs font-extrabold tracking-wider text-[#0b132b] uppercase">
                  {HERO_BANNER_DATA.badge}
                </span>
              </div>

              {/* Headline Title */}
              <h1 className="portfolio-hero-title text-3xl sm:text-5xl lg:text-6xl font-black mb-5">
                {HERO_BANNER_DATA.titlePrefix}
                <span className="portfolio-hero-title-span">
                  {HERO_BANNER_DATA.titleHighlight}
                </span>
                {HERO_BANNER_DATA.titleSuffix}
              </h1>

              {/* Decorative Line & Dot Divider */}
              <div className="portfolio-hero-divider mb-6">
                <div className="portfolio-hero-divider-line-left" />
                <div className="portfolio-hero-divider-dot" />
                <div className="portfolio-hero-divider-line-right" />
              </div>

              {/* Subtitle */}
              <p className="portfolio-hero-subtitle text-sm sm:text-base lg:text-lg font-medium max-w-2xl mx-auto mb-10">
                {HERO_BANNER_DATA.subtitle}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
                <a
                  href={HERO_BANNER_DATA.primaryBtnLink}
                  className="portfolio-hero-btn-primary w-full sm:w-auto font-bold text-sm sm:text-base px-8 py-4 inline-flex items-center justify-center gap-3 group"
                >
                  <Folder className="w-5 h-5 text-white" />
                  <span className="font-extrabold">{HERO_BANNER_DATA.primaryBtnText}</span>
                  <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href={HERO_BANNER_DATA.secondaryBtnLink}
                  className="portfolio-hero-btn-secondary w-full sm:w-auto font-bold text-sm sm:text-base px-8 py-4 inline-flex items-center justify-center gap-3 group"
                >
                  <LayoutGrid className="w-5 h-5 text-[#2196F3]" />
                  <span className="font-extrabold">{HERO_BANNER_DATA.secondaryBtnText}</span>
                  <ArrowRight className="w-4 h-4 text-[#2196F3] transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── OUR PORTFOLIO SECTION (MATCHING DESIGN) ── */}
        <div className="reveal-on-scroll mb-20">
          {/* Header area */}
          <div className="flex justify-between items-start mb-8 relative">
            <div>
              <h2 className="text-3xl sm:text-5xl font-black !text-[#0b132b] tracking-tight leading-tight">
                Our <span className="text-[#2196F3]">Portfolio</span>
              </h2>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="w-12 h-1 bg-[#2196F3] rounded-full" />
                <span className="w-3 h-1 bg-[#bcd32e] rounded-full" />
              </div>
            </div>

            {/* Top right decorative overlapping circles */}
            <div className="relative w-20 h-20 hidden sm:block pointer-events-none">
              <span className="absolute top-0 right-0 w-16 h-16 rounded-full bg-[#bcd32e] opacity-85" />
              <span className="absolute bottom-0 left-0 w-14 h-14 rounded-full bg-[#0088FF] opacity-90 backdrop-blur-xs" />
            </div>
          </div>

          {/* Category Filter Pills Grid */}
          <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-10">
            {OUR_PORTFOLIO_CATEGORIES.map((cat) => {
              const IconComponent = ICON_MAP[cat.icon] || LayoutGrid
              const isActive = activeOurCategory === cat.id

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveOurCategory(cat.id)
                    setShowAllCards(false)
                  }}
                  className={`our-portfolio-pill ${
                    isActive ? 'our-portfolio-pill-active' : 'our-portfolio-pill-inactive'
                  }`}
                >
                  <IconComponent className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#bcd32e]'}`} />
                  <span>{cat.label}</span>
                </button>
              )
            })}
          </div>

          {/* Portfolio Items Grid (4 per row desktop => 8 desktop / 3 phone) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-4.5">
            {displayedOurCards.map((card) => {
              const cardImage = card.imageType === 'dyPatil' ? dyPatilImg : stockDaddyImg
              const isLime = card.accent === 'lime'

              return (
                <div
                  key={card.id}
                  className="our-portfolio-card p-3.5 sm:p-4 flex flex-col justify-between group cursor-pointer"
                >
                  {/* Top Right Tag */}
                  <div className="flex justify-end mb-1.5">
                    <span
                      className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                        isLime
                          ? 'bg-[#bcd32e]/20 text-[#62720d]'
                          : 'bg-sky-100/80 text-[#2196F3]'
                      }`}
                    >
                      {card.categoryTag}
                    </span>
                  </div>

                  {/* Logo Center Display */}
                  <div className="flex items-center justify-center py-1 my-1 h-14 sm:h-16">
                    <img
                      src={cardImage}
                      alt={card.title}
                      className="max-h-10 sm:max-h-12 max-w-[80%] object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Bottom details */}
                  <div>
                    <h3 className="text-sm sm:text-base font-black !text-[#0b132b] mb-1.5 leading-snug">
                      {card.title}
                    </h3>

                    {/* Tag Pills */}
                    <div className="flex flex-wrap gap-1 mb-2.5">
                      {card.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className={`text-[9px] font-semibold px-2 py-0.5 rounded-full border ${
                            isLime
                              ? 'bg-[#bcd32e]/10 text-[#62720d] border-[#bcd32e]/30'
                              : 'bg-sky-50 text-[#2196F3] border-sky-100'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer Row with Bottom-Left Fluid Shape & Right Action Button */}
                    <div className="flex justify-between items-end pt-0.5 relative z-10">
                      {/* <div className="w-8 h-8 -ml-4 -mb-4 pointer-events-none">
                        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                          <path
                            d="M0 100C0 40 40 0 100 0V100H0Z"
                            fill={isLime ? '#bcd32e' : '#0088FF'}
                          />
                        </svg>
                      </div> */}

                      {/* <button
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-white font-bold shadow-2xs transition-all duration-300 group-hover:scale-110 ${
                          isLime ? 'bg-[#bcd32e] hover:bg-[#a6bb24]' : 'bg-[#0088FF] hover:bg-[#0077e6]'
                        }`}
                      >
                        <ArrowRight className="w-3 h-3 text-white" />
                      </button> */}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* View All / Show Less Button */}
          {filteredOurCards.length > initialLimit && (
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setShowAllCards(!showAllCards)}
                className="px-8 py-3.5 rounded-full bg-[#2196F3] hover:bg-[#1976D2] text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-2.5 cursor-pointer"
              >
                <span>{showAllCards ? 'Show Less' : `View All Projects (${filteredOurCards.length})`}</span>
                <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${showAllCards ? '-rotate-90' : 'rotate-90'}`} />
              </button>
            </div>
          )}
        </div>

        {/* ── CLIENTS SECTION (UNDER OUR PORTFOLIO) ── */}
        <div className="reveal-on-scroll mb-16">
          <ClientsSection />
        </div>

        {/* ── WHAT OUR CLIENTS SAY (TESTIMONIALS SECTION) ── */}
        <div className="reveal-on-scroll relative py-12 sm:py-16 mb-20 overflow-hidden rounded-3xl bg-gradient-to-b from-white/80 via-white to-sky-50/50 border border-slate-100/80 shadow-sm">
          {/* Top-Right Green Corner Background Decorative Shape */}
          <div className="absolute -top-12 -right-12 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-[#bcd32e] opacity-85 pointer-events-none z-0" />

          {/* Bottom-Left Blue Layered Waves Decorative Shape */}
          <div className="absolute -bottom-10 -left-10 w-56 h-56 sm:w-72 sm:h-72 pointer-events-none z-0">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-90">
              <circle cx="20" cy="180" r="120" fill="#2196F3" opacity="0.3" />
              <circle cx="10" cy="190" r="90" fill="#2196F3" opacity="0.6" />
              <circle cx="0" cy="200" r="60" fill="#0088FF" opacity="0.9" />
            </svg>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
            {/* Header Block */}
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
              {/* Top Badge with Side Lines */}
              <div className="inline-flex items-center gap-3 mb-3">
                <span className="w-6 h-[2.5px] rounded-full bg-[#2196F3]" />
                <span className="text-[#2196F3] font-bold text-xs sm:text-sm tracking-widest uppercase">
                  {TESTIMONIALS_SECTION_DATA.badge}
                </span>
                <span className="w-6 h-[2.5px] rounded-full bg-[#bcd32e]" />
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black !text-[#0b132b] mb-4 tracking-tight leading-tight">
                {TESTIMONIALS_SECTION_DATA.title}
              </h2>

              {/* Subtitle Lines */}
              <p className="text-[#475569] text-sm sm:text-base font-medium leading-relaxed">
                {TESTIMONIALS_SECTION_DATA.subtitleLine1}
                <br />
                {TESTIMONIALS_SECTION_DATA.subtitleLine2}
              </p>

              {/* Small Dual-Color Center Bar */}
              <div className="flex items-center justify-center gap-1 mt-5">
                <span className="w-8 h-1 rounded-full bg-[#2196F3]" />
                <span className="w-8 h-1 rounded-full bg-[#bcd32e]" />
              </div>
            </div>

            {/* Testimonials Grid Wrapper with Navigation Arrows */}
            <div className="relative px-2 sm:px-10">
              {/* Left Navigation Arrow Button */}
              <button
                onClick={handlePrevTestimonial}
                className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-lg text-[#0b132b] hover:bg-[#2196F3] hover:text-white hover:border-[#2196F3] transition-all duration-300 flex items-center justify-center z-20 cursor-pointer group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-200" />
              </button>

              {/* Right Navigation Arrow Button */}
              <button
                onClick={handleNextTestimonial}
                className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-lg text-[#0b132b] hover:bg-[#2196F3] hover:text-white hover:border-[#2196F3] transition-all duration-300 flex items-center justify-center z-20 cursor-pointer group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>

              {/* Testimonials 3-Card Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 min-h-[320px]">
                {visibleTestimonials.map((item) => {
                  const isLime = item.accent === 'lime'

                  return (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100/90 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                    >
                      {/* Top Quote Icon */}
                      <div>
                        <div className="mb-2">
                          <span
                            className={`font-serif text-5xl sm:text-6xl font-bold leading-none select-none block ${
                              isLime ? 'text-[#bcd32e]' : 'text-[#2196F3]'
                            }`}
                          >
                            “
                          </span>
                        </div>

                        {/* Quote Text */}
                        <p className="text-[#334155] text-sm sm:text-[15px] font-medium leading-relaxed mb-6">
                          {item.quote}
                        </p>
                      </div>

                      {/* Footer Author Row */}
                      <div>
                        {/* Light Divider */}
                        <div className="w-full h-[1px] bg-slate-100 mb-5" />

                        <div className="flex items-center gap-3.5">
                          <img
                            src={item.avatar}
                            alt={item.author}
                            className={`w-12 h-12 rounded-full object-cover border-2 shadow-xs ${
                              isLime
                                ? 'border-[#bcd32e]/40 bg-[#bcd32e]/10'
                                : 'border-sky-200 bg-sky-50'
                            }`}
                          />
                          <div>
                            <h4 className="text-sm sm:text-base font-bold !text-[#0b132b] leading-tight">
                              {item.author}
                            </h4>
                            <p className="text-xs font-semibold text-[#64748b] mt-0.5">
                              {item.role}
                            </p>
                            <p
                              className={`text-xs font-bold mt-0.5 ${
                                isLime ? 'text-[#62720d]' : 'text-[#2196F3]'
                              }`}
                            >
                              {item.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Interactive Navigation Dots */}
            <div className="flex items-center justify-center gap-2 mt-10">
              {Array.from({ length: totalTestimonialPages }).map((_, idx) => {
                const isActive = currentTestimonialIndex === idx
                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonialIndex(idx)}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      isActive
                        ? 'w-8 h-2.5 bg-[#2196F3]'
                        : 'w-2.5 h-2.5 bg-slate-300 hover:bg-[#bcd32e]'
                    }`}
                    aria-label={`Go to testimonial page ${idx + 1}`}
                  />
                )
              })}
            </div>
          </div>
        </div>

        {/* ── ORIGINAL HERO SECTION (COMMENTED OUT AS REQUESTED) ── */}
        {/*
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="reveal-scale inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2196F3]/10 border border-[#2196F3]/30 text-primary font-bold text-xs uppercase tracking-wider mb-6 shadow-xs">
            <Sparkles className="w-4 h-4 text-primary animate-spin-slow" />
            <span>OUR PORTFOLIO & CASE STUDIES</span>
          </div>

          <h1 className="reveal-on-scroll text-3xl sm:text-5xl lg:text-6xl font-black !text-[#0a0a0a] leading-[1.12] tracking-tight mb-6">
            Transforming Vision Into{' '}
            <span className="bg-gradient-to-r from-[#2196F3] via-[#42a5f5] to-[#2196F3] bg-clip-text text-transparent animate-text-shimmer">
              Digital Excellence & ROI.
            </span>
          </h1>

          <p className="reveal-on-scroll reveal-delay-1 text-[#444444] text-base sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
            Explore our curated showcase of successful web applications, AI automation agents, SEO scale-ups, and brand identities engineered for global leaders.
          </p>

          <div className="reveal-on-scroll reveal-delay-2 grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/90 backdrop-blur-md border border-[#2196F3]/20 shadow-[0_15px_40px_rgba(33,150,243,0.08)] rounded-2xl p-4 sm:p-6 hover:border-[#2196F3]/40 transition-all duration-300">
            {PORTFOLIO_STATS.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center p-2 border-r last:border-r-0 border-zinc-200"
              >
                <span
                  className={`text-2xl sm:text-4xl font-black mb-1 ${stat.highlight ? 'text-primary' : '!text-[#0a0a0a]'
                    }`}
                >
                  {stat.prefix || ''}
                  <CountUp end={stat.end} decimals={stat.decimals || 0} suffix={stat.suffix} />
                </span>
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        */}

        {/* ── SPOTLIGHT FEATURED CASE STUDY (COMMENTED OUT AS REQUESTED) ── */}
        {/*
        {flagshipProject && (
          <div id="case-studies" className="reveal-on-scroll mb-20">
            <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#2196F3]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 flex flex-col">
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <span className="bg-primary/20 text-sky-400 border border-sky-400/30 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 fill-sky-400 text-sky-400" /> FEATURED FLAGSHIP CASE STUDY
                    </span>
                    <span className="text-xs font-bold text-zinc-400">
                      {flagshipProject.industry} • {flagshipProject.year}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-black text-white mb-4 leading-tight">
                    {flagshipProject.title}
                  </h2>

                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                    {flagshipProject.summary}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                    {flagshipProject.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="bg-white/5 border border-white/10 rounded-xl p-3 text-center"
                      >
                        <span className="block text-xl font-black text-sky-400">
                          {m.value}
                        </span>
                        <span className="block text-[11px] font-semibold text-zinc-400 mt-0.5">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {flagshipProject.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold bg-white/10 text-zinc-200 px-3 py-1 rounded-md border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => setSelectedProject(flagshipProject)}
                      className="bg-primary hover:bg-white text-white hover:text-black font-bold text-sm px-6 py-3.5 rounded-full transition-all duration-300 shadow-lg inline-flex items-center gap-2 cursor-pointer"
                    >
                      <Eye className="w-4 h-4" /> View Full Case Study
                    </button>
                    <a
                      href="#proposal"
                      className="border border-white/20 hover:border-sky-400 text-zinc-300 hover:text-white font-bold text-sm px-6 py-3.5 rounded-full transition-all duration-300 inline-flex items-center gap-2"
                    >
                      Request Similar Solution <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div
                    onClick={() => setSelectedProject(flagshipProject)}
                    className="cursor-pointer rounded-2xl overflow-hidden shadow-2xl border border-white/20 group"
                  >
                    <ProjectGraphicPreview
                      type={flagshipProject.previewSvgType}
                      gradient={flagshipProject.gradient}
                      title={flagshipProject.title}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        */}

        {/* ── FILTER, SEARCH TOOLBAR & PORTFOLIO GRID (COMMENTED OUT AS REQUESTED) ── */}
        {/*
        <div id="portfolio-grid" className="reveal-on-scroll mb-12">
          <div className="bg-white/80 backdrop-blur-md border border-zinc-200 shadow-md rounded-2xl p-4 sm:p-6 flex flex-col md:flex-row justify-between items-center gap-4">

            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              <Filter className="w-4 h-4 text-primary shrink-0 mr-1 hidden sm:inline" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs sm:text-sm font-bold px-4 py-2 rounded-xl whitespace-nowrap transition-all duration-200 cursor-pointer ${activeCategory === cat
                      ? 'bg-primary text-white shadow-md shadow-primary/25'
                      : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72 shrink-0">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects or tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-50 border border-zinc-200 focus:border-primary focus:bg-white rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm font-medium text-black outline-none transition-all duration-200"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-black cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          <div className="mt-3 flex justify-between items-center px-2 text-xs font-semibold text-zinc-500">
            <span>
              Showing <strong className="text-black">{filteredProjects.length}</strong> of{' '}
              {PORTFOLIO_PROJECTS.length} case studies
            </span>
            {activeCategory !== 'All' && (
              <button
                onClick={() => {
                  setActiveCategory('All')
                  setSearchQuery('')
                }}
                className="text-primary hover:underline cursor-pointer"
              >
                Reset filters
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="reveal-on-scroll bg-white border border-zinc-200 hover:border-primary/50 shadow-sm hover:shadow-2xl rounded-3xl overflow-hidden transition-all duration-300 flex flex-col group"
            >
              <div
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer relative overflow-hidden"
              >
                <ProjectGraphicPreview
                  type={project.previewSvgType}
                  gradient={project.gradient}
                  title={project.title}
                />
                <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white border border-white/20 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider z-20">
                  {project.categoryLabel}
                </span>
              </div>

              <div className="p-6 flex flex-col grow justify-between">
                <div>
                  <div className="flex justify-between items-center text-xs font-bold text-zinc-400 mb-2">
                    <span>{project.client}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-xl font-black !text-[#0a0a0a] hover:text-primary transition-colors cursor-pointer mb-3 leading-snug"
                  >
                    {project.title}
                  </h3>

                  <p className="text-zinc-600 text-xs sm:text-sm font-medium leading-relaxed mb-6 line-clamp-3">
                    {project.summary}
                  </p>

                  <div className="grid grid-cols-3 gap-2 bg-zinc-50 border border-zinc-200/80 rounded-xl p-2.5 mb-6">
                    {project.metrics.slice(0, 3).map((m, i) => (
                      <div key={i} className="text-center">
                        <span className="block text-xs sm:text-sm font-black text-primary">
                          {m.value}
                        </span>
                        <span className="block text-[9px] font-bold text-zinc-500 truncate">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-semibold bg-zinc-100 text-zinc-700 px-2.5 py-0.5 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-[11px] font-bold text-zinc-400 py-0.5">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full bg-zinc-900 hover:bg-primary text-white font-bold text-xs sm:text-sm py-3 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  View Detailed Case Study <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        */}

        {/* ── CLIENT TESTIMONIAL QUOTE BAND (COMMENTED OUT AS REQUESTED) ── */}
        {/*
        <div className="reveal-on-scroll bg-gradient-to-r from-zinc-900 via-black to-zinc-900 text-white rounded-3xl p-8 sm:p-12 mb-24 relative overflow-hidden shadow-2xl">
          <Quote className="w-20 h-20 text-white/5 absolute top-6 right-8 pointer-events-none" />
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <div className="flex justify-center gap-1 text-amber-400 mb-4">
              {[...Array(PORTFOLIO_FEATURED_QUOTE.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-lg sm:text-2xl font-semibold italic leading-relaxed text-zinc-200 mb-6">
              “{PORTFOLIO_FEATURED_QUOTE.quote}”
            </p>
            <div className="flex flex-col items-center">
              <span className="font-extrabold text-white text-base">{PORTFOLIO_FEATURED_QUOTE.author}</span>
              <span className="text-xs text-sky-400 font-semibold mt-0.5">{PORTFOLIO_FEATURED_QUOTE.role}</span>
            </div>
          </div>
        </div>
        */}

        {/* ── CTA SECTION ── */}
        <CTASection />

      </div>

      {/* ── INTERACTIVE PROJECT DETAIL MODAL DIALOG ── */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-fade-in">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-zinc-200 flex flex-col relative animate-scale-up">

            {/* Modal Header */}
            <div className={`p-6 sm:p-8 bg-gradient-to-r ${selectedProject.gradient} text-white relative flex flex-col justify-between min-h-[180px]`}>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 bg-black/40 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-md transition-colors cursor-pointer z-30"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative z-10">
                <span className="bg-white/20 text-white border border-white/30 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
                  {selectedProject.categoryLabel} • {selectedProject.industry}
                </span>
                <h2 className="text-2xl sm:text-4xl font-black">{selectedProject.title}</h2>
                <span className="text-sm font-semibold text-white/80 mt-1 block">
                  Client: {selectedProject.client} ({selectedProject.year})
                </span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-8">
              {/* Metrics Grid */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-primary mb-3">
                  Key Quantifiable Results
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {selectedProject.metrics.map((m, i) => (
                    <div
                      key={i}
                      className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4 text-center shadow-xs"
                    >
                      <span className="block text-2xl font-black text-primary">
                        {m.value}
                      </span>
                      <span className="block text-xs font-bold text-zinc-600 mt-1">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-50/50 border border-red-100 rounded-2xl p-5">
                  <h4 className="text-sm font-black text-red-900 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500" /> The Challenge
                  </h4>
                  <p className="text-zinc-700 text-sm leading-relaxed font-medium">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-5">
                  <h4 className="text-sm font-black text-emerald-900 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" /> Our Solution & Strategy
                  </h4>
                  <p className="text-zinc-700 text-sm leading-relaxed font-medium">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-zinc-500 mb-3">
                  Technologies & Frameworks Deployed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-zinc-100 border border-zinc-300 text-zinc-800 text-xs font-extrabold px-3 py-1.5 rounded-lg shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Client Review */}
              {selectedProject.testimonial && (
                <div className="bg-zinc-900 text-white rounded-2xl p-6 relative">
                  <Quote className="w-8 h-8 text-primary/30 absolute top-4 right-4" />
                  <p className="italic text-sm sm:text-base text-zinc-200 mb-3">
                    “{selectedProject.testimonial.quote}”
                  </p>
                  <div className="text-xs font-bold">
                    <span className="text-white block">{selectedProject.testimonial.author}</span>
                    <span className="text-sky-400 block">{selectedProject.testimonial.role}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer CTAs */}
            <div className="p-6 bg-zinc-50 border-t border-zinc-200 flex flex-wrap justify-between items-center gap-4 rounded-b-3xl">
              <span className="text-xs font-bold text-zinc-500">
                Want similar growth metrics for your business?
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-xs font-bold text-zinc-600 hover:text-black px-4 py-2 cursor-pointer"
                >
                  Close
                </button>
                <a
                  href="#proposal"
                  onClick={() => setSelectedProject(null)}
                  className="bg-primary hover:bg-black !text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full transition-all duration-200 shadow-md inline-flex items-center gap-2"
                >
                  Get Free Proposal <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  )
}
