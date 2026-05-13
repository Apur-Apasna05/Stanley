import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Terminal, Users, Target, Award, BookOpen, Hexagon } from 'lucide-react';

const StatCard = ({ icon: Icon, value, label, delay }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="glass-card p-6 flex flex-col items-center justify-center border-cyber-green/20 hover:neon-border-green transition-all duration-300 relative overflow-hidden group"
    >
      <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <Hexagon className="w-24 h-24 text-cyber-green" />
      </div>
      <Icon className="w-8 h-8 text-cyber-green mb-4" />
      <h3 className="text-4xl font-heading font-bold text-white mb-2 tracking-wider">{value}</h3>
      <p className="text-sm font-cyber text-gray-400 uppercase tracking-widest text-center">{label}</p>
    </motion.div>
  );
};

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    { icon: Users, value: "1200+", label: "Students", delay: 0.2 },
    { icon: Target, value: "95%", label: "Placements", delay: 0.3 },
    { icon: Award, value: "50+", label: "Hackathons", delay: 0.4 },
    { icon: BookOpen, value: "150+", label: "Research Pubs", delay: 0.5 },
  ];

  return (
    <section id="about" className="py-24 relative relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 text-cyber-green mb-4">
              <Terminal className="w-5 h-5" />
              <span className="font-cyber uppercase tracking-widest text-sm">System.About()</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              ENGINEERING THE <span className="neon-text-green">FUTURE</span>
            </h2>
            <div className="space-y-6 text-gray-400 font-cyber leading-relaxed">
              <p>
                The Department of Artificial Intelligence and Data Science at Stanley College is a premier hub for technological innovation, fostering the next generation of women leaders in tech.
              </p>
              <p>
                Our cutting-edge curriculum focuses on Artificial Intelligence, Cybersecurity, Software Engineering, and emerging paradigms. We cultivate a robust coding culture where theoretical knowledge meets practical execution.
              </p>
              <div className="pl-4 border-l-2 border-cyber-green/50 py-2">
                <p className="text-gray-300 italic">
                  "Empowering women to architect the digital frontier through technical excellence and relentless innovation."
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
