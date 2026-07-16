import React, { useEffect, useRef } from 'react'
import ppcImg  from '../assets/ppc.png'
import ppc2Img from '../assets/ppc2.png'

const ARTICLES = [
  {
    category: 'PPC GUIDE',
    title: 'Complete Guide to Pay-Per-Click Advertising',
    excerpt: 'Everything you need to know about PPC — from campaign structure and bidding strategies to ad copy and landing page optimisation for maximum ROAS.',
    img: ppcImg,
    type: 'external',   // ↓ download icon
  },
  {
    category: 'CLOUD TECH',
    title: 'Top 10 Cloud Server Providers in India in 2025',
    excerpt: 'An in-depth comparison of India\'s leading cloud platforms — performance benchmarks, pricing models, SLA guarantees, and which fits your business best.',
    img: ppc2Img,
    type: 'external',
  },
  {
    category: 'DIGITAL MARKETING',
    title: 'How AI Is Reshaping SEO Strategy in 2025',
    excerpt: 'From AI Overviews to generative search, discover how search is evolving and the strategies top brands are using to stay on top of SERPs.',
    img: ppcImg,
    type: 'external',  // ↗ arrow icon
  },
]

const FEATURED = {
  category: 'RESOURCE',
  title: 'The Ultimate Digital Marketing Playbook for Indian Brands',
  excerpt: 'A comprehensive guide covering SEO, PPC, social media, and AI automation strategies tailored specifically for the Indian market landscape.',
  img: ppc2Img,
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 5v14M5 12l7 7 7-7"/>
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17L17 7M7 7h10v10"/>
    </svg>
  )
}

export default function ResourceHub() {
  const innerRef   = useRef(null)
  const leftRef    = useRef(null)
  const rightRef   = useRef(null)

  useEffect(() => {
    const targets = [innerRef.current, leftRef.current, rightRef.current].filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target) }
      }),
      { threshold: 0, rootMargin: '0px 0px -40px 0px' }
    )
    targets.forEach(t => io.observe(t))
    return () => io.disconnect()
  }, [])

  return (
    <section className="resource-hub-section" aria-label="Resource Hub">
      {/* Background decoration */}
      <div className="resource-hub-bg" aria-hidden="true" />

      <div className="resource-hub-inner" ref={innerRef}>
        {/* ── Top bar ── */}
        <div className="resource-hub-topbar">
          <div className="resource-hub-heading-wrap">
            <span className="resource-hub-badge">
              <span className="resource-hub-badge-dot" aria-hidden="true" />
              Knowledge Base
            </span>
            <h2 className="resource-hub-title">
              Resource <span className="resource-hub-title-highlight">Hub</span>
            </h2>
          </div>
          <a href="#resources" className="resource-hub-viewall">
            View All
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        {/* ── Two-column grid ── */}
        <div className="resource-hub-grid">

          {/* ── Left — article list ── */}
          <div className="resource-hub-list" ref={leftRef}>
            {ARTICLES.map((article, i) => (
              <article
                key={i}
                className="resource-article"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="resource-article-thumb-wrap">
                  <img
                    src={article.img}
                    alt={article.title}
                    className="resource-article-thumb"
                    loading="lazy"
                    draggable="false"
                  />
                </div>

                <div className="resource-article-body">
                  <span className="resource-article-category">{article.category}</span>
                  <h3 className="resource-article-title">{article.title}</h3>
                  <p className="resource-article-excerpt">{article.excerpt}</p>
                </div>

                <button
                  className="resource-article-btn"
                  aria-label={article.type === 'download' ? `Download ${article.title}` : `Read ${article.title}`}
                >
                  {article.type === 'download' ? <DownloadIcon /> : <ArrowIcon />}
                </button>
              </article>
            ))}
          </div>

          {/* ── Right — featured card ── */}
          <div className="resource-featured" ref={rightRef}>
            <div className="resource-featured-img-wrap">
              <img
                src={FEATURED.img}
                alt={FEATURED.title}
                className="resource-featured-img"
                loading="lazy"
                draggable="false"
              />
              {/* Blue primary gradient overlay */}
              <div className="resource-featured-overlay" aria-hidden="true" />
            </div>

            <div className="resource-featured-card">
              <span className="resource-featured-category">{FEATURED.category}</span>
              <h3 className="resource-featured-title">{FEATURED.title}</h3>
              <p className="resource-featured-excerpt">{FEATURED.excerpt}</p>
              <a href="#download" className="resource-featured-btn">
               Read more
                <DownloadIcon />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
