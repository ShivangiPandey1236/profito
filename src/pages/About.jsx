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
  HeartHandshake,
  ChevronLeft,
  ChevronRight,
  PartyPopper,
  Heart,
  Mail
} from 'lucide-react';
import teamImg from '../assets/team.jpeg';
import teamCelebrationImg from '../assets/profito_team_celebration.png';
import teamCollaborationImg from '../assets/profito_team_collaboration.png';
import teamCAreerIMg from '../assets/profito-career.png';
import teamMeetingImg from '../assets/profito_team_meeting.png';
import googleAdwordsImg from '../assets/googleadwords.png';
import gemLogoImg from '../assets/gem-logo-n2-200120.png';
import gemLogo1Img from '../assets/gem-logo-n2-200120 (1).png';
import isoLogoImg from '../assets/iso-logo.png';
import godaddyImg from '../assets/godaddy.png';
import paypalImg from '../assets/paypal.png';
import seoCertImg from '../assets/seocertication.png';
import zopperLogoImg from '../assets/zopper-logo1.png';
import businessTodayImg from '../assets/businesstoday.png';
import designRushImg from '../assets/Designrush.png';
import etImg from '../assets/et.png';
import zeeNewsImg from '../assets/zee-news.png';
import siliconIndiaImg from '../assets/siliconindia.png';
import indiaTvImg from '../assets/indiatv-logo.jpg';
import CTASection from '../components/CTASection';

// CountUp Component for animated number counting on scroll
function CountUp({ end, duration = 1600, decimals = 0, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const current = elementRef.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let startTime = null;
    const startValue = 0;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentValue = startValue + easeProgress * (end - startValue);
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [started, end, duration]);

  return (
    <span ref={elementRef}>
      {decimals > 0 ? count.toFixed(decimals) : Math.round(count)}
      {suffix}
    </span>
  );
}

