import React from 'react'
import { Link } from 'react-router-dom'
import {
  Home,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Palette,
  Code,
  Monitor,
  Smartphone,
  ShieldCheck,
  Star,
  UserCheck,
  BookOpen,
  ShoppingCart,
  Globe,
  Stethoscope,
  Target,
  Layout,
  Settings,
  Wand2,
  MousePointerClick,
  TrendingUp
} from 'lucide-react'
import { WEBSITE_DESIGN_HERO_DATA } from '../data/websiteDesignData'
import websiteDesigningImg from '../assets/website-designing.png'
import elephantImg from '../assets/elephant(1).png'
import dentalImg from '../assets/dental.png'

export default function WebsiteDesign() {
  return (
    <div className="pt-[106px] max-[576px]:pt-[70px]">

      {/* ─── HERO SECTION ─────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 pt-10 pb-16 max-w-[1600px] mx-auto">

        {/* Portfolio-style hero banner */}
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

          {/* Bottom-right 5x4 dot matrix */}
          <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 grid grid-cols-5 gap-2.5 pointer-events-none z-10 hidden sm:grid">
            {Array.from({ length: 15 }).map((_, i) => (
              <span key={`blue-${i}`} className="w-2 h-2 rounded-full bg-[#2196F3]" />
            ))}
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={`lime-${i}`} className="w-2 h-2 rounded-full bg-[#bcd32e]" />
            ))}
          </div>

          {/* Breadcrumb — left aligned, above main content */}
          <nav
            aria-label="Breadcrumb"
            className="relative z-20 flex items-center gap-1.5 text-[0.82rem] font-medium text-slate-500 mb-8 justify-start"
          >
            <Link
              to="/"
              className="flex items-center gap-1 text-slate-500 hover:text-primary transition-colors duration-150"
            >
              <Home size={13} strokeWidth={2} />
              <span>Home</span>
            </Link>
            <ChevronRight size={13} strokeWidth={2} className="text-slate-400" />
            <span className="text-slate-600 font-semibold">Website Designing Services India</span>
          </nav>

          {/* Main Hero Content */}
          <div className="relative z-20 max-w-3xl mx-auto">

            {/* Badge */}
            <div className="portfolio-hero-badge inline-flex items-center justify-center mb-6">
              <Sparkles className="w-4 h-4 text-[#2196F3]" />
              <span className="text-[11px] sm:text-xs font-extrabold tracking-wider text-[#0b132b] uppercase">
                {WEBSITE_DESIGN_HERO_DATA.badge}
              </span>
            </div>

            {/* Headline Title */}
            <h1 className="portfolio-hero-title text-3xl sm:text-5xl lg:text-6xl font-black mb-5">
              {WEBSITE_DESIGN_HERO_DATA.titlePrefix}
              <span className="portfolio-hero-title-span">
                {WEBSITE_DESIGN_HERO_DATA.titleHighlight}
              </span>
              {WEBSITE_DESIGN_HERO_DATA.titleSuffix}
            </h1>

            {/* Decorative Line & Dot Divider */}
            <div className="portfolio-hero-divider mb-6">
              <div className="portfolio-hero-divider-line-left" />
              <div className="portfolio-hero-divider-dot" />
              <div className="portfolio-hero-divider-line-right" />
            </div>

            {/* Subtitle */}
            <p className="portfolio-hero-subtitle text-sm sm:text-base lg:text-lg font-medium max-w-2xl mx-auto mb-10">
              {WEBSITE_DESIGN_HERO_DATA.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
              <Link
                to="/portfolio"
                className="portfolio-hero-btn-primary w-full sm:w-auto font-bold text-sm sm:text-base px-8 py-4 inline-flex items-center justify-center gap-3 group"
              >
                <Palette className="w-5 h-5 text-white" />
                <span className="font-extrabold">View Our Portfolio</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact-us"
                className="portfolio-hero-btn-secondary w-full sm:w-auto font-bold text-sm sm:text-base px-8 py-4 inline-flex items-center justify-center gap-3 group"
              >
                <span className="font-extrabold">Let&rsquo;s Talk</span>
                <ArrowRight className="w-4 h-4 text-[#2196F3] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* ─── END HERO SECTION ─────────────────────────────────── */}

      {/* ─── WEB DESIGN COMPANY INDIA INTRO SECTION ───────────── */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 lg:py-16 max-w-[1600px] mx-auto relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column: Content Text */}
          <div className="lg:col-span-7 space-y-6">

            {/* Top Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eef5ff] border border-[#d0e3ff] text-[#2196F3] text-xs font-bold uppercase tracking-wider">
              <Code className="w-3.5 h-3.5 text-[#2196F3]" />
              <span>WEBSITE DESIGN & DEVELOPMENT</span>
            </div>

            {/* Section Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.65rem] font-black !text-[#0b132b] leading-tight">
              Web Design Company India -{' '}
              <span className="text-[#2196F3] block sm:inline mt-1 sm:mt-0">
                Improve Your Online Presence
              </span>
            </h2>

            {/* Decorative Dot & Line Accent */}
            <div className="flex items-center gap-2 py-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2196F3]" />
              <div className="h-[3px] w-20 bg-gradient-to-r from-[#2196F3] via-[#64b5f6] to-[#bcd32e] rounded-full" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#bcd32e]" />
            </div>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Profito is a leading full-stack web design company in India, consistently exploring innovative ideas.
                Our modern website design services have transformed many businesses, providing a fresh look. Our designers
                use tools, frameworks, and programming languages to create unique and appealing web designs that represent
                your company and brand.
              </p>
              <p>
                We help you establish your online brand. Through our professional web design services, we create amazing
                website designs that are visually appealing on any device. Profito, the best website design company in
                India, assists you in crafting a personalized web design that attracts more customers and boosts your
                conversions.
              </p>
              <p>
                On the internet, a website defines a company or brand. A sloppy design can lead to a poor user experience.
                So, it&rsquo;s important to invest in a professional website design that looks good and provides a great user
                experience. The design of a website is the first thing a visitor notices, and allowing a poor design to drive
                away potential customers is not ideal.
              </p>
              <p>
                Choose beautiful and strong design features for a website that looks good and works well. Begin today with
                Profito, the best website design company in India.
              </p>
            </div>

            {/* Bottom Feature Badges / Highlights */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-5 border-t border-slate-100">

              {/* Feature 1 */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#2196F3] flex items-center justify-center text-white shadow-md flex-shrink-0">
                  <Monitor className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold !text-slate-900 text-sm leading-tight">Custom Web</h4>
                  <p className="text-xs text-slate-500 font-medium">Design Solutions</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#bcd32e] flex items-center justify-center text-white shadow-md flex-shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold !text-slate-900 text-sm leading-tight">Responsive</h4>
                  <p className="text-xs text-slate-500 font-medium">& Mobile Friendly</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#2196F3] flex items-center justify-center text-white shadow-md flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold !text-slate-900 text-sm leading-tight">SEO Optimized</h4>
                  <p className="text-xs text-slate-500 font-medium">& Performance Focused</p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Visual Showcase Container */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0">

            {/* Background glowing gradient orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#2196F3]/20 via-[#42a5f5]/15 to-[#bcd32e]/20 blur-3xl pointer-events-none" />

            {/* Top-right overlapping circles graphic accent */}
            <div className="absolute -top-6 -right-2 pointer-events-none z-0 hidden sm:block">
              <svg width="160" height="160" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="120" cy="60" r="55" stroke="#bcd32e" strokeWidth="2" opacity="0.85" />
                <circle cx="95" cy="45" r="75" stroke="#bcd32e" strokeWidth="1" opacity="0.45" />
              </svg>
            </div>

            {/* Top-right diagonal hatching lines accent */}
            <div className="absolute -top-4 -right-6 w-36 h-48 pointer-events-none opacity-20 hidden md:block z-0">
              <svg width="140" height="200" viewBox="0 0 140 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {Array.from({ length: 12 }).map((_, i) => (
                  <line
                    key={i}
                    x1={-10 + i * 14}
                    y1="0"
                    x2={60 + i * 14}
                    y2="200"
                    stroke="#2196F3"
                    strokeWidth="1.5"
                  />
                ))}
              </svg>
            </div>

            {/* Floating Top-Right Code Badge */}
            <div className="absolute -top-3 right-2 sm:top-2 sm:right-4 z-20 w-11 h-11 rounded-xl bg-white shadow-lg border border-blue-100 flex items-center justify-center text-[#2196F3]">
              <Code className="w-5 h-5" />
            </div>

            {/* Laptop Image Wrapper */}
            <div className="relative z-10 w-full group">
              <img
                src={websiteDesigningImg}
                alt="Web Design Company India Showcase"
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              />

              {/* Floating Bottom-Left Custom Web Solutions Card */}
              <div className="absolute bottom-4 left-2 sm:bottom-6 sm:left-4 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-blue-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-[#2196F3] flex-shrink-0">
                  <Monitor className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-800 leading-tight">Custom</div>
                  <div className="text-xs font-extrabold text-[#2196F3] leading-tight">Web Solutions</div>
                </div>
              </div>

              {/* Bottom-Right Dot Grid Matrix */}
              <div className="absolute -bottom-5 -right-2 sm:-bottom-7 sm:-right-4 grid grid-cols-5 gap-2 pointer-events-none z-20">
                {Array.from({ length: 15 }).map((_, i) => (
                  <span key={`blue-dot-${i}`} className="w-2 h-2 rounded-full bg-[#2196F3]" />
                ))}
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={`lime-dot-${i}`} className="w-2 h-2 rounded-full bg-[#bcd32e]" />
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>
      {/* ─── END INTRO SECTION ────────────────────────────────── */}

      {/* ─── OUR IMPACT SECTION ─────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-[1600px] mx-auto relative">
        <div className="relative p-6 sm:p-10 lg:p-14 rounded-3xl sm:rounded-[36px] bg-gradient-to-b from-[#f4f8ff] via-[#ffffff] to-[#f4f8ff] border border-blue-100 shadow-md overflow-hidden">

          {/* Subtle background glow orbs */}
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#2196F3]/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#bcd32e]/15 blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="relative z-10 text-center max-w-4xl mx-auto mb-10">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#eef5ff] border border-[#bcd6ff] text-[#2196F3] text-xs font-extrabold uppercase tracking-wider mb-4 shadow-xs">
              <Star className="w-3.5 h-3.5 text-[#2196F3] fill-[#2196F3]/20" />
              <span className="!text-[#2196F3]">OUR IMPACT</span>
            </div>

            {/* Section Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black !text-[#0b132b] leading-tight mb-4">
              Serving In 32+ Countries For Web, Software And{' '}
              <span className="!text-[#2196F3] block sm:inline mt-1 sm:mt-0">
                Mobile App Development
              </span>
            </h2>

            {/* Centered Blue-Lime Hairline Divider */}
            <div className="flex justify-center items-center gap-1.5 my-4">
              <span className="h-[3px] w-14 bg-[#2196F3] rounded-full" />
              <span className="h-[3px] w-14 bg-[#bcd32e] rounded-full" />
            </div>

          </div>

          {/* 4 Impact Cards Grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">

            {/* Card 1: Ratings & Positive Client Feedback */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-[#2196F3]/50 transition-all duration-300 flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-[#eef5ff] border border-blue-100 flex items-center justify-center text-[#2196F3] flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <UserCheck className="w-6 h-6 text-[#2196F3]" />
              </div>
              <div className="w-[1px] h-12 bg-slate-200 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-bold !text-[#0f172a] leading-snug mb-1">
                  Ratings and Positive Client Feedback
                </p>
                <h3 className="text-2xl sm:text-3xl font-black !text-[#2196F3] leading-none">5-Star</h3>
              </div>
            </div>

            {/* Card 2: Website Design & Revamp */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-[#bcd32e]/80 transition-all duration-300 flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-[#f4f9d8] border border-lime-200/80 flex items-center justify-center text-[#658604] flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-6 h-6 text-[#658604]" />
              </div>
              <div className="w-[1px] h-12 bg-slate-200 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-bold !text-[#0f172a] leading-snug mb-1">
                  Website Design &amp; Revamp
                </p>
                <h3 className="text-2xl sm:text-3xl font-black !text-[#658604] leading-none">1500+</h3>
              </div>
            </div>

            {/* Card 3: Conversion after Website Redesign */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-[#2196F3]/50 transition-all duration-300 flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-[#eef5ff] border border-blue-100 flex items-center justify-center text-[#2196F3] flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <ShoppingCart className="w-6 h-6 text-[#2196F3]" />
              </div>
              <div className="w-[1px] h-12 bg-slate-200 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-bold !text-[#0f172a] leading-snug mb-1">
                  Conversion after Website Redesign
                </p>
                <h3 className="text-2xl sm:text-3xl font-black !text-[#2196F3] leading-none">180%+</h3>
              </div>
            </div>

            {/* Card 4: Technologies worked on */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-[#bcd32e]/80 transition-all duration-300 flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-full bg-[#f4f9d8] border border-lime-200/80 flex items-center justify-center text-[#658604] flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-6 h-6 text-[#658604]" />
              </div>
              <div className="w-[1px] h-12 bg-slate-200 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-bold !text-[#0f172a] leading-snug mb-1">
                  Technologies worked on
                </p>
                <h3 className="text-2xl sm:text-3xl font-black !text-[#658604] leading-none">20+</h3>
              </div>
            </div>

          </div>

        </div>
      </section>
      {/* ─── END OUR IMPACT SECTION ─────────────────────────────── */}

      {/* ─── FEATURED PROJECTS SECTION ───────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-[1600px] mx-auto relative">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#eef5ff] border border-[#bcd6ff] text-[#2196F3] text-xs font-extrabold uppercase tracking-wider mb-4 shadow-xs">
            <Star className="w-3.5 h-3.5 text-[#2196F3] fill-[#2196F3]/20" />
            <span className="!text-[#2196F3]">FEATURED PROJECTS</span>
          </div>

          {/* Headline Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black !text-[#0b132b] leading-tight mb-4">
            Featured <span className="!text-[#2196F3]">Projects</span>
          </h2>

          {/* Subtitle Description */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-4xl mx-auto mb-5">
            Website designing company in India &ndash; We&rsquo;ve designed customized website strategies throughout the years to create software applications that run on mobile devices such as smartphones and tablets to improve accessibility, engagement, revenue, efficiency, and brand building. So, here&rsquo;s we&rsquo;ve set the bar high and these are some of our featured web design Projects on which you can have a look:
          </p>

          {/* Centered Blue-Lime Hairline Divider */}
          <div className="flex justify-center items-center gap-1.5 my-4">
            <span className="h-[3px] w-14 bg-[#2196F3] rounded-full" />
            <span className="h-[3px] w-14 bg-[#bcd32e] rounded-full" />
          </div>

        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mt-8">

          {/* Card 1: Elephant */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group">
            <div>
              {/* Image Container Box (Identical Fixed Height) */}
              <div className="bg-gradient-to-b from-[#e8f3ff]/60 to-[#eef6ff] rounded-2xl p-4 sm:p-6 mb-6 flex items-center justify-center h-[280px] sm:h-[340px] md:h-[380px] w-full overflow-hidden">
                <img
                  src={elephantImg}
                  alt="Elephant Stickers Printing Showcase"
                  className="w-full h-full object-contain drop-shadow-md group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Title & Icon Header */}
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-[#f4f9d8] border border-lime-200/80 flex items-center justify-center text-[#658604] flex-shrink-0">
                  <Globe className="w-6 h-6 text-[#658604]" />
                </div>
                <div className="w-[3px] h-9 bg-[#bcd32e] rounded-full hidden sm:block" />
                <h3 className="text-xl sm:text-2xl font-black !text-[#0b132b]">
                  Elephant
                </h3>
              </div>

              {/* Description Paragraph */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Meraki group has been a conglomerate in the fields of Real Estate Sector, Sport Services &amp; Food / Beverages. Our mission is to lead in all the sectors we are in and to service the UAE
              </p>
            </div>

            {/* View Project Button */}
            <div>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#009bf2] hover:bg-[#0086d4] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 group/btn"
              >
                <span>View Project</span>
                <ArrowRight className="w-4 h-4 text-white group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Card 2: Dental Works Clinic */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group">
            <div>
              {/* Image Container Box (Identical Fixed Height) */}
              <div className="bg-gradient-to-b from-[#f4f9eb]/60 to-[#f6faf0] rounded-2xl p-4 sm:p-6 mb-6 flex items-center justify-center h-[280px] sm:h-[340px] md:h-[380px] w-full overflow-hidden">
                <img
                  src={dentalImg}
                  alt="Dental Works Clinic Showcase"
                  className="w-full h-full object-contain drop-shadow-md group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Title & Icon Header */}
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-[#f4f9d8] border border-lime-200/80 flex items-center justify-center text-[#658604] flex-shrink-0">
                  <Stethoscope className="w-6 h-6 text-[#658604]" />
                </div>
                <div className="w-[3px] h-9 bg-[#bcd32e] rounded-full hidden sm:block" />
                <h3 className="text-xl sm:text-2xl font-black !text-[#0b132b]">
                  Dental Works Clinic
                </h3>
              </div>

              {/* Description Paragraph */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Meraki group has been a conglomerate in the fields of Real Estate Sector, Sport Services &amp; Food / Beverages. Our mission is to lead in all the sectors we are in and to service the UAE
              </p>
            </div>

            {/* View Project Button */}
            <div>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#009bf2] hover:bg-[#0086d4] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 group/btn"
              >
                <span>View Project</span>
                <ArrowRight className="w-4 h-4 text-white group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

      </section>
      {/* ─── END FEATURED PROJECTS SECTION ───────────────────────── */}

      {/* ─── OUR PROCESS SECTION ─────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-[1600px] mx-auto relative">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#eef5ff] border border-[#bcd6ff] text-[#2196F3] text-xs font-extrabold uppercase tracking-wider mb-4 shadow-xs">
            <Star className="w-3.5 h-3.5 text-[#2196F3] fill-[#2196F3]/20" />
            <span className="!text-[#2196F3]">OUR PROCESS</span>
          </div>

          {/* Headline Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black !text-[#0b132b] leading-tight mb-4">
            Our Website <span className="!text-[#2196F3]">Designing Process</span>
          </h2>

          {/* Subtitle Description */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-4xl mx-auto mb-5 text-center">
            We help our clients acquire cutting-edge website designs. As the top website design company India, we prioritize understanding user behaviors to enhance online experiences. Our approach is simple, focused on user preferences. Look at our web design process.
          </p>

          {/* Centered Blue-Lime Hairline Divider */}
          <div className="flex justify-center items-center gap-1.5 my-4">
            <span className="h-[3px] w-14 bg-[#2196F3] rounded-full" />
            <span className="h-[3px] w-14 bg-[#bcd32e] rounded-full" />
          </div>

        </div>

        {/* 4 Process Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-8">

          {/* Card 01: Clients Objective */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-[#2196F3]/50 transition-all duration-300 relative flex flex-col items-center group h-full">
            {/* Step Number Circle Badge */}
            <div className="absolute top-5 left-5 w-7 h-7 rounded-full bg-[#2196F3] text-white font-black text-xs flex items-center justify-center shadow-xs">
              01
            </div>

            {/* Icon Container */}
            <div className="w-24 h-24 rounded-full bg-[#eef5ff] border border-blue-100 flex items-center justify-center text-[#2196F3] mt-3 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xs">
              <Target className="w-10 h-10 text-[#2196F3]" />
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-black !text-[#0b132b] text-center mb-2">
              Clients Objective
            </h3>

            {/* Accent Hairline Line */}
            <div className="h-[2px] w-10 bg-gradient-to-r from-[#2196F3] to-[#bcd32e] rounded-full mb-3" />

            {/* Description Paragraph */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-center">
              We start by understanding your website redesign expectations and objective. Our professional web designers work with you to create an attractive design that matches your business goals and modern practices.
            </p>
          </div>

          {/* Card 02: Wireframe Creation */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-[#bcd32e]/80 transition-all duration-300 relative flex flex-col items-center group h-full">
            {/* Step Number Circle Badge */}
            <div className="absolute top-5 left-5 w-7 h-7 rounded-full bg-[#bcd32e] text-white font-black text-xs flex items-center justify-center shadow-xs">
              02
            </div>

            {/* Icon Container */}
            <div className="w-24 h-24 rounded-full bg-[#f4f9d8] border border-lime-200/80 flex items-center justify-center text-[#658604] mt-3 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xs">
              <Layout className="w-10 h-10 text-[#658604]" />
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-black !text-[#0b132b] text-center mb-2">
              Wireframe Creation
            </h3>

            {/* Accent Hairline Line */}
            <div className="h-[2px] w-10 bg-gradient-to-r from-[#2196F3] to-[#bcd32e] rounded-full mb-3" />

            {/* Description Paragraph */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-center">
              After establishing all requirements, we initiate the development of your website. Our Indian web designing company creates wireframes and an action plan, outlining the structure for each page. This ensures a seamless design and user interaction.
            </p>
          </div>

          {/* Card 03: Creative Design */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-[#2196F3]/50 transition-all duration-300 relative flex flex-col items-center group h-full">
            {/* Step Number Circle Badge */}
            <div className="absolute top-5 left-5 w-7 h-7 rounded-full bg-[#2196F3] text-white font-black text-xs flex items-center justify-center shadow-xs">
              03
            </div>

            {/* Icon Container */}
            <div className="w-24 h-24 rounded-full bg-[#eef5ff] border border-blue-100 flex items-center justify-center text-[#2196F3] mt-3 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xs">
              <Palette className="w-10 h-10 text-[#2196F3]" />
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-black !text-[#0b132b] text-center mb-2">
              Creative Design
            </h3>

            {/* Accent Hairline Line */}
            <div className="h-[2px] w-10 bg-gradient-to-r from-[#2196F3] to-[#bcd32e] rounded-full mb-3" />

            {/* Description Paragraph */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-center">
              We implement your custom website design with the best resources. Our India-based web design experts focus on creative design, keeping our clients informed throughout the process. We use industry standard tools, frameworks, and programming languages.
            </p>
          </div>

          {/* Card 04: Dynamic Approach */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-[#bcd32e]/80 transition-all duration-300 relative flex flex-col items-center group h-full">
            {/* Step Number Circle Badge */}
            <div className="absolute top-5 left-5 w-7 h-7 rounded-full bg-[#bcd32e] text-white font-black text-xs flex items-center justify-center shadow-xs">
              04
            </div>

            {/* Icon Container */}
            <div className="w-24 h-24 rounded-full bg-[#f4f9d8] border border-lime-200/80 flex items-center justify-center text-[#658604] mt-3 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xs">
              <Settings className="w-10 h-10 text-[#658604]" />
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-black !text-[#0b132b] text-center mb-2">
              Dynamic Approach
            </h3>

            {/* Accent Hairline Line */}
            <div className="h-[2px] w-10 bg-gradient-to-r from-[#2196F3] to-[#bcd32e] rounded-full mb-3" />

            {/* Description Paragraph */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-center">
              We create websites that suit your business goals. Our flexible approach ensures quick results. We stay connected with you throughout, making changes promptly for the best user experience. Choose the best website design company for all your design needs.
            </p>
          </div>

        </div>

      </section>
      {/* ─── END OUR PROCESS SECTION ─────────────────────────────── */}

      {/* ─── BENEFITS OF HIRING SECTION ───────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-[1600px] mx-auto relative">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#eef5ff] border border-[#bcd6ff] text-[#2196F3] text-xs font-extrabold uppercase tracking-wider mb-4 shadow-xs">
            <Star className="w-3.5 h-3.5 text-[#2196F3] fill-[#2196F3]/20" />
            <span className="!text-[#2196F3]">OUR SERVICES</span>
          </div>

          {/* Headline Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black !text-[#0b132b] leading-tight mb-4">
            Benefits of Hiring the <span className="!text-[#2196F3]">Best Website Design Company India?</span>
          </h2>

          {/* Subtitle Description */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-4xl mx-auto mb-5 text-center">
            Working with the best white label web design company in India ensures a responsive website that functions well on all devices. Our designs not only enhance your website&rsquo;s appearance but also offer the following benefits:
          </p>

          {/* Centered Blue-Lime Hairline Divider */}
          <div className="flex justify-center items-center gap-1.5 my-4">
            <span className="h-[3px] w-14 bg-[#2196F3] rounded-full" />
            <span className="h-[3px] w-14 bg-[#bcd32e] rounded-full" />
          </div>

        </div>

        {/* 6 Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-8">

          {/* Card 1: Makeover Your Website */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#2196F3]/50 transition-all duration-300 relative flex flex-col justify-between group overflow-hidden h-full">
            <div className="relative z-10">
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-[#eef5ff] border border-blue-100 flex items-center justify-center text-[#2196F3] mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-xs">
                <Wand2 className="w-7 h-7 text-[#2196F3]" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-black !text-[#0b132b] mb-3">
                Makeover Your Website
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Work with the best white label web design services in India. Beat your competitors, boost conversions, and improve overall user experience. We use the latest trends with your business goals to create a website that stands out for your target audience.
              </p>
            </div>

            {/* Card Footer Line Accent & Action Indicator */}
            <div className="relative z-10 flex items-center gap-2 pt-4 border-t border-slate-100">
              <div className="w-7 h-7 rounded-full bg-[#bcd32e] text-white flex items-center justify-center text-xs font-bold shadow-xs group-hover:scale-110 transition-transform">
                <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
              </div>
              <div className="h-[2px] w-10 bg-[#bcd32e] rounded-full" />
            </div>

            {/* Hover Background Accent Glow */}
            <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-[#2196F3]/5 group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
          </div>

          {/* Card 2: Responsive Design */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#bcd32e]/80 transition-all duration-300 relative flex flex-col justify-between group overflow-hidden h-full">
            <div className="relative z-10">
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-[#f4f9d8] border border-lime-200/80 flex items-center justify-center text-[#658604] mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-xs">
                <Code className="w-7 h-7 text-[#658604]" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-black !text-[#0b132b] mb-3">
                Responsive Design
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Our web designing service ensures a responsive design, crucial not just for users but also for SEO. Trust the top web design company to create a website that impresses users and search engines with its responsiveness.
              </p>
            </div>

            {/* Card Footer Line Accent & Action Indicator */}
            <div className="relative z-10 flex items-center gap-2 pt-4 border-t border-slate-100">
              <div className="w-7 h-7 rounded-full bg-[#bcd32e] text-white flex items-center justify-center text-xs font-bold shadow-xs group-hover:scale-110 transition-transform">
                <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
              </div>
              <div className="h-[2px] w-10 bg-[#bcd32e] rounded-full" />
            </div>

            {/* Hover Background Accent Glow */}
            <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-[#bcd32e]/10 group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
          </div>

          {/* Card 3: Latest UI/UX */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#2196F3]/50 transition-all duration-300 relative flex flex-col justify-between group overflow-hidden h-full">
            <div className="relative z-10">
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-[#eef5ff] border border-blue-100 flex items-center justify-center text-[#2196F3] mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-xs">
                <Layout className="w-7 h-7 text-[#2196F3]" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-black !text-[#0b132b] mb-3">
                Latest UI/UX
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Upgrade your website with our latest UI/UX services for success and increased conversions. At Profito, India&rsquo;s top web design company, we prioritize the end user. Our web design services enhance user experience, ensuring your website is easy to navigate and visually appealing.
              </p>
            </div>

            {/* Card Footer Line Accent & Action Indicator */}
            <div className="relative z-10 flex items-center gap-2 pt-4 border-t border-slate-100">
              <div className="w-7 h-7 rounded-full bg-[#2196F3] text-white flex items-center justify-center text-xs font-bold shadow-xs group-hover:scale-110 transition-transform">
                <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
              </div>
              <div className="h-[2px] w-10 bg-[#2196F3] rounded-full" />
            </div>

            {/* Hover Background Accent Glow */}
            <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-[#2196F3]/5 group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
          </div>

          {/* Card 4: Call To Action */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#bcd32e]/80 transition-all duration-300 relative flex flex-col justify-between group overflow-hidden h-full">
            <div className="relative z-10">
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-[#f4f9d8] border border-lime-200/80 flex items-center justify-center text-[#658604] mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-xs">
                <MousePointerClick className="w-7 h-7 text-[#658604]" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-black !text-[#0b132b] mb-3">
                Call To Action
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Every web page needs a clear call to action for user desire actions. Our web design agency, Profito, creates precise and persuasive CTAs for favourable results. As the best website designing company from India, we prioritize compelling CTAs that drive action.
              </p>
            </div>

            {/* Card Footer Line Accent & Action Indicator */}
            <div className="relative z-10 flex items-center gap-2 pt-4 border-t border-slate-100">
              <div className="w-7 h-7 rounded-full bg-[#bcd32e] text-white flex items-center justify-center text-xs font-bold shadow-xs group-hover:scale-110 transition-transform">
                <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
              </div>
              <div className="h-[2px] w-10 bg-[#bcd32e] rounded-full" />
            </div>

            {/* Hover Background Accent Glow */}
            <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-[#bcd32e]/10 group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
          </div>

          {/* Card 5: Brand Consistency */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#2196F3]/50 transition-all duration-300 relative flex flex-col justify-between group overflow-hidden h-full">
            <div className="relative z-10">
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-[#eef5ff] border border-blue-100 flex items-center justify-center text-[#2196F3] mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-xs">
                <ShieldCheck className="w-7 h-7 text-[#2196F3]" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-black !text-[#0b132b] mb-3">
                Brand Consistency
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Brand consistency is very important. Web design services ensure consistent use of your brand elements (logos, colors, and messaging) on your website. This raises brand recognition and strengthens your identity.
              </p>
            </div>

            {/* Card Footer Line Accent & Action Indicator */}
            <div className="relative z-10 flex items-center gap-2 pt-4 border-t border-slate-100">
              <div className="w-7 h-7 rounded-full bg-[#2196F3] text-white flex items-center justify-center text-xs font-bold shadow-xs group-hover:scale-110 transition-transform">
                <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
              </div>
              <div className="h-[2px] w-10 bg-[#2196F3] rounded-full" />
            </div>

            {/* Hover Background Accent Glow */}
            <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-[#2196F3]/5 group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
          </div>

          {/* Card 6: Beat Your Competition */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#bcd32e]/80 transition-all duration-300 relative flex flex-col justify-between group overflow-hidden h-full">
            <div className="relative z-10">
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-[#f4f9d8] border border-lime-200/80 flex items-center justify-center text-[#658604] mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-xs">
                <TrendingUp className="w-7 h-7 text-[#658604]" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-black !text-[#0b132b] mb-3">
                Beat Your Competition
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Revamping your website is a creative and effective way to outshine competitors. Profito web design services in India help you beat competitors, regardless of your business size. Enhance your website&rsquo;s design to surpass rivals and boost sales.
              </p>
            </div>

            {/* Card Footer Line Accent & Action Indicator */}
            <div className="relative z-10 flex items-center gap-2 pt-4 border-t border-slate-100">
              <div className="w-7 h-7 rounded-full bg-[#bcd32e] text-white flex items-center justify-center text-xs font-bold shadow-xs group-hover:scale-110 transition-transform">
                <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
              </div>
              <div className="h-[2px] w-10 bg-[#bcd32e] rounded-full" />
            </div>

            {/* Hover Background Accent Glow */}
            <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-[#bcd32e]/10 group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
          </div>

        </div>

      </section>
      {/* ─── END BENEFITS OF HIRING SECTION ───────────────────────── */}

    </div>
  )
}





