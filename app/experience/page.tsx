"use client";

import React from "react";

/* =======================
   TYPE DEFINITIONS
======================= */

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

/* =======================
   DATA
======================= */

const ExperienceDossier: ExperienceItem[] = [
  {
    id: "OBJ-01",
    org: "Objectways",
    role: "Decision Scientist",
    period: "2024.05 — PRESENT",
    status: "ACTIVE_NODE",
    location: "COIMBATORE // ON-SITE",
    summary:
      "Architecting high-fidelity predictive systems and automated data governance for enterprise intelligence.",
    layers: {
      intelligence: [
        "Deployed ML ensembles for predictive analytics, classification, and clustering to steer business heuristics.",
        "Synthesized models via Pandas, NumPy, Scikit-learn, and TensorFlow with >85% accuracy benchmarks.",
        "Integrated A/B testing, anomaly detection, and NLP-driven sentiment analytics for proactive risk signaling.",
      ],
      engineering: [
        "Built end-to-end data pipelines and automated ETL workflows for scalable production environments.",
        "Architected API-driven model deployment across multi-cloud infrastructures (AWS, GCP, Azure).",
        "Orchestrated large-scale data ingestion and feature engineering using Python and optimized SQL.",
      ],
      governance: [
        "Translated high-entropy data into executive-grade decision strategies through Power BI and Tableau.",
        "Collaborated cross-functionally to align model performance with real-world operational constraints.",
        "Owned the data lifecycle from raw ingestion to stakeholder-ready analytical reporting.",
      ],
    },
    stack: ["TensorFlow", "PyTorch", "AWS", "SQL", "Tableau", "Scikit-Learn"],
  },
  {
    id: "PAHI-02",
    org: "PahiLabs",
    role: "Full Stack Developer",
    period: "2024.10 — 2025.01",
    status: "COMPLETED",
    location: "US-REMOTE",
    summary:
      "Engineering scalable web service layers with a focus on cryptographic security and performance benchmarks.",
    layers: {
      logic: [
        "Developed RESTful backend services using Node.js, Express, Django, and Flask frameworks.",
        "Implemented hardened identity governance via JWT, OAuth, and Firebase Authentication.",
        "Engineered relational and NoSQL persistence layers utilizing PostgreSQL and MongoDB.",
      ],
      interface: [
        "Architected responsive UI modules using React.js, Angular, and Vue.js with Tailwind CSS optimization.",
        "Achieved 90+ Lighthouse performance scores through V8 engine execution tuning and asset minification.",
        "Integrated secure payment gateways and third-party APIs for seamless transaction workflows.",
      ],
      devops: [
        "Managed CI/CD orchestration via GitHub Actions and Jenkins for AWS and Vercel deployments.",
        "Utilized Docker for containerization and Jira for Agile sprint management and version control.",
      ],
    },
    stack: ["React", "Node.js", "Django", "PostgreSQL", "Docker", "CI/CD"],
  },
  {
    id: "DSAC-03",
    org: "DS & Analytics Centre",
    role: "Data Science Intern",
    period: "2022.08 — 2024.05",
    status: "ARCHIVED",
    location: "COIMBATORE // ON-SITE",
    summary:
      "Foundational research in structured data preprocessing and relational modeling for business intelligence.",
    layers: {
      analysis: [
        "Conducted Exploratory Data Analysis (EDA) to isolate trends, outliers, and inform strategic decisions.",
        "Supported senior scientists in developing classification and regression models using Scikit-learn.",
        "Wrote optimized SQL queries for complex data extraction from relational databases.",
      ],
      visualization: [
        "Built interactive dashboards and reporting modules using Power BI, Tableau, and Seaborn.",
        "Translated abstract business problems into technical analytical solutions for cross-functional teams.",
        "Maintained rigorous documentation and Git version control for experiment reproducibility.",
      ],
    },
    stack: ["Python", "SQL", "Power BI", "Seaborn", "Git"],
  },
];

/* =======================
   COMPONENT
======================= */

export default function Experience() {
  return (
    <section className="w-full min-h-screen bg-[#080808] text-zinc-100 py-32 px-4 md:px-12 lg:px-20 font-mono">
      <div className="max-w-[1600px] mx-auto space-y-32">
        {ExperienceDossier.map((job: ExperienceItem) => (
          <div
            key={job.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-zinc-900 border border-zinc-900 overflow-hidden rounded-sm"
          >
            {/* Sidebar */}
            <div className="lg:col-span-3 bg-black p-8 border-r border-zinc-900">
              <h2 className="text-3xl font-black uppercase">{job.org}</h2>
              <p className="text-xs text-zinc-500 italic">{job.role}</p>

              <div className="mt-8 flex flex-wrap gap-2">
                {job.stack.map((s: string) => (
                  <span
                    key={s}
                    className="px-2 py-1 border border-zinc-800 text-[9px] text-zinc-500"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-9 bg-[#0c0c0c] p-12">
              <p className="text-xl italic text-zinc-300 mb-12">
                “{job.summary}”
              </p>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-12">
                {Object.entries(job.layers).map(
                  ([title, points]: [string, string[]]) => (
                    <div key={title}>
                      <h4 className="text-[10px] uppercase text-amber-500 tracking-widest mb-4">
                        {title}_layer
                      </h4>
                      <ul className="space-y-3">
                        {points.map((p: string, idx: number) => (
                          <li
                            key={idx}
                            className="text-xs text-zinc-500 border-l border-zinc-800 pl-4"
                          >
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
      </div>
    </section>
  );
}
