export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#000000] text-zinc-100 overflow-hidden selection:bg-amber-500/30">
      
      {/* 01. THE BACKGROUND TERMINAL GRID */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
      </div>

      {/* 02. SYSTEM STATUS HUD (Floating) */}
      <div className="fixed top-0 w-full z-50 p-6 md:p-10 flex justify-between items-start pointer-events-none">
        <div className="flex flex-col gap-1 border-l border-amber-500/50 pl-4">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest leading-none">Aspiring ISRO Scientist</span>
          <span className="text-sm font-bold tracking-tighter uppercase">Vignesh Murugesan</span>
        </div>
        <div className="flex flex-col items-end gap-2 text-right">
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-mono text-amber-500/60 uppercase animate-pulse">licensed qlik business analyst</span>
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]"></div>
          </div>
          <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest hidden md:block">
            Business Analyst
          </span>
        </div>
      </div>

      {/* 03. HERO SECTION */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-40">
        
        <div className="max-w-7xl">
          <div className="inline-flex items-center gap-3 mb-8 px-3 py-1 bg-zinc-900/50 border border-zinc-800 rounded-full">
             <span className="text-amber-500 font-mono text-[10px] uppercase tracking-widest">Aritificial Intelligence</span>
             <div className="w-1 h-1 bg-zinc-700 rounded-full"></div>
             <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">System Engineering</span>
          </div>

          <h1 className="text-6xl md:text-[10rem] font-black leading-[0.85] tracking-[ -0.05em] mb-12 uppercase">
            Ethical <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600">Architect</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <p className="text-2xl md:text-4xl font-light text-zinc-400 leading-tight">
                Engineering <span className="text-white font-medium">high-integrity AI systems</span> for high-stakes decision cycles. I solve for <span className="text-amber-400">Accountability</span> at scale.
              </p>
            </div>
            
            <div className="lg:col-span-5 flex flex-col gap-10">
              <div className="space-y-4">
                 <h3 className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.3em]">Core_Competencies</h3>
                 <div className="flex flex-wrap gap-2">
                    {["XAI", "System Thinking", "Risk Mitigation", "Governance"].map(tag => (
                      <span key={tag} className="px-3 py-1 border border-zinc-800 text-[10px] font-mono text-zinc-300 uppercase">
                        {tag}
                      </span>
                    ))}
                 </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href="/system-thinking"
                  className="group relative px-8 py-4 bg-white text-black font-black text-xs uppercase tracking-widest overflow-hidden transition-all text-center"
                >
                  <span className="relative z-10">View Architecture</span>
                  <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </a>

                <a
                  href="/ai-systems"
                  className="px-8 py-4 border border-zinc-800 text-zinc-300 font-black text-xs uppercase tracking-widest hover:bg-zinc-900 transition-all text-center"
                >
                  Explore Systems
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. DECORATIVE SIDEBAR - Vertical "Blueprint" Text */}
      <div className="absolute right-10 bottom-10 hidden lg:flex flex-col items-end gap-10 opacity-20">
         <div className="h-60 w-[1px] bg-gradient-to-b from-transparent via-zinc-800 to-amber-500"></div>
         <span className="rotate-90 origin-right text-[10px] font-mono text-zinc-500 uppercase tracking-[1em] whitespace-nowrap">
            Designed_for_Impact_2026
         </span>
      </div>

      {/* 05. FOOTER HUD */}
      <div className="absolute bottom-8 left-6 md:left-20 flex items-center gap-12">
         <div className="flex gap-4">
            <div className="h-10 w-[1px] bg-zinc-900"></div>
            <div className="flex flex-col justify-between py-1">
               <span className="text-zinc-600 font-mono text-[9px] uppercase tracking-widest">Proactive</span>
               <span className="text-zinc-300 font-mono text-[10px]">Open to Collaborate for AI Product Development</span>
            </div>
         </div>
         <div className="flex gap-4">
            <div className="h-10 w-[1px] bg-zinc-900"></div>
            <div className="flex flex-col justify-between py-1">
               <span className="text-zinc-600 font-mono text-[9px] uppercase tracking-widest">Availability</span>
               <span className="text-amber-500 font-mono text-[10px]">OPEN_FOR_RESEARCH</span>
            </div>
         </div>
      </div>

    </main>
  );
}