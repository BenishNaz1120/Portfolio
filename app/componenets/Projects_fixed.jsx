// components/Projects.jsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import projects from '../data/project';

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-b from-black/50 to-black/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            My Projects
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg">
            Here are some of my recent works that showcase my skills and experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <motion.article 
              key={p.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8 }} 
              className="group relative overflow-hidden rounded-2xl bg-black/50 backdrop-blur-sm border border-green-800/30 shadow-lg hover:shadow-xl transition-all duration-300 text-white hover:bg-black/70"
            >
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-gray-200 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span 
                      key={s} 
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-green-900/30 text-green-300 group-hover:bg-green-800/50 backdrop-blur-sm transition-all duration-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-green-800/30 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {p.live && (
                      <a 
                        href={p.live} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-transparent border border-green-600/50 rounded-lg hover:bg-green-600/10 transition-colors"
                      >
                        Live Demo
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    {p.repo && (
                      <a 
                        href={p.repo} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[rgba(255,255,255,0.1)] rounded-lg hover:bg-[rgba(255,255,255,0.2)] backdrop-blur-sm transition-all duration-300"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Decorative accent */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-green-700 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-green-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
