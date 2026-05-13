import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TerminalSquare as Github, ExternalLink, Cpu, Shield, Globe, Database } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'AI / ML', 'Cybersecurity', 'Web Dev', 'IoT'];

  const projects = [
    {
      title: "Neural Vision Net",
      category: "AI / ML",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
      team: "Team Alpha",
      tech: ["Python", "TensorFlow", "OpenCV"],
      desc: "Real-time object detection and anomaly recognition system for smart city surveillance.",
      icon: Cpu
    },
    {
      title: "Quantum Secure Comm",
      category: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
      team: "CipherTech",
      tech: ["Rust", "Cryptography", "WebSockets"],
      desc: "End-to-end encrypted messaging protocol utilizing post-quantum cryptographic algorithms.",
      icon: Shield
    },
    {
      title: "Decentralized Campus",
      category: "Web Dev",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1000&auto=format&fit=crop",
      team: "WebWeavers",
      tech: ["React", "Node.js", "Solidity"],
      desc: "Blockchain-based credential verification and academic record management system.",
      icon: Globe
    },
    {
      title: "Smart Grid Analyzer",
      category: "IoT",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
      team: "IoT Nexus",
      tech: ["C++", "Arduino", "AWS IoT"],
      desc: "Predictive maintenance system for campus power grids using sensor data analytics.",
      icon: Database
    }
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase">
              Project <span className="neon-text-green">Showcase</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-sm font-cyber uppercase tracking-wider transition-all duration-300 border ${
                  filter === cat 
                    ? 'border-cyber-green bg-cyber-green/20 text-cyber-green shadow-[0_0_10px_rgba(0,255,153,0.3)]' 
                    : 'border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.title}
                className="glass-card overflow-hidden group border-white/5 hover:border-cyber-green/50 transition-colors duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/80 backdrop-blur-md border border-white/10 text-xs font-cyber text-white uppercase tracking-widest">
                    {project.category}
                  </div>
                </div>
                
                <div className="p-6 relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-green to-cyber-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  
                  <h3 className="text-2xl font-heading font-bold text-white mb-2 flex items-center gap-2">
                    <project.icon className="w-5 h-5 text-cyber-green" /> {project.title}
                  </h3>
                  <p className="text-gray-400 font-cyber text-sm mb-4 line-clamp-2">{project.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-2 py-1 text-xs font-cyber border border-gray-700 text-gray-300">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-white/10">
                    <span className="text-sm font-cyber text-gray-500">By {project.team}</span>
                    <div className="flex gap-3">
                      <a href="#" className="text-gray-400 hover:text-cyber-green transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-cyber-blue transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
