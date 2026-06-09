'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const PANELS = [
  { title: 'A Collective of Nadanalayas', body: 'Featuring troupes from 9 distinguished institutes across Sri Lanka' },
  { title: 'Milestones Achieved',         body: 'Celebrating 3 consecutive years of devotional tribute since 2023' },
  { title: 'Explore Previous Events',     body: 'Relive the sacred moments from Natyanjali 2023, 2024 and 2025' },
];

export default function HeroInfoStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <section className="relative py-10 px-4 sm:px-8"
             style={{ background: 'linear-gradient(to bottom, #080603, #0d0a06)' }}>
      <div ref={ref} className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {PANELS.map((p, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: .7, delay: i * .14, ease: [.22, 1, .36, 1] }}
              className="stone-tablet-panel text-center px-5 py-5">
              <h3 style={{ fontFamily: 'var(--font-title)', fontSize: 'clamp(.66rem,1.1vw,.82rem)', letterSpacing: '.16em', color: 'var(--gold-light)', textTransform: 'uppercase', marginBottom: '.55rem' }}>
                {p.title}
              </h3>
              <div style={{ width: 40, height: 1, background: 'linear-gradient(to right, transparent, var(--gold), transparent)', margin: '0 auto .55rem' }} />
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(.74rem,1.05vw,.88rem)', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
