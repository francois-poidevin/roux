import BackgroundVideo from "./components/BackgroundVideo";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Expertise from "./components/Expertise";
import Partnership from "./components/Partnership";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-lime-400 selection:text-ink-950">
      <BackgroundVideo />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Expertise />
        <Partnership />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
