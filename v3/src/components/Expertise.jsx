import { Cpu, Handshake, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { expertise } from "../data/content";

const iconMap = { Cpu, Handshake };

export default function Expertise() {
  return (
    <section id="expertise" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="font-display font-semibold text-3xl md:text-5xl text-white mb-4">
            Domaines d'Intervention
          </h2>
          <div className="w-16 h-1 bg-lime-400 mx-auto rounded-full mb-6" />
          <p className="text-lg text-mist-300">
            Des prestations complètes de la formation continue au conseil
            technique spécialisé.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {expertise.map((e, i) => {
            const Icon = iconMap[e.icon];
            return (
              <Reveal key={e.title} delay={i * 100}>
                <div className="h-full rounded-3xl border border-white/10 bg-ink-900/80 backdrop-blur-md p-10">
                  <div className="flex items-center gap-5 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-lime-400 text-ink-950 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {e.title}
                      </h3>
                      <p className="text-lime-400 font-medium text-sm">
                        {e.tag}
                      </p>
                    </div>
                  </div>
                  <p className="text-mist-300 leading-relaxed mb-5">
                    {e.text}
                  </p>
                  <ul className="space-y-2 text-sm text-mist-300">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-lime-400 mt-0.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
