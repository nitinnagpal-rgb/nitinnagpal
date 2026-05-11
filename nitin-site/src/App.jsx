import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Blogs from "./Blogs";
import GBES_blog from "./GBES_blog";
import Navigation from "./Navigation";


const experience = [
  {
    company: "Relyance AI",
    role: "Chief Product Officer",
    period: "2025 - Present",
    text: "Built AI-native data security, privacy, and governance platform strategy across product, GTM, pricing, and analyst positioning.",
    logo: "/assets/RelyanceAI.png",
  },
  {
    company: "Druva",
    role: "SVP / GM - Products and GTM",
    period: "2022 - 2025",
    text: "Scaled cloud data protection platform and built MSP and cloud marketplace growth motions.",
    logo: "/assets/Druva.png",
  },
  {
    company: "Rubrik - IPO",
    role: "VP/GM Service Provider Business Unit",
    period: "2018 - 2022",
    text: "Led Service Provider business and helped expand the platform into enterprise and MSP ecosystems.",
    logo: "/assets/Rubrik.png",
  },
  {
    company: "Rubrik - IPO",
    role: "Director - Product Management",
    period: "2017 - 2018",
    text: "Led product strategy for Rubrik’s cloud data management platform and early SaaS offerings.",
    logo: "/assets/Rubrik.png",
  },
  {
    company: "Pure Storage (Everpure) - IPO",
    role: "Founding Product Manager",
    period: "2013 - 2017",
    text: "First product leader at Pure Storage, responsible for product strategy and positioning of the flagship FlashArray platform during early hyper-growth.",
    logo: "/assets/purestorage.png",
  },
  {
    company: "NetApp",
    role: "Sr. Product Manager",
    period: "2012 - 2013",
    text: "Managed the strategic roadmap for next generation storage file system to target the shifting data center needs for *aaS environments.",
    logo: "/assets/NetApp.png",
  },
  {
    company: "NetApp",
    role: "Engineering Manager - Filesystems / Lead Engineer",
    period: "2007 - 2012",
    text: "Managed highly skilled global engineering team for new product design, development and product quality.",
    logo: "/assets/NetApp.png",
  },
  {
    company: "Decru (Acquired by NetApp)",
    role: "Sr./Lead Engineer",
    period: "2005 - 2007",
    text: "Led engineering team for Decru’s FC/SCSI appliance and data encryption software",
    logo: "/assets/NetApp.png",
  }
];

const advisoryRoles = [
  {
    company: "Vector Capital",
    summary: "Product and commercial due diligence, pricing transformation, and growth strategy for enterprise SaaS businesses.",
    period: "Advisory",
    tags: ["Due diligence", "Pricing", "SaaS growth"],
  },
  {
    company: "Box",
    summary: "Strategic advisor on enterprise platform strategy, partnerships, and go-to-market initiatives.",
    period: "Consulting",
    tags: ["Platform strategy", "Partnerships", "GTM"],
  },
  {
    company: "Safe Security",
    summary: "Advisor on product positioning, enterprise security strategy, and market expansion initiatives.",
    period: "Advisory",
    tags: ["Product positioning", "Security strategy", "Market expansion"],
  },
  {
    company: "Hytrust",
    summary: "Consultant advising on cloud security business strategy, market analysis, channel partnerships, customer engagement, and pricing models for securing virtualized workloads and cloud applications..",
    period: "Consulting",
    tags: ["Product positioning", "Security strategy", "Market expansion"],
  },
];

const focusAreas = [
  "AI Security & Governance",
  "Data Security Platforms",
  "Product-led GTM",
  "Pricing & Packaging",
  "Platform Strategy",
  "Marketplace & MSP Growth",
];

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

