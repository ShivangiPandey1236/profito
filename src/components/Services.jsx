import React, { useEffect, useRef } from 'react'
import {
  Search,
  MousePointerClick,
  Share2,
  Globe,
  Bot,
  BarChart3,
} from 'lucide-react'

const services = [
  {
    icon: Search,
    label: 'AI Search Optimization',
    tag: 'SEO + AEO',
    desc: 'Rank higher with AI-powered on-page, off-page & AEO strategies built for modern search engines.',
  },
  {
    icon: MousePointerClick,
    label: 'PPC Management',
    tag: 'Paid Ads',
    desc: 'Performance-driven Google & Meta ad campaigns that maximise ROAS and lower your cost per acquisition.',
  },
  {
    icon: Share2,
    label: 'Social Media Marketing',
    tag: 'SMM',
    desc: 'Scroll-stopping content and community-building strategies across every major social platform.',
  },
  {
    icon: Globe,
    label: 'Web Development',
    tag: 'Design & Dev',
    desc: 'Fast, conversion-optimised websites and landing pages built to impress and built to rank.',
  },
  {
    icon: Bot,
    label: 'AI Automation',
    tag: 'AI Ops',
    desc: 'Automate lead nurturing, reporting & workflows with custom AI pipelines — free your team to grow.',
  },
  {
    icon: BarChart3,
    label: 'Analytics & Reporting',
    tag: 'Insights',
    desc: 'Real-time dashboards and monthly growth reports so you always know exactly where your ROI is coming from.',
  },
]

export default function Services() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const cardsRef  = useRef(null)

  useEffect(() => {
    const targets = [headingRef.current, cardsRef.current].filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="services-section" ref={sectionRef}>
      {/* Badge + Heading block */}
      <div ref={headingRef} className="services-heading-block">
        <div className="services-badge">
          <span className="services-badge-dot" />
          <span>What We Do</span>
        </div>

        <h2 className="services-title">
          Full-Stack Digital Growth,{' '}
          <span className="services-title-highlight">Powered by AI</span>
        </h2>

        <p className="services-subtitle">
          From search to social, paid media to automation — every service is engineered around one goal: measurable ROI for your business.
        </p>
      </div>

      {/* Cards grid */}
      <div ref={cardsRef} className="services-grid">
        {services.map((svc, i) => {
          const Icon = svc.icon
          return (
            <div
              key={i}
              className="services-card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="services-card-top">
                <div className="services-card-icon">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <span className="services-card-tag">{svc.tag}</span>
              </div>
              <h3 className="services-card-title">{svc.label}</h3>
              <p className="services-card-desc">{svc.desc}</p>
              <div className="services-card-footer">
                <span className="services-card-link">
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
