import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div id="top" className="min-h-screen w-full bg-[#0A0E27] text-white selection:bg-cyan-400/30 selection:text-white">
      <Navbar />

      <main className="pt-16">
        <Hero />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-white/60">
        <p>
          © {new Date().getFullYear()} • Ruchir Hanumant Huchgol — AI Developer & Automation Engineer
        </p>
      </footer>
    </div>
  );
}

export default App;
