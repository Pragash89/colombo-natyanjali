'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { BilvaLeaf } from './icons/ShivaIcons';

const TABS = ['2025', '2024', '2023'];

const GALLERY_ITEMS = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  aspect: i % 3 === 0 ? 'tall' : 'square',
  placeholder: `Natyanjali 2025 · Image ${i + 1}`,
}));

export default function GallerySection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeTab, setActiveTab] = useState('2025');

  return (
    <section id="gallery" className="relative py-24 px-6"
             style={{ background: 'linear-gradient(to bottom, #0f0c07, #080603)' }}>
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p style={{ fontFamily: 'var(--font-sub)', fontSize: '.68rem', letterSpacing: '.4em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1rem' }}>Moments of Devotion</p>
          <h2 className="gold-text" style={{ fontFamily: 'var(--font-hd)', fontSize: 'clamp(1.4rem,2.8vw,2.8rem)', letterSpacing: '.12em' }}>Gallery</h2>
          <div className="mt-5 mx-auto" style={{ width: 160, height: 1, background: 'linear-gradient(to right, transparent, var(--gold), transparent)' }} />
        </div>

        {/* Year tabs */}
        <div className="flex justify-center gap-3 mb-10">
          {TABS.map(t => (
            <button key={t} onClick={() => setActiveTab(t)}
                    style={{
                      fontFamily: 'var(--font-title)', fontSize: '.72rem', letterSpacing: '.22em', textTransform: 'uppercase',
                      padding: '.5rem 1.5rem', border: `1px solid ${activeTab === t ? 'var(--gold)' : 'rgba(201,162,39,.2)'}`,
                      color: activeTab === t ? 'var(--gold-pale)' : 'var(--text-muted)',
                      background: activeTab === t ? 'rgba(201,162,39,.12)' : 'transparent',
                      cursor: 'pointer', transition: 'all .3s',
                    }}>
              {t}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div key={activeTab}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            transition={{ duration: .4 }}
            className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {GALLERY_ITEMS.map((item, i) => (
              <motion.div key={item.id}
                initial={{ opacity: 0, scale: .92 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: .5, delay: i * .05 }}
                className="stone-card break-inside-avoid relative overflow-hidden group cursor-pointer">
                {/* Placeholder — will be replaced with real photos */}
                <div style={{ paddingBottom: item.aspect === 'tall' ? '140%' : '100%', position: 'relative' }}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center"
                       style={{ background: 'radial-gradient(ellipse at center, rgba(201,162,39,.07) 0%, transparent 70%)' }}>
                    <BilvaLeaf className="w-9 h-9" style={{ color: 'var(--gold)', opacity: .4 }} />
                    <span style={{ fontFamily: 'var(--font-sub)', fontSize: '.55rem', color: 'var(--text-muted)', letterSpacing: '.15em', marginTop: '.5rem', opacity: .5 }}>{item.placeholder}</span>
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[rgba(0,0,0,.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span style={{ fontFamily: 'var(--font-sub)', fontSize: '.65rem', letterSpacing: '.2em', color: 'var(--gold-light)', textTransform: 'uppercase' }}>View</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <p className="text-center mt-8" style={{ fontFamily: 'var(--font-sub)', fontSize: '.72rem', letterSpacing: '.18em', color: 'var(--text-muted)', fontStyle: 'italic' }}>
          High-resolution photographs from all three editions will be published here. &nbsp;✦&nbsp; Media partnerships welcome.
        </p>
      </div>
    </section>
  );
}
