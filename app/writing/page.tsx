import React from 'react';

export default function SovereignArchive() {
  const exhibits = [
    {
      ref: "01",
      field: "NEURAL_ARCH",
      title: "DECODING CHITTI",
      subtitle: "The AI Technologies Behind India’s Most Iconic Robot",
      insight: "A forensic analysis of the convergence between biological intuition and synthetic logic. We explore the 'Ghost in the Machine' through the lens of affective robotics.",
      link: "https://medium.com/@vigneshm90160/decoding-chitti-the-ai-technologies-behind-indias-most-iconic-robot-a508c4f086bf"
    },
    {
      ref: "02",
      field: "EVOL_COGNITION",
      title: "5 GENERATIONS",
      subtitle: "From Narrow Tools to Conscious Beings",
      insight: "Tracing the inevitable trajectory of machine agency. This is not about faster math; it is about the transition from calculation to contemplation.",
      link: "https://medium.com/@vigneshm90160/the-5-generations-of-ai-from-narrow-tools-to-conscious-beings-5ae7194f0caa"
    },
    {
      ref: "03",
      field: "ASTRO_DYNAMICS",
      title: "ASTEROID 2024 PT5",
      subtitle: "Earth’s Temporary Celestial Companion",
      insight: "Investigating the rare mechanics of horseshoe orbits. A meditation on the ephemeral nature of gravitational capture and cosmic neighborhood.",
      link: "https://medium.com/@vigneshm90160/asteroid-2024-pt5-7276ed3f0e6f"
    },
    {
      ref: "04",
      field: "GEN_INTELLIGENCE",
      title: "STABLE DIFFUSION",
      subtitle: "Deep Dive into StableLM Frameworks",
      insight: "The democratization of the latent space. Decoding how diffusion models are rewriting the laws of visual and linguistic creation.",
      link: "https://medium.com/@vigneshm90160/unveiling-the-power-of-stable-diffusion-a-deep-dive-into-stablelm-cb22c1c1d1e4"
    },
    {
      ref: "05",
      field: "SPACE_SYSTEMS",
      title: "GROUND CONTROL",
      subtitle: "Machine Learning in Spacecraft Ground Systems",
      insight: "Hardening the bridge between Earth and Orbit. Deploying predictive intelligence to safeguard humanity's most distant hardware assets.",
      link: "https://medium.com/@vigneshm90160/machine-learning-in-ground-systems-for-spacecraft-4fb29a7a716c"
    }
  ];

  return (
    <div className="bg-[#080808] text-zinc-100 min-h-screen font-sans antialiased overflow-x-hidden">
      
      {/* SECTION 01: THE ARCHITECTURAL STATEMENT */}
      <section className="relative h-[90vh] flex flex-col justify-end p-6 md:p-24">
        <div className="absolute top-12 left-6 md:left-24 flex items-center gap-8">
           <div className="h-px w-24 bg-zinc-800"></div>
           <span className="text-[10px] font-mono tracking-[0.8em] text-zinc-500 uppercase"></span>
        </div>
        
        <h1 className="text-[15vw] leading-[0.8] font-black tracking-tighter text-zinc-900 absolute top-20 left-0 select-none">
                    World of AI <br /> 
        </h1>

        <div className="relative z-10 max-w-5xl">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tight mb-8">
            The <span className="italic font-light serif text-zinc-500 underline decoration-zinc-800">Sovereign</span> <br /> 
            Intellectual
          </h2>
          <p className="max-w-xl text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
            Where high-level technical engineering meets philosophical rigor. 
            I don't just write; I architect thought experiments for the next era of intelligence.
          </p>
        </div>
      </section>

      {/* SECTION 02: THE EXHIBITION (ASYMMETRIC GRID) */}
      <section className="px-6 md:px-24 py-40 border-t border-zinc-900">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-32 gap-x-12">
          
          {exhibits.map((item, index) => (
            <div 
              key={item.ref}
              className={`md:col-span-10 group relative ${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-3'}`}
            >
              <div className="flex flex-col md:flex-row gap-12 items-baseline">
                {/* Vertical Meta Information */}
                <div className="flex flex-row md:flex-col items-center md:items-start gap-4 border-l border-zinc-800 pl-4">
                  <span className="text-zinc-600 font-mono text-xs italic">{item.ref}</span>
                  <span className="text-amber-600 font-mono text-[9px] uppercase tracking-widest">{item.field}</span>
                </div>

                <div className="flex-1">
                  <a href={item.link} target="_blank" className="block group/link">
                    <h3 className="text-6xl md:text-[7rem] font-bold tracking-tighter leading-none mb-6 group-hover/link:italic group-hover/link:text-zinc-400 transition-all duration-700">
                      {item.title}
                    </h3>
                    <p className="text-xl md:text-2xl font-medium text-zinc-200 mb-4 max-w-2xl">
                      {item.subtitle}
                    </p>
                    <p className="text-zinc-500 text-base md:text-lg max-w-xl font-light leading-relaxed mb-8">
                      {item.insight}
                    </p>
                    <div className="inline-flex items-center gap-4 text-xs font-mono tracking-[0.4em] uppercase text-zinc-600 border-b border-zinc-800 pb-2 group-hover/link:text-white group-hover/link:border-white transition-all">
                      Review_File →
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* SECTION 03: THE ELITE CLOSURE */}
      <footer className="h-screen flex flex-col items-center justify-center p-6 text-center bg-white text-black">
        <span className="text-[10px] font-mono tracking-[1em] uppercase mb-12">Final_Proposition</span>
        <h4 className="text-4xl md:text-7xl font-bold max-w-5xl leading-[1.1] tracking-tight">
          "The ultimate luxury is <br /> 
          <span className="italic serif font-light underline decoration-black/20">Clarity of Thought</span> <br /> 
          in a world of noise."
        </h4>
        <div className="mt-20 flex flex-col items-center gap-4 text-[10px] font-mono">
          <p>© 2026 VIGNESH MURUGESAN // ALL RIGHTS RESERVED</p>
          <div className="h-20 w-px bg-black"></div>
        </div>
      </footer>

    </div>
  );
}