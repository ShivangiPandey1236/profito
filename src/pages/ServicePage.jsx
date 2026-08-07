import React from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  ChevronRight,
  Home,
  ArrowRight,
  Target,
  TrendingUp,
  ShieldCheck,
  MessageSquare,
  BarChart3,
  Sparkles,
  Search,
  Users,
  FileText,
  CheckCircle2,
  Award
} from 'lucide-react'
import { getServiceBySlug } from '../data/services'

function SeoOverviewSection() {
  const keywords = [
    { name: 'Digital Marketing Agency', pos: 1 },
    { name: 'SEO Services India', pos: 1 },
    { name: 'Best SEO Company', pos: 1 },
    { name: 'Web Development Company', pos: 2 },
    { name: 'Social Media Marketing', pos: 3 },
  ]

  return (
    <div className="mt-16 sm:mt-20 relative">
      {/* Decorative Top-Right Soft Blue Orb */}
      <div className="absolute -top-10 right-0 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

        {/* LEFT COLUMN: Content & Features List */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">

          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2196F3]/10 border border-[#2196F3]/25 text-[#2196F3] font-bold text-xs uppercase tracking-wider mb-5 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#2196F3] animate-pulse" />
            <span>SEO THAT DRIVES REAL GROWTH</span>
          </div>

          {/* Main Headline */}
         <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-black !text-slate-900 leading-[1.18] tracking-tight mb-5">
  Best <span className="text-[#2196F3]">SEO Services</span> in India for Search Engines &amp; AI Platforms
</h2>

          {/* Accent Line */}
          <div className="w-14 h-1 bg-[#2196F3] rounded-full mb-6" />

          {/* Paragraph */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 font-medium">
            At Profito, we help businesses grow online with result-driven SEO strategies that improve visibility across search engines and AI-powered platforms. From keyword research to content optimization and link building, we deliver measurable results that drive traffic, leads, and long-term growth.
          </p>

          {/* 4 Feature Items */}
          <div className="space-y-4 w-full">
            <div className="flex items-center gap-4 group">
              <div className="w-11 h-11 rounded-2xl bg-[#eef6ff] border border-[#2196F3]/20 flex items-center justify-center text-[#2196F3] shrink-0 group-hover:bg-[#2196F3] group-hover:text-white transition-all duration-300 shadow-2xs">
                <Award className="w-5 h-5" />
              </div>
              <span className="font-bold text-slate-800 text-sm sm:text-base group-hover:text-[#2196F3] transition-colors">
                16+ Years of Digital Expertise
              </span>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-11 h-11 rounded-2xl bg-[#eef6ff] border border-[#2196F3]/20 flex items-center justify-center text-[#2196F3] shrink-0 group-hover:bg-[#2196F3] group-hover:text-white transition-all duration-300 shadow-2xs">
                <Users className="w-5 h-5" />
              </div>
              <span className="font-bold text-slate-800 text-sm sm:text-base group-hover:text-[#2196F3] transition-colors">
                1000+ Happy Clients Across India
              </span>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-11 h-11 rounded-2xl bg-[#eef6ff] border border-[#2196F3]/20 flex items-center justify-center text-[#2196F3] shrink-0 group-hover:bg-[#2196F3] group-hover:text-white transition-all duration-300 shadow-2xs">
                <FileText className="w-5 h-5" />
              </div>
              <span className="font-bold text-slate-800 text-sm sm:text-base group-hover:text-[#2196F3] transition-colors">
                Transparent Reporting &amp; Communication
              </span>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-11 h-11 rounded-2xl bg-[#eef6ff] border border-[#2196F3]/20 flex items-center justify-center text-[#2196F3] shrink-0 group-hover:bg-[#2196F3] group-hover:text-white transition-all duration-300 shadow-2xs">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <span className="font-bold text-slate-800 text-sm sm:text-base group-hover:text-[#2196F3] transition-colors">
                Ethical SEO Practices for Long-Term Growth
              </span>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Interactive SEO Analytics Dashboard Showcase */}
        <div className="lg:col-span-7 relative">

          {/* Background Panel Container */}
          <div className="bg-[#f0f6ff]/80 border border-[#d6e6ff] rounded-3xl p-5 sm:p-7 relative overflow-hidden shadow-[0_10px_35px_rgba(33,150,243,0.08)]">

            {/* Background Polka Dots Decorator */}
            <div className="absolute top-4 right-4 opacity-25 pointer-events-none">
              <div className="grid grid-cols-6 gap-1.5">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#2196F3]" />
                ))}
              </div>
            </div>

            {/* Top Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-5 items-stretch">

              {/* Left Span 7: Logo + Metrics List */}
              <div className="md:col-span-7 flex flex-col gap-4 justify-between">

                {/* Logo Card */}
                <div className="bg-white rounded-2xl p-4 border border-blue-100 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xl font-black text-slate-900 tracking-tight">profito</span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-500">Your Digital Growth Partner</span>
                </div>

                {/* Stat Rows Card */}
                <div className="bg-white rounded-2xl p-5 border border-blue-100 shadow-md space-y-3.5 flex-1 flex flex-col justify-center">

                  {/* Row 1 */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#eef6ff] border border-blue-200/60 text-[#2196F3] flex items-center justify-center shrink-0">
                        <Search className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-black text-slate-900 leading-none mb-0.5">90%</div>
                        <div className="text-[11px] font-bold text-slate-500">Keywords on 1st Page</div>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-0.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 font-extrabold text-xs">
                      ↑ 32%
                    </span>
                  </div>

                  {/* Row 2 */}
                  <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#eef6ff] border border-blue-200/60 text-[#2196F3] flex items-center justify-center shrink-0">
                        <BarChart3 className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-black text-slate-900 leading-none mb-0.5">48%</div>
                        <div className="text-[11px] font-bold text-slate-500">Total Traffic Growth</div>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-0.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 font-extrabold text-xs">
                      ↑ 21%
                    </span>
                  </div>

                  {/* Row 3 */}
                  <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#eef6ff] border border-blue-200/60 text-[#2196F3] flex items-center justify-center shrink-0">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-black text-slate-900 leading-none mb-0.5">63%</div>
                        <div className="text-[11px] font-bold text-slate-500">Growth in Leads</div>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-0.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 font-extrabold text-xs">
                      ↑ 27%
                    </span>
                  </div>

                </div>

              </div>

              {/* Right Span 5: SEO Performance Doughnut */}
              <div className="md:col-span-5 bg-white rounded-2xl p-5 border border-blue-100 shadow-md flex flex-col justify-between">
                <h4 className="text-center text-[11px] font-black text-slate-700 uppercase tracking-wider mb-2">
                  SEO PERFORMANCE
                </h4>

                {/* SVG Doughnut */}
                <div className="relative w-36 h-36 mx-auto my-2 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-slate-100"
                      strokeWidth="3.8"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-[#2196F3] transition-all duration-1000"
                      strokeDasharray="72, 100"
                      strokeWidth="4"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-[#93c5fd] transition-all duration-1000"
                      strokeDasharray="24, 100"
                      strokeDashoffset="-72"
                      strokeWidth="4"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-2xl font-black text-slate-900">72%</span>
                  </div>
                </div>

                {/* Legend */}
                <div className="space-y-1.5 text-xs font-bold pt-2 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-slate-700">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#2196F3]" />
                      <span>72%</span>
                    </span>
                    <span className="text-slate-500 font-semibold text-[11px]">Organic Traffic</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-slate-700">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#93c5fd]" />
                      <span>24%</span>
                    </span>
                    <span className="text-slate-500 font-semibold text-[11px]">Direct Traffic</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-slate-700">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <span>4%</span>
                    </span>
                    <span className="text-slate-500 font-semibold text-[11px]">Others</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">

              {/* Organic Traffic Growth Area Chart (Span 7) */}
              <div className="md:col-span-7 bg-white rounded-2xl p-5 border border-blue-100 shadow-md flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-xs font-black text-slate-900 tracking-wider uppercase">ORGANIC TRAFFIC GROWTH</h4>
                    <span className="text-[11px] font-bold text-slate-400">Last 6 Months</span>
                  </div>
                  <span className="bg-[#2196F3] text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-xs">
                    ↑ 124%
                  </span>
                </div>

                <div className="relative h-32 w-full mb-2">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="seoChartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2196F3" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#2196F3" stopOpacity="0.02" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,80 Q30,70 60,75 T120,50 T180,60 T240,35 T300,15 L300,100 L0,100 Z"
                      fill="url(#seoChartGrad)"
                    />
                    <path
                      d="M0,80 Q30,70 60,75 T120,50 T180,60 T240,35 T300,15"
                      fill="none"
                      stroke="#2196F3"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <circle cx="0" cy="80" r="3.5" fill="#2196F3" />
                    <circle cx="60" cy="75" r="3.5" fill="#2196F3" />
                    <circle cx="120" cy="50" r="3.5" fill="#2196F3" />
                    <circle cx="180" cy="60" r="3.5" fill="#2196F3" />
                    <circle cx="240" cy="35" r="3.5" fill="#2196F3" />
                    <circle cx="300" cy="15" r="4.5" fill="#2196F3" />
                  </svg>
                </div>

                <div className="flex justify-between text-[11px] font-bold text-slate-400 px-1 pt-1 border-t border-slate-100">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                </div>
              </div>

              {/* Top Keywords Table (Span 5) */}
              <div className="md:col-span-5 bg-white rounded-2xl p-5 border border-blue-100 shadow-md">
                <h4 className="text-xs font-black text-slate-900 tracking-wider uppercase mb-3">TOP KEYWORDS</h4>

                <div className="flex justify-between text-[11px] font-bold text-slate-400 pb-2 border-b border-slate-100">
                  <span>Keywords</span>
                  <span>Position</span>
                </div>

                <div className="divide-y divide-slate-100 text-xs font-bold text-slate-800">
                  {keywords.map((kw, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 hover:bg-slate-50 transition-colors rounded-lg px-1">
                      <span className="text-slate-700 font-bold truncate max-w-[160px]">{kw.name}</span>
                      <span className="w-5 h-5 rounded-full bg-blue-50 text-[#2196F3] font-black text-[11px] flex items-center justify-center">
                        {kw.pos}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default function ServicePage() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)
  const isSeoPage = !slug || slug === 'seo-services' || slug.toLowerCase().includes('seo')

  return (
    <div className="service-page bg-gradient-to-b from-white via-[#f0f7ff] to-[#eaf5ff] min-h-screen text-slate-800 pt-24 sm:pt-28 pb-20 font-sans overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* =========================================================
            HERO BANNER SECTION (Matches Careers Page Design)
           ========================================================= */}
        <div className="relative bg-gradient-to-r from-[#004bb8] via-[#2196F3] to-[#004bb8] rounded-3xl p-6 sm:p-10 lg:p-14 text-white shadow-2xl overflow-hidden border border-blue-400/20">

          {/* Subtle Radial Dots Overlay matching Careers Page */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }}
          />

          {/* Background Tech Rings */}
          <div className="absolute top-1/2 right-1/3 w-[550px] h-[550px] border border-white/10 rounded-full pointer-events-none animate-service-spin" />
          <div
            className="absolute top-1/2 right-1/3 w-[380px] h-[380px] border border-white/10 rounded-full pointer-events-none animate-service-spin"
            style={{ animationDirection: 'reverse', animationDuration: '30s' }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

            {/* Left Column Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">

              {/* Top Breadcrumb Navigation */}
              <nav className="flex items-center gap-2 text-xs sm:text-sm font-semibold mb-6 text-white/90">
                <Link to="/" className="inline-flex items-center gap-1.5 hover:text-[#c5f015] transition-colors">
                  <Home className="w-4 h-4 text-white" />
                  <span>Home</span>
                </Link>
                <ChevronRight className="w-4 h-4 text-white/60" />
                <span className="text-[#c5f015] font-bold">{service.fullTitle}</span>
              </nav>

              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-extrabold text-xs uppercase tracking-wider mb-6 backdrop-blur-md shadow-sm hover:border-[#c5f015]/60 transition-colors">
                <Sparkles className="w-3.5 h-3.5 text-[#c5f015] animate-pulse" />
                <span>{service.badge || 'AI-POWERED • RESULTS-DRIVEN'}</span>
              </div>

              {/* Main Dynamic Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6 uppercase">
                <span className="relative inline-block text-white group">
                  {service.titleFirst}
                  <span className="absolute bottom-0 left-0 w-full h-1.5 bg-[#c5f015] rounded-full transition-all duration-300 group-hover:h-2" />
                </span>{' '}
                <span className="text-[#c5f015]">{service.titleRest}</span>
              </h1>

              {/* Subtitle / Description */}
              <p className="text-white/90 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-medium">
                {service.description}
              </p>

              {/* CTA Action Buttons */}
              <div className="flex items-center gap-4 flex-wrap mb-10">
                <a
                  href={service.primaryCtaLink || '#packages'}
                  className="inline-flex items-center gap-3 bg-[#c5f015] hover:bg-white text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:translate-y-0 group cursor-pointer"
                >
                  <span className="text-black font-black">{service.primaryCtaText || 'VIEW PACKAGES'}</span>
                  <span className="w-7 h-7 rounded-full bg-slate-950 text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-[#0066ff]">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </span>
                </a>

                <Link
                  to={service.secondaryCtaLink || '/contact-us'}
                  className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/60 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded-full backdrop-blur-md transition-all duration-300 hover:-translate-y-1 active:translate-y-0 group"
                >
                  <MessageSquare className="w-4 h-4 text-[#c5f015] transition-transform duration-300 group-hover:scale-110" />
                  <span>{service.secondaryCtaText || "LET'S TALK"}</span>
                  <span className="w-7 h-7 rounded-full bg-white/20 text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-[#c5f015] group-hover:text-slate-950">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>

              {/* Bottom Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-6 border-t border-white/15">
                {service.features.map((feat, idx) => {
                  const IconComponent =
                    feat.icon === 'Target'
                      ? Target
                      : feat.icon === 'TrendingUp'
                      ? TrendingUp
                      : ShieldCheck
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-all duration-300 hover:-translate-y-0.5 group cursor-default"
                    >
                      <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-[#c5f015] group-hover:text-slate-950 transition-all duration-300 shadow-sm">
                        <IconComponent className="w-5 h-5 text-[#c5f015] group-hover:text-slate-950 transition-colors" />
                      </div>
                      <div>
                        <h4 className="text-sm font-extrabold text-white leading-tight group-hover:text-[#c5f015] transition-colors">
                          {feat.title}
                        </h4>
                        <p className="text-xs text-white/70 font-medium">{feat.subtitle}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

            </div>

            {/* Right Column: Animated Floating Glass Dashboard Card */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              <div className="relative w-full max-w-md animate-service-float">

                <div className="absolute -top-3 -right-3 z-20 w-10 h-10 rounded-full bg-[#c5f015] text-slate-950 flex items-center justify-center shadow-xl animate-service-badge-bounce">
                  <TrendingUp className="w-5 h-5 text-slate-950" />
                </div>

                <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/25 rounded-3xl p-6 sm:p-8 text-white shadow-2xl overflow-hidden hover:border-white/40 transition-all duration-300 group">

                  <div className="absolute top-1/3 right-8 w-44 h-44 bg-[#c5f015]/20 rounded-full blur-3xl pointer-events-none animate-service-pulse" />

                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 rounded-full bg-white/10 border border-[#c5f015]/60 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                      <BarChart3 className="w-7 h-7 text-[#c5f015]" />
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <span className="text-[11px] font-bold tracking-widest text-white/80 uppercase">
                      {service.stats.label}
                    </span>
                    <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mt-1 mb-1 group-hover:scale-105 transition-transform duration-300">
                      {service.stats.value}
                    </div>
                    <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-white/80">
                      <span className="text-[#c5f015] font-extrabold flex items-center gap-0.5 bg-[#c5f015]/10 px-2 py-0.5 rounded-full">
                        {service.stats.growth}
                      </span>
                      <span>{service.stats.period}</span>
                    </div>
                  </div>

                  <div className="relative h-24 mb-6">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80" fill="none">
                      <defs>
                        <linearGradient id="heroChartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#c5f015" stopOpacity="0.45" />
                          <stop offset="100%" stopColor="#c5f015" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0 65 Q 40 58, 70 48 T 140 38 T 210 24 T 285 8 L 285 80 L 0 80 Z"
                        fill="url(#heroChartGrad)"
                      />
                      <path
                        d="M0 65 Q 40 58, 70 48 T 140 38 T 210 24 T 285 8"
                        stroke="#c5f015"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        fill="none"
                        className="animate-service-dash"
                      />
                      <circle cx="285" cy="8" r="5" fill="#ffffff" />
                      <circle cx="285" cy="8" r="9" fill="#c5f015" opacity="0.8" className="animate-ping" />
                    </svg>
                  </div>

                  <div className="bg-white/10 border border-white/15 rounded-2xl p-4 mb-6 backdrop-blur-md hover:bg-white/15 transition-colors">
                    <div className="flex justify-between items-center text-[10px] font-extrabold tracking-wider text-white/80 uppercase mb-3 px-1">
                      <span>{service.stats.growthSectionTitle}</span>
                      <span className="text-[#c5f015]">{service.stats.growthSectionSubtitle}</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-center divide-x divide-white/10">
                      {service.stats.metrics.map((metric, idx) => (
                        <div key={idx} className="hover:scale-105 transition-transform">
                          <div className="text-base sm:text-lg font-black text-white leading-none">
                            {metric.value}
                          </div>
                          <div className="text-[10px] text-white/70 font-medium mt-1">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl py-3 px-5 flex items-center justify-between shadow-lg hover:shadow-xl transition-shadow">
                    <svg className="h-5 w-auto hover:scale-110 transition-transform cursor-pointer" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>

                    <svg className="h-5 w-auto text-[#008394] hover:scale-110 transition-transform cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5 3v16.5l4.5 2.5 9.5-5.5-3.5-1.5-6-2.5V7.5L5 3z" />
                    </svg>

                    <svg className="h-5 w-auto text-[#7c3aed] hover:scale-110 transition-transform cursor-pointer animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z"/>
                    </svg>

                    <svg className="h-5 w-auto text-[#10a37f] hover:scale-110 transition-transform cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.28 9.82c-.28-.86-.78-1.63-1.46-2.24A6.17 6.17 0 0 0 14.5 4.5a6.07 6.07 0 0 0-4.04 1.54 6.17 6.17 0 0 0-5.74 3.02 6.08 6.08 0 0 0-.74 4.26c.28.86.78 1.63 1.46 2.24a6.17 6.17 0 0 0 6.32 3.08 6.07 6.07 0 0 0 4.04-1.54 6.17 6.17 0 0 0 5.74-3.02 6.08 6.08 0 0 0 .74-4.26zM12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
                    </svg>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>

        {/* =========================================================
            EXCLUSIVELY FOR SEO SERVICE PAGE
           ========================================================= */}
        {isSeoPage && <SeoOverviewSection />}

      </div>
    </div>
  )
}

