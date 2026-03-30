// components/ContactForm.jsx
'use client';
import React, { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: null, message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ loading: false, success: false, message: 'Please fill all fields.' });
      return;
    }

    setStatus({ loading: true, success: null, message: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus({ loading: false, success: true, message: 'Message sent. Thank you!' });
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus({ loading: false, success: false, message: data.error || 'Failed to send message.' });
      }
    } catch (err) {
      setStatus({ loading: false, success: false, message: 'Something went wrong.' });
    }
  };

  return (
    <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-green-800/30 max-w-2xl">
      <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
      <p className="mt-2 text-gray-300">Ready to build something great? Send me a message and let's create something amazing together.</p>

      <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-6">
        <div className="relative">
          <input 
            name="name" 
            value={form.name} 
            onChange={handleChange} 
            placeholder="Your name" 
            required 
            className="w-full bg-black/30 border-2 border-green-800/30 rounded-xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
          />
        </div>
        
        <div className="relative">
          <input 
            name="email" 
            value={form.email} 
            onChange={handleChange} 
            placeholder="Your email" 
            type="email" 
            required 
            className="w-full bg-black/30 border-2 border-green-800/30 rounded-xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
          />
        </div>
        
        <div className="relative">
          <textarea 
            name="message" 
            value={form.message} 
            onChange={handleChange} 
            placeholder="Tell me about your project" 
            required 
            rows={6} 
            className="w-full bg-black/30 border-2 border-green-800/30 rounded-xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none"
          ></textarea>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
          <button 
            type="submit" 
            disabled={status.loading} 
            className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-800 text-white font-medium rounded-xl hover:from-green-700 hover:to-green-900 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-60 disabled:transform-none disabled:shadow-md w-full sm:w-auto text-center"
          >
            {status.loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button>
          
          {status.message && (
            <div className={`text-sm font-medium px-4 py-2 rounded-lg ${status.success ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'}`}>
              {status.message}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
