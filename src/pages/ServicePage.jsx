import React, { useState } from 'react'
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
  Award,
  ShoppingCart,
  Activity,
  Scale,
  Layers,
  Settings,
  Code,
  HelpCircle,
  User,
  DollarSign,
  Link as LinkIcon,
  Globe,
  Zap,
  Lock,
  Eye,
  UserCheck,
  Plus,
  Minus,
  Clock,
  Rocket,
  Star,
  Quote,
  ChevronLeft
} from 'lucide-react'
import { getServiceBySlug } from '../data/services'
import {
  seoServiceSectionData,
  aiSeoServicesData,
  seoStrategiesData,
  platformSeoSectionData,
  seoScopeData,
  seoApproachData,
  seoExplainedData,
  seoCtaSectionData,
  seoBenefitsData,
  seoFaqData,
  seoClientsData,
  seoTestimonialsData
} from '../data/seoServiceSectionData'
import ctaImage from '../assets/cta-default-image.webp'
import bpLogo from '../assets/BP-logo.jpg'
import uthoLogo from '../assets/utho-logo.png'
import proboLogo from '../assets/probo-logo.png'
import ibcmeLogo from '../assets/IBCME-logo.jpg'
import ajLogo from '../assets/AJ-logo.jpg'
import indiatvLogo from '../assets/indiatv-logo.jpg'
import tauLogo from '../assets/tau.jpg'
import zopperLogo from '../assets/zopper-logo1.png'
import teamImage from '../assets/team.jpeg'

const iconMap = {
  Award,
  Users,
  FileText,
  CheckCircle2,
  Search,
  BarChart3
}

const strategyIconMap = {
  ShoppingCart,
  Activity,
  Home,
  Scale
}

