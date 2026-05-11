import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function SunIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414m12.728 0l-1.414-1.414M7.05 7.05L5.636 5.636M12 7a5 5 0 100 10 5 5 0 000-10z"
      />
    </svg>
  );
}

function MoonIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 12.79A9 9 0 1111.21 3c.05 0 .1 0 .15 0a7 7 0 109.64 9.79z"
      />
    </svg>
  );
}

function MenuIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function Navigation({ theme, toggleTheme, navSolid }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const navTextClass = theme === "dark" ? "text-white" : "text-zinc-900";
  const iconTextClass = theme === "dark" ? "text-zinc-200" : "text-zinc-900";
  const mobileLinkClass = `block transition ${
    theme === "dark" ? "text-zinc-100 hover:text-cyan-400" : "text-zinc-900 hover:text-cyan-500"
  }`;

  const ThemeIcon = theme === "dark" ? SunIcon : MoonIcon;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl ${
        navSolid
          ? "bg-zinc-950/90 border-b border-zinc-800 shadow-xl shadow-black/20"
          : "bg-zinc-950/10"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 md:px-8">
        <Link to="/" className="font-medium tracking-tight" onClick={() => setMobileNavOpen(false)}>
          <h1 className="text-4xl md:text-4xl font-semibold text-zinc-100">
            <span
              className="text-cyan-400"
              style={{
                textShadow: "0 0 1px rgba(36, 42, 42, 0.8), 0 0 18px rgba(34,211,238,0.5)",
              }}
            >
              Nitin Nagpal
            </span>
          </h1>
        </Link>

        {/* Desktop navigation */}
        <div className={`hidden items-center gap-8 text-md md:flex ${navTextClass}`}>
          {isHomePage ? (
            <>
              <a href="#about" className="hover:text-cyan-400 transition">About</a>
              <a href="#experience" className="hover:text-cyan-400 transition">Experience</a>
              <a href="#advisory" className="hover:text-cyan-400 transition">Advisory</a>
              <Link to="/blogs" className="hover:text-cyan-400 transition">Blogs and Thoughts</Link>
              <a href="#travels" className="hover:text-cyan-400 transition">Travels</a>
              <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
            </>
          ) : (
            <Link to="/" className="hover:text-cyan-400 transition">Home</Link>
          )}

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className={`inline-flex h-6 w-6 items-center justify-center rounded-full border border-zinc-400 bg-zinc-900/10 transition hover:bg-zinc-500/20 ${iconTextClass}`}
          >
            <ThemeIcon className="h-4 w-4" />
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/60 ${iconTextClass}`}
          >
            <ThemeIcon className="h-4 w-4" />
          </button>

          {isHomePage ? (
            <button
              type="button"
              onClick={() => setMobileNavOpen((prev) => !prev)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/60 text-zinc-200"
              aria-expanded={mobileNavOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileNavOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          ) : (
            <Link
              to="/"
              className={`rounded-full border border-zinc-700 bg-zinc-900/60 px-4 py-2 text-sm transition ${
                theme === "dark" ? "text-zinc-100 hover:text-cyan-400" : "text-zinc-900 hover:text-cyan-500"
              }`}
            >
              Home
            </Link>
          )}
        </div>
      </div>

      {/* Mobile menu only appears on homepage */}
      {isHomePage && (
        <div
          className={`${
            mobileNavOpen ? "block" : "hidden"
          } md:hidden border-t border-zinc-800 bg-zinc-950/95 px-4 py-4`}
        >
          <div className="space-y-3">
            <a href="#about" onClick={() => setMobileNavOpen(false)} className={mobileLinkClass}>About</a>
            <a href="#experience" onClick={() => setMobileNavOpen(false)} className={mobileLinkClass}>Experience</a>
            <a href="#advisory" onClick={() => setMobileNavOpen(false)} className={mobileLinkClass}>Advisory</a>
            <Link to="/blogs" onClick={() => setMobileNavOpen(false)} className={mobileLinkClass}>Blogs and Thoughts</Link>
            <a href="#travels" onClick={() => setMobileNavOpen(false)} className={mobileLinkClass}>Travels</a>
            <a href="#contact" onClick={() => setMobileNavOpen(false)} className={mobileLinkClass}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
