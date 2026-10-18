import React, { useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Cloud,
  CalendarDays,
  Clock3,
  Eye,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import profitoBlog from "../assets/profito-blog.png";
import cloudGpuImage from "../assets/profito-blog.png";
import { blogPosts } from "../data/blogPosts";
const LatestUpdates = () => {
  const primary = "#2196F3";
  const accent = "#BCD32E";

 const articles = blogPosts;
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = articles.slice(
    startIndex,
    startIndex + articlesPerPage
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="w-full overflow-hidden bg-white font-sans">

      {/* =====================================================
          EXISTING LATEST UPDATES SECTION
      ====================================================== */}

      <div className="px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1800px]">

          {/* SECTION HEADING */}
          <div className="mb-8">
            <div
              className="mb-4 inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-bold"
              style={{
                borderColor: "rgba(33,150,243,0.25)",
                backgroundColor: "rgba(33,150,243,0.08)",
                color: primary,
              }}
            >
              <Sparkles size={16} />
              LATEST UPDATES
            </div>

            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-black sm:text-4xl lg:text-5xl" style={{ color: "black" }}>
              Latest{" "}
              <span style={{ color: primary }}>Updates</span>
            </h2>

            <p className="max-w-4xl text-base leading-7 text-[#555555] sm:text-lg">
              Explore our newest blog posts covering cloud hosting, VPS
              solutions, server management tips, and industry news to help
              you make the most of your infrastructure.
            </p>
          </div>

          {/* BLOG GRID */}
          <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-12">

            {/* MAIN FEATURED CARD */}
            <article className="group relative isolate min-h-[530px] overflow-hidden rounded-[30px] border border-black/10 bg-white shadow-[0_10px_35px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:min-h-[600px] lg:col-span-9">

              <img
                src={profitoBlog}
                alt="Profito cloud infrastructure and token pricing"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent transition-colors duration-300 group-hover:bg-black/20" />

              {/* BOTTOM CONTENT CARD */}
              <div className="absolute inset-x-4 bottom-4 z-10 sm:inset-x-6 sm:bottom-6 lg:inset-x-8 lg:bottom-8">
                <div className="max-w-[480px] rounded-[24px] border border-white/60 bg-white/20 p-5 shadow-lg backdrop-blur-xl transition-all duration-300 group-hover:border-white/20 group-hover:bg-black/90 sm:p-7">

                  <div
                    className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-bold sm:text-sm"
                    style={{
                      borderColor: "rgba(33,150,243,0.25)",
                      backgroundColor: "rgba(33,150,243,0.08)",
                      color: primary,
                    }}
                  >
                    <Cloud size={16} />
                    CLOUD &amp; INFRASTRUCTURE
                  </div>

                  <h3 className="mb-3 text-xl font-extrabold leading-snug text-black transition-colors duration-300 group-hover:text-white sm:text-2xl">
                    Cost Per Token Explained: Comparing GPU Cloud Pricing for
                    LLM Inference in India
                  </h3>

                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EEEEEE] text-xl transition-colors duration-300 group-hover:bg-white/10">
                      <span aria-hidden="true">👤</span>
                    </div>

                    <div>
                      <p className="text-sm text-[#555555] transition-colors duration-300 group-hover:text-[#DDDDDD]">
                        September 8, 2026
                      </p>

                      <p className="mt-1 text-sm text-[#555555] transition-colors duration-300 group-hover:text-[#DDDDDD]">
                        by{" "}
                        <span className="font-bold" style={{ color: primary }}>
                          Vishal
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ARROW BUTTON */}
              <a
                href="/blog/cost-per-token-explained"
                aria-label="Read Cost Per Token Explained"
                className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-[#2196F3] bg-[#2196F3] text-white shadow-md transition-all duration-300 hover:border-white hover:bg-white hover:text-black sm:right-7 sm:top-7 sm:h-14 sm:w-14"
              >
                <ArrowRight size={24} />
              </a>
            </article>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-5 lg:col-span-3">

              {/* IMAGE CARD */}
              <article className="group relative flex min-h-[300px] flex-1 flex-col overflow-hidden rounded-[26px] border border-black/10 bg-white shadow-[0_8px_28px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:min-h-[320px]">
                <img
                  src={cloudGpuImage}
                  alt="Cloud GPU infrastructure"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <a
                  href="/blog/on-prem-vs-cloud-gpu"
                  aria-label="Read On-Prem vs Cloud GPU"
                  className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#2196F3] bg-[#2196F3] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                >
                  <ArrowRight size={22} />
                </a>
              </article>

              {/* TEXT CARD */}
              <article className="group relative flex min-h-[230px] flex-1 flex-col overflow-hidden rounded-[26px] border border-[#2196F3]/70 bg-gradient-to-br from-[#2196F3]/80 via-[#2196F3]/85 to-[#1685DB]/90 p-5 shadow-[0_12px_35px_rgba(33,150,243,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(33,150,243,0.22)] sm:min-h-[250px] sm:p-6">

                <h3 className="pr-12 text-xl font-bold leading-snug text-white sm:text-2xl">
                  On-Prem vs Cloud GPU: When Should You Rent an H200 Instead
                  of Buying One?
                </h3>

                <div className="mt-auto flex items-center gap-3 pt-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/15 text-xl">
                    <span aria-hidden="true">👤</span>
                  </div>

                  <div>
                    <p className="text-sm text-white/80">
                      September 2, 2026
                    </p>
                    <p className="mt-1 text-sm text-white/80">
                      by <span className="font-bold text-white">Vishal</span>
                    </p>
                  </div>
                </div>

                <a
                  href="/blog/on-prem-vs-cloud-gpu"
                  aria-label="Read the full article"
                  className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#2196F3] bg-[#2196F3] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                >
                  <ArrowRight size={22} />
                </a>
              </article>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          NEW LATEST ARTICLES SECTION
      ====================================================== */}

      <div className="border-t border-[#EAEFF4] bg-[#F8FAFC] px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-[1800px]">

          {/* ARTICLES HEADING */}
          <div className="mb-8 flex flex-col justify-between gap-4 sm:mb-10 sm:flex-row sm:items-end">
            <div>
              <p
                className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em]"
                style={{ color: primary }}
              >
                Explore Our Blog
              </p>

              <h2 className="text-3xl font-extrabold tracking-tight text-[#171717] sm:text-4xl" style={{ color: "black" }}>
                Latest <span style={{ color: primary }}>Articles</span>
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#666666] sm:text-base">
                Discover expert insights, practical guides and the latest
                trends to help your business grow.
              </p>
            </div>

            <p className="text-sm font-medium text-[#777777]">
              Showing{" "}
              <span className="font-bold text-black">
                {startIndex + 1}–
                {Math.min(startIndex + articlesPerPage, articles.length)}
              </span>{" "}
              of {articles.length} articles
            </p>
          </div>

          {/* ARTICLE CARDS */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {currentArticles.map((article) => (
              <article
                key={article.id}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E4EAF0] bg-white shadow-[0_4px_18px_rgba(0,0,0,0.025)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2196F3]/40 hover:shadow-[0_14px_35px_rgba(33,150,243,0.12)]"
              >
                {/* ARTICLE IMAGE */}
              <Link
  to={article.url}
  aria-label={`Read ${article.title}`}
  className="relative block aspect-[16/9] overflow-hidden bg-[#EAF5FE]"
>
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <span className="absolute left-3 top-3 rounded-md bg-white/95 px-3 py-1.5 text-[10px] font-extrabold tracking-wide shadow-sm sm:text-xs" style={{ color: primary }}>
                    {article.category}
                  </span>

                  <span className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white text-[#2196F3] opacity-0 shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowRight size={18} />
                  </span>
                </Link>

                {/* ARTICLE CONTENT */}
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                <h3
  className="mb-4 text-sm font-bold leading-snug text-[#171717] transition-colors duration-300 group-hover:text-[#2196F3] sm:text-base"
  style={{ color: "#171717" }}
>
<Link to={article.url}>
  {article.title}
</Link>
</h3>

                  {/* AUTHOR */}
                  <div className="mt-auto flex items-center gap-2 border-t border-[#EEF0F3] pt-3">
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[10px] font-extrabold text-white"
                      style={{ backgroundColor: primary }}
                    >
                      MR
                    </div>

                    <span className="text-xs font-medium text-[#555555]">
                      Manal Rana
                    </span>
                  </div>

                  {/* ARTICLE META */}
                  <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] text-[#777777] sm:text-xs">
                    <span className="inline-flex items-center gap-1">
                      <CalendarDays size={12} />
                      {article.date}
                    </span>

                    <span className="inline-flex items-center gap-1">
                      <Clock3 size={12} />
                      {article.readTime}
                    </span>

                    <span className="inline-flex items-center gap-1">
                      <Eye size={12} />
                      {article.views}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E0E6EC] bg-white text-[#555555] transition-colors hover:border-[#2196F3] hover:text-[#2196F3] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft size={18} />
              </button>

              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => goToPage(page)}
                    aria-label={`Go to page ${page}`}
                    aria-current={currentPage === page ? "page" : undefined}
                    className={`flex h-10 min-w-10 items-center justify-center rounded-xl border px-3 text-sm font-semibold transition-all duration-200 ${
                      currentPage === page
                        ? "border-[#2196F3] bg-[#2196F3] text-white shadow-md shadow-[#2196F3]/20"
                        : "border-[#E0E6EC] bg-white text-[#555555] hover:border-[#2196F3] hover:text-[#2196F3]"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}

              <button
                type="button"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E0E6EC] bg-white text-[#555555] transition-colors hover:border-[#2196F3] hover:text-[#2196F3] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;