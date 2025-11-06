import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const sections = [
  {
    id: 'cosmetics',
    title: 'Cosmetics & Beauty',
    bg: 'bg-white',
    accent: 'from-rose-100/60 to-purple-100/40',
    copy: 'Smooth glass textures, reflections, soft lighting — a tactile calm for fragrance and skincare.',
    behind: {
      challenge: 'Elevate a new fragrance line with a sense of glass purity and iridescent light.',
      direction: 'Float the bottle through soft gradients, lens bloom and slow-roll reflections.',
      render: 'Macro close-ups, refractive highlights, and a serene product hero reveal.',
    },
  },
  {
    id: 'tech',
    title: 'Tech & Product Design',
    bg: 'bg-black',
    accent: 'from-indigo-900/50 to-gray-900/40',
    copy: 'Futuristic metallic tones and precision movement — engineering meets elegance.',
    behind: {
      challenge: 'Show internal sophistication without clutter.',
      direction: 'Parallax assembly motion, cool metal, crisp highlights and shadow contrast.',
      render: 'Exploded views, floating parts, and a decisive lock-in moment.',
    },
  },
  {
    id: 'lifestyle',
    title: 'Lifestyle & Fashion',
    bg: 'bg-white',
    accent: 'from-gray-100/70 to-white/0',
    copy: 'Elegant minimalism, editorial pacing and cinematic product motion.',
    behind: {
      challenge: 'Blend product utility with quiet desirability.',
      direction: 'Slow dolly-in, soft gradients, and textural fabrics at shallow focus.',
      render: 'Editorial shots that breathe between frames and accents of motion blur.',
    },
  },
  {
    id: 'home',
    title: 'Home & Luxury Decor',
    bg: 'bg-black',
    accent: 'from-amber-900/50 to-stone-900/40',
    copy: 'Rich tones and close-up material detail — warmth, weight and craft.',
    behind: {
      challenge: 'Convey material richness in a minimal stage.',
      direction: 'Chiaroscuro lighting, velvet blacks, and micro-surface glints.',
      render: 'Macro sweeps across brushed metals, stone and glass junctions.',
    },
  },
];

function SceneSection({ s, index }) {
  const { scrollYProgress } = useScroll({
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);

  const dark = s.bg.includes('black');

  return (
    <section id={s.id} className={`relative min-h-[120svh] flex items-center ${s.bg} overflow-hidden`}> 
      {/* parallax glow */}
      <motion.div
        style={{ y, opacity }}
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${s.accent}`}
        aria-hidden
      />

      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-10 py-28">
          <div className="md:col-span-6">
            <h2 className={`text-3xl md:text-5xl font-semibold tracking-tight ${dark ? 'text-white' : 'text-gray-900'}`}>{s.title}</h2>
            <p className={`mt-4 text-base md:text-lg ${dark ? 'text-gray-300' : 'text-gray-700'}`}>{s.copy}</p>
          </div>
          <div className="md:col-span-6">
            <div className={`rounded-2xl border ${dark ? 'border-white/10 bg-white/5' : 'border-black/5 bg-white/60'} backdrop-blur p-6`}> 
              <h3 className={`text-sm font-medium tracking-wide uppercase ${dark ? 'text-white/80' : 'text-gray-800/80'}`}>Behind the Idea</h3>
              <dl className="mt-4 space-y-3">
                <div>
                  <dt className={`text-xs uppercase tracking-wider ${dark ? 'text-white/60' : 'text-gray-600'}`}>Brand Challenge</dt>
                  <dd className={`${dark ? 'text-gray-200' : 'text-gray-800'}`}>{s.behind.challenge}</dd>
                </div>
                <div>
                  <dt className={`text-xs uppercase tracking-wider ${dark ? 'text-white/60' : 'text-gray-600'}`}>Creative Direction</dt>
                  <dd className={`${dark ? 'text-gray-200' : 'text-gray-800'}`}>{s.behind.direction}</dd>
                </div>
                <div>
                  <dt className={`text-xs uppercase tracking-wider ${dark ? 'text-white/60' : 'text-gray-600'}`}>Final Render</dt>
                  <dd className={`${dark ? 'text-gray-200' : 'text-gray-800'}`}>{s.behind.render}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* soft top/bottom fades for scene seams */}
      <div className={`pointer-events-none absolute inset-x-0 top-0 h-24 ${dark ? 'bg-gradient-to-b from-black to-transparent' : 'bg-gradient-to-b from-white to-transparent'}`} />
      <div className={`pointer-events-none absolute inset-x-0 bottom-0 h-24 ${dark ? 'bg-gradient-to-t from-black to-transparent' : 'bg-gradient-to-t from-white to-transparent'}`} />
    </section>
  );
}

export default function Showcase() {
  return (
    <section id="showcase" aria-label="Work">
      {sections.map((s, i) => (
        <SceneSection key={s.id} s={s} index={i} />
      ))}
    </section>
  );
}
