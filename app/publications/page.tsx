export default function Publications() {
  return (
    <section className="w-full min-h-screen bg-[#050505] text-zinc-100 py-24 px-6 md:px-16 lg:px-32 font-sans overflow-hidden">
      
      {/* 01. SYSTEM HEADER - Technical Identity */}
      <div className="max-w-7xl mx-auto flex justify-between items-start mb-32 border-l-4 border-amber-500 pl-8">
        <div>
          <span className="text-amber-500 font-mono text-xs tracking-[0.5em] uppercase block mb-2">Research_papers</span>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none">
            Publication<span className="text-amber-500"></span>
          </h1>
        </div>
        <div className="hidden md:block text-right">
          <p className="text-zinc-600 font-mono text-[10px] leading-tight uppercase tracking-widest">
            Domain: Computational Infrastructure <br />
            Status: Peer_Reviewed_Verified <br />
            Auth_ID: VM_90160
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* 02. PUBLICATION ENTRY - The Schematic Box */}
        <div className="relative group">
          
          {/* Decorative Corner Accents */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-zinc-800 group-hover:border-amber-500 transition-colors"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-zinc-800 group-hover:border-amber-500 transition-colors"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 border border-zinc-800 bg-zinc-900/10 backdrop-blur-sm">
            
            {/* Left Section: The Core Paper (7 Columns) */}
            <div className="lg:col-span-8 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-zinc-800">
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-amber-500 text-black font-mono text-[10px] px-2 py-0.5 font-bold">OPEN ACCESS</span>
                <span className="text-zinc-500 font-mono text-[10px] tracking-widest uppercase">March 2024</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-10 tracking-tight group-hover:text-amber-200 transition-colors">
                AI-Driven Groundwater Level Enhancement System using Advanced Prediction Algorithms
              </h2>

              <div className="space-y-12">
                {/* Key Contribution Grid */}
                <div>
                  <h3 className="text-amber-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-amber-500/30"></span> Core Contribution
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8 text-sm text-zinc-400 leading-relaxed font-light">
                    <p>
                      Proposed an <span className="text-zinc-100 font-medium italic">AI-driven predictive framework</span> designed specifically for environmental resource planning and large-scale forecasting.
                    </p>
                    <p>
                      Demonstrated the utility of <span className="text-zinc-100 font-medium">high-fidelity data modeling</span> in supporting sustainable infrastructure and government decision-making.
                    </p>
                  </div>
                </div>

                {/* Impact Statement */}
                <div className="bg-zinc-900/50 p-6 border-l border-amber-500/50">
                  <p className="text-zinc-300 text-lg font-light leading-relaxed">
                    This research bridges the gap between <span className="text-amber-400">raw sensor data</span> and <span className="text-zinc-100">institutional intelligence</span>, setting the standard for responsible resource management systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section: Technical Metadata (4 Columns) */}
            <div className="lg:col-span-4 bg-zinc-900/20 p-8 md:p-12 flex flex-col justify-between">
              <div className="space-y-8">
                <div>
                  <span className="text-zinc-600 font-mono text-[9px] uppercase block mb-1">Lead Author</span>
                  <span className="text-xl font-bold text-zinc-200">Vignesh M</span>
                </div>
                
                <div>
                  <span className="text-zinc-600 font-mono text-[9px] uppercase block mb-1">Publication Source</span>
                  <span className="text-lg text-zinc-300 leading-snug">Journal of Soft Computing Paradigm</span>
                </div>

                <div>
                  <span className="text-zinc-600 font-mono text-[9px] uppercase block mb-1">Indexing Identity</span>
                  <a 
                    href="https://doi.org/10.36548/jscp.2024.1.005" 
                    target="_blank"
                    className="text-amber-500 hover:text-amber-400 font-mono text-xs break-all underline decoration-amber-500/20 underline-offset-4"
                  >
                    doi.org/10.36548/jscp.2024.1.005
                  </a>
                </div>
              </div>

              <div className="mt-12">
                <a 
                  href="https://doi.org/10.36548/jscp.2024.1.005" 
                  target="_blank"
                  className="block w-full text-center py-4 bg-transparent border border-amber-500/50 text-amber-500 font-bold uppercase text-[10px] tracking-[0.3em] hover:bg-amber-500 hover:text-black transition-all"
                >
                  Download Source Paper
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 03. BACKGROUND WATERMARK - Vertical HUD */}
      <div className="fixed top-0 right-0 h-full w-20 flex items-center justify-center pointer-events-none opacity-5">
        <span className="rotate-90 text-zinc-100 font-black text-7xl tracking-[1rem] uppercase whitespace-nowrap">
        RESEARCH
        </span>
      </div>

    </section>
  );
}