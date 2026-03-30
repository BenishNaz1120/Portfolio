// components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-6 py-8 text-center text-slate-500">
      © {new Date().getFullYear()} Benish Naz — MERN Stack Developer
    </footer>
  );
}
