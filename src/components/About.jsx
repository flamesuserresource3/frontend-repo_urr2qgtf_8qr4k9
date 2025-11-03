import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0a0a0a] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">About Me</h2>
          <p className="mt-2 text-white/70">A quick snapshot of who I am and how I work with data.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur">
            <h3 className="text-xl font-semibold">What I Do</h3>
            <p className="mt-2 text-white/80">
              I clean, model, and visualize data to inform product and business strategy. My toolkit includes SQL for
              data extraction, Python for analysis and automation, and BI tools for building intuitive dashboards and reports.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur">
            <h3 className="text-xl font-semibold">How I Work</h3>
            <p className="mt-2 text-white/80">
              I focus on clarity and impact. I partner with stakeholders to define KPIs, translate questions into
              experiments, and communicate findings through clear visuals and concise narratives.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {["SQL","Python","Tableau","Power BI","Excel","A/B Testing"].map((s) => (
            <span key={s} className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-center text-sm text-white/90 shadow-sm">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
