import { LinkedinIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <p className="text-sm text-mist-400">
          © 2026 Brice Roux Formations. Tous droits réservés.
        </p>
        <a
          href="https://www.linkedin.com/in/brice-roux-formations/"
          target="_blank"
          rel="noreferrer"
          className="text-mist-400 hover:text-lime-400 transition-colors"
          aria-label="LinkedIn"
        >
          <LinkedinIcon className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
}
