import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const Gallery = () => {
  const images = [
    { src: "https://media.licdn.com/dms/image/v2/D5622AQEFhE9ey0PBLA/feedshare-shrink_1280/B56ZsmUzBDHsA0-/0/1765874546153?e=1780531200&v=beta&t=6_L4YedWULdZCABFXskX6ZnHtyVKoClAeDRHL6qZbQc", span: "col-span-2 row-span-2", title: "Department Event" },
    { src: "https://media.licdn.com/dms/image/v2/D5622AQF8zdlCpd8Qaw/feedshare-image-high-res/B56Zrc6TSqLgAo-/0/1764642872455?e=1780531200&v=beta&t=Lou72Pb7IeXr0gT6e5z5fWyv9hLfCOTl15DXFprDebM", span: "col-span-1 row-span-1", title: "AI Workshop" },
    { src: "https://media.licdn.com/dms/image/v2/D4E22AQE-iFOjlWIHyA/feedshare-shrink_1280/B4EZeMnJSoHwAw-/0/1750410764298?e=1780531200&v=beta&t=-3q-_FGO1UWUKNEJbLnYMK4ZCQNqw9oXTLbaN16r_2k", span: "col-span-1 row-span-2", title: "Hackathon Night" },
    { src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop", span: "col-span-1 row-span-1", title: "Women in Tech" },
    { src: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=800&auto=format&fit=crop", span: "col-span-2 row-span-1", title: "IoT Lab Session" },
  ];

  return (
    <section className="py-24 relative z-10 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 uppercase flex items-center justify-center gap-4">
            Visual <span className="neon-text-green">Log</span> <Camera className="text-cyber-green" />
          </h2>
          <div className="w-24 h-1 bg-cyber-green mx-auto shadow-[0_0_10px_#00ff99]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 0.98 }}
              className={`relative overflow-hidden rounded-xl group ${img.span} border border-white/10 hover:border-cyber-green/50 transition-colors`}
            >
              <img src={img.src} alt={img.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h4 className="text-white font-heading font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.title}</h4>
                <div className="w-10 h-0.5 bg-cyber-green mt-2 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 delay-100"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
