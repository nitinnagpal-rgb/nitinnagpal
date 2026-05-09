import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const thoughtLeadership = [
  {
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
    description: "Technoly integration between primary storage and progressive data protection solutions.",
    source: "Rubrik, Inc",
    url: "https://www.rubrik.com/blog/company/17/6/next-generation-data-center-pure-storage-rubrik",
  },
];

export default function Blogs() {
  const [showAllThoughts, setShowAllThoughts] = useState(false);
  const displayedThoughtLeadership = showAllThoughts
    ? thoughtLeadership
    : thoughtLeadership.slice(0, 4);

  return (
    <main className="min-h-screen bg-zinc-900 text-white">
    {/* NAV */}
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-8">
            <div className="text-lg font-medium tracking-tight">
              <h1 className="max-w-2xl text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-zinc-100">
              <span className="text-cyan-400" style={{ color: '#22d3ee', textShadow: "0 0 8px rgba(34,211,238,0.5), 0 0 24px rgba(34,211,238,0.25)" }}>Nitin Nagpal</span>
              </h1>
            </div>
            <div className="hidden gap-8 text-md text-zinc-400 md:flex">
              <Link to="https://www.nitinnagpal.com" className="hover:text-white transition">
                Home
              </Link>
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
          {displayedThoughtLeadership.map((item) => (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-zinc-800 bg-zinc-950/90 p-6 transition hover:border-cyan-400 hover:bg-zinc-900"
            >
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
            </a>
          ))}
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
