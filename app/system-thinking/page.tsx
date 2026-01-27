export default function SystemThinking() {
  const systems = [
    { 
      id: "01", 
      title: "Problem Intelligence", 
      tag: "CONTEXT_MAPPING", 
      desc: "Identifying institutional, human, and societal constraints. I map the 'Problem Space' before the 'Latent Space' to ensure alignment with real-world physics." 
    },
    { 
      id: "02", 
      title: "Data & Risk Awareness", 
      tag: "STOCHASTIC_AUDIT", 
      desc: "Engineering pipelines that treat bias, data-drift, and missingness as first-class architectural variables rather than post-processing errors." 
    },
    { 
      id: "03", 
      title: "Model Strategy", 
      tag: "HEURISTIC_SELECTION", 
      desc: "Architecting for robustness. I prioritize models with high 'Interpretability Coefficients' in safety-critical domains over black-box accuracy." 
    },
    { 
      id: "04", 
      title: "Explainability & Ethics", 
      tag: "COGNITIVE_ALIGNMENT", 
      desc: "Hard-coding accountability. Implementing post-hoc and intrinsic explainability so every automated decision is contestable by human experts." 
    },
    { 
      id: "05", 
      title: "Deployment & Impact", 
      tag: "FEEDBACK_RECURSION", 
      desc: "The loop closes here. Continuous monitoring of how AI restructure policy, feeding real-world outcomes back into the next iteration of Problem Intelligence." 
    }
  ];

  return (
    <section className="w-full min-h-screen bg-[#000000] text-zinc-100 py-32 px-6 md:px-20 lg:px-40 relative overflow-hidden">
      
      {/* BACKGROUND GRID DECOR */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* 01. HEADER - The Global Logic State */}
      <div className="max-w-5xl mb-32 border-l border-amber-500/50 pl-10 relative z-10">
        <div className="flex items-center gap-3 mb-4">
           <div className="h-1 w-1 bg-amber-500 rounded-full animate-ping"></div>
           <span className="text-amber-500 font-mono text-xs tracking-[0.6em] uppercase">Architecture</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8">
          The Logic <br /> <span className="text-zinc-500 italic font-serif tracking-tight text-4xl md:text-7xl">Architecture</span>
        </h1>
        <p className="text-xl md:text-2xl font-light text-zinc-400 max-w-2xl leading-relaxed">
          I don't build isolated models. I architect <span className="text-white">recursive decision-engines</span> engineered for resilience against high-entropy environments.
        </p>
      </div>

      {/* 02. THE PROCESSOR FLOW - Vertical Logic Rail */}
      <div className="max-w-5xl relative z-10">
        {/* Central Rail with Glow */}
        <div className="absolute top-0 left-0 md:left-1/2 w-[1px] h-full bg-zinc-800 hidden md:block">
           <div className="absolute inset-0 bg-gradient-to-b from-amber-500 via-amber-500/20 to-transparent w-full h-1/2 animate-pulse"></div>
        </div>

        <div className="space-y-32">
          {systems.map((step, i) => (
            <div key={step.id} className={`flex flex-col md:flex-row items-center gap-12 group ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Content Side */}
              <div className="flex-1 w-full">
                <div className={`p-10 bg-zinc-950/80 border border-zinc-800/50 backdrop-blur-xl group-hover:border-amber-500/50 transition-all duration-700 relative ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <span className="text-amber-500 font-mono text-[10px] tracking-widest uppercase mb-4 block opacity-60 group-hover:opacity-100 transition-opacity">0x_{step.tag}</span>
                  <h3 className="text-2xl font-bold mb-4 tracking-tighter group-hover:text-amber-200 transition-colors">{step.id}. {step.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed font-light">
                    {step.desc}
                  </p>
                  
                  {/* Digital Compass Marker */}
                  <div className={`absolute -top-2 ${i % 2 === 0 ? '-left-2' : '-right-2'} w-4 h-4 border border-zinc-700 bg-black rotate-45 group-hover:bg-amber-500 transition-colors`}></div>
                </div>
              </div>

              {/* Node (The Integrated Circuit) */}
              <div className="relative z-10 hidden md:flex items-center justify-center w-16 h-16 rounded-sm bg-black border border-zinc-800 group-hover:border-amber-500 transition-all duration-500 rotate-45 overflow-hidden">
                <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="text-[10px] font-mono text-zinc-500 group-hover:text-amber-500 -rotate-45 font-bold">{step.id}</span>
              </div>

              {/* Empty Side */}
              <div className="flex-1 hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>

      {/* 03. THE MASTER FRAMEWORK SUMMARY */}
      <div className="max-w-6xl mx-auto mt-60 relative z-10">
        <div className="p-[1px] bg-gradient-to-br from-zinc-700 via-zinc-900 to-zinc-700 rounded-lg overflow-hidden">
          <div className="bg-[#050505] p-12 md:p-20 relative overflow-hidden">
            
            {/* Visual background indicator */}
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <span className="text-[12rem] font-black italic">Vignesh Murugesan</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7">
                <h4 className="text-amber-500 font-mono text-[10px] uppercase tracking-[0.5em] mb-6">Architecture</h4>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 uppercase leading-[0.9]">
                  Decoupled <br /> <span className="text-zinc-600">Decision</span> Synergy.
                </h2>
                <p className="text-zinc-400 leading-relaxed text-xl font-light max-w-xl">
                  This framework scales across governance, high-risk infrastructure, and safety-critical environments—ensuring AI is an <span className="text-zinc-100">accountable partner</span> rather than a black-box liability.
                </p>
              </div>
              
              <div className="lg:col-span-5 grid grid-cols-1 gap-px bg-zinc-800 border border-zinc-800">
                {[
                  { k: "Latency", v: "Optimized" },
                  { k: "Interpretable", v: "By_Default" },
                  { k: "Audit_Ready", v: "True" },
                  { k: "Risk_Mitigated", v: "100%" }
                ].map((spec, i) => (
                  <div key={i} className="bg-black p-4 flex justify-between items-center group/spec">
                    <span className="text-zinc-600 font-mono text-[10px] uppercase group-hover/spec:text-zinc-400 transition-colors">{spec.k}</span>
                    <span className="text-amber-500 font-mono text-[10px] font-bold tracking-widest">{spec.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}