import React, { useEffect, useRef, useState } from 'react'

// Lightweight CountUp component for count-up animation when visible
function CountUp({ end, duration = 1500, decimals = 0, suffix = "" }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const current = elementRef.current
    if (!current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return

    let startTime = null
    const startValue = 0

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      // Easing out quad: f(t) = t * (2 - t)
      const easeProgress = progress * (2 - progress)
      
      const currentValue = startValue + easeProgress * (end - startValue)
      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [started, end, duration])

  return (
    <span ref={elementRef}>
      {decimals > 0 ? count.toFixed(decimals) : Math.round(count)}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  const badgeRef = useRef(null)
  const headingRef = useRef(null)
  const itemsRef = useRef([])

  useEffect(() => {
    const elements = [badgeRef.current, headingRef.current, ...itemsRef.current].filter(Boolean)

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

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      value: 9.4,
      decimals: 1,
      suffix: "X",
      label: "Average ROAS across all paid campaigns",
      featured: false
    },
    {
      value: 162,
      decimals: 0,
      suffix: "%",
      label: "Year-over-Year Growth in Online Revenue",
      featured: true
    },
    {
      value: 127,
      decimals: 0,
      suffix: "%",
      label: "Growth in High-Intent MQLs (Marketing Qualified Leads)",
      featured: false
    }
  ]

  return (
    <section className="stats-section" id="stats">
      <div className="stats-container">
        
        {/* Badge */}
        <div className="stats-badge-wrapper" ref={badgeRef}>
          <div className="stats-badge">
            <span className="stats-badge-dot" />
            <span>Numbers That Prove Our Impact</span>
          </div>
        </div>

        {/* Heading & Subheading */}
        <div className="stats-heading-block" ref={headingRef}>
          <h2 className="stats-title">
            Stats That Define{' '}
            <span className="stats-title-highlight">Profito</span>
          </h2>
          <p className="stats-subtitle">Data-Driven Results That Speak For Themselves</p>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`stat-item ${stat.featured ? 'stat-item-featured' : ''}`}
              ref={(el) => (itemsRef.current[i] = el)}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="stat-number">
                <CountUp end={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
              </div>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
