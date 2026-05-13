import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Projects', href: '#projects' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Placements', href: '#placements' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-cyber-green/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-4 cursor-pointer">
            <img 
              src="https://static.wixstatic.com/media/10b4dc_3a8dc09cf9e14aa784f2471a306a0021~mv2.png/v1/crop/x_65,y_64,w_6030,h_1674/fill/w_658,h_182,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Logo%20Stanley%20(2).png" 
              alt="Stanley College" 
              className="h-12 w-auto object-contain bg-white/90 p-1.5 rounded-sm" 
            />
            <div className="hidden sm:block border-l border-white/20 pl-4">
              <span className="text-white font-heading font-bold text-xl tracking-wider block">AI&DS<span className="text-cyber-green">.DEPT</span></span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-cyber-green hover:neon-text-green px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-green transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <a href="#contact" className="ml-4 px-6 py-2 glass-card neon-border-blue text-cyber-blue font-bold rounded-none hover:bg-cyber-blue/10 transition-all duration-300 uppercase tracking-widest text-sm">
                Connect_
              </a>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6 text-cyber-green" /> : <Menu className="h-6 w-6 text-cyber-green" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-card absolute w-full border-b border-cyber-green/20"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-cyber-green block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
