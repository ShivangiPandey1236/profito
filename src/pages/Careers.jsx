import React, { useState, useRef } from 'react';
import {
  Home,
  ArrowRight,
  Users,
  TrendingUp,
  Award,
  Wallet,
  Lightbulb,
  Monitor,
  Briefcase,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  HeartHandshake,
  User,
  Mail,
  Phone,
  Link2,
  FileText,
  ShieldCheck,
  UploadCloud,
  Paperclip,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Careers() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedJob, setSelectedJob] = useState('Senior SEO & AI Visibility Specialist');
  const [resumeFile, setResumeFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '3-5 Years',
    portfolio: '',
    message: ''
  });

  const benefits = [
    {
      icon: HeartHandshake,
      title: "Great Culture",
      desc: "Work in a positive, inclusive and supportive environment."
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      desc: "Learn, upskill and grow with exciting challenges every day."
    },
    {
      icon: Award,
      title: "Make an Impact",
      desc: "Be a part of meaningful projects that create real business impact."
    },
    {
      icon: Wallet,
      title: "Competitive Benefits",
      desc: "We offer attractive compensation and employee benefits."
    },
    {
      icon: Lightbulb,
      title: "Work-Life Balance",
      desc: "We value your time and believe in healthy work-life balance."
    },
    {
      icon: Monitor,
      title: "Modern Workplace",
      desc: "Work with the latest tools in a flexible and modern environment."
    }
  ];

  const jobsList = [
    {
      id: 1,
      title: "Senior SEO & AI Visibility Specialist",
      category: "Digital Marketing",
      location: "Noida, Sector 65 (HQ)",
      type: "Full-Time",
      experience: "3+ Years",
      desc: "Lead advanced SEO, Generative Engine Optimization (GEO), and LLM search visibility strategies for global enterprise clients."
    },
    {
      id: 2,
      title: "Performance Marketing Lead (PPC)",
      category: "Digital Marketing",
      location: "Noida, Sector 65 (HQ)",
      type: "Full-Time",
      experience: "4+ Years",
      desc: "Manage high-budget Google Ads, Meta Ads, and ROI-driven performance marketing campaigns across multiple industries."
    },
    {
      id: 3,
      title: "Full Stack Web Developer (React / Node)",
      category: "Engineering",
      location: "Noida, Sector 65 (HQ)",
      type: "Full-Time",
      experience: "2+ Years",
      desc: "Build fast, scalable web applications and interactive marketing platforms using React, Vite, Tailwind, and Node.js."
    },
    {
      id: 4,
      title: "UI/UX & Product Designer",
      category: "Design",
      location: "Noida, Sector 65 (HQ)",
      type: "Full-Time",
      experience: "2+ Years",
      desc: "Craft premium user interfaces, brand identities, and high-converting landing pages for tech-forward brands."
    },
    {
      id: 5,
      title: "Business Development Manager",
      category: "Sales & HR",
      location: "Noida, Sector 65 (HQ)",
      type: "Full-Time",
      experience: "3+ Years",
      desc: "Drive strategic agency partnerships, client acquisitions, and consult business leaders on digital transformation."
    }
  ];

  const categories = ['All', 'Digital Marketing', 'Engineering', 'Design', 'Sales & HR'];

  const filteredJobs = activeCategory === 'All'
    ? jobsList
    : jobsList.filter(job => job.category === activeCategory);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setResumeFile(e.dataTransfer.files[0]);
    }
  };

  const removeFile = (e) => {
    e.stopPropagation();
    setResumeFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
    setFormData({
      name: '',
      email: '',
      phone: '',
      experience: '3-5 Years',
      portfolio: '',
      message: ''
    });
    setResumeFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="careers-page bg-gradient-to-b from-white via-[#f0f7ff] to-[#eaf5ff] min-h-screen text-slate-800 pt-28 sm:pt-32 pb-24 overflow-hidden font-sans">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* =========================================================
            HERO BANNER SECTION (Matching Screenshot)
           ========================================================= */}
        <div className="relative bg-gradient-to-r from-[#004bb8] via-[#2196F3] to-[#004bb8] rounded-3xl p-6 sm:p-12 lg:p-16 text-white shadow-2xl overflow-hidden mb-16">

          {/* Subtle Doodle / Geometric Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">

            {/* Left Copy & Breadcrumb */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">

              {/* Breadcrumb matching screenshot */}
              <nav className="flex items-center gap-2 text-xs sm:text-sm font-semibold mb-6 text-white/90">
                <Link to="/" className="inline-flex items-center gap-1.5 hover:text-[#bcd32e] transition-colors">
                  <Home className="w-4 h-4 text-white" />
                  <span>Home</span>
                </Link>
                <ChevronRight className="w-4 h-4 text-white/60" />
                <span className="text-[#bcd32e] font-bold">Careers</span>
              </nav>

              {/* Headline matching screenshot */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.18] tracking-tight mb-6" style={{ color: '#ffffff' }}>
                Build Your Career. <br />
                Grow With <span className="text-[#bcd32e]">Profito Interactive.</span>
                <span className="block w-24 h-1 bg-[#bcd32e] rounded-full mt-3" />
              </h1>

              {/* Subtitle matching screenshot */}
              <p className="text-white/90 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-medium" style={{ color: '#f0f7ff' }}>
                We are a team of innovative thinkers, creators, and problem solvers working together to deliver impactful digital solutions. Join us and grow your career to the next level.
              </p>

              {/* Explore Button */}
              <a
                href="#open-positions"
                className="inline-flex items-center gap-3 bg-[#bcd32e] hover:bg-white text-[#0f172a] font-extrabold text-base px-7 py-3.5 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <span className="text-[#0f172a] font-extrabold">Explore Opportunities</span>
                <span className="w-7 h-7 rounded-full bg-[#0f172a] text-white flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4 text-white" />
                </span>
              </a>

            </div>

            {/* Right Illustration / WE'RE HIRING Graphic */}
            <div className="lg:col-span-5 flex justify-center items-center relative">

              <div className="relative w-full max-w-sm sm:max-w-md flex flex-col items-center justify-center p-6">

                {/* Glowing Aura Behind Chair */}
                <div className="absolute w-72 h-72 bg-[#bcd32e]/20 rounded-full blur-3xl pointer-events-none" />

                {/* Office Chair & WE'RE HIRING Badge Box */}
                <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-center shadow-2xl flex flex-col items-center w-full">

                  {/* Decorative Badge Icon floating */}
                  <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-[#bcd32e] text-[#0f172a] flex items-center justify-center shadow-lg animate-bounce">
                    <Sparkles className="w-5 h-5 text-[#0f172a]" />
                  </div>

                  <div className="w-20 h-20 rounded-full bg-white/20 border-2 border-[#bcd32e] flex items-center justify-center mb-6">
                    <Briefcase className="w-10 h-10 text-[#bcd32e]" />
                  </div>

                  {/* WE'RE HIRING Signboard */}
                  <div className="bg-white text-[#0f172a] px-8 py-5 rounded-2xl shadow-xl border-4 border-[#bcd32e] transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                    <span className="block text-xs font-black tracking-widest text-[#2196F3] uppercase">WE ARE</span>
                    <span className="block text-3xl font-black text-[#004bb8] tracking-tight leading-none mt-0.5">HIRING!</span>
                  </div>

                  <p className="text-white/80 text-xs font-semibold mt-6 uppercase tracking-wider">
                    Multiple Roles Open Across Tech & Marketing
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* =========================================================
            SECTION 2: 6 BENEFITS CARDS (Matching Screenshot Grid)
           ========================================================= */}
        <div className="bg-white rounded-3xl border border-[#2196F3]/15 shadow-sm p-8 sm:p-12 mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            {benefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center px-3 pt-6 lg:pt-0 first:pt-0 first:pl-0 group">
                  <div className="w-14 h-14 rounded-full bg-[#e0f2fe] border border-[#2196F3]/20 text-[#2196F3] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#2196F3] group-hover:text-white transition-all duration-300 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#0f172a] mb-2 font-sans" style={{ color: '#0f172a' }}>
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-medium font-sans" style={{ color: '#64748b' }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            SECTION 3: OPEN POSITIONS LIST
           ========================================================= */}
        <div id="open-positions" className="mb-20">

          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2196F3]/10 text-[#2196F3] font-bold text-xs uppercase tracking-wider mb-3">
              <Briefcase className="w-3.5 h-3.5 text-[#2196F3]" />
              <span>CURRENT OPPORTUNITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a]" style={{ color: '#0f172a' }}>
              Explore Open Positions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium mt-2" style={{ color: '#475569' }}>
              Find the role that matches your passion and skillset to join our growth engine.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex justify-center items-center gap-2 sm:gap-3 flex-wrap mb-10">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${activeCategory === cat
                  ? 'bg-[#2196F3] text-white shadow-md shadow-[#2196F3]/25 scale-105'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-[#2196F3] hover:text-[#2196F3]'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Job Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-[#2196F3]/15 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-[#2196F3]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-[#bcd32e]/25 text-[#4c5900] font-black text-xs uppercase tracking-wider">
                      {job.category}
                    </span>
                    <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#2196F3]" />
                      {job.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#0f172a] mb-3 group-hover:text-[#2196F3] transition-colors" style={{ color: '#0f172a' }}>
                    {job.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium" style={{ color: '#475569' }}>
                    {job.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {job.location}
                    </span>
                    <span>•</span>
                    <span>{job.experience}</span>
                  </div>

                  <a
                    href="#apply-form"
                    onClick={() => setSelectedJob(job.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#2196F3] hover:underline"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* =========================================================
            SECTION 4: ULTRA-MODERN CANDIDATE APPLICATION FORM
           ========================================================= */}
        <div id="apply-form" className="relative bg-white/90 backdrop-blur-xl border border-[#2196F3]/25 rounded-[32px] p-6 sm:p-12 lg:p-14 shadow-[0_25px_70px_-15px_rgba(33,150,243,0.15)] text-left max-w-4xl mx-auto overflow-hidden">

          {/* Ambient Lighting Orbs */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#2196F3]/12 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#bcd32e]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Form Header */}
          <div className="text-center max-w-xl mx-auto mb-10 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#bcd32e]/30 border border-[#bcd32e]/60 text-[#3d4700] font-black text-xs uppercase tracking-wider mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#3d4700]" />
              <span>DIRECT HR APPLICATION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight mb-2" style={{ color: '#0f172a' }}>
              Ready to Take the Next Step?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium" style={{ color: '#475569' }}>
              Complete the quick application form below to fast-track your profile with our hiring manager.
            </p>

            {/* Micro Trust Indicators */}
            <div className="flex items-center justify-center gap-6 mt-4 text-xs font-bold text-slate-500 flex-wrap">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2196F3]" />
                Direct HR Review
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#728500]" />
                100% Confidential
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#2196F3]" />
                Fast 24h Response
              </span>
            </div>
          </div>

          {formSubmitted && (
            <div className="mb-8 p-5 rounded-2xl bg-[#bcd32e]/25 border border-[#bcd32e] text-[#3c4700] font-extrabold flex items-center gap-3 animate-fade-in relative z-10 shadow-md">
              <CheckCircle2 className="w-6 h-6 text-[#4c5900] shrink-0" />
              <div>
                <h4 className="text-base font-black text-[#2196F3]">Application Submitted Successfully!</h4>
                <p className="text-xs font-semibold text-[#4c5900] mt-0.5">
                  Our HR talent team (hr@profitointeractive.com) will review your credentials and contact you shortly.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">

            {/* Position Selector Field */}
            <div>
              <label className="block text-xs font-black uppercase text-slate-700 mb-2 tracking-wider flex items-center gap-2" style={{ color: '#334155' }}>
                <Briefcase className="w-3.5 h-3.5 text-[#2196F3]" />
                <span>Target Position *</span>
              </label>
              <div className="relative group">
                <select
                  value={selectedJob}
                  onChange={(e) => setSelectedJob(e.target.value)}
                  className="w-full bg-slate-50/80 border border-slate-200/90 rounded-2xl px-4 py-4 text-sm font-bold text-slate-900 focus:bg-white focus:border-[#2196F3] focus:ring-4 focus:ring-[#2196F3]/10 focus:outline-none transition-all shadow-2xs appearance-none cursor-pointer"
                >
                  {jobsList.map((j) => (
                    <option key={j.id} value={j.title}>
                      {j.title} — {j.category}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <ChevronRight className="w-4 h-4 rotate-90 text-[#2196F3]" />
                </div>
              </div>
            </div>

            {/* Row 1: Full Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-black uppercase text-slate-700 mb-2 tracking-wider flex items-center gap-2" style={{ color: '#334155' }}>
                  <User className="w-3.5 h-3.5 text-[#2196F3]" />
                  <span>Full Name *</span>
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
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-slate-50/80 border border-slate-200/90 rounded-2xl pl-11 pr-4 py-4 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#2196F3] focus:ring-4 focus:ring-[#2196F3]/10 focus:outline-none transition-all shadow-2xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase text-slate-700 mb-2 tracking-wider flex items-center gap-2" style={{ color: '#334155' }}>
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
                    placeholder="alex@example.com"
                    className="w-full bg-slate-50/80 border border-slate-200/90 rounded-2xl pl-11 pr-4 py-4 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#2196F3] focus:ring-4 focus:ring-[#2196F3]/10 focus:outline-none transition-all shadow-2xs"
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Phone & LinkedIn / Portfolio */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-black uppercase text-slate-700 mb-2 tracking-wider flex items-center gap-2" style={{ color: '#334155' }}>
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
                    placeholder="+91 98765 43210"
                    className="w-full bg-slate-50/80 border border-slate-200/90 rounded-2xl pl-11 pr-4 py-4 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#2196F3] focus:ring-4 focus:ring-[#2196F3]/10 focus:outline-none transition-all shadow-2xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase text-slate-700 mb-2 tracking-wider flex items-center gap-2" style={{ color: '#334155' }}>
                  <Link2 className="w-3.5 h-3.5 text-[#2196F3]" />
                  <span>Google Drive / Portfolio URL</span>
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#2196F3] transition-colors pointer-events-none">
                    <Link2 className="w-4 h-4" />
                  </div>
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    placeholder="https://drive.google.com/... or portfolio URL"
                    className="w-full bg-slate-50/80 border border-slate-200/90 rounded-2xl pl-11 pr-4 py-4 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#2196F3] focus:ring-4 focus:ring-[#2196F3]/10 focus:outline-none transition-all shadow-2xs"
                  />
                </div>
              </div>
            </div>

            {/* Hidden File Input */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              className="hidden"
            />

            {/* Interactive Drag & Drop / File Upload Box */}
            <div>
              <label className="block text-xs font-black uppercase text-slate-700 mb-2 tracking-wider flex items-center gap-2" style={{ color: '#334155' }}>
                <UploadCloud className="w-3.5 h-3.5 text-[#2196F3]" />
                <span>Attach Resume File / Document</span>
              </label>

              <div
                onClick={() => fileInputRef.current && fileInputRef.current.click()}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`p-5 rounded-2xl border-2 border-dashed transition-all cursor-pointer flex flex-col sm:flex-row items-center gap-4 ${isDragging
                  ? 'border-[#2196F3] bg-[#2196F3]/15 scale-[1.01]'
                  : resumeFile
                    ? 'border-[#bcd32e] bg-[#bcd32e]/10'
                    : 'border-[#2196F3]/30 bg-[#2196F3]/5 hover:border-[#2196F3] hover:bg-[#2196F3]/10'
                  }`}
              >
                {resumeFile ? (
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#bcd32e] text-[#0f172a] flex items-center justify-center shrink-0 shadow-md">
                        <Paperclip className="w-6 h-6 text-[#0f172a]" />
                      </div>
                      <div className="text-left">
                        <h4 className="text-sm font-extrabold text-[#0f172a] flex items-center gap-2">
                          <span className="text-[#2196F3]">{resumeFile.name}</span>
                          <CheckCircle2 className="w-4 h-4 text-[#728500]" />
                        </h4>
                        <p className="text-xs text-slate-500 font-semibold mt-0.5">
                          {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB • Ready to submit
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={removeFile}
                      className="p-2 rounded-xl bg-red-100 hover:bg-red-200 text-red-600 transition-colors cursor-pointer"
                      title="Remove file"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="w-12 h-12 rounded-xl bg-white text-[#2196F3] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                      <UploadCloud className="w-6 h-6 text-[#2196F3]" />
                    </div>
                    <div className="text-left grow">
                      <h4 className="text-sm font-extrabold text-[#0f172a] flex items-center gap-2">
                        <span className="text-[#2196F3]">Attach Resume / Work Samples (PDF, DOC, DOCX)</span>
                        <span className="text-xs font-bold text-[#2196F3] bg-[#2196F3]/10 px-2 py-0.5 rounded-full">Click to browse</span>
                      </h4>
                      <p className="text-xs text-slate-500 font-medium mt-1">
                        Drag & drop your file here, or paste your Google Drive/Portfolio link in the URL field above. Direct email: {' '}
                        <a
                          href="mailto:hr@profitointeractive.com"
                          onClick={(e) => e.stopPropagation()}
                          className="text-[#2196F3] font-bold hover:underline"
                        >
                          hr@profitointeractive.com
                        </a>
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Row 3: Cover Note */}
            <div>
              <label className="block text-xs font-black uppercase text-slate-700 mb-2 tracking-wider flex items-center gap-2" style={{ color: '#334155' }}>
                <FileText className="w-3.5 h-3.5 text-[#2196F3]" />
                <span>Cover Note / Key Highlights *</span>
              </label>
              <div className="relative group">
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Share a short note on your experience, notice period, and why you want to join Profito..."
                  className="w-full bg-slate-50/80 border border-slate-200/90 rounded-2xl p-4 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#2196F3] focus:ring-4 focus:ring-[#2196F3]/10 focus:outline-none transition-all shadow-2xs"
                />
              </div>
            </div>

            {/* Gradient CTA Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#0052cc] via-[#2196F3] to-[#0052cc] bg-[length:200%_auto] hover:bg-right text-white font-extrabold text-base py-4.5 px-8 rounded-2xl shadow-xl shadow-[#2196F3]/25 flex items-center justify-center gap-3 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl cursor-pointer group"
            >
              <Send className="w-5 h-5 text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              <span className="text-white font-black text-base tracking-wide">Submit Job Application</span>
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}
