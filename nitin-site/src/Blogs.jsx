import { useState } from "react";
import { Link } from "react-router-dom";

const thoughtLeadership = [
    {
    title: "A Continuous Strategy Calibration Framework for GMs and Product Leaders (CPO)",
    description: "The hardest leadership decision is often not what to build, but where to aggressively invest, where to experiment, and where to optimize for efficiency : A framework for continuous strategy calibration.",
    source: "Nitin Nagpal",
    url: "/GBES_blog",
  },{
    title: "Operationalizing AI Governance in the agentic era",
    description: "A practical view on building AI governance frameworks for autonomous agents and enterprise resilience.",
    source: "Relyance AI",
    url: "https://www.relyance.ai/blog/agentic-ai-governance",
  },
  {
    title: "Static security is dead: How AI agents are killing traditional data security models",
    description: "Exploring why legacy protections fail in agentic environments and what modern security must do instead.",
    source: "Relyance AI",
    url: "https://www.relyance.ai/blog/static-security-is-dead",
  },
  {
    title: "Shaping the Future of Data Security",
    description: "Reflections on product strategy, customer guidance, and growth signals from industry leaders.",
    source: "Druva, Inc",
    url: "https://www.druva.com/blog/insights-from-cab-2024",
  },
  {
    title: "Reinforcing Druva’s Commitment to Microsoft Workloads",
    description: "A leadership perspective on aligning product direction with enterprise cloud platform strategy.",
    source: "Druva, Inc",
    url: "https://www.druva.com/blog/druva-reinforces-commitment-microsoft",
  },
  {
    title: "Next-Generation Data Center with Pure Storage and Rubrik",
    description: "Technology integration between primary storage and progressive data protection solutions.",
    source: "Rubrik, Inc",
    url: "https://www.rubrik.com/blog/company/17/6/next-generation-data-center-pure-storage-rubrik",
  },
];

export default function Blogs({ theme, toggleTheme, navSolid }) {
  const [showAllThoughts, setShowAllThoughts] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const displayedThoughtLeadership = showAllThoughts
    ? thoughtLeadership
    : thoughtLeadership.slice(0, 4);

  return (
    <main className="min-h-screen bg-zinc-900 text-white">
    {/* NAV */}
          <nav className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl ${navSolid ? "bg-zinc-950/90 border-b border-zinc-800 shadow-xl shadow-black/20" : "bg-zinc-950/10"}`}>
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 md:px-8">
              <div className="flex items-center gap-4">
                <div className="font-medium tracking-tight">
                <h1 className="text-4xl md:text-5xl font-semibold text-zinc-100">
                <span className="text-cyan-400" style={{textShadow:"0 0 4px rgba(34,211,238,0.8), 0 0 18px rgba(34,211,238,0.5)"}}>
                    Nitin Nagpal
                </span>
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
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4" aria-hidden="true">
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
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-zinc-200" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414m12.728 0l-1.414-1.414M7.05 7.05L5.636 5.636M12 7a5 5 0 100 10 5 5 0 000-10z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-zinc-200" aria-hidden="true">
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
     
      <section
        id="thoughts"
        className="mx-auto max-w-7xl border-t border-cyan-900 px-8 py-10"
      >
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mt-6 text-2xl md:text-4xl font-semibold tracking-tight text-white">
            Thought Leadership and Blogs
          </h2>
          <p className="mt-4 text-base md:text-lg leading-8 text-zinc-400">
            Featured ideas, articles, and leadership commentary
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {displayedThoughtLeadership.map((item) => {
            const isInternal = item.url.startsWith("/");
            const CardContent = (
              <>
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                      {item.source}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-300 transition group-hover:bg-cyan-500 group-hover:text-white">
                    ↗
                  </span>
                </div>
                <p className="text-sm leading-6 text-zinc-400">{item.description}</p>
              </>
            );

            return isInternal ? (
              <Link
                key={item.url}
                to={item.url}
                className="group rounded-3xl border border-zinc-800 bg-zinc-950/90 p-6 transition hover:border-cyan-400 hover:bg-zinc-900"
              >
                {CardContent}
              </Link>
            ) : (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl border border-zinc-800 bg-zinc-950/90 p-6 transition hover:border-cyan-400 hover:bg-zinc-900"
              >
                {CardContent}
              </a>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          {thoughtLeadership.length > 3 && (
            <button
              type="button"
              onClick={() => setShowAllThoughts((prev) => !prev)}
              className="rounded-full border border-cyan-400 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20"
            >
              {showAllThoughts ? 'Show fewer articles' : `Show all articles`}
            </button>
          )}
          {!showAllThoughts && (
            <p className="text-sm text-zinc-500">
              Showing top {displayedThoughtLeadership.length} articles. Expand to view the full list.
            </p>
          )}
        </div>

        <div className="mt-16 rounded-3xl border border-zinc-800 bg-zinc-950/60 p-8 md:p-10">
          <h3 className="text-xl font-semibold text-cyan-300 mb-6">
            Speaking & Media
          </h3>
          <ul className="space-y-5 text-base text-zinc-300">
            <li className="flex gap-4">
              <span className="text-cyan-400 flex-shrink-0 font-semibold">→</span>
              <div>
                <p className="font-semibold text-white">RSAC 2026 (March 2026)</p>
                <p className="text-sm text-zinc-400">Presenting Relyance AI's approach to AI-native data security at Moscone Center, San Francisco</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-cyan-400 flex-shrink-0 font-semibold">→</span>
              <div>
                <p className="font-semibold text-white">The AI Registry Delusion (Gartner D&A Summit, March 2026)</p>
                <p className="text-sm text-zinc-400">Joint session with Jason James (CIO, Aptos Retail) on why 84% of customers are ready to walk and how autonomous data defense delivers real trust</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-cyan-400 flex-shrink-0 font-semibold">→</span>
              <div>
                <p className="font-semibold text-white">App-Aware Data Management Webinar (2019)</p>
                <p className="text-sm text-zinc-400">Joint Pure Storage + Rubrik webinar on cloud-scale all-flash data management</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
