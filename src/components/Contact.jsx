import React from 'react';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-[#0a0a0a] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Let’s Collaborate</h2>
          <p className="mt-2 text-white/70">Have a project in mind or want to review my case studies? Reach out.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <a href="mailto:you@example.com" className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 text-white/90 transition hover:bg-white/10">
            <Mail className="h-5 w-5 text-emerald-400" />
            <span>Email</span>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 text-white/90 transition hover:bg-white/10">
            <Linkedin className="h-5 w-5 text-emerald-400" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 text-white/90 transition hover:bg-white/10">
            <Github className="h-5 w-5 text-emerald-400" />
            <span>GitHub</span>
          </a>
          <a href="#" className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 text-white/90 transition hover:bg-white/10">
            <FileText className="h-5 w-5 text-emerald-400" />
            <span>Resume</span>
          </a>
        </div>

        <p className="mt-8 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Your Name — Data Analyst
        </p>
      </div>
    </section>
  );
}
