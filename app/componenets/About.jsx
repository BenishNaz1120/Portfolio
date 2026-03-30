// components/About.jsx
import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold">About</h2>
          <p className="mt-4 text-slate-600 max-w-3xl">
            I’m a passionate MERN Stack Developer with experience building real-world web applications using Node.js, Express, React, and MongoDB.
            I focus on maintainable backends, clean frontends, and shipping reliable products.
          </p>

          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-3"><span className="text-indigo-500">•</span> Car Wash Management System</li>
            <li className="flex items-start gap-3"><span className="text-indigo-500">•</span> Golf QR System (Real-time scoring)</li>
            <li className="flex items-start gap-3"><span className="text-indigo-500">•</span> Magazine Subscription Platform</li>
          </ul>
        </div>

        <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-800/30">
          <h3 className="font-semibold text-white">Quick Facts</h3>
          <div className="mt-3 text-gray-300 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-green-400">📍</span> Pakistan
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">💼</span> Open to remote work
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">💻</span> Available for freelance projects
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
