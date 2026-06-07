'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trishul } from './icons/ShivaIcons';

const easing = [.22, 1, .36, 1] as [number, number, number, number];

/* Corrected: 3 years from 2023 */
const MILESTONES = [
  {
    year: '2023',
    title: 'The First Natyanjali',
    items: [
      'Inaugural event held on Maha Shivaratri at Colombo\'s foremost classical arts venue',
      '7 Nadanalayas, 160+ students participate in the first collective offering',
      'Pushpanjali performed by all schools simultaneously — a historic moment',
      'Over 2,000 devotees and arts enthusiasts attend the maiden event',
    ],
  },
  {
    year: '2024',
    title: 'Growing the Tradition',
    items: [
      'Two more Nadanalayas join — participation expands to 9 schools',
      'Introduction of senior artists\' showcase alongside student performances',
      'Special tribute to the Chola-era origins of Bharatanatyam through visual arts installation',
      'Audience grows to 4,000+ as the event gains recognition islandwide',
    ],
  },
  {
    year: '2025',
    title: 'A Sacred Legacy',
    items: [
      'Colombo Natyanjali recognised as Sri Lanka\'s premier classical Bharatanatyam platform',
      'International classical artists invited as honorary participants',
      'Documentary film on the event premieres to critical acclaim',
      'Over 5,000 attendees mark the event\'s establishment as an annual institution',
    ],
  },
];

export default function TimelineSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="timeline" className="relative py-24 px-6 overflow-hidden"
             style={{ background: 'linear-gradient(to bottom, #080603, #0f0c07)' }}>
      <div ref={ref} className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p style={{ fontFamily: 'var(--font-sub)', fontSize: '.68rem', letterSpacing: '.4em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1rem' }}>A Growing Legacy</p>
          <h2 className="gold-text" style={{ fontFamily: 'var(--font-hd)', fontSize: 'clamp(1.4rem,2.8vw,2.8rem)', letterSpacing: '.12em' }}>Three Years of History</h2>
          <div className="mt-5 mx-auto" style={{ width: 160, height: 1, background: 'linear-gradient(to right, transparent, var(--gold), transparent)' }} />
          <p className="mt-3" style={{ fontFamily: 'var(--font-sub)', fontSize: '.72rem', letterSpacing: '.25em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>2023 · 2024 · 2025</p>
        </div>

        <div className="space-y-10">
          {MILESTONES.map((m, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: .8, delay: i * .2, ease: easing }}
              className="relative flex gap-6 md:gap-10">
              {/* Year pillar */}
              <div className="flex flex-col items-center">
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg, #1e180e, #0d0b07)', border: '1px solid rgba(201,162,39,.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span className="gold-text" style={{ fontFamily: 'var(--font-hd)', fontSize: '.75rem', letterSpacing: '.08em' }}>{m.year}</span>
                </div>
                {i < MILESTONES.length - 1 && (
                  <div style={{ width: 1, flex: 1, background: 'linear-gradient(to bottom, rgba(201,162,39,.3), rgba(201,162,39,.08))', marginTop: 8 }} />
                )}
              </div>
              {/* Content */}
              <div className="stone-card p-6 flex-1 mb-4">
                <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.05rem', color: 'var(--gold-light)', letterSpacing: '.1em', marginBottom: '1rem' }}>{m.title}</h3>
                <ul className="space-y-2">
                  {m.items.map((item, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <span style={{ color: 'var(--gold)', marginTop: '.3rem', flexShrink: 0 }}>✦</span>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Looking ahead */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: .9, delay: .8 }}
          className="mt-12 stone-card p-8 text-center">
          <Trishul className="w-8 h-8 mx-auto mb-4" style={{ color: 'var(--gold)' }} />
          <h3 className="gold-text" style={{ fontFamily: 'var(--font-hd)', fontSize: 'clamp(1rem,2vw,1.6rem)', letterSpacing: '.12em', marginBottom: '1rem' }}>
            Natyanjali 2026
          </h3>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.75, maxWidth: 560, margin: '0 auto' }}>
            The fourth edition arrives on Maha Shivaratri, 26 February 2026. More Nadanalayas, more artists, more moments of sublime devotion offered at the cosmic feet of Lord Nataraja.
          </p>
          <a href="#register"
             onClick={e => { e.preventDefault(); document.querySelector('#register')?.scrollIntoView({ behavior: 'smooth' }); }}
             className="inline-block mt-6 px-8 py-3"
             style={{ fontFamily: 'var(--font-title)', fontSize: '.78rem', letterSpacing: '.22em', color: 'var(--gold-pale)', border: '1px solid rgba(201,162,39,.4)', background: 'rgba(201,162,39,.08)', textTransform: 'uppercase', cursor: 'pointer', transition: 'all .3s' }}>
            Register for 2026 ✦
          </a>
        </motion.div>
      </div>
    </section>
  );
}
