// components/Navbar.jsx
'use client';
import React from 'react';

export default function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="w-full ">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-semibold text-lg">Benish Naz</div>
        <div className="hidden md:flex gap-6 text-slate-600">
          <button onClick={() => scrollTo('about')} className="hover:text-slate-900">About</button>
          <button onClick={() => scrollTo('projects')} className="hover:text-slate-900">Projects</button>
          <button onClick={() => scrollTo('skills')} className="hover:text-slate-900">Skills</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-slate-900">Contact</button>
        </div>
      </div>
    </nav>
  );
}
