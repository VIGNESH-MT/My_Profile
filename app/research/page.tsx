"use client";

import React from 'react';

const ResearchVectors = [
  {
    id: "01",
    field: "Computational Physics + HPC",
    title: "Exascale Infrastructure Digital Twins",
    objective: "Modeling cascading failures in interdependent global systems (Energy, Telecom, Water).",
    math: "GNNs + Physics-Informed Neural Networks (PINNs) + Bayesian Neural Operators.",
    status: "PhD Implementation Target: Planetary-Scale Resilience"
  },
  {
    id: "02",
    field: "Aerospace + Adaptive Control",
    title: "Autonomous Morphing Aerostructures",
    objective: "In-flight shape optimization and damage mitigation via differentiable CFD.",
    math: "Model-Based RL + Sim-to-Real Transfer + Multi-scale Microstructure Optimization.",
    status: "Master’s Research Focus: Damage-Tolerant Flight Logic"
  },
  {
    id: "03",
    field: "Systemic Risk + Causal ML",
    title: "Causal Crisis Early-Warning Engine",
    objective: "Forecasting financial contagion and optimizing macro-policy interventions.",
    math: "Temporal Causal Discovery + Agent-Based Modeling + Counterfactual Simulations.",
    status: "PhD Implementation Target: Central-Bank-Grade Decision Support"
  },
  {
    id: "04",
    field: "Planetary Intelligence",
    title: "Climate-Resilient Agri-Decision Systems",
    objective: "Generalizing precision agriculture across diverse socio-economic contexts.",
    math: "Causal ML for Heterogeneous Effects + Federated Learning + IoT Fusion.",
    status: "Master’s Research Focus: Sustainable Food Security Logistics"
  },
  {
    id: "05",
    field: "Orbital Dynamics + Robotics",
    title: "Autonomous Soft-Recovery Rocketry",
    objective: "AI-driven reusable launch architectures and high-precision planetary landing.",
    math: "Neural ODEs + Trajectory Optimization + Differentiable Flight Dynamics.",
    status: "PhD Implementation Target: Interplanetary Transport Efficiency"
  },
  {
    id: "06",
    field: "Human-Centric Bio-Ethics",
    title: "Preventive Maternal Edge-Intelligence",
    objective: "Non-clinical, context-aware support for high-risk maternal health.",
    math: "Probabilistic Risk Modeling + Multimodal Fusion + Ethical-by-Design Frameworks.",
    status: "Master’s Research Focus: Low-Latency Ethical Decision Support"
  }
];

