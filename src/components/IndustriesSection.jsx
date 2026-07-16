import React, { useEffect, useRef } from 'react'

const INDUSTRIES = [
  { emoji: '🛒', label: 'Ecommerce' },
  { emoji: '🏠', label: 'Real Estate' },
  { emoji: '🏥', label: 'Healthcare' },
  { emoji: '👗', label: 'Fashion & Apparel' },
  { emoji: '💎', label: 'Jewelry & Luxury Brands' },
  { emoji: '🚗', label: 'Automotive' },
  { emoji: '🏢', label: 'B2B Brand' },
  { emoji: '🔧', label: 'Home Services' },
  { emoji: '📦', label: 'Consumer Goods' },
  { emoji: '🎓', label: 'Education & EdTech' },
  { emoji: '⚙️', label: 'Manufacturing' },
  { emoji: '🛍️', label: 'D2C Brands' },
  { emoji: '💻', label: 'SaaS & Technology' },
  { emoji: '🍽️', label: 'Food & Beverage' },
  { emoji: '💰', label: 'Finance' },
]

export default function IndustriesSection() {
  const headingRef = useRef(null)
  const gridRef    = useRef(null)

  useEffect(() => {
    const targets = [headingRef.current, gridRef.current].filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="industries-section" aria-label="Industries we serve">
      {/* Subtle background grid pattern */}
      <div className="industries-bg-pattern" aria-hidden="true" />

      <div className="industries-inner">
        {/* Heading */}
        <div className="industries-heading-block" ref={headingRef}>
          <span className="industries-badge">
            <span className="industries-badge-dot" aria-hidden="true" />
            Industries We Serve
          </span>
          <h2 className="industries-title">
            Industry-Focused{' '}
            <span className="industries-title-highlight">Digital Expertise</span>
          </h2>
          <p className="industries-subtitle">
            We understand the unique challenges businesses face across industries. Using data,
            market insights, and user behavior, we build campaigns that increase visibility,
            attract high-quality leads, and accelerate digital growth.
          </p>
        </div>

        {/* Pill grid */}
        <div className="industries-grid" ref={gridRef}>
          {INDUSTRIES.map((industry, i) => (
            <div
              className="industry-pill"
              key={i}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <span className="industry-pill-emoji" aria-hidden="true">
                {industry.emoji}
              </span>
              <span className="industry-pill-label">{industry.label}</span>
            </div>
          ))}
        </div>

        {/* Bottom CTA nudge */}
        <div className="industries-cta-row">
          <span className="industries-cta-text">
            Don't see your industry?
          </span>
          <a href="#contact" className="industries-cta-link">
            Let's talk
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
