"use client"; // Required for Next.js 16 interactive components

import React from 'react';
import { Linkedin, Github, Mail, MessageSquare } from 'lucide-react';

export default function EliteContact() {
  const contactNodes = [
    {
      label: "Professional_Network",
      title: "LinkedIn",
      value: "Vignesh Murugesan",
      link: "https://www.linkedin.com/in/vignesh-murugesan376/", 
      icon: <Linkedin size={20} />,
      color: "hover:text-[#0077B5]"
    },
    {
      label: "Code_Repository",
      title: "GitHub",
      value: "Source_Intelligence",
      link: "https://github.com/VIGNESH-MT", 
      icon: <Github size={20} />,
      color: "hover:text-[#D1FF26]"
    },
    {
      label: "Primary_Node",
      title: "Direct_Email",
      value: "vigneshmurugesan8588@gmail.com",
      link: "mailto:vigneshmurugesan8588@gmail.com",
      icon: <Mail size={20} />,
      color: "hover:text-[#D1FF26]"
    },
    {
      label: "Secondary_Node",
      title: "Redundant_Mail",
      value: "vigneshm90160@gmail.com",
      link: "mailto:vigneshm90160@gmail.com",
      icon: <Mail size={20} />,
      color: "hover:text-[#D1FF26]"
    },
    {
      label: "Secure_Line",
      title: "WhatsApp / Telegram",
      value: "+91 99949 33645",
      link: "https://wa.me/919994933645",
      icon: <MessageSquare size={20} />,
      color: "hover:text-[#25D366]"
    }
  ];

  return (
    <section className="w-full min-h-screen pt-40 pb-20 px-6 md:px-20 lg:px-40 bg-[#020202] text-zinc-100 selection:bg-[#D1FF26] selection:text-black">
      
      {/* 01. ACCESS HEADER */}
      <div className="relative border-b border-zinc-900 pb-16 mb-32">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[2px] w-12 bg-[#D1FF26]"></div>
          <span className="text-[#D1FF26] font-mono text-[10px] tracking-[0.6em] uppercase">Access_Directory_v.4.0</span>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          <h1 className="text-7xl md:text-[12rem] font-black tracking-tighter leading-[0.8] uppercase">
            Direct<br/><span className="text-zinc-800">Access</span>
          </h1>
          <div className="max-w-[280px] text-left md:text-right space-y-4">
            <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest leading-relaxed italic">
              "Efficiency is the ultimate luxury." 
              <br/>Select a node to initiate transmission.
            </p>
          </div>
        </div>
      </div>

      {/* 02. REDIRECTION GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900">
        {contactNodes.map((node, index) => (
          <a 
            key={index}
            href={node.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group bg-[#020202] p-12 flex flex-col justify-between h-80 transition-all duration-500 ${node.color}`}
          >
            <div className="flex justify-between items-start">
              <span className="font-mono text-[9px] text-zinc-600 uppercase tracking-widest">
                Node_0{index + 1} // {node.label}
              </span>
              <div className="text-zinc-700 group-hover:text-inherit transition-colors duration-500">
                {node.icon}
              </div>
            </div>

            <div>
              <h3 className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em] mb-2">{node.title}</h3>
              <p className="text-xl md:text-2xl font-light tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                {node.value}
              </p>
            </div>

            <div className="flex items-center gap-4 overflow-hidden">
              <div className="h-[1px] w-0 group-hover:w-12 bg-current transition-all duration-500"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-all duration-500">
                Establish_Connection
              </span>
            </div>
          </a>
        ))}

        {/* 03. AVAILABILITY STATUS BOX */}
        <div className="bg-zinc-950 p-12 flex flex-col justify-center border-l border-zinc-900">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-2 w-2 bg-[#D1FF26] rounded-full animate-pulse shadow-[0_0_10px_#D1FF26]"></div>
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Status: Fully_Operational</span>
          </div>
          <p className="text-zinc-500 text-sm font-light leading-relaxed">
            Accepting select <span className="text-white">Applied AI Governance</span> and <span className="text-white">Space Systems Architecture</span> inquiries for Q4 2026.
          </p>
        </div>
      </div>

      {/* 04. SOVEREIGN FOOTER */}
      <div className="mt-40 text-center space-y-12">
        <div className="h-20 w-px bg-gradient-to-b from-zinc-800 to-transparent mx-auto"></div>
        <div className="flex justify-between items-center text-zinc-800 font-mono text-[9px] uppercase tracking-[0.5em] max-w-7xl mx-auto">
          <span>Security: Standard_Redirection</span>
          <span>End of Document // VM_90160</span>
          <span>Verified_2026</span>
        </div>
      </div>

    </section>
  );
}