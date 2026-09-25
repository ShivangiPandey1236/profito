import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Bot, FileSearch, TrendingUp, Sparkles, Smartphone, ShieldCheck, Code2, ArrowRight, Monitor, Paintbrush, Gauge, Layers, User, Building2 } from 'lucide-react'
import CTASection from '../components/CTASection'

import aiAssistantsImg from '../assets/web-devlopemnt-ai.avif'
import intelligentSearchImg from '../assets/Intelligent Search.jpg'
import predictiveAnalyticsImg from '../assets/predictive.jpg'
import mobileAppImg from '../assets/mobile-app-n.png'
import websiteDevelopmentImg from '../assets/website developemtt.png'
import blockchainImg from '../assets/blochain.png'

export default function WebDevelopment() {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback catch if autoplay requires explicit interaction on certain mobile webviews
      })
    }
  }, [])

  const aiCardsData = [
    {
      id: 'ai-assistants',
      title: 'AI Assistants',
      description: 'Empower your teams with autonomous agents capable of content generation, customer support, and seamless task automation.',
      image: aiAssistantsImg,
      icon: Bot,
      badgeColor: 'bg-[#2196F3]/20 border-[#2196F3] text-[#2196F3]'
    },
    {
      id: 'intelligent-search',
      title: 'Intelligent Search',
      description: 'Find the right information faster with AI-powered search that understands context and delivers accurate results.',
      image: intelligentSearchImg,
      icon: FileSearch,
      badgeColor: 'bg-[#2196F3]/20 border-[#2196F3] text-[#2196F3]'
    },
    {
      id: 'predictive-analytics',
      title: 'Predictive Analytics',
      description: 'Turn your data into foresight with AI-driven analytics that spot trends, minimize risks and unlock opportunities.',
      image: predictiveAnalyticsImg,
      icon: TrendingUp,
      badgeColor: 'bg-[#bcd32e]/20 border-[#bcd32e] text-[#bcd32e]'
    }
  ]

  return (
    <div className="pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto min-h-screen text-black">
      {/* 1st Section: Autoplay Background Video */}
      <section className="mb-16 overflow-hidden rounded-3xl shadow-2xl bg-black border border-slate-200 relative select-none pointer-events-none">
        <div className="relative w-full aspect-video">
          <video
            ref={videoRef}
            src="https://res.cloudinary.com/bbqz4jx1/video/upload/v1790230130/profito.mp4"
            className="w-full h-full object-cover pointer-events-none"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            disableRemotePlayback
          />
        </div>
      </section>

      {/* 2nd Section: Generative AI Solutions Section */}
      <section className="mb-24 py-6">
        {/* Top Eyebrow Subtitle */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-8 h-[2.5px] bg-[#2196F3] rounded-full"></span>
          <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#475569] uppercase font-sans">
            TRANSFORMING IDEAS INTO SMARTER SOLUTIONS
          </span>
          <span className="w-8 h-[2.5px] bg-[#bcd32e] rounded-full"></span>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-center !text-[#0f172a] tracking-tight mb-16 font-sans">
          With{' '}
          <span className="bg-gradient-to-r from-[#2196F3] via-[#00a0ff] to-[#bcd32e] bg-clip-text !text-transparent">
            Generative AI
          </span>{' '}
          <Sparkles className="inline-block w-8 h-8 sm:w-10 sm:h-10 text-[#2196F3] -mt-2 animate-pulse" />
        </h2>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {aiCardsData.map((card) => {
            const IconComponent = card.icon
            return (
              <div
                key={card.id}
                className="group relative h-[420px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/20 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Background Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/70 to-transparent group-hover:from-black/95 group-hover:via-black/90 group-hover:to-black/85 transition-all duration-500 ease-out" />

                {/* Card Content Overlay */}
                <div className="relative z-10 p-8 sm:p-9 h-full flex flex-col justify-start">
                  {/* Icon Badge */}
                  <div className={`w-13 h-13 rounded-2xl border backdrop-blur-md flex items-center justify-center mb-5 shadow-lg transition-transform duration-300 group-hover:scale-110 ${card.badgeColor}`}>
                    <IconComponent className="w-6 h-6 stroke-[2.2]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold !text-white mb-3 tracking-tight font-sans">
                    {card.title}
                  </h3>

                  {/* Description Paragraph (reveals smoothly on hover) */}
                  <div className="overflow-hidden">
                    <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-sans transition-all duration-500 ease-out opacity-0 max-h-0 translate-y-3 group-hover:opacity-100 group-hover:max-h-[180px] group-hover:translate-y-0">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* 3rd Section: Mobile Apps That Drive Results Section */}
      <section className="mb-24 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Features & CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Top Eyebrow Subtitle */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2.5px] bg-[#2196F3] rounded-full"></span>
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#475569] uppercase font-sans">
                MOBILE APPS
              </span>
              <span className="w-8 h-[2.5px] bg-[#bcd32e] rounded-full"></span>
            </div>

            {/* Main Heading with explicit color overrides */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black !text-[#0f172a] tracking-tight mb-6 font-sans leading-tight">
              Mobile Apps That{' '}
              <span className="inline-block bg-gradient-to-r from-[#2196F3] via-[#00a0ff] to-[#bcd32e] bg-clip-text !text-transparent">
                Drive Results
              </span>
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-10 font-sans max-w-2xl">
              We build high-performance mobile applications that combine intuitive design, robust functionality, and the power of AI to deliver exceptional user experiences.
            </p>

            {/* 3 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
              {/* Feature 1 */}
              <div className="bg-[#f0f9ff]/70 border border-sky-100/80 p-6 rounded-2xl flex flex-col justify-between hover:shadow-md transition-all duration-300">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#e0f2fe] text-[#2196F3] flex items-center justify-center mb-4">
                    <Smartphone className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <h3 className="text-lg font-bold !text-[#0f172a] mb-2 font-sans">
                    Custom App Development
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    Tailored mobile solutions that match your business needs and user expectations.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-[#f7fce6]/60 border border-lime-100/80 p-6 rounded-2xl flex flex-col justify-between hover:shadow-md transition-all duration-300">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#e6f4a8] text-[#556900] flex items-center justify-center mb-4">
                    <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <h3 className="text-lg font-bold !text-[#0f172a] mb-2 font-sans">
                    Secure & Scalable
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    Built with modern architecture to ensure security, performance and long-term growth.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-[#f0f9ff]/70 border border-sky-100/80 p-6 rounded-2xl flex flex-col justify-between hover:shadow-md transition-all duration-300">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#e0f2fe] text-[#2196F3] flex items-center justify-center mb-4">
                    <Code2 className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <h3 className="text-lg font-bold !text-[#0f172a] mb-2 font-sans">
                    Seamless Experience
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    Smooth, responsive and user-friendly apps that work flawlessly across devices.
                  </p>
                </div>
              </div>
            </div>

            {/* Build With Us Button */}
            <div>
              <Link
                to="/contact-us"
                className="bg-primary !text-white border border-primary rounded-full py-3.5 px-8 font-semibold inline-flex items-center gap-2 text-base shadow-[0_4px_14px_rgba(33,150,243,0.25)] transition-all duration-250 hover:bg-black hover:border-black hover:!text-white hover:-translate-y-0.5"
              >
                Build With Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Column: 3D Smartphone Illustration Image */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[500px] lg:max-w-[580px]">
              <img
                src={mobileAppImg}
                alt="Mobile Apps That Drive Results"
                className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4th Section: Transforming Industries Through Blockchain Section */}
      <section className="mb-24 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: 3D Ethereum Robotic Hand Visual Asset Image */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[480px] lg:max-w-[440px]">
              <img
                src={blockchainImg}
                alt="Transforming Industries Through Blockchain"
                className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column: Heading, Subtitle & 5 Cards Grid */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Top Eyebrow Subtitle */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2.5px] bg-[#2196F3] rounded-full"></span>
              <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#475569] uppercase font-sans">
                BLOCKCHAIN & WEB3
              </span>
              <span className="w-8 h-[2.5px] bg-[#bcd32e] rounded-full"></span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black !text-[#0f172a] tracking-tight mb-4 font-sans leading-tight">
              Transforming Industries{' '}
              <span className="block bg-gradient-to-r from-[#2196F3] via-[#00a0ff] to-[#6366f1] bg-clip-text !text-transparent">
                Through Blockchain
              </span>
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed mb-10 font-sans max-w-2xl">
              Harness The Power Of Blockchain Technology For Secure And Transparent Financial Transactions
            </p>

            {/* 5 Feature Cards Grid (Row 1: 3 Cards, Row 2: 2 Cards) */}
            <div className="flex flex-col gap-5">
              {/* Top Row: 3 Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {/* Card 1 */}
                <div className="bg-[#f0f9ff]/70 border border-sky-100/80 p-5 rounded-2xl flex flex-col justify-between hover:shadow-md transition-all duration-300">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#e0f2fe] text-[#2196F3] flex items-center justify-center mb-3">
                      <User className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <h3 className="text-base font-bold !text-[#0f172a] mb-1.5 font-sans leading-snug">
                      Consulting and Strategy
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      Reduce risk with a clear roadmap. We handle use case validation, platform selection, and architecture to ensure visible MVPs.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-[#f0f9ff]/70 border border-sky-100/80 p-5 rounded-2xl flex flex-col justify-between hover:shadow-md transition-all duration-300">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#e0f2fe] text-[#2196F3] flex items-center justify-center mb-3">
                      <Code2 className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <h3 className="text-base font-bold !text-[#0f172a] mb-1.5 font-sans leading-snug">
                      dApp's & Smart Contracts
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      Engineered for scalability. We build robust, secure smart contracts and decentralized application with rigorous testing.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-[#f0f9ff]/70 border border-sky-100/80 p-5 rounded-2xl flex flex-col justify-between hover:shadow-md transition-all duration-300">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#e0f2fe] text-[#2196F3] flex items-center justify-center mb-3">
                      <Layers className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <h3 className="text-base font-bold !text-[#0f172a] mb-1.5 font-sans leading-snug">
                      Layer-2 Development
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      Increase throughput and lower costs. We implement high performance L2 solutions to reduce gas fees and latency for better UX.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Row: 2 Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Card 4 */}
                <div className="bg-[#f0f9ff]/70 border border-sky-100/80 p-5 rounded-2xl flex flex-col justify-between hover:shadow-md transition-all duration-300">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#e0f2fe] text-[#2196F3] flex items-center justify-center mb-3">
                      <Building2 className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <h3 className="text-base font-bold !text-[#0f172a] mb-1.5 font-sans leading-snug">
                      Enterprise and Permissioned Networks
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      We focus on governance and privacy. Our commitment ensures compliance with the highest standards.
                    </p>
                  </div>
                </div>

                {/* Card 5 */}
                <div className="bg-[#f0f9ff]/70 border border-sky-100/80 p-5 rounded-2xl flex flex-col justify-between hover:shadow-md transition-all duration-300">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#e0f2fe] text-[#2196F3] flex items-center justify-center mb-3">
                      <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <h3 className="text-base font-bold !text-[#0f172a] mb-1.5 font-sans leading-snug">
                      Security & Compliance
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      We prioritize security in engineering and follow global standards like GDPR and ISO/IEC 27001 to protect your data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5th Section: Website Development That Drives Growth Section */}
      <section className="mb-24 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Paragraph, CTA & 4 Horizontal Feature Badges */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black !text-[#0f172a] tracking-tight mb-6 font-sans leading-[1.15]">
              Website Development{' '}
              <span className="block bg-gradient-to-r from-[#2196F3] via-[#00a0ff] to-[#bcd32e] bg-clip-text !text-transparent">
                That Drives Growth.
              </span>
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 font-sans max-w-xl">
              We build modern, high-performing websites that help your business stand out, engage users, and achieve real results.
            </p>

            {/* CTA Button */}
            <div className="mb-14">
              <Link
                to="/get-a-quote"
                className="bg-primary !text-white border border-primary rounded-full py-3.5 px-8 font-semibold inline-flex items-center gap-2 text-base shadow-[0_4px_14px_rgba(33,150,243,0.25)] transition-all duration-250 hover:bg-black hover:border-black hover:!text-white hover:-translate-y-0.5"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Bottom 4 Horizontal Features Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-slate-200/80">
              {/* Feature 1 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#e0f2fe] text-[#2196F3] flex items-center justify-center shrink-0">
                  <Monitor className="w-5 h-5 stroke-[2.2]" />
                </div>
                <span className="text-xs sm:text-sm font-bold !text-[#0f172a] font-sans leading-tight">
                  Responsive Websites
                </span>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#e0f2fe] text-[#2196F3] flex items-center justify-center shrink-0">
                  <Paintbrush className="w-5 h-5 stroke-[2.2]" />
                </div>
                <span className="text-xs sm:text-sm font-bold !text-[#0f172a] font-sans leading-tight">
                  Modern UI/UX
                </span>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#e0f2fe] text-[#2196F3] flex items-center justify-center shrink-0">
                  <Gauge className="w-5 h-5 stroke-[2.2]" />
                </div>
                <span className="text-xs sm:text-sm font-bold !text-[#0f172a] font-sans leading-tight">
                  Fast Performance
                </span>
              </div>

              {/* Feature 4 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#e0f2fe] text-[#2196F3] flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5 stroke-[2.2]" />
                </div>
                <span className="text-xs sm:text-sm font-bold !text-[#0f172a] font-sans leading-tight">
                  Scalable Solutions
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Illustration Graphic Asset Image */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="relative w-full max-w-[920px]">
              <img
                src={websiteDevelopmentImg}
                alt="Website Development That Drives Growth"
                className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="mb-12">
        <CTASection />
      </div>
    </div>
  )
}
