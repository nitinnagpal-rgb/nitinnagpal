import { Link } from "react-router-dom";

export default function GBES_blog({ theme, toggleTheme, navSolid }) {
  return (
    <main className="min-h-screen bg-zinc-900 text-white">
      {/* NAV */}
      <nav className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl ${navSolid ? "bg-zinc-950/90 border-b border-zinc-800 shadow-xl shadow-black/20" : "bg-zinc-950/10"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-8">
        <div className="text-lg font-medium tracking-tight">
          <h1 className="max-w-2xl text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-zinc-100">
            <span className="text-cyan-400" style={{ color: '#22d3ee', textShadow: "0 0 8px rgba(34,211,238,0.5), 0 0 24px rgba(34,211,238,0.25)" }}>
              Nitin Nagpal
            </span>
          </h1>
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
            className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-zinc-400 bg-zinc-500/10 text-zinc-200 transition hover:bg-cyan-500/20"
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

        <div className="rounded-3xl border border-zinc-800 bg-zinc-950/90 p-8 shadow-xl shadow-black/10">
        <p className="text-lg leading-8 text-zinc-300">
  Most leadership teams make the same mistake: they treat every product, use case, platform investment, and GTM initiative the same way.
  Some initiatives deserve aggressive investment, some require incubation, others should remain experimental, and some should simply be optimized for profitability and customer continuity.
  This post introduces a lightweight strategic operating framework for GMs and business leaders to continuously calibrate where to invest, experiment, accelerate, and optimize as markets and business priorities evolve.
</p>

<div className="mt-8 space-y-6 text-zinc-300">
  <p>
    Over the years, I’ve refined a lightweight framework that I call <span className="font-semibold text-white">GBES (Grow-Build-Explore-Sustain)</span> to continuously calibrate where products, business lines, and growth initiatives belong.
    Importantly, GBES is not a heavyweight process or stage-gate model.
    It’s a continuous operating lens for leadership teams to decide where to invest aggressively, where to incubate, where to experiment, and where to optimize efficiently.
  </p>


  <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-3 font-mono text-sm leading-6 text-zinc-300 overflow-x-auto">
{
   <div className="my-5 overflow-hidden rounded-2xl border border-zinc-800">
  <img
    src="/assets/GBES_Blog_2.png"
    alt="GBES strategic operating framework"
    className="w-full object-cover"
  />
  
</div>
}<p className="mt-3 text-center text-sm text-zinc-300">
    Figure 1. The GBES continuous strategy calibration framework
  </p>
  </div>

  <p>
    The framework applies equally well to multi-product companies, startups, business units, GTM motions, platforms, architectural investments, AI initiatives, and geographic expansion strategies.
  </p>

  <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
    <table className="min-w-full text-left text-sm line-height-12">
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

  <p>
    Another way to think about the framework is through the lens of organizational confidence versus scale.
    Explore and Build focus on learning.
    Grow focuses on acceleration.
    Sustain focuses on optimization.
  </p>

  <p>
    The framework is intentionally dynamic.
    Products and initiatives continuously move between phases as market conditions shift, PMF improves, GTM maturity evolves, and AI disruption changes customer behavior.
  </p>

  <ul className="list-disc space-y-2 pl-6">
    <li>Explore → Build after customer validation</li>
    <li>Build → Grow after repeatable GTM success</li>
    <li>Grow → Sustain as markets mature</li>
    <li>Sustain → Build when modernization becomes necessary</li>
  </ul>

  <p>
    The goal is not categorization.
    The goal is continuous strategic recalibration.
  </p>

  <div className="space-y-4">
    <h2 className="text-2xl font-semibold text-white">E — Explore</h2>
    <p>
      Explore is about generating future growth optionality.
      This phase is hypothesis-driven and focused on learning rather than immediate revenue.
    </p>

    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
        <h3 className="mb-3 font-semibold text-white">Typical Activities</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>Customer discovery</li>
          <li>PoCs</li>
          <li>AI experimentation</li>
          <li>Market validation</li>
          <li>Technical feasibility</li>
        </ul>
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
        <h3 className="mb-3 font-semibold text-white">Metrics That Matter</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>Learning velocity</li>
          <li>Hypothesis validation</li>
          <li>Customer engagement quality</li>
          <li>Strategic relevance</li>
        </ul>
      </div>
    </div>
  </div>

  <div className="space-y-4">
    <h2 className="text-2xl font-semibold text-white">B — Build</h2>

    <p>
      Build is where validated opportunities become operational investments.
      I often think of Build similarly to a qualified sales pipeline — enough validation exists to justify investment, but not enough maturity exists to assume repeatable growth.
    </p>

    <p>
      One of the best references on Product Market Fit indicators is {" "}
      <a
        href="https://www.unusual.vc/field-guide/module-5-mvp-and-measuring-product-market-fit/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400 hover:text-cyan-300"
      >
        MVP and PMF field guide{" "}
      </a>from John Vrionis’ at Unusual Ventures.
    </p>

    <p>
      The biggest failure mode in Build is premature scaling.
    </p>
  </div>

  <div className="space-y-4">
    <h2 className="text-2xl font-semibold text-white">G — Grow</h2>

    <p>
      Grow is where organizations aggressively scale proven demand.
      At this stage, PMF exists, the GTM motion is repeatable, customer value is validated, and investment should accelerate.
    </p>

    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
      <h3 className="mb-3 font-semibold text-white">Metrics That Matter</h3>
      <ul className="list-disc space-y-2 pl-5">
        <li>ARR growth</li>
        <li>CAC payback</li>
        <li>NRR</li>
        <li>Attach rate</li>
        <li>Consumption growth</li>
        <li>Gross margin expansion</li>
      </ul>
    </div>

    <p>
      A critical distinction:
      Attach rate measures how broadly something is adopted.
      Usage rate measures how deeply it is consumed.
      Strong Grow businesses optimize both.
    </p>
  </div>

  <div className="space-y-4">
    <h2 className="text-2xl font-semibold text-white">S — Sustain</h2>

    <p>
      Sustain is often misunderstood.
      It does not mean neglect.
      It means deliberate optimization.
    </p>

    <p>
      These are products or platforms where growth has stabilized, margins are attractive, customer continuity matters, and operational efficiency becomes critical.
    </p>

    <p>
      Strong GMs know where not to over-invest.
    </p>
  </div>

  <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
    <table className="min-w-full text-left text-sm">
      <thead className="border-b border-zinc-800 text-zinc-400">
        <tr>
          <th className="pb-3 pr-6">Area</th>
          <th className="pb-3 pr-6">Explore</th>
          <th className="pb-3 pr-6">Build</th>
          <th className="pb-3 pr-6">Grow</th>
          <th className="pb-3">Sustain</th>
        </tr>
      </thead>

      <tbody className="divide-y divide-zinc-800 text-zinc-300">
        <tr>
          <td className="py-4 pr-6 font-semibold text-white">Engineering</td>
          <td className="py-4 pr-6">Experimentation</td>
          <td className="py-4 pr-6">Rapid iteration</td>
          <td className="py-4 pr-6">Scale</td>
          <td className="py-4">Efficiency</td>
        </tr>

        <tr>
          <td className="py-4 pr-6 font-semibold text-white">GTM</td>
          <td className="py-4 pr-6">Minimal</td>
          <td className="py-4 pr-6">Focused</td>
          <td className="py-4 pr-6">Aggressive</td>
          <td className="py-4">Retention</td>
        </tr>

        <tr>
          <td className="py-4 pr-6 font-semibold text-white">Pricing</td>
          <td className="py-4 pr-6">Hypothesis</td>
          <td className="py-4 pr-6">Validation</td>
          <td className="py-4 pr-6">Expansion</td>
          <td className="py-4">Optimization</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>
    One of the biggest leadership mistakes is using identical KPIs across every phase.
    Different stages require fundamentally different operating expectations.
  </p>

  <p>
    AI is compressing innovation cycles dramatically.
    Products now move between exploration, incubation, scale, and optimization much faster than traditional annual planning models can handle.
  </p>

  <p>
    That’s why GMs and CPOsneed a continuous strategy calibration model — not just static roadmaps and annual planning exercises.
  </p>

  <p className="text-white font-medium">
    Great GMs and CPOs are strategic allocators.
    The hardest leadership decision is often not what to build, but deciding what deserves aggressive investment, what requires incubation, what should remain exploratory, and what should simply be optimized efficiently.
  </p>
</div>
          </div>
      </section>
    </main>
  );
}
