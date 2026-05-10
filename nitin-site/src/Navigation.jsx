import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navigation({ theme, toggleTheme, navSolid }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl ${
      navSolid ? "bg-zinc-950/90 border-b border-zinc-800 shadow-xl shadow-black/20" : "bg-zinc-950/10"
    }`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 md:px-8">
        <Link to="/" className="font-medium tracking-tight">
          <h1 className="text-3xl md:text-5xl font-semibold text-zinc-100">
            <span
              className="text-cyan-400"
              style={{ textShadow: "0 0 4px rgba(34,211,238,0.8), 0 0 18px rgba(34,211,238,0.5)" }}
            >
              Nitin Nagpal
            </span>
          </h1>
        </Link>

        <div className={`hidden gap-8 text-md md:flex ${theme === "dark" ? "text-white" : "text-zinc-900"}`}>
          <Link to="/" className="hover:text-cyan-400 transition">Home</Link>
          <a href="/#about" className="hover:text-cyan-400 transition">About</a>
          <a href="/#experience" className="hover:text-cyan-400 transition">Experience</a>
          <a href="/#advisory" className="hover:text-cyan-400 transition">Advisory</a>
          <Link to="/blogs" className="hover:text-cyan-400 transition">Blogs and Thoughts</Link>
          <a href="/#travels" className="hover:text-cyan-400 transition">Travels</a>
          <a href="/#contact" className="hover:text-cyan-400 transition">Contact</a>

          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-zinc-400 bg-zinc-900/10 text-zinc-200 transition hover:bg-zinc-500/20"
          >
            {theme === "dark" ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-zinc-200">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414m12.728 0l-1.414-1.414M7.05 7.05L5.636 5.636M12 7a5 5 0 100 10 5 5 0 000-10z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-zinc-900">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3c.05 0 .1 0 .15 0a7 7 0 109.64 9.79z" />
              </svg>
            )}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/60 text-zinc-200">
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
          >
            {mobileNavOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <div className={`${mobileNavOpen ? "block" : "hidden"} md:hidden border-t border-zinc-800 bg-zinc-950/95 px-4 py-4`}>
        <div className="space-y-3">
          <Link to="/" onClick={() => setMobileNavOpen(false)} className="block text-zinc-200 hover:text-cyan-400 transition">Home</Link>
          <a href="/#about" onClick={() => setMobileNavOpen(false)} className="block text-zinc-200 hover:text-cyan-400 transition">About</a>
          <a href="/#experience" onClick={() => setMobileNavOpen(false)} className="block text-zinc-200 hover:text-cyan-400 transition">Experience</a>
          <a href="/#advisory" onClick={() => setMobileNavOpen(false)} className="block text-zinc-200 hover:text-cyan-400 transition">Advisory</a>
          <Link to="/blogs" onClick={() => setMobileNavOpen(false)} className="block text-zinc-200 hover:text-cyan-400 transition">Blogs and Thoughts</Link>
          <a href="/#travels" onClick={() => setMobileNavOpen(false)} className="block text-zinc-200 hover:text-cyan-400 transition">Travels</a>
          <a href="/#contact" onClick={() => setMobileNavOpen(false)} className="block text-zinc-200 hover:text-cyan-400 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}