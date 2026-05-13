import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Star, ShieldAlert, Cpu, Code2, Globe } from 'lucide-react';

const AchievementCard = ({ icon: Icon, title, desc, color }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className={`glass-card p-6 border-${color}/20 hover:neon-border-${color.split('-')[1]} transition-all duration-500 group relative overflow-hidden`}
    >
      <div className={`absolute top-0 right-0 w-32 h-32 bg-${color}/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150`}></div>
      <Icon className={`w-10 h-10 text-${color} mb-4 relative z-10`} />
      <h3 className="text-xl font-heading font-bold text-white mb-2 relative z-10">{title}</h3>
      <p className="text-gray-400 font-cyber text-sm relative z-10">{desc}</p>
    </motion.div>
  );
};

const Achievements = () => {
  const achievements = [
    { icon: Trophy, title: "University Rank Holders", desc: "Top positions secured in Osmania University examinations continuously.", color: "cyber-green" },
    { icon: Code2, title: "Smart India Hackathon", desc: "National level winners in software edition solving complex problems.", color: "cyber-blue" },
    { icon: Globe, title: "Research Publications", desc: "150+ papers published in reputed IEEE and Springer journals.", color: "purple-500" },
    { icon: Star, title: "Placement Records", desc: "Highest package of 40+ LPA with 95% overall placement rate.", color: "cyber-green" },
    { icon: Cpu, title: "AI/ML Innovations", desc: "Award-winning projects in deep learning and computer vision domains.", color: "cyber-blue" },
    { icon: ShieldAlert, title: "Cyber Defense", desc: "Top ranks in national level Capture The Flag (CTF) competitions.", color: "purple-500" }
  ];

  return (
    <section id="achievements" className="py-24 relative z-10 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 uppercase">
            Hall of <span className="neon-text-blue">Fame</span>
          </h2>
          <div className="w-24 h-1 bg-cyber-blue mx-auto shadow-[0_0_10px_#00bfff]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <AchievementCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
