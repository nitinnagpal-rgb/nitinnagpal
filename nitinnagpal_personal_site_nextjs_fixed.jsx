"use client";
import React from "react";

const PROFILE = {
  name: "Nitin Nagpal",
  tagline: "Product • GTM • Platform Strategy",
  headline: "Building enterprise software companies from products to platforms.",
  bio:
    "Product and business executive with 25+ years building and scaling AI, data security, cybersecurity, and cloud platforms. I help companies connect product innovation, pricing, packaging, GTM, and ecosystem strategy to drive durable growth.",
  email: "nitin.nagpal@gmail.com",
  photoSrc: "/nitin.jpg",
  photoAlt: "Nitin Nagpal",
};

const focusItems = [
  "CPO / GM leadership",
  "Advisor to CEOs, boards, and investors",
  "Product-led GTM and monetization",
];

const workItems = [
  ["Relyance AI", "AI-native data security, privacy, and governance platform."],
  ["Druva", "Cloud data protection, monetization, marketplaces, and MSP growth."],
  ["Rubrik", "Service provider business, platform expansion, and enterprise GTM."],
  ["Pure Storage (Everpure)", "0->1 Builder for Data Storage and SaaS Control Plane (Pure1)"]
];

const advisoryItems = [
  ["Platform strategy", "Turn fragmented products into a unified platform story, roadmap, and operating model."],
  ["Pricing & packaging", "Create monetization models that improve ACV, attach, expansion, and GTM clarity."],
  ["GTM acceleration", "Build use-case-led messaging, sales plays, partner motions, and marketplace strategy."],
  ["AI & data security", "Help companies position and build around AI governance, data security, and runtime risk."],
];

const stats = [
  ["25+", "years building enterprise software"],
  ["$250M+", "ARR platform monetization experience"],
  ["0→1", "products, platforms, and GTM motions"],
];

