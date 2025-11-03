import { useEffect, useState } from 'react';
import { Menu, X, Rocket, FolderGit2, Mail, User, Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);

  const navItems = [
    { href: '#about', label: 'About', icon: User },
    { href: '#projects', label: 'Projects', icon: FolderGit2 },
    { href: '#contact', label: 'Contact', icon: Mail },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#0A0E27]/60 bg-[#0A0E27]/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2 group">
            <Rocket className="h-6 w-6 text-cyan-400 drop-shadow-[0_0_8px_#00D9FF]" />
            <span className="font-semibold tracking-wider text-cyan-300 group-hover:text-white transition">Ruchir • AI</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-cyan-300 transition"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark((d) => !d)}
              className="hidden md:inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/10 text-white hover:border-cyan-400/50 hover:text-cyan-300 transition"
              aria-label="Toggle dark mode"
              title="Toggle dark mode"
            >
              {dark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/10 text-white hover:border-cyan-400/50 hover:text-cyan-300 transition"
              aria-label="Toggle navigation"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0A0E27]/95">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 text-white/90 hover:text-cyan-300 transition"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </a>
            ))}
            <button
              onClick={() => setDark((d) => !d)}
              className="mt-2 inline-flex items-center justify-center gap-2 w-full rounded-lg border border-white/10 text-white px-3 py-2 hover:border-cyan-400/50 hover:text-cyan-300 transition"
              aria-label="Toggle dark mode"
            >
              {dark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />} Theme
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
