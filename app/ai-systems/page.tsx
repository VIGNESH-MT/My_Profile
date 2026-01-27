export default function IntelligenceArchitecture() {
  const systems = [
    {
      sector: "Orchestration & Cognitive Flow",
      conceptualFocus: "Moving beyond static prompts to dynamic, tool-enabled reasoning.",
      capabilities: [
        { label: "Agentic Design", detail: "MCP (Model Context Protocol) & LangChain Orchestration" },
        { label: "Tool-Use", detail: "Deterministic functional calling & autonomous tool-selection" },
        { label: "State Management", detail: "Memory-augmented generation and session persistence" }
      ]
    },
    {
      sector: "Neural Computation & Synthesis",
      conceptualFocus: "High-dimensional feature extraction across varied data modalities.",
      capabilities: [
        { label: "Computer Vision", detail: "Multispectral Sentinel-2 analysis & Transfer Learning" },
        { label: "NLP / NLU", detail: "Transformer-based (BERT) semantic & sentiment synthesis" },
        { label: "Temporal Modeling", detail: "LSTM & RNN architectures for industrial RUL forecasting" }
      ]
    },
    {
      sector: "Governance & Risk Attribution",
      conceptualFocus: "Converting 'Black Box' AI into audit-ready decision intelligence.",
      capabilities: [
        { label: "XAI", detail: "Explainable AI via causal sensitivity & feature importance" },
        { label: "Bias Mitigation", detail: "Fairness diagnostics & demographic parity calibration" },
        { label: "Audit Logistics", detail: "Automated governance reporting & PDF export pipelines" }
      ]
    }
  ];

  return (
    <section className="w-full bg-[#050505] py-40 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header: The Scientific Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <div>
            <span className="text-amber-500 font-mono text-[10px] tracking-[0.5em] block mb-6 uppercase">
              Operational_Framework
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-zinc-100 tracking-tighter leading-none mb-8">
              Systems <br /> <span className="text-zinc-500 italic">Philosophy</span>
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-xl text-zinc-400 font-light leading-relaxed border-l border-amber-500/30 pl-8">
              Code is a commodity. Engineering is the art of reducing entropy within complex decision environments. My work focuses on building systems that don't just predict, but account for their own reasoning
            </p>
          </div>
        </div>

        {/* The Three-Pillar Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {systems.map((sys, i) => (
            <div key={i} className="group relative p-10 bg-zinc-900/10 border border-zinc-800 hover:bg-zinc-900/20 transition-all duration-700 overflow-hidden">
              {/* Decorative background digit */}
              <span className="absolute -right-4 -bottom-10 text-[180px] font-black text-zinc-800/20 pointer-events-none group-hover:text-amber-500/10 transition-colors">
                {i + 1}
              </span>

              <h3 className="text-amber-500 font-mono text-xs tracking-widest uppercase mb-4">{sys.sector}</h3>
              <p className="text-sm text-zinc-400 mb-12 h-12 leading-relaxed">{sys.conceptualFocus}</p>
              
              <div className="space-y-6">
                {sys.capabilities.map((cap, j) => (
                  <div key={j} className="relative z-10">
                    <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-tighter mb-1">{cap.label}</div>
                    <div className="text-zinc-200 font-medium text-sm">{cap.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* The Technology Primitives Footer */}
        <div className="mt-40 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-1000">
           {["Python", "PyTorch", "LangChain", "SQL/FAISS", "Scikit-Learn", "FastAPI"].map(tech => (
             <div key={tech} className="text-center font-mono text-xs text-zinc-500 border border-zinc-900 py-4 uppercase tracking-[0.2em]">
               {tech}
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}