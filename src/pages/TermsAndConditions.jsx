import React from 'react'
import { Link } from 'react-router-dom'
import {
  Sparkles,
  CheckCircle2,
  Briefcase,
  ShieldCheck,
  FileText,
  TrendingUp,
  Clock,
  Award,
  Lock,
  Building2,
  Check,
  Mail,
  ArrowRight
} from 'lucide-react'
import { TERMS_HERO_DATA, TERMS_POINTER_SECTIONS } from '../data/termsData'

const ICON_MAP = {
  CheckCircle2,
  Briefcase,
  ShieldCheck,
  FileText,
  TrendingUp,
  Clock,
  Award,
  Lock,
  Building2
}

export default function TermsAndConditions() {
  return (
    <div className="terms-page bg-gradient-to-b from-white via-[#f0f7ff] to-[#eaf5ff] min-h-screen text-slate-800 pt-28 sm:pt-36 pb-24 overflow-hidden font-sans">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* =========================================================
            HERO BANNER SECTION
           ========================================================= */}
        <div className="relative bg-white/95 backdrop-blur-md rounded-3xl border border-[#2196F3]/20 shadow-[0_20px_50px_rgba(33,150,243,0.08)] p-6 sm:p-12 lg:p-14 mb-14 text-center overflow-hidden font-sans">

          {/* Background Glow Orbs */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2196F3]/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#bcd32e]/12 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">

            {/* Badge */}
            <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#bcd32e]/30 border border-[#bcd32e]/60 text-[#3d4700] font-black text-xs uppercase tracking-wider mb-5 font-sans shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#3d4700]" />
              <span>{TERMS_HERO_DATA.badgeText}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4 font-sans text-[#0b132b]" style={{ color: '#0b132b' }}>
              {TERMS_HERO_DATA.titleHighlight}
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-base sm:text-lg font-medium max-w-2xl mx-auto leading-relaxed mb-6 font-sans" style={{ color: '#475569' }}>
              {TERMS_HERO_DATA.subtitle}
            </p>

            {/* Last Updated Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 font-bold text-xs font-sans mb-6">
              <Clock className="w-3.5 h-3.5 text-[#2196F3]" />
              <span>Last Updated: {TERMS_HERO_DATA.lastUpdated}</span>
            </div>

            {/* Decorative Leaf Accent */}
            <div className="flex items-center justify-center gap-3">
              <div className="w-16 sm:w-24 h-[2px] bg-[#2196F3] rounded-full" />
              <div className="flex items-center justify-center shrink-0">
                <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
                  <path d="M17 26C17 26 8 23 8 14.5C8 9.5 12.5 7.5 16 8C15.5 14 17 26 17 26Z" fill="#bcd32e" />
                  <path d="M19 26C19 26 28 23 28 14.5C28 9.5 23.5 7.5 20 8C20.5 14 19 26 19 26Z" fill="#2196F3" />
                </svg>
              </div>
              <div className="w-16 sm:w-24 h-[2px] bg-[#bcd32e] rounded-full" />
            </div>

          </div>
        </div>


        {/* =========================================================
            POINTER SECTIONS LIST
           ========================================================= */}
        <div className="space-y-8 mb-16 font-sans">
          {TERMS_POINTER_SECTIONS.map((sec) => {
            const IconComponent = ICON_MAP[sec.iconName] || FileText
            return (
              <div
                key={sec.id}
                id={sec.id}
                className="bg-white/95 backdrop-blur-md rounded-3xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 text-left font-sans group relative overflow-hidden"
              >
                {/* Top Section Header */}
                <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-[#e0f2fe] text-[#2196F3] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5.5 h-5.5 text-[#2196F3]" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-[#0f172a] tracking-tight font-sans" style={{ color: '#0f172a' }}>
                      {sec.title}
                    </h2>
                  </div>
                  <span className="text-[#bcd32e] text-2xl font-black tracking-tight shrink-0 font-sans" style={{ color: '#bcd32e' }}>
                    {sec.number}
                  </span>
                </div>

                {/* Pointer Items List */}
                <div className="space-y-4 font-sans">
                  {sec.pointers.map((pointer, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3.5 p-3 sm:p-4 rounded-2xl bg-slate-50/70 border border-slate-100/90 hover:bg-slate-50 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-[#2196F3]/10 text-[#2196F3] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#2196F3] stroke-[3]" />
                      </div>
                      <p className="text-slate-700 text-sm sm:text-base font-semibold leading-relaxed font-sans" style={{ color: '#334155' }}>
                        {pointer}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            )
          })}
        </div>


        {/* =========================================================
            QUESTIONS / CONTACT FOOTER BANNER
           ========================================================= */}
        <div className="bg-gradient-to-r from-[#0088FF] via-[#2196F3] to-[#0088FF] rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden font-sans">
          
          <div className="flex items-center gap-5 text-left w-full md:w-auto">
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/30 shadow-inner">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight font-sans" style={{ color: '#ffffff' }}>
                Have questions about our Terms?
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 font-medium mt-1 font-sans" style={{ color: '#dbeafe' }}>
                Our legal and support team is here to assist you anytime.
              </p>
            </div>
          </div>

          <Link
            to="/contact-us"
            className="bg-[#bcd32e] hover:bg-[#aabf26] text-[#0b132b] font-black text-sm px-7 py-3.5 rounded-full inline-flex items-center gap-2.5 shadow-md hover:scale-105 transition-all duration-200 shrink-0 font-sans cursor-pointer"
          >
            <span>Contact Legal Team</span>
            <ArrowRight className="w-4 h-4 text-[#0b132b]" />
          </Link>

        </div>

      </div>
    </div>
  )
}
