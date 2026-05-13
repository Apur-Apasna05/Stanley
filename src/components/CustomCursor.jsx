import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-cyber-green pointer-events-none z-[9999] mix-blend-screen"
        variants={variants}
        animate="default"
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <div 
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyber-blue pointer-events-none z-[10000]"
        style={{ transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px)` }}
      />
    </>
  );
};

export default CustomCursor;
