'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BilvaLeaf } from './icons/ShivaIcons';

const SCHOOLS = [
  { name: 'Narthana Kala Nilayam', city: 'Colombo', guru: 'Guru Lakshmi Devi', students: 45, since: 1985 },
  { name: 'Bharatha Nritya Mandir', city: 'Kandy', guru: 'Guru Kamala Suresh', students: 38, since: 1992 },
  { name: 'Saraswathi Nritya Sala', city: 'Jaffna', guru: 'Guru Vijayalakshmi', students: 52, since: 1978 },
  { name: 'Natya Sangam', city: 'Galle', guru: 'Guru Priya Anandan', students: 29, since: 2001 },
  { name: 'Thandava Kala Peedam', city: 'Negombo', guru: 'Guru Meenakshi Rajan', students: 41, since: 1995 },
  { name: 'Kalaimagal Nritya Sala', city: 'Batticaloa', guru: 'Guru Saranya Pillai', students: 33, since: 1988 },
  { name: 'Ananda Natya Nilayam', city: 'Matale', guru: 'Guru Ambika Sharma', students: 27, since: 2005 },
  { name: 'Chidambara Nrithya', city: 'Trincomalee', guru: 'Guru Kavitha Nair', students: 36, since: 1999 },
  { name: 'Sri Muthu Kumara Sabha', city: 'Vavuniya', guru: 'Guru Sutha Rani', students: 22, since: 2010 },
];

const easing = [.22, 1, .36, 1] as [number, number, number, number];
const card = {
  hidden: { opacity: 0, y: 60 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: .7, delay: i * .08, ease: easing } }),
};

export default function NadanalayasSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="nadanalayas" className="relative py-24 px-6"
             style={{ background: 'linear-gradient(to bottom, #080603, #0c0a06)' }}>
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p style={{ fontFamily: 'var(--font-sub)', fontSize: '.68rem', letterSpacing: '.4em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1rem' }}>Participating Institutions</p>
          <h2 className="gold-text" style={{ fontFamily: 'var(--font-hd)', fontSize: 'clamp(1.4rem,2.8vw,2.8rem)', letterSpacing: '.12em' }}>Nadanalayas</h2>
          <div className="mt-5 mx-auto" style={{ width: 160, height: 1, background: 'linear-gradient(to right, transparent, var(--gold), transparent)' }} />
          <p className="mt-4 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
            Nine distinguished Bharatanatyam institutions from across Sri Lanka gather each year to offer their art at the feet of Lord Nataraja.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SCHOOLS.map((s, i) => (
            <motion.div key={i} custom={i} variants={card} initial="hidden" animate={inView ? 'show' : 'hidden'}
                        className="stone-card p-6 group hover:border-[rgba(201,162,39,.45)] transition-all duration-500">
              <div className="flex justify-between items-start mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center"
                     style={{ background: 'rgba(201,162,39,.12)', border: '1px solid rgba(201,162,39,.25)' }}>
                  <BilvaLeaf className="w-5 h-5" style={{ color: 'var(--gold)' }} />
                </div>
                <span style={{ fontFamily: 'var(--font-sub)', fontSize: '.6rem', letterSpacing: '.2em', color: 'var(--gold-dark)', textTransform: 'uppercase' }}>Est. {s.since}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '.95rem', color: 'var(--gold-light)', letterSpacing: '.1em', lineHeight: 1.3, marginBottom: '.4rem' }}>{s.name}</h3>
              <p style={{ fontFamily: 'var(--font-sub)', fontSize: '.78rem', color: 'var(--text-muted)', marginBottom: '.6rem' }}>{s.city}, Sri Lanka</p>
              <div style={{ height: '1px', background: 'rgba(201,162,39,.12)', margin: '.6rem 0' }} />
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '.88rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>{s.guru}</p>
              <p style={{ fontFamily: 'var(--font-sub)', fontSize: '.72rem', color: 'rgba(201,162,39,.55)', marginTop: '.3rem' }}>{s.students} students</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
