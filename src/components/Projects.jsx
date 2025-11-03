import { motion } from 'framer-motion';

const projects = [
  // Add your real projects here. Keeping an empty example-free list to avoid placeholder content.
];

function GlitchTitle({ children }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-white relative inline-block">
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 -z-0 text-cyan-400 blur-sm opacity-60 select-none" aria-hidden>
        {children}
      </span>
    </h2>
  );
}

function ProjectCard({ title, description, tech, links }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 overflow-hidden"
    >
      <div className="pointer-events-none absolute -inset-16 opacity-0 group-hover:opacity-100 transition duration-500 bg-[conic-gradient(from_0deg,rgba(0,217,255,0.15),rgba(157,0,255,0.15),rgba(0,255,163,0.15),rgba(0,217,255,0.15))] animate-[spin_6s_linear_infinite]" />
      <div className="relative z-10">
        <h3 className="text-xl font-semibold text-cyan-200 drop-shadow-[0_0_10px_rgba(0,217,255,0.35)]">{title}</h3>
        <p className="mt-2 text-white/80">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="text-xs uppercase tracking-wide rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-200 px-3 py-1">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-4">
          {links?.live && (
            <a href={links.live} className="text-sm text-emerald-300 hover:text-emerald-200 underline underline-offset-4">Live</a>
          )}
          {links?.code && (
            <a href={links.code} className="text-sm text-purple-300 hover:text-purple-200 underline underline-offset-4">Code</a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(0,217,255,0.12),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(157,0,255,0.12),transparent_55%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <GlitchTitle>Projects</GlitchTitle>
          <p className="text-white/70 max-w-xl">
            Curate your work here. Add real project data to the component to showcase case studies with tech badges and links.
          </p>
        </div>

        {projects.length === 0 ? (
          <div className="mt-10 text-center text-white/70">
            No projects added yet.
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />)
            )}
          </div>
        )}
      </div>
    </section>
  );
}