function Icon({ name, className = "h-5 w-5" }) {
  const icons = {
    arrow: <path d="M5 12h14M13 5l7 7-7 7" />,
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3z" />
        <path d="M9 12l2 2 4-5" />
      </>
    ),
    network: (
      <>
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="12" cy="18" r="3" />
        <path d="M8.5 8.2l2.2 6.1M15.5 8.2l-2.2 6.1M9 6h6" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M4 7l8 6 8-6" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {icons[name] || icons.arrow}
    </svg>
  );
}

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 text-zinc-100 shadow-xl ${className}`}>
      {children}
    </div>
  );
}

function PrimaryButton({ children, href }) {
  return (
    <a
      href={href}
      className="inline-flex items-center rounded-2xl bg-zinc-100 px-5 py-3 text-base font-medium text-zinc-950 transition hover:bg-white"
    >
      {children}
    </a>
  );
}

function SecondaryButton({ children, href }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="inline-flex items-center rounded-2xl border border-zinc-700 bg-transparent px-5 py-3 text-base font-medium text-zinc-100 transition hover:bg-zinc-900"
    >
      {children}
    </a>
  );
}

function SectionHeading({ icon, children }) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <Icon name={icon} className="h-5 w-5 text-zinc-400" />
      <h2 className="text-3xl font-semibold tracking-tight">{children}</h2>
    </div>
  );
}

export default function NitinNagpalSite() {
  const mailto = `mailto:${PROFILE.email}`;

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto flex max-w-6xl flex-col px-6 py-10 md:py-16">
        <nav className="mb-20 flex items-center justify-between">
          <a href="#top" className="text-lg font-semibold tracking-tight">
            {PROFILE.name}
          </a>
          <div className="hidden gap-6 text-sm text-zinc-400 md:flex">
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#advisory" className="hover:text-white">Advisory</a>
            <a href="#travel" className="hover:text-white">Travel</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </nav>

        <div id="top" className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
              {PROFILE.tagline}
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
              {PROFILE.headline}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
              {PROFILE.bio}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton href={mailto}>
                Let’s connect <Icon name="arrow" className="ml-2 h-4 w-4" />
              </PrimaryButton>
              <SecondaryButton href="#travel">View travel globe</SecondaryButton>
            </div>
          </div>

          <Card className="rounded-[2rem] p-6">
            <div className="mb-6 overflow-hidden rounded-[1.5rem] border border-zinc-800 bg-zinc-950">
              <img
                src={PROFILE.photoSrc}
                alt={PROFILE.photoAlt}
                className="aspect-[4/3] w-full object-cover"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </div>
            <div className="mb-5 flex items-center gap-3">
              <Icon name="globe" className="h-6 w-6" />
              <div>
                <div className="font-medium">Current focus</div>
                <div className="text-sm text-zinc-400">AI, data security, GTM scale, platformization</div>
              </div>
            </div>
            <div className="grid gap-3 text-sm text-zinc-300">
              {focusItems.map((item) => (
                <div key={item} className="rounded-2xl bg-zinc-950/70 p-4">{item}</div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-6">
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map(([number, label]) => (
            <Card key={number} className="bg-zinc-900/40">
              <div className="text-3xl font-semibold tracking-tight">{number}</div>
              <div className="mt-2 text-sm leading-6 text-zinc-400">{label}</div>
            </Card>
          ))}
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading icon="briefcase">Where I’ve built</SectionHeading>
        <div className="grid gap-4 md:grid-cols-3">
          {workItems.map(([title, desc]) => (
            <Card key={title}>
              <h3 className="mb-3 text-xl font-semibold">{title}</h3>
              <p className="leading-7 text-zinc-400">{desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="advisory" className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading icon="shield">How I help</SectionHeading>
        <div className="grid gap-4 md:grid-cols-2">
          {advisoryItems.map(([title, desc]) => (
            <Card key={title} className="bg-zinc-900/50">
              <h3 className="mb-2 text-xl font-semibold">{title}</h3>
              <p className="leading-7 text-zinc-400">{desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="travel" className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading icon="network">Travel globe</SectionHeading>
        <div className="rounded-[2rem] border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 shadow-2xl md:p-10">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">Personal project</p>
              <h3 className="text-3xl font-semibold tracking-tight">A map of places, flights, and memories.</h3>
              <p className="mt-4 leading-8 text-zinc-400">
                The travel globe is hosted separately today. In production, it can live at nitinnagpal.com/travel or be converted into a local component inside this Next.js site.
              </p>
              <div className="mt-6">
                <SecondaryButton href="https://nitinnagpal-rgb.github.io/travel-globe/#/">
                  Open travel globe <Icon name="arrow" className="ml-2 h-4 w-4" />
                </SecondaryButton>
              </div>
            </div>
            <div className="relative min-h-[280px] overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950">
              <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-700 bg-zinc-900 shadow-2xl" />
              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-zinc-700" />
              <div className="absolute left-[25%] top-[35%] h-2 w-2 rounded-full bg-zinc-100" />
              <div className="absolute left-[62%] top-[42%] h-2 w-2 rounded-full bg-zinc-100" />
              <div className="absolute left-[50%] top-[60%] h-2 w-2 rounded-full bg-zinc-100" />
              <div className="absolute bottom-5 left-5 text-xs uppercase tracking-[0.2em] text-zinc-600">Travel Globe Preview</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900/70 p-8 md:p-10">
          <Icon name="mail" className="mb-5 h-6 w-6 text-zinc-400" />
          <h2 className="text-3xl font-semibold tracking-tight">Let’s connect</h2>
          <p className="mt-4 max-w-2xl leading-8 text-zinc-300">
            I’m interested in product leadership, advisory, and consulting opportunities where product, GTM, and platform strategy need to come together.
          </p>
          <a href={mailto} className="mt-6 inline-flex items-center text-zinc-100 hover:text-zinc-300">
            {PROFILE.email} <Icon name="arrow" className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}

export function validateSiteData() {
  return {
    hasProfile: Boolean(PROFILE.name && PROFILE.email && PROFILE.headline),
    workItemsCount: workItems.length,
    advisoryItemsCount: advisoryItems.length,
    focusItemsCount: focusItems.length,
    statsCount: stats.length,
    hasRequiredSections:
      workItems.length === 3 &&
      advisoryItems.length === 4 &&
      focusItems.length === 3 &&
      stats.length === 3,
  };
}
