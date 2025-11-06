import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 bg-gradient-to-b from-white to-purple-50/60">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-5">
          <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Let’s make something cinematic</h3>
          <p className="mt-3 text-gray-700">Share your product, timeline and references. We’ll reply with a proposal and moodboard.</p>
          <ul className="mt-6 space-y-2 text-gray-800">
            <li>• hi@xyzstudio.design</li>
            <li>• Instagram <a href="https://instagram.com/visualedge3d" target="_blank" rel="noreferrer" className="underline underline-offset-4">@visualedge3d</a></li>
          </ul>
        </div>
        <form className="md:col-span-7 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 col-span-2 sm:col-span-1">
              <span className="text-xs font-medium text-gray-700">Name</span>
              <input className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Your name" aria-label="Name" />
            </label>
            <label className="grid gap-2 col-span-2 sm:col-span-1">
              <span className="text-xs font-medium text-gray-700">Email</span>
              <input className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="you@example.com" type="email" aria-label="Email" />
            </label>
            <label className="grid gap-2 col-span-2">
              <span className="text-xs font-medium text-gray-700">Project details</span>
              <textarea className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm h-32 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Product, goals, timeline, references" aria-label="Project details" />
            </label>
            <div className="col-span-2 flex items-center justify-between">
              <label className="flex items-center gap-2 text-xs text-gray-600">
                <input type="checkbox" className="accent-gray-900" />
                I agree to be contacted back.
              </label>
              <button type="submit" className="rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-black transition-colors">Send inquiry</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
