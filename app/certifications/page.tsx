"use client";

import React from 'react';

const CertificationMap = [
  {
    sector: "Intelligence & Neural Compute",
    id: "SEC-01",
    credentials: [
      { name: "Fundamentals of Deep Learning", org: "NVIDIA", desc: "Implementation of gradient descent and neural architecture optimization via GPU-acceleration.", link: "#" },
      { name: "Accelerated Data Science", org: "NVIDIA", desc: "End-to-end GPU-accelerated pipelines using RAPIDS and high-performance CUDA frameworks.", link: "#" },
      { name: "AI Foundations Practitioner", org: "Qlik", desc: "Validated mastery of ML heuristics, ethical deployment, and predictive pattern recognition.", link: "https://www.credly.com/badges/4ce00c7b-7351-4101-bc85-e3d92f200233" },
      { name: "Deep Learning Specialization", org: "LinkedIn Learning", desc: "Deep-dive into multi-layer perceptron dynamics, stochastic processes, and regularization.", link: "http://linkedin.com/learning/certificates/f55eaca3766c5bd1efb58e31a2ac9a0cc67ecb5adc74c61921a34875944489e7" },
      { name: "AI Engineering Experience", org: "Cognizant", desc: "Designing AI-driven decision engines to automate enterprise-scale business logic workflows.", link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Cognizant/5N2ygyhzMWjKQmgCK_Cognizant_8hbXk84Fxco6TysuL_1723104046342_completion_certificate.pdf" }
    ]
  },
  {
    sector: "Quant Finance & Global Markets",
    id: "SEC-02",
    credentials: [
      { name: "Investment Banking Analyst", org: "J.P. Morgan", desc: "M&A target modeling, capital structure analysis, and enterprise-level risk assessment.", link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/bWqaecPDbYAwSDqJy_JPMorgan%20Chase%20&%20Co._8hbXk84Fxco6TysuL_1722829304549_completion_certificate.pdf" },
      { name: "Global Markets Engineering", org: "Goldman Sachs", desc: "Developing algorithms for liquidity management and quantitative trading desk simulations.", link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/eLeZHcwX7CqLhhps7_Goldman%20Sachs_8hbXk84Fxco6TysuL_1724307374756_completion_certificate.pdf" },
      { name: "Corporate Banking Tech", org: "J.P. Morgan", desc: "Analyzing high-frequency financial signals for corporate debt and liquidity forecasting.", link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/JPMorgan%20Chase%20Corporate/4dy5SP43KMPppKz2i_JPMorgan%20Chase%20&%20Co._8hbXk84Fxco6TysuL_1723175194436_completion_certificate.pdf" },
      { name: "Retail Banking Analytics", org: "Commonwealth Bank", desc: "Predictive modeling of customer financial behavior and default risk using behavioral data.", link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Commonwealth%20Bank/smwfytX3mcLboA9bf_Commonwealth%20Bank_8hbXk84Fxco6TysuL_1723101063854_completion_certificate.pdf" },
      { name: "Wealth Management Strategy", org: "Lloyds Banking Group", desc: "Strategic asset allocation and portfolio optimization for high-net-worth ecosystems.", link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Lloyds%20Banking%20Group/EuvC8GPjkZ6aiP9p_Lloyds%20Banking%20Group_8hbXk84Fxco6TysuL_1725357556835_completion_certificate.pdf" }
    ]
  },
  {
    sector: "Management Strategy & Big Data",
    id: "SEC-03",
    credentials: [
      { name: "Strategy Consulting Experience", org: "BCG", desc: "Analytical problem solving for high-stakes corporate market entry and growth strategies.", link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/BCG%20/gabev3vXhuACr48eb_BCG_8hbXk84Fxco6TysuL_1722593508868_completion_certificate.pdf" },
      { name: "Strategic Value Chains", org: "BCG", desc: "Optimization of corporate growth levers and operational efficiency via quantitative modeling.", link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/BCG%20/Tcz8gTtprzAS4xSoK_BCG_8hbXk84Fxco6TysuL_1722599901490_completion_certificate.pdf" },
      { name: "Advanced Power BI Engineering", org: "PwC Switzerland", desc: "Developing complex DAX queries and high-fidelity visualizations for audit analytics.", link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/PwC%20Switzerland/a87GpgE6tiku7q3gu_PwC%20Switzerland_8hbXk84Fxco6TysuL_1722933169518_completion_certificate.pdf" },
      { name: "IT Audit & Digital Risk", org: "PwC Switzerland", desc: "Validating system integrity and compliance through digital risk assessment frameworks.", link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/PwC%20Switzerland/Kaib4AmLSAG5mDsD4_PwC%20Switzerland_8hbXk84Fxco6TysuL_1724147514808_completion_certificate.pdf" },
      { name: "Data Science Simulation", org: "Quantium", desc: "Processing large-scale retail transaction data for granular customer segment insights.", link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Quantium/NkaC7knWtjSbi6aYv_Quantium_8hbXk84Fxco6TysuL_1722832455089_completion_certificate.pdf" }
    ]
  },
  {
    sector: "Enterprise & Global Logistics",
    id: "SEC-04",
    credentials: [
      { name: "Commercial Data Analysis", org: "British Airways", desc: "Optimizing airline logistics and customer demand forecasting via predictive analytics.", link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/British%20Airways/NjynCWzGSaWXQCxSX_British%20Airways_8hbXk84Fxco6TysuL_1722830175306_completion_certificate.pdf" },
      { name: "Strategy & Tech Advisory", org: "Accenture", desc: "Architecting cloud-native solutions and digital transformation roadmaps for Fortune 500s.", link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_8hbXk84Fxco6TysuL_1723098298080_completion_certificate.pdf" },
      { name: "Software Engineering Core", org: "NY Jobs CEO Council", desc: "System design and software lifecycle management for urban-scale tech ecosystems.", link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/New%20York%20Jobs%20CEO%20Council/TtC5eCKD3FFzH5xcz_New%20York%20Jobs%20CEO%20Council_8hbXk84Fxco6TysuL_1723176942146_completion_certificate.pdf" }
    ]
  }
];

export default function EliteCertifications() {
  return (
    <div className="bg-[#000] text-white py-24 px-6 md:px-12 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* UPPER HUD */}
        <div className="flex flex-col md:flex-row justify-between items-baseline border-b border-zinc-800 pb-12 mb-24">
          <div className="space-y-4">
            <h2 className="text-8xl font-black tracking-tighter uppercase leading-[0.8]">
              Skill<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-zinc-800">Validation</span>
            </h2>
            <div className="flex gap-4 font-mono text-[9px] text-amber-500/60 uppercase tracking-widest">
              <span>[ 19 Verified Nodes ]</span>
              <span>[ Integrity: Certified ]</span>
            </div>
          </div>
          <div className="hidden md:block text-right font-mono text-[10px] text-zinc-600 uppercase tracking-[0.4em] leading-relaxed">
            Data_Science_Dossier<br />
            System_Engineering_Certifications
          </div>
        </div>

        {/* MAPPING SECTORS */}
        <div className="space-y-40">
          {CertificationMap.map((sector) => (
            <div key={sector.id} className="relative">
              
              {/* Sector Title with Dynamic Bar */}
              <div className="flex items-center gap-6 mb-12">
                <span className="text-zinc-800 font-mono text-xs">{sector.id}</span>
                <h3 className="text-2xl font-bold tracking-tight text-zinc-400 uppercase italic">
                  {sector.sector}
                </h3>
                <div className="h-px flex-grow bg-gradient-to-r from-zinc-800 to-transparent"></div>
              </div>

              {/* High-Performance Scroller Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {sector.credentials.map((cert, i) => (
                  <div key={i} className="group relative bg-[#0a0a0a] border border-zinc-900 p-6 hover:border-amber-500/50 transition-all duration-500 rounded-lg overflow-hidden">
                    
                    {/* Glass Decorator */}
                    <div className="absolute -right-4 -top-4 w-16 h-16 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all"></div>
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <p className="text-amber-500 font-mono text-[9px] font-bold uppercase tracking-widest mb-3">
                        {cert.org}
                      </p>
                      <h4 className="text-lg font-bold text-white mb-3 tracking-tight group-hover:translate-x-1 transition-transform">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-zinc-500 leading-relaxed mb-8">
                        {cert.desc}
                      </p>
                      
                      <div className="mt-auto pt-6 border-t border-zinc-900 flex justify-between items-center">
                        <a 
                          href={cert.link} 
                          target="_blank" 
                          className="text-[9px] font-black uppercase text-zinc-600 group-hover:text-white transition-colors tracking-tighter"
                        >
                          View_Node →
                        </a>
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-amber-500 group-hover:animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* LOWER HUD */}
        <div className="mt-48 pt-12 border-t border-zinc-900 grid grid-cols-1 md:grid-cols-3 gap-12 items-center opacity-40">
           <div className="font-mono text-[8px] uppercase tracking-widest text-zinc-500 text-center md:text-left">
             Global_Credential_Standard: ISO_9001_ML
           </div>
           <div className="flex justify-center gap-2">
              {[...Array(6)].map((_, i) => <div key={i} className="w-8 h-1 bg-zinc-800 rounded-full"></div>)}
           </div>
           <div className="font-mono text-[8px] uppercase tracking-[0.5em] text-amber-500 text-center md:text-right">
             Verified_Dossier_Finalized
           </div>
        </div>
      </div>
    </div>
  );
}