export default function App() {
  const [showAllExperience, setShowAllExperience] = useState(false);
  const [showAllThoughts, setShowAllThoughts] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitStatus, setSubmitStatus] = useState(null);
  const [theme, setTheme] = useState("dark");
  const [navSolid, setNavSolid] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const contactEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark" || storedTheme === "light") {
      setTheme(storedTheme);
    } else if (window.matchMedia) {
      setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setNavSolid(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  const displayedExperience = showAllExperience ? experience : experience.slice(0, 4);
  const displayedThoughtLeadership = showAllThoughts ? thoughtLeadership : thoughtLeadership.slice(0, 4);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (contactEndpoint) {
      try {
        const response = await fetch(contactEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }

        setSubmitStatus({ type: "success", message: "Message sent successfully." });
        setFormData({ name: "", email: "", message: "" });
      } catch (error) {
        setSubmitStatus({
          type: "error",
          message:
            "Unable to send message right now. Please email nitin.nagpal@gmail.com directly.",
        });
      }

      return;
    }

    const mailtoLink = `mailto:nitin.nagpal@gmail.com?subject=Message from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setFormData({ name: "", email: "", message: "" });
  };

  const homeContent = (
    <main className="min-h-screen bg-zinc-900 text-white">

      {/* NAV */}
      
{/* NAV */}
<Navigation theme={theme} toggleTheme={toggleTheme} navSolid={navSolid} simpleNav={false}/>

{/* <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl ${navSolid ? "bg-zinc-950/90 border-b border-zinc-800 shadow-xl shadow-black/20" : "bg-zinc-950/10"}`}>
  <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 md:px-8">
    <div className="font-medium tracking-tight">
      <h1 className="text-4xl md:text-5xl font-semibold text-zinc-100">
        <span className="text-cyan-400" style={{ textShadow: "0 0 4px rgba(34,211,238,0.8), 0 0 18px rgba(34,211,238,0.5)" }}>
          Nitin Nagpal
        </span>
      </h1>
    </div>

    <div className={`hidden gap-8 text-md md:flex ${theme === "dark" ? "text-white" : "text-zinc-900"}`} >
      <a href="#about" className="hover:text-cyan-400 transition">About</a>
      <a href="#experience" className="hover:text-cyan-400 transition">Experience</a>
      <a href="#advisory" className="hover:text-cyan-400 transition">Advisory</a>
      <Link to="/blogs" className="hover:text-cyan-400 transition">Blogs and Thoughts</Link>
      <a href="#travels" className="hover:text-cyan-400 transition">Travels</a>
      <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
      <button type="button" onClick={toggleTheme} className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-zinc-400 bg-zinc-900/10 text-zinc-200">
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

    <div className="flex items-center gap-3 md:hidden">
      <button
        type="button"
        onClick={toggleTheme}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/60 text-zinc-200"
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

      <button
        type="button"
        onClick={() => setMobileNavOpen((prev) => !prev)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/60 text-zinc-200"
        aria-expanded={mobileNavOpen}
        aria-label="Toggle navigation menu"
      >
        {mobileNavOpen ? "✕" : "☰"}
      </button>
    </div>
  </div>

  <div className={`${mobileNavOpen ? "block" : "hidden"} md:hidden border-t border-zinc-800 bg-zinc-950/95 px-4 py-4`}>
    <div className="space-y-3" style={{ color: theme === "dark" ? "white" : "rgb(31, 41, 55)" }}>
      <a href="#about" onClick={() => setMobileNavOpen(false)} className="block hover:text-white transition">About</a>
      <a href="#experience" onClick={() => setMobileNavOpen(false)} className="block hover:text-white transition">Experience</a>
      <a href="#advisory" onClick={() => setMobileNavOpen(false)} className="block hover:text-white transition">Advisory</a>
      <Link to="/blogs" onClick={() => setMobileNavOpen(false)} className="block hover:text-white transition">Blogs and Thoughts</Link>
      <a href="#travels" onClick={() => setMobileNavOpen(false)} className="block hover:text-white transition">Travels</a>
      <a href="#contact" onClick={() => setMobileNavOpen(false)} className="block hover:text-white transition">Contact</a>
    </div>
  </div>  
</nav> */}

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-8 pt-20 pb-24 md:pt-32 grid md:grid-cols-2 gap-4 items-center">
        <div className="flex justify-center md:justify-start">
          <img
            src="/assets/nitin.jpg"
            alt="Nitin Nagpal"
            className="w-full max-w-[420px] h-auto rounded-3xl object-cover shadow-2xl"
          />
        </div>

        <div>
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
            GTM • Product • Monetization 
          </p>

          <h1 className="max-w-2xl text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-zinc-100">
            Building and scaling enterprise platforms through product innovation, GTM strategy, and monetization.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            <span className="text-cyan-400" style={{ color: '#22d3ee', }}>GM / CPO | Leader in Product, Go-To-Market Strategy, and Monetization | Specialist in Enterprise SaaS, Artificial Intelligence, and Cloud Platforms.</span>
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="https://www.linkedin.com/in/nitinnagpal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-white transition"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://nitinnagpal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-white transition"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0 9c-1.657 0-3-4.03-3-9s1.343-9 3-9m0 18c1.657 0 3-4.03 3-9s-1.343-9-3-9m-9 9a9 9 0 019-9m-9 9c0 1.657 4.03 3 9 3m9-9c0-1.657-4.03-3-9-3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto max-w-7xl border-t border-cyan-900 px-8 py-10 pt-20"
      >
       <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mt-6 text-2xl md:text-4xl font-semibold tracking-tight text-white">
            About Me
          </h2>
        </div>

        <div>
          <p className="text-xl leading-[1.7] text-zinc-300">
           I’m a GTM, marketing strategy and product executive with 25+ years of experience helping enterprise software companies scale from products to platforms
          <br /><br />My background spans both 0→1 startups and large-scale platform growth — from helping build companies like Relyance AI, Rubrik (IPO), Pure Storage (IPO), and Decru (acquired by NetApp), to driving platformization, monetization, and new growth initiatives at Druva and NetApp.
          <br /><br />What differentiates my approach is the combination of engineering depth, product leadership, GTM strategy, and business ownership. I’ve operated across product, pricing, partnerships, sales, and P&L leadership — helping companies translate strong technology into scalable enterprise platforms and durable growth businesses.
          <br /><br />Outside of work, I’m passionate about travel, cultures, and global experiences. Exploring new places continues to shape how I think about people, innovation, and leadership.
          </p>


          {/* ACHIEVEMENTS & IMPACT */}
          <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-950/60 p-6 md:p-8">
            <h3 className="text-xl font-semibold text-cyan-300 mb-8">
              Achievements & Impact
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
              <div className="flex flex-col items-center justify-center text-center h-full min-h-32">
                <p className="text-4xl md:text-2xl font-bold text-cyan-400">107%</p>
                <p className="mt-3 text-sm text-zinc-400">YoY Growth — Rubrik Service Provider GTM</p>
              </div>
              <div className="flex flex-col items-center justify-center text-center h-full min-h-32">
                <p className="text-4xl md:text-2xl font-bold text-cyan-400">0.1% → 33%</p>
                <p className="mt-3 text-sm text-zinc-400">Bookings Growth at Rubrik</p>
              </div>
              <div className="flex flex-col items-center justify-center text-center h-full min-h-32">
                <p className="text-4xl md:text-2xl font-bold text-cyan-400">$250M+</p>
                <p className="mt-3 text-sm text-zinc-400">ARR at Druva</p>
              </div>
              <div className="flex flex-col items-center justify-center text-center h-full min-h-32">
                <p className="text-4xl md:text-2xl font-bold text-cyan-400">2</p>
                <p className="mt-3 text-sm text-zinc-400">U.S. Patents in Data Protection & Flash Storage</p>
              </div>
            </div>
          </div>

          {/* KEY MILESTONES */}
          <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-950/60 p-8 md:p-10">
            <h3 className="text-xl font-semibold text-cyan-300 mb-6">
              Key Milestones
            </h3>
            <ul className="space-y-4 text-base text-zinc-300">
              
              <li className="flex gap-3">
                <span className="text-cyan-400 flex-shrink-0">→</span>
                <span>Launched Lyo at Relyance AI — industry’s first autonomous data defense engineer</span>
              </li>

              <li className="flex gap-3">
                <span className="text-cyan-400 flex-shrink-0">→</span>
                <span>Expanded Relyance AI’s platform strategy into AI Security, AI Governance, and Dynamic DSPM</span>
              </li>

              <li className="flex gap-3">
                <span className="text-cyan-400 flex-shrink-0">→</span>
                <span>Achieved Gold award at the 2026 Globee Cybersecurity Awards (Relyance AI)</span>
              </li>

              <li className="flex gap-3">
                <span className="text-cyan-400 flex-shrink-0">→</span>
                <span>Led Druva to Gartner MQ Leader recognition for Enterprise Backup & Recovery</span>
              </li>

              <li className="flex gap-3">
                <span className="text-cyan-400 flex-shrink-0">→</span>
                <span>Built Rubrik’s service provider business from near-zero into a major revenue growth engine</span>
              </li>

              <li className="flex gap-3">
                <span className="text-cyan-400 flex-shrink-0">→</span>
                <span>Helped scale Pure Storage from hyper-growth stage through IPO and enterprise expansion</span>
              </li>

              <li className="flex gap-3">
                <span className="text-cyan-400 flex-shrink-0">→</span>
                <span>Launched FlashRecover at Pure Storage with 100% revenue growth in its first year</span>
              </li>

              <li className="flex gap-3">
                <span className="text-cyan-400 flex-shrink-0">→</span>
                <span>Held engineering, product, GTM, and P&L leadership roles across startups, IPOs, and acquisitions</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
     <section
  id="experience"
  className="mx-auto max-w-7xl border-t border-cyan-900 px-4 py-10 pt-20 md:px-8"
>
  <div className="mx-auto mb-10 max-w-3xl text-center md:mb-16">
    <h2 className="mt-6 text-2xl font-semibold tracking-tight text-white md:text-4xl">
      Professional Experience
    </h2>
    <p className="mt-4 text-base leading-7 text-zinc-400 md:text-lg md:leading-8">
      A timeline of my professional journey and key achievements.
    </p>
  </div>

  <div
    className={`relative mx-auto max-w-6xl rounded-3xl border border-zinc-800 px-4 py-8 md:px-6 md:py-12
      ${theme === "dark" ? "bg-zinc-950/50 text-zinc-300" : "bg-zinc-200 text-zinc-900"}
    `}
  >
    <div className="absolute left-6 top-8 bottom-8 w-px bg-zinc-800 md:left-1/2 md:-translate-x-1/2" />

    <div className="space-y-8 md:space-y-16">
      {displayedExperience.map((item, index) => {
        const isLeft = index % 2 === 0;
        const year = item.period.split(" - ")[0];

        return (
          <div
            key={`${item.company}-${item.period}`}
            className={`relative flex pl-10 md:pl-0 ${isLeft ? "md:justify-start" : "md:justify-end"}`}
          >
            <div className="absolute left-1 top-1 flex flex-col items-center md:left-1/2 md:-translate-x-1/2">
              <div className="h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_0_6px_rgba(34,211,238,0.1)]" />
              <span className="mt-2 text-[10px] uppercase tracking-[0.25em] text-cyan-300 md:text-xs">
                {year}
              </span>
            </div>

            <div className={`w-full md:w-1/2 ${isLeft ? "md:pr-8" : "md:pl-8"}`}>
              <div
                className={`rounded-3xl border border-zinc-800 p-5 text-left shadow-xl shadow-black/20 md:p-6
                  ${theme === "dark" ? "bg-zinc-900/95" : "bg-white/90"}
                `}
              >
                <div className="mb-4 flex items-start gap-4">
                  <img
                    src={item.logo}
                    alt={item.company}
                    className="h-11 w-11 flex-shrink-0 rounded-2xl border border-zinc-800 bg-white p-1 object-contain md:h-12 md:w-12"
                  />

                  <div className="min-w-0 flex-1">
                    <h3 className={`text-base font-semibold leading-6 md:text-lg ${theme === "dark" ? "text-white" : "text-zinc-900"}`}>
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-400">{item.company}</p>
                    <p className="mt-1 text-xs text-zinc-500 md:text-sm">{item.period}</p>
                  </div>
                </div>

                <p className={`text-sm leading-6 ${theme === "dark" ? "text-zinc-300" : "text-zinc-700"}`}>
                  {item.text}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>

    <div className="mt-10 flex flex-col items-center gap-4 text-center">
      {experience.length > 3 && (
        <button
          type="button"
          onClick={() => setShowAllExperience((prev) => !prev)}
          className="rounded-full border border-cyan-400 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20"
        >
          {showAllExperience ? "Show less" : "View All Experiences"}
        </button>
      )}

      {!showAllExperience && (
        <p className="text-sm text-zinc-500">
          Showing recent 4 roles. Expand to reveal the full timeline.
        </p>
      )}
    </div>
  </div>
</section>

      {/* ADVISORY */}
      <section
        id="advisory"
        className="mx-auto max-w-7xl border-t border-cyan-900 px-8 py-10 pt-20"
      >
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mt-6 text-2xl md:text-4xl font-semibold tracking-tight text-white">
            Advisory & Consulting 
          </h2>
          <p className="mt-4 text-base md:text-lg leading-8 text-zinc-400">
            Selected advisory engagements where I provide product, GTM, pricing, and platform strategy counsel.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {advisoryRoles.map((item) => (
            <div key={item.company} className="group rounded-3xl border border-zinc-800 bg-zinc-950/95 p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-zinc-900">
              <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-cyan-200">
                    {item.period}
                  </span>
                  <h4 className="mt-4 text-lg font-semibold text-cyan-900">{item.company}</h4>
                </div>
                
              </div>
              <p className="text-sm leading-6 text-zinc-300">{item.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full border border-zinc-800 px-3 py-1 text-[11px] uppercase tracking-[0.25em]
                      ${theme === "dark" ? "bg-zinc-950/50 text-zinc-300" : "bg-zinc-200 text-zinc-900"}
                    `}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THOUGHT LEADERSHIP 
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

        {/* SPEAKING & MEDIA 
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
      </section>*/}

(      {/* FOCUS 
      <section
        id="focus"
        className="mx-auto max-w-7xl border-t border-cyan-900 px-8 py-10"
      >
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Focus Areas
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          {focusAreas.map((item) => (
            <div
              key={item}
              className="rounded-full border border-zinc-800 px-5 py-3 text-sm text-zinc-300"
            >
              {item}
            </div>
          ))}
        </div>
      </section>)*/}


      {/* TRAVELS */}
      <section
        id="travels"
        className="mx-auto max-w-7xl border-t border-cyan-900 px-8 py-10 pt-20"
      >
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mt-6 text-2xl md:text-4xl font-semibold tracking-tight text-white">
            My Travels
          </h2>
          <p className="mt-4 text-base md:text-lg leading-8 text-zinc-400">
          An avid traveler who has explored 6 continents, 100+ cities, 400+ flights across and more than 1M miles tracked since 2017.
          </p>
        </div>

        <div className="flex justify-center">
          <div
            style={{
              position: 'relative',
              width: '90%',
              paddingBottom: '75%',
              overflow: 'hidden',
              borderRadius: '12px'
            }}
          >
            <iframe
              src="https://nitinnagpal-rgb.github.io/travel-globe/#/"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none'
              }}
              loading="lazy"
              title="Nitin's Travel Globe"
              allow="fullscreen"
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
     <section
        id="contact"
        className="mx-auto max-w-7xl border-t border-cyan-900 px-8 py-10 pt-20"
      >
        <div className="mb-16 text-center">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-white">
            Get in <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-zinc-300">
            Have a project in mind or want to discuss opportunities? Let's talk!
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {/* SEND MESSAGE FORM */}
          <div 
          className={`rounded-3xl border border-zinc-800 px-3 py-1 text-[11px] uppercase tracking-[0.25em] p-8 md:p-10 flex flex-col justify-top
                      ${theme === "dark" ? "bg-zinc-950/50 text-zinc-300" : "bg-zinc-200 text-zinc-900"}
                    `}
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Send a Message</h3>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-900/50 px-4 py-3 text-white placeholder-zinc-500 transition focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-900/50 px-4 py-3 text-white placeholder-zinc-500 transition focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                  rows="5"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-900/50 px-4 py-3 text-white placeholder-zinc-500 transition focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-cyan-400 px-6 py-3 text-center font-semibold text-black transition hover:bg-cyan-300"
              >
                Send Message
              </button>
            </form>
            {submitStatus && (
              <p
                className={`mt-4 text-sm ${
                  submitStatus.type === "success"
                    ? "text-emerald-300"
                    : "text-rose-300"
                }`}
              >
                {submitStatus.message}
              </p>
            )}
            {!contactEndpoint && (
              <p className="mt-4 text-sm text-zinc-500">
                No backend endpoint configured yet. The form will fall back to opening your email client.
              </p>
            )}
          </div>

          {/* CONTACT INFORMATION */}
          <div 
          className={`rounded-3xl border border-zinc-800 px-3 py-1 text-[11px] uppercase tracking-[0.25em] p-8 md:p-10 flex flex-col justify-top
                      ${theme === "dark" ? "bg-zinc-950/50 text-zinc-300" : "bg-zinc-200 text-zinc-900"}
                    `}
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>
            
            <div className="space-y-10">
              <div>
                <p className="text-sm font-medium text-zinc-400 mb-2">Email</p>
                <a
                  href="mailto:nitin.nagpal@gmail.com"
                  className="text-lg text-cyan-400 transition hover:text-cyan-300"
                >
                  nitin.nagpal@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm font-medium text-zinc-400 mb-2">Location</p>
                <p className="text-lg text-white">San Francisco Bay Area, CA</p>
              </div>

              <div>
                <p className="text-sm font-medium text-zinc-400 mb-4">Connect with me</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/nitinnagpal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900/50 text-zinc-300 transition hover:border-cyan-400 hover:text-cyan-400"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900/50 text-zinc-300 transition hover:border-cyan-400 hover:text-cyan-400"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9.997-10.607z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.nitinnagpal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900/50 text-zinc-300 transition hover:border-cyan-400 hover:text-cyan-400"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0 9c-1.657 0-3-4.03-3-9s1.343-9 3-9m0 18c1.657 0 3-4.03 3-9s-1.343-9-3-9m-9 9a9 9 0 019-9m-9 9c0 1.657 4.03 3 9 3m9-9c0-1.657-4.03-3-9-3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={homeContent} />
        <Route path="/blogs" element={<Blogs theme={theme} toggleTheme={toggleTheme} navSolid={navSolid} />} />
        <Route path="/Blogs" element={<Blogs theme={theme} toggleTheme={toggleTheme} navSolid={navSolid} />} />
        <Route path="/GBES_blog" element={<GBES_blog theme={theme} toggleTheme={toggleTheme} navSolid={navSolid} />} />
      </Routes>
    </BrowserRouter>
  );
}