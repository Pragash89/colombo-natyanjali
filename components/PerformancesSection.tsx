'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const easing = [.22, 1, .36, 1] as [number, number, number, number];

const FORMS = [
  { title: 'Bharatanatyam', origin: 'Tamil Nadu',     desc: 'A sacred temple art blending precise rhythm, sculptural poses and expressive storytelling.' },
  { title: 'Kathak',        origin: 'North India',    desc: 'The storytelling dance of North India, marked by swift spins and intricate rhythmic footwork.' },
  { title: 'Kuchipudi',     origin: 'Andhra Pradesh',  desc: 'A dance-drama tradition known for its lyrical grace, speed and dramatic narrative.' },
  { title: 'Odissi',        origin: 'Odisha',          desc: 'One of India\'s oldest dance forms, celebrated for its sculpturesque tribhangi poses.' },
  { title: 'Mohiniyattam',  origin: 'Kerala',          desc: 'The gentle, swaying "dance of the enchantress," lyrical and deeply devotional.' },
  { title: 'Manipuri',      origin: 'Manipur',         desc: 'A soft, fluid devotional dance rooted in Vaishnavite worship and quiet grace.' },
];

export default function PerformancesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="performances" className="relative py-24 px-6 overflow-hidden"
             style={{ background: 'linear-gradient(to bottom, #0c0a06, #080603)' }}>
      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div style={{ position: 'absolute', top: 0, left: '50%', width: 1, height: '100%', background: 'linear-gradient(to bottom, transparent, rgba(201,162,39,.06), transparent)' }} />
      </div>

      <div ref={ref} className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p style={{ fontFamily: 'var(--font-sub)', fontSize: '.68rem', letterSpacing: '.4em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1rem' }}>Classical Forms Nurtured</p>
          <h2 className="gold-text" style={{ fontFamily: 'var(--font-hd)', fontSize: 'clamp(1.4rem,2.8vw,2.8rem)', letterSpacing: '.12em' }}>The Evening&apos;s Offerings</h2>
          <div className="mt-5 mx-auto" style={{ width: 160, height: 1, background: 'linear-gradient(to right, transparent, var(--gold), transparent)' }} />
          <p className="mt-4 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
            Solo and group performances across six classical Indian dance traditions are offered at the feet of Lord Shiva on Maha Shivaratri night.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FORMS.map((f, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: .7, delay: i * .08, ease: easing }}
              className="stone-card p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.05rem', color: 'var(--gold-light)', letterSpacing: '.1em' }}>{f.title}</h3>
                <span style={{ fontFamily: 'var(--font-sub)', fontSize: '.6rem', letterSpacing: '.16em', color: 'var(--gold-dark)', textTransform: 'uppercase' }}>{f.origin}</span>
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '.95rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
