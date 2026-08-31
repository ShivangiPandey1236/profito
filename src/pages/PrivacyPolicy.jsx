import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  ChevronRight,
  ShieldCheck,
  Lock,
  FileCheck,
  UserCheck,
  Database,
  Cpu,
  Cookie,
  Share2,
  Shield,
  Clock,
  Globe,
  HeartHandshake,
  RefreshCw,
  Mail,
  Search,
  CheckCircle2,
  HelpCircle,
  ArrowUp,
  Sparkles,
  Check,
  ChevronDown
} from 'lucide-react';
import { PRIVACY_DATA } from '../data/privacyData';

export default function PrivacyPolicy() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('information-collection');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [requestType, setRequestType] = useState('Data Access Request');
  const [requestEmail, setRequestEmail] = useState('');
  const [requestMessage, setRequestMessage] = useState('');

  // Icon Mapping Helper
  const renderIcon = (iconName, className = "w-5 h-5") => {
    const icons = {
      ShieldCheck: <ShieldCheck className={className} />,
      Lock: <Lock className={className} />,
      FileCheck: <FileCheck className={className} />,
      UserCheck: <UserCheck className={className} />,
      Database: <Database className={className} />,
      Cpu: <Cpu className={className} />,
      Cookie: <Cookie className={className} />,
      Share2: <Share2 className={className} />,
      Shield: <Shield className={className} />,
      Clock: <Clock className={className} />,
      Globe: <Globe className={className} />,
      HeartHandshake: <HeartHandshake className={className} />,
      RefreshCw: <RefreshCw className={className} />,
      Mail: <Mail className={className} />
    };
    return icons[iconName] || <Shield className={className} />;
  };

  // Handle Scroll to Section
  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120; // Account for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Scroll back to top listener & Active section observer
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      // Update active section based on scroll position
      const sections = PRIVACY_DATA.sections;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PRIVACY_DATA.meta.dpoEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleRequestSubmit = (e) => {
    e.preventDefault();
    setRequestSubmitted(true);
    setTimeout(() => setRequestSubmitted(false), 5000);
    setRequestEmail('');
    setRequestMessage('');
  };

  // Filter sections by search query
  const filteredSections = PRIVACY_DATA.sections.filter((sec) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    const titleMatch = sec.title.toLowerCase().includes(query);
    const subtitleMatch = sec.subtitle.toLowerCase().includes(query);
    const contentMatch = sec.subsections.some(
      (sub) =>
        sub.title.toLowerCase().includes(query) ||
        sub.content.toLowerCase().includes(query) ||
        (sub.bullets && sub.bullets.some((b) => b.toLowerCase().includes(query)))
    );
    return titleMatch || subtitleMatch || contentMatch;
  });

  return (
    <div className="privacy-page bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen text-slate-800 pt-28 sm:pt-32 pb-24 overflow-hidden font-sans">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* =========================================================
            1. HERO BANNER SECTION
           ========================================================= */}
        <div className="relative bg-gradient-to-r from-[#00398a] via-[#004bb8] to-[#2196F3] rounded-3xl p-6 sm:p-12 lg:p-14 text-white shadow-2xl overflow-hidden mb-12">
          {/* Subtle Grid Background Pattern */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)`,
              backgroundSize: '28px 28px'
            }}
          />

          <div className="relative z-10 max-w-4xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs sm:text-sm font-semibold mb-6 text-white/90">
              <Link to="/" className="inline-flex items-center gap-1.5 hover:text-[#bcd32e] transition-colors">
                <Home className="w-4 h-4 text-white" />
                <span>Home</span>
              </Link>
              <ChevronRight className="w-4 h-4 text-white/60" />
              <span className="text-[#bcd32e] font-bold">Privacy Policy</span>
            </nav>

            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#bcd32e] font-black text-xs uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#bcd32e]" />
              <span>{PRIVACY_DATA.hero.badge}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-6">
              {PRIVACY_DATA.hero.titleHighlight} <span className="text-[#bcd32e]">{PRIVACY_DATA.hero.titleMain}</span>
              <span className="block w-20 h-1 bg-[#bcd32e] rounded-full mt-3" />
            </h1>

            {/* Subtitle */}
            <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl font-medium">
              {PRIVACY_DATA.hero.subtitle}
            </p>

            {/* Stats / Governance Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/15">
              {PRIVACY_DATA.hero.stats.map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/10 text-left">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-white/70">{stat.label}</span>
                  <span className="block text-lg font-black text-[#bcd32e] mt-0.5">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================================
            2. KEY PRIVACY PILLARS (4 Glass Cards)
           ========================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PRIVACY_DATA.keyPillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white border border-[#2196F3]/15 rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-[#2196F3]/40 transition-all text-left group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#e0f2fe] border border-[#2196F3]/20 text-[#2196F3] flex items-center justify-center mb-4 group-hover:bg-[#2196F3] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                {renderIcon(pillar.icon, "w-6 h-6")}
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2 font-sans">{pillar.title}</h3>
              <p className="text-slate-600 text-xs leading-relaxed font-medium">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* =========================================================
            3. SEARCH BAR & META TIMESTAMPS
           ========================================================= */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-6 mb-10 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Metadata */}
          <div className="flex items-center gap-4 text-xs font-bold text-slate-500 flex-wrap">
            <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-full text-slate-700">
              <Clock className="w-3.5 h-3.5 text-[#2196F3]" />
              Last Updated: <span className="text-slate-900 font-extrabold">{PRIVACY_DATA.meta.lastUpdated}</span>
            </span>
            <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-full text-slate-700">
              <ShieldCheck className="w-3.5 h-3.5 text-[#728500]" />
              Effective Date: <span className="text-slate-900 font-extrabold">{PRIVACY_DATA.meta.effectiveDate}</span>
            </span>
            <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-full text-slate-700">
              Version: <span className="text-[#2196F3] font-extrabold">{PRIVACY_DATA.meta.version}</span>
            </span>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search policy topics..."
              className="w-full bg-slate-50 border border-slate-200 rounded-full pl-10 pr-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-[#2196F3] focus:ring-4 focus:ring-[#2196F3]/10 focus:outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* =========================================================
            4. MAIN CONTENT AREA (Sidebar Nav + Policy Sections)
           ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Sticky Sidebar Navigation (Desktop) */}
          <aside className="lg:col-span-4 sticky top-28 hidden lg:block">
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                <FileCheck className="w-5 h-5 text-[#2196F3]" />
                <h3 className="text-sm font-black uppercase text-slate-900 tracking-wider">Policy Contents</h3>
              </div>

              <nav className="flex flex-col gap-1.5 text-left max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
                {PRIVACY_DATA.quickNav.map((navItem) => {
                  const isActive = activeSection === navItem.id;
                  return (
                    <button
                      key={navItem.id}
                      onClick={() => scrollToSection(navItem.id)}
                      className={`text-left text-xs font-bold py-2.5 px-3.5 rounded-2xl transition-all cursor-pointer flex items-center justify-between ${
                        isActive
                          ? 'bg-[#2196F3] text-white shadow-md shadow-[#2196F3]/20 translate-x-1'
                          : 'text-slate-600 hover:bg-slate-100 hover:text-[#2196F3]'
                      }`}
                    >
                      <span className="truncate">{navItem.label}</span>
                      <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    </button>
                  );
                })}
              </nav>

              {/* Direct DPO Email Box */}
              <div className="mt-6 pt-4 border-t border-slate-100 bg-[#e0f2fe]/40 rounded-2xl p-4 border border-[#2196F3]/20 text-left">
                <span className="block text-[11px] font-black uppercase text-[#2196F3] tracking-wider mb-1">
                  Have Privacy Questions?
                </span>
                <p className="text-xs text-slate-600 font-medium mb-3">
                  Reach our Data Protection Officer directly:
                </p>
                <div className="flex items-center gap-2 bg-white rounded-xl p-2 border border-slate-200">
                  <Mail className="w-4 h-4 text-[#2196F3] shrink-0" />
                  <span className="text-[11px] font-bold text-slate-800 truncate">{PRIVACY_DATA.meta.dpoEmail}</span>
                  <button
                    onClick={handleCopyEmail}
                    className="ml-auto p-1.5 rounded-lg bg-slate-100 hover:bg-[#2196F3] hover:text-white text-slate-600 transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Sections Content */}
          <main className="lg:col-span-8 flex flex-col gap-8 text-left">
            {filteredSections.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 border border-slate-200 text-center">
                <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-800 mb-2">No Matching Privacy Terms Found</h3>
                <p className="text-sm text-slate-500 mb-6">
                  Try searching for keywords like "cookies", "GDPR", "encryption", or "deletion".
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-5 py-2.5 rounded-full bg-[#2196F3] text-white font-bold text-xs"
                >
                  Reset Search
                </button>
              </div>
            ) : (
              filteredSections.map((sec) => (
                <article
                  key={sec.id}
                  id={sec.id}
                  className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group scroll-mt-28"
                >
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
                    <span className="px-3.5 py-1 rounded-full bg-[#bcd32e]/25 text-[#4c5900] font-black text-xs uppercase tracking-wider">
                      {sec.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#e0f2fe] text-[#2196F3] flex items-center justify-center border border-[#2196F3]/20">
                      {renderIcon(sec.icon, "w-5 h-5")}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3 group-hover:text-[#2196F3] transition-colors">
                    {sec.title}
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium mb-6">
                    {sec.subtitle}
                  </p>

                  {/* Subsections */}
                  <div className="space-y-6 pt-4 border-t border-slate-100">
                    {sec.subsections.map((sub, sIdx) => (
                      <div key={sIdx} className="space-y-3">
                        <h3 className="text-base font-extrabold text-slate-800 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#2196F3]" />
                          {sub.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed font-normal">
                          {sub.content}
                        </p>
                        {sub.bullets && (
                          <ul className="space-y-2 mt-3 pl-2">
                            {sub.bullets.map((bItem, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                                <CheckCircle2 className="w-4 h-4 text-[#2196F3] shrink-0 mt-0.5" />
                                <span>{bItem}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Key Takeaway Box */}
                  {sec.takeaway && (
                    <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#e0f2fe]/60 to-[#f0f7ff] border border-[#2196F3]/20 flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-[#2196F3] shrink-0 mt-0.5" />
                      <div>
                        <span className="block text-[11px] font-black uppercase text-[#2196F3] tracking-wider mb-0.5">
                          KEY PRIVACY TAKEAWAY
                        </span>
                        <p className="text-xs sm:text-sm font-bold text-slate-800">
                          {sec.takeaway}
                        </p>
                      </div>
                    </div>
                  )}
                </article>
              ))
            )}

            {/* =========================================================
                5. FREQUENTLY ASKED PRIVACY QUESTIONS (FAQ)
               ========================================================= */}
            <section className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs mt-4">
              <div className="flex items-center gap-2.5 mb-2 text-[#2196F3]">
                <HelpCircle className="w-5 h-5 text-[#2196F3]" />
                <span className="text-xs font-black uppercase tracking-wider">CLEAR ANSWERS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6">
                Privacy & Data Security FAQs
              </h2>

              <div className="space-y-4">
                {PRIVACY_DATA.faqs.map((faq, fIdx) => {
                  const isOpen = openFaqIndex === fIdx;
                  return (
                    <div
                      key={fIdx}
                      className="border border-slate-200 rounded-2xl overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                        className="w-full p-5 text-left font-extrabold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown className={`w-5 h-5 text-[#2196F3] shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="p-5 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium bg-white border-t border-slate-100">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* =========================================================
                6. DIRECT PRIVACY RIGHTS REQUEST FORM
               ========================================================= */}
            <section className="bg-gradient-to-br from-[#00398a] via-[#004bb8] to-[#2196F3] rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#bcd32e] font-black text-xs uppercase tracking-wider mb-4">
                  <UserCheck className="w-3.5 h-3.5 text-[#bcd32e]" />
                  <span>DATA SUBJECT RIGHTS PORTAL</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
                  Submit a Data Rights or Deletion Request
                </h2>
                <p className="text-white/80 text-xs sm:text-sm font-medium mb-6">
                  Need a copy of your personal data or wish to request full account erasure? Complete this form for priority DPO action.
                </p>

                {requestSubmitted && (
                  <div className="mb-6 p-4 rounded-2xl bg-[#bcd32e] text-[#0f172a] font-extrabold flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0f172a] shrink-0" />
                    <span className="text-xs sm:text-sm">Request Submitted Successfully! Our DPO will contact you within 24 hours.</span>
                  </div>
                )}

                <form onSubmit={handleRequestSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-white/90">
                        Request Type *
                      </label>
                      <select
                        value={requestType}
                        onChange={(e) => setRequestType(e.target.value)}
                        className="w-full bg-white/10 border border-white/25 rounded-xl px-3.5 py-3 text-xs sm:text-sm font-bold text-white focus:bg-white focus:text-slate-900 focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="Data Access Request" className="text-slate-900 font-bold">Data Access / Export Request</option>
                        <option value="Data Erasure Request" className="text-slate-900 font-bold">Data Erasure / Account Deletion</option>
                        <option value="Marketing Opt-Out" className="text-slate-900 font-bold">Marketing Unsubscribe / Opt-out</option>
                        <option value="General Inquiry" className="text-slate-900 font-bold">General DPO Privacy Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-white/90">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={requestEmail}
                        onChange={(e) => setRequestEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full bg-white/10 border border-white/25 rounded-xl px-3.5 py-3 text-xs sm:text-sm font-medium text-white placeholder:text-white/50 focus:bg-white focus:text-slate-900 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-white/90">
                      Additional Details / Special Instructions *
                    </label>
                    <textarea
                      rows="3"
                      required
                      value={requestMessage}
                      onChange={(e) => setRequestMessage(e.target.value)}
                      placeholder="Please specify any particular data points or account identifiers..."
                      className="w-full bg-white/10 border border-white/25 rounded-xl p-3.5 text-xs sm:text-sm font-medium text-white placeholder:text-white/50 focus:bg-white focus:text-slate-900 focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#bcd32e] hover:bg-white text-[#0f172a] font-extrabold text-sm py-3.5 px-8 rounded-xl shadow-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Submit Official Privacy Request</span>
                    <ChevronRight className="w-4 h-4 text-[#0f172a]" />
                  </button>
                </form>
              </div>
            </section>
          </main>
        </div>

      </div>

      {/* Floating Back-to-Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-[#2196F3] text-white shadow-xl hover:bg-black hover:scale-110 transition-all flex items-center justify-center cursor-pointer"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </button>
      )}
    </div>
  );
}
