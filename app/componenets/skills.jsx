// components/Skills.jsx
import React from 'react';

const skills = ['Node.js', 'Express.js', 'React.js', 'MongoDB', 'REST APIs', 'JWT', 'Vercel / Render', 'Git','Tailwind CSS','AWS','Next.js','Supabase','Stripe'];

export default function Skills() {
  return (
    <section id="skills" className="py-4">
      <h2 className="text-2xl font-bold">Skills</h2>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
        {skills.map((s) => (
          <div key={s} className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600/20 border border-green-600/50 rounded-lg hover:bg-green-600/30 transition-all hover:shadow-lg hover:shadow-green-500/10">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}
