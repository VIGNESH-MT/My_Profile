export default function Education() {
  return (
    <section className="w-full min-h-screen bg-[#080808] py-24 px-6 md:px-20 lg:px-32 selection:bg-amber-500/30">
      
      {/* 01. THE OVERVIEW - Massive Left-Aligned Header */}
      <div className="max-w-7xl mx-auto mb-32">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[1px] w-12 bg-amber-500"></div>
          <span className="text-amber-500 font-mono tracking-[0.4em] text-xs uppercase">Educational Record</span>
        </div>
        <h1 className="text-6xl md:text-[11rem] font-light tracking-tight text-zinc-100 leading-none">
          UnderGraduate<span className="text-amber-400 font-bold"></span>
        </h1>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* 02. THE PRIMARY DEGREE - Large Scale Typography */}
        <div className="relative border-l border-zinc-800 pl-10 md:pl-20 pb-32">
          {/* Timeline Dot */}
          <div className="absolute top-0 -left-[5px] w-2.5 h-2.5 bg-amber-500 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-zinc-100 tracking-tighter">
                Bachelor of Technology
              </h2>
              <p className="text-xl md:text-2xl text-amber-200/60 mt-4 font-light italic">
                Anna University/ Karpagam College of Engineering
              </p>
            </div>
            <div className="text-right">
              <span className="text-5xl md:text-7xl font-mono text-zinc-800 font-black">
                [2020-2024]
              </span>
            </div>
          </div>

          {/* 03. THE CORE CURRICULUM - Horizontal Scroll/Flex Style */}
          <div className="mb-20">
            <h3 className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em] mb-10">Knowledge Vectors</h3>
            <div className="flex flex-wrap gap-x-12 gap-y-6">
              {[
                "Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision","",
                "System Architecture", "Numerical Linear Algebra", "Probability & Statistics","Mathematical Optimization Techniques",
              ].map((course, i) => (
                <div key={i} className="group cursor-default">
                  <span className="text-zinc-600 font-mono text-xs mr-2 group-hover:text-amber-500 transition-colors">0{i+1}</span>
                  <span className="text-xl md:text-2xl text-zinc-300 group-hover:text-zinc-100 transition-colors uppercase tracking-tighter">
                    {course}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 04. ACADEMIC HIGHLIGHTS - Offset Card Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-900/40 p-10 border border-zinc-800/50 hover:border-amber-500/30 transition-all duration-700">
              <h4 className="text-amber-400 font-bold uppercase text-xs tracking-widest mb-6">Research Readiness</h4>
              <p className="text-zinc-300 leading-relaxed font-light">
                Published peer-reviewed research on <span className="text-white font-medium">AI-driven groundwater prediction</span> integrating machine learning with geospatial analysis for spatiotemporal forecasting. Presented at an international conference, demonstrating research maturity and methodological rigor.
              </p>
            </div>
            <div className="bg-zinc-900/40 p-10 border border-zinc-800/50 hover:border-amber-500/30 transition-all duration-700 md:mt-12">
              <h4 className="text-amber-400 font-bold uppercase text-xs tracking-widest mb-6">Honors & Evaluation</h4>
              <p className="text-zinc-300 leading-relaxed font-light">
                Academic honors with an 8.89 CGPA <span className="text-white font-medium">maintained at a First Class Distinction level</span>, demonstrating a strong commitment to technical excellence and analytical rigor.
              </p>
            </div>
          </div>
        </div>

        {/* 05. PREPARATION STATEMENT - Blueprint Feel */}
        <div className="mt-20 relative p-12 border border-dashed border-zinc-800 text-center">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#080808] px-4 text-zinc-600 font-mono text-[10px] uppercase tracking-[0.4em]">
            Analysis_Output
          </div>
          <p className="text-2xl md:text-3xl text-zinc-400 font-extralight leading-relaxed max-w-4xl mx-auto">
            A rigorous foundation in <span className="text-zinc-100">Artificial Intelligence and Data Science underpins my ability to architect scalable, </span> decision-grade AI systems <span className="text-amber-400">grounded in algorithmic rigor, statistical reasoning, and system-level design principles.</span>.
          </p>
        </div>
      </div>

      {/* BACKGROUND DECOR - Elite Watermark */}
      <div className="fixed bottom-10 right-10 rotate-90 origin-bottom-right pointer-events-none opacity-5">
        <span className="text-9xl font-black text-white tracking-widest uppercase italic">Vignesh_M</span>
      </div>

    </section>
  );
}