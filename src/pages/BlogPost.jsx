import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

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
                BLOG CONTENT SECTION
            ============================== */}
        <section
    id="blog-content"
    className="scroll-mt-10 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
>
                <article className="mx-auto max-w-4xl">

                    {/* Featured Image */}
                    {article.image && (
                        <div className="mb-10 overflow-hidden rounded-2xl border border-gray-100 shadow-lg">

                            <img
                                src={article.image}
                                alt={article.title}
                                className="h-auto max-h-[500px] w-full object-cover"
                            />

                        </div>
                    )}

                    {/* Article Content */}
                    <div className="text-base leading-8 text-gray-700 sm:text-lg">
                        {article.content}
                    </div>

                    {/* Back to Blogs */}
                    <div className="mt-12 border-t border-gray-200 pt-7">

                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 font-semibold text-primary transition-opacity hover:opacity-75"
                        >
                            <span aria-hidden="true">←</span>
                            Back to All Blogs
                        </Link>

                    </div>

                </article>
            </section>

        </main>
    );
};

export default BlogPost;