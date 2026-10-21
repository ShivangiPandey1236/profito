import React, { useState, useRef, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import {
  BLOG_CATEGORIES,
  BLOG_SOCIAL_LINKS,
  BLOG_CATEGORY_CARDS,
} from '../data/blogPageData'
import LatestUpdates from './LatestUpdates'
import CTASection from '../components/CTASection'
import digitalMarketingImage from '../assets/digital-marketing.png'
import seoImage from '../assets/seo-rankings.png'
import uiUxImage from '../assets/uiandux.png'
import webDevelopmentImage from '../assets/web-development.png'
import aiTechImage from '../assets/ai-and-tech.png'
import businessGrowthImage from '../assets/business-growth.png'
import ppcAdsImage from '../assets/ppc-add.png'
import socialMediaImage from '../assets/social-media.png'
import {
  Home,
  Search,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react'

// Images stored in public/ are referenced by URL. The digital-marketing image
// is stored in src/assets, so it is imported directly above.
const CATEGORY_IMAGES = {
  'cloud-education': '/images/blog-categories/cloud-education.png',
  'cloud-gpu': '/images/blog-categories/cloud-gpu.png',
  community: '/images/blog-categories/community.png',
  engineering: '/images/blog-categories/engineering.png',
  'digital-marketing': digitalMarketingImage,
  'seo-rankings': seoImage,
  'ui-ux-design': uiUxImage,
  'web-development': webDevelopmentImage,
  'ai-and-tech': aiTechImage,
  'ai-and-tech': aiTechImage,
  'ai-technology': aiTechImage,
  'business-growth': businessGrowthImage,
  'ppc-ads': ppcAdsImage,
  'social-media': socialMediaImage,
  'product-updates': '/images/blog-categories/product-updates.png',
  products: '/images/blog-categories/products.png',
}

const normalizeCategoryKey = (value) =>
  String(value || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

const getCategoryImage = (card) => {
  // Check slug, id and title so the Digital Marketing image still matches
  // even if the category's id is different from its display title.
  const keys = [card.slug, card.id, card.title].map(normalizeCategoryKey)

  if (keys.some((key) => key === 'digital-marketing' || key.includes('digital-marketing'))) {
    return digitalMarketingImage
  }

  const matchedKey = keys.find((key) => CATEGORY_IMAGES[key])

  return (
    card.image ||
    card.imageUrl ||
    CATEGORY_IMAGES[matchedKey] ||
    CATEGORY_IMAGES.products
  )
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const tabsRef = useRef(null)
  const carouselRef = useRef(null)

  useEffect(() => {
    document.body.classList.add('blog-page')
    return () => document.body.classList.remove('blog-page')
  }, [])

  const updateScrollState = useCallback(() => {
    const el = carouselRef.current
    if (!el) return

    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
  }, [])

  useEffect(() => {
    const el = carouselRef.current
    if (!el) return

    el.addEventListener('scroll', updateScrollState, { passive: true })
    updateScrollState()

    const resizeObserver = new ResizeObserver(updateScrollState)
    resizeObserver.observe(el)

    return () => {
      el.removeEventListener('scroll', updateScrollState)
      resizeObserver.disconnect()
    }
  }, [updateScrollState])

  const scrollTabs = (dir) => {
    tabsRef.current?.scrollBy({
      left: dir * 200,
      behavior: 'smooth',
    })
  }

  const scrollCarousel = (dir) => {
    carouselRef.current?.scrollBy({
      left: dir * 320,
      behavior: 'smooth',
    })
  }

  const handleSearch = (event) => {
    event.preventDefault()
    const query = searchQuery.trim()
    if (!query) return

    // Keep the search term available for the blog listing/search integration.
    document.getElementById('blog-hero-search')?.blur()
  }

  return (
    <div>
      {/* BLOG CATEGORY NAVIGATION */}
      <section className="blog-category-bar">
        <div className="blog-category-bar-inner">
          <Link
            to="/"
            id="blog-cat-home"
            className="blog-cat-home-btn"
            aria-label="Go to homepage"
          >
            <Home className="h-4 w-4" strokeWidth={2.2} />
          </Link>

          <button
            type="button"
            className="blog-cat-scroll-btn blog-cat-scroll-left"
            onClick={() => scrollTabs(-1)}
            aria-label="Scroll categories left"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={2.5} />
          </button>

          <div className="blog-cat-tabs-wrap" ref={tabsRef}>
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                id={`blog-cat-${cat.id}`}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`blog-cat-tab ${
                  activeCategory === cat.id
                    ? 'blog-cat-tab-active'
                    : 'blog-cat-tab-inactive'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="blog-cat-scroll-btn blog-cat-scroll-right"
            onClick={() => scrollTabs(1)}
            aria-label="Scroll categories right"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
          </button>

          <div className="blog-cat-right">
            <span className="blog-cat-divider" aria-hidden="true" />

            <div className="blog-cat-social">
              {BLOG_SOCIAL_LINKS.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  id={`blog-social-${social.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-cat-social-link"
                  aria-label={social.label}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d={social.svgPath} />
                  </svg>
                </a>
              ))}
            </div>

            <button
              type="button"
              className={`blog-cat-search-btn ${
                searchOpen ? 'blog-cat-search-btn-active' : ''
              }`}
              onClick={() => setSearchOpen((open) => !open)}
              aria-label="Toggle search"
              aria-expanded={searchOpen}
              id="blog-search-toggle"
            >
              <Search className="h-4 w-4" strokeWidth={2.2} />
            </button>
          </div>
        </div>

        <div
          className={`blog-search-bar-wrap ${
            searchOpen ? 'blog-search-bar-open' : ''
          }`}
        >
          <form className="blog-search-bar-inner" onSubmit={handleSearch}>
            <Search
              className="h-4 w-4 shrink-0 text-[#2196F3]"
              strokeWidth={2.2}
            />
            <input
              type="search"
              placeholder="Search articles, topics, keywords…"
              className="blog-search-input"
              id="blog-search-input"
              aria-label="Search articles"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
            <button
              type="button"
              className="blog-search-close"
              onClick={() => setSearchOpen(false)}
              aria-label="Close search"
            >
              ✕
            </button>
          </form>
        </div>
      </section>

      {/* BLOG HERO */}
      <section className="blog-hero-section">
        <div className="blog-hero-blob blog-hero-blob-tl" aria-hidden="true" />
        <div className="blog-hero-blob blog-hero-blob-tr" aria-hidden="true" />
        <div className="blog-hero-blob blog-hero-blob-br" aria-hidden="true" />

        <div className="blog-hero-inner mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <div className="blog-hero-badge">
            <Sparkles className="h-3 w-3" />
            <span>INSIGHTS &amp; RESOURCES</span>
          </div>

          <h1 className="blog-hero-title">
            The Profito <span className="blog-hero-title-blue">Blog</span>
          </h1>

          <div className="blog-hero-underline" aria-hidden="true">
            <span className="blog-hero-underline-blue" />
            <span className="blog-hero-underline-dot" />
            <span className="blog-hero-underline-lime" />
          </div>

          <p className="blog-hero-subtitle">
            Explore expert insights, industry trends, real-world case studies,
            and actionable tips
            <br className="hidden sm:block" />
            crafted to help your business grow confidently in the digital age.
          </p>

          <form className="blog-hero-search-row" onSubmit={handleSearch} role="search">
            <div className="blog-hero-search-box">
              <Search className="h-4 w-4 shrink-0 text-slate-400" strokeWidth={2} />
              <input
                type="search"
                id="blog-hero-search"
                placeholder="Search blog posts..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="blog-hero-search-input"
                aria-label="Search blog posts"
              />
            </div>

            <button type="submit" className="blog-hero-search-btn" id="blog-hero-search-btn">
              <Search className="h-4 w-4" strokeWidth={2.2} />
              <span>Search</span>
            </button>
          </form>
        </div>

        {/* PREMIUM CATEGORY CAROUSEL */}
        <div className="reveal-on-scroll is-visible mb-16">
          <div className="relative mx-auto mt-10 max-w-[1500px] px-4 sm:px-8 lg:px-12">
            <div className="mb-7 flex items-end justify-end gap-4">
              <div className="hidden shrink-0 gap-2 sm:flex">
                <button
                  type="button"
                  onClick={() => scrollCarousel(-1)}
                  disabled={!canScrollLeft}
                  aria-label="Previous categories"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition-all duration-300 hover:border-[#2196F3] hover:bg-[#2196F3] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={() => scrollCarousel(1)}
                  disabled={!canScrollRight}
                  aria-label="Next categories"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition-all duration-300 hover:border-[#2196F3] hover:bg-[#2196F3] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div
              ref={carouselRef}
              className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-6"
            >
              {BLOG_CATEGORY_CARDS.map((card) => {
                const image = getCategoryImage(card)
                const categoryPath = card.href || card.url || `/blog/category/${card.slug || card.id}`

                return (
                  <article
                    key={card.id}
                    id={`blog-card-${card.id}`}
                    className="group relative h-[360px] w-[78%] shrink-0 snap-start overflow-hidden rounded-[24px] bg-[#07163d] shadow-[0_8px_24px_rgba(8,24,65,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(8,24,65,0.2)] sm:h-[390px] sm:w-[280px] lg:h-[400px] lg:w-[300px]"
                  >
                    <Link to={categoryPath} aria-label={`Explore ${card.title}`} className="absolute inset-0 block">
                      <img
                        src={image}
                        alt={card.title || ''}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        onError={(event) => {
                          console.error('Category image failed to load:', image)
                          event.currentTarget.style.display = 'none'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-[#03091d]/35 via-transparent to-[#050d2b]/10" />
                    </Link>

                    <Link
  to={categoryPath}
  className="absolute bottom-0 left-0 z-20 inline-flex min-h-[56px] max-w-[92%] items-center rounded-tr-[22px] bg-white px-6 py-4 text-base font-semibold sm:text-[15px]"
  style={{
    color: '#111827',
    backgroundColor: '#ffffff',
    opacity: 1,
    visibility: 'visible',
  }}
>
  {card.title || card.label || card.name || card.category}
</Link>
                  </article>
                )
              })}
            </div>

            <div className="mt-3 flex justify-center gap-3 sm:hidden">
              <button
                type="button"
                onClick={() => scrollCarousel(-1)}
                disabled={!canScrollLeft}
                aria-label="Previous categories"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 disabled:opacity-30"
              >
                <ChevronLeft size={19} />
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel(1)}
                disabled={!canScrollRight}
                aria-label="Next categories"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 disabled:opacity-30"
              >
                <ChevronRight size={19} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST UPDATES */}
      <div className="reveal-on-scroll is-visible mb-20">
        <LatestUpdates />
      </div>

      {/* CTA */}
      <div className="reveal-on-scroll is-visible mb-20">
        <CTASection />
      </div>
    </div>
  )
}