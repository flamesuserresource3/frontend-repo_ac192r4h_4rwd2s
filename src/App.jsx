import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Story from './components/Story';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Story />
        <Contact />
      </main>
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-6 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Studio Aura — 3D Product Animation</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Instagram</a>
            <a href="#" className="hover:text-gray-900">Behance</a>
            <a href="#" className="hover:text-gray-900">Dribbble</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
