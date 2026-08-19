import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo-pr (1).png'


// Star Icon Helper
const Star = ({ filled }) => (
  <svg className={`w-3.5 h-3.5 ${filled ? 'text-[#2196F3]' : 'text-zinc-600'}`} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

// Half Star Helper using SVG gradient
const HalfStar = () => (
  <svg className="w-3.5 h-3.5 text-[#2196F3]" viewBox="0 0 20 20" fill="currentColor">
    <defs>
      <linearGradient id="halfStarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="50%" stopColor="#2196F3" />
        <stop offset="50%" stopColor="#52525b" />
      </linearGradient>
    </defs>
    <path fill="url(#halfStarGrad)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

// Rating Stars Renderer
const RatingStars = ({ rating }) => {
  const stars = []
  const floorRating = Math.floor(rating)
  for (let i = 1; i <= 5; i++) {
    if (i <= floorRating) {
      stars.push(<Star key={i} filled={true} />)
    } else if (i - 0.5 <= rating) {
      stars.push(<HalfStar key={i} />)
    } else {
      stars.push(<Star key={i} filled={false} />)
    }
  }
  return <div className="flex gap-1">{stars}</div>
}

export default function Footer() {
  const navigationColumns = [
    {
      title: 'TOP SERVICES',
      links: [
        { name: 'SEM Marketing', href: '#sem-marketing' },
        { name: 'Small Business SEO', href: '#small-business-seo' },
        { name: 'Authority Building Plan', href: '#authority-building-plan' },
        { name: 'SEO by Industry', href: '#seo-by-industry' },
        { name: 'White Label PPC', href: '#white-label-ppc' },
        { name: 'White Label Social Media', href: '#white-label-social-media' }
      ]
    },
    {
      title: 'LEARNING CENTER',
      links: [
        { name: 'Industry Insight', href: '#industry-insight' },
        { name: 'Digital Marketing Strategy', href: '#digital-marketing-strategy' },
        { name: 'Hybrid Engine Optimization (HEO)', href: '#hybrid-engine-optimization-heo' },
        { name: 'AI Automation for Ecommerce', href: '#ai-automation-for-ecommerce' },
        { name: 'AI Automation for SaaS', href: '#ai-automation-for-saas' },
        { name: 'Social Media Strategy', href: '#social-media-strategy' }
      ]
    },
    {
      title: 'RESOURCES & TOOLS',
      links: [
        { name: 'QR Code Generator', href: '#qr-code-generator' },
        { name: 'Help Center', href: '#help-center' },
        { name: 'Case Studies', href: '/portfolio' },
        { name: 'Our Portfolio', href: '/portfolio' },
        { name: 'Client Testimonials', href: '#client-testimonials' },
        { name: 'Offers & Discounts', href: '#offers-discounts' }
      ]
    },
    {
      title: 'COMPANY',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '#our-team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Write For Us', href: '#write-for-us' },
        { name: 'Contact Us', href: '/contact-us' },
        { name: 'Sitemap', href: '#sitemap' }
      ]
    }
  ]

  return (
    <footer className="relative text-white overflow-hidden">

      {/* ── Ratings Band ── full-width black */}
      <div className="bg-[#000] border-t border-zinc-900 border-b border-zinc-900 py-14">
        <div className="w-full max-w-[1600px] mx-auto px-8">
          <div className="flex justify-center items-center gap-6 flex-wrap">
            {/* Google rating card */}
            <div className="flex items-center gap-4 bg-zinc-950 border border-zinc-800 rounded-xl py-3.5 px-6 min-w-[240px] shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:border-zinc-700">
              <div className="flex items-center justify-center bg-zinc-900 p-2.5 rounded-xl border border-zinc-800">
                <svg className="w-7 h-7 text-[#2196F3]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C17.955 2.192 15.34 1 12.24 1 5.98 1 1 5.98 1 12.24s4.98 11.24 11.24 11.24c6.54 0 10.88-4.6 10.88-11.08 0-.743-.08-1.32-.178-1.889H12.24z" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[0.7rem] font-extrabold tracking-widest text-zinc-400 uppercase leading-none mb-1.5">GOOGLE</span>
                <div className="flex items-center gap-2">
                  <RatingStars rating={4.5} />
                  <span className="text-sm font-extrabold text-white leading-none mt-0.5">4.5</span>
                </div>
              </div>
            </div>

            {/* Clutch rating card */}
            <div className="flex items-center gap-4 bg-zinc-950 border border-zinc-800 rounded-xl py-3.5 px-6 min-w-[240px] shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:border-zinc-700">
              <div className="flex items-center justify-center bg-zinc-900 p-2.5 rounded-xl border border-zinc-800">
                <svg className="w-7 h-7 text-[#2196F3]" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="3" y="3" width="6" height="6" rx="1.5" />
                  <rect x="3" y="11" width="6" height="6" rx="1.5" />
                  <rect x="3" y="19" width="6" height="6" rx="1.5" />
                  <rect x="11" y="3" width="10" height="6" rx="1.5" />
                  <rect x="11" y="11" width="10" height="6" rx="1.5" />
                  <rect x="11" y="19" width="10" height="6" rx="1.5" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[0.7rem] font-extrabold tracking-widest text-zinc-400 uppercase leading-none mb-1.5">CLUTCH</span>
                <div className="flex items-center gap-2">
                  <RatingStars rating={4.6} />
                  <span className="text-sm font-extrabold text-white leading-none mt-0.5">4.6</span>
                </div>
              </div>
            </div>

            {/* GoodFirm rating card */}
            <div className="flex items-center gap-4 bg-zinc-950 border border-zinc-800 rounded-xl py-3.5 px-6 min-w-[240px] shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:border-zinc-700">
              <div className="flex items-center justify-center bg-zinc-900 p-2.5 rounded-xl border border-zinc-800">
                <svg className="w-7 h-7 text-[#2196F3]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c-.55 0-1 .45-1 1v1.17c-.77.13-1.5.38-2.17.75L7.66 3.75c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l1.17 1.17c-.37.67-.62 1.4-.75 2.17H5.5c-.55 0-1 .45-1 1s.45 1 1 1h1.17c.13.77.38 1.5.75 2.17l-1.17 1.17c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.17-1.17c.67.37 1.4.62 2.17.75v1.17c0 .55.45 1 1 1s1-.45 1-1v-1.17c.77-.13 1.5-.38 2.17-.75l1.17 1.17c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-1.17-1.17c.37-.67.62-1.4.75-2.17h1.17c.55 0 1-.45 1-1s-.45-1-1-1h-1.17c-.13-.77-.38-1.5-.75-2.17l1.17-1.17c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0l-1.17 1.17c-.67-.37-1.4-.62-2.17-.75V3c0-.55-.45-1-1-1zm0 7a3 3 0 110 6 3 3 0 010-6z" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[0.7rem] font-extrabold tracking-widest text-zinc-400 uppercase leading-none mb-1.5">GOODFIRM</span>
                <div className="flex items-center gap-2">
                  <RatingStars rating={4.8} />
                  <span className="text-sm font-extrabold text-white leading-none mt-0.5">4.8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Footer Body ── bg-[#222] */}
      <div className="relative bg-[#222] pt-16 overflow-hidden">
        {/* Tech grid/dot background pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,1) 1.5px, transparent 0)`,
            backgroundSize: '28px 28px'
          }}
        ></div>

        <div className="relative w-full max-w-[1600px] mx-auto px-8 z-10">


          {/* Main Columns Grid */}
          <div className="grid grid-cols-5 gap-12 max-[1200px]:grid-cols-3 max-[768px]:grid-cols-2 max-[480px]:grid-cols-1 mb-16">

            {/* Column 1: Brand Info */}
            <div className="flex flex-col gap-6 text-left max-[1200px]:col-span-3 max-[768px]:col-span-2 max-[480px]:col-span-1">
              <Link to="/" className="flex items-center">
                <img src={logo} alt="ezrankings logo" className="h-11 max-h-11 object-contain" />
              </Link>
              <p className="text-zinc-400 text-[0.9rem] leading-relaxed max-w-sm">
                A digital marketing agency focused on full-funnel business growth. Connecting branding with visibility, traffic, lead generation, and revenue growth.
              </p>

              {/* Social Media Icons */}
              <div className="flex gap-2.5 mt-2 flex-wrap">
                {/* Facebook */}
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-9 h-9 rounded-full bg-zinc-950 border border-zinc-900 text-zinc-400 transition-all duration-200 hover:bg-zinc-800 hover:text-white" aria-label="Facebook">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-9 h-9 rounded-full bg-zinc-950 border border-zinc-900 text-zinc-400 transition-all duration-200 hover:bg-zinc-800 hover:text-white" aria-label="Instagram">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-9 h-9 rounded-full bg-zinc-950 border border-zinc-900 text-zinc-400 transition-all duration-200 hover:bg-zinc-800 hover:text-white" aria-label="LinkedIn">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                {/* X / Twitter */}
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-9 h-9 rounded-full bg-zinc-950 border border-zinc-900 text-zinc-400 transition-all duration-200 hover:bg-zinc-800 hover:text-white" aria-label="X (Twitter)">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

              </div>
            </div>

            {/* Navigation Columns */}
            {navigationColumns.map((col, idx) => (
              <div key={idx} className="flex flex-col text-left">
                <h4 className="relative text-[0.85rem] font-black uppercase tracking-wider text-white mb-6 pb-2.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-primary">
                  {col.title}
                </h4>
                <ul className="list-none flex flex-col gap-3">
                  {col.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      {link.href.startsWith('/') ? (
                        <Link
                          to={link.href}
                          className="relative text-zinc-400 text-[0.88rem] font-semibold transition-all duration-200 hover:text-primary inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1.5px] after:bg-primary after:transition-all after:duration-250 hover:after:w-full"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="relative text-zinc-400 text-[0.88rem] font-semibold transition-all duration-200 hover:text-primary inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1.5px] after:bg-primary after:transition-all after:duration-250 hover:after:w-full"
                        >
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>

          {/* Bottom Section: Badges */}
          <div className="border-t border-zinc-900 pt-8 mt-12 pb-8">
            <div className="flex justify-center items-center gap-4 flex-wrap">
              {/* 1. Copyscape badge */}
              <div className="bg-white border border-zinc-200 rounded-md py-1.5 px-3 flex items-center gap-2 select-none h-10 shadow-sm">
                <span className="w-4.5 h-4.5 rounded-full bg-zinc-800 text-white flex items-center justify-center font-bold text-[9px]">C</span>
                <div className="flex flex-col text-left">
                  <span className="text-[6px] text-zinc-500 font-extrabold uppercase leading-none">PROTECTED BY</span>
                  <span className="text-[9px] text-zinc-850 font-black tracking-tight leading-none mt-0.5">COPYSCAPE</span>
                </div>
              </div>

              {/* 2. DMCA badge */}
              <div className="bg-white border border-zinc-200 rounded-md overflow-hidden flex items-center select-none h-10 shadow-sm">
                <div className="bg-[#0070bc] text-white font-extrabold px-2 h-full flex items-center text-[9px] tracking-tight">DMCA</div>
                <div className="text-zinc-800 font-extrabold px-2 h-full flex items-center text-[8px] tracking-wider uppercase bg-white">PROTECTED</div>
              </div>

              {/* 3. ISO 9001:2015 */}
              <div className="bg-white border border-zinc-200 rounded-md py-1.5 px-3 flex flex-col items-center justify-center select-none h-10 shadow-sm min-w-[70px]">
                <span className="text-[10px] text-zinc-900 font-black tracking-widest leading-none">ISO</span>
                <span className="text-[6px] text-zinc-500 font-bold tracking-tight leading-none mt-1">9001:2015</span>
              </div>

              {/* 4. Red Herring 100 Winner */}
              <div className="bg-white border border-zinc-200 rounded-md py-1.5 px-3 flex items-center gap-1.5 select-none h-10 shadow-sm">
                <span className="w-4.5 h-4.5 rounded-full bg-red-600 text-white flex items-center justify-center font-black text-[8px] italic">R</span>
                <div className="flex flex-col text-left">
                  <span className="text-[6px] text-red-600 font-extrabold uppercase leading-none">RED HERRING</span>
                  <span className="text-[8.5px] text-zinc-850 font-black tracking-tight leading-none mt-0.5">100 WINNER</span>
                </div>
              </div>

              {/* 5. Clutch badge */}
              <div className="bg-white border border-zinc-200 rounded-md py-1.5 px-3 flex items-center gap-1.5 select-none h-10 shadow-sm">
                <svg className="w-3.5 h-3.5 text-zinc-900" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="6" height="6" rx="1" />
                  <rect x="2" y="9" width="6" height="6" rx="1" />
                  <rect x="2" y="16" width="6" height="6" rx="1" />
                  <rect x="9" y="2" width="13" height="6" rx="1" />
                  <rect x="9" y="9" width="13" height="6" rx="1" />
                  <rect x="9" y="16" width="13" height="6" rx="1" />
                </svg>
                <span className="text-[10px] text-zinc-900 font-extrabold tracking-tight">Clutch</span>
              </div>

              {/* 6. Google Partner */}
              <div className="bg-white border border-zinc-200 rounded-md py-1 px-3.5 flex items-center justify-center select-none h-10 shadow-sm">
                <div className="flex flex-col text-left justify-center h-full">
                  <div className="flex items-center text-[10px] font-bold tracking-tight leading-none">
                    <span className="text-blue-500">G</span>
                    <span className="text-red-500">o</span>
                    <span className="text-yellow-500">o</span>
                    <span className="text-blue-500">g</span>
                    <span className="text-green-500">l</span>
                    <span className="text-red-500">e</span>
                  </div>
                  <span className="text-[7px] text-zinc-400 font-extrabold tracking-widest uppercase leading-none mt-1">Partner</span>
                </div>
              </div>

              {/* 7. HubSpot */}
              <div className="bg-white border border-zinc-200 rounded-md py-1.5 px-3 flex items-center gap-1.5 select-none h-10 shadow-sm">
                <div className="flex items-center">
                  <svg className="w-3.5 h-3.5 text-[#ff7a59]" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="6" r="3.2" />
                    <circle cx="6" cy="15" r="3.2" />
                    <circle cx="18" cy="15" r="3.2" />
                    <line x1="12" y1="6" x2="6" y2="15" stroke="#ff7a59" strokeWidth="2.2" />
                    <line x1="12" y1="6" x2="18" y2="15" stroke="#ff7a59" strokeWidth="2.2" />
                    <line x1="6" y1="15" x2="18" y2="15" stroke="#ff7a59" strokeWidth="2.2" />
                  </svg>
                </div>
                <span className="text-[10px] text-zinc-900 font-extrabold tracking-tight">HubSpot</span>
              </div>

            </div>
          </div>{/* end badges inner container */}

        </div>{/* end max-w-[1600px] container */}
      </div>{/* end bg-[#222] main body */}

      {/* Other Locations Strip */}
      <div className="relative border-t border-zinc-900 bg-black">
        <div className="w-full max-w-[1600px] mx-auto px-8 py-6">
          {/* Section Label */}
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-4 h-4 text-primary shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span className="text-primary text-[0.78rem] font-extrabold uppercase tracking-[0.12em]">Other Locations We Serve</span>
          </div>

          {/* Locations List */}
          <div className="flex flex-wrap items-center gap-0">
            {[
              'California', 'Dallas', 'New York', 'Los Angeles', 'Pennsylvania',
              'San Diego', 'Canada', 'SEO Delhi', 'PPC Delhi', 'ORM Delhi',
              'Local SEO Delhi', 'Design Delhi', 'Development Delhi'
            ].map((location, idx, arr) => (
              <span key={idx} className="flex items-center">
                <a
                  href={`#${location.toLowerCase().replace(/\s+/g, '-')}`}
                  className="relative text-zinc-400 text-[0.82rem] font-semibold transition-all duration-200 hover:text-primary whitespace-nowrap py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1.5px] after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
                >
                  {location}
                </a>
                {idx < arr.length - 1 && (
                  <span className="mx-2.5 text-zinc-700 text-[0.6rem] select-none">◆</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-zinc-900 bg-[#0a0a0a]">
        <div className="w-full max-w-[1600px] mx-auto px-8 py-4 flex justify-between items-center gap-4 max-[640px]:flex-col max-[640px]:text-center">
          <p className="text-zinc-500 text-[0.82rem]">
            © {new Date().getFullYear()} Profito Interactive. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#privacy" className="text-zinc-500 text-[0.82rem] font-semibold hover:text-white transition-colors duration-150">Privacy</a>
            <a href="#terms" className="text-zinc-500 text-[0.82rem] font-semibold hover:text-white transition-colors duration-150">Terms</a>
            <a href="#sitemap" className="text-zinc-500 text-[0.82rem] font-semibold hover:text-white transition-colors duration-150">Sitemap</a>
          </div>
        </div>
      </div>

    </footer>
  )
}
