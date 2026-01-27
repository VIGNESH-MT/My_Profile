"use client";

import React from 'react';

/* ===== TYPE FIX (ONLY FOR TS BUILD) ===== */
type ExperienceLayers = Record<string, string[]>;

type ExperienceItem = {
  id: string;
  org: string;
  role: string;
  period: string;
  status: string;
  location: string;
  summary: string;
  layers: ExperienceLayers;
  stack: string[];
};
/* ======================================= */

const ExperienceDossier: ExperienceItem[] = [
  {
    id: "OBJ-01",
    org: "Objectways",
    role: "Decision Scientist",
    period: "2024.05 — PRESENT",
    status: "ACTIVE_NODE",
    location: "COIMBATORE // ON-SITE",
    summary: "Architecting high-fidelity predictive systems and automated data governance for enterprise intelligence.",
    layers: {
      intelligence: [
        "Deployed ML ensembles for predictive analytics, classification, and clustering to steer business heuristics.",
        "Synthesized models via Pandas, NumPy, Scikit-learn, and TensorFlow with >85% accuracy benchmarks.",
        "Integrated A/B testing, anomaly detection, and NLP-driven sentiment analytics for proactive risk signaling."
      ],
      engineering: [
        "Built end-to-end data pipelines and automated ETL workflows for scalable production environments.",
        "Architected API-driven model deployment across multi-cloud infrastructures (AWS, GCP, Azure).",
        "Orchestrated large-scale data ingestion and feature engineering using Python and optimized SQL."
      ],
      governance: [
        "Translated high-entropy data into executive-grade decision strategies through Power BI and Tableau.",
        "Collaborated cross-functionally to align model performance with real-world operational constraints.",
        "Owned the data lifecycle from raw ingestion to stakeholder-ready analytical reporting."
      ]
    },
    stack: ["TensorFlow", "PyTorch", "AWS", "SQL", "Tableau", "Scikit-Learn"]
  },
  {
    id: "PAHI-02",
    org: "PahiLabs",
    role: "Full Stack Developer",
    period: "2024.10 — 2025.01",
    status: "COMPLETED",
    location: "US-REMOTE",
    summary: "Engineering scalable web service layers with a focus on cryptographic security and performance benchmarks.",
    layers: {
      logic: [
        "Developed RESTful backend services using Node.js, Express, Django, and Flask frameworks.",
        "Implemented hardened identity governance via JWT, OAuth, and Firebase Authentication.",
        "Engineered relational and NoSQL persistence layers utilizing PostgreSQL and MongoDB."
      ],
      interface: [
        "Architected responsive UI modules using React.js, Angular, and Vue.js with Tailwind CSS optimization.",
        "Achieved 90+ Lighthouse performance scores through V8 engine execution tuning and asset minification.",
        "Integrated secure payment gateways and third-party APIs for seamless transaction workflows."
      ],
      devops: [
        "Managed CI/CD orchestration via GitHub Actions and Jenkins for AWS and Vercel deployments.",
        "Utilized Docker for containerization and Jira for Agile sprint management and version control."
      ]
    },
    stack: ["React", "Node.js", "Django", "PostgreSQL", "Docker", "CI/CD"]
  },
  {
    id: "DSAC-03",
    org: "DS & Analytics Centre",
    role: "Data Science Intern",
    period: "2022.08 — 2024.05",
    status: "ARCHIVED",
    location: "COIMBATORE // ON-SITE",
    summary: "Foundational research in structured data preprocessing and relational modeling for business intelligence.",
    layers: {
      analysis: [
        "Conducted Exploratory Data Analysis (EDA) to isolate trends, outliers, and inform strategic decisions.",
        "Supported senior scientists in developing classification and regression models using Scikit-learn.",
        "Wrote optimized SQL queries for complex data extraction from relational databases."
      ],
      visualization: [
        "Built interactive dashboards and reporting modules using Power BI, Tableau, and Seaborn.",
        "Translated abstract business problems into technical analytical solutions for cross-functional teams.",
        "Maintained rigorous documentation and Git version control for experiment reproducibility."
      ]
    },
    stack: ["Python", "SQL", "Power BI", "Seaborn", "Git"]
  }
];

