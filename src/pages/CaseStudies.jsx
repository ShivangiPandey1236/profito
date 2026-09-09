import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Code2, ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'
import {
  CASE_STUDIES_HERO_DATA,
  CASE_STUDIES_CATEGORIES,
  CASE_STUDIES_LIST,
  TESTIMONIALS_SECTION_DATA
} from '../data/caseStudiesData'
import CTASection from '../components/CTASection'

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [isMobile, setIsMobile] = useState(false)
  const navigate = useNavigate()

  // Track responsive mobile state for testimonials
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Testimonials Carousel & Pagination Logic
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)
  const testimonialsPerPage = isMobile ? 1 : 3
  const totalTestimonialPages = Math.ceil(
    TESTIMONIALS_SECTION_DATA.items.length / testimonialsPerPage
  )

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

  // Filter case studies by active category
  const filteredCaseStudies = CASE_STUDIES_LIST.filter((item) => {
    if (activeCategory === 'All') return true
    return item.category === activeCategory
  })

  return (
    <div className="pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto min-h-screen text-black">
      {/* ── CASE STUDIES HERO BANNER ── */}
      <div className="mb-14 sm:mb-16">
        <div className="portfolio-hero-banner relative p-8 sm:p-14 lg:p-16 text-center overflow-hidden z-10">

          {/* Top-left 3x3 dot matrix grid */}
          <div className="absolute top-8 left-8 sm:top-10 sm:left-12 grid grid-cols-3 gap-2.5 pointer-events-none z-20 hidden sm:grid">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2196F3]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#2196F3]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#bcd32e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#2196F3]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#2196F3]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#bcd32e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#2196F3]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#2196F3]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#bcd32e]" />
          </div>

          {/* Top-right overlapping circles and diagonal hatch lines graphic */}
          <div className="absolute -top-4 -right-4 pointer-events-none z-10 hidden md:block">
            <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
              {Array.from({ length: 14 }).map((_, i) => (
                <line
                  key={i}
                  x1={100 + i * 10}
                  y1="0"
                  x2={30 + i * 10}
                  y2="180"
                  stroke="#2196F3"
                  strokeWidth="1"
                  opacity="0.2"
                />
              ))}
              <circle cx="130" cy="70" r="50" stroke="#bcd32e" strokeWidth="1.8" fill="none" opacity="0.9" />
              <circle cx="170" cy="110" r="35" stroke="#2196F3" strokeWidth="1.8" fill="none" opacity="0.9" />
            </svg>
          </div>

          {/* Bottom-right 3x3 dot matrix grid */}
          <div className="absolute bottom-8 right-8 sm:bottom-10 sm:right-12 grid grid-cols-3 gap-2.5 pointer-events-none z-20 hidden sm:grid">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2196F3]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#2196F3]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#bcd32e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#2196F3]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#2196F3]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#bcd32e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#2196F3]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#2196F3]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#bcd32e]" />
          </div>

          {/* Left ambient soft blue background glow */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-12 w-64 h-64 rounded-full bg-gradient-to-tr from-[#2196F3]/15 via-[#42a5f5]/10 to-transparent blur-3xl pointer-events-none" />

          {/* Main Hero Content Area */}
          <div className="relative z-20 max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-white border border-[#2196F3]/30 shadow-[0_4px_14px_rgba(33,150,243,0.08)] mb-6 transition-all duration-300 hover:border-[#bcd32e] hover:shadow-[0_6px_20px_rgba(188,211,46,0.25)] hover:-translate-y-0.5">
              <Code2 className="w-4 h-4 text-[#2196F3]" />
              <span className="text-[11px] sm:text-xs font-bold tracking-wider text-[#0b132b] uppercase">
                {CASE_STUDIES_HERO_DATA.badgeText}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-5 tracking-tight leading-tight">
              <span className="text-[#2196F3] inline-block mr-3">
                {CASE_STUDIES_HERO_DATA.titleHighlight}
              </span>
              <span className="text-[#0b132b]">
                {CASE_STUDIES_HERO_DATA.titleSuffix}
              </span>
            </h1>

            <div className="flex items-center justify-center gap-2.5 mb-6">
              <div className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-transparent via-[#2196F3]/50 to-[#2196F3] rounded-full" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#2196F3] shadow-[0_0_8px_rgba(33,150,243,0.5)]" />
              <div className="w-16 sm:w-24 h-[2px] bg-gradient-to-l from-transparent via-[#2196F3]/50 to-[#2196F3] rounded-full" />
            </div>

            <p className="text-sm sm:text-base lg:text-lg font-medium text-[#475569] max-w-2xl mx-auto leading-relaxed">
              {CASE_STUDIES_HERO_DATA.subtitle}
            </p>
          </div>

        </div>
      </div>

      {/* ── CATEGORY FILTER PILLS ── */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
        {CASE_STUDIES_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id

          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-[#bcd32e] text-[#0b132b] shadow-md border border-[#bcd32e]'
                  : 'bg-white text-zinc-700 border border-slate-200/90 shadow-xs hover:border-[#2196F3]/60 hover:text-[#2196F3] hover:shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          )
        })}
      </div>

      {/* ── 4-COLUMN CASE STUDIES GRID ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 mb-16">
        {filteredCaseStudies.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/case-studies/${item.id}`)}
            className="bg-white rounded-2xl p-4 border border-slate-100/90 shadow-[0_8px_25px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
          >
            {/* Top Image Container */}
            <div className="w-full h-44 sm:h-48 rounded-xl overflow-hidden bg-slate-900 relative mb-3.5 border border-slate-100 flex items-center justify-center p-2">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Middle Content */}
            <div>
              <h3 className="text-sm sm:text-base font-extrabold text-[#2196F3] group-hover:text-[#1976D2] transition-colors leading-snug mb-1 truncate">
                {item.title}
              </h3>
              <p className="text-[11px] font-medium text-slate-500 leading-snug mb-4 line-clamp-2 min-h-[32px]">
                {item.subtitle}
              </p>
            </div>

            {/* Bottom Footer Row: View Case Study button + Circle Arrow */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <span className="border border-slate-200 group-hover:border-[#2196F3] group-hover:bg-[#2196F3]/5 text-[#2196F3] text-[11px] font-extrabold px-3.5 py-1.5 rounded-full transition-all duration-200">
                View Case Study
              </span>

              <div className="w-7 h-7 rounded-full bg-[#bcd32e] text-[#0b132b] flex items-center justify-center font-bold text-xs shadow-xs group-hover:scale-110 transition-transform">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── BOTTOM CTA BANNER ── */}
      <div className="max-w-3xl mx-auto my-14">
        <div className="bg-gradient-to-r from-[#2196F3] via-[#0088FF] to-[#bcd32e] rounded-full p-3.5 sm:p-4.5 px-6 sm:px-8 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-white transition-all duration-300 hover:shadow-2xl">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-black leading-tight">
                Want Similar Results?
              </h4>
              <p className="text-xs font-semibold text-white/90">
                Let's build your success story together.
              </p>
            </div>
          </div>

          <Link
            to="/get-a-quote"
            className="w-8 h-8 rounded-full bg-white text-[#0b132b] flex items-center justify-center font-bold shadow-md hover:scale-110 transition-transform shrink-0"
            aria-label="Get a proposal"
          >
            <ArrowRight className="w-4 h-4 text-[#0b132b]" />
          </Link>
        </div>
      </div>

      {/* ── FULL WIDTH CTA SECTION ── */}
      <div className="w-full mt-16 sm:mt-24 overflow-hidden">
        <CTASection />
      </div>

      {/* ── WHAT OUR CLIENTS SAY (TESTIMONIALS SECTION) ── */}
      <div className="relative py-12 sm:py-16 mt-16 sm:mt-24 mb-12 overflow-hidden rounded-3xl bg-gradient-to-b from-white/80 via-white to-sky-50/50 border border-slate-100/80 shadow-sm">
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
    </div>
  )
}
