import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Terminal, MapPin } from 'lucide-react';

const TimelineItem = ({ year, title, desc, align, color }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div ref={ref} className={`mb-12 flex justify-between items-center w-full ${align === 'right' ? 'flex-row-reverse' : ''}`}>
      <div className="order-1 w-5/12 hidden md:block"></div>
      
      <div className="z-20 flex items-center order-1 bg-black shadow-xl w-10 h-10 rounded-full border-2 border-cyber-green/50">
        <h1 className="mx-auto font-semibold text-lg text-white font-cyber text-xs p-1">
          <Terminal className={`w-4 h-4 text-${color}`} />
        </h1>
      </div>
      
      <motion.div
        initial={{ opacity: 0, x: align === 'left' ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="order-1 glass-card border border-white/5 w-full md:w-5/12 px-6 py-4 relative group hover:border-cyber-green/30 transition-colors"
      >
        <div className={`absolute top-1/2 ${align === 'left' ? '-right-3' : '-left-3'} transform -translate-y-1/2 w-3 h-3 bg-cyber-green rotate-45 hidden md:block group-hover:bg-cyber-blue transition-colors`}></div>
        <h3 className="mb-3 font-bold text-white text-xl font-heading flex items-center justify-between">
          {title}
          <span className={`text-xs text-${color} border border-${color}/30 px-2 py-1`}>{year}</span>
        </h3>
        <p className="text-sm leading-snug tracking-wide text-gray-400 font-cyber">
          {desc}
        </p>
      </motion.div>
    </div>
  );
};

const Activities = () => {
  const activities = [
    { year: "2026", title: "Global Hackathon", desc: "Hosted 48-hour international coding competition focusing on AI safety.", align: "left", color: "cyber-green" },
    { year: "2025", title: "Women in Tech Summit", desc: "Annual gathering of industry leaders and students to promote diversity.", align: "right", color: "cyber-blue" },
    { year: "2025", title: "Cybersecurity Workshop", desc: "Hands-on training on penetration testing and secure coding practices.", align: "left", color: "purple-500" },
    { year: "2024", title: "AI/ML Symposium", desc: "Presentations on cutting-edge research in natural language processing.", align: "right", color: "cyber-green" },
  ];

  return (
    <section id="activities" className="py-24 relative z-10 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 uppercase">
            Department <span className="neon-text-green">Timeline</span>
          </h2>
          <div className="w-24 h-1 bg-cyber-green mx-auto shadow-[0_0_10px_#00ff99]"></div>
        </div>

        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-white h-full border left-1/2 hidden md:block"></div>
          {activities.map((act, index) => (
            <TimelineItem key={index} {...act} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
