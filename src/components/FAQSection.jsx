import React, { useEffect, useRef, useState } from 'react'

const FAQS = [
  {
    q: 'What digital marketing services does Profito Interactive offer?',
    a: 'We offer a full suite of digital marketing services including SEO, AEO, PPC management, social media marketing, web development, AI automation, and analytics & reporting — all engineered to deliver measurable ROI.',
  },
  {
    q: 'How long does it take to see results from SEO?',
    a: 'SEO is a long-term strategy. Most clients start seeing meaningful improvements in rankings and traffic within 3–6 months. However, factors like competition, domain authority, and content quality all influence the timeline.',
  },
  {
    q: 'Do you work with businesses outside of India?',
    a: 'Yes! We work with global brands across the US, UK, Middle East, and Southeast Asia. Our strategies are tailored to each market\'s search landscape, audience behavior, and competitive dynamics.',
  },
  {
    q: 'How do you measure the success of a campaign?',
    a: 'We track KPIs aligned with your business goals — organic traffic, keyword rankings, ROAS, conversion rates, cost per lead, and more. Clients receive real-time dashboards and monthly growth reports for full transparency.',
  },
  {
    q: 'Can you help with both B2B and B2C marketing?',
    a: 'Absolutely. We have deep experience across both B2B and B2C verticals — from SaaS products and enterprise solutions to ecommerce brands, D2C labels, and local service businesses.',
  },
  {
    q: 'How do I get started with Profito Interactive?',
    a: 'Simply fill out our free consultation form or reach out via phone or email. We\'ll schedule a discovery call to understand your business goals and propose a customised digital strategy at no cost.',
  },
  {
    q: 'What makes Profito Interactive different from other agencies?',
    a: 'We combine 16+ years of experience with AI-driven tools to build data-backed campaigns. Unlike generic agencies, we assign dedicated specialists per channel, provide transparent reporting, and focus obsessively on ROI.',
  },
]

export default function FAQSection() {
  const sectionRef = useRef(null)
  const leftRef    = useRef(null)
  const rightRef   = useRef(null)
  const [openIndex, setOpenIndex] = useState(0)

  useEffect(() => {
    const targets = [sectionRef.current, leftRef.current, rightRef.current].filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target) }
      }),
      { threshold: 0.1 }
    )
    targets.forEach(t => io.observe(t))
    return () => io.disconnect()
  }, [])

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="faq-section" ref={sectionRef} aria-label="Frequently Asked Questions">
      {/* Background decoration */}
      <div className="faq-bg-grid" aria-hidden="true" />
      <div className="faq-orb faq-orb-1" aria-hidden="true" />
      <div className="faq-orb faq-orb-2" aria-hidden="true" />

      <div className="faq-inner">
        {/* ── Left panel ── */}
        <div className="faq-left" ref={leftRef}>
          <span className="faq-badge">
            <span className="faq-badge-dot" aria-hidden="true" />
            FAQs
          </span>

          <h2 className="faq-title">
            Frequently Asked{' '}
            <span className="faq-title-highlight">Questions</span>
          </h2>

          <p className="faq-subtitle">
            We are here to help you with any questions you may have.
          </p>

          <div className="faq-left-ctas">
            <a href="#contact" className="faq-btn-primary">
              Speak to an expert
            </a>
            <a href="#faqs" className="faq-btn-secondary">
              Read more FAQs
            </a>
          </div>

          {/* Decorative floating cards */}
          {/* <div className="faq-left-deco" aria-hidden="true">
            <div className="faq-deco-card">
              <span className="faq-deco-icon">💡</span>
              <span className="faq-deco-text">Expert Advice</span>
            </div>
            <div className="faq-deco-card">
              <span className="faq-deco-icon">🚀</span>
              <span className="faq-deco-text">Fast Results</span>
            </div>
          </div> */}
        </div>

        {/* ── Right panel — accordion ── */}
        <div className="faq-right" ref={rightRef}>
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className={`faq-item${isOpen ? ' faq-item--open' : ''}`}
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <button
                  className="faq-question"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-btn-${i}`}
                >
                  <span className="faq-question-text">{item.q}</span>
                  <span className="faq-icon" aria-hidden="true">
                    <svg
                      className="faq-icon-svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" className="faq-icon-v" />
                      <line x1="5"  y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>

                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  className="faq-answer"
                  style={{ maxHeight: isOpen ? '300px' : '0' }}
                >
                  <p className="faq-answer-text">{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