const About = () => {
  const containerRef = useRef(null);
  const [progressWidth, setProgressWidth] = useState('0%');
  const progressRef = useRef(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const elements = root.querySelectorAll(
      '.reveal-on-scroll, .reveal-left, .reveal-right, .reveal-scale'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = progressRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProgressWidth('92%');
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Leadership Carousel State
  const [currentIndex, setCurrentIndex] = useState(0);

  // Life at Profito Carousel State
  const [lifeSlideIndex, setLifeSlideIndex] = useState(0);

  const lifeSlides = [
    {
      main: teamCollaborationImg,
      topRight: teamMeetingImg,
      bottomRight: teamCelebrationImg,
    },
    {
      main: teamMeetingImg,
      topRight: teamCelebrationImg,
      bottomRight: teamCollaborationImg,
    },
    {
      main: teamCelebrationImg,
      topRight: teamCollaborationImg,
      bottomRight: teamMeetingImg,
    },
  ];

  const awardsList = [
    { img: googleAdwordsImg, title: 'Google Partner Certified' },
    { img: gemLogoImg, title: 'GeM Registered Seller' },
    { img: gemLogo1Img, title: 'GeM Official Partner' },
    { img: seoCertImg, title: 'SEO Excellence Certified' },
    { img: isoLogoImg, title: 'ISO 27001 Certified' },
    { img: godaddyImg, title: 'GoDaddy Verified Partner' },
    { img: paypalImg, title: 'PayPal Merchant Partner' },
    { img: zopperLogoImg, title: 'Enterprise Solutions Partner' },
  ];

  const publicationsList = [
    { img: businessTodayImg, title: 'Business Today' },
    { img: designRushImg, title: 'DesignRush' },
    { img: etImg, title: 'The Economic Times' },
    { img: zeeNewsImg, title: 'Zee News' },
    { img: siliconIndiaImg, title: 'Silicon India' },
    { img: indiaTvImg, title: 'India TV News' },
    { img: businessTodayImg, title: 'Business Today Digital' },
    { img: etImg, title: 'ET BrandEquity' },
    { img: designRushImg, title: 'DesignRush Partner' },
    { img: zeeNewsImg, title: 'Zee Business' },
    { img: siliconIndiaImg, title: 'SiliconIndia Magazine' },
    { img: indiaTvImg, title: 'India TV' },
    { img: businessTodayImg, title: 'Business Today' },
    { img: etImg, title: 'The Economic Times' },
    { img: designRushImg, title: 'DesignRush' },
    { img: zeeNewsImg, title: 'Zee News' },
    { img: siliconIndiaImg, title: 'Silicon India' },
    { img: indiaTvImg, title: 'India TV News' },
  ];

  const certificationsList = [
    {
      title: 'Google Partner',
      description: 'Certified Google Partner with proven expertise in Search, Display & Analytics',
      badge: 'CERTIFIED',
      type: 'google',
    },
    {
      title: 'Meta Business',
      description: 'Official Meta Business Partner for Facebook & Instagram advertising solutions',
      badge: 'PARTNER',
      type: 'meta',
    },
    {
      title: 'HubSpot Certified',
      description: 'HubSpot certified professionals delivering inbound marketing excellence',
      badge: 'CERTIFIED',
      type: 'hubspot',
    },
    {
      title: 'Bing Ads Certified',
      description: 'Microsoft Bing Ads certified for search advertising & campaign management',
      badge: 'CERTIFIED',
      type: 'bing',
    },
  ];
  const [visibleCount, setVisibleCount] = useState(4);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const leadershipTeam = [
    {
      name: 'Prateek Singh',
      role: 'Head of HR',
      bio: 'People are our greatest asset at Profito. As Head of HR, my role goes beyond recruitment and retention; it is about fostering a culture where everyone feels valued and empowered. We invest in the employees\' growth and well-being because their success is our success!',
      bgClass: 'bg-gradient-to-b from-[#f7fce6] via-white to-[#ecf8c0]',
      borderColor: 'border-[#bcd32e]',
      roleBadge: 'bg-[#bcd32e]/25 text-[#4c5900]',
      accentBar: 'bg-[#bcd32e]',
    },
    {
      name: 'Nitin Agarwal',
      role: 'CEO, MD',
      bio: 'As CMD of Profito, I lead a team that embodies innovation and excellence. Our vision is to surpass market expectations with a deeper understanding of tech landscape and a commitment to delivering value. We are expanding our global reach while staying true to our core values.',
      bgClass: 'bg-gradient-to-b from-[#f0f7ff] via-white to-[#e3f2fd]',
      borderColor: 'border-[#2196F3]/40',
      roleBadge: 'bg-[#2196F3]/15 text-[#0066cc]',
      accentBar: 'bg-[#2196F3]',
    },
    {
      name: 'Waseem Ahmad',
      role: 'CEO, Agency Business',
      bio: 'As CEO, Agency Business of Profito, I work with a team dedicated to operational excellence and client satisfaction. Our success is measured by the impact of our projects, not just profits. By fostering the culture of collaboration & continuous improvement, we ensure every endeavour advances us towards our goals.',
      bgClass: 'bg-gradient-to-b from-[#f9fde8] via-white to-[#f0f9cc]',
      borderColor: 'border-[#bcd32e]',
      roleBadge: 'bg-[#bcd32e]/25 text-[#4c5900]',
      accentBar: 'bg-[#bcd32e]',
    },
    {
      name: 'Himanshu Bohra',
      role: 'Director, Marketing',
      bio: 'Leading marketing at Profito is more than a job; it is our passion. In the digital world, we strive to connect meaningfully with our audience through innovative campaigns and compelling storytelling. Our goal is not simply sell products but to create lasting experiences.',
      bgClass: 'bg-gradient-to-b from-[#f4faff] via-white to-[#e0f2fe]',
      borderColor: 'border-[#2196F3]/40',
      roleBadge: 'bg-[#2196F3]/15 text-[#0066cc]',
      accentBar: 'bg-[#2196F3]',
    },
    {
      name: 'Vikram Sharma',
      role: 'Vice President, Technology',
      bio: 'Technology and AI are transforming digital marketing. At Profito, we pioneer cutting-edge tools and data-driven infrastructure to empower our clients with scalable, future-proof growth strategies.',
      bgClass: 'bg-gradient-to-b from-[#f8fce8] via-white to-[#eef8be]',
      borderColor: 'border-[#bcd32e]',
      roleBadge: 'bg-[#bcd32e]/25 text-[#4c5900]',
      accentBar: 'bg-[#bcd32e]',
    },
    {
      name: 'Ananya Roy',
      role: 'Chief Operating Officer',
      bio: 'Operational efficiency and seamless execution form the backbone of scalable marketing. We bridge strategy with flawless delivery to consistently outperform industry benchmarks.',
      bgClass: 'bg-gradient-to-b from-[#f0f9ff] via-white to-[#dbeafe]',
      borderColor: 'border-[#2196F3]/40',
      roleBadge: 'bg-[#2196F3]/15 text-[#0066cc]',
      accentBar: 'bg-[#2196F3]',
    },
    {
      name: 'Rohan Verma',
      role: 'Head of Performance',
      bio: 'Maximizing ROI for our clients is what drives us every single day. Through rapid experimentation, precision targeting, and continuous optimization, we turn ad spend into exponential revenue growth.',
      bgClass: 'bg-gradient-to-b from-[#f6fce5] via-white to-[#ebf8b8]',
      borderColor: 'border-[#bcd32e]',
      roleBadge: 'bg-[#bcd32e]/25 text-[#4c5900]',
      accentBar: 'bg-[#bcd32e]',
    },
    {
      name: 'Sneha Kapoor',
      role: 'Creative Director',
      bio: 'Design is not just how it looks, but how it communicates value. We craft unforgettable visual identities and compelling brand stories that captivate audiences across all digital touchpoints.',
      bgClass: 'bg-gradient-to-b from-[#f0f7ff] via-white to-[#e0f2fe]',
      borderColor: 'border-[#2196F3]/40',
      roleBadge: 'bg-[#2196F3]/15 text-[#0066cc]',
      accentBar: 'bg-[#2196F3]',
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 768) {
        setVisibleCount(2);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, leadershipTeam.length - visibleCount);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  useEffect(() => {
    if (!isAutoplay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoplay, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

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
      bgClass: 'bg-gradient-to-b from-[#f7fce6] via-white to-[#ecf8c0]',
      borderColor: 'border-[#bcd32e]',
      numberBadge: 'bg-[#bcd32e]/30 text-[#4c5900]',
      accentBar: 'bg-[#bcd32e]',
      iconColor: 'text-[#4c5900]',
      iconBg: 'bg-[#f4fce0] border-2 border-[#bcd32e]/50',
    },
    {
      number: '02',
      icon: Cpu,
      title: 'Advanced Infrastructure',
      description: 'State-of-the-art marketing technology, AI tools and analytics platforms that support practical execution and innovation.',
      bgClass: 'bg-gradient-to-b from-[#f0f7ff] via-white to-[#e3f2fd]',
      borderColor: 'border-[#2196F3]/40',
      numberBadge: 'bg-[#2196F3]/20 text-[#0066cc]',
      accentBar: 'bg-[#2196F3]',
      iconColor: 'text-[#0066cc]',
      iconBg: 'bg-[#e3f2fd]/60 border-2 border-[#2196F3]/40',
    },
    {
      number: '03',
      icon: BookOpen,
      title: 'Quality Execution',
      description: 'Data-integrated strategy with innovative methodologies, skill training and client-centric campaign execution.',
      bgClass: 'bg-gradient-to-b from-[#f7fce6] via-white to-[#ecf8c0]',
      borderColor: 'border-[#bcd32e]',
      numberBadge: 'bg-[#bcd32e]/30 text-[#4c5900]',
      accentBar: 'bg-[#bcd32e]',
      iconColor: 'text-[#4c5900]',
      iconBg: 'bg-[#f4fce0] border-2 border-[#bcd32e]/50',
    },
    {
      number: '04',
      icon: Users,
      title: 'Hands-on Strategy',
      description: 'Strong emphasis on practical market exposure, performance optimization, case discussions and real-world results.',
      bgClass: 'bg-gradient-to-b from-[#f0f7ff] via-white to-[#e3f2fd]',
      borderColor: 'border-[#2196F3]/40',
      numberBadge: 'bg-[#2196F3]/20 text-[#0066cc]',
      accentBar: 'bg-[#2196F3]',
      iconColor: 'text-[#0066cc]',
      iconBg: 'bg-[#e3f2fd]/60 border-2 border-[#2196F3]/40',
    },
    {
      number: '05',
      icon: Search,
      title: 'Research & Innovation',
      description: 'Encouraging continuous research culture with data analysis, experimental frameworks and technology integrations.',
      bgClass: 'bg-gradient-to-b from-[#f7fce6] via-white to-[#ecf8c0]',
      borderColor: 'border-[#bcd32e]',
      numberBadge: 'bg-[#bcd32e]/30 text-[#4c5900]',
      accentBar: 'bg-[#bcd32e]',
      iconColor: 'text-[#4c5900]',
      iconBg: 'bg-[#f4fce0] border-2 border-[#bcd32e]/50',
    },
    {
      number: '06',
      icon: ShieldCheck,
      title: 'Ethics & Values',
      description: 'Instilling professionalism, transparent metrics, ethical practices and accountability in every marketing campaign.',
      bgClass: 'bg-gradient-to-b from-[#f0f7ff] via-white to-[#e3f2fd]',
      borderColor: 'border-[#2196F3]/40',
      numberBadge: 'bg-[#2196F3]/20 text-[#0066cc]',
      accentBar: 'bg-[#2196F3]',
      iconColor: 'text-[#0066cc]',
      iconBg: 'bg-[#e3f2fd]/60 border-2 border-[#2196F3]/40',
    },
    {
      number: '07',
      icon: TrendingUp,
      title: 'Growth Support',
      description: 'Continuous guidance and support for scaling brands, competitive market analysis and long-term business pathways.',
      bgClass: 'bg-gradient-to-b from-[#f7fce6] via-white to-[#ecf8c0]',
      borderColor: 'border-[#bcd32e]',
      numberBadge: 'bg-[#bcd32e]/30 text-[#4c5900]',
      accentBar: 'bg-[#bcd32e]',
      iconColor: 'text-[#4c5900]',
      iconBg: 'bg-[#f4fce0] border-2 border-[#bcd32e]/50',
    },
    {
      number: '08',
      icon: HeartHandshake,
      title: 'Client-Centered Care',
      description: 'Dedicated care, transparent communication, and unwavering commitment towards achieving higher return on investment.',
      bgClass: 'bg-gradient-to-b from-[#f0f7ff] via-white to-[#e3f2fd]',
      borderColor: 'border-[#2196F3]/40',
      numberBadge: 'bg-[#2196F3]/20 text-[#0066cc]',
      accentBar: 'bg-[#2196F3]',
      iconColor: 'text-[#0066cc]',
      iconBg: 'bg-[#e3f2fd]/60 border-2 border-[#2196F3]/40',
    },
  ];

  return (
    <div className="about-page-wrapper bg-gradient-to-b from-white via-[#f4faff] to-[#eaf5ff] pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen text-black">
      <div ref={containerRef} className="max-w-[1400px] mx-auto">

        {/* SECTION 1: Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-12 sm:mb-16">

          {/* Left Column: Heading, Intro, CTAs & Stats Strip (Span 6) */}
          <div className="lg:col-span-6 flex flex-col">

            {/* Badge matching Hero Badge */}
            <div className="reveal-left inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#2196F3]/10 border border-[#2196F3]/30 text-primary font-bold text-xs uppercase tracking-wider mb-4 sm:mb-6 w-fit shadow-xs">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>ABOUT US</span>
            </div>

            {/* Main Headline with Hero Highlight style */}
            <h1 className="reveal-left reveal-delay-1 text-3xl sm:text-5xl lg:text-[3.25rem] font-black text-[#0a0a0a] leading-[1.15] tracking-tight mb-4 sm:mb-6" style={{ color: '#0a0a0a' }}>
              We Help Businesses <br className="hidden sm:inline" />
              Grow in the{' '}
              <span className="bg-gradient-to-r from-[#2196F3] via-[#42a5f5] to-[#2196F3] bg-clip-text text-transparent animate-text-shimmer">
                Digital World.
              </span>
            </h1>

            {/* Paragraphs */}
            <div className="reveal-left reveal-delay-2 space-y-4 text-[#444444] text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl">
              <p style={{ color: '#444444' }}>
                <strong className="text-[#0a0a0a] font-extrabold" style={{ color: '#0a0a0a' }}>Profito Interactive Growth Partners</strong> is a full-service digital marketing agency dedicated to delivering innovative strategies that drive visibility, engage audiences, and accelerate business growth.
              </p>
              <p style={{ color: '#444444' }}>
                With a passionate team of marketers, designers, and analysts, we combine creativity with data to build campaigns that deliver real, measurable results.
              </p>
            </div>

            {/* CTAs matching Hero buttons */}
            <div className="reveal-left reveal-delay-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <a
                href="#timeline"
                className="btn-shine-effect w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary hover:bg-[#0a0a0a] text-white font-semibold text-sm px-6 py-3.5 rounded-full shadow-lg shadow-primary/25 border-2 border-primary hover:border-[#0a0a0a] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl group"
              >
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:rotate-45">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </span>
                <span className="text-white font-bold" style={{ color: '#ffffff' }}>Our Journey</span>
              </a>

              <a
                href="#why-choose-us"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-primary/30 hover:border-primary bg-white/90 hover:bg-white text-[#333333] hover:text-primary font-bold text-sm px-6 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-xs hover:shadow-md group"
              >
                <span className="text-[#333333] font-extrabold group-hover:text-primary" style={{ color: '#333333' }}>Why Choose Us</span>
                <ArrowRight className="w-4 h-4 text-[#333333] group-hover:text-primary transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Stats Strip matching Hero stats card styling */}
            <div className="reveal-left reveal-delay-4 bg-white/90 backdrop-blur-md border border-[#2196F3]/15 shadow-[0_12px_36px_-10px_rgba(33,150,243,0.12)] rounded-2xl p-3.5 sm:p-6 grid grid-cols-3 gap-2 sm:gap-3 divide-x divide-zinc-200 max-w-xl hover:border-[#2196F3]/30 transition-all duration-300">
              {/* Stat 1 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-1.5 sm:gap-3 px-1 sm:px-3 first:pl-0 group">
                <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl bg-[#2196F3]/10 border border-[#2196F3]/20 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-base sm:text-2xl font-black text-[#0a0a0a] leading-none mb-0.5 sm:mb-1" style={{ color: '#0a0a0a' }}>
                    <CountUp end={12} suffix="+" />
                  </div>
                  <div className="text-[10px] sm:text-xs font-bold text-[#555555] leading-tight" style={{ color: '#555555' }}>Years Experience</div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-1.5 sm:gap-3 px-1 sm:px-3 group">
                <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl bg-[#2196F3]/10 border border-[#2196F3]/20 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-base sm:text-2xl font-black text-[#0a0a0a] leading-none mb-0.5 sm:mb-1" style={{ color: '#0a0a0a' }}>
                    <CountUp end={650} suffix="+" />
                  </div>
                  <div className="text-[10px] sm:text-xs font-bold text-[#555555] leading-tight" style={{ color: '#555555' }}>Happy Clients</div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-1.5 sm:gap-3 px-1 sm:px-3 group">
                <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl bg-[#2196F3]/10 border border-[#2196F3]/20 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-base sm:text-2xl font-black text-[#0a0a0a] leading-none mb-0.5 sm:mb-1" style={{ color: '#0a0a0a' }}>
                    <CountUp end={98} suffix="%" />
                  </div>
                  <div className="text-[10px] sm:text-xs font-bold text-[#555555] leading-tight" style={{ color: '#555555' }}>Retention Rate</div>
                </div>
              </div>
            </div>

          </div>

          {/* Middle Column: Vertical/Horizontal Timeline (Span 2) */}
          <div id="timeline" className="reveal-on-scroll reveal-delay-2 lg:col-span-2 flex flex-col items-center justify-center py-4 lg:py-6 relative my-2 lg:my-0 w-full overflow-hidden">
            <div className="relative w-full flex flex-row lg:flex-col items-center justify-between lg:justify-center overflow-x-auto lg:overflow-visible pb-3 lg:pb-0 px-2 lg:px-0 space-x-4 lg:space-x-0 lg:space-y-8 scrollbar-none [scrollbar-width:none]">

              {/* Connecting line */}
              <div className="timeline-pulse-line absolute top-3 lg:top-3 left-4 right-4 lg:left-1/2 lg:right-auto bottom-auto lg:bottom-3 h-0.5 lg:h-auto lg:w-0.5 -translate-y-1/2 lg:translate-y-0 lg:-translate-x-1/2 z-0 rounded-full" />

              {timelineEvents.map((event, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center group cursor-pointer shrink-0 min-w-[100px] sm:min-w-[120px] lg:min-w-0">
                  {/* Node Dot */}
                  <div className="w-5 h-5 rounded-full bg-primary border-4 border-white shadow-[0_0_12px_rgba(33,150,243,0.4)] group-hover:scale-130 group-hover:bg-[#0a0a0a] transition-all duration-300" />

                  {/* Event Text */}
                  <div className="mt-1.5 bg-white/95 px-2 sm:px-2.5 py-1 rounded-lg border border-[#2196F3]/20 shadow-xs group-hover:border-primary group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300">
                    <span className="block font-black text-primary text-xs sm:text-sm leading-none">{event.year}</span>
                    <span className="block text-[0.7rem] sm:text-[0.75rem] font-bold text-[#0a0a0a] mt-0.5 whitespace-nowrap" style={{ color: '#0a0a0a' }}>{event.title}</span>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Right Column: "Trusted by Businesses Worldwide" Card (Span 4) */}
          <div className="reveal-right reveal-delay-3 lg:col-span-4" ref={progressRef}>
            <div className="bg-gradient-to-b from-[#f4faff] via-white to-[#eaf5ff] border border-[#2196F3]/20 shadow-[0_15px_40px_rgba(33,150,243,0.1)] rounded-3xl p-5 sm:p-8 relative overflow-hidden flex flex-col justify-between h-full hover:shadow-[0_20px_50px_rgba(33,150,243,0.15)] transition-all duration-500">

              {/* Ambient Background Glows */}
              <div className="animate-float-orb absolute -top-20 -right-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
              <div className="animate-float-orb-delayed absolute -bottom-20 -left-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                {/* 5 Stars using Homepage #2196F3 fill */}
                <div className="flex items-center gap-1 text-primary mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="animate-star-pop w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary" style={{ animationDelay: `${i * 0.08}s` }} />
                  ))}
                </div>

                {/* Card Title */}
                <h2 className="text-xl sm:text-3xl font-black text-[#0a0a0a] tracking-tight mb-4 sm:mb-5 leading-snug" style={{ color: '#0a0a0a' }}>
                  Trusted by <br />
                  Businesses Worldwide
                </h2>

                {/* Quote Box */}
                <div className="relative bg-white/90 border border-[#2196F3]/20 rounded-2xl p-3.5 sm:p-5 mb-5 sm:mb-6 shadow-xs group hover:border-primary/50 transition-all duration-300">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary/20 absolute top-3 right-3 pointer-events-none" />
                  <p className="text-[#333333] italic text-xs sm:text-base leading-relaxed font-bold relative z-10" style={{ color: '#333333' }}>
                    “We believe every campaign should create measurable business growth, not just impressions.”
                  </p>
                </div>

                {/* Checklist */}
                <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                  {checklistItems.map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 sm:gap-3 text-[#0a0a0a] font-extrabold text-xs sm:text-base group">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <span className="text-[#0a0a0a] font-extrabold text-xs sm:text-base" style={{ color: '#0a0a0a' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Progress Bar Section */}
              <div className="pt-4 sm:pt-5 border-t border-[#2196F3]/15">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-extrabold text-xs sm:text-sm text-[#0a0a0a]" style={{ color: '#0a0a0a' }}>Growth Success</span>
                  <span className="font-black text-xs sm:text-sm text-primary">
                    <CountUp end={92} suffix="%" />
                  </span>
                </div>
                <div className="w-full h-2.5 sm:h-3 bg-primary/10 rounded-full overflow-hidden p-0.5">
                  <div
                    className="h-full bg-gradient-to-r from-primary via-[#42a5f5] to-primary rounded-full transition-all duration-1200 cubic-bezier(0.16,1,0.3,1) shadow-xs"
                    style={{ width: progressWidth }}
                  />
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* SECTION 2: 4 Top Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            const delayClass = `reveal-delay-${idx + 1}`;
            return (
              <div
                key={idx}
                className={`reveal-on-scroll ${delayClass} bg-white border border-[#2196F3]/15 hover:border-primary shadow-xs hover:shadow-[0_12px_36px_-10px_rgba(33,150,243,0.15)] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group`}
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
        <div
          id="why-choose-us"
          className="mt-24 pt-12 pb-14 px-6 sm:px-10 lg:px-14 bg-gradient-to-b from-white via-[#f4faff] to-white rounded-3xl border border-[#2196F3]/15 shadow-[0_20px_50px_rgba(33,150,243,0.06)] relative overflow-hidden"
        >
          {/* Ambient Decorative Background Glows */}
          <div className="animate-float-orb absolute -top-24 -right-24 w-80 h-80 bg-[#2196F3]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="animate-float-orb-delayed absolute -bottom-24 -left-24 w-80 h-80 bg-[#bcd32e]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="reveal-on-scroll text-center max-w-3xl mx-auto mb-16 relative z-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-0.5 bg-primary rounded-full" />
              <span className="text-xs font-black tracking-widest text-primary uppercase">WHY CHOOSE US</span>
              <span className="w-8 h-0.5 bg-primary rounded-full" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a0a0a] tracking-tight mb-4" style={{ color: '#0a0a0a' }}>
              Excellence. Experience.{' '}
              <span className="bg-gradient-to-r from-primary via-[#42a5f5] to-primary bg-clip-text text-transparent animate-text-shimmer">
                Every Time.
              </span>
            </h2>

            <p className="text-[#555555] text-base sm:text-lg leading-relaxed font-medium" style={{ color: '#555555' }}>
              We combine strategic excellence, advanced infrastructure and dedicated client care to create a better digital growth and business performance experience.
            </p>
          </div>

          {/* 8 Cards Grid (2 rows of 4 cols) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {whyChooseUsCards.map((card, idx) => {
              const Icon = card.icon;
              const delayClass = `reveal-delay-${(idx % 4) + 1}`;
              return (
                <div
                  key={idx}
                  className={`reveal-scale ${delayClass} relative ${card.bgClass} border-2 ${card.borderColor} rounded-2xl p-6 sm:p-7 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group select-none overflow-hidden h-full`}
                >
                  {/* Top Accent Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 ${card.accentBar}`} />

                  {/* Top-left Number Pill Badge */}
                  <div className={`absolute top-4 left-4 px-2.5 py-1 rounded-full ${card.numberBadge} font-extrabold text-xs shadow-2xs group-hover:scale-105 transition-transform duration-200`}>
                    {card.number}
                  </div>

                  {/* Circular Icon Cutout with ring */}
                  <div className={`w-20 h-20 sm:w-22 sm:h-22 rounded-full ${card.iconBg} border-4 border-white shadow-md flex items-center justify-center mb-4 shrink-0 group-hover:scale-108 transition-transform duration-300 mt-3 relative`}>
                    <Icon className={`w-8 h-8 ${card.iconColor} group-hover:rotate-6 transition-transform duration-300`} />
                    {/* Bottom Arc Highlight */}
                    <div className={`absolute -bottom-1 w-10 h-1 rounded-full ${card.accentBar} shadow-xs group-hover:w-14 transition-all duration-300`} />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-black text-[#0a0a0a] mb-1.5 leading-tight" style={{ color: '#0a0a0a' }}>
                    {card.title}
                  </h3>

                  {/* Accent Line under title */}
                  <div className={`w-8 h-0.5 ${card.accentBar} rounded-full mb-3 group-hover:w-14 transition-all duration-300`} />

                  {/* Card Description */}
                  <p className="text-xs sm:text-sm font-medium italic text-[#444444] leading-relaxed text-center flex-grow" style={{ color: '#444444' }}>
                    "{card.description}"
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* SECTION 4: MEET OUR LEADERSHIP CAROUSEL */}
        <div className="mt-24 pt-12 pb-14 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-white via-[#f4faff] to-[#f8fcda]/40 rounded-3xl text-[#0a0a0a] shadow-[0_20px_50px_rgba(33,150,243,0.1)] relative overflow-hidden border border-[#2196F3]/20">
          {/* Ambient Background Glows incorporating #2196F3 and #bcd32e */}
          <div className="animate-float-orb absolute top-0 right-0 w-96 h-96 bg-[#bcd32e]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="animate-float-orb-delayed absolute bottom-0 left-0 w-96 h-96 bg-[#2196F3]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="reveal-on-scroll text-center max-w-4xl mx-auto mb-12 relative z-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-0.5 bg-primary rounded-full" />
              <span className="text-xs font-black tracking-widest text-primary uppercase">MEET OUR LEADERSHIP</span>
              <span className="w-8 h-0.5 bg-primary rounded-full" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a0a0a] tracking-tight mb-4" style={{ color: '#0a0a0a' }}>
              Meet Our{' '}
              <span className="bg-gradient-to-r from-primary via-[#42a5f5] to-primary bg-clip-text text-transparent animate-text-shimmer">
                Leadership
              </span>
            </h2>

            <p className="text-[#555555] text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-medium" style={{ color: '#555555' }}>
              Meet the visionaries behind Profito Interactive Growth Partners – a team of leaders with a passion for innovation and a commitment to driving success. Get to know our key leadership team:
            </p>
          </div>

          {/* Carousel Container */}
          <div
            className="reveal-on-scroll reveal-delay-2 relative max-w-[1400px] mx-auto px-2 sm:px-6 relative z-10"
            onMouseEnter={() => setIsAutoplay(false)}
            onMouseLeave={() => setIsAutoplay(true)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Navigation Button - Left */}
            <button
              onClick={handlePrev}
              className="absolute -left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white hover:bg-[#bcd32e] text-[#0a0a0a] hover:text-black flex items-center justify-center backdrop-blur-md border border-[#2196F3]/30 shadow-xl transition-all duration-300 hover:scale-115 active:scale-95 group cursor-pointer"
              aria-label="Previous leadership member"
            >
              <ChevronLeft className="w-6 h-6 text-primary group-hover:text-black transition-colors" />
            </button>

            {/* Navigation Button - Right */}
            <button
              onClick={handleNext}
              className="absolute -right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white hover:bg-[#bcd32e] text-[#0a0a0a] hover:text-black flex items-center justify-center backdrop-blur-md border border-[#2196F3]/30 shadow-xl transition-all duration-300 hover:scale-115 active:scale-95 group cursor-pointer"
              aria-label="Next leadership member"
            >
              <ChevronRight className="w-6 h-6 text-primary group-hover:text-black transition-colors" />
            </button>

            {/* Carousel Track */}
            <div className="overflow-hidden py-4">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`
                }}
              >
                {leadershipTeam.map((member, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 px-2 sm:px-3"
                    style={{ width: `${100 / visibleCount}%` }}
                  >
                    {/* Leadership Card matching page styling */}
                    <div
                      className={`${member.bgClass} border-2 ${member.borderColor} rounded-2xl p-6 flex flex-col items-center text-center h-full min-h-[430px] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group select-none relative overflow-hidden`}
                    >
                      {/* Top Accent Line */}
                      <div className={`absolute top-0 left-0 right-0 h-1.5 ${member.accentBar}`} />

                      {/* Circle Image Cutout with ring */}
                      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-md mb-4 shrink-0 group-hover:scale-108 transition-transform duration-300 mt-2">
                        <img
                          src={teamImg}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Name */}
                      <h3 className="text-xl sm:text-2xl font-black text-[#0a0a0a] mb-1.5 leading-tight" style={{ color: '#0a0a0a' }}>
                        {member.name}
                      </h3>

                      {/* Role / Designation Pill Badge */}
                      <div className={`inline-block ${member.roleBadge} font-extrabold text-xs px-3.5 py-1 rounded-full mb-3 shadow-2xs group-hover:scale-105 transition-transform duration-200`}>
                        {member.role}
                      </div>

                      {/* Bio / Quote */}
                      <p className="text-xs sm:text-sm font-medium italic text-[#444444] leading-relaxed text-center flex-grow" style={{ color: '#444444' }}>
                        "{member.bio}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentIndex(dotIdx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${currentIndex === dotIdx
                    ? 'w-8 bg-primary shadow-xs'
                    : 'w-2.5 bg-primary/20 hover:bg-primary/50'
                    }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 5: LIFE AT PROFITO */}
        <div className="mt-24 pt-12 pb-14 px-6 sm:px-10 lg:px-14 bg-white rounded-3xl border border-[#2196F3]/15 shadow-[0_20px_50px_rgba(33,150,243,0.06)] relative overflow-hidden">
          {/* Background Decorative Polka Dots */}
          <div className="absolute top-6 left-8 opacity-25 pointer-events-none hidden sm:block">
            <div className="grid grid-cols-4 gap-1.5">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#2196F3]" />
              ))}
            </div>
          </div>
          <div className="absolute top-6 right-8 opacity-25 pointer-events-none hidden sm:block">
            <div className="grid grid-cols-4 gap-1.5">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#2196F3]" />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Column: Heading, Intro, 2x2 Features Grid & CTA */}
            <div className="reveal-left lg:col-span-5 flex flex-col items-start">

              {/* Header Tag */}
              <div className="flex items-center gap-2 mb-1">
                <span className="w-7 h-1 bg-[#bcd32e] rounded-full inline-block" />
                <span className="text-base font-black tracking-wider text-[#0a0a0a] uppercase">LIFE AT</span>
              </div>

              {/* Big Title & Underline */}
              <div className="mb-5">
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-primary tracking-tight leading-none" style={{ color: '#2196F3' }}>
                  PROFITO
                </h2>
                <div className="w-24 h-1.5 bg-[#bcd32e] rounded-full mt-2" />
              </div>

              {/* Paragraph */}
              <p className="text-[#444444] text-base sm:text-lg leading-relaxed font-medium mb-8 max-w-md" style={{ color: '#444444' }}>
                At Profito, we believe great work happens in a great environment. It’s about people, passion, growth and creating impact together.
              </p>

              {/* 2x2 Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8 w-full max-w-md">
                {/* Feature 1: Collaborate */}
                <div className="flex items-start gap-3.5 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#2196F3]/10 text-primary border border-[#2196F3]/20 flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base text-[#0a0a0a] leading-tight mb-1" style={{ color: '#0a0a0a' }}>
                      Collaborate
                    </h4>
                    <p className="text-xs text-[#555555] font-medium leading-relaxed" style={{ color: '#555555' }}>
                      We work together, share ideas and create solutions.
                    </p>
                  </div>
                </div>

                {/* Feature 2: Grow */}
                <div className="flex items-start gap-3.5 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#2196F3]/10 text-primary border border-[#2196F3]/20 flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base text-[#0a0a0a] leading-tight mb-1" style={{ color: '#0a0a0a' }}>
                      Grow
                    </h4>
                    <p className="text-xs text-[#555555] font-medium leading-relaxed" style={{ color: '#555555' }}>
                      Continuous learning and new opportunities every day.
                    </p>
                  </div>
                </div>

                {/* Feature 3: Celebrate */}
                <div className="flex items-start gap-3.5 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#2196F3]/10 text-primary border border-[#2196F3]/20 flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <PartyPopper className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base text-[#0a0a0a] leading-tight mb-1" style={{ color: '#0a0a0a' }}>
                      Celebrate
                    </h4>
                    <p className="text-xs text-[#555555] font-medium leading-relaxed" style={{ color: '#555555' }}>
                      We celebrate wins, big and small.
                    </p>
                  </div>
                </div>

                {/* Feature 4: Well-being */}
                <div className="flex items-start gap-3.5 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#2196F3]/10 text-primary border border-[#2196F3]/20 flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base text-[#0a0a0a] leading-tight mb-1" style={{ color: '#0a0a0a' }}>
                      Well-being
                    </h4>
                    <p className="text-xs text-[#555555] font-medium leading-relaxed" style={{ color: '#555555' }}>
                      Balance, respect, and a positive vibe.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="#contact"
                className="btn-shine-effect bg-[#bcd32e] hover:bg-[#a6bb24] text-[#0a0a0a] font-black text-sm sm:text-base px-8 py-3.5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-3 group cursor-pointer"
              >
                <span>Explore Life at Profito</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

            </div>

            {/* Right Column: Interactive Mosaic Photo Collage Carousel */}
            <div className="reveal-right lg:col-span-7 relative">

              {/* Left Navigation Button */}
              <button
                onClick={() => setLifeSlideIndex((prev) => (prev <= 0 ? lifeSlides.length - 1 : prev - 1))}
                className="w-11 h-11 rounded-full bg-[#bcd32e] hover:bg-[#a6bb24] text-[#0a0a0a] flex items-center justify-center shadow-lg absolute -left-4 sm:-left-5 top-1/2 -translate-y-1/2 z-20 transition-all duration-300 hover:scale-115 active:scale-95 cursor-pointer"
                aria-label="Previous life slide"
              >
                <ChevronLeft className="w-6 h-6 text-[#0a0a0a]" />
              </button>

              {/* Right Navigation Button */}
              <button
                onClick={() => setLifeSlideIndex((prev) => (prev >= lifeSlides.length - 1 ? 0 : prev + 1))}
                className="w-11 h-11 rounded-full bg-[#bcd32e] hover:bg-[#a6bb24] text-[#0a0a0a] flex items-center justify-center shadow-lg absolute -right-4 sm:-right-5 top-1/2 -translate-y-1/2 z-20 transition-all duration-300 hover:scale-115 active:scale-95 cursor-pointer"
                aria-label="Next life slide"
              >
                <ChevronRight className="w-6 h-6 text-[#0a0a0a]" />
              </button>

              {/* Photo Grid Collage matching user screenshot */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">

                {/* Main Large Left Photo (Col span 7) */}
                <div className="md:col-span-7 rounded-3xl overflow-hidden shadow-lg border border-black/5 h-[340px] sm:h-[450px] group relative bg-gray-100">
                  <img
                    key={`main-${lifeSlideIndex}`}
                    src={lifeSlides[lifeSlideIndex].main}
                    alt="Life at Profito collaboration"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 animate-fade-in"
                  />
                </div>

                {/* Stacked 2 Photos on Right (Col span 5) */}
                <div className="md:col-span-5 flex flex-col gap-4 justify-between">

                  {/* Top Right Photo */}
                  <div className="rounded-3xl overflow-hidden shadow-lg border border-black/5 h-[162px] sm:h-[217px] group relative bg-gray-100">
                    <img
                      key={`topRight-${lifeSlideIndex}`}
                      src={lifeSlides[lifeSlideIndex].topRight}
                      alt="Life at Profito meeting"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 animate-fade-in"
                    />
                  </div>

                  {/* Bottom Right Photo */}
                  <div className="rounded-3xl overflow-hidden shadow-lg border border-black/5 h-[162px] sm:h-[217px] group relative bg-gray-100">
                    <img
                      key={`bottomRight-${lifeSlideIndex}`}
                      src={lifeSlides[lifeSlideIndex].bottomRight}
                      alt="Life at Profito celebration"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 animate-fade-in"
                    />
                  </div>

                </div>

              </div>

              {/* Pagination Dots underneath collage */}
              <div className="flex items-center justify-center gap-2 mt-6">
                {lifeSlides.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setLifeSlideIndex(dotIdx)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${lifeSlideIndex === dotIdx
                      ? 'w-8 bg-[#bcd32e] shadow-xs'
                      : 'w-2.5 bg-[#2196F3]/25 hover:bg-[#2196F3]/60'
                      }`}
                    aria-label={`Go to life slide ${dotIdx + 1}`}
                  />
                ))}
              </div>

            </div>

          </div>
        </div>

        {/* SECTION 6: AWARDS AND RECOGNITIONS */}
        <div className="mt-24 pt-12 pb-14 px-6 sm:px-10 lg:px-14 bg-gradient-to-b from-[#f4faff] via-white to-[#f4faff] rounded-3xl border border-[#2196F3]/15 shadow-[0_20px_50px_rgba(33,150,243,0.06)] relative overflow-hidden">

          {/* Ambient Accent Glows */}
          <div className="animate-float-orb absolute -top-24 -left-24 w-72 h-72 bg-[#2196F3]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="animate-float-orb-delayed absolute -bottom-24 -right-24 w-72 h-72 bg-[#bcd32e]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="reveal-on-scroll text-center max-w-4xl mx-auto mb-10 relative z-10">
            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0a0a0a]" style={{ color: '#0a0a0a' }}>
              Awards <span className="text-[#2196F3]">And Recognitions</span>
            </h2>

            {/* Decorative Accent Line with Dot Node */}
            <div className="flex items-center justify-center gap-1.5 my-4">
              <span className="w-10 sm:w-14 h-0.5 bg-[#bcd32e] rounded-full" />
              <span className="w-3 h-3 rounded-full bg-[#bcd32e] border-2 border-white shadow-xs animate-pulse-glow" />
              <span className="w-10 sm:w-14 h-0.5 bg-[#bcd32e] rounded-full" />
            </div>

            {/* Description Paragraphs matching mockup */}
            <div className="space-y-1 text-[#555555] text-sm sm:text-base leading-relaxed font-medium max-w-3xl mx-auto" style={{ color: '#555555' }}>
              <p>Our marketing and IT outsourcing solutions are crafted around vital ‘building blocks’ tailored to your business plan.</p>
              <p>We assess & customise strategies based on your goals, digital presence, and competition.</p>
              <p className="font-semibold text-[#0a0a0a]" style={{ color: '#0a0a0a' }}>
                With our creative, results-driven approach, you will get only the best!
              </p>
            </div>
          </div>

          {/* 8-Card Logo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 max-w-[1280px] mx-auto relative z-10">
            {awardsList.map((award, idx) => {
              const delayClass = `reveal-delay-${(idx % 4) + 1}`;
              return (
                <div
                  key={idx}
                  className={`reveal-scale ${delayClass} bg-white border border-[#2196F3]/15 hover:border-[#2196F3]/40 rounded-2xl p-5 sm:p-6 flex items-center justify-center shadow-[0_6px_20px_rgba(33,150,243,0.05)] hover:shadow-[0_15px_35px_rgba(33,150,243,0.14)] transition-all duration-300 hover:-translate-y-1.5 h-32 sm:h-36 group cursor-pointer`}
                >
                  <img
                    src={award.img}
                    alt={award.title}
                    className="max-h-20 sm:max-h-24 max-w-[85%] object-contain group-hover:scale-108 transition-transform duration-300"
                  />
                </div>
              );
            })}
          </div>

        </div>

        {/* SECTION 6.5: BUILD YOUR CAREER WITH US (WE'RE HIRING) */}
        <div className="mt-24 pt-10 sm:pt-12 pb-10 sm:pb-12 px-6 sm:px-10 lg:px-12 bg-gradient-to-b from-[#f4faff] via-white to-[#f4faff] rounded-3xl border border-[#2196F3]/15 shadow-[0_20px_50px_rgba(33,150,243,0.06)] relative overflow-hidden">

          {/* Ambient Background Decorative Glows */}
          <div className="animate-float-orb absolute -top-20 -left-20 w-80 h-80 bg-[#2196F3]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="animate-float-orb-delayed absolute -bottom-20 -right-20 w-80 h-80 bg-[#bcd32e]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Dotted Grid Background Accent */}
          <div className="absolute top-6 left-8 opacity-20 pointer-events-none hidden sm:block">
            <div className="grid grid-cols-4 gap-1.5">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#2196F3]" />
              ))}
            </div>
          </div>
          <div className="absolute bottom-6 right-8 opacity-20 pointer-events-none hidden sm:block">
            <div className="grid grid-cols-4 gap-1.5">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#2196F3]" />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">

            {/* Left Content (Span 7) */}
            <div className="reveal-left lg:col-span-7 flex flex-col items-start">

              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2196F3]/10 border border-[#2196F3]/25 text-[#2196F3] font-black text-xs uppercase tracking-wider mb-6 shadow-xs">
                <div className="w-5 h-5 rounded-full bg-[#2196F3]/15 flex items-center justify-center text-[#2196F3]">
                  <Users className="w-3 h-3" />
                </div>
                <span>WE'RE HIRING</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a0a0a] tracking-tight leading-[1.15] mb-4" style={{ color: '#0a0a0a' }}>
                Build Your{' '}
                <span className="text-[#2196F3] relative inline-block">
                  Career With Us
                  <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-[#bcd32e] rounded-full" />
                </span>
              </h2>

              {/* Subtext */}
              <p className="text-[#555555] text-base sm:text-lg leading-relaxed font-medium mb-8 max-w-xl" style={{ color: '#555555' }}>
                Join a passionate team that values ideas, encourages growth and creates meaningful impact every day.
              </p>

              {/* Primary CTA Button */}
              <a
                href="/careers"
                className="btn-shine-effect bg-[#2196F3] hover:bg-[#0a0a0a] text-white hover:text-white font-bold text-base px-8 py-3.5 rounded-2xl shadow-lg shadow-[#2196F3]/25 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-3 mb-10 group"
              >
                <span className="text-white">Explore Careers</span>
                <ArrowRight className="text-white w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              {/* 4 Feature Items Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full pt-6 border-t border-[#2196F3]/15">

                {/* Feature 1 */}
                <div className="flex flex-col items-start group">
                  <div className="w-10 h-10 rounded-xl bg-[#2196F3]/10 text-[#2196F3] border border-[#2196F3]/20 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-[#2196F3] group-hover:text-white transition-all duration-300 shadow-2xs">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="font-extrabold text-sm sm:text-base text-[#0a0a0a] mb-1" style={{ color: '#0a0a0a' }}>
                    Collaborate
                  </h4>
                  <div className="w-6 h-0.5 bg-[#bcd32e] rounded-full mb-2 group-hover:w-10 transition-all duration-300" />
                  <p className="text-xs text-[#555555] font-medium leading-relaxed" style={{ color: '#555555' }}>
                    We work together, share ideas and create solutions.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-start group">
                  <div className="w-10 h-10 rounded-xl bg-[#2196F3]/10 text-[#2196F3] border border-[#2196F3]/20 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-[#2196F3] group-hover:text-white transition-all duration-300 shadow-2xs">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h4 className="font-extrabold text-sm sm:text-base text-[#0a0a0a] mb-1" style={{ color: '#0a0a0a' }}>
                    Grow
                  </h4>
                  <div className="w-6 h-0.5 bg-[#bcd32e] rounded-full mb-2 group-hover:w-10 transition-all duration-300" />
                  <p className="text-xs text-[#555555] font-medium leading-relaxed" style={{ color: '#555555' }}>
                    Continuous learning and new opportunities every day.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col items-start group">
                  <div className="w-10 h-10 rounded-xl bg-[#2196F3]/10 text-[#2196F3] border border-[#2196F3]/20 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-[#2196F3] group-hover:text-white transition-all duration-300 shadow-2xs">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <h4 className="font-extrabold text-sm sm:text-base text-[#0a0a0a] mb-1" style={{ color: '#0a0a0a' }}>
                    Celebrate
                  </h4>
                  <div className="w-6 h-0.5 bg-[#bcd32e] rounded-full mb-2 group-hover:w-10 transition-all duration-300" />
                  <p className="text-xs text-[#555555] font-medium leading-relaxed" style={{ color: '#555555' }}>
                    We celebrate wins, big and small.
                  </p>
                </div>

                {/* Feature 4 */}
                <div className="flex flex-col items-start group">
                  <div className="w-10 h-10 rounded-xl bg-[#2196F3]/10 text-[#2196F3] border border-[#2196F3]/20 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-[#2196F3] group-hover:text-white transition-all duration-300 shadow-2xs">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h4 className="font-extrabold text-sm sm:text-base text-[#0a0a0a] mb-1" style={{ color: '#0a0a0a' }}>
                    Well-being
                  </h4>
                  <div className="w-6 h-0.5 bg-[#bcd32e] rounded-full mb-2 group-hover:w-10 transition-all duration-300" />
                  <p className="text-xs text-[#555555] font-medium leading-relaxed" style={{ color: '#555555' }}>
                    Balance, respect and a positive vibe.
                  </p>
                </div>

              </div>

            </div>

            {/* Right Column: Image with Overlay Cards (Span 5) */}
            <div className="reveal-right lg:col-span-5 relative mt-4 lg:mt-0">

              {/* Green circle accent node */}
              <div className="w-5 h-5 rounded-full bg-[#bcd32e] border-2 border-white shadow-md absolute -bottom-2 left-1/3 z-20 animate-pulse-glow" />

              {/* Main Image Container */}
              <div className="rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-100 relative min-h-[320px] sm:min-h-[380px] lg:min-h-[420px]">
                <img
                  src={teamCAreerIMg}
                  alt="Profito Team Collaboration"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Card 1: Top Right - Great Team */}
              <div className="absolute top-4 -right-2 sm:-right-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-[#2196F3]/20 flex items-center gap-3.5 max-w-[210px] sm:max-w-[230px] animate-float-slow hover:scale-105 transition-transform duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#2196F3]/10 text-[#2196F3] flex items-center justify-center shrink-0 border border-[#2196F3]/20">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-extrabold text-sm text-[#0a0a0a] leading-tight" style={{ color: '#0a0a0a' }}>Great Team</h5>
                  <p className="text-[0.7rem] text-[#555555] font-medium leading-snug mt-0.5" style={{ color: '#555555' }}>
                    Work with talented people who inspire you.
                  </p>
                </div>
              </div>

              {/* Floating Card 2: Bottom Right - Career Growth */}
              <div className="absolute bottom-6 -right-2 sm:-right-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-[#2196F3]/20 flex items-start gap-3.5 max-w-[210px] sm:max-w-[230px] animate-float-delayed hover:scale-105 transition-transform duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#2196F3]/10 text-[#2196F3] flex items-center justify-center shrink-0 border border-[#2196F3]/20">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-extrabold text-sm text-[#0a0a0a] leading-tight" style={{ color: '#0a0a0a' }}>Career Growth</h5>
                  <div className="w-5 h-0.5 bg-[#bcd32e] rounded-full my-1" />
                  <p className="text-[0.7rem] text-[#555555] font-medium leading-snug" style={{ color: '#555555' }}>
                    Learn, grow and build your future with us.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Bar: Ready to take the next step? */}
          <div className="mt-10 pt-6 border-t border-[#2196F3]/15">
            <div className="bg-white/90 backdrop-blur-sm border border-[#2196F3]/20 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs hover:border-[#2196F3]/40 transition-all duration-300">

              {/* Left Text & Icon */}
              <div className="flex items-center gap-3.5 text-center sm:text-left">
                <div className="w-10 h-10 rounded-xl bg-[#2196F3]/10 text-[#2196F3] border border-[#2196F3]/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span className="font-black text-base sm:text-lg text-[#0a0a0a]" style={{ color: '#0a0a0a' }}>
                    Ready to take the next step?
                  </span>
                  <span className="hidden sm:inline text-gray-300 font-light">|</span>
                  <span className="text-xs sm:text-sm text-[#555555] font-medium" style={{ color: '#555555' }}>
                    Explore exciting opportunities and grow with Profito.
                  </span>
                </div>
              </div>

              {/* Right Button */}
              <a
                href="/careers"
                className="border-2 border-[#2196F3] hover:bg-[#2196F3] text-[#2196F3] hover:text-white font-bold text-sm px-6 py-2.5 rounded-xl transition-all duration-300 flex items-center gap-2 group whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>View Open Positions</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

            </div>
          </div>

        </div>

        {/* SECTION 7: FEATURED ON / MEDIA PUBLICATIONS */}
        <div className="mt-24 pt-12 pb-14 px-6 sm:px-10 lg:px-14 bg-[#ffffff] rounded-3xl border border-[#2196F3]/15 shadow-[0_20px_50px_rgba(33,150,243,0.06)] relative overflow-hidden">

          {/* Ambient Decorative Accent Glows */}
          <div className="animate-float-orb absolute top-0 right-1/4 w-80 h-80 bg-[#2196F3]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="animate-float-orb-delayed absolute bottom-0 left-1/4 w-80 h-80 bg-[#bcd32e]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="reveal-on-scroll text-center max-w-4xl mx-auto mb-10 relative z-10">
            {/* Top Tag Label */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-0.5 bg-[#bcd32e] rounded-full" />
              <span className="text-xs font-black tracking-widest text-[#2196F3] uppercase">PRESS & PUBLICATIONS</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0a0a0a]" style={{ color: '#0a0a0a' }}>
              Featured On / <span className="text-[#2196F3]">Media Publications</span>
            </h2>

            {/* Subtitle Description */}
            <p className="text-[#555555] text-sm sm:text-base leading-relaxed font-medium max-w-2xl mx-auto mt-3" style={{ color: '#555555' }}>
              Featured on leading industry platforms and publications for our expertise in digital marketing and business growth.
            </p>
          </div>

          {/* 18-Card Logo Grid (6 cols x 3 rows) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5 max-w-[1360px] mx-auto relative z-10">
            {publicationsList.map((pub, idx) => {
              const delayClass = `reveal-delay-${(idx % 6) + 1}`;
              return (
                <div
                  key={idx}
                  className={`reveal-scale ${delayClass} bg-white border border-[#2196F3]/15 hover:border-[#2196F3]/40 rounded-2xl p-4 sm:p-5 flex items-center justify-center shadow-[0_4px_16px_rgba(33,150,243,0.05)] hover:shadow-[0_12px_28px_rgba(33,150,243,0.14)] transition-all duration-300 hover:-translate-y-1 h-24 sm:h-28 group cursor-pointer`}
                >
                  <img
                    src={pub.img}
                    alt={pub.title}
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain group-hover:scale-108 transition-transform duration-300"
                  />
                </div>
              );
            })}
          </div>

        </div>

        {/* SECTION 8: CERTIFICATIONS & PARTNERSHIPS */}
        <div className="mt-24 pt-12 pb-14 px-6 sm:px-10 lg:px-14 bg-gradient-to-b from-white via-[#f4faff] to-white rounded-3xl border border-[#2196F3]/15 shadow-[0_20px_50px_rgba(33,150,243,0.06)] relative overflow-hidden">

          {/* Ambient Background Glows */}
          <div className="animate-float-orb absolute top-0 left-1/3 w-96 h-96 bg-[#2196F3]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="animate-float-orb-delayed absolute bottom-0 right-1/3 w-96 h-96 bg-[#bcd32e]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="reveal-on-scroll text-center max-w-4xl mx-auto mb-12 relative z-10">
            {/* Top Tag Label */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-0.5 bg-[#bcd32e] rounded-full" />
              <span className="text-xs font-black tracking-widest text-[#2196F3] uppercase">VERIFIED & CERTIFIED</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0a0a0a]" style={{ color: '#0a0a0a' }}>
              Certifications <span className="text-[#2196F3]">& Partnerships</span>
            </h2>

            {/* Subtitle Description */}
            <p className="text-[#555555] text-sm sm:text-base leading-relaxed font-medium max-w-2xl mx-auto mt-3" style={{ color: '#555555' }}>
              Our certifications and partnerships reflect our commitment to industry standards and continuous innovation.
            </p>
          </div>

          {/* 4 Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1360px] mx-auto relative z-10">
            {certificationsList.map((cert, idx) => {
              const delayClass = `reveal-delay-${idx + 1}`;
              return (
                <div
                  key={idx}
                  className={`reveal-on-scroll ${delayClass} bg-white border border-[#2196F3]/15 hover:border-[#2196F3]/40 rounded-3xl p-7 sm:p-8 flex flex-col items-center text-center shadow-[0_6px_24px_rgba(33,150,243,0.06)] hover:shadow-[0_16px_40px_rgba(33,150,243,0.14)] transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden min-h-[380px] justify-between cursor-pointer`}
                >
                  {/* Icon Disc Container */}
                  <div className="w-20 h-20 rounded-2xl bg-[#f4f7ff] border border-[#2196F3]/20 flex items-center justify-center mb-6 shadow-xs group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                    {cert.type === 'google' && (
                      <svg className="w-10 h-10 group-hover:rotate-6 transition-transform duration-300" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                      </svg>
                    )}
                    {cert.type === 'meta' && (
                      <svg className="w-10 h-10 fill-[#1877F2] group-hover:rotate-6 transition-transform duration-300" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C20.012 23.027 24 18.062 24 12.073z" />
                      </svg>
                    )}
                    {cert.type === 'hubspot' && (
                      <svg className="w-10 h-10 fill-[#FF7A59] group-hover:rotate-6 transition-transform duration-300" viewBox="0 0 24 24">
                        <path d="M18.16 8.35v-2.3a2.38 2.38 0 1 0-2.38 2.3v2.33a5.53 5.53 0 0 0-3.08 1.48L7.6 8.87a2.76 2.76 0 1 0-1.8 1.44l5.07 3.28a5.57 5.57 0 0 0 .1 3.52l-2.6 2.6a2.32 2.32 0 1 0 1.63 1.63l2.6-2.6a5.56 5.56 0 1 0 5.56-10.4zm-1.19-3.48a1.19 1.19 0 1 1 0 2.38 1.19 1.19 0 0 1 0-2.38zm-12.6 5.34a1.57 1.57 0 1 1 0-3.14 1.57 1.57 0 0 1 0 3.14zm1.19 11.83a1.13 1.13 0 1 1 0-2.26 1.13 1.13 0 0 1 0 2.26zm11.44-6.04a4.37 4.37 0 1 1-4.37-4.37 4.37 4.37 0 0 1 4.37 4.37z" />
                      </svg>
                    )}
                    {cert.type === 'bing' && (
                      <svg className="w-10 h-10 fill-[#0078D4] group-hover:rotate-6 transition-transform duration-300" viewBox="0 0 24 24">
                        <path d="M5 3v18l5.5-3.5L18 21l-3.5-5.5L19 12l-8.5 2.5L5 3z" />
                      </svg>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black text-[#0a0a0a] mb-2 leading-snug" style={{ color: '#0a0a0a' }}>
                    {cert.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#555555] font-medium leading-relaxed mb-6 flex-grow" style={{ color: '#555555' }}>
                    {cert.description}
                  </p>

                  {/* Bottom Pill Badge */}
                  <div className="bg-primary hover:bg-[#0a0a0a] text-white text-xs font-black px-6 py-2 rounded-full shadow-xs uppercase tracking-wider transition-colors duration-200">
                    {cert.badge}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* SECTION 9: CTA SECTION */}
        <div className="reveal-on-scroll mt-24">
          <CTASection />
        </div>

      </div>
    </div>
  );
};

export default About;
