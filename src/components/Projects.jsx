import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const skills = {
  'AI & Automation': ['n8n', 'LangChain', 'AutoGen', 'CrewAI', 'LangFlow', 'OpenAI API', 'Workflow Optimization'],
  'Generative AI & Prompting': ['Prompt Design', 'Context Management', 'RAG Systems', 'LLM Integration (GPT-5, Claude)'],
  'Programming & Frameworks': ['Python', 'FastAPI', 'Streamlit', 'PyTorch', 'TensorFlow', 'Pandas', 'NumPy', 'REST APIs'],
  'Data & Analytics': ['Pathway', 'Power BI', 'Matplotlib', 'Data Cleaning', 'Feature Engineering'],
  'Tools & Platforms': ['Git', 'GitHub', 'Google Workspace', 'ClickUp', 'VS Code', 'Hugging Face', 'CRMs'],
  'Soft Skills': ['Analytical Thinking', 'Documentation', 'Time Management', 'Collaboration'],
};

const experience = [
  {
    title: 'Virtual Internships — AI, Data Analytics & Business Automation',
    location: 'Remote',
    period: '2023–2025',
    bullets: [
      'Designed AI-driven automation with Python and n8n for diverse scenarios.',
      'Integrated GPT-5 and Claude for data extraction, summarization, and content generation.',
      'Built REST APIs and webhooks syncing Google Sheets, CRMs, and dashboards.',
      'Implemented LangChain + CrewAI for multi-agent orchestration and workflow automation.',
      'Optimized systems and documentation, boosting efficiency by ~30%.',
    ],
  },
  {
    title: 'BCG GenAI Consulting Job Simulation — Forage',
    period: 'May 2025',
    bullets: [
      'Implemented AI-powered financial data automation and chatbot logic using Python & LangFlow.',
      'Integrated Claude for contextual reasoning and adaptive conversations.',
    ],
  },
  {
    title: 'Tata GenAI-Powered Data Analytics Simulation — Forage',
    period: 'Aug 2025',
    bullets: [
      'Performed RAG-based data storytelling with LangFlow and LangChain pipelines.',
      'Designed agentic systems for automated reporting and customer profiling.',
      'Evaluated model transparency and ethical deployment in financial analytics.',
    ],
  },
];

const projects = [
  {
    title: 'Agentic Solutions Platform',
    description:
      'Modular multi-agent AI systems enabling autonomous task delegation, reporting, and workflow management.',
    tech: ['CrewAI', 'LangChain', 'LLMs', 'Automation'],
  },
  {
    title: 'Coldmailer – Jobs at Speed',
    description:
      'AI-powered outreach automation with Python, APIs, and n8n to accelerate job-focused email campaigns.',
    tech: ['Python', 'n8n', 'APIs'],
  },
  {
    title: 'AI Image Caption Recommender',
    description:
      'Context-aware caption generator using Hugging Face models with FastAPI backend and Streamlit UI.',
    tech: ['FastAPI', 'Streamlit', 'PyTorch', 'Hugging Face'],
  },
  {
    title: 'DevSecOps Deployment Gatekeeper',
    description:
      'AI-driven CI/CD decision layer with multi-agent orchestration for secure deployment validation.',
    tech: ['CrewAI', 'LangChain', 'GPT-5', 'Claude'],
  },
  {
    title: 'Dynamic Parking Pricing System',
    description:
      'Real-time pricing using deep learning and econometric forecasting (LSTM, ARIMA) built on Pathway.',
    tech: ['Pathway', 'LSTM', 'ARIMA'],
  },
  {
    title: 'NGO Connect — AI Integration Portal',
    description:
      'AI-assisted portal for NGOs supporting data summarization, resource mapping, and compliance alerts.',
    tech: ['AI', 'Automation', 'Data'],
  },
];

function SectionTitle({ children, glow = 'cyan' }) {
  const colorMap = {
    cyan: 'text-cyan-300',
    purple: 'text-purple-300',
    emerald: 'text-emerald-300',
  };
  const shadowMap = {
    cyan: 'drop-shadow-[0_0_12px_rgba(0,217,255,0.35)]',
    purple: 'drop-shadow-[0_0_12px_rgba(157,0,255,0.35)]',
    emerald: 'drop-shadow-[0_0_12px_rgba(0,255,163,0.35)]',
  };
  return (
    <h2 className={`text-3xl md:text-4xl font-bold ${colorMap[glow]} ${shadowMap[glow]} tracking-wide`}>{children}</h2>
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
      <div className="pointer-events-none absolute -inset-16 opacity-0 group-hover:opacity-100 transition duration-500 bg-[conic-gradient(from_0deg,rgba(0,217,255,0.12),rgba(157,0,255,0.12),rgba(0,255,163,0.12),rgba(0,217,255,0.12))] animate-[spin_8s_linear_infinite]" />
      <div className="relative z-10">
        <h3 className="text-lg font-semibold text-cyan-200">{title}</h3>
        <p className="mt-2 text-white/80">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="text-xs uppercase tracking-wide rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-200 px-3 py-1">
              {t}
            </span>
          ))}
        </div>
        {links && (links.live || links.code) ? (
          <div className="mt-4 flex gap-4">
            {links?.live && (
              <a href={links.live} className="inline-flex items-center gap-1 text-sm text-emerald-300 hover:text-emerald-200 underline underline-offset-4">
                <ExternalLink className="h-4 w-4" /> Live
              </a>
            )}
            {links?.code && (
              <a href={links.code} className="inline-flex items-center gap-1 text-sm text-purple-300 hover:text-purple-200 underline underline-offset-4">
                <ExternalLink className="h-4 w-4" /> Code
              </a>
            )}
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(0,217,255,0.10),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(157,0,255,0.10),transparent_55%)]" />
      <div className="relative max-w-7xl mx-auto px-6 space-y-14">
        <div className="flex items-center justify-between flex-wrap gap-6">
          <SectionTitle glow="emerald">Experience & Skills</SectionTitle>
          <p className="text-white/70 max-w-2xl">
            Multi‑agent automation, RAG pipelines, and GenAI integrations with a focus on clarity, performance, and ethical deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {experience.map((exp) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-purple-200">{exp.title}</h3>
                    {exp.location && (
                      <p className="text-xs text-white/60">{exp.location}</p>
                    )}
                  </div>
                  <p className="text-sm text-white/60">{exp.period}</p>
                </div>
                <ul className="mt-4 list-disc list-inside space-y-2 text-white/80">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
                <h4 className="text-sm font-semibold tracking-wide text-cyan-200 uppercase">{group}</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((it) => (
                    <span key={it} className="text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/80">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-6">
          <SectionTitle glow="cyan">Projects</SectionTitle>
          <p className="text-white/70 max-w-2xl">Curated projects across agentic systems, RAG, automation, ML, and analytics.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>

        <div className="pt-2 text-sm text-white/60">
          Education: B.B.A. (Computer Application), Savitribai Phule Pune University — CGPA: 9.0 (1st), 8.85 (2nd)
        </div>
      </div>
    </section>
  );
}
