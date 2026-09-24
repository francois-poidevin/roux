import { useEffect, useState } from "react";
import { Menu, X, Dna } from "lucide-react";
import { nav } from "../data/content";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-ink-950/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-3 font-display font-semibold text-lg text-white"
        >
          <span className="w-10 h-10 rounded-xl bg-lime-400 text-ink-950 flex items-center justify-center shadow-[0_0_25px_-5px_theme(colors.lime.400)]">
            <Dna className="w-5 h-5" strokeWidth={2.5} />
          </span>
          Brice Roux
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-mist-300">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-lime-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-lime-400 hover:bg-lime-300 text-ink-950 px-5 py-2.5 rounded-full font-semibold transition-colors"
          >
            Contact
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white p-2"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-ink-950/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-mist-300 hover:text-lime-400 font-medium py-1"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block text-center bg-lime-400 text-ink-950 py-3 rounded-xl font-semibold"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
