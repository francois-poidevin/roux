import { BadgeCheck, Mail, ArrowUpRight, Microscope, ChartPie, MapPin } from "lucide-react";
import { LinkedinIcon } from "./icons";
import { highlights } from "../data/content";

const iconMap = { Microscope, ChartPie, MapPin };

export default function Hero() {
  return (
    <header
      id="top"
      className="relative min-h-screen flex items-center pt-32 pb-20 px-6"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="inline-flex items-center gap-2.5 bg-ink-900/80 backdrop-blur-md border border-white/10 text-mist-100 text-xs md:text-sm font-medium px-4 py-2 rounded-full mb-8">
          <BadgeCheck className="w-4 h-4 text-lime-400" />
          PhD • Formateur & Consultant Indépendant
        </div>

        <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-7xl leading-[1.05] tracking-tight text-white">
          Formations de pointe
          <br />
          en{" "}
          <span className="text-lime-400">Biologie Moléculaire</span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-mist-300 max-w-2xl leading-relaxed">
          Accompagnement opérationnel et formations sur-mesure pour laboratoires
          de recherche, R&D, plateformes technologiques, LBM et CROs. Ancrées
          dans la réalité de terrain.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-lime-400 hover:bg-lime-300 text-ink-950 font-semibold px-7 py-4 rounded-full transition-colors"
          >
            <Mail className="w-4 h-4" /> Discuter de votre projet
          </a>
          <a
            href="https://www.linkedin.com/in/brice-roux-formations/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white font-semibold px-7 py-4 rounded-full transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" /> Profil LinkedIn
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-16 grid sm:grid-cols-3 gap-4 max-w-3xl">
          {highlights.map((h) => {
            const Icon = iconMap[h.icon];
            return (
              <div
                key={h.title}
                className="rounded-2xl border border-white/10 bg-ink-900/80 backdrop-blur-md p-5"
              >
                <Icon className="w-5 h-5 text-lime-400 mb-3" />
                <div className="text-sm font-semibold text-white">
                  {h.title}
                </div>
                <div className="text-xs text-mist-400 mt-1">{h.text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
}
