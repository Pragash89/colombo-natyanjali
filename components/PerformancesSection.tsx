'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const easing = [.22, 1, .36, 1] as [number, number, number, number];

const ITEMS = [
  { title: 'Pushpanjali',       type: 'Opening',     desc: 'The sacred flower offering — all schools perform together to invoke divine blessings for the evening ahead.' },
  { title: 'Alarippu',          type: 'Margam Item', desc: 'The classical opening piece awakening the body, mind and spirit through a pure rhythmic offering to the cosmos.' },
  { title: 'Jathiswaram',       type: 'Margam Item', desc: 'A study in pure nritta set to swara passages — the body speaking the language of music without narrative.' },
  { title: 'Shabdam',           type: 'Devotional',  desc: 'A lyrical composition in praise of Lord Nataraja, combining abhinaya with tender devotional expression.' },
  { title: 'Varnam',            type: 'Centrepiece', desc: 'The crown jewel of Bharatanatyam — a long-form exposition of both nritta and abhinaya at the height of artistry.' },
  { title: 'Padam & Javali',    type: 'Abhinaya',   desc: 'Intimate compositions exploring the many faces of bhakti — the longing of the devotee for the divine beloved.' },
  { title: 'Thillana',          type: 'Grand Finale', desc: 'An exhilarating celebration of pure dance — rhythmic brilliance cascading to an ecstatic conclusion.' },
  { title: 'Mangalam',          type: 'Closing',     desc: 'A collective benediction — all artists together offer a final prayer of gratitude and peace.' },
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
          <p style={{ fontFamily: 'var(--font-sub)', fontSize: '.68rem', letterSpacing: '.4em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1rem' }}>Programme Structure</p>
          <h2 className="gold-text" style={{ fontFamily: 'var(--font-hd)', fontSize: 'clamp(1.4rem,2.8vw,2.8rem)', letterSpacing: '.12em' }}>The Evening&apos;s Offerings</h2>
          <div className="mt-5 mx-auto" style={{ width: 160, height: 1, background: 'linear-gradient(to right, transparent, var(--gold), transparent)' }} />
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block pointer-events-none"
               style={{ background: 'linear-gradient(to bottom, transparent, rgba(201,162,39,.25), transparent)' }} />

          <div className="space-y-6">
            {ITEMS.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: .7, delay: i * .1, ease: easing }}
                  className={`md:grid md:grid-cols-2 gap-6 items-center ${isLeft ? '' : 'md:direction-rtl'}`}>
                  <div className={`stone-card p-6 ${isLeft ? 'md:mr-8' : 'md:ml-8 md:col-start-2'}`}>
                    <div className="flex justify-between items-start mb-2">
                      <span style={{ fontFamily: 'var(--font-sub)', fontSize: '.6rem', letterSpacing: '.22em', color: 'var(--gold)', textTransform: 'uppercase' }}>{item.type}</span>
                      <span style={{ fontFamily: 'var(--font-sub)', fontSize: '.62rem', color: 'var(--text-muted)', opacity: .6 }}>0{i + 1}</span>
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.1rem', color: 'var(--gold-light)', letterSpacing: '.1em', marginBottom: '.5rem' }}>{item.title}</h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '.95rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                  {/* Centre dot (only md+) */}
                  <div className={`hidden md:flex justify-center items-center ${isLeft ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'}`}>
                    <div style={{ width: 14, height: 14, borderRadius: '50%', background: 'var(--gold-dark)', border: '2px solid var(--gold)', boxShadow: '0 0 12px rgba(201,162,39,.5)' }} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
