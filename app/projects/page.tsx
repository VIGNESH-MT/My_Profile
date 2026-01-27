"use client"; // Required for styled-jsx and interactivity

import React from 'react';

export default function UltraProProjects() {
  const projects = [
    {
      id: "01",
      title: "Agentic Hiring Intelligence",
      sector: "Decision Science",
      thesis: "Traditional ATS systems rely on shallow keyword matching, creating high-entropy hiring pipelines. This project replaces 'black-box' scoring with a deterministic, audit-ready decision engine.",
      impact: "Engineered an MCP server + client orchestration layer to automate skill normalization and bias diagnostics. It enables human-in-the-loop overrides by providing causal sensitivity analysis.",
      stack: ["MCP Orchestration", "LangChain", "Governance"],
      links: {
        live: "https://agentic-hiring-ai-uh7atcplvzjaxjfnue7e5c.streamlit.app/",
        repo: "https://github.com/VIGNESH-MT/Agentic-hiring-ai"
      }
    },
    {
      id: "02",
      title: "Geospatial Feature Extraction",
      sector: "Computer Vision",
      thesis: "Manual land cover survey methods are slow and cost-prohibitive. This system automates LULC classification using multispectral satellite data to provide real-time environmental insights.",
      impact: "Optimized a VGG19 Transfer Learning architecture to process RGB and spectral bands from the EuroSAT dataset, achieving high-fidelity classification across 10 distinct environmental classes.",
      stack: ["PyTorch", "Sentinel-2", "Transfer Learning"],
      links: { repo: "https://github.com/VIGNESH-MT/Satellite-Image-Classification-EuroSAT-Dataset-.git" }
    },
    {
      id: "03",
      title: "Industrial Asset Reliability",
      sector: "Predictive Ops",
      thesis: "Industrial downtime is a multibillion-dollar problem. I built a system to shift maintenance from reactive failure response to predictive health monitoring via RUL estimation.",
      impact: "Integrated Random Forest Regressors and LSTM networks to calculate Remaining Useful Life (RUL) with high precision, processing real-time telemetry from IoT sensor arrays.",
      stack: ["LSTM", "IoT Analytics", "RUL Estimation"],
      links: { repo: "https://github.com/VIGNESH-MT/Predictive-Maintenance-for-Industrial-IoT.git" }
    },
    {
      id: "04",
      title: "Equitable Health Interface",
      sector: "NLP / Healthcare",
      thesis: "Language barriers in healthcare lead to fatal delays. This system provides low-latency medical triaging in native dialects for underserved regions.",
      impact: "Developed a Hybrid DNN-RNN architecture combined with TF-IDF retrieval to automate symptom-to-diagnosis mapping across multiple languages.",
      stack: ["Hybrid DNN", "Multilingual NLP", "Healthcare"],
      links: { repo: "https://github.com/VIGNESH-MT/Multilingual-Healthcare-Chatbot.git" }
    },
    {
      id: "05",
      title: "Sustainable Finance Auditor",
      sector: "ESG Analytics",
      thesis: "Corporate 'Greenwashing' thrives on data fragmentation. I built an automated ESG auditor to extract quantitative evidence from dense textual reports.",
      impact: "Utilized Bio-BERT and NLP pipelines to standardize corporate transparency. The system generates a quantitative 0-to-3 score based on verified textual disclosures.",
      stack: ["BERT", "Evidence Extraction", "Finance"],
      links: { repo: "https://github.com/VIGNESH-MT/ESG-Scoring-System-Using-AI-NLP.git" }
    },
    {
      id: "06",
      title: "Public Policy Risk Analytics",
      sector: "Policy Intelligence",
      thesis: "Identifying risk patterns in biased public datasets requires moving beyond outlier detection into explainable policy intelligence.",
      impact: "Architected an end-to-end data pipeline that transforms fragmented datasets into district-level risk indicators, optimized for human rights oversight.",
      stack: ["Interpretable ML", "Causal Analysis", "Python"],
      links: { repo: "https://github.com/VIGNESH-MT/Agentic-hiring-ai" }
    }
  ];

  return (
    <section className="w-full min-h-screen bg-[#050505] text-zinc-300 py-40 px-4 md:px-20 overflow-hidden font-sans">
      {/* ELITE SCAFFOLDING */}
      <div className="fixed inset-0 grid grid-cols-6 md:grid-cols-12 pointer-events-none opacity-[0.03]">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-r border-white h-full"></div>
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto relative">
        {/* HEADER: MISSION CRITICAL STATUS */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-40 border-b border-zinc-800 pb-20">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-[1px] bg-amber-500"></div>
              <span className="font-mono text-[10px] tracking-[0.4em] text-amber-500 uppercase">System_Architect</span>
            </div>
            <h1 className="text-7xl md:text-[10rem] font-black leading-[0.8] tracking-tighter text-white">
              ENGINEERED<br />
              
                <span className="text-zinc-900 outline-text">SYSTEMS</span>
            </h1>
          </div>
          <div className="mt-10 md:mt-0 text-right font-mono text-[9px] uppercase leading-relaxed text-zinc-500 space-y-1">
            <p>Node_Status: Online</p>
            <p>Deployed_Protocols: 06</p>
            <p>Compliance_Check: Passed</p>
            <p className="text-amber-500/50">Timestamp: 26.01.2026</p>
          </div>
        </div>

        {/* PROJECT VERTICAL DOSSIER */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="group relative border-b border-zinc-900 py-32 transition-all duration-700 hover:bg-zinc-900/10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                
                {/* ID & Sector */}
                <div className="lg:col-span-1 font-mono text-[10px] text-amber-500/40 pt-2 flex lg:flex-col gap-4">
                  <span>[{project.id}]</span>
                  <span className="hidden lg:block h-20 w-px bg-zinc-800 mx-auto"></span>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-6 space-y-10">
                  <div>
                    <span className="text-amber-500 font-mono text-[9px] uppercase tracking-[0.3em] mb-2 block">{project.sector}</span>
                    <h2 className="text-5xl md:text-7xl font-bold text-white group-hover:text-amber-400 transition-colors duration-500 tracking-tighter">
                      {project.title}
                    </h2>
                  </div>
                  
                  <p className="text-xl md:text-2xl font-light text-zinc-400 leading-relaxed max-w-xl border-l border-zinc-800 pl-8">
                    {project.thesis}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map(s => (
                      <span key={s} className="px-3 py-1 bg-zinc-900/50 border border-zinc-800 text-[9px] font-mono text-zinc-500 uppercase tracking-widest group-hover:text-zinc-300 transition-colors">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact & Reveal */}
                <div className="lg:col-span-5 space-y-8">
                   <div className="relative p-10 border border-zinc-800 bg-[#080808] group-hover:border-amber-500/20 transition-all duration-700 shadow-2xl">
                      <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-zinc-800">AUTH_SIG // VALID</div>
                      <h3 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
                        Architectural_Impact
                      </h3>
                      <p className="text-sm text-zinc-400 leading-relaxed italic opacity-80">
                        "{project.impact}"
                      </p>
                      
                      <div className="mt-10 flex flex-col gap-4">
                        {project.links.live && (
                          <a href={project.links.live} target="_blank" className="text-[10px] font-black text-amber-500 uppercase tracking-[0.3em] flex items-center gap-4 group/btn">
                            [ Initialize Deployment ]
                            <span className="h-[1px] flex-grow bg-zinc-800 group-hover/btn:bg-amber-500/50 transition-all"></span>
                          </a>
                        )}
                        <a href={project.links.repo} target="_blank" className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] flex items-center gap-4 group/btn hover:text-white transition-colors">
                          [ Access Source_Code ]
                          <span className="h-[1px] flex-grow bg-zinc-800 group-hover/btn:bg-zinc-500 transition-all"></span>
                        </a>
                      </div>
                   </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* FINAL ARCHITECTURAL BAR */}
        <div className="mt-60 pt-20 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex gap-4 items-center italic text-zinc-600 text-xs">
            <span className="text-amber-500">●</span> Systems integrity verified for 2026 deployment
          </div>
          <div className="flex gap-2">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="h-6 w-[1px] bg-zinc-800"></div>
            ))}
          </div>
          <div className="font-mono text-[9px] text-zinc-700 tracking-[0.5em] uppercase">
            End of Intelligence Log.
          </div>
        </div>
      </div>

      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1.5px #18181b;
          color: transparent;
        }
        .group:hover .outline-text {
          -webkit-text-stroke: 1.5px #71717a;
          transition: all 0.5s ease;
        }
      `}</style>
    </section>
  );
}