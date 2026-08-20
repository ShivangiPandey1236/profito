import React, { useEffect, useRef } from 'react'

// Client logos from assets directory
import AJLogo from '../assets/AJ-logo.jpg'
import BPLogo from '../assets/BP-logo.jpg'
import IBCMELogo from '../assets/IBCME-logo.jpg'
import LeafyLogo from '../assets/Leafy-logo.jpg'
import IbraLogo from '../assets/ibra-logo.jpg'
import IndiaTVLogo from '../assets/indiatv-logo.jpg'
import LogoPR from '../assets/logo-pr (1).png'
import ProboLogo from '../assets/probo-logo.png'
import UthoLogo from '../assets/utho-logo.png'
import ZopperLogo from '../assets/zopper-logo1.png'
import ImmigrationLogo from '../assets/immigration.jpg'
import TauLogo from '../assets/tau.jpg'

const ALL_CLIENTS = [
  { src: AJLogo,        alt: 'AJ',          name: 'AJ' },
  { src: BPLogo,        alt: 'BP',          name: 'BP' },
  { src: IBCMELogo,     alt: 'IBCME',       name: 'IBCME' },
  { src: LeafyLogo,     alt: 'Leafy',       name: 'Leafy' },
  { src: IbraLogo,      alt: 'Ibra',        name: 'Ibra' },
  { src: IndiaTVLogo,   alt: 'India TV',    name: 'India TV' },
  { src: LogoPR,        alt: 'PR',          name: 'PR' },
  { src: ProboLogo,     alt: 'Probo',       name: 'Probo' },
  { src: UthoLogo,      alt: 'Utho',        name: 'Utho' },
  { src: ZopperLogo,    alt: 'Zopper',      name: 'Zopper' },
  { src: ImmigrationLogo, alt: 'Immigration', name: 'Immigration' },
  { src: TauLogo,       alt: 'Tau',         name: 'Tau' },
]

// Split clients into two rows
const ROW_1 = ALL_CLIENTS.slice(0, 6)
const ROW_2 = ALL_CLIENTS.slice(6, 12)

export default function ClientsSection() {
  const sectionRef  = useRef(null)
  const headingRef  = useRef(null)

  useEffect(() => {
    const targets = [sectionRef.current, headingRef.current].filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    targets.forEach(t => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="clients-section" aria-label="Trusted by global brands">
      {/* Subtle top accent line */}
      <div className="clients-accent-line" aria-hidden="true" />

      <div className="clients-inner" ref={sectionRef}>
        {/* Heading */}
        <div className="clients-heading-block" ref={headingRef}>
          <span className="clients-badge">
            <span className="clients-badge-dot" aria-hidden="true" />
            Our Valued Partners
          </span>
          <h2 className="clients-title">
            Trusted by <span className="clients-title-highlight">Global Brands & Leaders</span>
          </h2>
          <p className="clients-subtitle">
            As a leading digital growth and technology agency, Profito partners with industry leaders worldwide to engineer high-impact results.
          </p>
        </div>

        {/* Marquee wrapper */}
        <div className="clients-marquee-wrap" aria-hidden="true">
          {/* Row 1 — scrolls left */}
          <div className="clients-track clients-track--left">
            <div className="clients-strip">
              {[...ROW_1, ...ROW_1, ...ROW_1].map((client, i) => (
                <div className="clients-logo-card" key={`r1-${i}`}>
                  <img
                    src={client.src}
                    alt={client.alt}
                    className="clients-logo-img"
                    loading="lazy"
                    draggable="false"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 — scrolls right */}
          <div className="clients-track clients-track--right">
            <div className="clients-strip">
              {[...ROW_2, ...ROW_2, ...ROW_2].map((client, i) => (
                <div className="clients-logo-card" key={`r2-${i}`}>
                  <img
                    src={client.src}
                    alt={client.alt}
                    className="clients-logo-img"
                    loading="lazy"
                    draggable="false"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stat row */}
        {/* <div className="clients-stats-row">
          {[
            { value: '500+', label: 'Global Clients' },
            { value: '16+',  label: 'Years of Trust' },
            { value: '98%',  label: 'Retention Rate' },
          ].map((s, i) => (
            <div className="clients-stat" key={i}>
              <span className="clients-stat-value">{s.value}</span>
              <span className="clients-stat-label">{s.label}</span>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}
