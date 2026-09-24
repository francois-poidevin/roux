import Reveal from "./Reveal";

export default function Partnership() {
  return (
    <section id="actualites" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-lime-400 text-ink-950 p-10 md:p-16">
            <div className="max-w-2xl relative z-10 space-y-6">
              <span className="bg-ink-950/10 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block">
                Appel à Partenariat 2027
              </span>
              <h2 className="font-display font-semibold text-3xl md:text-4xl">
                Journées de Travaux Pratiques — PCR Digitale
              </h2>
              <p className="text-ink-950/80 text-lg leading-relaxed">
                Recherche de centres, plateformes, laboratoires ou
                prestataires en <strong>région parisienne</strong> susceptibles
                d'accueillir des journées de travaux pratiques consacrées à la{" "}
                <strong>PCR digitale</strong> en 2027, dans le cadre de
                formations continues en biologie moléculaire.
              </p>
              <p className="text-ink-950/70 text-sm">
                Prestation comprenant la mise à disposition de locaux,
                d'instruments et de réactifs (modalités sur-mesure).
              </p>
              <a
                href="#contact"
                className="inline-block bg-ink-950 text-white font-semibold px-8 py-3.5 rounded-2xl hover:bg-ink-800 transition-colors"
              >
                Proposer un partenariat
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
