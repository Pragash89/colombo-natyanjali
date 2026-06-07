'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const easing = [.22, 1, .36, 1] as [number, number, number, number];
const fadeUp = { hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: { duration: .9, ease: easing } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: .18 } } };

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden"
             style={{ background: 'linear-gradient(to bottom, #080603, #0f0c07 50%, #080603)' }}>
      {/* Background Om watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
        <span style={{ fontFamily: 'serif', fontSize: '52vw', color: 'rgba(201,162,39,.028)', lineHeight: 1, userSelect: 'none' }}>ॐ</span>
      </div>

      <div ref={ref} className="relative max-w-5xl mx-auto">
        {/* Section heading */}
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'show' : 'hidden'} className="text-center mb-16">
          <motion.p variants={fadeUp} style={{ fontFamily: 'var(--font-sub)', fontSize: '.7rem', letterSpacing: '.4em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1rem' }}>
            The Sacred Gathering
          </motion.p>
          <motion.h2 variants={fadeUp} className="gold-text"
                     style={{ fontFamily: 'var(--font-hd)', fontSize: 'clamp(1.6rem,3.2vw,3.2rem)', letterSpacing: '.12em' }}>
            Colombo Natyanjali
          </motion.h2>
          <motion.div variants={fadeUp} className="mt-5 mx-auto" style={{ width: 180, height: 1, background: 'linear-gradient(to right, transparent, var(--gold), transparent)' }} />
          <motion.p variants={fadeUp} className="mt-3"
                    style={{ fontFamily: 'var(--font-sub)', fontSize: '.72rem', letterSpacing: '.3em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
            Annual Bharatanatyam Tribute on Maha Shivaratri
          </motion.p>
        </motion.div>

        {/* Body text */}
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'show' : 'hidden'}
                    className="grid md:grid-cols-2 gap-10 mb-16">
          <motion.div variants={fadeUp} className="stone-card p-8">
            <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.05rem', color: 'var(--gold-light)', letterSpacing: '.12em', marginBottom: '1rem' }}>The Vision</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: 1.85, color: 'var(--text-primary)' }}>
              Colombo Natyanjali was born from a singular, sacred aspiration — to offer the ancient art of Bharatanatyam as a living prayer to Lord Nataraja on the most auspicious night of Maha Shivaratri. Every mudra, every rhythmic footfall, every graceful arc of the arm becomes an act of devotion when offered at the cosmic feet of the Lord of Dance.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: 1.85, color: 'var(--text-primary)', marginTop: '1rem' }}>
              What began as a quiet gathering of devoted dancers and discerning patrons in 2023 has blossomed into Sri Lanka's most celebrated platform for classical Bharatanatyam — a testament to the island's deep and enduring reverence for the classical arts.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="stone-card p-8">
            <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.05rem', color: 'var(--gold-light)', letterSpacing: '.12em', marginBottom: '1rem' }}>The Night of Shiva</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: 1.85, color: 'var(--text-primary)' }}>
              Maha Shivaratri — the Great Night of Shiva — is when the cosmos itself holds its breath and devotion transcends all ordinary boundaries. On this sacred night, the veil between the temporal and the divine thins to translucence, and dance becomes the most perfect offering.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: 1.85, color: 'var(--text-primary)', marginTop: '1rem' }}>
              Natyanjali — literally &ldquo;the offering of dance&rdquo; — transforms the stage into a sanctum. Each performance is a consecration; each audience member a witness to something eternal, something that stretches back through millennia to the first cosmic dance of creation.
            </p>
          </motion.div>
        </motion.div>

        {/* Pillars of philosophy */}
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'show' : 'hidden'}
                    className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { icon: '💃', title: 'Devotion', desc: 'Dance as the highest form of prayer to Lord Nataraja' },
            { icon: '🏛️', title: 'Tradition', desc: 'Rooted in the Chola-era classical Bharatanatyam canon' },
            { icon: '🪔', title: 'Community', desc: 'Uniting Nadanalayas and students across Sri Lanka' },
            { icon: '✨', title: 'Excellence', desc: 'Upholding the highest standards of classical artistry' },
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="stone-card p-6 text-center">
              <div style={{ fontSize: '2rem', marginBottom: '.75rem' }}>{item.icon}</div>
              <h4 style={{ fontFamily: 'var(--font-title)', fontSize: '.9rem', color: 'var(--gold)', letterSpacing: '.14em', marginBottom: '.5rem' }}>{item.title}</h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
