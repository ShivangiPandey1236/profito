import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  ChevronRight,
  ShieldCheck,
  Lock,
  UserCheck,
  Database,
  Cpu,
  Share2,
  Clock,
  HeartHandshake,
  RefreshCw,
  Mail,
  Search,
  CheckCircle2,
  ArrowUp,
  Sparkles,
  Check,
  Copy,
  FileText,
  BookOpen,
  Target,
  Shield,
  Scale
} from 'lucide-react';
import { PRIVACY_DATA } from '../data/privacyData';

export default function PrivacyPolicy() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('sec-1-introduction');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Dynamic Lucide Icon Mapper
  const renderIcon = (iconName, className = "w-5 h-5") => {
    const icons = {
      FileText: <FileText className={className} />,
      BookOpen: <BookOpen className={className} />,
      Target: <Target className={className} />,
      ShieldCheck: <ShieldCheck className={className} />,
      Database: <Database className={className} />,
      Cpu: <Cpu className={className} />,
      Share2: <Share2 className={className} />,
      Clock: <Clock className={className} />,
      Lock: <Lock className={className} />,
      UserCheck: <UserCheck className={className} />,
      Shield: <Shield className={className} />,
      HeartHandshake: <HeartHandshake className={className} />,
      RefreshCw: <RefreshCw className={className} />,
      Scale: <Scale className={className} />,
      Mail: <Mail className={className} />
    };
    return icons[iconName] || <FileText className={className} />;
  };

  // Scroll to section handler
  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120; // Account for sticky header offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Back to top & active section scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      const sections = PRIVACY_DATA.sections;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 220) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  // Filter sections based on search input
  const filteredSections = PRIVACY_DATA.sections.filter((sec) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const titleMatch = sec.title.toLowerCase().includes(q);
    const leadMatch = sec.lead && sec.lead.toLowerCase().includes(q);
    const listMatch = sec.listItems && sec.listItems.some((item) => item.toLowerCase().includes(q));
    const defMatch = sec.definitions && sec.definitions.some((def) => def.term.toLowerCase().includes(q) || def.text.toLowerCase().includes(q));
    return titleMatch || leadMatch || listMatch || defMatch;
  });

  return (
    <div className="privacy-page bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen text-slate-800 pt-28 sm:pt-32 pb-24 overflow-hidden font-sans">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* =========================================================
            HERO BANNER SECTION
           ========================================================= */}
        <div className="relative bg-gradient-to-r from-[#00398a] via-[#004bb8] to-[#2196F3] rounded-3xl p-6 sm:p-12 lg:p-14 text-white shadow-2xl overflow-hidden mb-8">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)`,
              backgroundSize: '28px 28px'
            }}
          />

          <div className="relative z-10 max-w-4xl text-left">
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

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-6">
              {PRIVACY_DATA.hero.titleHighlight} <span className="text-[#bcd32e]">{PRIVACY_DATA.hero.titleMain}</span>
              <span className="block w-20 h-1 bg-[#bcd32e] rounded-full mt-3" />
            </h1>

            {/* Subtitle */}
            <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl font-medium">
              {PRIVACY_DATA.hero.subtitle}
            </p>

            {/* Key Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/15">
              {PRIVACY_DATA.hero.stats.map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/10 text-left">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-white/70">{stat.label}</span>
                  <span className="block text-base sm:text-lg font-black text-[#bcd32e] mt-0.5">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================================
            KEY HIGHLIGHTS BAR & REAL-TIME SEARCH
           ========================================================= */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 mb-8 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs font-bold text-slate-500 flex-wrap">
            <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-full text-slate-700">
              <Clock className="w-3.5 h-3.5 text-[#2196F3]" />
              Last Modified: <span className="!text-slate-900 font-extrabold">{PRIVACY_DATA.meta.lastUpdated}</span>
            </span>
            <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-full text-slate-700">
              <ShieldCheck className="w-3.5 h-3.5 text-[#728500]" />
              Company: <span className="!text-slate-900 font-extrabold">{PRIVACY_DATA.meta.companyName}</span>
            </span>
            <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-full text-slate-700">
              Version: <span className="text-[#2196F3] font-extrabold">{PRIVACY_DATA.meta.version}</span>
            </span>
          </div>

          <div className="relative w-full md:w-80">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search policy sections..."
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
            TOP STICKY QUICK NAVIGATION BAR (FULL WIDTH INDEX)
           ========================================================= */}
        <div className="sticky top-[72px] sm:top-[108px] z-40 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-3xl p-3.5 shadow-md mb-10 overflow-x-auto flex items-center gap-2">
          {PRIVACY_DATA.quickNav.map((navItem) => {
            const isActive = activeSection === navItem.id;
            return (
              <button
                key={navItem.id}
                onClick={() => scrollToSection(navItem.id)}
                className={`px-4 py-2 rounded-2xl text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer ${isActive
                    ? 'bg-[#2196F3] text-white shadow-md shadow-[#2196F3]/25 scale-102'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-[#2196F3]'
                  }`}
              >
                {navItem.label}
              </button>
            );
          })}
        </div>

        {/* =========================================================
            FULL WIDTH POLICY SECTIONS (SECTIONS 1 TO 15)
           ========================================================= */}
        <main className="w-full flex flex-col gap-8 text-left">
          {filteredSections.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 border border-slate-200 text-center w-full">
              <FileText className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-800 mb-2">No Matching Sections Found</h3>
              <p className="text-sm text-slate-500 mb-6">
                Try searching for keywords like "DPDP", "GDPR", "Cookies", "Retention", or "Rights".
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
                className="w-full bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group scroll-mt-36"
              >
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
                  <span className="px-3.5 py-1 rounded-full bg-[#bcd32e]/25 text-[#4c5900] font-black text-xs uppercase tracking-wider">
                    SECTION {sec.number}
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-[#e0f2fe] text-[#2196F3] flex items-center justify-center border border-[#2196F3]/20">
                    {renderIcon(sec.icon, "w-6 h-6")}
                  </div>
                </div>

                {/* Section Title */}
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black !text-slate-900 mb-4 group-hover:text-[#2196F3] transition-colors uppercase tracking-tight">
                  {sec.number}. {sec.title}
                </h2>

                {/* Lead Text */}
                {sec.lead && (
                  <p className="text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed font-medium mb-5">
                    {sec.lead}
                  </p>
                )}

                {/* Paragraphs */}
                {sec.paragraphs && sec.paragraphs.map((pText, pIdx) => (
                  <p key={pIdx} className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-4">
                    {pText}
                  </p>
                ))}

                {/* List Items */}
                {sec.listItems && (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6 pl-1">
                    {sec.listItems.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium bg-slate-50/60 p-3.5 rounded-2xl border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-[#2196F3] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Definitions Cards Grid (for Section 2, Section 4 - Full Width 3 Columns) */}
                {sec.definitions && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
                    {sec.definitions.map((def, dIdx) => (
                      <div key={dIdx} className="bg-slate-50/90 border border-slate-200/80 rounded-2xl p-5 text-left flex flex-col justify-between hover:border-[#2196F3]/30 transition-colors">
                        <div>
                          <span className="block text-xs font-black text-[#2196F3] uppercase tracking-wider mb-2">
                            "{def.term}"
                          </span>
                          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                            {def.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Subsection Blocks (for Section 3, Section 5 - Full Width 2 Columns) */}
                {sec.blocks && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {sec.blocks.map((block, bIdx) => (
                      <div key={bIdx} className="bg-slate-50/70 border border-slate-200/70 rounded-2xl p-6">
                        <h3 className="text-base font-extrabold !text-slate-900 mb-3 font-sans">
                          {block.heading}
                        </h3>
                        {block.text && (
                          <p className="text-xs sm:text-sm text-slate-600 font-medium mb-4">
                            {block.text}
                          </p>
                        )}
                        {block.items && (
                          <ul className="space-y-2.5">
                            {block.items.map((bItem, biIdx) => (
                              <li key={biIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                                <span className="w-2 h-2 rounded-full bg-[#2196F3] shrink-0 mt-1.5" />
                                <span>{bItem}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Grievance Redressal Card (Section 11 - Full Width Banner) */}
                {sec.grievanceCard && (
                  <div className="bg-gradient-to-br from-[#00398a] via-[#004bb8] to-[#2196F3] rounded-3xl p-6 sm:p-8 text-white shadow-lg my-6">
                    <h3 className="text-lg font-black text-[#bcd32e] uppercase tracking-wider mb-4">
                      Grievance / Privacy Contact
                    </h3>
                    <p className="text-base font-extrabold text-white mb-4">
                      {sec.grievanceCard.company}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-white/90">
                      <div className="bg-white/10 rounded-2xl p-4 border border-white/15">
                        <span className="block text-[10px] uppercase font-bold text-white/70 mb-1">Email</span>
                        <a href={`mailto:${sec.grievanceCard.email}`} className="font-bold text-white hover:text-[#bcd32e]">
                          {sec.grievanceCard.email}
                        </a>
                      </div>
                      <div className="bg-white/10 rounded-2xl p-4 border border-white/15">
                        <span className="block text-[10px] uppercase font-bold text-white/70 mb-1">Phone</span>
                        <a href={`tel:${sec.grievanceCard.phone}`} className="font-bold text-white hover:text-[#bcd32e]">
                          {sec.grievanceCard.phone}
                        </a>
                      </div>
                      <div className="bg-white/10 rounded-2xl p-4 border border-white/15">
                        <span className="block text-[10px] uppercase font-bold text-white/70 mb-1">Corporate Office</span>
                        <span className="font-semibold text-white">{sec.grievanceCard.address}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Contact Information Card (Section 15 - Full Width Banner) */}
                {sec.contactCard && (
                  <div className="bg-gradient-to-br from-[#00398a] via-[#004bb8] to-[#2196F3] rounded-3xl p-6 sm:p-8 text-white shadow-lg my-6">
                    <h3 className="text-lg font-black text-[#bcd32e] uppercase tracking-wider mb-6">
                      Profito Interactive Pvt. Ltd.
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-xs sm:text-sm">
                      <div className="bg-white/10 rounded-2xl p-4 border border-white/15">
                        <span className="block text-[10px] uppercase font-bold text-white/70 mb-1">Website</span>
                        <a href={`https://${sec.contactCard.website}`} target="_blank" rel="noopener noreferrer" className="font-bold text-[#bcd32e] hover:underline">
                          {sec.contactCard.website}
                        </a>
                      </div>
                      <div className="bg-white/10 rounded-2xl p-4 border border-white/15">
                        <span className="block text-[10px] uppercase font-bold text-white/70 mb-1">General & Sales Email</span>
                        <a href={`mailto:${sec.contactCard.generalEmail}`} className="font-bold text-white hover:text-[#bcd32e]">
                          {sec.contactCard.generalEmail}
                        </a>
                      </div>
                      <div className="bg-white/10 rounded-2xl p-4 border border-white/15">
                        <span className="block text-[10px] uppercase font-bold text-white/70 mb-1">HR Email</span>
                        <a href={`mailto:${sec.contactCard.hrEmail}`} className="font-bold text-white hover:text-[#bcd32e]">
                          {sec.contactCard.hrEmail}
                        </a>
                      </div>
                      <div className="bg-white/10 rounded-2xl p-4 border border-white/15">
                        <span className="block text-[10px] uppercase font-bold text-white/70 mb-1">Telephone</span>
                        <a href={`tel:${sec.contactCard.phone}`} className="font-bold text-white hover:text-[#bcd32e]">
                          {sec.contactCard.phone}
                        </a>
                      </div>
                      <div className="sm:col-span-2 md:col-span-4 pt-4 border-t border-white/20 flex items-center justify-between flex-wrap gap-3">
                        <div>
                          <span className="block text-[10px] uppercase font-bold text-white/70 mb-1">Corporate Office Address</span>
                          <span className="font-semibold text-white">{sec.contactCard.office}</span>
                        </div>
                        <button
                          onClick={() => handleCopyEmail(sec.contactCard.generalEmail)}
                          className="px-4 py-2 rounded-xl bg-[#bcd32e] hover:bg-white text-[#0f172a] text-xs font-extrabold transition-all shadow-md flex items-center gap-2 cursor-pointer"
                        >
                          {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#0f172a]" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Footnote / Bullet list (e.g. Section 1, Section 7, Section 9) */}
                {sec.footnoteHeading && (
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <h4 className="text-xs sm:text-sm font-black uppercase text-slate-800 tracking-wider mb-3">
                      {sec.footnoteHeading}
                    </h4>
                    {sec.footnoteText && (
                      <p className="text-xs sm:text-sm text-slate-600 font-medium mb-3">
                        {sec.footnoteText}
                      </p>
                    )}
                    {sec.footnoteBullets && (
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pl-1">
                        {sec.footnoteBullets.map((fBullet, fbIdx) => (
                          <li key={fbIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium bg-slate-50/50 p-3 rounded-xl border border-slate-100">
                            <span className="w-2 h-2 rounded-full bg-[#2196F3] shrink-0 mt-1.5" />
                            <span>{fBullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </article>
            ))
          )}
        </main>

      </div>

      {/* Floating Back to Top Button */}
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
