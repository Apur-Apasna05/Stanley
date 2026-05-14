import React from 'react';
import { motion } from 'framer-motion';
import { Link as Linkedin, Mail, BookOpen, GraduationCap, User } from 'lucide-react';

const FacultyCard = ({ name, role, spec, exp, image, linkedin, email }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="glass-card p-6 border-white/10 hover:neon-border-blue transition-all duration-300 relative group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
      
      <div className="relative z-20 flex flex-col items-center">
        <div className="relative w-32 h-32 mb-6">
          <div className="absolute inset-0 rounded-full border-2 border-cyber-blue border-dashed animate-spin-slow"></div>
          <div className="absolute inset-2 rounded-full border border-cyber-green/50 overflow-hidden flex items-center justify-center bg-white/5">
            {image ? (
              <img src={image} alt={name} className="w-full h-full object-cover" />
            ) : (
              <User className="w-12 h-12 text-gray-500" />
            )}
          </div>
        </div>
        
        <h3 className="text-xl font-heading font-bold text-white mb-1 text-center group-hover:text-cyber-blue transition-colors">{name}</h3>
        <p className="text-sm text-cyber-green font-cyber uppercase tracking-widest mb-4 text-center">{role}</p>
        
        <div className="w-full space-y-2 mb-6">
          <div className="flex items-center gap-2 text-xs text-gray-400 font-cyber">
            <BookOpen className="w-4 h-4 text-gray-500" />
            <span className="truncate">{spec}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400 font-cyber">
            <GraduationCap className="w-4 h-4 text-gray-500" />
            <span>{exp} Experience</span>
          </div>
        </div>
        
        <div className="flex gap-4">
          <a href={linkedin} className="p-2 rounded-full bg-white/5 hover:bg-cyber-blue hover:text-black transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href={`mailto:${email}`} className="p-2 rounded-full bg-white/5 hover:bg-cyber-green hover:text-black transition-colors">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Faculty = () => {
  const teachingStaff = [
    { name: "Dr. K. Vaidehi", role: "Professor & HoD", spec: "M.E Ph.D", exp: "19 Years", image: "https://static.wixstatic.com/media/d15c6e_232b1b1b59b14459b727cab5c1119ba4~mv2.jpg/v1/crop/x_0,y_200,w_1200,h_1200/fill/w_718,h_718,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/AI%26DS%20department%20HoD.jpg", linkedin: "#", email: "hod.aids@stanley.edu.in" },
    { name: "Dr. G.V.S. Raju", role: "Professor & TPO", spec: "M.Tech Ph.D", exp: "21 Years", image: "/Stanley/faculty/raju.png", linkedin: "#", email: "raju@stanley.edu.in" },
    { name: "Dr. Vijender Kumar Solanki", role: "Assoc. Professor", spec: "M.E Ph.D", exp: "16 Years", image: "/Stanley/faculty/vijender.png", linkedin: "#", email: "vijender@stanley.edu.in" },
    { name: "Dr. C Swapna", role: "Assoc. Professor", spec: "M.Tech. Ph.D", exp: "13 Years", image: "/Stanley/faculty/swapna.png", linkedin: "#", email: "swapna@stanley.edu.in" },
    { name: "Asma Begum", role: "Asst. Professor", spec: "M.Tech (Ph.D)", exp: "15 Years", image: "/Stanley/faculty/asma.png", linkedin: "#", email: "asma@stanley.edu.in" },
    { name: "R. Sirisha", role: "Asst. Professor", spec: "M.Tech. (Ph.D)", exp: "6 Years", image: "/Stanley/faculty/sirisha.png", linkedin: "#", email: "sirisha@stanley.edu.in" },
    { name: "Nadia Anjum", role: "Asst. Professor", spec: "M.Tech. (Ph.D)", exp: "6 Years", image: "/Stanley/faculty/nadia.png", linkedin: "#", email: "nadia@stanley.edu.in" },
    { name: "Sumera", role: "Asst. Professor", spec: "M.Tech. (Ph.D)", exp: "6 Years", image: "/Stanley/faculty/sumera.png", linkedin: "#", email: "sumera@stanley.edu.in" },
    { name: "S. Sandhya Rani", role: "Asst. Professor", spec: "M.Tech. (Ph.D)", exp: "4 Years", image: "/Stanley/faculty/sandhya.png", linkedin: "#", email: "sandhya@stanley.edu.in" },
    { name: "Nandita Manvar", role: "Asst. Professor", spec: "M.Tech.", exp: "4 Years", image: "/Stanley/faculty/nandita.png", linkedin: "#", email: "nandita@stanley.edu.in" },
    { name: "Juveriya Talath", role: "Asst. Professor", spec: "M.E (Ph.D)", exp: "4 Years", image: "/Stanley/faculty/juveriya.png", linkedin: "#", email: "juveriya@stanley.edu.in" },
    { name: "Arjuman Subhani", role: "Asst. Professor", spec: "M.Tech. (Ph.D)", exp: "4 Years", image: "/Stanley/faculty/arjuman.png", linkedin: "#", email: "arjuman@stanley.edu.in" },
    { name: "Nasira Mahajbeen", role: "Asst. Professor", spec: "M.Tech. (Ph.D)", exp: "8 Years", image: "/Stanley/faculty/nasira.png", linkedin: "#", email: "nasira@stanley.edu.in" },
    { name: "Neha Tanveer", role: "Asst. Professor", spec: "M.Tech.", exp: "4 Years", image: "/Stanley/faculty/neha.png", linkedin: "#", email: "neha@stanley.edu.in" },
    { name: "Ayesha Sarwat", role: "Asst. Professor", spec: "M.Tech.", exp: "2 Years", image: "/Stanley/faculty/ayesha.png", linkedin: "#", email: "ayesha@stanley.edu.in" },
    { name: "Kuppam Sameera", role: "Asst. Professor", spec: "B.Tech M.Tech", exp: "5 Years", image: "/Stanley/faculty/kuppam.png", linkedin: "#", email: "sameera@stanley.edu.in" }
  ];

  const technicalStaff = [
    { name: "G. Shylaja", role: "Lab Programmer", spec: "B.Com", exp: "4 Years", linkedin: "#", email: "shylaja@stanley.edu.in" },
    { name: "Neela Gayathri", role: "Lab Programmer", spec: "M.Sc.", exp: "2 Years", linkedin: "#", email: "gayathri@stanley.edu.in" },
    { name: "G. Mounika", role: "Programmer", spec: "M.Sc", exp: "2 Years", linkedin: "#", email: "mounika@stanley.edu.in" },
    { name: "K. Devsani", role: "Programmer", spec: "B.E", exp: "2 Years", linkedin: "#", email: "devsani@stanley.edu.in" },
    { name: "U. Deepika", role: "Programmer", spec: "B.Tech", exp: "2 Years", linkedin: "#", email: "deepika@stanley.edu.in" }
  ];

  return (
    <section id="faculty" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 uppercase">
            Department <span className="neon-text-blue">Personnel</span>
          </h2>
          <div className="w-24 h-1 bg-cyber-blue mx-auto shadow-[0_0_10px_#00bfff]"></div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-heading font-bold text-white mb-8 border-l-4 border-cyber-blue pl-4">Teaching Staff</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachingStaff.map((faculty, index) => (
              <FacultyCard key={index} {...faculty} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-heading font-bold text-white mb-8 border-l-4 border-cyber-green pl-4">Technical Staff</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalStaff.map((staff, index) => (
              <FacultyCard key={index} {...staff} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
