import React, { useState } from 'react'
import {
  Sparkles,
  CheckCircle2,
  Send,
  Globe,
  User,
  Mail,
  Phone,
  Briefcase,
  FileText,
  TrendingUp,
  Gauge,
  Wrench,
  Bot,
  Monitor,
  PhoneCall,
  BarChart3,
  ArrowRight
} from 'lucide-react'
import ClientsSection from '../components/ClientsSection'
import {
  GET_A_QUOTE_HERO_DATA,
  PROPOSAL_FORM_DATA,
  AUDIT_DELIVERABLES_DATA
} from '../data/getAQuoteData'

const ICON_MAP = {
  Gauge,
  Wrench,
  Bot,
  TrendingUp,
  Monitor,
  FileText,
  PhoneCall
}

export default function GetAQuote() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    service: PROPOSAL_FORM_DATA.serviceOptions[0].value,
    budget: PROPOSAL_FORM_DATA.budgetRanges[1].value,
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 5000)
    setFormData({
      name: '',
      email: '',
      phone: '',
      website: '',
      service: PROPOSAL_FORM_DATA.serviceOptions[0].value,
      budget: PROPOSAL_FORM_DATA.budgetRanges[1].value,
      message: ''
    })
  }

  const mainDeliverables = AUDIT_DELIVERABLES_DATA.items.filter((item) => item.num !== '07')
  const cardSeven = AUDIT_DELIVERABLES_DATA.items.find((item) => item.num === '07')

  return (
    <div className="get-a-quote-page bg-gradient-to-b from-white via-[#f0f7ff] to-[#eaf5ff] min-h-screen text-slate-800 pt-28 sm:pt-36 overflow-hidden font-sans">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* =========================================================
            HEADER BANNER SECTION (Matching Exact Screenshot Design)
           ========================================================= */}
        <div className="relative bg-white/95 backdrop-blur-md rounded-3xl border border-[#2196F3]/20 shadow-[0_20px_50px_rgba(33,150,243,0.08)] p-6 sm:p-12 lg:p-14 mb-16 text-center overflow-hidden font-sans">

          {/* Subtle Background Glow Orbs */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2196F3]/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#bcd32e]/12 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">

            {/* Top Subtitle with Side Lines */}
            <div className="inline-flex items-center justify-center gap-3 sm:gap-5 mb-5 w-full">
              <span className="w-8 sm:w-16 h-[2px] bg-[#bcd32e] rounded-full shrink-0" />
              <span className="text-[#85a017] font-extrabold text-xs sm:text-sm tracking-[0.25em] uppercase font-sans">
                {GET_A_QUOTE_HERO_DATA.badgeText}
              </span>
              <span className="w-8 sm:w-16 h-[2px] bg-[#bcd32e] rounded-full shrink-0" />
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-5 font-sans">
              <span className="text-[#0b132b]">{GET_A_QUOTE_HERO_DATA.titlePrefix}</span>
              <span className="text-[#2196F3]">{GET_A_QUOTE_HERO_DATA.titleHighlight}</span>
            </h1>

            {/* Subtitle Line */}
            <p className="text-slate-600 text-base sm:text-xl font-medium max-w-3xl mx-auto leading-relaxed font-sans" style={{ color: '#475569' }}>
              {GET_A_QUOTE_HERO_DATA.subtitleLine1}
              <br className="hidden sm:inline" /> {GET_A_QUOTE_HERO_DATA.subtitleLine2}
            </p>

            {/* Bottom Decorative Line & Dual Leaf Accent */}
            <div className="flex items-center justify-center gap-3 mt-7 sm:mt-8">
              <div className="w-16 sm:w-28 h-[2.5px] bg-[#2196F3] rounded-full" />
              <div className="flex items-center justify-center shrink-0">
                <svg width="34" height="34" viewBox="0 0 36 36" fill="none" className="drop-shadow-xs">
                  {/* Left Lime Leaf */}
                  <path
                    d="M17 26C17 26 8 23 8 14.5C8 9.5 12.5 7.5 16 8C15.5 14 17 26 17 26Z"
                    fill="#bcd32e"
                  />
                  {/* Right Blue Leaf */}
                  <path
                    d="M19 26C19 26 28 23 28 14.5C28 9.5 23.5 7.5 20 8C20.5 14 19 26 19 26Z"
                    fill="#2196F3"
                  />
                </svg>
              </div>
              <div className="w-16 sm:w-28 h-[2.5px] bg-[#bcd32e] rounded-full" />
            </div>

          </div>

        </div>


        {/* =========================================================
            FULL-WIDTH CUSTOM PROPOSAL REQUEST FORM SECTION (Same as Contact Us)
           ========================================================= */}
        <div id="proposal-form-section" className="w-full mb-20">

          <div className="relative bg-white/90 backdrop-blur-xl border border-[#2196F3]/25 rounded-[32px] p-6 sm:p-10 lg:p-12 shadow-[0_25px_70px_-15px_rgba(33,150,243,0.15)] text-left font-sans overflow-hidden">

            {/* Ambient Lighting Orbs */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#2196F3]/12 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#bcd32e]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#bcd32e]/30 border border-[#bcd32e]/60 text-[#3d4700] font-black text-xs uppercase tracking-wider mb-4 font-sans shadow-xs relative z-10">
              <Sparkles className="w-3.5 h-3.5 text-[#3d4700]" />
              <span>{PROPOSAL_FORM_DATA.badgeText}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-[#0f172a] mb-2 font-sans tracking-tight relative z-10" style={{ color: '#0f172a' }}>
              {PROPOSAL_FORM_DATA.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mb-8 font-sans font-medium relative z-10 max-w-3xl" style={{ color: '#475569' }}>
              {PROPOSAL_FORM_DATA.subtitle}
            </p>

            {formSubmitted && (
              <div className="mb-6 p-4 rounded-2xl bg-[#bcd32e]/25 border border-[#bcd32e] text-[#3c4700] font-bold flex items-center gap-3 font-sans relative z-10 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#4c5900] shrink-0" />
                <span>Thank you! Your proposal request has been sent successfully. Our team will contact you shortly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 font-sans relative z-10">

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 mb-2 font-sans tracking-wider flex items-center gap-2" style={{ color: '#334155' }}>
                    <User className="w-3.5 h-3.5 text-[#2196F3]" />
                    <span>Your Name *</span>
                  </label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#2196F3] transition-colors pointer-events-none">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-slate-50/80 border border-slate-200/90 rounded-2xl pl-11 pr-4 py-3.5 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#2196F3] focus:ring-4 focus:ring-[#2196F3]/10 focus:outline-none transition-all shadow-2xs font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 mb-2 font-sans tracking-wider flex items-center gap-2" style={{ color: '#334155' }}>
                    <Mail className="w-3.5 h-3.5 text-[#2196F3]" />
                    <span>Email Address *</span>
                  </label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#2196F3] transition-colors pointer-events-none">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full bg-slate-50/80 border border-slate-200/90 rounded-2xl pl-11 pr-4 py-3.5 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#2196F3] focus:ring-4 focus:ring-[#2196F3]/10 focus:outline-none transition-all shadow-2xs font-sans"
                    />
                  </div>
                </div>
              </div>

              {/* Phone & Website Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 mb-2 font-sans tracking-wider flex items-center gap-2" style={{ color: '#334155' }}>
                    <Phone className="w-3.5 h-3.5 text-[#2196F3]" />
                    <span>Phone Number *</span>
                  </label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#2196F3] transition-colors pointer-events-none">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-slate-50/80 border border-slate-200/90 rounded-2xl pl-11 pr-4 py-3.5 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#2196F3] focus:ring-4 focus:ring-[#2196F3]/10 focus:outline-none transition-all shadow-2xs font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 mb-2 font-sans tracking-wider flex items-center gap-2" style={{ color: '#334155' }}>
                    <Globe className="w-3.5 h-3.5 text-[#2196F3]" />
                    <span>Website (Optional)</span>
                  </label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#2196F3] transition-colors pointer-events-none">
                      <Globe className="w-4 h-4" />
                    </div>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://yourwebsite.com"
                      className="w-full bg-slate-50/80 border border-slate-200/90 rounded-2xl pl-11 pr-4 py-3.5 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#2196F3] focus:ring-4 focus:ring-[#2196F3]/10 focus:outline-none transition-all shadow-2xs font-sans"
                    />
                  </div>
                </div>
              </div>

              {/* Service Select & Budget Field Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 mb-2 font-sans tracking-wider flex items-center gap-2" style={{ color: '#334155' }}>
                    <Briefcase className="w-3.5 h-3.5 text-[#2196F3]" />
                    <span>Service Interested In</span>
                  </label>
                  <div className="relative group">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-slate-50/80 border border-slate-200/90 rounded-2xl px-4 py-3.5 text-sm font-bold text-slate-900 focus:bg-white focus:border-[#2196F3] focus:ring-4 focus:ring-[#2196F3]/10 focus:outline-none transition-all shadow-2xs font-sans cursor-pointer"
                    >
                      {PROPOSAL_FORM_DATA.serviceOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 mb-2 font-sans tracking-wider flex items-center gap-2" style={{ color: '#334155' }}>
                    <TrendingUp className="w-3.5 h-3.5 text-[#2196F3]" />
                    <span>Estimated Budget Range</span>
                  </label>
                  <div className="relative group">
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-slate-50/80 border border-slate-200/90 rounded-2xl px-4 py-3.5 text-sm font-bold text-slate-900 focus:bg-white focus:border-[#2196F3] focus:ring-4 focus:ring-[#2196F3]/10 focus:outline-none transition-all shadow-2xs font-sans cursor-pointer"
                    >
                      {PROPOSAL_FORM_DATA.budgetRanges.map((b) => (
                        <option key={b.value} value={b.value}>
                          {b.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-xs font-black uppercase text-slate-700 mb-2 font-sans tracking-wider flex items-center gap-2" style={{ color: '#334155' }}>
                  <FileText className="w-3.5 h-3.5 text-[#2196F3]" />
                  <span>Your Message / Requirements *</span>
                </label>
                <div className="relative group">
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your business goals and expectations..."
                    className="w-full bg-slate-50/80 border border-slate-200/90 rounded-2xl p-4 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#2196F3] focus:ring-4 focus:ring-[#2196F3]/10 focus:outline-none transition-all shadow-2xs font-sans"
                  />
                </div>
              </div>

              {/* Modern Gradient Submit Button (Same as Contact Us) */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0052cc] via-[#2196F3] to-[#0052cc] bg-[length:200%_auto] hover:bg-right text-white font-extrabold text-base py-4.5 px-8 rounded-2xl shadow-xl shadow-[#2196F3]/25 flex items-center justify-center gap-3 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl cursor-pointer group font-sans"
              >
                <Send className="w-5 h-5 text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                <span className="text-white font-black text-base tracking-wide">Submit Proposal Request</span>
              </button>

            </form>

          </div>

        </div>


        {/* =========================================================
            AUDIT DELIVERABLES SECTION (Exact Match from User Image)
           ========================================================= */}
        <div id="audit-deliverables-section" className="w-full mb-20 font-sans">

          {/* Header Block */}
          <div className="text-center max-w-3xl mx-auto mb-12">

            {/* Top Subtitle Badge with Side Green Lines */}
            <div className="inline-flex items-center justify-center gap-3 sm:gap-5 mb-4 w-full">
              <span className="w-8 sm:w-16 h-[2px] bg-[#bcd32e] rounded-full shrink-0" />
              <span className="text-[#85a017] font-extrabold text-xs sm:text-sm tracking-[0.25em] uppercase font-sans">
                {AUDIT_DELIVERABLES_DATA.badgeText}
              </span>
              <span className="w-8 sm:w-16 h-[2px] bg-[#bcd32e] rounded-full shrink-0" />
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] font-sans tracking-tight leading-tight" style={{ color: '#0f172a' }}>
              {AUDIT_DELIVERABLES_DATA.titlePrefix}
              <span className="text-[#2196F3]">{AUDIT_DELIVERABLES_DATA.titleHighlight}</span>
            </h2>

          </div>

          {/* Cards Grid Container (3 Columns for Cards 01-06, Full Width for Card 07) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

            {/* Cards 01 to 06 */}
            {mainDeliverables.map((card) => {
              const IconComp = ICON_MAP[card.iconName] || Gauge
              return (
                <div
                  key={card.num}
                  className="bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-[#2196F3]/40 transition-all duration-300 flex flex-col justify-between text-left font-sans group"
                >
                  <div>
                    {/* Top Row: Icon on Left, Number on Right */}
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${card.iconBg} shrink-0 shadow-2xs group-hover:scale-105 transition-transform`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[#bcd32e] text-2xl font-black tracking-tight font-sans" style={{ color: '#bcd32e' }}>
                        {card.num}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-black text-[#0f172a] mb-2.5 leading-snug font-sans" style={{ color: '#0f172a' }}>
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed font-sans" style={{ color: '#64748b' }}>
                      {card.desc}
                    </p>
                  </div>
                </div>
              )
            })}

            {/* Card 07: Conversion (Full Width across 3 columns) */}
            {cardSeven && (
              <div className="md:col-span-3 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-[#bcd32e]/60 transition-all duration-300 text-left font-sans group">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-[#f7fce6] text-[#728500] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform mt-0.5">
                      <PhoneCall className="w-5 h-5 text-[#728500]" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-[#0f172a] mb-1.5 leading-snug font-sans" style={{ color: '#0f172a' }}>
                        {cardSeven.title}
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed font-sans" style={{ color: '#64748b' }}>
                        {cardSeven.desc}
                      </p>
                    </div>
                  </div>
                  <span className="text-[#bcd32e] text-2xl font-black tracking-tight font-sans shrink-0" style={{ color: '#bcd32e' }}>
                    {cardSeven.num}
                  </span>
                </div>
              </div>
            )}

          </div>

          {/* Bottom Blue CTA Banner Strip */}
          <div className="bg-gradient-to-r from-[#0088FF] via-[#2196F3] to-[#0088FF] rounded-2xl sm:rounded-3xl p-5 sm:p-6 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden font-sans">

            {/* Left Block: Icon + Vertical Divider + Headline & Subtitle */}
            <div className="flex items-center gap-5 text-left w-full md:w-auto">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/30 shadow-inner">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>

              <div className="w-px h-12 bg-white/30 hidden sm:block shrink-0" />

              <div>
                <h3 className="text-lg sm:text-2xl font-black text-white leading-tight font-sans" style={{ color: '#ffffff' }}>
                  {AUDIT_DELIVERABLES_DATA.ctaBanner.headlinePrefix}
                  <span className="text-[#bcd32e]">{AUDIT_DELIVERABLES_DATA.ctaBanner.headlineHighlight}</span>
                </h3>
                <p className="text-xs sm:text-sm text-blue-100 font-medium mt-1 font-sans" style={{ color: '#dbeafe' }}>
                  {AUDIT_DELIVERABLES_DATA.ctaBanner.subtitle}
                </p>
              </div>
            </div>

            {/* Right Block: Lime Green Action Button */}
            <a
              href="#proposal-form-section"
              className="bg-[#bcd32e] hover:bg-[#aabf26] text-[#0b132b] font-black text-sm px-6 py-3.5 rounded-full inline-flex items-center gap-2.5 shadow-md hover:scale-105 transition-all duration-200 shrink-0 font-sans cursor-pointer"
            >
              <span>{AUDIT_DELIVERABLES_DATA.ctaBanner.btnText}</span>
              <ArrowRight className="w-4 h-4 text-[#0b132b]" />
            </a>

          </div>

        </div>


        {/* =========================================================
            CLIENTS MARQUEE BANNER
           ========================================================= */}
        <div className="mb-20">
          <ClientsSection />
        </div>

      </div>
    </div>
  )
}
