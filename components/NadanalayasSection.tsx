'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BilvaLeaf } from './icons/ShivaIcons';

const SLOTS = [
  { icon: '🪷', title: 'Group Performance', duration: '15 Minutes', desc: 'Allocated stage time for Nadanalayas and ensemble troupes presenting a collective offering.' },
  { icon: '🔥', title: 'Solo Performance',  duration: '5 Minutes',  desc: 'Allocated stage time for individual artistes presenting their personal offering.' },
  { icon: '🎶', title: 'Announcement & Orchestra', duration: '+5 Minutes', desc: 'Additional time provided for stage announcements and live orchestra arrangements.' },
];

const easing = [.22, 1, .36, 1] as [number, number, number, number];
const card = {
  hidden: { opacity: 0, y: 60 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: .7, delay: i * .1, ease: easing } }),
};

export default function NadanalayasSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="guidelines" className="relative py-24 px-6"
             style={{ background: 'linear-gradient(to bottom, #080603, #0c0a06)' }}>
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p style={{ fontFamily: 'var(--font-sub)', fontSize: '.68rem', letterSpacing: '.4em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1rem' }}>How to Participate</p>
          <h2 className="gold-text" style={{ fontFamily: 'var(--font-hd)', fontSize: 'clamp(1.4rem,2.8vw,2.8rem)', letterSpacing: '.12em' }}>Rules &amp; Regulations</h2>
          <div className="mt-5 mx-auto" style={{ width: 160, height: 1, background: 'linear-gradient(to right, transparent, var(--gold), transparent)' }} />
          <p className="mt-4 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
            Well-trained dancers from Sri Lanka and around the world are welcome to offer their art at Natyanjali 2026. Slot allocation below.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {SLOTS.map((s, i) => (
            <motion.div key={i} custom={i} variants={card} initial="hidden" animate={inView ? 'show' : 'hidden'}
                        className="stone-card p-6 text-center group hover:border-[rgba(201,162,39,.45)] transition-all duration-500">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                   style={{ background: 'rgba(201,162,39,.12)', border: '1px solid rgba(201,162,39,.25)', fontSize: '1.3rem' }}>
                {s.icon}
              </div>
              <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '.95rem', color: 'var(--gold-light)', letterSpacing: '.1em', marginBottom: '.4rem' }}>{s.title}</h3>
              <p className="gold-text" style={{ fontFamily: 'var(--font-hd)', fontSize: '1.3rem', marginBottom: '.6rem' }}>{s.duration}</p>
              <div style={{ height: '1px', background: 'rgba(201,162,39,.12)', margin: '.6rem auto', width: '60%' }} />
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: .8, delay: .3 }}
                    className="velvet-scroll-card text-center" style={{ padding: '2rem 2.2rem' }}>
          <BilvaLeaf className="w-7 h-7 mx-auto mb-4" style={{ color: 'var(--gold)' }} />
          <p style={{ fontFamily: 'var(--font-title)', fontSize: '.78rem', letterSpacing: '.16em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '.9rem' }}>
            All participants are strictly requested to adhere to the allocated time
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.8, maxWidth: 640, margin: '0 auto' }}>
            Colombo Natyanjali is a divine platform created by the support of many well-wishers. Please maintain the spiritual core values and dedicate your art to the Almighty Lord. All participants are requested to give their full cooperation to make the event successful.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
