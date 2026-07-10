'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trishul } from './icons/ShivaIcons';

const easing = [.22, 1, .36, 1] as [number, number, number, number];

const MILESTONES = [
  {
    year: '2014',
    title: 'The First Offering',
    items: [
      'The first Maha Shivaratri dance offering is presented at New Kathiresan Kovil, Bambalapitiya',
      'A tradition takes root — devotees and artistes gather to worship Lord Shiva through classical dance',
    ],
  },
  {
    year: '2024',
    title: 'Colombo Natyanjali Foundation is Born',
    items: [
      'The Colombo Natyanjali Foundation is founded to preserve, promote and create awareness of Indian and Sri Lankan classical arts',
      'Natyanjali continues its decade-long devotion at New Kathiresan Kovil under the Foundation\'s stewardship — Year 1',
    ],
  },
  {
    year: '2025',
    title: 'A Growing Legacy',
    items: [
      'Natyanjali 2025 held on Wednesday, 26 February, at New Kathiresan Kovil, Bambalapitiya — Year 2 of the Foundation era',
      'Presented by Sri Kaileshwaran Natyalaya School of Fine Arts, in collaboration with the Swami Vivekananda Cultural Centre, High Commission of India, Colombo, and the Indian Council for Cultural Relations',
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
          <p style={{ fontFamily: 'var(--font-sub)', fontSize: '.68rem', letterSpacing: '.4em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1rem' }}>History &amp; Milestones</p>
          <h2 className="gold-text" style={{ fontFamily: 'var(--font-hd)', fontSize: 'clamp(1.4rem,2.8vw,2.8rem)', letterSpacing: '.12em' }}>Our Journey</h2>
          <div className="mt-5 mx-auto" style={{ width: 160, height: 1, background: 'linear-gradient(to right, transparent, var(--gold), transparent)' }} />
          <p className="mt-3" style={{ fontFamily: 'var(--font-sub)', fontSize: '.72rem', letterSpacing: '.25em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>2014 · 2024 · 2025 · 2026</p>
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
            Natyanjali 2026 arrives on Maha Shivaratri, 15 February 2026, at Nattukottai Nagarathar, New Kathiresan Kovil, Bambalapitiya — held in collaboration with the Department of Hindu Religious and Cultural Affairs, marking the Foundation&apos;s third consecutive year of devotion.
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
