import React, { useEffect, useRef } from 'react'
import { TrendingUp, Target, Share2, Eye } from 'lucide-react'

const cards = [
  {
    icon: TrendingUp,
    category: 'Boosting Revenue',
    value: '2X to 6X',
    desc: 'Proven growth results',
    accent: 'amber',
  },
  {
    icon: Target,
    category: 'Improved Leads',
    value: '3X to 8X',
    desc: 'Quality lead generation',
    accent: 'blue',
  },
  {
    icon: Share2,
    category: 'Social Media Engagement',
    value: '4X to 8X',
    desc: 'Enhanced audience reach',
    accent: 'amber',
  },
  {
    icon: Eye,
    category: 'Brand Exposure',
    value: '100 to 1000%',
    desc: 'Massive visibility boost',
    accent: 'blue',
  },
]

export default function ResultsStrip() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const cards = section.querySelectorAll('.rs-card')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cards.forEach((card, i) => {
              // stagger each card by 120ms
              setTimeout(() => card.classList.add('rs-card--visible'), i * 120)
            })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.15 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="rs-section" aria-label="Results we deliver">
      <div className="rs-inner">
        {cards.map(({ icon: Icon, category, value, desc, accent }, i) => (
          <div key={i} className={`rs-card rs-card--${accent}`}>
            {/* Divider between cards */}
            {i > 0 && <span className="rs-divider" aria-hidden="true" />}

            <div className="rs-card-body">
              {/* Icon badge */}
              <span className={`rs-icon rs-icon--${accent}`}>
                <Icon size={20} strokeWidth={2.2} />
              </span>

              {/* Category */}
              <p className="rs-category">{category}</p>

              {/* Big value */}
              <p className={`rs-value rs-value--${accent}`}>{value}</p>

              {/* Description */}
              <p className="rs-desc">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
