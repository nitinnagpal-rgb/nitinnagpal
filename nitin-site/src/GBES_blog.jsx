import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const shareUrl = "https://nitinnagpal.com/GBES_blog";
const ogImage = "https://nitinnagpal.com/assets/GBES_Blog_2.png";

const gbesRows = [
  ["Grow", "Accelerate proven demand", "Scale aggressively", "Market leadership"],
  ["Build", "Convert validated ideas into products", "Structured incubation", "Product-market fit"],
  ["Explore", "Discover future opportunities", "Experimentation", "Future growth pipeline"],
  ["Sustain", "Optimize mature offerings", "Efficiency and continuity", "Profitability, retention, or divestment"],
];

const operatingRows = [
  ["Engineering", "Experimentation", "Rapid iteration", "Scale", "Efficiency"],
  ["GTM", "Minimal", "Focused", "Aggressive", "Retention"],
  ["Pricing", "Hypothesis", "Validation", "Expansion", "Optimization"],
  ["Partnerships", "Discovery", "Design partners", "Channel scale", "Maintenance"],
];

const signalSections = [
  {
    id: "explore",
    title: "Explore",
    intro:
      "Explore is about generating future growth optionality. These initiatives are highly experimental and focused more on learning than scaling.",
    activities: ["Customer discovery", "PoCs", "AI experimentation", "Market validation", "Technical feasibility analysis"],
    signals: [
      ["Customer problem is still being validated", "PMF is unclear"],
      ["GTM motion is undefined", "Scaling too early creates inefficiency"],
      ["Product direction changes frequently", "Team is still learning"],
      ["Heavy founder/product involvement in customer conversations", "Messaging is still evolving"],
      ["PoCs dominate execution", "Technical and market validation are still underway"],
    ],
  },
  {
    id: "build",
    title: "Build",
    intro:
      "Build is where validated opportunities become operational investments. Enough validation exists to justify investment, but not enough maturity exists to assume repeatable growth.",
    note:
      "The biggest failure mode in Build is premature scaling. One of the best references on PMF indicators is John Vrionis’ field guide from Unusual Ventures.",
    activities: ["MVP refinement", "Design partner engagement", "Beta programs", "Packaging validation", "GTM refinement", "Early operational hardening"],
    signals: [
      ["Design partners actively engaged", "Customer value is becoming clearer"],
      ["Customers consistently understand the use case", "Messaging is stabilizing"],
      ["MVP adoption is growing", "Product direction is validated"],
      ["Early expansion conversations begin", "Customers see broader value"],
      ["GTM execution still requires strong founder/product involvement", "Motion is not yet repeatable"],
    ],
  },
  {
    id: "grow",
    title: "Grow",
    intro:
      "Grow is where organizations aggressively scale proven demand. At this stage, PMF exists, customer value is validated, the GTM motion is repeatable, and investment should accelerate.",
    activities: ["GTM scale-out", "Channel expansion", "Pricing optimization", "Cross-sell and attach growth", "Enterprise expansion", "International expansion"],
    signals: [
      ["Sales execution becomes predictable", "GTM motion is repeatable"],
      ["Expansion revenue accelerates", "Customers see long-term value"],
      ["Customer onboarding becomes standardized", "Operational scale is possible"],
      ["Channel and partner leverage increases", "Ecosystem scale is emerging"],
      ["Product adoption becomes both broad and deep", "Strong PMF exists"],
    ],
  },
  {
    id: "sustain",
    title: "Sustain",
    intro:
      "Sustain is about deliberate optimization. These are products, platforms, or business lines where operational efficiency, customer continuity, profitability, and lifecycle management become more important than aggressive expansion.",
    note:
      "In some cases, Sustain may ultimately lead to portfolio consolidation, platform simplification, or even divestment.",
    activities: ["Cost optimization", "Technical debt management", "Retention focus", "Lifecycle extension", "Controlled modernization", "Portfolio consolidation"],
    signals: [
      ["Revenue growth stabilizes", "Market maturity increases"],
      ["Margins become more important than expansion", "Efficiency becomes critical"],
      ["Customer retention outweighs net-new acquisition", "Installed base drives value"],
      ["Product innovation slows intentionally", "Stability matters more than velocity"],
      ["Infrastructure and support costs become key focus areas", "Operational optimization becomes a priority"],
      ["Roadmap shifts toward maintenance over differentiation", "Strategic growth potential may be slowing"],
      ["Adjacent platforms begin overlapping capabilities", "Consolidation opportunities emerge"],
    ],
  },
];

