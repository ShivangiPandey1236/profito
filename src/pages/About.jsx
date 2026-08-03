import React, { useEffect, useState, useRef } from 'react';
import { 
  Users, 
  Trophy, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Target, 
  Lightbulb, 
  BarChart3, 
  Handshake, 
  Quote,
  Award,
  Cpu,
  BookOpen,
  Search,
  ShieldCheck,
  HeartHandshake
} from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const timelineEvents = [
    { year: '2014', title: 'Agency Founded' },
    { year: '2017', title: '100+ Successful Projects' },
    { year: '2020', title: 'Expanded Across India' },
    { year: '2023', title: 'Introduced AI Marketing Solutions' },
    { year: '2026', title: 'Serving Global Clients' },
  ];

  const features = [
    {
      icon: Target,
      iconBg: 'bg-[#2196F3]/10 text-primary border-[#2196F3]/20',
      lineColor: 'bg-primary',
      title: 'Strategy First',
      description: 'We start with deep research to craft strategies that deliver maximum impact.',
    },
    {
      icon: Lightbulb,
      iconBg: 'bg-[#2196F3]/10 text-primary border-[#2196F3]/20',
      lineColor: 'bg-primary',
      title: 'Creative Thinking',
      description: 'Our creative solutions capture attention and build strong brand connections.',
    },
    {
      icon: BarChart3,
      iconBg: 'bg-[#2196F3]/10 text-primary border-[#2196F3]/20',
      lineColor: 'bg-primary',
      title: 'Performance Tracking',
      description: 'We track, analyze, and optimize campaigns for real-time measurable results.',
    },
    {
      icon: Handshake,
      iconBg: 'bg-[#2196F3]/10 text-primary border-[#2196F3]/20',
      lineColor: 'bg-primary',
      title: 'Long-Term Partnership',
      description: 'We believe in growing together with trust, transparency, and shared success.',
    },
  ];

  const checklistItems = [
    'Data Driven Strategy',
    'Creative Execution',
    'Transparent Reporting',
    'Long-Term Partnership',
  ];

  const whyChooseUsCards = [
    {
      number: '01',
      icon: Award,
      title: 'Experienced Team',
      description: 'Highly qualified and dedicated specialists committed to strategy excellence, mentorship and holistic business growth.',
      bgStyle: 'bg-white border-[#2196F3]/15 hover:border-primary',
    },
    {
      number: '02',
      icon: Cpu,
      title: 'Advanced Infrastructure',
      description: 'State-of-the-art marketing technology, AI tools and analytics platforms that support practical execution and innovation.',
      bgStyle: 'bg-[#f4faff] border-[#2196F3]/20 hover:border-primary',
    },
    {
      number: '03',
      icon: BookOpen,
      title: 'Quality Execution',
      description: 'Data-integrated strategy with innovative methodologies, skill training and client-centric campaign execution.',
      bgStyle: 'bg-white border-[#2196F3]/15 hover:border-primary',
    },
    {
      number: '04',
      icon: Users,
      title: 'Hands-on Strategy',
      description: 'Strong emphasis on practical market exposure, performance optimization, case discussions and real-world results.',
      bgStyle: 'bg-[#f4faff] border-[#2196F3]/20 hover:border-primary',
    },
    {
      number: '05',
      icon: Search,
      title: 'Research & Innovation',
      description: 'Encouraging continuous research culture with data analysis, experimental frameworks and technology integrations.',
      bgStyle: 'bg-white border-[#2196F3]/15 hover:border-primary',
    },
    {
      number: '06',
      icon: ShieldCheck,
      title: 'Ethics & Values',
      description: 'Instilling professionalism, transparent metrics, ethical practices and accountability in every marketing campaign.',
      bgStyle: 'bg-[#f4faff] border-[#2196F3]/20 hover:border-primary',
    },
    {
      number: '07',
      icon: TrendingUp,
      title: 'Growth Support',
      description: 'Continuous guidance and support for scaling brands, competitive market analysis and long-term business pathways.',
      bgStyle: 'bg-white border-[#2196F3]/15 hover:border-primary',
    },
    {
      number: '08',
      icon: HeartHandshake,
      title: 'Client-Centered Care',
      description: 'Dedicated care, transparent communication, and unwavering commitment towards achieving higher return on investment.',
      bgStyle: 'bg-[#f4faff] border-[#2196F3]/20 hover:border-primary',
    },
  ];

  return (
    <div className="about-page-wrapper bg-gradient-to-b from-white via-[#f4faff] to-[#eaf5ff] pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen text-black">
      <div ref={containerRef} className="max-w-[1400px] mx-auto">
        
        {/* SECTION 1: Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-16">
          
          {/* Left Column: Heading, Intro, CTAs & Stats Strip (Span 6) */}
          <div className={`lg:col-span-6 flex flex-col transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            
            {/* Badge matching Hero Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2196F3]/10 border border-[#2196F3]/30 text-primary font-bold text-xs uppercase tracking-wider mb-6 w-fit shadow-xs">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>ABOUT US</span>
            </div>

            {/* Main Headline with Hero Highlight style */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-[#0a0a0a] leading-[1.12] tracking-tight mb-6" style={{ color: '#0a0a0a' }}>
              We Help Businesses <br className="hidden sm:inline" />
              Grow in the{' '}
              <span className="bg-gradient-to-r from-[#2196F3] via-[#42a5f5] to-[#2196F3] bg-clip-text text-transparent">
                Digital World.
              </span>
            </h1>

            {/* Paragraphs */}
            <div className="space-y-4 text-[#444444] text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              <p style={{ color: '#444444' }}>
                <strong className="text-[#0a0a0a] font-extrabold" style={{ color: '#0a0a0a' }}>Profito Interactive Growth Partners</strong> is a full-service digital marketing agency dedicated to delivering innovative strategies that drive visibility, engage audiences, and accelerate business growth.
              </p>
              <p style={{ color: '#444444' }}>
                With a passionate team of marketers, designers, and analysts, we combine creativity with data to build campaigns that deliver real, measurable results.
              </p>
            </div>

            {/* CTAs matching Hero buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#timeline"
                className="inline-flex items-center gap-3 bg-primary hover:bg-[#0a0a0a] text-white font-semibold text-sm px-6 py-3.5 rounded-full shadow-lg shadow-primary/25 border-2 border-primary hover:border-[#0a0a0a] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl group"
              >
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:rotate-45">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </span>
                <span className="text-white font-bold" style={{ color: '#ffffff' }}>Our Journey</span>
              </a>

              <a
                href="#why-choose-us"
                className="inline-flex items-center gap-2 border-2 border-primary/30 hover:border-primary bg-white/90 hover:bg-white text-[#333333] hover:text-primary font-bold text-sm px-6 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-xs hover:shadow-md group"
              >
                <span className="text-[#333333] font-extrabold group-hover:text-primary" style={{ color: '#333333' }}>Why Choose Us</span>
                <ArrowRight className="w-4 h-4 text-[#333333] group-hover:text-primary transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Stats Strip matching Hero stats card styling */}
            <div className="bg-white/90 backdrop-blur-md border border-[#2196F3]/15 shadow-[0_12px_36px_-10px_rgba(33,150,243,0.12)] rounded-2xl p-5 sm:p-6 grid grid-cols-3 gap-3 divide-x divide-zinc-200 max-w-xl hover:border-[#2196F3]/30 transition-all duration-300">
              {/* Stat 1 */}
              <div className="flex items-center gap-3 px-2 sm:px-3 first:pl-0">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#2196F3]/10 border border-[#2196F3]/20 flex items-center justify-center text-primary shrink-0">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#0a0a0a] leading-none mb-1" style={{ color: '#0a0a0a' }}>12+</div>
                  <div className="text-xs font-bold text-[#555555] leading-tight" style={{ color: '#555555' }}>Years Experience</div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-3 px-2 sm:px-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#2196F3]/10 border border-[#2196F3]/20 flex items-center justify-center text-primary shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#0a0a0a] leading-none mb-1" style={{ color: '#0a0a0a' }}>650+</div>
                  <div className="text-xs font-bold text-[#555555] leading-tight" style={{ color: '#555555' }}>Happy Clients</div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-3 px-2 sm:px-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#2196F3]/10 border border-[#2196F3]/20 flex items-center justify-center text-primary shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#0a0a0a] leading-none mb-1" style={{ color: '#0a0a0a' }}>98%</div>
                  <div className="text-xs font-bold text-[#555555] leading-tight" style={{ color: '#555555' }}>Retention Rate</div>
                </div>
              </div>
            </div>

          </div>

          {/* Middle Column: Vertical Timeline (Span 2) */}
          <div id="timeline" className={`lg:col-span-2 flex flex-col items-center justify-center py-6 relative transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative flex flex-col items-center space-y-9 sm:space-y-10 my-auto">
              
              {/* Vertical connecting line */}
              <div className="absolute top-3 bottom-3 w-0.5 bg-gradient-to-b from-[#2196F3]/20 via-[#2196F3] to-[#2196F3]/20 left-1/2 -translate-x-1/2 z-0" />

              {timelineEvents.map((event, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center group cursor-pointer">
                  {/* Node Dot */}
                  <div className="w-5 h-5 rounded-full bg-primary border-4 border-white shadow-[0_0_12px_rgba(33,150,243,0.4)] group-hover:scale-125 group-hover:bg-[#0a0a0a] transition-all duration-300" />
                  
                  {/* Event Text */}
                  <div className="mt-1 bg-white/95 px-2.5 py-1 rounded-lg border border-[#2196F3]/20 shadow-xs group-hover:border-primary group-hover:shadow-md transition-all duration-300">
                    <span className="block font-black text-primary text-sm leading-none">{event.year}</span>
                    <span className="block text-[0.75rem] font-bold text-[#0a0a0a] mt-0.5 whitespace-nowrap" style={{ color: '#0a0a0a' }}>{event.title}</span>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Right Column: "Trusted by Businesses Worldwide" Card (Span 4) */}
          <div className={`lg:col-span-4 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-b from-[#f4faff] via-white to-[#eaf5ff] border border-[#2196F3]/20 shadow-[0_15px_40px_rgba(33,150,243,0.1)] rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between h-full hover:shadow-[0_20px_50px_rgba(33,150,243,0.15)] transition-all duration-500">
              
              {/* Ambient Background Glow */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                {/* 5 Stars using Homepage #2196F3 fill */}
                <div className="flex items-center gap-1 text-primary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Card Title */}
                <h2 className="text-2xl sm:text-3xl font-black text-[#0a0a0a] tracking-tight mb-5 leading-snug" style={{ color: '#0a0a0a' }}>
                  Trusted by <br />
                  Businesses Worldwide
                </h2>

                {/* Quote Box */}
                <div className="relative bg-white/90 border border-[#2196F3]/20 rounded-2xl p-4 sm:p-5 mb-6 shadow-xs group hover:border-primary/50 transition-all duration-300">
                  <Quote className="w-8 h-8 text-primary/20 absolute top-3 right-3 pointer-events-none" />
                  <p className="text-[#333333] italic text-sm sm:text-base leading-relaxed font-bold relative z-10" style={{ color: '#333333' }}>
                    “We believe every campaign should create measurable business growth, not just impressions.”
                  </p>
                </div>

                {/* Checklist */}
                <ul className="space-y-3 mb-8">
                  {checklistItems.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#0a0a0a] font-extrabold text-sm sm:text-base group">
                      <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-[#0a0a0a] font-extrabold text-sm sm:text-base" style={{ color: '#0a0a0a' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Progress Bar Section */}
              <div className="pt-5 border-t border-[#2196F3]/15">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-extrabold text-sm text-[#0a0a0a]" style={{ color: '#0a0a0a' }}>Growth Success</span>
                  <span className="font-black text-sm text-primary">92%</span>
                </div>
                <div className="w-full h-3 bg-primary/10 rounded-full overflow-hidden p-0.5">
                  <div
                    className="h-full bg-gradient-to-r from-primary via-[#42a5f5] to-primary rounded-full transition-all duration-1000 shadow-xs"
                    style={{ width: isVisible ? '92%' : '0%' }}
                  />
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* SECTION 2: 4 Top Feature Cards */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} mb-24`}>
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#2196F3]/15 hover:border-primary shadow-xs hover:shadow-[0_12px_36px_-10px_rgba(33,150,243,0.15)] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Box */}
                  <div className={`w-12 h-12 rounded-2xl ${feat.iconBg} border flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 shadow-2xs`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Accent Line */}
                  <h3 className="text-lg font-black text-[#0a0a0a] mb-2 group-hover:text-primary transition-colors duration-200" style={{ color: '#0a0a0a' }}>
                    {feat.title}
                  </h3>
                  <div className={`w-8 h-0.5 ${feat.lineColor} rounded-full mb-3 transition-all duration-300 group-hover:w-14`} />

                  {/* Description */}
                  <p className="text-[#555555] text-sm leading-relaxed font-medium" style={{ color: '#555555' }}>
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* SECTION 3: WHY CHOOSE US (8-Card Grid matching user mockup image) */}
        <div id="why-choose-us" className="pt-8 border-t border-[#2196F3]/15">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-0.5 bg-primary rounded-full" />
              <span className="text-xs font-black tracking-widest text-primary uppercase">WHY CHOOSE US</span>
              <span className="w-8 h-0.5 bg-primary rounded-full" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a0a0a] tracking-tight mb-4" style={{ color: '#0a0a0a' }}>
              Excellence. Experience.{' '}
              <span className="bg-gradient-to-r from-primary via-[#42a5f5] to-primary bg-clip-text text-transparent">
                Every Time.
              </span>
            </h2>

            <p className="text-[#555555] text-base sm:text-lg leading-relaxed font-medium" style={{ color: '#555555' }}>
              We combine strategic excellence, advanced infrastructure and dedicated client care to create a better digital growth and business performance experience.
            </p>
          </div>

          {/* 8 Cards Grid (2 rows of 4 cols) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUsCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className={`relative ${card.bgStyle} border rounded-2xl p-6 sm:p-7 flex flex-col items-center text-center shadow-xs hover:shadow-[0_15px_40px_rgba(33,150,243,0.15)] transition-all duration-300 hover:-translate-y-2 group`}
                >
                  {/* Top-left Pill Badge using primary color */}
                  <div className="absolute top-4 left-4 w-7 h-7 rounded-lg bg-primary text-white font-black text-xs flex items-center justify-center shadow-xs">
                    {card.number}
                  </div>

                  {/* Circular Icon Disc with Primary Arc */}
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-[#2196F3]/20 shadow-md flex items-center justify-center mb-6 relative mt-2 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-9 h-9 text-primary" />
                    {/* Bottom Arc Highlight */}
                    <div className="absolute -bottom-1 w-10 h-1.5 bg-primary rounded-full shadow-[0_0_10px_rgba(33,150,243,0.5)]" />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg font-black text-[#0a0a0a] mb-2 group-hover:text-primary transition-colors duration-200" style={{ color: '#0a0a0a' }}>
                    {card.title}
                  </h3>

                  {/* Accent Line under title */}
                  <div className="w-7 h-0.5 bg-primary/60 rounded-full mb-3 group-hover:w-12 transition-all duration-300" />

                  {/* Card Description */}
                  <p className="text-[#555555] text-sm leading-relaxed font-medium" style={{ color: '#555555' }}>
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;
