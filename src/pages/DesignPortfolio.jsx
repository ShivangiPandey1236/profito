import React from 'react'
import { Code2 } from 'lucide-react'
import { DESIGN_PORTFOLIO_HERO_DATA } from '../data/designPortfolioData'

export default function DesignPortfolio() {
  return (
    <div className="pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto min-h-screen text-black">
      {/* ── WEB DEVELOPMENT PORTFOLIO HERO BANNER ── */}
      <div className="mb-16 sm:mb-20">
        <div className="portfolio-hero-banner relative p-8 sm:p-14 lg:p-16 text-center overflow-hidden z-10">

          {/* Top-left 3x3 dot matrix grid (2 columns blue, 1 column lime) */}
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
              {/* Diagonal hatch lines background */}
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
              {/* Lime circle */}
              <circle cx="130" cy="70" r="50" stroke="#bcd32e" strokeWidth="1.8" fill="none" opacity="0.9" />
              {/* Blue overlapping circle */}
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

          {/* Main Content Area */}
          <div className="relative z-20 max-w-3xl mx-auto">
            {/* Top Center Pill Badge with </> Code Icon */}
            <div className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-white border border-[#2196F3]/30 shadow-[0_4px_14px_rgba(33,150,243,0.08)] mb-6 transition-all duration-300 hover:border-[#bcd32e] hover:shadow-[0_6px_20px_rgba(188,211,46,0.25)] hover:-translate-y-0.5">
              <Code2 className="w-4 h-4 text-[#2196F3]" />
              <span className="text-[11px] sm:text-xs font-bold tracking-wider text-[#0b132b] uppercase">
                {DESIGN_PORTFOLIO_HERO_DATA.badgeText}
              </span>
            </div>

            {/* Headline Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-5 tracking-tight leading-tight">
              <span className="text-[#2196F3] inline-block mr-3">
                {DESIGN_PORTFOLIO_HERO_DATA.titleHighlight}
              </span>
              <span className="text-[#0b132b]">
                {DESIGN_PORTFOLIO_HERO_DATA.titleSuffix}
              </span>
            </h1>

            {/* Title Accent Line / Divider */}
            <div className="flex items-center justify-center gap-2.5 mb-6">
              <div className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-transparent via-[#2196F3]/50 to-[#2196F3] rounded-full" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#2196F3] shadow-[0_0_8px_rgba(33,150,243,0.5)]" />
              <div className="w-16 sm:w-24 h-[2px] bg-gradient-to-l from-transparent via-[#2196F3]/50 to-[#2196F3] rounded-full" />
            </div>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg font-medium text-[#475569] max-w-2xl mx-auto leading-relaxed">
              {DESIGN_PORTFOLIO_HERO_DATA.subtitle}
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
