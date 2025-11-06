import React from 'react';

const services = [
  {
    title: 'Cosmetic & Beauty',
    desc: 'Perfumes, skincare, makeup bottles and clean ingredient stories.',
    tags: ['Perfume', 'Skincare', 'Makeup'],
  },
  {
    title: 'Tech & Product Design',
    desc: 'Sleek reveals, precision assemblies, and industrial design showcases.',
    tags: ['Devices', 'Exploded Views', 'CMF'],
  },
  {
    title: 'Lifestyle & Fashion',
    desc: 'Editorial motion for accessories, footwear and wearable tech.',
    tags: ['Accessories', 'Footwear', 'Editorial'],
  },
  {
    title: 'Home & Luxury Decor',
    desc: 'Minimal sets for home appliances and high-end objects.',
    tags: ['Appliances', 'Luxury', 'Interiors'],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
            Services
          </h2>
          <p className="max-w-xl text-gray-700 text-sm md:text-base">
            From concept to final render — we design, animate and deliver polished product films that feel tactile, modern and calm.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-gray-200 p-6 hover:shadow-sm transition-all bg-white">
              <h3 className="font-medium text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{s.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full border border-gray-200 px-2.5 py-1 text-gray-700 bg-gray-50">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
