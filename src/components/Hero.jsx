import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Cpu, Shield, Code, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,153,0.1)_0,rgba(0,0,0,1)_50%)]"></div>
        <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CgkJPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPgoJCTxwYXRoIGQ9Ik0wIDBoMXY0MEgweiIgZmlsbD0icmdiYSgwLCAyNTUsIDE1MywgMC4wNSkiLz4KCQk8cGF0aCBkPSJNMCAwaDQwdjFIMHoiIGZpbGw9InJnYmEoMCwgMjU1LCAxNTMsIDAuMDUpIi8+Cjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">


          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-heading font-black text-white mb-6 leading-tight"
          >
            DEPARTMENT OF <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-green to-cyber-blue drop-shadow-[0_0_15px_rgba(0,255,153,0.5)]">
              ARTIFICIAL INTELLIGENCE & DATA SCIENCE
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 font-cyber mb-12"
          >
            Innovating the Future with AI, Cybersecurity & Emerging Technologies
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="#about" className="group relative px-8 py-4 bg-cyber-green/10 border border-cyber-green text-cyber-green font-bold uppercase tracking-widest hover:bg-cyber-green hover:text-black transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Explore Dept <ChevronRight className="w-4 h-4" />
              </span>
              <div className="absolute inset-0 w-0 bg-cyber-green transition-all duration-[250ms] ease-out group-hover:w-full z-0"></div>
            </a>
            
            <a href="#achievements" className="group px-8 py-4 glass-card border border-cyber-blue/30 text-cyber-blue font-bold uppercase tracking-widest hover:bg-cyber-blue/10 hover:neon-border-blue transition-all duration-300">
              Achievements
            </a>
            
            <a href="#projects" className="group px-8 py-4 glass-card border border-white/10 text-white font-bold uppercase tracking-widest hover:bg-white/5 transition-all duration-300">
              Projects
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20 flex justify-center gap-8 text-gray-500"
          >
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="p-3 rounded-full border border-gray-800 group-hover:border-cyber-green group-hover:text-cyber-green transition-colors">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="text-xs font-cyber uppercase tracking-widest group-hover:text-cyber-green transition-colors">AI / ML</span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="p-3 rounded-full border border-gray-800 group-hover:border-cyber-blue group-hover:text-cyber-blue transition-colors">
                <Shield className="w-6 h-6" />
              </div>
              <span className="text-xs font-cyber uppercase tracking-widest group-hover:text-cyber-blue transition-colors">Cybersec</span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="p-3 rounded-full border border-gray-800 group-hover:border-purple-500 group-hover:text-purple-500 transition-colors">
                <Code className="w-6 h-6" />
              </div>
              <span className="text-xs font-cyber uppercase tracking-widest group-hover:text-purple-500 transition-colors">DevOps</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-500 hover:text-cyber-green transition-colors">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
