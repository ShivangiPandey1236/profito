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
  Quote 
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
      iconBg: 'bg-blue-50 text-primary border-blue-200',
      lineColor: 'bg-primary',
      title: 'Strategy First',
      description: 'We start with deep research to craft strategies that deliver maximum impact.',
    },
    {
      icon: Lightbulb,
      iconBg: 'bg-sky-50 text-sky-600 border-sky-200',
      lineColor: 'bg-sky-500',
      title: 'Creative Thinking',
      description: 'Our creative solutions capture attention and build strong brand connections.',
    },
    {
      icon: BarChart3,
      iconBg: 'bg-cyan-50 text-cyan-600 border-cyan-200',
      lineColor: 'bg-cyan-500',
      title: 'Performance Tracking',
      description: 'We track, analyze, and optimize campaigns for real-time measurable results.',
    },
    {
      icon: Handshake,
      iconBg: 'bg-amber-50 text-amber-600 border-amber-200',
      lineColor: 'bg-amber-500',
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

  return (
    <div className="about-page-wrapper bg-gradient-to-b from-slate-50 via-white to-blue-50/40 pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen text-black">
      <div ref={containerRef} className="max-w-[1400px] mx-auto">
        
        {/* Main Grid: Left Content, Middle Timeline, Right Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-16">
          
          {/* Left Column: Heading, Intro, CTAs & Stats Strip (Span 6) */}
          <div className={`lg:col-span-6 flex flex-col transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-wider mb-6 w-fit shadow-xs">
              <Users className="w-3.5 h-3.5 text-primary" />
              <span>ABOUT US</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-black leading-[1.12] tracking-tight mb-6" style={{ color: '#000000' }}>
              We Help Businesses <br className="hidden sm:inline" />
              Grow in the{' '}
              <span className="bg-gradient-to-r from-primary via-blue-600 to-sky-400 bg-clip-text text-transparent">
                Digital World.
              </span>
            </h1>

            {/* Paragraphs */}
            <div className="space-y-4 text-zinc-800 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              <p style={{ color: '#27272a' }}>
                <strong className="text-black font-extrabold" style={{ color: '#000000' }}>Profito Interactive Growth Partners</strong> is a full-service digital marketing agency dedicated to delivering innovative strategies that drive visibility, engage audiences, and accelerate business growth.
              </p>
              <p style={{ color: '#27272a' }}>
                With a passionate team of marketers, designers, and analysts, we combine creativity with data to build campaigns that deliver real, measurable results.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#timeline"
                className="inline-flex items-center gap-3 bg-primary hover:bg-black text-white font-semibold text-sm px-6 py-3.5 rounded-full shadow-lg shadow-primary/25 border border-primary hover:border-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/35 group"
              >
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:rotate-45">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </span>
                <span className="text-white font-bold" style={{ color: '#ffffff' }}>Our Journey</span>
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 border-2 border-primary/30 hover:border-primary bg-white/90 hover:bg-white text-black hover:text-primary font-bold text-sm px-6 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-xs hover:shadow-md group"
              >
                <span className="text-black font-extrabold group-hover:text-primary" style={{ color: '#000000' }}>View Portfolio</span>
                <ArrowRight className="w-4 h-4 text-black group-hover:text-primary transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Stats Strip */}
            <div className="bg-white border border-blue-100 shadow-xl shadow-blue-500/5 rounded-2xl p-5 sm:p-6 grid grid-cols-3 gap-3 divide-x divide-zinc-200 max-w-xl hover:border-blue-200 transition-all duration-300">
              {/* Stat 1 */}
              <div className="flex items-center gap-3 px-2 sm:px-3 first:pl-0">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-primary shrink-0">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-black leading-none mb-1" style={{ color: '#000000' }}>12+</div>
                  <div className="text-xs font-bold text-zinc-700 leading-tight" style={{ color: '#3f3f46' }}>Years Experience</div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-3 px-2 sm:px-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-black leading-none mb-1" style={{ color: '#000000' }}>650+</div>
                  <div className="text-xs font-bold text-zinc-700 leading-tight" style={{ color: '#3f3f46' }}>Happy Clients</div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-3 px-2 sm:px-3">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-black leading-none mb-1" style={{ color: '#000000' }}>98%</div>
                  <div className="text-xs font-bold text-zinc-700 leading-tight" style={{ color: '#3f3f46' }}>Retention Rate</div>
                </div>
              </div>
            </div>

          </div>

          {/* Middle Column: Vertical Timeline (Span 2) */}
          <div id="timeline" className={`lg:col-span-2 flex flex-col items-center justify-center py-6 relative transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative flex flex-col items-center space-y-9 sm:space-y-10 my-auto">
              
              {/* Vertical connecting line */}
              <div className="absolute top-3 bottom-3 w-0.5 bg-gradient-to-b from-primary/30 via-primary to-sky-300 left-1/2 -translate-x-1/2 z-0" />

              {timelineEvents.map((event, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center group cursor-pointer">
                  {/* Node Dot */}
                  <div className="w-5 h-5 rounded-full bg-primary border-4 border-white shadow-md group-hover:scale-125 group-hover:bg-blue-600 group-hover:shadow-primary/50 transition-all duration-300" />
                  
                  {/* Event Text */}
                  <div className="mt-1 bg-white px-2.5 py-1 rounded-lg border border-blue-100 shadow-xs group-hover:border-primary group-hover:shadow-md transition-all duration-300">
                    <span className="block font-black text-primary text-sm leading-none">{event.year}</span>
                    <span className="block text-[0.75rem] font-bold text-zinc-900 mt-0.5 whitespace-nowrap" style={{ color: '#18181b' }}>{event.title}</span>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Right Column: "Trusted by Businesses Worldwide" Card (Span 4) */}
          <div className={`lg:col-span-4 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-b from-blue-50/90 via-white to-sky-50/50 border border-blue-100/90 shadow-2xl shadow-blue-500/10 rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between h-full hover:shadow-blue-500/15 transition-all duration-500">
              
              {/* Ambient Background Glow */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-sky-400/15 rounded-full blur-3xl pointer-events-none" />

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Card Title */}
                <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight mb-5 leading-snug" style={{ color: '#000000' }}>
                  Trusted by <br />
                  Businesses Worldwide
                </h2>

                {/* Quote Box */}
                <div className="relative bg-white border border-blue-100 rounded-2xl p-4 sm:p-5 mb-6 shadow-xs group hover:border-primary/40 transition-all duration-300">
                  <Quote className="w-8 h-8 text-primary/30 absolute top-3 right-3 pointer-events-none" />
                  <p className="text-zinc-900 italic text-sm sm:text-base leading-relaxed font-bold relative z-10" style={{ color: '#18181b' }}>
                    “We believe every campaign should create measurable business growth, not just impressions.”
                  </p>
                </div>

                {/* Checklist */}
                <ul className="space-y-3 mb-8">
                  {checklistItems.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-black font-extrabold text-sm sm:text-base group">
                      <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-black font-extrabold text-sm sm:text-base" style={{ color: '#000000' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Progress Bar Section */}
              <div className="pt-5 border-t border-blue-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-extrabold text-sm text-black" style={{ color: '#000000' }}>Growth Success</span>
                  <span className="font-black text-sm text-primary">92%</span>
                </div>
                <div className="w-full h-3 bg-blue-100/70 rounded-full overflow-hidden p-0.5">
                  <div
                    className="h-full bg-gradient-to-r from-primary via-blue-500 to-sky-400 rounded-full transition-all duration-1000 shadow-xs"
                    style={{ width: isVisible ? '92%' : '0%' }}
                  />
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Section: 4 Feature Cards */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-zinc-200 hover:border-primary/40 shadow-sm hover:shadow-xl hover:shadow-primary/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Box */}
                  <div className={`w-12 h-12 rounded-2xl ${feat.iconBg} border flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 shadow-2xs`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Accent Line */}
                  <h3 className="text-lg font-black text-black mb-2 group-hover:text-primary transition-colors duration-200" style={{ color: '#000000' }}>
                    {feat.title}
                  </h3>
                  <div className={`w-8 h-0.5 ${feat.lineColor} rounded-full mb-3 transition-all duration-300 group-hover:w-14`} />

                  {/* Description */}
                  <p className="text-zinc-700 text-sm leading-relaxed font-medium" style={{ color: '#3f3f46' }}>
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default About;
