import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-white to-purple-50/50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Let’s design your next product film</h3>
          <p className="mt-3 text-gray-700">Share a brief about your product, timeline and references. We’ll reply with a proposal and moodboard.</p>
          <ul className="mt-6 space-y-2 text-gray-800">
            <li>• hi@studioaura.design</li>
            <li>• Available worldwide · Remote-first</li>
          </ul>
        </div>
        <form className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <div className="grid gap-4">
            <input className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Name" />
            <input className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Email" type="email" />
            <textarea className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm h-28 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Project details" />
            <button type="submit" className="rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-black transition-colors">Send inquiry</button>
          </div>
        </form>
      </div>
    </section>
  );
}
