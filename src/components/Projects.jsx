import React from 'react';
import { BarChart3, LineChart, PieChart } from 'lucide-react';

const projects = [
  {
    title: 'Marketing Funnel Dashboard',
    description: 'End-to-end funnel with cohort retention, channel attribution, and CAC/LTV reporting.',
    tags: ['SQL', 'Power BI', 'DAX'],
    icon: <BarChart3 className="h-5 w-5 text-emerald-400" />,
    link: '#',
  },
  {
    title: 'Sales Forecasting',
    description: 'Time-series forecasting with feature engineering and cross-validation for demand planning.',
    tags: ['Python', 'Prophet', 'Pandas'],
    icon: <LineChart className="h-5 w-5 text-emerald-400" />,
    link: '#',
  },
  {
    title: 'Customer Segmentation',
    description: 'RFM clustering to segment users and identify high-value cohorts for lifecycle marketing.',
    tags: ['SQL', 'Python', 'Scikit-learn'],
    icon: <PieChart className="h-5 w-5 text-emerald-400" />,
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Featured Projects</h2>
            <p className="mt-2 text-white/70">A selection of work highlighting analytics, modeling, and visualization.</p>
          </div>
          <a href="#contact" className="hidden rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm font-medium text-white/90 shadow hover:bg-white/10 md:block">Work with me</a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-xl border border-white/10 bg-white/5 p-5 shadow-lg ring-1 ring-transparent transition hover:ring-emerald-400/30">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/10">
                  {p.icon}
                </div>
                <h3 className="text-lg font-semibold group-hover:text-emerald-300">{p.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/80">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md bg-white/10 px-2 py-1 text-xs text-white/80">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
