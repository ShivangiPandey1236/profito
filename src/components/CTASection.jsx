import React, { useEffect, useRef, useState } from 'react'

const TRUST_ITEMS = [
  { emoji: '⭐', label: '16000+ Happy Clients' },
  { emoji: '🏆', label: 'Award Winning Agency' },
  { emoji: '🚀', label: '16+ Years Experience' },
]

export default function CTASection() {
  const sectionRef = useRef(null)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    e.target.reset()
  }

  return (
    <section className="cta-section">
      {/* Background glow orbs */}
      <div className="cta-orb cta-orb-left" aria-hidden="true" />
      <div className="cta-orb cta-orb-right" aria-hidden="true" />

      <div className="cta-inner" ref={sectionRef}>
        {/* Heading block */}
        <div className="cta-heading-block">
          <h2 className="cta-title">
            Let's Grow {' '}
            <span className="cta-title-highlight">Your Brand with AI</span>
          </h2>
          <p className="cta-subtitle">
           Let's grow your business together.
          </p>
        </div>

        {/* Form */}
        <form className="cta-form" onSubmit={handleSubmit} noValidate>
          <div className="cta-form-fields">
            <input
              id="cta-name"
              className="cta-input"
              type="text"
              placeholder="Your Name"
              required
              autoComplete="name"
            />
            <input
              id="cta-email"
              className="cta-input"
              type="email"
              placeholder="Email Address"
              required
              autoComplete="email"
            />
            <input
              id="cta-phone"
              className="cta-input"
              type="tel"
              placeholder="Phone Number"
              autoComplete="tel"
            />
            <input
              id="cta-website"
              className="cta-input"
              type="url"
              placeholder="Website (Optional)"
              autoComplete="url"
            />
          </div>
          <button id="cta-submit" className="cta-btn" type="submit">
            {submitted ? (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                Sent!
              </>
            ) : (
              'SUBMIT'
            )}
          </button>
        </form>

        {/* Trust badges */}
        <div className="cta-trust">
          {TRUST_ITEMS.map((item, i) => (
            <div className="cta-trust-item" key={i} style={{ animationDelay: `${0.1 + i * 0.12}s` }}>
              <span className="cta-trust-emoji" aria-hidden="true">{item.emoji}</span>
              <span className="cta-trust-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
