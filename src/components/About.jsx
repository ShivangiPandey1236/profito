import React, { useEffect, useRef } from 'react'
import { CheckCircle, ChevronDown } from 'lucide-react'
import agencyImg from '../assets/profito-about-us.png'

const bullets = [
  'AI-Driven, Performance-Focused Marketing',
  'Full-Funnel Digital Solutions for Higher ROI',
  'Personalized, Multi-Platform Growth Strategies',
]

export default function About() {
  const badgeRef    = useRef(null)
  const textRef     = useRef(null)
  const ctaRef      = useRef(null)
  const imageRef    = useRef(null)

  useEffect(() => {
    const targets = [badgeRef.current, textRef.current, imageRef.current, ctaRef.current].filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="about-section" id="about">
      <div className="about-inner">

        {/* ── Left column ── */}
        <div className="about-content" ref={textRef}>

          {/* Badge */}
          <div className="about-badge" ref={badgeRef}>
            <span className="about-badge-dot" />
            <span>About Us</span>
          </div>

          {/* Heading */}
          <h2 className="about-title">
            <span className="about-title-accent">Best Digital Marketing</span>{' '}
            <span className="about-title-highlight">Agency in India</span>
            {' – '}Driving Results and Growth
          </h2>

          {/* Intro paragraph */}
          <p className="about-para">
            Profito Interactive, known as the best digital marketing agency in India, delivers measurable outcomes through data-driven strategies. With full-funnel digital marketing audits, we help you find growth gaps and key opportunities to maximise conversions across all touchpoints.
          </p>

          {/* Strategic approach */}
          <p className="about-subheading">Our Strategic Approach Includes:</p>

          <ul className="about-bullets">
            {bullets.map((b, i) => (
              <li
                key={i}
                className="about-bullet"
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                <CheckCircle size={18} className="about-bullet-icon" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {/* Closing paragraph */}
          <p className="about-para">
            Together, these approaches create a powerful framework for long-term success. Our best digital marketing services combine deep insights and proven methodologies to guide your brand toward the right audience, better visibility, and stronger business performance.
          </p>
        </div>

        {/* ── Right column — Image ── */}
        <div className="about-image-wrap" ref={imageRef}>
          <img
            src={agencyImg}
            alt="Best Digital Marketing Agency in India — full-funnel growth strategy"
            className="about-image"
          />
          {/* decorative blur orb */}
          <div className="about-image-orb" />
        </div>

      </div>

      {/* ── Bottom-center CTA ── */}
      <div className="about-cta-wrap" ref={ctaRef}>
        <a href="#contact" className="about-btn-primary" id="about-cta-btn">
          Explore How We Drive Growth
          <ChevronDown size={18} className="about-btn-arrow" />
        </a>
      </div>
    </section>
  )
}
