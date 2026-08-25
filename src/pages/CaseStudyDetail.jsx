import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Award,
  TrendingUp,
  Target,
  Search,
  MousePointerClick,
  Eye,
  BarChart2,
  TrendingUp as TrendingIcon
} from 'lucide-react'
import { CASE_STUDIES_LIST } from '../data/caseStudiesData'
import CTASection from '../components/CTASection'
import casestudyNewImg from '../assets/casestudy-new.png'

export default function CaseStudyDetail() {
  const { id } = useParams()
  const project = CASE_STUDIES_LIST.find((p) => p.id === id) || CASE_STUDIES_LIST[0]
  const [activeMetricTab, setActiveMetricTab] = useState('impressions')

  const organicData = project.organicPresence || {
    clicks: '574',
    impressions: '43.7K',
    ctr: '1.3%',
    position: '13.9'
  }

  const keywordsList = project.recentKeywords || [
    { keyword: 'Spider Vein Treatment Victoria', initial: 'Not in 100', current: 2 },
    { keyword: 'Victoria Hair Removal', initial: 'Not in 100', current: 3 },
    { keyword: 'Victoria Weight Loss Clinic', initial: 'Not in 100', current: 3 },
    { keyword: 'Microblading Victoria', initial: 'Not in 100', current: 6 },
    { keyword: 'Microblading Victoria BC', initial: 'Not in 100', current: 6 }
  ]

  return (
    <div className="pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto min-h-screen text-black">
      {/* Top Back Navigation Link */}
      <div className="mb-8">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-sm font-extrabold text-[#2196F3] hover:text-[#1976D2] transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Case Studies</span>
        </Link>
      </div>

      {/* ── CASE STUDY HERO HEADER ── */}
      <div className="bg-gradient-to-br from-white via-slate-50 to-sky-50/50 rounded-3xl p-8 sm:p-12 lg:p-14 border border-slate-200/90 shadow-sm mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#bcd32e]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl">
          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2196F3]/10 border border-[#2196F3]/25 text-[#2196F3] font-bold text-xs uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{project.category} CASE STUDY</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black !text-[#0b132b] mb-6 tracking-tight leading-tight">
            {project.title}
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 text-base sm:text-xl font-medium leading-relaxed mb-10 max-w-3xl">
            {project.subtitle}
          </p>

          {/* Highlights Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-slate-200 shadow-xs">
            {(project.metrics || [
              { label: 'Organic Traffic', value: '+320%' },
              { label: 'Leads Generated', value: '4.5x' },
              { label: 'Google Rank', value: '#1 Page' }
            ]).map((metric, idx) => (
              <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <span className="text-2xl sm:text-4xl font-black text-[#2196F3] mb-1">
                  {metric.value}
                </span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CASE STUDY DETAILS SPLIT SECTION ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-20">
        {/* Left Side: Performance Overview Graph Card */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between h-full">
            {/* Header: Title & Trend Badge */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <h2 className="text-2xl sm:text-3xl font-black !text-[#0b132b] tracking-tight">
                Performance Overview
              </h2>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-600 font-bold text-xs shrink-0 shadow-2xs">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                <span>Strong Upward Trend</span>
              </div>
            </div>

            {/* Performance Overview Image */}
            <div className="flex-1 flex items-center justify-center p-2 rounded-2xl bg-slate-50/50 border border-slate-100">
              <img
                src={project.image || casestudyNewImg}
                alt={project.title || "Performance Overview"}
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Challenge, Solution & Results Cards */}
        <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-6 justify-between">
          {/* Card 01: Challenge Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm relative overflow-hidden flex items-start gap-5 sm:gap-6 transition-all duration-300 hover:shadow-md group">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-amber-500 rounded-l-2xl" />
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
              <Target className="w-8 h-8 sm:w-9 sm:h-9 text-amber-600" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-amber-500 font-extrabold text-sm sm:text-base mb-1 block">
                01
              </span>
              <h2 className="text-xl sm:text-2xl font-black !text-[#0b132b] mb-2 tracking-tight">
                The Challenge
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                {project.challenge ||
                  `${project.title} required targeted international B2B buyer acquisition for industrial SCSI hardware components with high conversion efficiency.`}
              </p>
            </div>
          </div>

          {/* Card 02: Solution Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm relative overflow-hidden flex items-start gap-5 sm:gap-6 transition-all duration-300 hover:shadow-md group">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#2196F3] rounded-l-2xl" />
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#2196F3]/10 text-[#2196F3] flex items-center justify-center shrink-0">
              <TrendingUp className="w-8 h-8 sm:w-9 sm:h-9 text-[#2196F3]" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[#2196F3] font-extrabold text-sm sm:text-base mb-1 block">
                02
              </span>
              <h2 className="text-xl sm:text-2xl font-black !text-[#0b132b] mb-2 tracking-tight">
                Our Solution
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                {project.solution ||
                  `Built precision Google Search & Display PPC funnels targeting global OEM procurement managers and industrial hardware specifiers.`}
              </p>
            </div>
          </div>

          {/* Card 03: Results Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm relative overflow-hidden flex items-start gap-5 sm:gap-6 transition-all duration-300 hover:shadow-md group">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#bcd32e] rounded-l-2xl" />
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-emerald-500/10 text-[#bcd32e] flex items-center justify-center shrink-0">
              <Award className="w-8 h-8 sm:w-9 sm:h-9 text-[#bcd32e]" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[#bcd32e] font-extrabold text-sm sm:text-base mb-1 block">
                03
              </span>
              <h2 className="text-xl sm:text-2xl font-black !text-[#0b132b] mb-2 tracking-tight">
                Key Results & ROI
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                {project.results ||
                  `Delivered a 6.2x return on ad spend (ROAS) and expanded global distributor orders across 14 countries.`}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── RECENT RESULTS & ORGANIC PRESENCE SECTION ── */}
      <div className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* LEFT SIDE: Our Recent Results (Keywords Ranking Table) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="mb-5">
              <h2 className="text-2xl sm:text-3xl font-black !text-[#0b132b] tracking-tight">
                Our Recent Results
              </h2>
              <div className="w-14 h-1 bg-[#bcd32e] rounded-full mt-2" />
            </div>

            {/* Keywords Table Box */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md">
              {/* Table Header Bar */}
              <div className="bg-[#bcd32e] px-6 py-4 flex items-center justify-between !text-[#0b132b]">
                <div className="flex items-center gap-2.5 font-black text-sm sm:text-base tracking-wide">
                  <div className="w-7 h-7 rounded-full bg-white/80 flex items-center justify-center text-[#0b132b]">
                    <Search className="w-4 h-4 text-[#0b132b]" />
                  </div>
                  <span>KEYWORDS</span>
                </div>
                <div className="flex items-center gap-6 text-xs sm:text-sm font-extrabold !text-[#0b132b]">
                  <span>Initial Ranks</span>
                  <span className="w-24 text-right">Current Ranks</span>
                </div>
              </div>

              {/* Table Body Rows (Rendered Dynamically per Case Study) */}
              <div className="divide-y divide-slate-100">
                {keywordsList.map((row, idx) => (
                  <div
                    key={idx}
                    className="px-6 py-4.5 flex items-center justify-between hover:bg-slate-50/80 transition-colors"
                  >
                    <div className="flex items-center gap-3 pr-4">
                      <div className="w-1 h-5 bg-[#2196F3] rounded-full shrink-0" />
                      <span className="text-xs sm:text-sm font-bold text-slate-800">
                        {row.keyword}
                      </span>
                    </div>

                    <div className="flex items-center gap-8 shrink-0">
                      <span className="text-xs sm:text-sm font-medium text-slate-400">
                        {row.initial}
                      </span>
                      <div className="w-24 flex justify-end">
                        <span className="w-7 h-7 rounded-full bg-[#2196F3] !text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                          {row.current}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Organic Presence Dashboard */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="mb-5">
              <h2 className="text-2xl sm:text-3xl font-black !text-[#0b132b] tracking-tight uppercase">
                ORGANIC PRESENCE
              </h2>
              <div className="w-14 h-1 bg-[#2196F3] rounded-full mt-2" />
            </div>

            {/* Main Organic Presence Box */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-md">
              {/* Metric Tabs Grid Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-6">

                {/* Tab 1: Total Clicks */}
                <button
                  type="button"
                  onClick={() => setActiveMetricTab('clicks')}
                  className={`p-3.5 rounded-2xl flex flex-col justify-between text-left transition-all duration-200 cursor-pointer ${
                    activeMetricTab === 'clicks'
                      ? 'bg-[#2196F3] !text-white shadow-md shadow-sky-500/20'
                      : 'bg-slate-50 hover:bg-slate-100/80 text-slate-700 border border-slate-200/70'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold tracking-tight">Total clicks</span>
                    <MousePointerClick className={`w-3.5 h-3.5 ${activeMetricTab === 'clicks' ? '!text-white' : 'text-[#2196F3]'}`} />
                  </div>
                  <span className="text-xl sm:text-2xl font-black">{organicData.clicks}</span>
                </button>

                {/* Tab 2: Total Impressions */}
                <button
                  type="button"
                  onClick={() => setActiveMetricTab('impressions')}
                  className={`p-3.5 rounded-2xl flex flex-col justify-between text-left transition-all duration-200 cursor-pointer ${
                    activeMetricTab === 'impressions'
                      ? 'bg-[#bcd32e] !text-[#0b132b] shadow-md shadow-lime-500/20'
                      : 'bg-slate-50 hover:bg-slate-100/80 text-slate-700 border border-slate-200/70'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold tracking-tight">Total impressions</span>
                    <Eye className={`w-3.5 h-3.5 ${activeMetricTab === 'impressions' ? '!text-[#0b132b]' : 'text-slate-500'}`} />
                  </div>
                  <span className="text-xl sm:text-2xl font-black">{organicData.impressions}</span>
                </button>

                {/* Tab 3: Average CTR */}
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 flex flex-col justify-between text-left">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-slate-500 tracking-tight">Average CTR</span>
                    <BarChart2 className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <span className="text-xl sm:text-2xl font-black text-slate-800">{organicData.ctr}</span>
                </div>

                {/* Tab 4: Average Position */}
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 flex flex-col justify-between text-left">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-slate-500 tracking-tight">Average position</span>
                    <TrendingIcon className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                  <span className="text-xl sm:text-2xl font-black text-slate-800">{organicData.position}</span>
                </div>

              </div>

              {/* Organic Impressions / Clicks Chart Image Container */}
              <div className="rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 p-2 sm:p-3 mb-6 relative">
                <img
                  src={casestudyNewImg}
                  alt="Organic Presence Clicks and Impressions Graph"
                  className="w-full h-auto object-contain block rounded-xl transition-all duration-300"
                />
              </div>

              {/* Bottom Explanatory Footnotes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-[#2196F3] mt-1 shrink-0" />
                  <div>
                    <h4 className="text-xs font-black !text-[#0b132b]">Clicks</h4>
                    <p className="text-[11px] font-medium text-slate-500 leading-snug">
                      The number of times users clicked on your link in search results.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-[#bcd32e] mt-1 shrink-0" />
                  <div>
                    <h4 className="text-xs font-black !text-[#0b132b]">Impressions</h4>
                    <p className="text-[11px] font-medium text-slate-500 leading-snug">
                      The number of times your link appeared in search results.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ── CTA SECTION ── */}
      <div className="mb-12">
        <CTASection />
      </div>
    </div>
  )
}