function SeoStrategiesSection() {
  const { titlePrefix, titleHighlight, description, cards } = seoStrategiesData

  return (
    <div className="mt-16 sm:mt-20 bg-gradient-to-b from-white/90 via-[#f0f6ff]/80 to-white border border-[#2196F3]/20 rounded-[36px] sm:rounded-[40px] p-6 sm:p-10 lg:p-14 shadow-[0_20px_50px_rgba(33,150,243,0.08)] relative overflow-hidden">
      {/* Background Soft Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#2196F3]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-4xl mx-auto mb-14">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a0a0a] tracking-tight mb-5" style={{ color: '#0a0a0a' }}>
          {titlePrefix}{' '}
          <span className="bg-gradient-to-r from-[#2196F3] via-[#42a5f5] to-[#2196F3] bg-clip-text text-transparent animate-text-shimmer">
            {titleHighlight}
          </span>
        </h2>

        <p className="text-[#555555] text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-medium" style={{ color: '#555555' }}>
          {description}
        </p>
      </div>

      {/* 2x2 Strategy Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        {cards.map((card) => {
          const CardIcon = strategyIconMap[card.iconType] || ShoppingCart
          return (
            <div
              key={card.id}
              className="bg-white rounded-3xl border border-[#2196F3]/20 shadow-[0_15px_45px_rgba(33,150,243,0.08)] hover:shadow-[0_20px_50px_rgba(33,150,243,0.15)] transition-all duration-300 hover:-translate-y-1.5 overflow-hidden flex flex-col sm:flex-row group relative min-h-[220px]"
            >
              {/* Left Column: Blue Container with Image & Lime Icon Badge */}
              <div className="sm:w-[48%] bg-gradient-to-br from-[#005bf0] via-[#0066ff] to-[#2196F3] relative flex items-center justify-center overflow-hidden min-h-[210px] p-4">

                {/* Circular Lime Icon Badge */}
                <div className="absolute top-4 left-4 z-20 w-12 h-12 rounded-full bg-[#bcd32e] text-[#0a0a0a] border-2 border-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CardIcon className="w-6 h-6 text-[#0a0a0a]" />
                </div>

                {/* Background Radial Glow */}
                <div className="absolute inset-0 bg-radial from-white/20 to-transparent pointer-events-none" />

                {/* Strategy Graphic Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-contain max-h-[195px] relative z-10 group-hover:scale-105 transition-transform duration-500 drop-shadow-xl"
                />
              </div>

              {/* Right Column: White Content Box with Stats */}
              <div className="sm:w-[52%] bg-white p-6 sm:p-7 flex flex-col justify-between relative text-left">

                {/* Title with Blue Accent Bar */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-6 bg-[#2196F3] rounded-full inline-block" />
                  <h3 className="text-xl font-black text-[#0a0a0a] tracking-tight" style={{ color: '#0a0a0a' }}>
                    {card.title}
                  </h3>
                </div>

                {/* 2 Stat Columns */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {/* Stat 1 */}
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-[#2196F3] leading-none mb-1">
                      {card.stat1.value}
                    </div>
                    <div className="text-xs font-bold text-[#555555] leading-tight" style={{ color: '#555555' }}>
                      {card.stat1.label}
                    </div>
                  </div>

                  {/* Stat 2 */}
                  <div className="pl-3 border-l border-slate-100">
                    <div className="text-2xl sm:text-3xl font-black text-[#2196F3] leading-none mb-1">
                      {card.stat2.value}
                    </div>
                    <div className="text-xs font-bold text-[#555555] leading-tight" style={{ color: '#555555' }}>
                      {card.stat2.label}
                    </div>
                  </div>
                </div>

                {/* Action Arrow Circle Button */}
                <div className="absolute bottom-5 right-5 w-9 h-9 rounded-full bg-[#2196F3] text-white flex items-center justify-center shadow-md group-hover:bg-[#0a0a0a] group-hover:scale-110 transition-all duration-300 cursor-pointer">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>

              </div>

            </div>
          )
        })}
      </div>

    </div>
  )
}

function SeoOverviewSection() {
  const { badge, titlePrefix, titleHighlight, titleSuffix, description, features, dashboard } = seoServiceSectionData

  return (
    <div className="mt-16 sm:mt-20 bg-gradient-to-b from-white/90 via-[#f0f6ff]/80 to-white border border-[#2196F3]/20 rounded-[36px] sm:rounded-[40px] p-6 sm:p-10 lg:p-14 shadow-[0_20px_50px_rgba(33,150,243,0.08)] relative overflow-hidden">
      {/* Decorative Top-Right Soft Blue Orb */}
      <div className="absolute -top-10 right-0 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

        {/* LEFT COLUMN: Content & Features List */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">

          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2196F3]/10 border border-[#2196F3]/25 text-[#2196F3] font-bold text-xs uppercase tracking-wider mb-5 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#2196F3] animate-pulse" />
            <span>{badge}</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-black !text-slate-900 leading-[1.18] tracking-tight mb-5">
            {titlePrefix}<span className="text-[#2196F3]">{titleHighlight}</span>{titleSuffix}
          </h2>

          {/* Accent Line */}
          <div className="w-14 h-1 bg-[#2196F3] rounded-full mb-6" />

          {/* Paragraph */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 font-medium">
            {description}
          </p>

          {/* Feature Items */}
          <div className="space-y-4 w-full">
            {features.map((feat, idx) => {
              const IconComp = iconMap[feat.icon] || Award
              return (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-2xl bg-[#eef6ff] border border-[#2196F3]/20 flex items-center justify-center text-[#2196F3] shrink-0 group-hover:bg-[#2196F3] group-hover:text-white transition-all duration-300 shadow-2xs">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-slate-800 text-sm sm:text-base group-hover:text-[#2196F3] transition-colors">
                    {feat.title}
                  </span>
                </div>
              )
            })}
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
                    <span className="text-xl font-black text-slate-900 tracking-tight">{dashboard.branding.title}</span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-500">{dashboard.branding.tagline}</span>
                </div>

                {/* Stat Rows Card */}
                <div className="bg-white rounded-2xl p-5 border border-blue-100 shadow-md space-y-3.5 flex-1 flex flex-col justify-center">
                  {dashboard.metrics.map((metric, idx) => {
                    const MetricIcon = iconMap[metric.icon] || Search
                    return (
                      <div key={idx} className={`flex items-center justify-between gap-3 ${idx > 0 ? 'pt-3 border-t border-slate-100' : ''}`}>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[#eef6ff] border border-blue-200/60 text-[#2196F3] flex items-center justify-center shrink-0">
                            <MetricIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-xl sm:text-2xl font-black text-slate-900 leading-none mb-0.5">{metric.value}</div>
                            <div className="text-[11px] font-bold text-slate-500">{metric.label}</div>
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-0.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 font-extrabold text-xs">
                          {metric.growth}
                        </span>
                      </div>
                    )
                  })}
                </div>

              </div>

              {/* Right Span 5: SEO Performance Doughnut */}
              <div className="md:col-span-5 bg-white rounded-2xl p-5 border border-blue-100 shadow-md flex flex-col justify-between">
                <h4 className="text-center text-[11px] font-black text-slate-700 uppercase tracking-wider mb-2">
                  {dashboard.performanceChart.title}
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
                    <span className="text-2xl font-black text-slate-900">{dashboard.performanceChart.mainValue}</span>
                  </div>
                </div>

                {/* Legend */}
                <div className="space-y-1.5 text-xs font-bold pt-2 border-t border-slate-100">
                  {dashboard.performanceChart.segments.map((seg, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-700">
                        <span className={`w-2.5 h-2.5 rounded-full ${seg.color.startsWith('#') ? '' : 'bg-slate-300'}`} style={seg.color.startsWith('#') ? { backgroundColor: seg.color } : {}} />
                        <span>{seg.percentage}%</span>
                      </span>
                      <span className="text-slate-500 font-semibold text-[11px]">{seg.label}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>

            {/* Bottom Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">

              {/* Organic Traffic Growth Area Chart (Span 7) */}
              <div className="md:col-span-7 bg-white rounded-2xl p-5 border border-blue-100 shadow-md flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-xs font-black text-slate-900 tracking-wider uppercase">{dashboard.trafficGrowth.title}</h4>
                    <span className="text-[11px] font-bold text-slate-400">{dashboard.trafficGrowth.subtitle}</span>
                  </div>
                  <span className="bg-[#2196F3] text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-xs">
                    {dashboard.trafficGrowth.growthBadge}
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
                  {dashboard.trafficGrowth.months.map((m, idx) => (
                    <span key={idx}>{m}</span>
                  ))}
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
                  {dashboard.topKeywords.map((kw, idx) => (
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

function NationalSeoIcon() {
  return (
    <div className="w-24 h-24 rounded-full bg-[#eaf3ff] border border-[#d0e4ff] flex items-center justify-center relative shadow-xs group-hover:scale-105 transition-transform duration-300">
      <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="18" stroke="#1e293b" strokeWidth="2.5" fill="none" />
        <ellipse cx="28" cy="28" rx="8" ry="18" stroke="#1e293b" strokeWidth="2.5" fill="none" />
        <line x1="10" y1="28" x2="46" y2="28" stroke="#1e293b" strokeWidth="2.5" />
        <line x1="13" y1="18" x2="43" y2="18" stroke="#1e293b" strokeWidth="1.8" strokeDasharray="2 2" />
        <line x1="13" y1="38" x2="43" y2="38" stroke="#1e293b" strokeWidth="1.8" strokeDasharray="2 2" />

        {/* Magnifying Glass Overlay */}
        <circle cx="42" cy="42" r="9" stroke="#2196F3" strokeWidth="3" fill="#eaf3ff" />
        <line x1="48.5" y1="48.5" x2="56" y2="56" stroke="#2196F3" strokeWidth="3.5" strokeLinecap="round" />
      </svg>
    </div>
  )
}

function LocalSeoIcon() {
  return (
    <div className="w-24 h-24 rounded-full bg-[#f2f9d8] border border-[#e2f2a8] flex items-center justify-center relative shadow-xs group-hover:scale-105 transition-transform duration-300">
      <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="26" cy="34" r="18" stroke="#1e293b" strokeWidth="2.5" fill="none" />
        <ellipse cx="26" cy="34" rx="8" ry="18" stroke="#1e293b" strokeWidth="2.5" fill="none" />
        <line x1="8" y1="34" x2="44" y2="34" stroke="#1e293b" strokeWidth="2.5" />

        {/* Location Pin 1 (Top Right) */}
        <g transform="translate(34, 6)">
          <path d="M9 0C4.58 0 1 3.58 1 8C1 14 9 20 9 20C9 20 17 14 17 8C17 3.58 13.42 0 9 0Z" fill="#bcd32e" stroke="#1e293b" strokeWidth="2" />
          <circle cx="9" cy="8" r="3" fill="#1e293b" />
        </g>

        {/* Location Pin 2 (Bottom Right) */}
        <g transform="translate(38, 36)">
          <path d="M6 0C3 0 0.6 2.4 0.6 5.4C0.6 9.4 6 13.5 6 13.5C6 13.5 11.4 9.4 11.4 5.4C11.4 2.4 9 0 6 0Z" fill="#bcd32e" stroke="#1e293b" strokeWidth="1.8" />
          <circle cx="6" cy="5.4" r="2" fill="#1e293b" />
        </g>
      </svg>
    </div>
  )
}

function AiSeoIcon() {
  return (
    <div className="w-24 h-24 rounded-full bg-[#eaf3ff] border border-[#d0e4ff] flex items-center justify-center relative shadow-xs group-hover:scale-105 transition-transform duration-300">
      <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Monitor Screen */}
        <rect x="8" y="10" width="46" height="34" rx="4" fill="white" stroke="#1e293b" strokeWidth="2.5" />
        <line x1="31" y1="44" x2="31" y2="52" stroke="#1e293b" strokeWidth="3" />
        <line x1="20" y1="52" x2="42" y2="52" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />

        {/* Browser Top Bar & Store Grid */}
        <path d="M12 14H50V22H12V14Z" fill="#eaf3ff" stroke="#1e293b" strokeWidth="1.8" />
        <circle cx="17" cy="18" r="1.5" fill="#2196F3" />
        <circle cx="22" cy="18" r="1.5" fill="#2196F3" />
        <circle cx="27" cy="18" r="1.5" fill="#2196F3" />
        <line x1="33" y1="18" x2="46" y2="18" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" />

        {/* Magnifying Glass Overlay */}
        <circle cx="38" cy="32" r="7" stroke="#2196F3" strokeWidth="2.5" fill="#eaf3ff" />
        <line x1="43" y1="37" x2="49" y2="43" stroke="#2196F3" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  )
}

function EcommerceSeoIcon() {
  return (
    <div className="w-24 h-24 rounded-full bg-[#f2f9d8] border border-[#e2f2a8] flex items-center justify-center relative shadow-xs group-hover:scale-105 transition-transform duration-300">
      <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Laptop Frame */}
        <rect x="10" y="18" width="44" height="28" rx="3" fill="white" stroke="#1e293b" strokeWidth="2.5" />
        <line x1="6" y1="46" x2="58" y2="46" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />

        {/* Shopping Window / Cart */}
        <path d="M16 26H32V32H16V26Z" fill="#f2f9d8" stroke="#1e293b" strokeWidth="1.8" />
        <path d="M17 38H33L36 30H20L17 38Z" fill="#f2f9d8" stroke="#1e293b" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="21" cy="41" r="1.5" fill="#1e293b" />
        <circle cx="30" cy="41" r="1.5" fill="#1e293b" />

        {/* Dollar Badge Top Right */}
        <circle cx="43" cy="16" r="9" fill="#c5f015" stroke="#1e293b" strokeWidth="2" />
        <text x="43" y="20" textAnchor="middle" fontSize="11" fontWeight="900" fill="#1e293b">$</text>
      </svg>
    </div>
  )
}

function AiSeoServicesSection() {
  const {
    badge,
    titlePrefix,
    titleBlue,
    titleLime,
    descriptionPrefix,
    descriptionHighlight,
    descriptionSuffix,
    cards
  } = aiSeoServicesData

  return (
    <section className="mt-16 sm:mt-24 relative">
      {/* Subtle Polka Dots Decorator */}
      <div className="absolute top-12 left-0 opacity-20 pointer-events-none hidden lg:block">
        <div className="grid grid-cols-4 gap-2">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#0066ff]" />
          ))}
        </div>
      </div>
      <div className="absolute top-12 right-0 opacity-20 pointer-events-none hidden lg:block">
        <div className="grid grid-cols-4 gap-2">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#bcd32e]" />
          ))}
        </div>
      </div>

      {/* Section Header */}
      <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14 px-4">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-black tracking-wider uppercase mb-5">
          <Sparkles className="w-4 h-4 text-[#0066ff] animate-pulse" />
          <span className="bg-gradient-to-r from-[#0066ff] to-[#c5f015] bg-clip-text text-transparent">
            {badge}
          </span>
        </div>

        {/* Main Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black !text-[#0a0a0a] tracking-tight mb-4 leading-tight">
          {titlePrefix}
          <span className="text-[#2196F3]">{titleBlue}</span>
          {/* <span className="text-[#c5f015]">{titleLime}</span> */}
        </h2>

        {/* Two-tone Accent Line Divider */}
        <div className="flex items-center justify-center gap-1 my-5">
          <span className="w-12 h-1 bg-[#2196F3] rounded-full" />
          <span className="w-2.5 h-1 bg-[#2196F3] rounded-full" />
          <span className="w-2.5 h-1 bg-[#bcd32e] rounded-full" />
          <span className="w-12 h-1 bg-[#bcd32e] rounded-full" />
        </div>

        {/* Subtitle Paragraph */}
        <p className="text-[#555555] text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-medium">
          {descriptionPrefix}
          <strong className="text-[#2196F3] font-bold">{descriptionHighlight}</strong>
          {descriptionSuffix}
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 relative z-10">
        {cards.map((card) => {
          const isBlue = card.accentColor === 'blue'
          return (
            <div
              key={card.id}
              className="bg-white rounded-[28px] border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.09)] transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden flex flex-col justify-between p-6 sm:p-7 group"
            >
              {/* Corner Ribbon Badge */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden pointer-events-none z-10">
                <div
                  className={`absolute top-3 -right-7 w-28 py-1 text-center font-black text-xs sm:text-sm tracking-wider shadow-xs rotate-45 ${isBlue
                    ? 'bg-[#2196F3] text-white'
                    : 'bg-[#bcd32e] text-[#1e293b]'
                    }`}
                >
                  {card.number}
                </div>
              </div>

              {/* Icon & Title & Description */}
              <div className="flex flex-col items-center text-center mt-2">
                {card.iconType === 'National' && <NationalSeoIcon />}
                {card.iconType === 'Local' && <LocalSeoIcon />}
                {card.iconType === 'AiSeo' && <AiSeoIcon />}
                {card.iconType === 'Ecommerce' && <EcommerceSeoIcon />}

                {/* Accent Short Bar */}
                <div
                  className={`w-10 h-1 rounded-full my-5 ${isBlue ? 'bg-[#2196F3]' : 'bg-[#bcd32e]'
                    }`}
                />

                {/* Card Title */}
                <h3 className="text-2xl font-black !text-[#0a0a0a] tracking-tight mb-4">
                  {card.title}{' '}
                  <span className={isBlue ? 'text-[#2196F3]' : 'text-[#c5f015]'}>
                    {card.highlightTitle}
                  </span>
                </h3>

                {/* Description */}
                <p className="text-[#555555] text-sm leading-relaxed font-medium mb-6">
                  {card.description}
                </p>
              </div>

              {/* Action Button */}
              <a
                href={card.buttonLink}
                className={`w-full rounded-xl py-3 px-4 text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 transition-all duration-300 ${isBlue
                  ? 'bg-[#eaf3ff] text-[#2196F3] hover:bg-[#2196F3] hover:text-white'
                  : 'bg-[#f4f8d6] text-[#6f8500] hover:bg-[#bcd32e] hover:text-[#1e293b]'
                  }`}
              >
                <span>{card.buttonText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function PlatformSeoSection() {
  const { badge, titlePrefix, titleHighlight, description, platforms } = platformSeoSectionData

  return (
    <section className="mt-16 sm:mt-24 relative">
      {/* Background Soft Orbs Decorator */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#2196F3]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-10 -right-20 w-80 h-80 bg-[#c5f015]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 px-4">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#eef6ff] border border-[#2196F3]/30 text-[#2196F3] font-black text-xs tracking-wider uppercase mb-5 shadow-2xs">
          <div className="w-5 h-5 rounded-full bg-[#2196F3] text-white flex items-center justify-center">
            <Layers className="w-3 h-3 text-white" />
          </div>
          <span>{badge}</span>
        </div>

        {/* Main Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black !text-[#0a0a0a] tracking-tight mb-4 leading-tight">
          {titlePrefix}
          <span className="text-[#2196F3]">{titleHighlight}</span>
        </h2>

        {/* Two-tone Accent Line Divider with Dot */}
        <div className="flex items-center justify-center gap-1.5 my-4">
          <span className="w-10 h-1 bg-[#2196F3] rounded-full" />
          <span className="w-2.5 h-2.5 bg-[#c5f015] rounded-full" />
          <span className="w-10 h-1 bg-[#c5f015] rounded-full" />
        </div>

        {/* Subtitle Description */}
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-medium">
          {description}
        </p>
      </div>

      {/* 12 Platform Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 relative z-10">
        {platforms.map((card) => {
          const isBlue = card.accentColor === 'blue'
          return (
            <div
              key={card.id}
              className="bg-white rounded-2xl border border-slate-100 shadow-[0_8px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_35px_rgba(33,150,243,0.12)] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex items-center justify-center p-6 h-28 group"
            >
              {/* Left Vertical Accent Bar */}
              <div
                className={`absolute left-0 top-3 bottom-3 w-1.5 rounded-r-full transition-all duration-300 ${isBlue ? 'bg-[#2196F3]' : 'bg-[#c5f015]'
                  }`}
              />

              {/* Platform Logo / Content */}
              {card.type === 'react' ? (
                <div className="flex items-center gap-2.5">
                  <img src={card.image} alt={card.name} className="w-8 h-8" />
                  <span className="text-xl font-bold text-[#0a0a0a] tracking-tight">React JS</span>
                </div>
              ) : (
                <img
                  src={card.image}
                  alt={card.name}
                  className="max-h-12 max-w-[170px] object-contain group-hover:scale-105 transition-transform duration-300"
                />
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

function SeoApproachLeftIllustration() {
  const stats = [
    { value: '+120%', label: 'Organic Growth', icon: BarChart3 },
    { value: '3x', label: 'More Visibility', icon: Users },
    { value: 'Long-term', label: 'Results', icon: Rocket }
  ]

  return (
    <div className="w-full mt-4 space-y-6">
      {/* 3 Stat Cards Row */}
      <div className="grid grid-cols-3 gap-2.5 w-full">
        {stats.map((stat, i) => {
          const IconComp = stat.icon
          return (
            <div
              key={i}
              className="bg-white rounded-2xl p-3 border border-slate-100 shadow-2xs text-center flex flex-col items-center justify-between hover:shadow-md transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-xl bg-[#eef6ff] text-[#2196F3] flex items-center justify-center mb-1.5">
                <IconComp className="w-4 h-4 text-[#2196F3]" />
              </div>
              <span className="text-sm sm:text-base font-black text-slate-900 leading-none mb-1">{stat.value}</span>
              <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 leading-tight line-clamp-1">{stat.label}</span>
            </div>
          )
        })}
      </div>

      {/* Grow Your Business CTA Button */}
      <button className="w-full sm:w-auto bg-gradient-to-r from-[#2196F3] to-[#0066ff] hover:from-[#0066ff] hover:to-[#2196F3] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group">
        <span>Grow Your Business with SEO</span>
        <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  )
}

function SeoApproachWheel({ steps, activeHoverIndex, setActiveHoverIndex }) {
  const scopeIconMap = { Search, Target, Users, Settings, TrendingUp, ShieldCheck }

  const cx = 240
  const cy = 240
  const rout = 185
  const rin = 105
  const rline = 205

  return (
    <div className="relative w-full max-w-[520px] mx-auto flex items-center justify-center p-2">
      <svg className="w-full h-auto overflow-visible" viewBox="0 0 480 480">
        {/* Outer Thin 360-degree Connecting Circle */}
        <circle
          cx={cx}
          cy={cy}
          r={rline}
          fill="none"
          stroke="#cbd5e1"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        {/* Outer Clockwise Arrowhead Indicator */}
        <path
          d={`M ${cx - rline * Math.cos(Math.PI / 4)} ${cy - rline * Math.sin(Math.PI / 4)} l -6 -6 m 6 6 l -6 6`}
          stroke="#2196F3"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* 6 Full Donut Slices */}
        {steps.map((step, idx) => {
          const startDeg = -120 + idx * 60 + 1.5
          const endDeg = -120 + (idx + 1) * 60 - 1.5
          const midDeg = (startDeg + endDeg) / 2

          const r1 = (startDeg * Math.PI) / 180
          const r2 = (endDeg * Math.PI) / 180
          const rMid = (midDeg * Math.PI) / 180

          const x1 = cx + rout * Math.cos(r1)
          const y1 = cy + rout * Math.sin(r1)
          const x2 = cx + rout * Math.cos(r2)
          const y2 = cy + rout * Math.sin(r2)

          const x3 = cx + rin * Math.cos(r2)
          const y3 = cy + rin * Math.sin(r2)
          const x4 = cx + rin * Math.cos(r1)
          const y4 = cy + rin * Math.sin(r1)

          // Math for Number Label & Icon & Outer Node Dot
          const xNum = cx + (rout - 24) * Math.cos(rMid)
          const yNum = cy + (rout - 24) * Math.sin(rMid)

          const xIcon = cx + (rin + 28) * Math.cos(rMid)
          const yIcon = cy + (rin + 28) * Math.sin(rMid)

          const xNode = cx + rline * Math.cos(rMid)
          const yNode = cy + rline * Math.sin(rMid)

          const isHovered = activeHoverIndex === idx
          const IconComponent = scopeIconMap[step.iconName] || Search

          return (
            <g
              key={step.number}
              onMouseEnter={() => setActiveHoverIndex(idx)}
              onMouseLeave={() => setActiveHoverIndex(null)}
              className="cursor-pointer transition-transform duration-300 group"
              style={{
                transformOrigin: `${cx}px ${cy}px`,
                transform: isHovered ? 'scale(1.04)' : 'scale(1)'
              }}
            >
              {/* Slice Arc Path */}
              <path
                d={`M ${x1} ${y1} A ${rout} ${rout} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${rin} ${rin} 0 0 0 ${x4} ${y4} Z`}
                fill={step.color}
                opacity={isHovered ? 1 : 0.92}
                className="transition-opacity duration-300 drop-shadow-sm"
              />

              {/* Number Label */}
              <text
                x={xNum}
                y={yNum}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#ffffff"
                fontSize="16"
                fontWeight="900"
              >
                {step.number}
              </text>

              {/* White Icon inside Slice */}
              <g transform={`translate(${xIcon - 11}, ${yIcon - 11})`}>
                <IconComponent className="w-5 h-5 text-white" strokeWidth="2.2" />
              </g>

              {/* Outer Connecting Line Dot Node */}
              <circle
                cx={xNode}
                cy={yNode}
                r={isHovered ? '7' : '5.5'}
                fill={step.color}
                stroke="#ffffff"
                strokeWidth="2.5"
                className="transition-all duration-300"
              />
            </g>
          )
        })}

        {/* Center Circular Badge */}
        <circle cx={cx} cy={cy} r={rin - 4} fill="#ffffff" filter="drop-shadow(0px 12px 25px rgba(0,0,0,0.08))" />
        <circle cx={cx} cy={cy} r={rin - 4} fill="none" stroke="#f1f5f9" strokeWidth="2" />

        {/* Center Top Chart Icon */}
        <g transform={`translate(${cx - 12}, ${cy - 62})`}>
          <BarChart3 className="w-6 h-6 text-[#2196F3]" strokeWidth="2.5" />
        </g>

        {/* Center Text: SEO APPROACH */}
        <text x={cx} y={cy - 10} textAnchor="middle" fill="#0f172a" fontSize="28" fontWeight="900" letterSpacing="-0.5">
          SEO
        </text>
        <text x={cx} y={cy + 14} textAnchor="middle" fill="#64748b" fontSize="11" fontWeight="800" letterSpacing="3">
          APPROACH
        </text>

        {/* Bottom Curved Line Accent */}
        <path
          d={`M ${cx - 20} ${cy + 26} Q ${cx} ${cy + 32} ${cx + 20} ${cy + 26}`}
          fill="none"
          stroke="#2196F3"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

function SeoApproachSection() {
  const [activeHoverIndex, setActiveHoverIndex] = useState(null)

  const scopeIconMap = {
    Search,
    Target,
    Users,
    Settings,
    TrendingUp,
    ShieldCheck
  }

  return (
    <section className="mt-16 sm:mt-24 relative">
      {/* Background Soft Orbs */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-10 right-0 w-80 h-80 bg-[#c5f015]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Container Card */}
      <div className="bg-[#f8fafc]/80 border border-slate-100 rounded-[36px] sm:rounded-[44px] p-6 sm:p-10 lg:p-12 shadow-[0_15px_45px_rgba(0,0,0,0.03)] relative overflow-hidden">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">

          {/* LEFT COLUMN: Title & Description & 3 Stat Cards & CTA (Span 4) */}
          <div className="lg:col-span-4 flex flex-col items-start text-left space-y-4">

            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 text-xs font-extrabold tracking-wider uppercase shadow-2xs text-slate-700">
              <div className="w-6 h-6 rounded-full bg-[#eef6ff] text-[#2196F3] flex items-center justify-center">
                <BarChart3 className="w-3.5 h-3.5 text-[#2196F3]" />
              </div>
              <span>{seoApproachData.badge || 'OUR SEO PROCESS'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-black !text-[#0a0a0a] tracking-tight leading-[1.18]">
              {seoApproachData.titlePrefix}{seoApproachData.titleMiddle}
              <span className="text-[#2196F3]">{seoApproachData.titleHighlightBlue}</span>
              <span className="text-[#c5f015]">{seoApproachData.titleHighlightLime}</span>
            </h2>

            {/* Two-tone Accent Line Divider */}
            <div className="flex items-center gap-1.5 my-1">
              <span className="w-10 h-1 bg-[#2196F3] rounded-full" />
              <span className="w-2.5 h-2.5 bg-[#c5f015] rounded-full" />
              <span className="w-10 h-1 bg-[#c5f015] rounded-full" />
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              {seoApproachData.description}
            </p>

            <SeoApproachLeftIllustration />
          </div>

          {/* MIDDLE COLUMN: Interactive 360 Wheel Graphic (Span 4) */}
          <div className="lg:col-span-4 flex justify-center items-center">
            <SeoApproachWheel
              steps={seoApproachData.steps}
              activeHoverIndex={activeHoverIndex}
              setActiveHoverIndex={setActiveHoverIndex}
            />
          </div>

          {/* RIGHT COLUMN: 6 Step Cards List (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-3.5">
            {seoApproachData.steps.map((step, idx) => {
              const isHovered = activeHoverIndex === idx
              const IconComp = scopeIconMap[step.iconName] || Search

              return (
                <div
                  key={step.number}
                  onMouseEnter={() => setActiveHoverIndex(idx)}
                  onMouseLeave={() => setActiveHoverIndex(null)}
                  className={`bg-white rounded-2xl p-3.5 border transition-all duration-300 flex items-center justify-between gap-3 cursor-pointer group relative overflow-hidden shadow-2xs ${isHovered
                    ? 'border-[#2196F3] shadow-md -translate-y-0.5'
                    : 'border-slate-100 hover:border-slate-200'
                    }`}
                >
                  {/* Left Solid Color Accent Bar */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300"
                    style={{ backgroundColor: step.color }}
                  />

                  {/* Left Pill Badge Number & Title */}
                  <div className="flex items-center gap-3 pl-2">
                    {/* Number Badge */}
                    <div
                      className="w-8 h-8 rounded-xl font-black text-xs flex items-center justify-center shrink-0"
                      style={{ backgroundColor: step.bgColor, color: step.color }}
                    >
                      {step.number}
                    </div>

                    {/* Circle Icon Badge */}
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-slate-100"
                      style={{ backgroundColor: step.bgColor, color: step.color }}
                    >
                      <IconComp className="w-4 h-4" style={{ color: step.color }} />
                    </div>

                    {/* Step Title & Subtitle */}
                    <div className="text-left">
                      <h4 className="text-sm font-extrabold !text-slate-900 leading-snug group-hover:text-[#2196F3] transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium line-clamp-1 mt-0.5">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Arrow Circle Badge */}
                  <div className="w-7 h-7 rounded-full bg-slate-50 text-slate-400 group-hover:bg-[#2196F3] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}

function SeoScopeIllustration() {
  return (
    <div className="relative w-full max-w-sm mx-auto flex items-center justify-center p-4">
      {/* Background Radial Glow */}
      <div className="absolute w-64 h-64 bg-blue-100/60 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Background Dashed Rings */}
      <div className="absolute w-72 h-72 border border-blue-200/50 rounded-full border-dashed animate-spin-slow pointer-events-none" />

      {/* Main Report Document Card */}
      <div className="relative z-10 w-64 bg-white rounded-2xl border border-slate-100 shadow-[0_15px_40px_rgba(33,150,243,0.12)] p-5 space-y-4 hover:shadow-[0_20px_50px_rgba(33,150,243,0.18)] transition-all duration-300">

        {/* Top Bar with Pie Icon */}
        <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
          <div className="w-9 h-9 rounded-xl bg-[#eef6ff] text-[#2196F3] flex items-center justify-center shrink-0">
            <BarChart3 className="w-5 h-5 text-[#2196F3]" />
          </div>
          <div className="space-y-1 flex-1">
            <div className="h-2.5 bg-slate-200 rounded-full w-20" />
            <div className="h-2 bg-slate-100 rounded-full w-12" />
          </div>
        </div>

        {/* Middle Bar Chart Representation */}
        <div className="flex items-end justify-between gap-2 h-20 pt-2 px-2 border-b border-slate-100">
          <div className="w-4 bg-slate-200 rounded-t-md h-[40%]" />
          <div className="w-4 bg-[#c5f015] rounded-t-md h-[75%]" />
          <div className="w-4 bg-[#2196F3] rounded-t-md h-[100%]" />
          <div className="w-4 bg-slate-200 rounded-t-md h-[60%]" />
        </div>

        {/* Bottom Lines */}
        <div className="space-y-2 pt-1">
          <div className="h-2 bg-slate-200 rounded-full w-full" />
          <div className="h-2 bg-slate-100 rounded-full w-3/4" />
        </div>
      </div>

      {/* Floating Top-Right Growth Badge */}
      <div className="absolute -top-2 -right-2 z-20 bg-white rounded-xl p-2.5 shadow-lg border border-slate-100 flex items-center gap-2 animate-bounce-slow">
        <div className="w-7 h-7 rounded-lg bg-[#eef6ff] text-[#2196F3] flex items-center justify-center">
          <TrendingUp className="w-4 h-4 text-[#2196F3]" />
        </div>
        <div className="text-[11px] font-black text-slate-800">
          +145% <span className="text-slate-400 font-bold block text-[9px]">Growth</span>
        </div>
      </div>

      {/* Floating Bottom-Left Checkmark Badge */}
      <div className="absolute bottom-4 -left-3 z-20 bg-white rounded-xl p-2.5 shadow-lg border border-slate-100 flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-[#c5f015] text-slate-900 flex items-center justify-center font-black">
          ✓
        </div>
        <span className="text-[11px] font-extrabold text-slate-800">Audit Passed</span>
      </div>

      {/* Glass Magnifying Glass Overlay */}
      <div className="absolute right-4 bottom-8 z-30 transform translate-x-2 translate-y-2">
        <div className="w-16 h-16 rounded-full border-4 border-[#2196F3] bg-white/40 backdrop-blur-xs flex items-center justify-center shadow-xl">
          <Search className="w-8 h-8 text-[#2196F3]" />
        </div>
      </div>
    </div>
  )
}

function SeoScopeSection() {
  const [activeTabId, setActiveTabId] = useState(seoScopeData.tabs[0].id)
  const activeTab = seoScopeData.tabs.find((t) => t.id === activeTabId) || seoScopeData.tabs[0]

  const scopeIconMap = {
    Search,
    Target,
    Users,
    FileText,
    Settings,
    Sparkles,
    Code,
    ShieldCheck,
    BarChart3
  }

  const ActiveIcon = scopeIconMap[activeTab.iconName] || Search

  return (
    <section className="mt-16 sm:mt-24 relative">
      {/* Background Decorative Soft Orbs */}
      <div className="absolute top-1/2 -left-24 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-10 right-0 w-80 h-80 bg-[#c5f015]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 px-4">
        {/* Main Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black !text-[#0a0a0a] tracking-tight mb-4 leading-tight">
          {seoScopeData.titlePrefix}
          <span className="text-[#2196F3]">{seoScopeData.titleHighlight}</span>
          {seoScopeData.titleSuffix}
        </h2>

        {/* Two-tone Accent Line Divider with Dot */}
        <div className="flex items-center justify-center gap-1.5 my-4">
          <span className="w-10 h-1 bg-[#2196F3] rounded-full" />
          <span className="w-2.5 h-2.5 bg-[#c5f015] rounded-full" />
          <span className="w-10 h-1 bg-[#c5f015] rounded-full" />
        </div>
      </div>

      {/* Main Grid: Left Tabs Menu + Right Content Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">

        {/* LEFT COLUMN: Vertical Navigation Menu (4 Spans on Desktop) */}
        <div className="lg:col-span-4 flex flex-col gap-2.5">
          {seoScopeData.tabs.map((tab) => {
            const isActive = tab.id === activeTabId
            const TabIcon = scopeIconMap[tab.iconName] || Search

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`relative w-full text-left transition-all duration-300 p-3.5 sm:p-4 rounded-2xl flex items-center justify-between group font-bold text-sm sm:text-base cursor-pointer ${isActive
                  ? 'bg-[#2196F3] text-white shadow-[0_10px_25px_rgba(33,150,243,0.3)] z-20'
                  : 'bg-white text-slate-800 hover:bg-slate-50 border border-slate-100 shadow-2xs'
                  }`}
              >
                {/* Left Icon Badge */}
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${isActive
                      ? 'bg-white text-[#2196F3]'
                      : 'bg-[#eef6ff] text-[#2196F3] group-hover:bg-[#2196F3] group-hover:text-white'
                      }`}
                  >
                    <TabIcon className="w-4 h-4" />
                  </div>
                  <span className="truncate">{tab.tabTitle}</span>
                </div>

                {/* Right Arrow / Pointer Indicator */}
                {isActive ? (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent border-l-[12px] border-l-[#2196F3] pointer-events-none" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-[#2196F3] group-hover:translate-x-1 transition-transform" />
                )}
              </button>
            )
          })}
        </div>

        {/* RIGHT COLUMN: Active Tab Content Display Card (8 Spans on Desktop) */}
        <div className="lg:col-span-8 bg-white border border-slate-100 rounded-[32px] p-6 sm:p-10 lg:p-12 shadow-[0_15px_45px_rgba(33,150,243,0.07)] min-h-[480px] flex flex-col justify-between">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Text Content (Span 7) */}
            <div className="lg:col-span-7 space-y-6">

              {/* Header Title with Big Icon */}
              <div className="flex items-center gap-4 mb-2">
                <div className="w-14 h-14 rounded-2xl bg-[#eef6ff] border border-[#2196F3]/20 text-[#2196F3] flex items-center justify-center shrink-0 shadow-2xs">
                  <ActiveIcon className="w-7 h-7 text-[#2196F3]" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black !text-slate-900 tracking-tight">
                    {activeTab.contentTitlePrefix}
                    <span className="text-[#2196F3]">{activeTab.contentTitleHighlight}</span>
                  </h3>
                  <div className="w-14 h-1 bg-[#c5f015] rounded-full mt-2" />
                </div>
              </div>

              {/* Paragraphs */}
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                {activeTab.paragraphs.map((pText, idx) => (
                  <p key={idx}>{pText}</p>
                ))}
              </div>

            </div>

            {/* Graphic Illustration (Span 5) */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <SeoScopeIllustration />
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

function SeoExplainedIllustration() {
  return (
    <div className="relative w-full max-w-sm mx-auto flex items-center justify-center p-4">
      {/* Soft Blue Radial Background */}
      <div className="absolute w-64 h-64 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Browser Window Box */}
      <div className="relative z-10 w-full bg-white rounded-3xl border border-slate-100 shadow-[0_15px_40px_rgba(33,150,243,0.12)] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_rgba(33,150,243,0.18)]">

        {/* Blue Browser Header Bar */}
        <div className="bg-[#4285f4] p-3 flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-white/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/80" />
        </div>

        {/* Search Bar Row */}
        <div className="p-4 space-y-5">
          <div className="bg-[#edf3fe] rounded-full p-2.5 flex items-center justify-between">
            <div className="h-2.5 bg-white/80 rounded-full w-28 ml-2" />
            <div className="w-8 h-8 rounded-full bg-[#c5f015] flex items-center justify-center shadow-xs">
              <Search className="w-4 h-4 text-slate-900" />
            </div>
          </div>

          {/* Center SEO Big Text & Rising Bars */}
          <div className="pt-2 pb-4 text-center">
            <span className="text-4xl font-black text-[#2196F3] tracking-wider block mb-4">SEO</span>

            {/* Rising Bar Chart Graphic */}
            <div className="relative flex items-end justify-center gap-3 h-16 max-w-[180px] mx-auto">
              <div className="w-4 bg-[#2196F3]/40 rounded-t-sm h-[30%]" />
              <div className="w-4 bg-[#2196F3]/70 rounded-t-sm h-[50%]" />
              <div className="w-4 bg-[#c5f015] rounded-t-sm h-[75%]" />
              <div className="w-4 bg-[#2196F3] rounded-t-sm h-[100%]" />

              {/* Upward Green Arrow */}
              <svg className="absolute -top-3 left-0 w-full h-full pointer-events-none" viewBox="0 0 100 50">
                <path d="M10,40 Q40,30 85,8" fill="none" stroke="#a3e635" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M75,8 L85,8 L85,18" fill="none" stroke="#a3e635" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Polka Dots Decorator in Corner */}
        <div className="absolute bottom-3 left-3 opacity-20 pointer-events-none">
          <div className="grid grid-cols-4 gap-1">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-[#2196F3]" />
            ))}
          </div>
        </div>

      </div>

      {/* Floating Bottom-Right Target Circle Badge Overlay */}
      <div className="absolute -bottom-3 -right-3 z-20 w-20 h-20 rounded-full border-4 border-white bg-[#eef6ff] shadow-xl flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-[#2196F3] bg-white flex items-center justify-center">
          <Target className="w-6 h-6 text-[#2196F3]" />
        </div>
      </div>

    </div>
  )
}

function SeoExplainedSection() {
  const [activeTabId, setActiveTabId] = useState(seoExplainedData.tabs[3].id)
  const activeTab = seoExplainedData.tabs.find((t) => t.id === activeTabId) || seoExplainedData.tabs[3]

  const explainedIconMap = {
    HelpCircle,
    Settings,
    User,
    Layers,
    DollarSign,
    Search,
    Award,
    TrendingUp,
    Globe,
    Target,
    ShieldCheck,
    ShoppingCart,
    Users,
    Sparkles,
    FileText,
    Link: LinkIcon
  }

  return (
    <section className="mt-16 sm:mt-24 relative">
      {/* Section Background Soft Glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#c5f015]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Container Card */}
      <div className="bg-[#f4f8fe]/60 border border-slate-100/80 rounded-[36px] sm:rounded-[44px] p-6 sm:p-10 lg:p-12 shadow-[0_15px_45px_rgba(0,0,0,0.03)] relative overflow-hidden">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10 px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black !text-[#0a0a0a] tracking-tight mb-3 leading-tight">
            {seoExplainedData.titlePrefix}
            <span className="text-[#2196F3]">{seoExplainedData.titleHighlight}</span>
          </h2>

          {/* Two-tone Accent Line Divider */}
          <div className="flex items-center justify-center gap-1.5 my-4">
            <span className="w-10 h-1 bg-[#2196F3] rounded-full" />
            <span className="w-2.5 h-2.5 bg-[#c5f015] rounded-full" />
            <span className="w-10 h-1 bg-[#c5f015] rounded-full" />
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-medium">
            {seoExplainedData.description}
          </p>
        </div>

        {/* TOP HORIZONTAL NAVIGATION TABS BAR */}
        <div className="bg-white rounded-2xl p-2 border border-slate-100 shadow-sm mb-8 overflow-x-auto">
          <div className="flex items-center justify-between min-w-max gap-2">
            {seoExplainedData.tabs.map((tab) => {
              const isActive = tab.id === activeTabId
              const TabIcon = explainedIconMap[tab.iconName] || HelpCircle

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`flex items-center gap-3 px-5 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all duration-300 cursor-pointer ${isActive
                      ? 'bg-[#2196F3] text-white shadow-md'
                      : 'bg-white text-slate-700 hover:bg-slate-50 hover:text-[#2196F3]'
                    }`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${isActive
                        ? 'bg-white/20 text-white'
                        : tab.isLimeIcon
                          ? 'bg-[#f7fce5] text-[#84cc16]'
                          : 'bg-[#eef6ff] text-[#2196F3]'
                      }`}
                  >
                    <TabIcon className="w-4 h-4" />
                  </div>
                  <span>{tab.tabTitle}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* MAIN CONTENT DISPLAY CARD (BELOW TAB BAR) */}
        <div className="bg-white rounded-[32px] border border-slate-100 p-6 sm:p-10 shadow-[0_15px_40px_rgba(33,150,243,0.06)] relative overflow-hidden">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* LEFT COLUMN: Illustration Graphic (Span 4) */}
            <div className="lg:col-span-4 flex justify-center items-center">
              <SeoExplainedIllustration />
            </div>

            {/* RIGHT COLUMN: Content & Items List (Span 8) */}
            <div className="lg:col-span-8 space-y-6 text-left">

              {/* Title & Divider */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-black !text-slate-900 tracking-tight">
                  {activeTab.contentTitlePrefix}
                  <span className="text-[#2196F3]">{activeTab.contentTitleHighlight}</span>
                </h3>
                <div className="flex items-center gap-1.5 mt-2.5">
                  <span className="w-10 h-1 bg-[#2196F3] rounded-full" />
                  <span className="w-2.5 h-2.5 bg-[#c5f015] rounded-full" />
                </div>
              </div>

              {/* Intro Paragraph */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                {activeTab.intro}
              </p>

              {/* Vertical Items List connected with dashed line */}
              <div className="relative space-y-6 pt-2">
                {/* Vertical Line Connector */}
                <div className="absolute left-5 top-4 bottom-4 w-0.5 bg-slate-200 border-l border-dashed border-slate-300 -z-0" />

                {activeTab.items.map((item, idx) => {
                  const ItemIcon = explainedIconMap[item.iconName] || FileText
                  const isLime = item.color === 'lime'

                  return (
                    <div key={idx} className="relative z-10 flex items-start gap-4 group">
                      {/* Left Circle Icon Badge */}
                      <div
                        className={`w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-transform ${isLime
                            ? 'bg-[#f7fce5] text-[#84cc16]'
                            : 'bg-[#eef6ff] text-[#2196F3]'
                          }`}
                      >
                        <ItemIcon className="w-5 h-5" />
                      </div>

                      {/* Text */}
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium pt-1">
                        <strong
                          className={`font-black ${isLime ? 'text-[#84cc16]' : 'text-[#2196F3]'
                            }`}
                        >
                          {item.label}{' '}
                        </strong>
                        {item.description}
                      </p>
                    </div>
                  )
                })}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

function SeoFaqSection() {
  const [openFaqId, setOpenFaqId] = useState('faq-1')

  const faqIconMap = {
    FileText,
    Clock,
    Globe,
    BarChart3,
    Users,
    Rocket,
    Star
  }

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id)
  }

  return (
    <section className="mt-16 sm:mt-24 relative">
      {/* Background Radial Orbs */}
      <div className="absolute top-1/4 -left-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#c5f015]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Card Container */}
      <div className="bg-[#f8fafc]/80 border border-slate-100 rounded-[36px] sm:rounded-[44px] p-6 sm:p-10 lg:p-14 shadow-[0_15px_45px_rgba(0,0,0,0.03)] relative overflow-hidden">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start relative z-10">

          {/* LEFT COLUMN: Title & Action Buttons (Span 5) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left space-y-6 lg:sticky lg:top-28">

            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 text-xs font-extrabold tracking-wider uppercase shadow-2xs text-slate-700">
              <div className="w-6 h-6 rounded-full bg-blue-50 text-[#2196F3] flex items-center justify-center">
                <HelpCircle className="w-3.5 h-3.5 text-[#2196F3]" />
              </div>
              <span>{seoFaqData.badge}</span>
            </div>

            {/* Polka Dots Decorator */}
            <div className="opacity-20 pointer-events-none mb-2">
              <div className="grid grid-cols-6 gap-1.5">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#2196F3]" />
                ))}
              </div>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-black !text-[#0a0a0a] tracking-tight leading-[1.15]">
              {seoFaqData.titleLine1} <br />
              {seoFaqData.titleLine2} <br />
              <span className="text-[#2196F3]">{seoFaqData.titleHighlight}</span>
            </h2>

            {/* Two-tone Accent Line Divider */}
            <div className="flex items-center gap-1.5 my-1">
              <span className="w-10 h-1 bg-[#2196F3] rounded-full" />
              <span className="w-2.5 h-2.5 bg-[#c5f015] rounded-full" />
              <span className="w-10 h-1 bg-[#c5f015] rounded-full" />
            </div>

            {/* Subtitle Description */}
            <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-md">
              {seoFaqData.description}
            </p>

            {/* Action Buttons Row */}
            <div className="flex items-center gap-3 flex-wrap pt-3 w-full">
              <a
                href="#contact"
                className="bg-[#2196F3] hover:bg-[#0066ff] text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>{seoFaqData.primaryButtonText}</span>
              </a>

              <a
                href="#all-faqs"
                className="bg-white hover:bg-slate-50 text-[#2196F3] border border-[#2196F3]/40 font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-2xs hover:shadow-xs transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <span>{seoFaqData.secondaryButtonText}</span>
                <ArrowRight className="w-4 h-4 text-[#2196F3]" />
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive FAQ Accordion List (Span 7) */}
          <div className="lg:col-span-7 flex flex-col gap-3.5 w-full">
            {seoFaqData.faqs.map((faq) => {
              const isOpen = openFaqId === faq.id
              const FaqIcon = faqIconMap[faq.iconName] || FileText

              return (
                <div
                  key={faq.id}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden shadow-2xs ${isOpen
                      ? 'border-[#2196F3]/40 shadow-md'
                      : 'border-slate-100 hover:border-slate-200'
                    }`}
                >
                  {/* Accordion Item Header Button */}
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left cursor-pointer group"
                  >
                    <div className="flex items-center gap-3.5">
                      {/* Left Icon Circle */}
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen
                            ? 'bg-[#2196F3] text-white'
                            : 'bg-[#eef6ff] text-[#2196F3] group-hover:bg-[#2196F3] group-hover:text-white'
                          }`}
                      >
                        {isOpen ? (
                          <Minus className="w-4 h-4 text-white stroke-[3]" />
                        ) : (
                          <FaqIcon className="w-4 h-4" />
                        )}
                      </div>

                      {/* Question Text */}
                      <h4 className="text-sm sm:text-base font-extrabold !text-slate-900 leading-snug group-hover:text-[#2196F3] transition-colors">
                        {faq.question}
                      </h4>
                    </div>

                    {/* Right Expand Icon */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen
                          ? 'bg-transparent text-transparent'
                          : 'bg-[#eef6ff] text-[#2196F3] group-hover:bg-[#2196F3] group-hover:text-white'
                        }`}
                    >
                      {!isOpen && <Plus className="w-4 h-4 stroke-[2.5]" />}
                    </div>
                  </button>

                  {/* Accordion Item Expanded Content */}
                  {isOpen && (
                    <div className="bg-[#f4f8fe]/80 p-5 border-t border-slate-100/80 flex items-start gap-4 animate-fadeIn">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-blue-100 text-[#2196F3] flex items-center justify-center shrink-0 shadow-2xs">
                        <FaqIcon className="w-6 h-6 text-[#2196F3]" />
                      </div>
                      <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed pt-1">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}

function SeoCtaSection() {
  const [websiteUrl, setWebsiteUrl] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (websiteUrl.trim()) {
      alert(`Thank you! We will analyze ${websiteUrl} and generate your custom SEO Growth Plan.`)
      setWebsiteUrl('')
    }
  }

  return (
    <section className="mt-16 sm:mt-24 relative">
      {/* Container Box */}
      <div className="bg-white border border-slate-100 rounded-[36px] sm:rounded-[44px] p-6 sm:p-10 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.04)] relative overflow-hidden">

        {/* Background Arcs & Decorative Orbs */}
        <div className="absolute -top-32 -right-32 w-[550px] h-[550px] rounded-full border-[28px] border-[#2196F3]/15 pointer-events-none -z-0" />
        <div className="absolute -top-40 -right-40 w-[650px] h-[650px] rounded-full border-[3px] border-[#c5f015]/60 pointer-events-none -z-0" />
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">

          {/* LEFT COLUMN: Form & Content (Span 7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">

            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-xs font-bold tracking-wider uppercase shadow-2xs">
              <div className="w-6 h-6 rounded-full bg-[#2196F3] text-white flex items-center justify-center">
                <BarChart3 className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-slate-700 font-extrabold">{seoCtaSectionData.badge}</span>
              <span className="text-slate-300">|</span>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#2196F3]" />
                <span className="w-2 h-2 rounded-full bg-[#c5f015]" />
              </div>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black !text-[#0a0a0a] tracking-tight leading-[1.15]">
              {seoCtaSectionData.titlePrefix}
              <span className="text-[#2196F3]">{seoCtaSectionData.titleHighlight}</span>
              {seoCtaSectionData.titleSuffix}
            </h2>

            {/* Accent Line Divider */}
            <div className="flex items-center gap-1.5 my-1">
              <span className="w-12 h-1 bg-[#2196F3] rounded-full" />
              <span className="w-2.5 h-2.5 bg-[#2196F3] rounded-full" />
              <span className="w-12 h-1 bg-[#c5f015] rounded-full" />
            </div>

            {/* Subtitle Description */}
            <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed max-w-xl">
              {seoCtaSectionData.descriptionPrefix}
              <strong className="text-[#84cc16] font-black underline decoration-[#c5f015]/60 underline-offset-4">
                {seoCtaSectionData.descriptionHighlight}
              </strong>
            </p>

            {/* Website Input & CTA Button Form */}
            <form onSubmit={handleSubmit} className="w-full max-w-xl pt-2">
              <div className="bg-[#f0f4f9] p-2 rounded-2xl border border-slate-200/80 flex flex-col sm:flex-row items-center gap-2 shadow-inner">
                <div className="flex items-center gap-3 px-4 py-2.5 flex-1 w-full">
                  <Globe className="w-5 h-5 text-[#2196F3] shrink-0" />
                  <input
                    type="url"
                    required
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder={seoCtaSectionData.inputPlaceholder}
                    className="w-full bg-transparent text-slate-900 placeholder-slate-400 font-semibold text-sm sm:text-base outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#2196F3] hover:bg-[#0066ff] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-7 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                >
                  <span>{seoCtaSectionData.buttonText}</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </form>

            {/* Bottom Trust Features Row */}
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap pt-2 text-xs sm:text-sm font-bold text-slate-600">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-50 text-[#2196F3] flex items-center justify-center">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span>No Commitment</span>
              </div>

              <span className="text-slate-200">|</span>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#f7fce5] text-[#84cc16] flex items-center justify-center">
                  <Zap className="w-3.5 h-3.5" />
                </div>
                <span>Quick & Easy</span>
              </div>

              <span className="text-slate-200">|</span>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-50 text-[#2196F3] flex items-center justify-center">
                  <Lock className="w-3.5 h-3.5" />
                </div>
                <span>100% Secure</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Image & Floating Badges (Span 5) */}
          <div className="lg:col-span-5 relative flex justify-center items-end min-h-[380px] lg:min-h-[440px] pt-6 lg:pt-0">

            {/* Main Person Image */}
            <img
              src={ctaImage}
              alt="AI + SEO Experts"
              className="w-full max-w-md lg:max-w-none h-auto object-contain relative z-10 drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
            />

            {/* Top-Left Floating Growth Analytics Card */}
            <div className="absolute top-4 left-0 sm:left-4 z-20 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 space-y-2 max-w-[170px] animate-bounce-slow">
              <div className="flex items-center justify-between text-[11px] font-bold text-slate-500">
                <span>SEO Growth</span>
                <div className="w-6 h-6 rounded-full bg-[#c5f015] text-slate-900 flex items-center justify-center">
                  <Target className="w-3.5 h-3.5 text-slate-900" />
                </div>
              </div>

              {/* Rising Mini Bars */}
              <div className="flex items-end gap-1.5 h-10 pt-1">
                <div className="w-2.5 bg-blue-100 rounded-t-xs h-[30%]" />
                <div className="w-2.5 bg-blue-200 rounded-t-xs h-[50%]" />
                <div className="w-2.5 bg-blue-400 rounded-t-xs h-[75%]" />
                <div className="w-2.5 bg-[#c5f015] rounded-t-xs h-[100%]" />
              </div>

              <div className="pt-1 border-t border-slate-100">
                <span className="text-base font-black text-[#2196F3] block leading-none">+156%</span>
                <span className="text-[10px] text-slate-400 font-extrabold">Growth</span>
              </div>
            </div>

            {/* Bottom-Left Solid Lime Green Arrow Badge */}
            <div className="absolute bottom-6 left-6 z-20 w-16 h-16 rounded-full bg-[#c5f015] shadow-xl flex items-center justify-center border-4 border-white animate-pulse">
              <TrendingUp className="w-8 h-8 text-slate-950" />
            </div>

            {/* Polka Dots Decorator */}
            <div className="absolute top-12 left-12 opacity-25 pointer-events-none">
              <div className="grid grid-cols-4 gap-1.5">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#2196F3]" />
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

function SeoBenefitsSection() {
  const benefitIconMap = {
    Eye,
    UserCheck,
    TrendingUp,
    Target
  }

  return (
    <section className="mt-16 sm:mt-24 relative">
      {/* Background Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#c5f015]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Card Container */}
      <div className="bg-[#f8fafc]/80 border border-slate-100 rounded-[36px] sm:rounded-[44px] p-6 sm:p-10 lg:p-12 shadow-[0_15px_45px_rgba(0,0,0,0.03)] relative overflow-hidden">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 px-4">

          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200/80 text-xs font-bold tracking-wider uppercase mb-5 shadow-2xs">
            <div className="w-6 h-6 rounded-full bg-[#2196F3] text-white flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-[#84cc16] font-extrabold">{seoBenefitsData.badge}</span>
            <span className="text-slate-300">|</span>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#2196F3]" />
              <span className="w-2 h-2 rounded-full bg-[#c5f015]" />
            </div>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black !text-[#0a0a0a] tracking-tight mb-3 leading-tight">
            {seoBenefitsData.titlePrefix}
            <span className="text-[#2196F3]">{seoBenefitsData.titleHighlight}</span>
          </h2>

          {/* Two-tone Accent Line Divider */}
          <div className="flex items-center justify-center gap-1.5 my-4">
            <span className="w-10 h-1 bg-[#2196F3] rounded-full" />
            <span className="w-2.5 h-2.5 bg-[#c5f015] rounded-full" />
            <span className="w-10 h-1 bg-[#c5f015] rounded-full" />
          </div>

          {/* Subtitle Description */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-medium">
            {seoBenefitsData.description}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {seoBenefitsData.cards.map((card) => {
            const IconComp = benefitIconMap[card.iconName] || Eye

            return (
              <div
                key={card.number}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(33,150,243,0.08)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1"
              >
                <div>
                  {/* Top Row: Icon Box & Number Badge */}
                  <div className="flex items-start justify-between mb-6">

                    {/* Icon Box with Polka Dots */}
                    <div className="relative">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-2xs relative z-10 transition-transform duration-300 group-hover:scale-105"
                        style={{ backgroundColor: card.bgColor, color: card.color }}
                      >
                        <IconComp className="w-8 h-8" strokeWidth="2.2" />
                      </div>

                      {/* Soft Polka Dots Behind Icon Box */}
                      <div className="absolute top-2 -right-4 opacity-25 pointer-events-none z-0">
                        <div className="grid grid-cols-3 gap-1">
                          {[...Array(9)].map((_, i) => (
                            <div key={i} className="w-1 h-1 rounded-full bg-slate-400" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Number Badge */}
                    <div
                      className="px-3 py-1 rounded-xl text-xs font-black tracking-wider"
                      style={{ backgroundColor: card.bgColor, color: card.color }}
                    >
                      {card.number}
                    </div>

                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg sm:text-xl font-black !text-slate-900 leading-snug tracking-tight mb-2.5 group-hover:text-[#2196F3] transition-colors">
                    {card.title}
                  </h3>

                  {/* Short Color Bar Under Title */}
                  <div
                    className="w-8 h-1 rounded-full mb-4"
                    style={{ backgroundColor: card.color }}
                  />

                  {/* Description Paragraph */}
                  <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Color Strip Border Accent */}
                <div
                  className="h-1.5 w-full rounded-b-3xl absolute bottom-0 left-0 right-0 transition-opacity duration-300"
                  style={{ backgroundColor: card.color }}
                />
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

function SeoClientsSection() {
  const clientLogoMap = {
    bpLogo,
    uthoLogo,
    proboLogo,
    ibcmeLogo,
    ajLogo,
    indiatvLogo,
    tauLogo,
    zopperLogo
  }

  return (
    <section className="mt-16 sm:mt-24 relative">
      {/* Background Soft Orbs */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-10 right-0 w-80 h-80 bg-[#bcd32e]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Container Card */}
      <div className="bg-[#f8fafc]/80 border border-slate-100 rounded-[36px] sm:rounded-[44px] p-6 sm:p-10 lg:p-14 shadow-[0_15px_45px_rgba(0,0,0,0.03)] relative overflow-hidden">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 px-4">

          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200/80 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
            <div className="w-6 h-6 rounded-full bg-blue-50 text-[#2196f3] flex items-center justify-center">
              <Users className="w-3.5 h-3.5 text-[#2196f3]" />
            </div>
            <span className="text-[#2196f3] font-extrabold">{seoClientsData.badge}</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black !text-[#0a0a0a] tracking-tight mb-3 leading-tight">
            {seoClientsData.titlePrefix}
            <span className="text-[#2196f3]">{seoClientsData.titleHighlight}</span>
          </h2>

          {/* Two-tone Accent Line Divider */}
          <div className="flex items-center justify-center gap-1.5 my-4">
            <span className="w-10 h-1 bg-[#2196f3] rounded-full" />
            <span className="w-2.5 h-2.5 bg-[#bcd32e] rounded-full" />
            <span className="w-10 h-1 bg-[#bcd32e] rounded-full" />
          </div>

          {/* Subtitle Description */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-medium">
            {seoClientsData.description}
          </p>
        </div>

        {/* Client Logo Cards Grid (4 Cards) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {seoClientsData.clients.map((client, idx) => {
            const logoImg = clientLogoMap[client.logoKey]

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 flex flex-col items-center justify-center min-h-[130px] sm:min-h-[140px] shadow-2xs hover:shadow-lg transition-all duration-300 relative overflow-hidden group hover:-translate-y-1"
              >
                {/* Logo Image */}
                <img
                  src={logoImg}
                  alt={client.name}
                  className="max-h-12 sm:max-h-16 max-w-[85%] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />

                {/* Bottom Color Accent Line */}
                <div
                  className="h-1 rounded-full w-12 mx-auto mt-4 transition-all duration-300 group-hover:w-20"
                  style={{ backgroundColor: client.color }}
                />
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

function SeoTestimonialsSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  const totalSlides = seoTestimonialsData.testimonials.length
  const maxSlide = Math.max(0, totalSlides - 4)

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? maxSlide : prev - 1))
  }

  const handleNext = () => {
    setActiveSlide((prev) => (prev >= maxSlide ? 0 : prev + 1))
  }

  return (
    <section className="mt-16 sm:mt-24 relative">
      {/* Background Soft Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#c5f015]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Container Card */}
      <div className="bg-[#f8fafc]/80 border border-slate-100 rounded-[36px] sm:rounded-[44px] p-6 sm:p-10 lg:p-14 shadow-[0_15px_45px_rgba(0,0,0,0.03)] relative overflow-hidden">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 px-4">

          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200/80 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
            <div className="w-6 h-6 rounded-full bg-[#2196f3] text-white flex items-center justify-center">
              <Quote className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-[#2196f3] font-extrabold">{seoTestimonialsData.badge}</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black !text-[#0a0a0a] tracking-tight mb-3 leading-tight">
            {seoTestimonialsData.titlePrefix}
            <span className="text-[#2196f3]">{seoTestimonialsData.titleHighlight}</span>
          </h2>

          {/* Two-tone Accent Line Divider */}
          <div className="flex items-center justify-center gap-1.5 my-4">
            <span className="w-10 h-1 bg-[#2196f3] rounded-full" />
            <span className="w-2.5 h-2.5 bg-[#bcd32e] rounded-full" />
            <span className="w-10 h-1 bg-[#bcd32e] rounded-full" />
          </div>

          {/* Subtitle Description */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            {seoTestimonialsData.description}
          </p>
        </div>

        {/* Carousel / Slider Container with Navigation Arrows */}
        <div className="relative px-2 sm:px-10">

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md text-slate-700 hover:text-[#2196f3] hover:border-[#2196f3] flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md text-slate-700 hover:text-[#2196f3] hover:border-[#2196f3] flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Overflow-Hidden Slider Viewport */}
          <div className="overflow-hidden w-full py-2">
            {/* Horizontal Flex Track */}
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(calc(-${activeSlide} * (25% + 6px)))`
              }}
            >
              {seoTestimonialsData.testimonials.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0 bg-white rounded-3xl p-6 border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1"
                  >
                    <div>
                      {/* Top Row: Quote Icon & 5 Stars */}
                      <div className="flex items-center justify-between mb-4">
                        {/* Big Light Blue Quote Icon */}
                        <span className="text-4xl leading-none font-serif text-[#2196f3]/30 font-black">“</span>

                        {/* 5 Yellow Stars */}
                        <div className="flex items-center gap-1">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#ffba00] text-[#ffba00]" />
                          ))}
                        </div>
                      </div>

                      {/* Review Quote Text */}
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium mb-6">
                        {item.quote}
                      </p>
                    </div>

                    {/* Bottom Author Row with team.jpeg Image */}
                    <div className="pt-4 border-t border-slate-100 flex items-center gap-3.5">
                      {/* team.jpeg Avatar */}
                      <img
                        src={teamImage}
                        alt={item.author}
                        className="w-11 h-11 rounded-full object-cover border-2 border-slate-100 shadow-2xs shrink-0"
                      />

                      {/* Author Details */}
                      <div className="text-left leading-snug">
                        <h4 className="text-sm font-extrabold !text-slate-900">{item.author}</h4>
                        <p className="text-xs text-slate-500 font-medium">{item.role}</p>
                        <span
                          className="text-xs font-bold block mt-0.5"
                          style={{ color: item.companyColor }}
                        >
                          {item.company}
                        </span>
                      </div>
                    </div>

                  </div>
                )
              })}
            </div>
          </div>

          {/* Bottom Navigation Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: maxSlide + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${activeSlide === idx
                    ? 'w-6 h-2.5 bg-[#2196f3]'
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
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
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                    </svg>

                    <svg className="h-5 w-auto text-[#008394] hover:scale-110 transition-transform cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5 3v16.5l4.5 2.5 9.5-5.5-3.5-1.5-6-2.5V7.5L5 3z" />
                    </svg>

                    <svg className="h-5 w-auto text-[#7c3aed] hover:scale-110 transition-transform cursor-pointer animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" />
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
        {isSeoPage && (
          <>
            <SeoOverviewSection />
            <AiSeoServicesSection />
            <SeoStrategiesSection />
            <PlatformSeoSection />
            <SeoApproachSection />
            <SeoScopeSection />
            <SeoClientsSection />
            <SeoBenefitsSection />
            <SeoTestimonialsSection />
            <SeoExplainedSection />
            <SeoFaqSection />
            <SeoCtaSection />
          </>
        )}

      </div>
    </div>
  )
}


