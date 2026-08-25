import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { ASO_PACKAGES_DATA } from '../data/asoPackagesData'
import ClientsSection from '../components/ClientsSection'
import CTASection from '../components/CTASection'

export default function AsoPackages() {
  const { hero, billingCycles, plans } = ASO_PACKAGES_DATA
  const [activeCycle, setActiveCycle] = useState('month')

  return (
    <div className="pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto min-h-screen text-black">
      {/* ── ASO PACKAGES & PLANS HERO BANNER SECTION ── */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#2196F3] via-[#1e88e5] to-[#1565c0] rounded-3xl py-16 sm:py-24 px-6 sm:px-12 text-center text-white shadow-xl mb-16 sm:mb-20">
        
        {/* Background Crowd/Stage Texture Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-25 pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=80')`
          }}
        />

        {/* Left Side Curved Lime Green Accent Line & Angled Shade */}
        <svg 
          className="absolute left-0 top-0 h-full w-48 sm:w-80 pointer-events-none z-10" 
          viewBox="0 0 300 400" 
          fill="none" 
          preserveAspectRatio="none"
        >
          <path d="M-60 -60 L140 -60 L230 200 L80 460 L-60 460 Z" fill="#1565c0" fillOpacity="0.45" />
          <path 
            d="M-40 -40 L115 -40 L200 200 L50 440" 
            stroke="#bcd32e" 
            strokeWidth="7" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>

        {/* Right Side Solid Lime Green Curved Wedge Shape */}
        <div className="absolute -right-12 -bottom-12 sm:-right-16 sm:-bottom-16 w-52 h-52 sm:w-84 sm:h-84 bg-[#bcd32e] rounded-tl-[100px] sm:rounded-tl-[160px] transform rotate-6 pointer-events-none z-10" />

        {/* Bottom-Left Dot Matrix Grid */}
        <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 grid grid-cols-5 gap-2.5 z-20 pointer-events-none">
          {Array.from({ length: 15 }).map((_, idx) => (
            <div key={idx} className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/80" />
          ))}
        </div>

        {/* Top-Right Dot Matrix Grid */}
        <div className="absolute top-6 right-6 sm:top-10 sm:right-10 grid grid-cols-5 gap-2.5 z-20 pointer-events-none">
          {Array.from({ length: 15 }).map((_, idx) => (
            <div key={idx} className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/80" />
          ))}
        </div>

        {/* Banner Content Container */}
        <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center justify-center">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-[#bcd32e] tracking-tight leading-none mb-2 sm:mb-4 drop-shadow-md">
            {hero.titleLime}
          </h1>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6 sm:mb-8 drop-shadow-xs">
            {hero.titleWhite}
          </h2>
          <div className="w-20 sm:w-28 h-1.5 bg-[#bcd32e] rounded-full shadow-xs" />
        </div>
      </section>

      {/* ── PRICING & PACKAGES SECTION ── */}
      <section className="mb-20">
        
        {/* Billing Cycle Navigation Tabs Bar */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-1.5 sm:p-2 border border-slate-200/90 shadow-md flex items-center justify-between gap-1 sm:gap-2 max-w-4xl mx-auto mb-14">
          {billingCycles.map((cycle) => {
            const isActive = activeCycle === cycle.id
            return (
              <button
                key={cycle.id}
                type="button"
                onClick={() => setActiveCycle(cycle.id)}
                className={`flex-1 py-3 px-2 sm:px-4 rounded-xl text-center transition-all duration-300 relative cursor-pointer ${
                  isActive
                    ? 'bg-[#2196F3] text-white shadow-md font-bold'
                    : 'bg-transparent text-slate-700 hover:bg-slate-50 font-semibold'
                }`}
              >
                <span className="block text-sm sm:text-base font-extrabold leading-tight">
                  {cycle.name}
                </span>
                <span className={`block text-[11px] sm:text-xs font-medium mt-0.5 ${isActive ? 'text-white/90' : 'text-slate-500'}`}>
                  {cycle.label}
                </span>

                {/* Active Pointer Arrow */}
                {isActive && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#2196F3]" />
                )}
              </button>
            )
          })}
        </div>

        {/* 4-Column Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 items-stretch">
          {plans.map((plan) => {
            const isPopular = plan.isPopular
            const price = plan.pricing[activeCycle] || plan.pricing.month

            if (isPopular) {
              return (
                /* Highlighted Popular Standard Card */
                <div
                  key={plan.id}
                  className="bg-[#2196F3] text-white rounded-3xl p-6 sm:p-7 shadow-xl flex flex-col justify-between transition-all duration-300 hover:shadow-2xl relative border-2 border-[#2196F3] lg:-translate-y-2"
                >
                  {/* Popular Badge */}
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#bcd32e] text-[#0b132b] px-4 py-1 rounded-md text-xs font-black tracking-wide uppercase shadow-xs z-20">
                    {plan.popularLabel || 'Popular'}
                  </div>

                  <div>
                    {/* Header Pill */}
                    <div className="bg-white/20 border border-white/30 rounded-full py-1.5 px-6 text-center text-xs font-black tracking-wider text-white uppercase mx-auto mb-6 w-full max-w-[160px]">
                      {plan.name}
                    </div>

                    {/* Price */}
                    <div className="text-center mb-5">
                      <span className="text-3xl sm:text-4xl font-black text-[#bcd32e] tracking-tight">
                        {price}
                      </span>
                      <span className="text-xs font-bold text-white/80 ml-1">
                        {plan.period}
                      </span>
                    </div>

                    {/* Get Quote CTA */}
                    <button
                      type="button"
                      className="w-full bg-white text-[#2196F3] font-bold text-sm py-2.5 rounded-xl shadow-xs hover:bg-slate-100 transition-colors mb-6 cursor-pointer"
                    >
                      Get Quote
                    </button>

                    {/* Target Segment Divider Box */}
                    <div className="border-t border-b border-dashed border-white/30 py-3.5 my-2 text-center text-xs sm:text-sm font-extrabold text-white">
                      {plan.target}
                    </div>

                    {/* Features List */}
                    <ul className="space-y-3.5 my-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-white/95 font-medium leading-relaxed">
                          <div className="w-4 h-4 rounded-full bg-[#bcd32e] text-[#0b132b] flex items-center justify-center shrink-0 mt-0.5">
                            <ArrowRight className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* View Details Bottom CTA */}
                  <button
                    type="button"
                    className="w-full bg-[#bcd32e] text-[#0b132b] font-extrabold text-sm py-3 rounded-xl hover:bg-[#a6bb24] transition-colors cursor-pointer mt-4 shadow-xs"
                  >
                    View Details
                  </button>
                </div>
              )
            }

            return (
              /* Regular Card (Lite, Advance, Enterprise) */
              <div
                key={plan.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-lg relative"
              >
                <div>
                  {/* Header Pill */}
                  <div className="bg-[#bcd32e]/30 border border-[#bcd32e]/50 rounded-full py-1.5 px-6 text-center text-xs font-black tracking-wider text-slate-800 uppercase mx-auto mb-6 w-full max-w-[160px]">
                    {plan.name}
                  </div>

                  {/* Price */}
                  <div className="text-center mb-5">
                    <span className="text-3xl sm:text-4xl font-black text-[#2196F3] tracking-tight">
                      {price}
                    </span>
                    <span className="text-xs font-bold text-slate-500 ml-1">
                      {plan.period}
                    </span>
                  </div>

                  {/* Get Quote CTA */}
                  <button
                    type="button"
                    className="w-full bg-[#2196F3] text-white font-bold text-sm py-2.5 rounded-xl shadow-xs hover:bg-[#1976D2] transition-colors mb-6 cursor-pointer"
                  >
                    Get Quote
                  </button>

                  {/* Target Segment Divider Box */}
                  <div className="border-t border-b border-dashed border-slate-200 py-3.5 my-2 text-center text-xs sm:text-sm font-extrabold text-slate-800">
                    {plan.target}
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3.5 my-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 font-medium leading-relaxed">
                        <div className="w-4 h-4 rounded-full bg-[#bcd32e] text-[#0b132b] flex items-center justify-center shrink-0 mt-0.5">
                          <ArrowRight className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* View Details Bottom CTA */}
                <button
                  type="button"
                  className="w-full bg-[#bcd32e] text-[#0b132b] font-extrabold text-sm py-3 rounded-xl hover:bg-[#a6bb24] transition-colors cursor-pointer mt-4 shadow-xs"
                >
                  View Details
                </button>
              </div>
            )
          })}
        </div>

      </section>

      {/* ── CLIENTS / VALUED PARTNERS SECTION ── */}
      <div className="mb-10">
        <ClientsSection />
      </div>

      {/* ── CTA SECTION ── */}
      <div className="mb-12">
        <CTASection />
      </div>
    </div>
  )
}
