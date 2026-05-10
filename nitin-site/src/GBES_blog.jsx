import { useState } from "react";
import { Link } from "react-router-dom";

export default function GBES_blog({ theme, toggleTheme, navSolid }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const shareUrl = "https://nitinnagpal.com/GBES_blog";
  return (
    <main className="min-h-screen bg-zinc-900 text-white">
      {/* NAV */}
      <nav className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl ${navSolid ? "bg-zinc-950/90 border-b border-zinc-800 shadow-xl shadow-black/20" : "bg-zinc-950/10"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 md:px-8">
          <div className="flex items-center gap-4">
            <div className="text-lg font-medium tracking-tight">
              <h1 className="text-lg md:text-2xl font-semibold text-zinc-100">
                <span className="text-cyan-400">Nitin Nagpal</span>
              </h1>
            </div>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950/70 text-zinc-200 transition hover:bg-zinc-900 md:hidden"
              onClick={() => setMobileNavOpen((prev) => !prev)}
              aria-expanded={mobileNavOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileNavOpen ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          <div className="hidden gap-8 text-md text-zinc-400 md:flex">
          <Link to="/" className="hover:text-white transition">
            Home
          </Link>
          <Link to="/blogs" className="hover:text-white transition">
            Blogs
          </Link>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-zinc-400 bg-zinc-500/10 text-zinc-200 transition hover:bg-zinc-500/20"
          >
            {theme === "dark" ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 text-zinc-200" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414m12.728 0l-1.414-1.414M7.05 7.05L5.636 5.636M12 7a5 5 0 100 10 5 5 0 000-10z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 text-zinc-200" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3c.05 0 .1 0 .15 0a7 7 0 109.64 9.79z" />
              </svg>
            )}
          </button>
        </div>
      </div>
        <div className={`${mobileNavOpen ? "block" : "hidden"} md:hidden border-t border-zinc-800 bg-zinc-950/95 px-4 py-4`}>
          <div className="space-y-3">
            <Link to="/" onClick={() => setMobileNavOpen(false)} className="block text-zinc-200 hover:text-white transition">Home</Link>
            <Link to="/blogs" onClick={() => setMobileNavOpen(false)} className="block text-zinc-200 hover:text-white transition">Blogs</Link>
            <button
              type="button"
              onClick={() => { toggleTheme(); setMobileNavOpen(false); }}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="inline-flex h-10 w-full items-center justify-center rounded-full border border-zinc-400 bg-zinc-900/10 text-zinc-200 transition hover:bg-zinc-500/20"
            >
              {theme === "dark" ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414m12.728 0l-1.414-1.414M7.05 7.05L5.636 5.636M12 7a5 5 0 100 10 5 5 0 000-10z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3c.05 0 .1 0 .15 0a7 7 0 109.64 9.79z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-8 py-10">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">GBES Blog</p>
          <h1 className="mt-6 text-3xl md:text-5xl font-semibold tracking-tight text-white">
            A Continuous Strategy Calibration Framework for GMs and Product Leaders
          </h1>
        </div>

        <div className="grid gap-10 xl:grid-cols-[240px_minmax(0,1fr)]">
          <aside className="hidden xl:block rounded-3xl border border-zinc-800 bg-zinc-950/90 p-6 text-sm text-zinc-300">
            <p className="mb-4 uppercase tracking-[0.3em] text-cyan-300">On this page</p>
            <nav className="space-y-3">
              <a href="#overview" className="block text-zinc-300 hover:text-white transition">Overview</a>
              <a href="#framework" className="block text-zinc-300 hover:text-white transition">Framework</a>
              <a href="#explore" className="block text-zinc-300 hover:text-white transition">Explore</a>
              <a href="#build" className="block text-zinc-300 hover:text-white transition">Build</a>
              <a href="#grow" className="block text-zinc-300 hover:text-white transition">Grow</a>
              <a href="#sustain" className="block text-zinc-300 hover:text-white transition">Sustain</a>
            </nav>
          </aside>

          <div className="space-y-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">GBES Blog</p>
                <p className="text-sm text-zinc-400">Share or save this article</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-950/90 px-4 py-2 text-sm text-zinc-200 transition hover:border-cyan-400 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.82v2.16h.05c.53-1 1.82-2.16 3.74-2.16 4 0 4.74 2.63 4.74 6.05V24h-4V14.5c0-2.26-.04-5.18-3.16-5.18-3.16 0-3.64 2.47-3.64 5.02V24h-4V8z" />
                  </svg>
                  Share
                </a>
                <button
                  type="button"
                  onClick={() => setLiked((prev) => !prev)}
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-950/90 px-4 py-2 text-sm text-zinc-200 transition hover:border-cyan-400 hover:text-white"
                >
                  <span>{liked ? "Liked" : "Like"}</span>
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-zinc-800 text-xs text-zinc-200">{liked ? 1 : 0}</span>
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/90 p-8 shadow-xl shadow-black/10">
              <div id="overview" className="space-y-6">
                <p className="text-lg leading-8 text-zinc-300">
                  Most leadership teams make the same mistake: they treat every product, use case, platform investment, and GTM initiative the same way.
                </p>
                <p className="text-lg leading-8 text-zinc-300">
                  Some initiatives deserve aggressive investment, some require incubation, others should remain experimental, and some should simply be optimized for profitability and customer continuity.
                </p>
              </div>

              <div id="framework" className="space-y-6">
                <p className="text-lg leading-8 text-zinc-300">
                  This post introduces a lightweight strategic operating framework for GMs and business leaders to continuously calibrate where to invest, experiment, accelerate, and optimize as markets and business priorities evolve.
                </p>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-3 font-mono text-sm leading-6 text-zinc-300 overflow-x-auto">
                  <div className="my-5 overflow-hidden rounded-2xl border border-zinc-800">
                    <img
                      src="/assets/GBES_Blog_2.png"
                      alt="GBES strategic operating framework"
                      className="w-full object-cover"
                    />
                  </div>
                  <p className="mt-3 text-center text-sm text-zinc-300">
                    Figure 1. The GBES continuous strategy calibration framework
                  </p>
                </div>
              </div>
              <p className="text-lg leading-8 text-zinc-300">
                Over the years, I’ve refined a lightweight framework that I call <span className="font-semibold text-white">GBES (Grow-Build-Explore-Sustain)</span> to continuously calibrate where products, business lines, and growth initiatives belong. Importantly, GBES is not a heavyweight process or stage-gate model. It’s a continuous operating lens for leadership teams to decide where to invest aggressively, where to incubate, where to experiment, and where to optimize efficiently.
              </p>

              <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                <table className="min-w-full text-left text-sm">
                  <thead className="border-b border-zinc-800 text-zinc-300">
                    <tr>
                      <th className="pb-3 pr-6">Category</th>
                      <th className="pb-3 pr-6">Strategic Objective</th>
                      <th className="pb-3 pr-6">Investment Mindset</th>
                      <th className="pb-3">Business Goal</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800 text-zinc-300">
                    <tr>
                      <td className="py-4 pr-6 font-semibold text-white">Grow</td>
                      <td className="py-4 pr-6">Accelerate proven demand</td>
                      <td className="py-4 pr-6">Scale aggressively</td>
                      <td className="py-4">Market leadership</td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-6 font-semibold text-white">Build</td>
                      <td className="py-4 pr-6">Convert validated ideas into products</td>
                      <td className="py-4 pr-6">Structured incubation</td>
                      <td className="py-4">Product-market fit</td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-6 font-semibold text-white">Explore</td>
                      <td className="py-4 pr-6">Discover future opportunities</td>
                      <td className="py-4 pr-6">Experimentation</td>
                      <td className="py-4">Future growth pipeline</td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-6 font-semibold text-white">Sustain</td>
                      <td className="py-4 pr-6">Optimize mature offerings</td>
                      <td className="py-4 pr-6">Efficiency and continuity</td>
                      <td className="py-4">Profitability and retention</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-lg leading-8 text-zinc-300">
                Another way to think about the framework is through the lens of organizational confidence versus scale. Explore and Build focus on learning. Grow focuses on acceleration. Sustain focuses on optimization.
              </p>

              <p className="text-lg leading-8 text-zinc-300">
                The framework is intentionally dynamic. Products and initiatives continuously move between phases as market conditions shift, PMF improves, GTM maturity evolves, and AI disruption changes customer behavior.
              </p>

              <p className="text-lg leading-8 text-zinc-300">
                That’s why GMs and CPOs need a continuous strategy calibration model — not just static roadmaps and annual planning exercises.
              </p>

              <p className="text-white font-medium">
                Great GMs and CPOs are strategic allocators. The hardest leadership decision is often not what to build, but deciding what deserves aggressive investment, what requires incubation, what should remain exploratory, and what should simply be optimized efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