const metricSections = [
  {
    id: "explore-metrics",
    title: "Explore Metrics",
    intro: "At the Explore stage, learning velocity matters more than revenue scale.",
    rows: [
      ["Hypothesis validation rate", "Measures learning progress"],
      ["Customer discovery velocity", "Indicates market engagement"],
      ["PoC success rate", "Validates technical and business viability"],
      ["Strategic relevance", "Aligns exploration with long-term direction"],
      ["Emerging market/customer pull", "Indicates future demand potential"],
      ["Founder/Product engagement quality", "Helps assess customer understanding"],
      ["Speed of iteration", "Measures organizational agility"],
    ],
    footer: "At this stage, traditional growth metrics like CAC or ARR are often misleading.",
  },
  {
    id: "build-metrics",
    title: "Build Metrics",
    intro: "Build focuses on converting validation into repeatable execution.",
    rows: [
      ["MVP adoption growth", "Signals early market traction"],
      ["Beta-to-paid conversion", "Indicates emerging customer commitment"],
      ["Time-to-value", "Measures onboarding effectiveness"],
      ["Usage depth", "Indicates workflow integration"],
      ["Early retention signals", "Suggests product stickiness"],
      ["Deployment friction", "Highlights operational maturity gaps"],
      ["Design partner expansion interest", "Indicates broader value realization"],
      ["GTM repeatability indicators", "Helps identify readiness for scaling"],
    ],
  },
  {
    id: "grow-metrics",
    title: "Grow Metrics",
    intro: "Grow is where efficiency and scale become critical.",
    rows: [
      ["ARR growth", "Measures business expansion"],
      ["CAC payback", "Indicates GTM efficiency"],
      ["Net Revenue Retention (NRR)", "Measures customer expansion and stickiness"],
      ["Attach rate", "Measures breadth of adoption"],
      ["Consumption / usage growth", "Measures depth of adoption"],
      ["Gross margin expansion", "Indicates scaling efficiency"],
      ["Pipeline velocity", "Measures GTM scalability"],
      ["Partner/channel contribution", "Reflects ecosystem leverage"],
      ["Customer onboarding efficiency", "Indicates operational scalability"],
    ],
  },
  {
    id: "sustain-metrics",
    title: "Sustain Metrics",
    intro: "Sustain prioritizes efficiency, continuity, and disciplined capital allocation.",
    rows: [
      ["Gross margin", "Measures profitability efficiency"],
      ["Renewal rates", "Indicates customer continuity"],
      ["Infrastructure cost efficiency", "Reflects operational optimization"],
      ["Support cost trends", "Measures lifecycle efficiency"],
      ["Operational leverage", "Indicates scalability of mature operations"],
      ["Product maintenance burden", "Helps evaluate long-term sustainability"],
      ["Customer retention stability", "Indicates installed base durability"],
      ["Revenue contribution vs investment required", "Helps evaluate consolidation or divestment potential"],
    ],
  },
];

const kpiRows = [
  ["CAC", "Irrelevant", "Emerging", "Critical", "Minimize"],
  ["Gross Margin", "N/A", "Monitor", "Expand", "Maximize"],
  ["Attach Rate", "N/A", "Early signal", "Critical", "Maintain"],
  ["Consumption", "Observe", "Validate", "Scale", "Stabilize"],
  ["Innovation Velocity", "Critical", "High", "Moderate", "Low"],
];

function DataTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
      <table className="min-w-full text-left text-sm">
        <thead className="border-b border-zinc-700 bg-zinc-900/80 text-cyan-400">
          <tr>
            {headers.map((header) => (
              <th key={header} className="pb-3 pr-6 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-800 text-zinc-300">
          {rows.map((row, index) => (
            <tr
              key={`${row[0]}-${index}`}
              className={`${index % 2 === 0 ? "bg-zinc-950/30" : "bg-zinc-900/20"} transition hover:bg-zinc-900/60`}
            >
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className={`py-2 pr-4 ${cellIndex === 0 ? "font-semibold text-white" : ""}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul className="list-disc space-y-2 pl-6 text-zinc-300">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function GBES_blog({ theme = "dark", toggleTheme, navSolid }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    document.title = "GBES Framework for GMs | Product Strategy, Growth & Investment";

    const upsertMeta = (selector, attributes) => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        document.head.appendChild(element);
      }
      Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    };

    const upsertLink = (selector, attributes) => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement("link");
        document.head.appendChild(element);
      }
      Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    };

    upsertMeta('meta[name="description"]', { name: "description", content: "A continuous strategy calibration mindset for GMs, product leaders, and CEOs to balance innovation, growth investment, GTM focus, and operational efficiency." });
    upsertLink('link[rel="canonical"]', { rel: "canonical", href: shareUrl });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "article" });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: "GBES: A Continuous Strategy Calibration Mindset for GMs" });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: "A practical operating lens for deciding what to grow, build, explore, and sustain across products, GTM motions, and business investments." });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: shareUrl });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: ogImage });
    upsertMeta('meta[property="og:image:secure_url"]', { property: "og:image:secure_url", content: ogImage });
    upsertMeta('meta[property="og:image:type"]', { property: "og:image:type", content: "image/png" });
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: "GBES: A Continuous Strategy Calibration Mindset for GMs" });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: "A practical operating lens for deciding what to grow, build, explore, and sustain across products, GTM motions, and business investments." });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: ogImage });
  }, []);

  return (
    <main className="min-h-screen bg-zinc-900 text-white">
      {/* SEO meta tags injected via useEffect below. */}

      <nav
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl ${
          navSolid ? "bg-zinc-950/90 border-b border-zinc-800 shadow-xl shadow-black/20" : "bg-zinc-950/10"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 md:px-8">
          <div className="flex items-center gap-4">
            <Link to="/" className="font-medium tracking-tight">
              <h1 className="text-4xl font-semibold text-zinc-100 md:text-5xl">
                <span className="text-cyan-400" style={{ textShadow: "0 0 4px rgba(34,211,238,0.8), 0 0 18px rgba(34,211,238,0.5)" }}>
                  Nitin Nagpal
                </span>
              </h1>
            </Link>
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

          <div className={`hidden gap-8 text-md md:flex ${theme === "dark" ? "text-white" : "text-zinc-900"}`}>
            <Link to="/" className="transition hover:text-cyan-400">Home</Link>
            <Link to="/blogs" className="transition hover:text-cyan-400">Blogs</Link>
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
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-zinc-900" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3c.05 0 .1 0 .15 0a7 7 0 109.64 9.79z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className={`${mobileNavOpen ? "block" : "hidden"} border-t border-zinc-800 bg-zinc-950/95 px-4 py-4 md:hidden`}>
          <div className="space-y-3">
            <Link to="/" onClick={() => setMobileNavOpen(false)} className="block text-zinc-200 transition hover:text-white">Home</Link>
            <Link to="/blogs" onClick={() => setMobileNavOpen(false)} className="block text-zinc-200 transition hover:text-white">Blogs</Link>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">GBES Blog</p>
          <h1 className="mx-auto mt-6 max-w-5xl text-3xl font-semibold tracking-tight text-cyan-400 md:text-5xl">
            A Continuous Strategy Calibration Mindset for GMs and Product Leaders
          </h1>
          <p className="mt-5 text-sm text-zinc-500">4 min read</p>
        </div>

        <div className="grid gap-10 xl:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="hidden xl:block">
            <div className="sticky top-28 rounded-3xl border border-zinc-800 bg-zinc-950/90 p-6 text-sm text-zinc-300 shadow-xl shadow-black/10">
              <p className="mb-4 uppercase tracking-[0.3em] text-cyan-300">Table of Contents</p>
              <nav className="space-y-3">
                <a href="#overview" className="block transition hover:text-white">Overview</a>
                <a href="#what-is-gbes" className="block transition hover:text-white">What is GBES?</a>
                <a href="#visualizing-gbes" className="block transition hover:text-white">Visualizing GBES</a>
                <a href="#operating-lens" className="block transition hover:text-white">Operating Lens</a>
                <a href="#signals" className="block transition hover:text-white">Signals by Mode</a>
                <div className="ml-3 space-y-2 border-l border-zinc-800 pl-4 text-zinc-500">
                  <a href="#explore" className="block transition hover:text-white">Explore</a>
                  <a href="#build" className="block transition hover:text-white">Build</a>
                  <a href="#grow" className="block transition hover:text-white">Grow</a>
                  <a href="#sustain" className="block transition hover:text-white">Sustain</a>
                </div>
                <a href="#metrics" className="block transition hover:text-white">Metrics</a>
                <a href="#kpi-alignment" className="block transition hover:text-white">KPI Alignment</a>
                <a href="#ai-era" className="block transition hover:text-white">AI Era</a>
                <a href="#final-thought" className="block transition hover:text-white">Final Thought</a>
              </nav>
            </div>
          </aside>

          <article className="min-w-0 space-y-8">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-950/90 px-4 py-2 text-sm text-zinc-200 transition hover:border-cyan-400 hover:text-white"
              >
                Share on LinkedIn
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

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/90 p-6 shadow-xl shadow-black/10 md:p-8">
              <section id="overview" className="scroll-mt-28 space-y-4">
                <p className="text-lg leading-6 text-zinc-300">
                  One of the continuous challenges for GMs, Product leaders, and CEOs is balancing innovation with growth and operational efficiency. Leadership teams must constantly decide how much to invest in future opportunities while ensuring existing revenue streams, customer commitments, and market momentum continue to scale.
                </p>
                <p className="text-lg leading-6 text-zinc-300">
                  Not every product, use case, platform initiative, or GTM motion requires the same level of investment, urgency, or operational focus at the same time. Some initiatives deserve aggressive growth investment and scale. Some require incubation and validation before broader expansion. Others should remain exploratory as teams test hypotheses and evaluate market potential. And some mature businesses should be optimized for profitability, customer continuity, and operational efficiency.
                </p>
                <p className="text-lg leading-6 text-zinc-300">The challenge for leadership teams is not simply deciding what to build next. It is continuously balancing:</p>
                <BulletList items={["R&D investment", "GTM acceleration", "innovation velocity", "operational efficiency", "customer expansion", "platform modernization", "long-term strategic optionality"]} />
                <p className="text-lg leading-6 text-zinc-300">
                  Over time, I’ve found it useful to think about products, growth initiatives, and business investments across four distinct operating modes: initiatives focused on scaling proven demand (<span className="font-semibold text-white">Grow</span>), initiatives being incubated toward product-market fit (<span className="font-semibold text-white">Build</span>), exploratory investments designed to create future growth opportunities (<span className="font-semibold text-white">Explore</span>), and mature offerings optimized for efficiency and continuity (<span className="font-semibold text-white">Sustain</span>).
                </p>
                <p className="text-lg leading-6 text-zinc-300">
                  I call this the <span className="font-semibold text-white">GBES mindset</span> — a continuous way to evaluate and recalibrate how organizations allocate investment, focus, and execution across evolving business priorities.
                </p>
              </section>

              <section id="what-is-gbes" className="mt-12 scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-semibold text-cyan-400">What is the GBES Mindset?</h2>
                <DataTable headers={["Category", "Strategic Objective", "Investment Mindset", "Business Goal"]} rows={gbesRows} />
                <p className="text-lg leading-6 text-zinc-300">The GBES mindset applies equally well to multi-product companies, startups, business units, platforms, product portfolios, GTM motions, customer segments, architectural investments, AI initiatives, and geographic expansion strategies.</p>
                <p className="text-lg leading-6 text-zinc-300">Another way to think about GBES is through the lens of organizational confidence versus scale: Explore and Build focus on learning, Grow focuses on acceleration, and Sustain focuses on optimization.</p>
              </section>

              <section id="visualizing-gbes" className="mt-12 scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-semibold text-cyan-400">Visualizing GBES</h2>
                <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-3">
                  <img
                    src="/assets/GBES_Blog_2.png"
                    alt="GBES strategic operating framework showing Explore, Build, Grow, and Sustain across certainty and scale"
                    className="w-full rounded-xl object-cover"
                  />
                  <p className="mt-3 text-center text-sm text-zinc-400">Figure 1. The GBES continuous strategy calibration framework</p>
                </div>
                <p className="text-lg leading-6 text-zinc-300">Products and initiatives continuously move between phases as market conditions shift, PMF improves, GTM maturity evolves, and AI disruption changes customer behavior.</p>
                <BulletList items={["Explore → Build after validation", "Build → Grow after repeatable GTM success", "Grow → Sustain as markets mature", "Sustain → Build when modernization becomes necessary"]} />
                <p className="text-lg leading-6 text-zinc-300">The goal is not categorization. The goal is continuous strategic recalibration.</p>
              </section>

              <section id="operating-lens" className="mt-12 scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-semibold text-cyan-400">GBES Operating Lens</h2>
                <DataTable headers={["Area", "Explore", "Build", "Grow", "Sustain"]} rows={operatingRows} />
              </section>

              <section id="signals" className="mt-12 scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-semibold text-cyan-400">Signals That Help Identify Each Mode</h2>
                <p className="text-lg leading-6 text-zinc-300">There are specific signals leaders can use to recognize where a product, business initiative, platform investment, or GTM motion truly sits at a given point in time.</p>
                <p className="text-lg leading-6 text-zinc-300">The goal is not to force every initiative into a rigid lifecycle model, but to continuously evaluate whether the organization should experiment further, incubate and refine, aggressively scale, or optimize for efficiency and continuity.</p>
                <p className="text-lg leading-6 text-zinc-300">I intentionally do not present the modes in GBES order here. Organizations experience these modes less as a linear sequence and more as a continuous balancing act between future opportunity creation, incubation, scaling, and operational optimization.</p>
              </section>

              {signalSections.map((section) => (
                <section key={section.id} id={section.id} className="mt-12 scroll-mt-28 space-y-4">
                  <h2 className="text-2xl font-semibold text-cyan-400">{section.title}</h2>
                  <p className="text-lg leading-6 text-zinc-300">{section.intro}</p>
                  {section.note && (
                    <p className="text-lg leading-6 text-zinc-300">
                      {section.id === "build" ? (
                        <>
                          The biggest failure mode in Build is premature scaling. One of the best references on PMF indicators is{" "}
                          <a
                            href="https://www.unusual.vc/field-guide/module-5-mvp-and-measuring-product-market-fit/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-300 underline decoration-cyan-300/40 underline-offset-4 transition hover:text-cyan-200"
                          >
                            John Vrionis’ field guide from Unusual Ventures
                          </a>
                          .
                        </>
                      ) : (
                        section.note
                      )}
                    </p>
                  )}
                  <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                    <h3 className="mb-4 text-lg font-semibold text-white">Typical Activities</h3>
                    <BulletList items={section.activities} />
                  </div>
                  <DataTable headers={["Signal", "What It Typically Means"]} rows={section.signals} />
                  {section.id === "grow" && (
                    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
                      <h3 className="mb-3 text-lg font-semibold text-white">Attach Rate ≠ Usage Rate</h3>
                      <p className="leading-7 text-zinc-300">Attach rate measures how broadly something is adopted. Usage rate measures how deeply it is consumed. Strong Grow businesses optimize both.</p>
                    </div>
                  )}
                  {section.id === "sustain" && (
                    <p className="text-lg leading-6 text-zinc-300">Strong leadership teams know where not to over-invest — and when to thoughtfully simplify, consolidate, or exit.</p>
                  )}
                </section>
              ))}

              <section id="metrics" className="mt-12 scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-semibold text-cyan-400">Metrics That Matter Across Each Mode</h2>
                <p className="text-lg leading-6 text-zinc-300">Different modes require fundamentally different success metrics. Applying identical KPIs, investment expectations, and operating rigor across every initiative regardless of maturity can create strategic inefficiency.</p>
                <p className="text-lg leading-6 text-zinc-300">The metrics below are not exhaustive scorecards, but practical indicators that help leadership teams evaluate investment efficiency, product maturity, GTM readiness, operational leverage, and long-term strategic potential.</p>
              </section>

              {metricSections.map((section) => (
                <section key={section.id} id={section.id} className="mt-10 scroll-mt-28 space-y-4">
                  <h3 className="text-xl font-semibold text-cyan-400">{section.title}</h3>
                  <p className="text-lg leading-6 text-zinc-300">{section.intro}</p>
                  <DataTable headers={["Metric", "Why It Matters"]} rows={section.rows} />
                  {section.footer && <p className="text-lg leading-6 text-zinc-300">{section.footer}</p>}
                </section>
              ))}

              <section id="kpi-alignment" className="mt-12 scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-semibold text-cyan-400">KPI Alignment Across GBES</h2>
                <DataTable headers={["KPI", "Explore", "Build", "Grow", "Sustain"]} rows={kpiRows} />
              </section>

              <section id="ai-era" className="mt-12 scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-semibold text-cyan-400">Why GBES Matters More in the AI Era</h2>
                <p className="text-lg leading-6 text-zinc-300">AI is compressing innovation cycles dramatically. Products now move between exploration, incubation, scale, and optimization much faster than traditional annual planning models can handle.</p>
                <p className="text-lg leading-6 text-zinc-300">That’s why GMs, Product leaders, and CEOs need a continuous strategy calibration mindset — not just static roadmaps and annual planning exercises.</p>
              </section>

              <section id="final-thought" className="mt-12 scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-semibold text-cyan-400">Final Thought</h2>
                <p className="text-lg leading-6 text-zinc-300">Great GMs, Product leaders, and CEOs are strategic allocators.</p>
                <p className="text-lg leading-6 text-zinc-300">The hardest leadership decision is often not what to build. It is deciding:</p>
                <BulletList items={["what deserves aggressive investment", "what deserves incubation", "what deserves experimentation", "and what should simply be optimized efficiently"]} />
              </section>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
