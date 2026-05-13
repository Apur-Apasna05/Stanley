import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Activities from './components/Activities';
import Faculty from './components/Faculty';
import Placements from './components/Placements';
import Community from './components/Community';
import Gallery from './components/Gallery';
import News from './components/News';
import Contact from './components/Contact';
import MatrixRain from './components/MatrixRain';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-cyber relative overflow-hidden">
      <CustomCursor />
      <MatrixRain />
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Achievements />
          <Projects />
          <Activities />
          <Faculty />
          <Placements />
          <Community />
          <Gallery />
          <News />
          <Contact />
        </main>
        
        <footer className="border-t border-white/10 bg-black/80 backdrop-blur-md py-8 text-center">
          <p className="text-gray-500 font-cyber text-sm">
            © {new Date().getFullYear()} Department of Artificial Intelligence and Data Science. Stanley College of Engineering and Technology for Women. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
