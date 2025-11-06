import React from 'react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-black/5">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-purple-400 to-indigo-500" aria-hidden />
          <span className="font-semibold tracking-tight text-gray-900">Studio Aura</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
          <a href="#services" className="hover:text-gray-900 transition-colors">Services</a>
          <a href="#story" className="hover:text-gray-900 transition-colors">Story</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
        </div>
      </nav>
    </header>
  );
}
