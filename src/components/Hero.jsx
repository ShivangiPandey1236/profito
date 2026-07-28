import React, { useEffect, useRef } from 'react'
import { ArrowRight, Star, CheckCircle } from 'lucide-react'
import leftHand from '../assets/left-side.png'
import rightHand from '../assets/right-side.png'

export default function Hero() {
  const canvasRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let animFrame
    let width, height

    // ── Node network ──────────────────────────────────────────
    let nodes = []
    const NODE_COUNT = 55
    const LINK_DIST = 160

    // ── Morphing blobs ────────────────────────────────────────
    const blobs = [
      { cx: 0.15, cy: 0.22, baseR: 0.30, phase: 0, speed: 0.00045, color: [33, 150, 243] },
      { cx: 0.82, cy: 0.60, baseR: 0.26, phase: 2.1, speed: 0.00055, color: [100, 181, 246] },
      { cx: 0.50, cy: 0.90, baseR: 0.22, phase: 4.3, speed: 0.00035, color: [25, 118, 210] },
      { cx: 0.68, cy: 0.10, baseR: 0.18, phase: 1.1, speed: 0.00065, color: [33, 150, 243] },
    ]

    // ── Pulsing rings ─────────────────────────────────────────
    const rings = [
      { cx: 0.18, cy: 0.30, maxR: 180, phase: 0, speed: 0.0008 },
      { cx: 0.80, cy: 0.70, maxR: 150, phase: 2.5, speed: 0.0010 },
      { cx: 0.50, cy: 0.50, maxR: 200, phase: 5.0, speed: 0.0006 },
    ]

    // ── Comets ────────────────────────────────────────────────
    const comets = Array.from({ length: 6 }, (_, i) => ({
      x: Math.random() * 1.2 - 0.1,
      y: Math.random() * 0.8,
      len: 80 + Math.random() * 120,
      speed: 0.00018 + Math.random() * 0.00012,
      alpha: 0.25 + Math.random() * 0.25,
      angle: -0.35 + Math.random() * 0.15,
    }))

    // ── Floating diamonds ─────────────────────────────────────
    const diamonds = Array.from({ length: 12 }, () => ({
      x: Math.random(),
      y: Math.random(),
      s: 4 + Math.random() * 8,
      rot: Math.random() * Math.PI,
      rotSpeed: (Math.random() - 0.5) * 0.008,
      dy: -0.00008 - Math.random() * 0.00006,
      alpha: 0.06 + Math.random() * 0.10,
    }))

    function resize() {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
      createNodes()
    }

    function createNodes() {
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        r: 1.4 + Math.random() * 1.8,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.012 + Math.random() * 0.018,
      }))
    }

    // ── Draw ──────────────────────────────────────────────────
    function drawBackground() {
      const bg = ctx.createLinearGradient(0, 0, width, height)
      bg.addColorStop(0, '#ffffff')
      bg.addColorStop(0.5, '#f4faff')
      bg.addColorStop(1, '#eaf5ff')
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, width, height)
    }

    function drawBlobs(t) {
      blobs.forEach(b => {
        const cx = b.cx * width + Math.sin(t * b.speed) * 60
        const cy = b.cy * height + Math.cos(t * b.speed * 0.7) * 40
        const r = b.baseR * Math.min(width, height) * (0.9 + 0.1 * Math.sin(t * b.speed * 1.3 + b.phase))
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r)
        const [rr, gg, bb] = b.color
        g.addColorStop(0, `rgba(${rr},${gg},${bb},0.07)`)
        g.addColorStop(0.5, `rgba(${rr},${gg},${bb},0.03)`)
        g.addColorStop(1, `rgba(${rr},${gg},${bb},0)`)
        ctx.beginPath()
        ctx.arc(cx, cy, r, 0, Math.PI * 2)
        ctx.fillStyle = g
        ctx.fill()
      })
    }

    function drawGrid(t) {
      const sp = 55
      const ox = (t * 0.018) % sp
      const oy = (t * 0.013) % sp
      ctx.strokeStyle = 'rgba(33,150,243,0.028)'
      ctx.lineWidth = 0.8
      ctx.beginPath()
      for (let x = -sp + ox; x < width + sp; x += sp) {
        ctx.moveTo(x, 0); ctx.lineTo(x, height)
      }
      for (let y = -sp + oy; y < height + sp; y += sp) {
        ctx.moveTo(0, y); ctx.lineTo(width, y)
      }
      ctx.stroke()
    }

    function drawPulsingRings(t) {
      rings.forEach(ring => {
        const progress = (Math.sin(t * ring.speed + ring.phase) + 1) / 2  // 0 → 1
        const r = ring.maxR * progress
        const alpha = 0.18 * (1 - progress)
        ctx.beginPath()
        ctx.arc(ring.cx * width, ring.cy * height, r, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(33,150,243,${alpha})`
        ctx.lineWidth = 1.5
        ctx.stroke()
        // second ring offset
        const r2 = ring.maxR * progress * 0.6
        const alpha2 = 0.10 * (1 - progress)
        ctx.beginPath()
        ctx.arc(ring.cx * width, ring.cy * height, r2, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(100,181,246,${alpha2})`
        ctx.lineWidth = 1
        ctx.stroke()
      })
    }

    function drawNodes(t) {
      // update positions
      nodes.forEach(n => {
        n.pulse += n.pulseSpeed
        n.x += n.dx
        n.y += n.dy
        if (n.x < 0 || n.x > width) n.dx *= -1
        if (n.y < 0 || n.y > height) n.dy *= -1
      })

      // draw links
      ctx.lineWidth = 0.7
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.18
            ctx.strokeStyle = `rgba(33,150,243,${alpha})`
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // draw node dots
      nodes.forEach(n => {
        const glow = 0.5 + 0.5 * Math.sin(n.pulse)
        const alpha = 0.35 + 0.25 * glow
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r * (0.85 + 0.15 * glow), 0, Math.PI * 2)
        ctx.fillStyle = `rgba(33,150,243,${alpha})`
        ctx.fill()
        // subtle glow halo
        const halo = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 5)
        halo.addColorStop(0, `rgba(33,150,243,${0.07 * glow})`)
        halo.addColorStop(1, 'rgba(33,150,243,0)')
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r * 5, 0, Math.PI * 2)
        ctx.fillStyle = halo
        ctx.fill()
      })
    }

    function drawComets(t) {
      comets.forEach(c => {
        c.x += c.speed
        if (c.x > 1.2) c.x = -0.2
        const sx = c.x * width
        const sy = c.y * height + Math.sin(t * 0.0005 + c.x * 10) * 30
        const ex = sx - Math.cos(c.angle) * c.len
        const ey = sy - Math.sin(c.angle) * c.len
        const g = ctx.createLinearGradient(sx, sy, ex, ey)
        g.addColorStop(0, `rgba(33,150,243,${c.alpha})`)
        g.addColorStop(0.4, `rgba(100,181,246,${c.alpha * 0.4})`)
        g.addColorStop(1, 'rgba(33,150,243,0)')
        ctx.strokeStyle = g
        ctx.lineWidth = 1.5
        ctx.lineCap = 'round'
        ctx.beginPath()
        ctx.moveTo(sx, sy)
        ctx.lineTo(ex, ey)
        ctx.stroke()
        // bright head
        ctx.beginPath()
        ctx.arc(sx, sy, 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(33,150,243,${c.alpha * 1.2})`
        ctx.fill()
      })
    }

    function drawDiamonds(t) {
      diamonds.forEach(d => {
        d.y += d.dy
        d.rot += d.rotSpeed
        if (d.y < -0.05) d.y = 1.05
        const x = d.x * width
        const y = d.y * height + Math.sin(t * 0.0004 + d.x * 8) * 12
        ctx.save()
        ctx.translate(x, y)
        ctx.rotate(d.rot)
        ctx.strokeStyle = `rgba(33,150,243,${d.alpha})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(0, -d.s)
        ctx.lineTo(d.s * 0.6, 0)
        ctx.lineTo(0, d.s)
        ctx.lineTo(-d.s * 0.6, 0)
        ctx.closePath()
        ctx.stroke()
        ctx.restore()
      })
    }

    function tick(t) {
      ctx.clearRect(0, 0, width, height)
      drawBackground()
      drawGrid(t)
      drawBlobs(t)
      drawPulsingRings(t)
      drawComets(t)
      drawNodes(t)
      drawDiamonds(t)
      animFrame = requestAnimationFrame(tick)
    }

    resize()
    animFrame = requestAnimationFrame(tick)

    const ro = new ResizeObserver(() => resize())
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
    {
      highlight: '15%',
      title: 'HIGHER QUALIFIED LEAD GROWTH',
      subtext: 'For clients who connect their data',
    },
    {
      highlight: '94K',
      title: 'CLIENT MENTIONS IN AI SOURCES',
      subtext: 'AI Visibility Trackable in RevenueCloudFX',
    },
    {
      highlight: '#1 RATED',
      title: 'AGENCY ON CLUTCH & G2',
      subtext: 'Verified from 700+ third-party reviews',
    },
    {
      highlight: '30',
      title: 'YEARS OF PROVEN RESULTS',
      subtext: 'Driving measurable ROI for clients',
    },
  ]

  const tags = [
 
    'SEO Services',
    'PPC Management',
    'Social Media Marketing',
    'Web Development',
   
  ]

  return (
    <section className="hero-section">
      {/* Animated Canvas Background */}
      <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />

      {/* Left Hand — Human (commented out) */}
      <img
        src={leftHand}
        alt=""
        aria-hidden="true"
        className="hero-hand hero-hand-left"
      />

      {/* Right Hand — Robot / AI (commented out) */}
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
          Grow Faster with
<br></br>{' '}
          <span className="hero-title-highlight">
           AI-Powered Marketing
          </span>
        </h1>

        {/* Subheading */}
        <p className="hero-subtitle">
          Profito Interactive delivers ROI-driven digital marketing solutions that boost visibility, traffic, and business growth.
        </p>

        {/* Tag Pills */}
        <div className="hero-tags">
          {tags.map((tag, i) => (
            <span key={i} className="hero-tag" style={{ animationDelay: `${0.5 + i * 0.07}s` }}>{tag}</span>
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
              <Star key={i} size={14} fill="#2196F3" stroke="none" />
            ))}
            <span className="hero-trust-label">4.9 / 5 on Google</span>
          </div>
          <span className="hero-trust-divider" />
          <div className="hero-trust-checks">
            {['No Long-term Contracts', 'Dedicated Account Manager', 'Proven ROI'].map((item, i) => (
              <span key={i} className="hero-trust-check" style={{ animationDelay: `${0.7 + i * 0.1}s` }}>
                <CheckCircle size={13} />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div ref={statsRef} className="hero-stats is-visible">
          {stats.map((s, i) => (
            <div key={i} className="hero-stat" style={{ animationDelay: `${i * 0.12}s` }}>
              <div className="hero-stat-title">
                <span className="hero-stat-highlight">{s.highlight}</span>{' '}
                {s.title}
              </div>
              <div className="hero-stat-subtext">{s.subtext}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="hero-bottom-fade" />
    </section>
  )
}
