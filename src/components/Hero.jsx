import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="relative min-h-[92vh] w-full flex items-center justify-center overflow-hidden" aria-label="Hero section">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(157,0,255,0.18),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(0,217,255,0.18),transparent_60%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-emerald-300 drop-shadow-[0_0_20px_rgba(0,217,255,0.35)]"
        >
          Ruchir Hanumant Huchgol
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-2 text-lg md:text-xl text-white/85"
        >
          AI Developer & Automation Engineer — building intelligent, agentic systems that transform workflows.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mt-4 max-w-3xl mx-auto text-white/75"
        >
          Skilled in Generative AI, LangChain, CrewAI, n8n, and LangFlow. Focused on scalable, transparent, human‑centered AI with Python, FastAPI, and modern ML.
        </motion.p>

        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="pointer-events-auto inline-flex items-center gap-2 rounded-xl border border-cyan-400/50 bg-cyan-400/10 px-5 py-3 text-cyan-200 shadow-[0_0_20px_rgba(0,217,255,0.25)] hover:bg-cyan-400/20 transition"
          >
            Explore Work
          </motion.a>
          <motion.a
            href="mailto:ruchirhuchgol27@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="pointer-events-auto inline-flex items-center gap-2 rounded-xl border border-emerald-400/50 bg-emerald-400/10 px-5 py-3 text-emerald-200 shadow-[0_0_20px_rgba(0,255,163,0.25)] hover:bg-emerald-400/20 transition"
          >
            <Mail className="h-4 w-4" /> Email
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/ruchirhuchgol"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="pointer-events-auto inline-flex items-center gap-2 rounded-xl border border-purple-400/50 bg-purple-400/10 px-5 py-3 text-purple-200 shadow-[0_0_20px_rgba(157,0,255,0.25)] hover:bg-purple-400/20 transition"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </motion.a>
        </div>
      </div>
    </section>
  );
}
