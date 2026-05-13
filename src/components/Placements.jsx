import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, DollarSign } from 'lucide-react';

const Placements = () => {
  const companies = [
    "Amazon", "TCS", "Accenture", "Capgemini", "HCL", "DXC", "Dell", "Microsoft", "Google", "IBM"
  ];

  return (
    <section id="placements" className="py-24 relative z-10 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 uppercase">
            Placement <span className="neon-text-green">Dashboard</span>
          </h2>
          <div className="w-24 h-1 bg-cyber-green mx-auto shadow-[0_0_10px_#00ff99]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="glass-card p-8 border-cyber-green/30 text-center relative overflow-hidden group hover:bg-cyber-green/5 transition-colors">
            <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-150 transition-transform duration-500">
              <TrendingUp className="w-32 h-32 text-cyber-green" />
            </div>
            <h3 className="text-5xl font-heading font-black text-white mb-2 relative z-10">95<span className="text-cyber-green">%</span></h3>
            <p className="text-gray-400 font-cyber uppercase tracking-widest text-sm relative z-10">Placement Rate</p>
          </div>
          
          <div className="glass-card p-8 border-cyber-blue/30 text-center relative overflow-hidden group hover:bg-cyber-blue/5 transition-colors">
            <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-150 transition-transform duration-500">
              <DollarSign className="w-32 h-32 text-cyber-blue" />
            </div>
            <h3 className="text-5xl font-heading font-black text-white mb-2 relative z-10">45<span className="text-cyber-blue text-3xl">LPA</span></h3>
            <p className="text-gray-400 font-cyber uppercase tracking-widest text-sm relative z-10">Highest Package</p>
          </div>

          <div className="glass-card p-8 border-purple-500/30 text-center relative overflow-hidden group hover:bg-purple-500/5 transition-colors">
            <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-150 transition-transform duration-500">
              <Briefcase className="w-32 h-32 text-purple-500" />
            </div>
            <h3 className="text-5xl font-heading font-black text-white mb-2 relative z-10">120<span className="text-purple-500">+</span></h3>
            <p className="text-gray-400 font-cyber uppercase tracking-widest text-sm relative z-10">Top Recruiters</p>
          </div>
        </div>

        <div className="mt-12 overflow-hidden border-y border-white/10 py-8 relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
          
          <div className="flex w-[200%] animate-[matrix-rain_20s_linear_infinite]" style={{ animationName: 'marquee', animationDuration: '30s', animationTimingFunction: 'linear', animationIterationCount: 'infinite' }}>
            {/* Double the array for seamless scrolling */}
            {[...companies, ...companies].map((company, index) => (
              <div key={index} className="flex-none mx-8 px-6 py-3 glass-card border-white/5 text-gray-300 font-heading text-xl font-bold tracking-wider hover:text-white hover:border-cyber-green/50 hover:shadow-[0_0_15px_rgba(0,255,153,0.2)] transition-all cursor-default">
                {company}
              </div>
            ))}
          </div>
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}} />
        </div>
      </div>
    </section>
  );
};

export default Placements;
