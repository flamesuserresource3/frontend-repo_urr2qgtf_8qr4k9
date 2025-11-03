import React from 'react';
import Spline from '@splinetool/react-spline';
import { Database, BarChart3, PieChart, Code } from 'lucide-react';

const badges = [
  { icon: <Database className="h-4 w-4" />, label: 'SQL' },
  { icon: <BarChart3 className="h-4 w-4" />, label: 'Power BI' },
  { icon: <PieChart className="h-4 w-4" />, label: 'Tableau' },
  { icon: <Code className="h-4 w-4" />, label: 'Python' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* subtle vignette + gradient overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-start justify-center px-6 md:px-8">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white/80 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Data Analyst Portfolio
        </span>

        <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Turning complex data into
          <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-white bg-clip-text text-transparent"> actionable insights</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
          I specialize in wrangling data, building dashboards, and uncovering patterns that drive better business decisions.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {badges.map((b) => (
            <span key={b.label} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-white/90 shadow-sm ring-1 ring-white/10 backdrop-blur">
              {b.icon}
              {b.label}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-black shadow transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 shadow transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
