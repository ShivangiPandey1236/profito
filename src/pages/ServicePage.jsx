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
  Sparkles
} from 'lucide-react'
import { getServiceBySlug } from '../data/services'

export default function ServicePage() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  return (
    <div className="service-page bg-gradient-to-b from-slate-50 via-white to-blue-50/40 min-h-screen text-slate-800 pt-24 sm:pt-28 pb-20 font-sans overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* =========================================================
            HERO BANNER SECTION (Matches Uploaded Design)
           ========================================================= */}
        <div className="relative bg-gradient-to-r from-[#003eb3] via-[#005bf0] to-[#0038b3] rounded-3xl p-6 sm:p-10 lg:p-14 text-white shadow-2xl overflow-hidden border border-blue-400/20">

          {/* Background Radial Dots Grid Overlay */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.9) 1px, transparent 0)`,
              backgroundSize: '24px 24px'
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

                {/* Top right floating lime circle badge with bounce */}
                <div className="absolute -top-3 -right-3 z-20 w-10 h-10 rounded-full bg-[#c5f015] text-slate-950 flex items-center justify-center shadow-xl animate-service-badge-bounce">
                  <TrendingUp className="w-5 h-5 text-slate-950" />
                </div>

                {/* Main Glass Dashboard Box */}
                <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/25 rounded-3xl p-6 sm:p-8 text-white shadow-2xl overflow-hidden hover:border-white/40 transition-all duration-300 group">

                  {/* Ambient Pulsing Glow */}
                  <div className="absolute top-1/3 right-8 w-44 h-44 bg-[#c5f015]/20 rounded-full blur-3xl pointer-events-none animate-service-pulse" />

                  {/* Bar Chart Header Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 rounded-full bg-white/10 border border-[#c5f015]/60 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                      <BarChart3 className="w-7 h-7 text-[#c5f015]" />
                    </div>
                  </div>

                  {/* Main Metric Stat */}
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

                  {/* Animated Wave SVG Chart */}
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
                      {/* Endpoint glowing dot */}
                      <circle cx="285" cy="8" r="5" fill="#ffffff" />
                      <circle cx="285" cy="8" r="9" fill="#c5f015" opacity="0.8" className="animate-ping" />
                    </svg>
                  </div>

                  {/* Nested Glass Card: Ranking Growth */}
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

                  {/* Bottom White Pill with Platform Logos */}
                  <div className="bg-white rounded-xl py-3 px-5 flex items-center justify-between shadow-lg hover:shadow-xl transition-shadow">
                    {/* Google Logo */}
                    <svg className="h-5 w-auto hover:scale-110 transition-transform cursor-pointer" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>

                    {/* Bing Logo */}
                    <svg className="h-5 w-auto text-[#008394] hover:scale-110 transition-transform cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5 3v16.5l4.5 2.5 9.5-5.5-3.5-1.5-6-2.5V7.5L5 3z" />
                    </svg>

                    {/* AI Spark Logo */}
                    <svg className="h-5 w-auto text-[#7c3aed] hover:scale-110 transition-transform cursor-pointer animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z"/>
                    </svg>

                    {/* OpenAI ChatGPT Logo */}
                    <svg className="h-5 w-auto text-[#10a37f] hover:scale-110 transition-transform cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.28 9.82c-.28-.86-.78-1.63-1.46-2.24A6.17 6.17 0 0 0 14.5 4.5a6.07 6.07 0 0 0-4.04 1.54 6.17 6.17 0 0 0-5.74 3.02 6.08 6.08 0 0 0-.74 4.26c.28.86.78 1.63 1.46 2.24a6.17 6.17 0 0 0 6.32 3.08 6.07 6.07 0 0 0 4.04-1.54 6.17 6.17 0 0 0 5.74-3.02 6.08 6.08 0 0 0 .74-4.26zM12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
                    </svg>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
