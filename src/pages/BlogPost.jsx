import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import { ArrowLeft } from "lucide-react";
import { useMemo } from "react";
const BlogPost = () => {
    const { slug } = useParams();

    const article = blogPosts.find((post) => post.slug === slug);

    // Blog Not Found
    if (!article) {
        return (
            <div className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-4">
                <h1 className="mb-5 text-3xl font-bold text-gray-900">
                    Blog Post Not Found
                </h1>

                <Link
                    to="/blog"
                    className="rounded-full bg-primary px-7 py-3 font-semibold text-white transition-opacity hover:opacity-90"
                >
                    Back to Blogs
                </Link>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-white">

            {/* ==============================
                BLOG HERO SECTION
            ============================== */}
            <section className="relative isolate overflow-hidden bg-primary px-4 py-20 text-center text-white sm:py-24 lg:py-28">

                {/* Background Effects */}
                <div className="pointer-events-none absolute inset-0 -z-10">

                    {/* Dark Navy Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#101D42]/95 via-[#172F63]/85 to-[#173E79]/90" />

                    {/* Left Blue Glow */}
                    <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-sky-400/20 blur-[100px]" />

                    {/* Right Blue Glow */}
                    <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-blue-300/20 blur-[110px]" />

                    {/* Glowing Stars */}
                    <div
                        className="absolute inset-0 opacity-80
                        [background-image:radial-gradient(2px_2px_at_10%_15%,#ffffff_70%,transparent),radial-gradient(2px_2px_at_22%_35%,#93c5fd_70%,transparent),radial-gradient(3px_3px_at_35%_12%,#ffffff_70%,transparent),radial-gradient(2px_2px_at_48%_28%,#bfdbfe_70%,transparent),radial-gradient(3px_3px_at_65%_18%,#ffffff_70%,transparent),radial-gradient(2px_2px_at_78%_38%,#93c5fd_70%,transparent),radial-gradient(2px_2px_at_90%_12%,#ffffff_70%,transparent),radial-gradient(3px_3px_at_15%_65%,#93c5fd_70%,transparent),radial-gradient(2px_2px_at_42%_75%,#ffffff_70%,transparent),radial-gradient(2px_2px_at_72%_68%,#bfdbfe_70%,transparent),radial-gradient(3px_3px_at_88%_82%,#ffffff_70%,transparent)]"
                    />

                    {/* Bottom Blue Glow */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-sky-400/20 to-transparent" />

                    {/* Subtle Light at Top */}
                    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/5 to-transparent" />

                </div>

                {/* Hero Content */}
               {/* Hero Content */}
<div className="relative mx-auto flex max-w-6xl flex-col items-center px-2">

    {/* Category Badge */}
    <div className="mb-8 mt-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-lg backdrop-blur-md sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
            {article.category}
        </span>
    </div>

    {/* Blog Title */}
    <h1 className="mx-auto max-w-5xl text-center text-2xl font-bold leading-[1.15] tracking-tight text-white sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl">
        {article.title}
    </h1>

    {/* Title Underline */}
    <div className="mt-7 h-1 w-16 rounded-full bg-white/80"></div>

    {/* Article Meta Information */}
    <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm text-white/90 sm:text-base">

        <span className="inline-flex items-center gap-2">
            <svg
                className="h-4 w-4 shrink-0 text-white/80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
            >
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path d="M16 3v4M8 3v4M3 11h18" />
            </svg>
            {article.date}
        </span>

        <span className="hidden h-5 w-px bg-white/30 sm:block"></span>

        <span className="inline-flex items-center gap-2">
            <svg
                className="h-4 w-4 shrink-0 text-white/80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
            >
                <circle cx="12" cy="8" r="4" />
                <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
            </svg>
            By Profito Interactive
        </span>

        <span className="hidden h-5 w-px bg-white/30 sm:block"></span>

        <span className="inline-flex items-center gap-2">
            <svg
                className="h-4 w-4 shrink-0 text-white/80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
            >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
            </svg>
            {article.readTime}
        </span>

    </div>

    {/* Views */}
    <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-sm">
        <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
        >
            <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
        {article.views}
    </div>

    {/* Action Buttons */}
    <div className="mt-9 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">

        {/* Back to Blogs */}
        <Link
    to="/blog"
    className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-[#C8E4FF] bg-white px-7 py-3 text-sm font-semibold !text-[#2196F3] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:w-auto sm:text-base"
>
    <svg
        className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-x-1"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
    >
        <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>

    <span className="!text-[#2196F3]">
        All Blogs
    </span>
</Link>

        {/* Read Article */}
        <a
            href="#blog-content"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 sm:w-auto sm:text-base"
        >
            Read Article
            <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
            >
                <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
        </a>

    </div>

</div>
            </section>


      {/* ==============================
    MODERN BLOG CONTENT SECTION
============================== */}
<section
    id="blog-content"
    className="scroll-mt-8 bg-[#F8FBFF] px-4 py-8 sm:px-6 lg:px-8 lg:py-12"
    style={{ color: "#334155" }}
>
    <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">

            {/* LEFT: TABLE OF CONTENTS */}
            <aside className="lg:sticky lg:top-6">
                <div className="overflow-hidden rounded-2xl border border-[#DCEBFA] bg-white p-5 shadow-[0_4px_20px_rgba(33,150,243,0.06)]">

                    <div className="mb-5 flex items-center justify-between border-b border-[#E8F1FA] pb-4">
                        <h2
                            className="text-base font-bold"
                            style={{ color: "#101A35" }}
                        >
                            Table of Contents
                        </h2>

                        <svg
                            className="h-5 w-5"
                            style={{ color: "#2196F3" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            aria-hidden="true"
                        >
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </div>

                    <nav aria-label="Table of contents">
                        <ol className="space-y-2">
                            {[
                                "Introduction",
                                "Why It Matters",
                                "Key Benefits",
                                "Important Strategies",
                                "Best Practices",
                                "Common Challenges",
                                "How to Get Started",
                                "Conclusion",
                            ].map((item, index) => (
                                <li key={item}>
                                    <a
                                        href={`#blog-section-${index + 1}`}
                                        className="group flex items-start gap-3 rounded-lg px-2 py-2 text-sm transition-colors hover:bg-[#EAF5FF]"
                                        style={{ color: "#526783" }}
                                    >
                                        <span
                                            className="shrink-0 font-semibold"
                                            style={{ color: "#2196F3" }}
                                        >
                                            {String(index + 1).padStart(2, "0")}.
                                        </span>

                                        <span>{item}</span>
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </nav>

                    {/* SIDEBAR CTA */}
                    <div className="mt-6 rounded-xl border border-[#D8EBFF] bg-gradient-to-br from-[#EAF5FF] to-white p-4">
                        <div className="mb-2 flex items-center gap-2">
                            <svg
                                className="h-5 w-5 shrink-0"
                                style={{ color: "#2196F3" }}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                aria-hidden="true"
                            >
                                <path d="M9 18h6M10 22h4M8 14a7 7 0 1 1 8 0c-1 .8-1 2-1 2h-6s0-1.2-1-2Z" />
                            </svg>

                            <h3
                                className="text-sm font-bold"
                                style={{ color: "#101A35" }}
                            >
                                Explore More Insights
                            </h3>
                        </div>

                        <p
                            className="text-xs leading-5"
                            style={{ color: "#64748B" }}
                        >
                            Discover more digital marketing insights and practical tips.
                        </p>

                        <Link
                            to="/blog"
                            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                            style={{ color: "#2196F3" }}
                        >
                            Browse Blogs →
                        </Link>
                    </div>
                </div>
            </aside>

            {/* RIGHT: ARTICLE */}
            <div className="min-w-0">

                {/* FEATURED ARTICLE CARD */}
                <div className="relative mb-6 overflow-hidden rounded-2xl border border-[#DCEBFA] bg-gradient-to-br from-[#E5F3FF] via-white to-[#EAF7FF] p-6 shadow-[0_5px_24px_rgba(33,150,243,0.07)] sm:p-8">
                    <div className="relative z-10 max-w-3xl">

                        {/* ARTICLE METADATA */}
                        <div
                            className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-3 text-xs font-medium sm:text-sm"
                            style={{ color: "#526783" }}
                        >
                            <span
                                className="inline-flex items-center gap-2 rounded-full border border-[#B9DEFF] bg-white px-3 py-1.5"
                                style={{ color: "#2196F3" }}
                            >
                                <span className="h-2 w-2 rounded-full bg-[#2196F3]" />
                                {article.category}
                            </span>

                            <span className="inline-flex items-center gap-2">
                                <svg
                                    className="h-4 w-4"
                                    style={{ color: "#2196F3" }}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    aria-hidden="true"
                                >
                                    <rect x="3" y="5" width="18" height="16" rx="2" />
                                    <path d="M16 3v4M8 3v4M3 11h18" />
                                </svg>

                                {article.date}
                            </span>

                            <span className="inline-flex items-center gap-2">
                                <svg
                                    className="h-4 w-4"
                                    style={{ color: "#2196F3" }}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    aria-hidden="true"
                                >
                                    <circle cx="12" cy="8" r="4" />
                                    <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
                                </svg>

                                By Profito Interactive
                            </span>
                        </div>

                        {/* ARTICLE TITLE */}
                        <h2
                            className="max-w-3xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl"
                            style={{ color: "#101A35" }}
                        >
                            {article.title}
                        </h2>

                        <p
                            className="mt-4 text-sm leading-7 sm:text-base"
                            style={{ color: "#526783" }}
                        >
                            Explore the key insights, practical strategies, and
                            important takeaways related to {article.title.toLowerCase()}.
                        </p>

                        <div
                            className="mt-5 flex flex-wrap items-center gap-4 text-sm"
                            style={{ color: "#64748B" }}
                        >
                            <span>{article.readTime}</span>
                            <span className="h-1 w-1 rounded-full bg-[#94A3B8]" />
                            <span>{article.views}</span>
                        </div>
                    </div>
                </div>

                {/* KEY TAKEAWAYS */}
                <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-[#DCEBFA] bg-gradient-to-r from-[#EAF5FF] to-white p-5 sm:flex-row sm:items-center sm:p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                        <svg
                            className="h-7 w-7"
                            style={{ color: "#2196F3" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            aria-hidden="true"
                        >
                            <circle cx="9" cy="8" r="3" />
                            <circle cx="17" cy="9" r="2.5" />
                            <path d="M3 20v-2a6 6 0 0 1 12 0v2M15 15a5 5 0 0 1 6 5" />
                        </svg>
                    </div>

                    <div>
                        <h3
                            className="text-base font-bold"
                            style={{ color: "#101A35" }}
                        >
                            Key Takeaways
                        </h3>

                        <p
                            className="mt-1 text-sm leading-6"
                            style={{ color: "#526783" }}
                        >
                            Understand the important ideas, learn practical
                            approaches, and discover ways to apply these insights.
                        </p>
                    </div>
                </div>

                {/* ARTICLE BODY */}
                <article className="rounded-2xl border border-[#E1ECF8] bg-white p-5 shadow-[0_4px_20px_rgba(33,150,243,0.04)] sm:p-8 lg:p-10">

                    {/* ARTICLE OVERVIEW */}
                    <div className="mb-8 border-b border-[#E8F1FA] pb-6">
                        <p
                            className="text-sm font-semibold uppercase tracking-wider"
                            style={{ color: "#2196F3" }}
                        >
                            Article Overview
                        </p>

                        <h2
                            className="mt-2 text-2xl font-bold leading-tight sm:text-3xl"
                            style={{ color: "#101A35" }}
                        >
                            {article.title}
                        </h2>
                    </div>

                    {/* ORIGINAL ARTICLE CONTENT */}
                    <div
                        className="max-w-none"
                        style={{ color: "#334155" }}
                    >
                        <p className="whitespace-pre-line text-base leading-8 sm:text-lg">
                            {article.content?.trim()}
                        </p>
                    </div>

                    {/* ARTICLE SECTIONS */}
                    {[
                        {
                            title: "Introduction",
                            text: `Get an overview of ${article.title.toLowerCase()} and understand the main ideas behind this topic.`,
                        },
                        {
                            title: "Why It Matters",
                            text: "Understanding the topic helps businesses make informed decisions, identify opportunities, and develop a more effective approach.",
                        },
                        {
                            title: "Key Benefits",
                            text: "A thoughtful strategy can improve efficiency, support better decision-making, and help teams work toward measurable goals.",
                        },
                        {
                            title: "Important Strategies",
                            text: "Start by defining your objectives, understanding your audience, reviewing available resources, and selecting the approaches that best fit your needs.",
                        },
                        {
                            title: "Best Practices",
                            text: "Focus on consistency, measure your progress, review performance regularly, and make improvements based on reliable information.",
                        },
                        {
                            title: "Common Challenges",
                            text: "Challenges may include limited resources, changing requirements, and difficulty measuring results. A clear plan can help address these issues.",
                        },
                        {
                            title: "How to Get Started",
                            text: "Begin with a clear goal, break the work into manageable steps, track your progress, and adjust your approach as you learn.",
                        },
                        {
                            title: "Conclusion",
                            text: `A clear understanding of ${article.title.toLowerCase()} can help you identify useful next steps and apply the ideas to your own goals.`,
                        },
                    ].map((section, index) => (
                        <section
                            key={section.title}
                            id={`blog-section-${index + 1}`}
                            className="scroll-mt-8 border-b border-[#E8F1FA] py-8 last:border-b-0"
                        >
                            <div className="flex items-start gap-4">
                                <span
                                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#B9DEFF] bg-[#EAF5FF] text-base font-bold"
                                    style={{ color: "#2196F3" }}
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <div className="min-w-0 flex-1">
                                    <h2
                                        className="text-xl font-bold leading-snug sm:text-2xl"
                                        style={{ color: "#101A35" }}
                                    >
                                        {section.title}
                                    </h2>

                                    <div className="mt-3 h-1 w-12 rounded-full bg-[#2196F3]" />

                                    <p
                                        className="mt-4 text-[15px] leading-8 sm:text-base sm:leading-8"
                                        style={{ color: "#334155" }}
                                    >
                                        {section.text}
                                    </p>
                                </div>
                            </div>
                        </section>
                    ))}

                    {/* BACK TO BLOGS */}
                    <div className="mt-6 border-t border-[#E8F1FA] pt-7">
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            <ArrowLeft className="h-4 w-4 text-white" />
                            <span className="text-white">Back to All Blogs</span>
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    </div>
</section>
{/* KEEP READING SECTION */}
<section
    className="keep-reading-section bg-[#F8FBFF] px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
    style={{ color: "#334155" }}
>
    <style>{`
        .keep-reading-section .kr-title,
        .keep-reading-section .kr-card-title {
            color: #101A35 !important;
            -webkit-text-fill-color: #101A35 !important;
            opacity: 1 !important;
            visibility: visible !important;
        }

        .keep-reading-section .kr-description {
            color: #526783 !important;
            -webkit-text-fill-color: #526783 !important;
            opacity: 1 !important;
            visibility: visible !important;
        }

        .keep-reading-section .kr-date {
            color: #64748B !important;
            -webkit-text-fill-color: #64748B !important;
            opacity: 1 !important;
            visibility: visible !important;
        }

        .keep-reading-section .kr-card:hover .kr-card-title {
            color: #2196F3 !important;
            -webkit-text-fill-color: #2196F3 !important;
        }

        .keep-reading-section .kr-card img {
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
        }
    `}</style>

    <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
                <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#B9DEFF] bg-[#EAF5FF] px-3 py-1.5 text-xs font-semibold text-[#2196F3]">
                    <span className="h-2 w-2 rounded-full bg-[#2196F3]" />
                    KEEP EXPLORING
                </span>

                <h2 className="kr-title text-3xl font-bold tracking-tight sm:text-4xl">
                    Keep Reading<span className="text-[#2196F3]">.</span>
                </h2>

                <p className="kr-description mt-3 max-w-xl text-sm leading-7 sm:text-base">
                    Explore more insights, practical tips, and the latest digital marketing trends.
                </p>
            </div>

            <Link
                to="/blog"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-[#2196F3] px-5 py-3 text-sm font-semibold text-white shadow-[0_5px_15px_rgba(33,150,243,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1479CC] hover:shadow-lg"
            >
                <span className="text-white">View All Blogs</span>
                <span className="text-white">→</span>
            </Link>
        </div>

        {/* EXACTLY 4 BLOG CARDS */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {blogPosts
                .filter((post) => post.slug !== article?.slug)
                .slice(0, 4)
                .map((post) => (
                    <Link
                        key={post.slug}
                        to={`/blog/${post.slug}`}
                        className="kr-card group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#E1ECF8] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#B9DEFF] hover:shadow-[0_14px_35px_rgba(33,150,243,0.13)]"
                    >
                        {/* IMAGE */}
                        <div className="relative h-44 overflow-hidden bg-[#EAF5FF]">
                            <img
                                src={post.image}
                                alt={post.title}
                                loading="lazy"
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101A35]/25 to-transparent" />

                            {post.category && (
                                <span className="absolute left-3 top-3 max-w-[85%] truncate rounded-full border border-white/80 bg-white px-3 py-1.5 text-xs font-semibold text-[#2196F3] shadow-sm">
                                    {post.category}
                                </span>
                            )}
                        </div>

                        {/* CONTENT */}
                        <div className="flex flex-1 flex-col p-5">
                            <h3 className="kr-card-title line-clamp-3 text-sm font-normal leading-snug transition-colors duration-300">
                                {post.title}
                            </h3>

                            <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                                <span className="kr-date text-sm font-medium">
                                    {post.date}
                                </span>

                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#B9DEFF] bg-[#EAF5FF] text-lg text-[#2196F3] transition-all duration-300 group-hover:border-[#2196F3] group-hover:bg-[#2196F3] group-hover:text-white">
                                    →
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
        </div>

    </div>
</section>
 
{/* CONTACT CTA SECTION */}
<section className="bg-[#F8FBFF] px-4 pb-12 pt-4 sm:px-6 lg:px-8 lg:pb-16">
    <div className="mx-auto max-w-7xl">
        <div
            className="relative overflow-hidden rounded-3xl px-5 py-12 text-center shadow-[0_15px_45px_rgba(33,150,243,0.20)] sm:px-10 sm:py-16"
            style={{
                background: `
                    radial-gradient(circle at 85% 80%, rgba(33,150,243,0.55) 0%, transparent 38%),
                    radial-gradient(circle at 5% 10%, rgba(33,150,243,0.28) 0%, transparent 40%),
                    linear-gradient(115deg, #12345A 0%, #174B82 45%, #2196F3 100%)
                `,
            }}
        >
            {/* BLUE GLOW */}
            <div
                className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full blur-3xl"
                style={{ background: "rgba(33,150,243,0.30)" }}
            />

            <div
                className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full blur-3xl"
                style={{ background: "rgba(33,150,243,0.20)" }}
            />

            {/* DECORATIVE DOTS */}
            <span className="pointer-events-none absolute left-[15%] top-[25%] h-1.5 w-1.5 rounded-full bg-white/50" />
            <span className="pointer-events-none absolute right-[18%] top-[35%] h-1 w-1 rounded-full bg-white/60" />
            <span className="pointer-events-none absolute bottom-[20%] right-[12%] h-2 w-2 rounded-full bg-white/50" />

            {/* CONTENT */}
            <div className="relative z-10 mx-auto max-w-2xl">
                <span
                    className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wider"
                    style={{ color: "#FFFFFF", WebkitTextFillColor: "#FFFFFF" }}
                >
                    <span className="h-2 w-2 rounded-full bg-white" />
                    LET'S CONNECT
                </span>

                <h2
                    className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl"
                    style={{ color: "#FFFFFF", WebkitTextFillColor: "#FFFFFF" }}
                >
                    Have a Question About This?
                </h2>

                <p
                    className="mx-auto mt-4 max-w-xl text-sm leading-7 sm:text-base"
                    style={{ color: "#E2EDFA", WebkitTextFillColor: "#E2EDFA" }}
                >
                    Let's discuss your goals and find the right digital marketing
                    solutions for your business.
                </p>

                {/* CONTACT BUTTON */}
                <Link
                    to="/contact"
                    className="group mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:px-9 sm:text-base"
                    style={{ color: "#2196F3", WebkitTextFillColor: "#2196F3" }}
                >
                    <span
                        style={{ color: "#2196F3", WebkitTextFillColor: "#2196F3" }}
                    >
                        Start a Conversation
                    </span>

                    <svg
                        className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </div>
    </div>
</section>
        </main>
    );
};

export default BlogPost;