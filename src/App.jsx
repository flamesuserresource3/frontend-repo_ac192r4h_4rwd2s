import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-inter">
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <Contact />
      </main>
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-6 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} XYZ Studio — 3D Product Animation</p>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/visualedge3d" target="_blank" rel="noreferrer" className="hover:text-gray-900">Instagram</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
