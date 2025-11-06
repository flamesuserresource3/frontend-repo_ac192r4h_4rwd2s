import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-8 py-24">
        <div className="text-gray-900">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
            3D Product Animation Studio
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-700">
            Story-driven visuals for beauty, tech, lifestyle and luxury brands. Clean, modern and minimal.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-black transition-colors">Start a project</a>
            <a href="#services" className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white text-gray-900 px-5 py-3 text-sm font-medium hover:bg-gray-50 transition-colors">View services</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
