import React from 'react';
import { motion } from 'framer-motion';
import { Users, Code, Database, Bot, Palette } from 'lucide-react';

const Community = () => {
  const clubs = [
    { name: "Data Geeks", icon: Database, desc: "Data science, analytics and visualization.", color: "purple-500" },
    { name: "Robotics", icon: Bot, desc: "Building the hardware and automation of the future.", color: "cyber-green" },
    { name: "Coders", icon: Code, desc: "Competitive programming and software development.", color: "cyber-blue" },
    { name: "Kalakrithi", icon: Palette, desc: "Arts, culture and creative expression.", color: "pink-500" }
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 uppercase">
              Student <span className="neon-text-blue">Community</span>
            </h2>
            <p className="text-gray-400 font-cyber mb-8 leading-relaxed">
              Beyond academics, our vibrant student community drives innovation through various technical clubs and societies. We believe in peer learning, collaborative projects, and building a network that lasts a lifetime.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {clubs.map((club, index) => (
                <div key={index} className="flex items-start gap-4 p-4 glass-card border-white/5 hover:border-white/20 transition-colors">
                  <div className={`p-3 rounded-lg bg-${club.color}/10 text-${club.color}`}>
                    <club.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-heading font-bold mb-1">{club.name}</h4>
                    <p className="text-xs text-gray-500 font-cyber">{club.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative h-[500px]">
            <div className="absolute inset-0 bg-cyber-blue/10 rounded-full blur-[100px]"></div>
            <div className="relative w-full h-full glass-card border border-cyber-blue/30 rounded-2xl overflow-hidden flex items-center justify-center p-8 group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-500 mix-blend-luminosity group-hover:mix-blend-normal"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              
              <div className="relative z-10 text-center">
                <Users className="w-16 h-16 text-cyber-blue mx-auto mb-4 animate-bounce" />
                <h3 className="text-3xl font-heading font-black text-white mb-2">Join The Network</h3>
                <button className="px-6 py-2 mt-4 border border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black font-bold uppercase tracking-widest text-sm transition-colors">
                  Explore Clubs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
