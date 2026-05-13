import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, User as Facebook, Share2 as Twitter, AtSign as Instagram, Link as Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative z-10 bg-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 uppercase">
            Initialize <span className="neon-text-blue">Connection</span>
          </h2>
          <div className="w-24 h-1 bg-cyber-blue mx-auto shadow-[0_0_10px_#00bfff]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 border-cyber-blue/20"
          >
            <h3 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-2">
              <Mail className="text-cyber-blue" /> Transmit Message
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-xs font-cyber text-gray-400 uppercase tracking-widest mb-2">Identifier (Name)</label>
                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-cyber-blue focus:shadow-[0_0_10px_rgba(0,191,255,0.3)] transition-all font-cyber" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs font-cyber text-gray-400 uppercase tracking-widest mb-2">Comms Link (Email)</label>
                <input type="email" className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-cyber-blue focus:shadow-[0_0_10px_rgba(0,191,255,0.3)] transition-all font-cyber" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-xs font-cyber text-gray-400 uppercase tracking-widest mb-2">Data Packet (Message)</label>
                <textarea rows="4" className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-cyber-blue focus:shadow-[0_0_10px_rgba(0,191,255,0.3)] transition-all font-cyber resize-none" placeholder="Enter your message..."></textarea>
              </div>
              <button type="button" className="w-full py-3 bg-cyber-blue/10 border border-cyber-blue text-cyber-blue font-bold uppercase tracking-widest hover:bg-cyber-blue hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group">
                Send Request <Send className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="glass-card p-6 border-white/10 hover:border-cyber-green/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyber-green/10 text-cyber-green rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-heading font-bold mb-2">Coordinates</h4>
                  <p className="text-gray-400 font-cyber text-sm leading-relaxed">
                    Stanley College of Engineering and Technology for Women<br />
                    Chapel Road, Abids,<br />
                    Hyderabad, Telangana 500001
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 border-white/10 hover:border-cyber-blue/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyber-blue/10 text-cyber-blue rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-heading font-bold mb-2">Comms Array</h4>
                  <p className="text-gray-400 font-cyber text-sm">
                    Phone: +91 40 2323 4880<br />
                    Email: cme.dept@stanley.edu.in
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 border-white/10">
              <h4 className="text-white font-heading font-bold mb-4">Network Nodes</h4>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-cyber-blue hover:bg-cyber-blue/10 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-blue-400 hover:bg-blue-400/10 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-pink-500 hover:bg-pink-500/10 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-blue-600 hover:bg-blue-600/10 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
