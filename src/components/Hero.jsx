import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[120svh] min-h-screen flex items-end overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlay gradients must not block interaction */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/80 via-white/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/70 to-transparent" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-24">
        <div className="max-w-2xl">
          <p className="uppercase tracking-[0.2em] text-xs text-gray-700">XYZ Studio</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-gray-900">
            Crafting motion stories for modern brands
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-700">
            Minimal, cinematic product animation — beauty, tech, lifestyle and luxury.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#showcase" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-black transition-colors">See our work</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white text-gray-900 px-5 py-3 text-sm font-medium hover:bg-gray-50 transition-colors">Start a project</a>
          </div>
        </div>
      </div>
    </section>
  );
}
