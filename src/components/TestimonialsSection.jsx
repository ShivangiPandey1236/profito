import React, { useEffect, useRef, useState, useCallback } from 'react'
import dummyAvatar from '../assets/dummy.jpg'

const TESTIMONIALS = [
  {
    name: 'Sanjiv Nanda',
    role: 'Director, Smarthead Consulting',
    rating: 5,
    text: 'I, Sanjiv Nanda, Director of Smarthead Consulting, wish to record my appreciation and acknowledgment for Mrs. Mansi Rana, Director of Profito Interactive. Her company has given excellent services to our clients in scaling their digital presence remarkably.',
  },
  {
    name: 'Ray Adams',
    role: 'MD, Alliant Web',
    rating: 5,
    text: 'Thank you for a great experience in working on this project to a successful completion. Your pricing matched the value we received. The site is beautiful and functional and has already received response from those looking for our services.',
  },
  {
    name: 'Priya Sharma',
    role: 'CEO, NovaBrand Solutions',
    rating: 5,
    text: 'Working with Profito Interactive has been a game-changer for our brand. Our organic traffic tripled within just 4 months and the quality of leads has improved dramatically. The team is proactive, transparent, and truly invested in our growth.',
  },
  {
    name: 'Ahmed Al-Rashid',
    role: 'Founder, GrowthEdge ME',
    rating: 5,
    text: 'We engaged Profito for a full-stack digital overhaul — SEO, PPC, and content. The results exceeded expectations. Their data-driven approach and clear communication make them stand out from every other agency we have worked with.',
  },
  {
    name: 'Lakshmi Iyer',
    role: 'Marketing Head, TechSpark India',
    rating: 5,
    text: 'The team at Profito Interactive truly understands what it means to deliver ROI. From strategy to execution, every step was handled with precision. We saw a 60% jump in qualified leads within the first quarter. Highly recommended!',
  },
]

const Stars = ({ count = 5 }) => (
  <div className="testimonial-stars" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#e53935" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
)

const VISIBLE = 2 // how many review cards visible at once

export default function TestimonialsSection() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const [current, setCurrent] = useState(0)
  const [animDir, setAnimDir] = useState(null) // 'left' | 'right'
  const [isAnimating, setIsAnimating] = useState(false)
  const total = TESTIMONIALS.length

  // IntersectionObserver for fade-up
  useEffect(() => {
    const targets = [sectionRef.current, headingRef.current].filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target) } }),
      { threshold: 0.1 }
    )
    targets.forEach(t => io.observe(t))
    return () => io.disconnect()
  }, [])

  const slide = useCallback((dir) => {
    if (isAnimating) return
    setAnimDir(dir)
    setIsAnimating(true)
    setTimeout(() => {
      setCurrent(prev =>
        dir === 'right'
          ? (prev + 1) % total
          : (prev - 1 + total) % total
      )
      setAnimDir(null)
      setIsAnimating(false)
    }, 320)
  }, [isAnimating, total])

  // Keyboard nav
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight') slide('right')
      if (e.key === 'ArrowLeft') slide('left')
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [slide])

  // Get visible cards (wrap-around)
  const visibleCards = Array.from({ length: VISIBLE }, (_, i) =>
    TESTIMONIALS[(current + i) % total]
  )

  return (
    <section className="testimonials-section" aria-label="Client testimonials">
      {/* background orbs */}
      <div className="testimonials-orb testimonials-orb-tl" aria-hidden="true" />
      <div className="testimonials-orb testimonials-orb-br" aria-hidden="true" />

      <div className="testimonials-inner" ref={sectionRef}>
        {/* Heading row */}
        <div className="testimonials-heading-block" ref={headingRef}>
          <span className="testimonials-badge">
            <span className="testimonials-badge-dot" aria-hidden="true" />
            Client Reviews
          </span>
          <h2 className="testimonials-title">
            What Our Clients{' '}
            <span className="testimonials-title-highlight">Have To Say</span>
          </h2>
          <p className="testimonials-subtitle">
            We've partnered with more than 16K clients, and we truly value every
            relationship. Here's what they share about our digital marketing services.
          </p>

          {/* Nav buttons — top-right */}
          <div className="testimonials-nav" aria-label="Carousel navigation">
            <button
              className="testimonials-nav-btn"
              onClick={() => slide('left')}
              aria-label="Previous testimonial"
              disabled={isAnimating}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              className="testimonials-nav-btn"
              onClick={() => slide('right')}
              aria-label="Next testimonial"
              disabled={isAnimating}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards row */}
        <div className="testimonials-cards-row">
          {/* CTA card — dark */}
          <div className="testimonials-cta-card">
            <div className="testimonials-cta-quote" aria-hidden="true">"</div>
            <h3 className="testimonials-cta-heading">
              Join us and become our next success story
            </h3>
            <Stars count={5} />
            <a href="#contact" className="testimonials-cta-btn">
              View Verified Reviews
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <div className="testimonials-cta-meta">
              <span className="testimonials-cta-badge-g" aria-label="Clutch">C</span>
              <span className="testimonials-cta-meta-label">600+ reviews</span>
            </div>
          </div>

          {/* Review cards */}
          <div
            className={`testimonials-slides${animDir ? ` slide-${animDir}` : ''}`}
            aria-live="polite"
          >
            {visibleCards.map((t, i) => (
              <article
                className="testimonials-card"
                key={`${current}-${i}`}
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <header className="testimonials-card-header">
                  <img
                    src={dummyAvatar}
                    alt={t.name}
                    className="testimonials-avatar"
                    loading="lazy"
                    draggable="false"
                  />
                  <div className="testimonials-card-meta">
                    <span className="testimonials-card-name">{t.name}</span>
                    <span className="testimonials-card-role">{t.role}</span>
                    <Stars count={t.rating} />
                  </div>
                </header>
                <div className="testimonials-card-divider" />
                <p className="testimonials-card-text">{t.text}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="testimonials-dots" aria-label="Slide indicator" role="tablist">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`testimonials-dot${i === current ? ' active' : ''}`}
              onClick={() => {
                if (!isAnimating) {
                  setAnimDir(i > current ? 'right' : 'left')
                  setIsAnimating(true)
                  setTimeout(() => { setCurrent(i); setAnimDir(null); setIsAnimating(false) }, 320)
                }
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
