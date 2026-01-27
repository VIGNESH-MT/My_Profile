export default function Ethics() {
  return (
    <section className="w-full min-h-screen bg-[#050505] py-32 px-6 md:px-16 lg:px-32 selection:bg-amber-500/30">
      
      {/* 01. THE PROCLAMATION - Centered & Authoritative */}
      <div className="max-w-4xl mx-auto text-center mb-32">
        <div className="inline-block px-3 py-1 border border-amber-500/30 rounded-full mb-8">
           <span className="text-amber-500 font-mono text-[10px] tracking-[0.4em] uppercase">Ethical Governance Layer</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-zinc-100 mb-10 leading-[0.9]">
          Integrity by <span className="text-amber-400">Design</span>
        </h1>
        <p className="text-xl md:text-3xl font-light text-zinc-400 leading-relaxed italic">
          "In high-stakes domains, technical performance is secondary to <span className="text-zinc-100">contestability</span> and <span className="text-zinc-100">responsible deployment</span>."
        </p>
      </div>

      {/* 02. CORE PRINCIPLES - Vertical Typographic Pillars */}
      <div className="max-w-7xl mx-auto mb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-zinc-800">
          {[
            { title: "Human Agency", desc: "AI supports, but never replaces, the sovereign weight of human judgment." },
            { title: "Explainability", desc: "Every output must be interpretable to stakeholders, not just engineers." },
            { title: "Bias Neutrality", desc: "Systematic data audits are primitives, not post-hoc fixes." },
            { title: "Risk Scale", desc: "Automation complexity must match the severity of the decision stakes." },
            { title: "Auditability", desc: "Institutional oversight is hard-coded into the system lifecycle." },
            { title: "Transparency", desc: "Explicit documentation of failure modes and model limitations." }
          ].map((item, i) => (
            <div key={i} className="p-10 border-b border-r border-zinc-800 group hover:bg-zinc-900/30 transition-all">
              <span className="text-amber-500 font-mono text-[10px] mb-4 block opacity-50 group-hover:opacity-100 transition-opacity">0{i+1} // PRINCIPLE</span>
              <h3 className="text-2xl font-bold text-zinc-100 mb-4 tracking-tight">{item.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 03. RISK MANAGEMENT - The "Dossier" Overlay */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 mb-40 items-center">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-zinc-100 mb-8 tracking-tighter">
            Risk as a <br />
            <span className="text-amber-400">First-Class Primitive</span>
          </h2>
          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
            <p>
              I treat ethical risk as a core engineering concern. This includes the identification of <span className="text-zinc-100">proxy discrimination</span>, overconfidence in predictions, and automation bias.
            </p>
            <p>
              Where uncertainty is high, the system is designed for <span className="text-white">conservative behavior</span>—favoring human intervention over automated overreach.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 w-full aspect-video bg-zinc-900/50 border border-zinc-800 flex items-center justify-center relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
           <div className="text-center z-10">
              <span className="text-amber-500 font-mono text-xs tracking-widest block mb-2 uppercase">Regulatory Alignment</span>
              <p className="text-zinc-500 text-[10px] font-mono uppercase">EU AI Act // UK Public Sector Guidelines // NIST AI RMF</p>
           </div>
        </div>
      </div>

      {/* 04. THE COMMITMENT - Full Bleed Quote Box */}
      <div className="w-full py-24 bg-gradient-to-r from-zinc-900 to-black border-y border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-2xl md:text-4xl font-extralight text-zinc-200 leading-snug">
            "Responsible AI is not a compliance checkbox—it is a design philosophy that aims to build systems that <span className="text-amber-400 italic">earn trust</span> and <span className="text-white">withstand scrutiny</span>."
          </p>
          <div className="mt-12 flex justify-center gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-1 w-12 bg-amber-500/20 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 w-1/3"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}