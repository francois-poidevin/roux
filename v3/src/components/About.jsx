import { GraduationCap, FlaskConical, SlidersHorizontal } from "lucide-react";
import Reveal from "./Reveal";
import { aboutCards } from "../data/content";

const iconMap = { GraduationCap, FlaskConical, SlidersHorizontal };

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="font-display font-semibold text-3xl md:text-5xl text-white mb-4">
            À propos de Brice Roux
          </h2>
          <div className="w-16 h-1 bg-lime-400 mx-auto rounded-full mb-6" />
          <p className="text-lg text-mist-300 leading-relaxed">
            Docteur (PhD) en biologie moléculaire et génétique diplômé de
            l'Université Paul Sabatier (Toulouse III). Formateur et
            consultant indépendant dédié à la transmission des meilleures
            pratiques expérimentales et analytiques.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {aboutCards.map((card, i) => {
            const Icon = iconMap[card.icon];
            return (
              <Reveal key={card.title} delay={i * 100}>
                <div className="h-full rounded-3xl border border-white/10 bg-ink-900/80 backdrop-blur-md hover:bg-ink-900/90 hover:border-lime-400/30 transition-all p-8">
                  <div className="w-14 h-14 rounded-2xl bg-lime-400/10 text-lime-400 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-mist-300 leading-relaxed">{card.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
