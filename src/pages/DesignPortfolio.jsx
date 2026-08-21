import React, { useState, useEffect } from 'react'
import { Code2, Eye, ChevronLeft, ChevronRight, ShoppingBag, LayoutGrid, X, ExternalLink } from 'lucide-react'
import {
  DESIGN_PORTFOLIO_HERO_DATA,
  DESIGN_PORTFOLIO_CATEGORIES,
  DESIGN_PORTFOLIO_PROJECTS
} from '../data/designPortfolioData'
import echonBImg from '../assets/echon-b.png'

export default function DesignPortfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedProject, setSelectedProject] = useState(null)

  // Filter projects by category
  const filteredProjects = DESIGN_PORTFOLIO_PROJECTS.filter((proj) => {
    if (activeCategory === 'All') return true
    return proj.category === activeCategory
  })

  // Pagination parameters (6 projects per page)
  const itemsPerPage = 6
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage) || 1
  const displayedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId)
    setCurrentPage(1)
  }

  const openProjectModal = (project) => {
    setSelectedProject(project)
    document.body.style.overflow = 'hidden'
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'unset'
  }

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeProjectModal()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className="pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto min-h-screen text-black">
      {/* ── WEB DEVELOPMENT PORTFOLIO HERO BANNER ── */}
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
                {DESIGN_PORTFOLIO_HERO_DATA.badgeText}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-5 tracking-tight leading-tight">
              <span className="text-[#2196F3] inline-block mr-3">
                {DESIGN_PORTFOLIO_HERO_DATA.titleHighlight}
              </span>
              <span className="text-[#0b132b]">
                {DESIGN_PORTFOLIO_HERO_DATA.titleSuffix}
              </span>
            </h1>

            <div className="flex items-center justify-center gap-2.5 mb-6">
              <div className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-transparent via-[#2196F3]/50 to-[#2196F3] rounded-full" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#2196F3] shadow-[0_0_8px_rgba(33,150,243,0.5)]" />
              <div className="w-16 sm:w-24 h-[2px] bg-gradient-to-l from-transparent via-[#2196F3]/50 to-[#2196F3] rounded-full" />
            </div>

            <p className="text-sm sm:text-base lg:text-lg font-medium text-[#475569] max-w-2xl mx-auto leading-relaxed">
              {DESIGN_PORTFOLIO_HERO_DATA.subtitle}
            </p>
          </div>

        </div>
      </div>

      {/* ── PORTFOLIO PROJECTS & FILTERS SECTION ── */}
      <div className="mb-16">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          {DESIGN_PORTFOLIO_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id

            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-extrabold flex items-center gap-2.5 transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#2196F3] text-white shadow-md shadow-sky-500/25 border border-[#2196F3]'
                    : 'bg-white text-zinc-700 border border-slate-200/90 shadow-xs hover:border-[#2196F3]/60 hover:text-[#2196F3] hover:shadow-sm'
                }`}
              >
                {cat.type === 'wordpress' && (
                  <svg className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#2196F3]'}`} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm0 18.2A8.2 8.2 0 014.86 8.52L9.4 20.25a8.28 8.28 0 01-2.54-.05zm-4.3-8.8a1.38 1.38 0 011.37-1.34c.7 0 1.2.4 1.2 1.1a3 3 0 01-.4 1.34L7.54 16.2A8.17 8.17 0 017.7 11.4zm4.3 8.3L9.5 12.8a1.8 1.8 0 01.3-.9c.4-.6.9-1.2 1.8-1.2a1.4 1.4 0 011.4 1.5 5 5 0 01-.5 2zm5.4-3.5a8.17 8.17 0 01-4.7 3.9l2.7-7.9a1.4 1.4 0 011.2-.9c.5 0 .8.3.8.8a2 2 0 01-.1.4z"/>
                  </svg>
                )}
                {cat.type === 'php' && (
                  <span className={`text-[10px] font-black px-1.5 py-0.5 rounded border leading-none ${isActive ? 'bg-white/20 text-white border-white/40' : 'bg-[#2196F3]/10 text-[#2196F3] border-[#2196F3]/30'}`}>
                    php
                  </span>
                )}
                {cat.type === 'shopify' && (
                  <ShoppingBag className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#2196F3]'}`} />
                )}
                {cat.type === 'app' && (
                  <LayoutGrid className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#2196F3]'}`} />
                )}
                <span>{cat.label}</span>
              </button>
            )
          })}
        </div>

        {/* 3-Column Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => openProjectModal(project)}
              className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-100/90 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              {/* Card Image Container */}
              <div className="w-full h-56 sm:h-64 rounded-xl overflow-hidden bg-slate-900 relative mb-4 border border-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Bottom Details Row */}
              <div className="flex items-center justify-between pt-1">
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#2196F3] leading-snug group-hover:text-[#1976D2] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mt-0.5">
                    {project.categoryLabel}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    openProjectModal(project)
                  }}
                  className="bg-[#bcd32e] hover:bg-[#aabf26] text-[#0b132b] text-xs sm:text-sm font-bold px-4 py-2 rounded-full inline-flex items-center gap-1.5 shadow-xs hover:shadow-md transition-all duration-200 hover:scale-105 cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-[#0b132b]" />
                  <span>View Project</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Bar */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2.5 mt-8">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-[#2196F3] disabled:opacity-40 disabled:hover:text-slate-500 transition-colors cursor-pointer"
              aria-label="Previous Page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }).map((_, idx) => {
              const pageNum = idx + 1
              const isActive = currentPage === pageNum

              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-8 h-8 rounded-full text-xs sm:text-sm font-extrabold flex items-center justify-center transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#2196F3] text-white shadow-md shadow-sky-500/25'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {pageNum}
                </button>
              )
            })}

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-[#2196F3] disabled:opacity-40 disabled:hover:text-slate-500 transition-colors cursor-pointer"
              aria-label="Next Page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* ── PROJECT DETAILS MODAL POPUP ── */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeProjectModal()
          }}
        >
          {/* Modal Container Box */}
          <div className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] border border-white/20">

            {/* Top Right Close Button (X) */}
            <button
              onClick={closeProjectModal}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 w-10 h-10 rounded-full bg-white/90 shadow-md border border-slate-200 text-slate-700 hover:text-black hover:bg-slate-100 flex items-center justify-center transition-all cursor-pointer group"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>

            {/* LEFT SIDE: Live Website Preview Simulator */}
            <div className="w-full md:w-3/5 bg-slate-950 p-4 sm:p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800 relative">
              {/* Simulated Desktop Browser Frame */}
              <div className="w-full bg-[#1e293b] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col h-[45vh] sm:h-[55vh] md:h-[72vh]">

                {/* Top Browser Header Bar */}
                <div className="bg-[#0f172a] px-4 py-2.5 flex items-center justify-between border-b border-slate-800 shrink-0">
                  {/* Action Dots */}
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/90 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/90 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block" />
                  </div>

                  {/* Address Bar */}
                  <div className="bg-slate-900/90 border border-slate-800 rounded-full px-4 py-1 flex items-center gap-2 max-w-[280px] sm:max-w-[360px] w-full mx-auto">
                    <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/60 px-1.5 py-0.5 rounded">SSL</span>
                    <span className="text-xs font-mono text-slate-300 truncate select-all">
                      {selectedProject.websiteUrl || `https://${selectedProject.id}.com`}
                    </span>
                  </div>

                  {/* External Link */}
                  <a
                    href={selectedProject.websiteUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                    title="Open in new tab"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Live Website Preview Image Container (Scrollable) */}
                <div className="grow overflow-y-auto custom-scrollbar relative bg-slate-900 group">
                  <img
                    src={selectedProject.previewImage || echonBImg}
                    alt={selectedProject.title}
                    className="w-full h-auto object-top block"
                  />

                  {/* Hover Scroll Hint overlay */}
                  <div className="sticky bottom-3 left-1/2 -translate-x-1/2 bg-black/75 backdrop-blur-md text-white/90 text-[11px] font-semibold px-3.5 py-1 rounded-full border border-white/15 pointer-events-none opacity-85 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 shadow-lg w-max">
                    <span>Scroll to preview live site</span>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT SIDE: Project Details & Tech Stack */}
            <div className="w-full md:w-2/5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between overflow-y-auto max-h-[90vh] bg-gradient-to-b from-white via-slate-50/80 to-white">
              <div className="pt-2">

                {/* Category Badge */}
                <div className="inline-block mb-3">
                  <span className="text-xs font-extrabold text-[#2196F3] bg-[#2196F3]/10 border border-[#2196F3]/25 px-3.5 py-1 rounded-full uppercase tracking-wider">
                    {selectedProject.categoryLabel}
                  </span>
                </div>

                {/* Project Title */}
                <h2 className="text-2xl sm:text-4xl font-black !text-[#0b132b] mb-4 tracking-tight leading-tight">
                  {selectedProject.title}
                </h2>

                {/* Description */}
                <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed mb-8">
                  {selectedProject.description ||
                    `A modern corporate website built for ${selectedProject.title} with a clean UI, responsive layout, intuitive navigation, and dynamic service pages to highlight offerings and case studies.`}
                </p>

                {/* Technologies Used Section */}
                <div className="mb-8">
                  <h3 className="text-base sm:text-lg font-extrabold !text-[#0b132b] mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {(selectedProject.technologies || ['WordPress', 'PHP', 'Bootstrap', 'HTML']).map(
                      (tech, i) => (
                        <span
                          key={i}
                          className="bg-[#fbbc04] !text-[#0b132b] font-bold text-xs sm:text-sm px-4.5 py-2 rounded-full shadow-2xs border border-amber-400/40 inline-flex items-center gap-1"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>

              </div>

              {/* Bottom Action Buttons */}
              <div className="pt-5 border-t border-slate-200/80 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="#proposal"
                  onClick={closeProjectModal}
                  className="w-full sm:w-auto flex-1 bg-[#2196F3] hover:bg-[#1976D2] !text-white font-extrabold text-sm sm:text-base px-6 py-3.5 rounded-full text-center shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                >
                  Get A Free Quote Now
                </a>
                <a
                  href="/contact-us"
                  onClick={closeProjectModal}
                  className="w-full sm:w-auto border-2 border-[#0b132b] !text-[#0b132b] hover:bg-[#0b132b] hover:!text-white font-extrabold text-sm sm:text-base px-6 py-3.5 rounded-full text-center transition-all duration-200 hover:-translate-y-0.5"
                >
                  Contact Us
                </a>
              </div>

            </div>

          </div>
        </div>
      )}
    </div>
  )
}
