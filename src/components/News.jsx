import React from 'react';
import { Radio } from 'lucide-react';

const News = () => {
  const newsItems = [
    "🏆 Department secures 1st prize in National AI Hackathon 2026",
    "📢 Upcoming Guest Lecture on Post-Quantum Cryptography this Friday",
    "💼 Campus Placement Drive: Amazon, TCS, Microsoft recruiting next week",
    "🚀 New GPU Cluster installed in the AI Research Lab",
    "🌟 Stanley Women in Tech Summit registration now open",
  ];

  return (
    <div className="w-full bg-cyber-green/10 border-y border-cyber-green/30 py-3 relative z-10 overflow-hidden flex items-center">
      <div className="absolute left-0 top-0 bottom-0 px-4 bg-black border-r border-cyber-green/50 flex items-center gap-2 z-20 shadow-[10px_0_15px_rgba(0,0,0,0.8)]">
        <Radio className="w-5 h-5 text-cyber-green animate-pulse" />
        <span className="font-heading font-bold text-cyber-green uppercase text-sm tracking-widest hidden sm:inline">Live Feed</span>
      </div>
      
      <div className="flex w-[200%] sm:w-[150%] md:w-[120%] lg:w-[100%] animate-[marquee_20s_linear_infinite] ml-32 sm:ml-40" style={{ animationName: 'newsTicker', animationDuration: '40s', animationTimingFunction: 'linear', animationIterationCount: 'infinite' }}>
        <div className="flex gap-12 whitespace-nowrap">
          {[...newsItems, ...newsItems].map((item, index) => (
            <div key={index} className="text-gray-300 font-cyber text-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyber-blue rounded-full"></span>
              {item}
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes newsTicker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
};

export default News;
