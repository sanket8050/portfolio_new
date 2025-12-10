import { useEffect, useState } from "react";

const LIGHT = {
  '--bg': '#ffffff',
  '--card': '#ffffff',
  '--text': '#0f172a',
  '--muted': '#64748b'
};

const DARK = {
  '--bg': '#071026',
  '--card': '#0b1220',
  '--text': '#e6eef8',
  '--muted': '#94a3b8'
};

function applyTheme(vars) {
  const root = document.documentElement;
  Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
  // also set body background and text for immediate visible change
  document.body.style.backgroundColor = vars['--bg'];
  document.body.style.color = vars['--text'];
}

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
    } catch (e) {}
    return false;
  });

  useEffect(() => {
    // Apply initial theme on mount
    if (dark) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      applyTheme(DARK);
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
      applyTheme(LIGHT);
    }
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
  }, [dark]);

  return (
    <button
      onClick={() => setDark((s) => !s)}
      type="button"
      aria-pressed={dark}
      className="p-2 rounded-md border bg-white/40 hover:bg-white/60 dark:bg-slate-800/60 dark:hover:bg-slate-800/70 transition-colors"
      title="Toggle theme"
    >
      {dark ? '🌙' : '☀️'}
    </button>
  );
}
