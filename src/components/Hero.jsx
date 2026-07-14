import React, { useEffect, useRef } from 'react'
import { ArrowRight, Star, CheckCircle } from 'lucide-react'
import leftHand from '../assets/left-h.png'
import rightHand from '../assets/right-h.png'

export default function Hero() {
  const canvasRef = useRef(null)
  const statsRef  = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let animFrame
    let particles = []
    let width, height

    function resize() {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }

    function createParticles() {
      particles = []
      const count = Math.floor((width * height) / 14000)
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 1.8 + 0.3,
          dx: (Math.random() - 0.5) * 0.3,
          dy: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.5 + 0.15,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.005,
        })
      }
    }

    function drawOrbs(t) {
      // Very subtle blue radial tints on white canvas
      const orbs = [
        { x: width * 0.12, y: height * 0.25, r: width * 0.38, color: 'rgba(18,162,240,0.05)', dx: Math.sin(t * 0.0005) * 40, dy: Math.cos(t * 0.0007) * 30 },
        { x: width * 0.85, y: height * 0.55, r: width * 0.32, color: 'rgba(18,162,240,0.04)', dx: Math.cos(t * 0.0006) * 35, dy: Math.sin(t * 0.0005) * 25 },
        { x: width * 0.5,  y: height * 0.85, r: width * 0.28, color: 'rgba(62,187,255,0.03)', dx: Math.sin(t * 0.0004) * 20, dy: Math.cos(t * 0.0008) * 15 },
      ]
      orbs.forEach(orb => {
        const grad = ctx.createRadialGradient(
          orb.x + orb.dx, orb.y + orb.dy, 0,
          orb.x + orb.dx, orb.y + orb.dy, orb.r
        )
        grad.addColorStop(0, orb.color)
        grad.addColorStop(1, 'rgba(255,255,255,0)')
        ctx.beginPath()
        ctx.arc(orb.x + orb.dx, orb.y + orb.dy, orb.r, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
      })
    }

    function drawGrid(t) {
      const spacing = 60
      const offsetX = (t * 0.02) % spacing
      const offsetY = (t * 0.015) % spacing
      ctx.strokeStyle = 'rgba(18,162,240,0.025)'
      ctx.lineWidth = 1
      ctx.beginPath()
      for (let x = -spacing + offsetX; x < width + spacing; x += spacing) {
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
      }
      for (let y = -spacing + offsetY; y < height + spacing; y += spacing) {
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
      }
      ctx.stroke()
    }

    function tick(t) {
      ctx.clearRect(0, 0, width, height)

      // White background with very faint primary-blue diagonal tint
      const bg = ctx.createLinearGradient(0, 0, width, height)
      bg.addColorStop(0, '#ffffff')
      bg.addColorStop(0.5, '#f6fbff')
      bg.addColorStop(1, '#ffffff')
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, width, height)

      drawGrid(t)
      drawOrbs(t)

      // Particles — tiny faint blue dots
      particles.forEach(p => {
        p.pulse += p.pulseSpeed
        const alpha = p.opacity * 0.15 * (0.5 + 0.5 * Math.sin(p.pulse))
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(18,162,240,${alpha})`
        ctx.fill()
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0
      })

      animFrame = requestAnimationFrame(tick)
    }

    resize()
    createParticles()
    animFrame = requestAnimationFrame(tick)

    const ro = new ResizeObserver(() => {
      resize()
      createParticles()
    })
    ro.observe(canvas)

    // ---- Scroll-triggered entrance for stats grid ----
    const statsEl = statsRef.current
    let statsObserver
    if (statsEl) {
      statsObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            statsEl.classList.add('is-visible')
            statsObserver.disconnect()
          }
        },
        { threshold: 0.2 }
      )
      statsObserver.observe(statsEl)
    }

    return () => {
      cancelAnimationFrame(animFrame)
      ro.disconnect()
      if (statsObserver) statsObserver.disconnect()
    }
  }, [])

  const stats = [
    { value: '16K+', label: 'Happy Clients' },
    { value: '15+', label: 'Years Experience' },
    { value: '98%', label: 'Client Retention' },
    { value: '4.9★', label: 'Google Rating' },
  ]

  const tags = [
    'AI Search Optimization',
    'SEO Services',
    'PPC Management',
    'Social Media Marketing',
    'Web Development',
    'AI Automation',
  ]

  return (
    <section className="hero-section">
      {/* Animated Canvas Background */}
      <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />

      {/* Left Hand — Human */}
      <img
        src={leftHand}
        alt=""
        aria-hidden="true"
        className="hero-hand hero-hand-left"
      />

      {/* Right Hand — Robot / AI */}
      <img
        src={rightHand}
        alt=""
        aria-hidden="true"
        className="hero-hand hero-hand-right"
      />

      {/* Content */}
      <div className="hero-inner">
        {/* Badge */}
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          <span>India's #1 AI-Enabled Digital Marketing Agency</span>
        </div>

        {/* Heading */}
        <h1 className="hero-title">
          AI-Enabled<br></br>{' '}
          <span className="hero-title-highlight">
          Digital Marketing Agency
          </span>
        </h1>

        {/* Subheading */}
        <p className="hero-subtitle">
        Profito Interactive delivers ROI-driven digital marketing solutions that boost visibility, traffic, and business growth.
        </p>

        {/* Tag Pills */}
        <div className="hero-tags">
          {tags.map((tag, i) => (
            <span key={i} className="hero-tag">{tag}</span>
          ))}
        </div>

        {/* CTAs */}
        <div className="hero-ctas">
          <a href="#proposal" className="hero-btn-primary" id="hero-cta-proposal">
            Get a Free Proposal
            <ArrowRight size={17} className="hero-btn-arrow" />
          </a>
          <a href="#strategy" className="hero-btn-secondary" id="hero-cta-strategy">
            Get Your Free AI Growth Strategy
          </a>
        </div>

        {/* Trust Row */}
        <div className="hero-trust">
          <div className="hero-trust-stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="#12a2f0
" stroke="none" />
            ))}
            <span className="hero-trust-label">4.9 / 5 on Google</span>
          </div>
          <span className="hero-trust-divider" />
          <div className="hero-trust-checks">
            {['No Long-term Contracts', 'Dedicated Account Manager', 'Proven ROI'].map((item, i) => (
              <span key={i} className="hero-trust-check">
                <CheckCircle size={13} />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div ref={statsRef} className="hero-stats">
          {stats.map((s, i) => (
            <div key={i} className="hero-stat">
              <div className="hero-stat-value">{s.value}</div>
              <div className="hero-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="hero-bottom-fade" />
    </section>
  )
}
