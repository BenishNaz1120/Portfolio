'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center text-white py-20 px-6">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row-reverse items-center justify-between gap-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-48 h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 flex-shrink-0"
        >
          <img 
            src="/benish.jpg" 
            alt="Benish Naz" 
            className="w-full h-full object-cover rounded-full shadow-xl"
          />
        </motion.div>
        <div className="max-w-2xl">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-sm font-medium text-green-400 mb-4 inline-block px-3 py-1 rounded-full bg-[rgba(74,222,128,0.1)]"
          >
            Hi, I'm Benish Naz 
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white"
          >
            MERN Stack Developer
            <span className="block text-2xl md:text-3xl font-semibold mt-2 text-green-300">Node.js & React.js Specialist</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-6 text-lg text-gray-300 max-w-xl leading-relaxed"
          >
            I build fast, scalable, and user-friendly web applications — from admin dashboards to subscription platforms.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <button 
              onClick={() => scrollToSection('projects')} 
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-green-600 to-green-800 text-white font-medium shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="px-8 py-3.5 rounded-xl bg-transparent text-white border border-green-600/50 font-medium hover:bg-green-600/10 transition-all duration-300"
            >
              Get In Touch
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8 flex items-center gap-5"
          >
            <a 
              href="https://github.com/BenishNaz1120" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github" 
              className="w-10 h-10 rounded-full bg-green-600/10 border border-green-600/20 flex items-center justify-center text-green-400 hover:text-white hover:bg-green-600/30 transition-colors duration-300"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/benish-naz-0b126a220/" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn" 
              className="w-10 h-10 rounded-full bg-green-600/10 border border-green-600/20 flex items-center justify-center text-green-400 hover:text-white hover:bg-green-600/30 transition-colors duration-300"
            >
              <Linkedin size={18} />
            </a>
           
          </motion.div>
        </div>      </div>
    </section>
  );
}
