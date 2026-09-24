import {
  Dna,
  TrendingUp,
  GitBranch,
  FlaskConical,
  ShieldCheck,
  Wrench,
  Presentation,
  Users,
} from "lucide-react";
import Reveal from "./Reveal";
import { skills } from "../data/content";

const iconMap = {
  Dna,
  TrendingUp,
  GitBranch,
  FlaskConical,
  ShieldCheck,
  Wrench,
  Presentation,
  Users,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-lime-400 text-xs font-bold uppercase tracking-wider">
            Savoir-faire & Techniques
          </span>
          <h2 className="font-display font-semibold text-3xl md:text-5xl text-white mt-2 mb-4">
            Compétences Clés
          </h2>
          <div className="w-16 h-1 bg-lime-400 mx-auto rounded-full mb-6" />
          <p className="text-lg text-mist-300">
            Ensemble des compétences scientifiques, analytiques et
            pédagogiques mobilisées lors des formations et missions de
            conseil.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <Reveal key={s.title} delay={(i % 4) * 80}>
                <div className="group h-full rounded-2xl border border-white/10 bg-ink-900/80 backdrop-blur-md hover:border-lime-400/30 hover:bg-ink-900/90 transition-all p-7">
                  <div className="w-12 h-12 rounded-xl bg-lime-400/10 text-lime-400 group-hover:bg-lime-400 group-hover:text-ink-950 flex items-center justify-center mb-5 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-mist-400 leading-relaxed">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
