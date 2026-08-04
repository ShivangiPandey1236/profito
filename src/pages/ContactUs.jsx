import React, { useState } from 'react';
import { 
  Award, 
  Users, 
  TrendingUp, 
  Phone, 
  Mail, 
  ArrowRight, 
  MessageCircle, 
  CheckCircle2, 
  Sparkles, 
  Send, 
  HelpCircle, 
  ChevronDown,
  Building2,
  PhoneCall,
  Clock,
  MapPin,
  Navigation,
  Star,
  User,
  Globe,
  Briefcase,
  FileText,
  ShieldCheck
} from 'lucide-react';

export default function ContactUs() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    service: 'SEO & AI Visibility',
    message: ''
  });

  const [activeFaq, setActiveFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
    setFormData({
      name: '',
      email: '',
      phone: '',
      website: '',
      service: 'SEO & AI Visibility',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const faqs = [
    {
      q: "How quickly will your team respond after I submit the form?",
      a: "Our growth experts typically respond within 2 to 4 business hours. We will review your website and requirements beforehand to provide actionable insights in our first conversation."
    },
    {
      q: "Do you offer custom digital marketing packages?",
      a: "Yes! Every business has unique goals. We create tailored strategy blueprints combining AI Search (LLMO/GEO), SEO, Paid Ads, and Content Marketing based on your industry and targets."
    },
    {
      q: "Can we schedule a 1-on-1 strategy call or demo?",
      a: "Absolutely! You can mention your preferred callback time in the message box, or call our direct lines +91-9560133711 or +91 987 335 5588 right away."
    },
    {
      q: "Where is your main office located?",
      a: "Our primary corporate headquarters is located at C-104, Sector 65 Noida, UP 201301, India."
    }
  ];

  return (
    <div className="contact-us-page bg-gradient-to-b from-white via-[#f0f7ff] to-[#eaf5ff] min-h-screen text-slate-800 pt-32 pb-24 overflow-hidden font-sans">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================
            HERO BANNER SECTION (Matching Screenshot)
           ========================================================= */}
        <div className="relative bg-white/95 backdrop-blur-md rounded-3xl border border-[#2196F3]/20 shadow-[0_20px_50px_rgba(33,150,243,0.08)] p-6 sm:p-10 lg:p-14 mb-16 overflow-hidden">
          
          {/* Decorative Subtle Background Orbs & Grid Dots */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2196F3]/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#bcd32e]/12 rounded-full blur-3xl pointer-events-none" />

          {/* Grid pattern SVG */}
          <div className="absolute right-6 top-6 opacity-20 pointer-events-none">
            <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
              <pattern id="dotPattern" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="#2196F3" />
              </pattern>
              <rect width="100" height="100" fill="url(#dotPattern)" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            
            {/* Left Column: Hero Copy & CTA */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Pill Badge matching image */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#bcd32e]/25 border border-[#bcd32e] text-[#4c5900] font-black text-xs uppercase tracking-wider mb-6 shadow-xs font-sans">
                <Sparkles className="w-3.5 h-3.5 text-[#4c5900]" />
                <span>DIGITAL GROWTH PARTNER</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] leading-[1.18] tracking-tight mb-6 font-sans" style={{ color: '#0f172a' }}>
                Empower Your Business <br className="hidden sm:inline" />
                with{' '}
                <span className="text-[#2196F3] relative inline-block">
                  Smart Digital Marketing Solutions
                  {/* Yellow underline decoration */}
                  <span className="absolute left-0 -bottom-1.5 w-32 h-1.5 bg-[#bcd32e] rounded-full" />
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-medium font-sans" style={{ color: '#475569' }}>
                We blend data, creativity, and AI to build strategies that drive traffic, generate leads, and maximize ROI.
              </p>

              {/* Primary CTA Button */}
              <a
                href="#contact-form-section"
                className="inline-flex items-center gap-3 bg-[#2196F3] hover:bg-[#0f172a] text-white font-bold text-base px-8 py-4 rounded-full shadow-lg shadow-[#2196F3]/30 border-2 border-[#2196F3] hover:border-[#0f172a] transition-all duration-300 hover:-translate-y-1 group font-sans"
              >
                <span className="text-white font-bold">Let's Grow Together</span>
                <ArrowRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </a>

            </div>

            {/* Right Column: 3 Stacked Stat Cards matching screenshot */}
            <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5 w-full font-sans">
              
              {/* Stat Card 1 */}
              <div className="bg-white border border-[#2196F3]/15 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-5 group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#e0f2fe] border border-[#2196F3]/20 flex items-center justify-center text-[#2196F3] shrink-0 group-hover:scale-105 transition-transform">
                  <Award className="w-7 h-7 text-[#2196F3]" />
                </div>
                <div className="text-left">
                  <div className="text-3xl sm:text-4xl font-black text-[#0f172a] leading-none mb-1 flex items-center gap-2" style={{ color: '#0f172a' }}>
                    <span>16+</span>
                  </div>
                  <div className="w-8 h-1 bg-[#2196F3] rounded-full mb-1.5" />
                  <div className="text-xs sm:text-sm font-extrabold text-slate-500 tracking-wider uppercase" style={{ color: '#64748b' }}>
                    YEARS OF EXPERIENCE
                  </div>
                </div>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-white border border-[#bcd32e]/30 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-5 group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#f7fce6] border border-[#bcd32e]/50 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Users className="w-7 h-7 text-[#728500]" />
                </div>
                <div className="text-left">
                  <div className="text-3xl sm:text-4xl font-black text-[#728500] leading-none mb-1 flex items-center gap-2" style={{ color: '#728500' }}>
                    <span>16K+</span>
                  </div>
                  <div className="w-8 h-1 bg-[#bcd32e] rounded-full mb-1.5" />
                  <div className="text-xs sm:text-sm font-extrabold text-slate-500 tracking-wider uppercase" style={{ color: '#64748b' }}>
                    HAPPY CLIENTS
                  </div>
                </div>
              </div>

              {/* Stat Card 3 */}
              <div className="bg-white border border-[#2196F3]/15 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-5 group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#e0f2fe] border border-[#2196F3]/20 flex items-center justify-center text-[#2196F3] shrink-0 group-hover:scale-105 transition-transform">
                  <TrendingUp className="w-7 h-7 text-[#2196F3]" />
                </div>
                <div className="text-left">
                  <div className="text-3xl sm:text-4xl font-black text-[#0f172a] leading-none mb-1 flex items-center gap-2" style={{ color: '#0f172a' }}>
                    <span>175+</span>
                  </div>
                  <div className="w-8 h-1 bg-[#2196F3] rounded-full mb-1.5" />
                  <div className="text-xs sm:text-sm font-extrabold text-slate-500 tracking-wider uppercase" style={{ color: '#64748b' }}>
                    MARKETING EXPERTS
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* =========================================================
              BOTTOM BANNER STRIP (Matching Screenshot exactly)
             ========================================================= */}
          <div className="mt-10 sm:mt-12 bg-gradient-to-r from-[#0052cc] via-[#2196F3] to-[#0052cc] rounded-2xl p-4 sm:p-6 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden font-sans">
            
            {/* Background Dot Accents */}
            <div className="absolute right-4 bottom-2 opacity-20 pointer-events-none">
              <div className="grid grid-cols-4 gap-1.5">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
                ))}
              </div>
            </div>

            {/* Left Box: WhatsApp Chat */}
            <div className="flex items-center gap-4 text-left w-full md:w-auto">
              <a 
                href="https://wa.me/919560133711" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#bcd32e] text-[#0f172a] flex items-center justify-center shrink-0 shadow-md hover:scale-110 transition-transform"
                aria-label="WhatsApp Chat"
              >
                <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-[#0f172a] text-[#bcd32e]" />
              </a>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white leading-tight" style={{ color: '#ffffff' }}>
                  Have a question? Chat with us on WhatsApp
                </h3>
                <p className="text-xs sm:text-sm text-blue-100 font-medium" style={{ color: '#dbeafe' }}>
                  We're here to help you grow.
                </p>
              </div>
            </div>

            {/* Middle Divider */}
            <div className="hidden md:block w-px h-10 bg-white/30" />

            {/* Right Box: Call Direct */}
            <div className="flex items-center gap-4 text-left w-full md:w-auto">
              <a 
                href="tel:+919560133711" 
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#bcd32e] bg-[#bcd32e]/10 flex items-center justify-center shrink-0 text-[#bcd32e] hover:bg-[#bcd32e] hover:text-[#0f172a] transition-all"
                aria-label="Phone Call"
              >
                <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6 text-[#bcd32e]" />
              </a>
              <div>
                <a 
                  href="tel:+919560133711" 
                  className="text-xl sm:text-2xl font-black text-[#bcd32e] hover:underline tracking-tight block"
                  style={{ color: '#bcd32e' }}
                >
                  +91-9560-013-3711
                </a>
                <div className="w-full h-0.5 bg-[#bcd32e] rounded-full mt-0.5" />
              </div>
            </div>

          </div>

        </div>


        {/* =========================================================
            SECTION 2: ULTRA-MODERN CONTACT FORM & CARDS SECTION
           ========================================================= */}
        <div id="contact-form-section" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Left Column: Ultra-Modern Glassmorphic Contact Form (Span 7) */}
          <div className="lg:col-span-7 relative bg-white/90 backdrop-blur-xl border border-[#2196F3]/25 rounded-[32px] p-6 sm:p-10 lg:p-12 shadow-[0_25px_70px_-15px_rgba(33,150,243,0.15)] text-left font-sans overflow-hidden">
            
            {/* Ambient Lighting Orbs */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#2196F3]/12 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#bcd32e]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#bcd32e]/30 border border-[#bcd32e]/60 text-[#3d4700] font-black text-xs uppercase tracking-wider mb-4 font-sans shadow-xs relative z-10">
              <Sparkles className="w-3.5 h-3.5 text-[#3d4700]" />
              <span>GET IN TOUCH</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-[#0f172a] mb-2 font-sans tracking-tight relative z-10" style={{ color: '#0f172a' }}>
              Send Us a Message
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mb-8 font-sans font-medium relative z-10" style={{ color: '#475569' }}>
              Fill out the form below and our digital growth team will get back to you with a free consultation and project quote within hours.
            </p>

            {formSubmitted && (
              <div className="mb-6 p-4 rounded-2xl bg-[#bcd32e]/25 border border-[#bcd32e] text-[#3c4700] font-bold flex items-center gap-3 font-sans relative z-10 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#4c5900] shrink-0" />
                <span>Thank you! Your message has been sent successfully. Our team will contact you shortly.</span>
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
                    <span>Phone Number</span>
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

              {/* Service Select */}
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
                    <option value="SEO & AI Visibility">SEO & AI Visibility (LLMO / GEO)</option>
                    <option value="Paid Advertising (PPC)">Paid Advertising (Google / Meta Ads)</option>
                    <option value="Web & App Development">Web & App Development</option>
                    <option value="AI Automation & Chatbots">AI Automation & Chatbots</option>
                    <option value="Branding & Creative Design">Branding & Creative Design</option>
                  </select>
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

              {/* Modern Gradient Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0052cc] via-[#2196F3] to-[#0052cc] bg-[length:200%_auto] hover:bg-right text-white font-extrabold text-base py-4.5 px-8 rounded-2xl shadow-xl shadow-[#2196F3]/25 flex items-center justify-center gap-3 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl cursor-pointer group font-sans"
              >
                <Send className="w-5 h-5 text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                <span className="text-white font-black text-base tracking-wide">Submit Proposal Request</span>
              </button>

            </form>

          </div>

          {/* Right Column: Contact Details Cards (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left font-sans">
            
            {/* Direct Lines Card */}
            <div className="bg-white border border-[#2196F3]/15 rounded-3xl p-6 sm:p-8 shadow-sm hover:border-[#2196F3]/40 transition-all font-sans">
              <div className="w-12 h-12 rounded-2xl bg-[#e0f2fe] text-[#2196F3] flex items-center justify-center mb-5">
                <Phone className="w-6 h-6 text-[#2196F3]" />
              </div>
              <h3 className="text-xl font-extrabold text-[#0f172a] mb-1 font-sans" style={{ color: '#0f172a' }}>Call Us Directly</h3>
              <p className="text-slate-500 text-xs font-semibold mb-5 font-sans" style={{ color: '#64748b' }}>Available Mon - Sat (9am - 7pm IST)</p>
              
              <div className="space-y-3.5 font-sans">
                <div className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#bcd32e] mt-1.5 shrink-0" />
                  <div>
                    <div className="text-xs font-extrabold text-slate-400 uppercase tracking-wider font-sans">Sales / India (HQ)</div>
                    <a href="tel:+919560133711" className="text-slate-900 hover:text-[#2196F3] font-bold text-base transition-colors font-sans" style={{ color: '#0f172a' }}>
                      +91-9560133711
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2196F3] mt-1.5 shrink-0" />
                  <div>
                    <div className="text-xs font-extrabold text-slate-400 uppercase tracking-wider font-sans">USA Toll-Free</div>
                    <a href="tel:+18557630320" className="text-slate-900 hover:text-[#2196F3] font-bold text-base transition-colors font-sans" style={{ color: '#0f172a' }}>
                      +1-855-763-0320
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#bcd32e] mt-1.5 shrink-0" />
                  <div>
                    <div className="text-xs font-extrabold text-slate-400 uppercase tracking-wider font-sans">HR / General Direct</div>
                    <a href="tel:+919873355588" className="text-slate-900 hover:text-[#2196F3] font-bold text-base transition-colors font-sans" style={{ color: '#0f172a' }}>
                      +91 987 335 5588
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Support Card */}
            <div className="bg-white border border-[#2196F3]/15 rounded-3xl p-6 sm:p-8 shadow-sm hover:border-[#2196F3]/40 transition-all font-sans">
              <div className="w-12 h-12 rounded-2xl bg-[#f7fce6] text-[#728500] flex items-center justify-center mb-5">
                <Mail className="w-6 h-6 text-[#728500]" />
              </div>
              <h3 className="text-xl font-extrabold text-[#0f172a] mb-1 font-sans" style={{ color: '#0f172a' }}>Email Support</h3>
              <p className="text-slate-500 text-xs font-semibold mb-5 font-sans" style={{ color: '#64748b' }}>Send us your queries anytime</p>
              
              <div className="space-y-3.5 font-sans">
                <div>
                  <div className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-0.5 font-sans">Sales Inquiries</div>
                  <a href="mailto:sales@profitointeractive.com" className="inline-flex items-center gap-2 text-[#2196F3] font-bold text-sm hover:underline font-sans">
                    <span>sales@profitointeractive.com</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#2196F3]" />
                  </a>
                </div>

                <div>
                  <div className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-0.5 font-sans">General Queries</div>
                  <a href="mailto:hello@profitointeractive.com" className="inline-flex items-center gap-2 text-[#2196F3] font-bold text-sm hover:underline font-sans">
                    <span>hello@profitointeractive.com</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#2196F3]" />
                  </a>
                </div>

                <div>
                  <div className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-0.5 font-sans">HR & Careers</div>
                  <a href="mailto:hr@profitointeractive.com" className="inline-flex items-center gap-2 text-[#2196F3] font-bold text-sm hover:underline font-sans">
                    <span>hr@profitointeractive.com</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#2196F3]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Corporate Headquarters Card */}
            <div className="bg-white border border-[#2196F3]/15 rounded-3xl p-6 sm:p-8 shadow-sm hover:border-[#2196F3]/40 transition-all font-sans">
              <div className="w-12 h-12 rounded-2xl bg-[#e0f2fe] text-[#2196F3] flex items-center justify-center mb-5">
                <MapPin className="w-6 h-6 text-[#2196F3]" />
              </div>
              <h3 className="text-xl font-extrabold text-[#0f172a] mb-3 font-sans" style={{ color: '#0f172a' }}>Corporate Headquarters</h3>
              
              <div className="space-y-4 font-sans">
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-[#2196F3] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-900 text-sm font-bold leading-relaxed font-sans" style={{ color: '#0f172a' }}>
                      Profito Interactive Growth Partners
                    </p>
                    <p className="text-slate-600 text-sm font-semibold leading-relaxed font-sans" style={{ color: '#475569' }}>
                      C-104, Sector 65 Noida, UP 201301, India
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-100 font-sans">
                  <Clock className="w-4 h-4 text-[#728500] shrink-0" />
                  <span className="text-xs font-extrabold text-slate-600 font-sans" style={{ color: '#475569' }}>Working Hours: Mon - Sat (09:30 AM – 06:30 PM IST)</span>
                </div>
              </div>
            </div>

          </div>

        </div>


        {/* =========================================================
            SECTION 3: FAQ ACCORDION SECTION
           ========================================================= */}
        <div className="bg-white border border-[#2196F3]/15 rounded-3xl p-8 sm:p-12 shadow-sm text-left font-sans mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#bcd32e]/25 text-[#4c5900] font-extrabold text-xs uppercase tracking-wider mb-3 font-sans">
              <HelpCircle className="w-3.5 h-3.5 text-[#4c5900]" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0f172a] font-sans" style={{ color: '#0f172a' }}>
              Have Questions? We Have Answers.
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 font-sans">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 font-sans"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-center p-5 text-left font-bold text-[#0f172a] text-base hover:text-[#2196F3] transition-colors cursor-pointer bg-slate-50/50 font-sans"
                  style={{ color: '#0f172a' }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#2196F3] transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="p-5 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-white font-sans font-medium" style={{ color: '#475569' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================
            SECTION 4: GOOGLE MAP LOCATION SECTION (At the End)
           ========================================================= */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center max-w-2xl mx-auto mb-8 font-sans">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2196F3]/10 text-[#2196F3] font-bold text-xs uppercase tracking-wider mb-3 font-sans">
              <MapPin className="w-3.5 h-3.5 text-[#2196F3]" />
              <span>OUR HQ LOCATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0f172a] font-sans" style={{ color: '#0f172a' }}>
              Visit Our Headquarters
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium font-sans mt-2" style={{ color: '#475569' }}>
              Located in Noida's premier technology & industrial hub with convenient connectivity.
            </p>
          </div>

          {/* Map Frame Container */}
          <div className="relative rounded-3xl border border-[#2196F3]/20 overflow-hidden shadow-xl shadow-[#2196F3]/5 h-[450px] sm:h-[500px] bg-slate-100 font-sans">
            
            {/* Map Overlay Card matching Screenshot */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xl max-w-[280px] sm:max-w-xs text-left font-sans">
              <div className="flex items-start justify-between gap-3 mb-1.5">
                <div>
                  <h3 className="font-extrabold text-[#0f172a] text-base leading-snug font-sans" style={{ color: '#0f172a' }}>
                    Profito Interactive
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold font-sans mt-0.5" style={{ color: '#64748b' }}>
                    C-104, Sector 65 Noida, UP 201301
                  </p>
                </div>
                <a 
                  href="https://maps.google.com/?q=C-104,+Sector+65,+Noida,+UP+201301" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#e0f2fe] text-[#2196F3] flex items-center justify-center hover:bg-[#2196F3] hover:text-white transition-colors shrink-0"
                  aria-label="Open in Google Maps"
                >
                  <Navigation className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold my-2.5 text-slate-700 font-sans">
                <span className="text-amber-500 font-extrabold">4.9</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-slate-400 font-medium">(320+ reviews)</span>
              </div>

              <a
                href="https://maps.google.com/?q=C-104,+Sector+65,+Noida,+UP+201301"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#2196F3] hover:underline pt-2 border-t border-slate-100 w-full font-sans"
              >
                <span>View Larger Map & Directions</span>
                <ArrowRight className="w-3 h-3 text-[#2196F3]" />
              </a>
            </div>

            {/* Embedded Interactive Google Map */}
            <iframe
              title="Profito Interactive Corporate Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4837804423455!2d77.3789524!3d28.6152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce562b704c3f5%3A0x6a2c2b3e404b901a!2sSector%2065%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />

          </div>
        </div>

      </div>
    </div>
  );
}
