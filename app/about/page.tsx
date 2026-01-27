"use client";

import React from 'react';

// Elite Inline SVG Components (Zero-Dependency)
const Icons = {
  Linkedin: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  ),
  Github: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
  ),
  LeetCode: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m10 16 1.5-1.5"/><path d="m14 8-1.5 1.5"/><path d="M15 2c-1.798 0-3.101.477-4.078 1.396-.975.915-1.422 2.152-1.422 3.604 0 1.452.447 2.69 1.422 3.604.977.919 2.28 1.396 4.078 1.396 1.798 0 3.101-.477 4.078-1.396.975-.915 1.422-2.152 1.422-3.604 0-1.452-.447-2.69-1.422-3.604C18.101 2.477 16.798 2 15 2Z"/><path d="M2 18v2c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-2"/><path d="M7 14c-1.1 0-2 .9-2 2v2"/><path d="M17 14c1.1 0 2 .9 2 2v2"/></svg>
  ),
  Medium: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8-8 3.6-8 8"/><path d="M12 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4"/><path d="M16 12c0 1.7-1 3-2 3s-2-1.3-2-3 1-3 2-3 2 1.3 2 3"/><path d="M19 12c0 1.1-.5 2-1 2s-1-.9-1-2 .5-2 1-2 1 .9 1 2"/></svg>
  )
};

export default function About() {
  return (
    <section className="w-full min-h-screen pt-32 pb-20 px-6 md:px-16 lg:px-24 bg-[#0a0a0a]">
      
      {/* Header Section: High Contrast Gold on Dark */}
      <div className="flex flex-col md:flex-row justify-between items-end border-b border-zinc-800 pb-12 mb-20">
        <div>
          <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-none text-amber-200">
            About
          </h1>
          <p className="text-amber-500/80 font-mono tracking-widest uppercase text-sm mt-4 ml-2">
            AI Architect & Data Scientist
          </p>
        </div>
        <div className="hidden md:block text-right">
          <span className="text-zinc-500 font-mono text-xs uppercase tracking-[0.5em]">Vignesh Murugesan B.Tech</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-12">
          <p className="text-3xl md:text-5xl font-light leading-tight text-zinc-100">
            I build <span className="text-amber-400 font-medium">decision-grade</span> AI systems where 
            <span className="italic"> accountability</span> is the core design primitive.
          </p>

          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-zinc-200">
            <p>
              I specialize in moving AI beyond predictive accuracy and into the realm of 
              <span className="text-amber-300 font-semibold underline decoration-amber-500/30 underline-offset-4"> measurable impact</span>. 
              My work ensures that machine intelligence serves human governance, especially in high-stakes environments like Healthcare and ESG.
            </p>

            <p className="text-zinc-100">
              Most recently, I deployed an end-to-end 
              <span className="text-amber-400 font-medium"> AI hiring intelligence system</span>. 
              By utilizing <span className="text-amber-200 font-mono">FAISS</span> and 
              <span className="text-amber-200 font-mono"> LangChain</span>, I created a framework 
              that avoids keyword bias and prioritizes semantic skill-intelligence.
            </p>

            <p className="text-zinc-400 border-l-2 border-amber-500/50 pl-6 italic">
              I treat AI as a socio-technical system, recognizing that model outputs influence human decisions and long-term institutional outcomes.
            </p>
            
          </div>
        </div>

        {/* Right Sidebar - Premium Technical, Linguistic & Social Breakdown */}
        <div className="lg:col-span-5">
          <div className="premium-card rounded-3xl p-10 sticky top-40 shadow-2xl bg-zinc-900/40 border border-zinc-800 backdrop-blur-sm">
            
            {/* Social Connectivity Nodes (SVG Based) */}
            <div className="flex justify-between items-center mb-10 border-b border-amber-500/20 pb-6">
               <div className="flex gap-5">
                  <a href="https://www.linkedin.com/in/vignesh-murugesan376" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-amber-400 transition-colors"><Icons.Linkedin /></a>
                  <a href="https://github.com/VIGNESH-MT" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-amber-400 transition-colors"><Icons.Github /></a>
                  <a href="https://leetcode.com/u/vignesh-17/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-amber-400 transition-colors"><Icons.LeetCode /></a>
                  <a href="https://medium.com/@VIGNESH-MURUGESAN" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-amber-400 transition-colors"><Icons.Medium /></a>
               </div>
               <div className="flex flex-col items-end">
                  <a href="mailto:vigneshm90160@gmail.com" className="text-[10px] text-zinc-400 hover:text-amber-200 transition-colors font-mono uppercase">Primary_Node</a>
                  <a href="mailto:vigneshmurugesan8588@gmail.com" className="text-[10px] text-zinc-600 hover:text-amber-200 transition-colors font-mono uppercase tracking-tighter text-right">Secondary_M</a>
               </div>
            </div>

            <h3 className="text-amber-400 font-bold mb-10 tracking-[0.2em] uppercase text-xs">
              Technical Stack
            </h3>
            
            <div className="space-y-8">
              <div>
                <span className="text-zinc-500 text-[10px] uppercase tracking-widest block mb-2">Core Intelligence</span>
                <p className="text-zinc-100 text-lg font-medium">NLP · Computer Vision · Causal Inference</p>
              </div>
              
              <div>
                <span className="text-zinc-500 text-[10px] uppercase tracking-widest block mb-2">Orchestration</span>
                <p className="text-zinc-100 text-lg font-medium">LangChain · MCP Server · Vector DBs</p>
              </div>

              <div>
                <span className="text-zinc-500 text-[10px] uppercase tracking-widest block mb-2">Production</span>
                <p className="text-zinc-100 text-lg font-medium">Docker · Flask · AWS · Streamlit</p>
              </div>

              {/* Language Proficiency Section */}
              <div className="pt-6 mt-6 border-t border-zinc-800">
                <span className="text-amber-500/80 text-[10px] uppercase tracking-widest block mb-4 font-bold">Linguistic Capability</span>
                <div className="grid grid-cols-2 gap-y-4">
                  <div>
                    <span className="text-zinc-500 text-[9px] uppercase block">Tamil</span>
                    <p className="text-zinc-100 font-medium">Native</p>
                  </div>
                  <div>
                    <span className="text-zinc-500 text-[9px] uppercase block">English</span>
                    <p className="text-zinc-100 font-medium">C1 Level</p>
                  </div>
                  <div>
                    <span className="text-zinc-500 text-[9px] uppercase block">German</span>
                    <p className="text-zinc-100 font-medium">A2 Level</p>
                  </div>
                  <div>
                    <span className="text-zinc-500 text-[9px] uppercase block">Dutch</span>
                    <p className="text-zinc-100 font-medium">A1 Level</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <div className="h-px w-full bg-gradient-to-r from-amber-500/50 to-transparent mb-6"></div>
              <p className="text-amber-200/70 text-sm font-light italic">
                Bridging the gap between research-depth and enterprise-readiness.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Decoration */}
      <div className="mt-40 opacity-20 hover:opacity-100 transition-opacity duration-700">
        <div className="flex justify-between text-[3rem] font-black text-zinc-800 select-none leading-none tracking-tighter uppercase">
          <span>Applied AI Engineer</span>
          <span>Computer Vision bridging research</span>
          <span>Machine Learning Engineer</span>
          <span>Data Engineering</span>
        </div>
      </div>

    </section>
  );
}