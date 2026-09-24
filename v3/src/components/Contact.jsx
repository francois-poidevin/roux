import { LinkedinIcon } from "./icons";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6 text-center">
      <Reveal className="max-w-3xl mx-auto">
        <h2 className="font-display font-semibold text-3xl md:text-4xl text-white mb-4">
          Contactez Brice Roux
        </h2>
        <div className="w-16 h-1 bg-lime-400 mx-auto rounded-full mb-6" />
        <p className="text-lg md:text-xl text-mist-300 mb-10">
          Vous pilotez un laboratoire, une plateforme technologique ou une
          équipe R&D ? Échangeons sur vos besoins.
        </p>
        <a
          href="https://www.linkedin.com/in/brice-roux-formations/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 bg-lime-400 hover:bg-lime-300 text-ink-950 font-semibold px-8 py-4 rounded-full transition-colors text-lg"
        >
          <LinkedinIcon className="w-5 h-5" /> Contacter sur LinkedIn
        </a>
      </Reveal>
    </section>
  );
}