export default function Experience() {
  return (
    <section className="w-full min-h-screen bg-[#080808] text-zinc-100 py-32 px-4 md:px-12 lg:px-20 font-mono">
      
      {/* 01. SYSTEM HEADER */}
      <div className="max-w-[1600px] mx-auto mb-32 border-b border-zinc-900 pb-16 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <h1 className="text-5xl md:text-8xl font-black tracking-[ -0.05em] uppercase italic">
            Operational<br/><span className="text-zinc-800 not-italic uppercase">History</span>
          </h1>
          <p className="mt-6 text-amber-500 font-bold tracking-[0.4em] text-[10px] uppercase">
            Data Scientist & System Engineering
          </p>
        </div>
        <div className="text-right hidden md:block">
          <p className="text-[10px] text-zinc-600 uppercase tracking-widest leading-loose">
            <br/><br/>
            Experience_Entries: {ExperienceDossier.length}<br/>
          </p>
        </div>
      </div>

      {/* 02. BENTO DATA GRID */}
      <div className="max-w-[1600px] mx-auto space-y-32">
        {ExperienceDossier.map((job: ExperienceItem) => (
          <div key={job.id} className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-zinc-900 border border-zinc-900 overflow-hidden rounded-sm group">
            
            <div className="lg:col-span-3 bg-black p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-zinc-900">
              <div>
                <span className="text-amber-500 text-[10px] font-black tracking-widest block mb-4 underline decoration-amber-500/30">ID: {job.id}</span>
                <h2 className="text-3xl font-black text-white leading-none uppercase tracking-tighter mb-2">{job.org}</h2>
                <p className="text-zinc-500 text-xs italic mb-8">{job.role}</p>
                <p className="text-[10px] text-zinc-600 uppercase leading-relaxed tracking-wider">
                  {job.period}<br/>
                  {job.location}
                </p>
              </div>
              
              <div className="mt-12">
                <p className="text-[9px] text-zinc-700 uppercase tracking-[0.3em] mb-4 font-bold">Tech_Stack</p>
                <div className="flex flex-wrap gap-2">
                  {job.stack.map((s: string) => (
                    <span key={s} className="px-2 py-1 bg-zinc-950 border border-zinc-800 text-zinc-500 text-[9px] group-hover:text-amber-500 transition-colors cursor-default">{s}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-9 bg-[#0c0c0c] p-8 md:p-12">
              <div className="mb-12 border-b border-zinc-900 pb-8">
                <span className="text-[10px] text-zinc-700 uppercase tracking-widest block mb-2 font-bold">Strategic_Summary</span>
                <p className="text-xl md:text-2xl font-light text-zinc-300 italic max-w-4xl tracking-tight leading-relaxed">
                  "{job.summary}"
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
                {Object.entries(job.layers).map(
                  ([title, points]: [string, string[]], i: number) => (
                    <div key={i} className="space-y-4">
                      <h4 className="text-[10px] text-amber-500/80 font-black uppercase tracking-[0.2em] flex items-center gap-2">
                        <span className="w-1 h-1 bg-amber-500 rounded-full"></span>
                        {title}_layer
                      </h4>
                      <ul className="space-y-3">
                        {points.map((p: string, pIdx: number) => (
                          <li key={pIdx} className="text-xs text-zinc-500 leading-relaxed font-sans list-none border-l border-zinc-800 pl-4 hover:border-amber-500 transition-colors">
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        ))}

        {/* 03. FOOTER NODES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-900 border border-zinc-900">
          {[
            { org: "TCS iON", role: "ML Intern", bullets: ["Evaluated models via ROC-AUC & Confusion Matrix.", "Built supervised/unsupervised ensembles (Random Forest, K-Means).", "Documented ML pipelines for technical stakeholders."] },
            { org: "We & Data", role: "BI & Data Analytics", bullets: ["Designed interactive dashboards (Power BI/Tableau/Looker).", "Optimized SQL queries & ETL workflows for cloud storage.", "Automated recurring KPI reporting for business stakeholders."] }
          ].map((mini, i) => (
            <div key={i} className="bg-black p-12 group">
              <span className="text-zinc-800 text-[10px] font-black mb-4 block tracking-[0.5em] uppercase">Archive_Entry_0{i+1}</span>
              <h4 className="text-4xl font-black text-white mb-2 tracking-tighter uppercase italic">{mini.org}</h4>
              <p className="text-amber-500 font-mono text-[10px] mb-8 uppercase tracking-widest">{mini.role}</p>
              <ul className="space-y-3">
                {mini.bullets.map((b: string, bI: number) => (
                  <li key={bI} className="text-xs text-zinc-500 font-sans border-l border-zinc-900 pl-4 hover:text-zinc-200 transition-colors italic">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <footer className="mt-40 text-center">
        <div className="inline-block px-8 py-2 border border-zinc-900">
          <p className="text-[8px] text-zinc-700 tracking-[1em] uppercase">Aspring ISRO Scientist</p>
        </div>
      </footer>
    </section>
  );
}
