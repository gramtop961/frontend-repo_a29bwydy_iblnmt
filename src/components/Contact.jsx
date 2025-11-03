import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,255,163,0.10),transparent_60%)]" />
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-300 drop-shadow-[0_0_15px_rgba(0,255,163,0.35)]">Contact</h2>
          <p className="mt-2 text-white/70">Reach out to collaborate or discuss intelligent automation.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
            action="#"
            method="POST"
          >
            <div className="grid grid-cols-1 gap-4">
              <label className="block">
                <span className="text-sm text-white/80">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-1 w-full rounded-lg bg-[#0A0E27]/70 border border-white/10 focus:border-cyan-400 focus:ring-0 text-white px-3 py-2 outline-none"
                />
              </label>
              <label className="block">
                <span className="text-sm text-white/80">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 w-full rounded-lg bg-[#0A0E27]/70 border border-white/10 focus:border-cyan-400 focus:ring-0 text-white px-3 py-2 outline-none"
                />
              </label>
              <label className="block">
                <span className="text-sm text-white/80">Message</span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="mt-1 w-full rounded-lg bg-[#0A0E27]/70 border border-white/10 focus:border-cyan-400 focus:ring-0 text-white px-3 py-2 outline-none"
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-400/50 bg-emerald-400/10 px-5 py-3 text-emerald-200 shadow-[0_0_20px_rgba(0,255,163,0.25)] hover:bg-emerald-400/20 transition"
              >
                <Mail className="h-4 w-4" /> Send Message
              </button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 flex flex-col items-center justify-center text-center"
          >
            <p className="text-white/80">Prefer social?</p>
            <div className="mt-4 flex items-center gap-4">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition">
                <Github className="h-5 w-5" /> GitHub
              </a>
              <a href="https://linkedin.com/in/ruchirhuchgol" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition">
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
              <a href="mailto:ruchirhuchgol27@gmail.com" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition">
                <Mail className="h-5 w-5" /> Email
              </a>
            </div>
            <div className="mt-6 text-sm text-white/60">
              Pune, India • ruchirhuchgol27@gmail.com
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
