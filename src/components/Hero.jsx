import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="about" className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden" aria-label="Hero section">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(157,0,255,0.25),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(0,217,255,0.20),transparent_60%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-emerald-300 drop-shadow-[0_0_20px_rgba(0,217,255,0.35)]"
        >
          Futuristic Front‑End Engineer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-4 max-w-2xl mx-auto text-white/80"
        >
          Building high‑performance, immersive web experiences with React, TypeScript, and delightful motion.
        </motion.p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="pointer-events-auto inline-flex items-center gap-2 rounded-xl border border-cyan-400/50 bg-cyan-400/10 px-5 py-3 text-cyan-200 shadow-[0_0_20px_rgba(0,217,255,0.25)] hover:bg-cyan-400/20 transition"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="pointer-events-auto inline-flex items-center gap-2 rounded-xl border border-purple-400/50 bg-purple-400/10 px-5 py-3 text-purple-200 shadow-[0_0_20px_rgba(157,0,255,0.25)] hover:bg-purple-400/20 transition"
          >
            Get in Touch
          </motion.a>
        </div>
      </div>
    </section>
  );
}