export default function ResearchDossier() {
  return (
    <section className="w-full min-h-screen bg-[#000] text-zinc-100 py-32 px-6 md:px-16 lg:px-24 selection:bg-amber-500/30">
      
      {/* 01. ELITE NAV OVERLAY */}
      <div className="fixed top-10 left-10 hidden lg:block z-50">
        <div className="flex flex-col gap-2 border-l border-amber-500/50 pl-4 font-mono text-[9px] text-zinc-500 uppercase tracking-[0.4em]">
          <span>For Future implementation</span>
          <span className="text-amber-500 animate-pulse"></span>
          <span></span>
        </div>
      </div>

      {/* 02. MANIFESTO HEADER */}
      <div className="max-w-7xl mx-auto mb-56">
        <h1 className="text-7xl md:text-[14rem] font-black tracking-tighter text-white leading-[0.85] mb-16">
          Research<br />
          <span className="text-zinc-900 outline-text">Case Study</span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-8">
            <p className="text-3xl md:text-5xl font-extralight text-zinc-400 leading-tight">
              Bridging the <span className="text-white italic">asymptote</span> between theoretical AI and <span className="text-white font-medium underline decoration-amber-500 underline-offset-8">physical-world governance.</span>
            </p>
          </div>
          <div className="lg:col-span-4 border-t border-zinc-800 pt-8">
            <p className="text-zinc-500 font-mono text-[11px] leading-relaxed uppercase tracking-widest">
              My work focuses on <span className="text-zinc-300 font-bold italic">Entropy Reduction</span> in high-stakes environments. I prioritize systems where "Failure" is not an option.
            </p>
          </div>
        </div>
      </div>

      {/* 03. CASE STUDY MATRIX */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 bg-zinc-900 border border-zinc-900">
        {ResearchVectors.map((vector) => (
          <div key={vector.id} className="bg-black p-12 hover:bg-zinc-900/40 transition-all duration-700 border border-zinc-900 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-0 bg-amber-500 group-hover:h-full transition-all duration-500"></div>
            
            <div className="flex justify-between items-start mb-12">
              <span className="text-amber-500 font-mono text-xs font-bold tracking-widest">VECT_{vector.id}</span>
              <span className="text-zinc-700 font-mono text-[9px] uppercase tracking-tighter">{vector.field}</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-6 tracking-tighter uppercase leading-none group-hover:text-amber-400 transition-colors">
              {vector.title}
            </h3>

            <div className="space-y-8">
              <div>
                <span className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest block mb-2">Inquiry_Statement:</span>
                <p className="text-sm text-zinc-400 leading-relaxed font-light">{vector.objective}</p>
              </div>
              
              <div>
                <span className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest block mb-2">Mathematical_Primitives:</span>
                <p className="text-xs text-zinc-300 font-mono leading-relaxed opacity-80">{vector.math}</p>
              </div>

              <div className="pt-8 border-t border-zinc-900">
                <p className="text-[10px] text-amber-500/80 font-mono uppercase tracking-widest italic font-bold">
                  {vector.status}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 04. TECHNICAL BIBLIOGRAPHY CALLOUT */}
      <div className="max-w-7xl mx-auto mt-48 grid grid-cols-1 lg:grid-cols-12 gap-12 bg-zinc-900/20 p-16 border border-zinc-900">
        <div className="lg:col-span-4">
          <h2 className="text-4xl font-black text-white tracking-tighter uppercase">Theoretical <br/><span className="text-amber-500">Foundation.</span></h2>
          <p className="mt-6 text-zinc-500 text-sm font-mono">My research methodology is derived from first-principles of causality, fluid dynamics, and relational inductive biases.</p>
        </div>
        <div className="lg:col-span-8 flex flex-wrap gap-4 items-center">
          {["Pearl", "Raissi", "Karniadakis", "Vaswani", "Kipf", "Sutton", "Brunton"].map((name) => (
            <div key={name} className="px-6 py-3 border border-zinc-800 text-zinc-500 text-[10px] font-mono tracking-widest uppercase hover:text-white hover:border-amber-500 transition-all cursor-default">
              Ref: {name}_
            </div>
          ))}
        </div>
      </div>

      {/* 05. CALL TO COLLABORATION */}
      <div className="max-w-4xl mx-auto mt-60 mb-20 text-center">
        <div className="w-16 h-[2px] bg-amber-500 mx-auto mb-12"></div>
        <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter italic mb-12">Synergize.</h2>
        <p className="text-zinc-500 text-xl font-light leading-relaxed mb-16">
          Currently proposing implementation frameworks for <span className="text-zinc-100">Master's research</span> and <span className="text-zinc-100">PhD doctoral candidacy</span> (2026-2030). Seeking labs focused on high-stakes AI governance and physical-neural synthesis.
        </p>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <a href="mailto:your-email@edu.com" className="px-10 py-4 bg-white text-black font-black text-xs uppercase tracking-[0.2em] hover:bg-amber-500 transition-all">
            Access Research Proposals
          </a>
          <span className="font-mono text-zinc-700 text-[10px]">End_of_Dossier_2026</span>
        </div>
      </div>

      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1.5px #18181b;
          color: transparent;
        }
        .outline-text:hover {
          -webkit-text-stroke: 1.5px #d97706;
          transition: all 0.5s ease;
        }
      `}</style>
    </section>
  );
}