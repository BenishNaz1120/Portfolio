// app/layout.jsx
import './globals.css';

export const metadata = {
  title: 'Benish Naz — MERN Developer',
  description: 'Portfolio — MERN Stack Developer (Node.js, React, MongoDB)',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
