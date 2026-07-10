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
            Annual Classical Dance Tribute on Maha Shivaratri
          </motion.p>
        </motion.div>

        {/* Body text */}
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'show' : 'hidden'}
                    className="grid md:grid-cols-2 gap-10 mb-10">
          <motion.div variants={fadeUp} className="velvet-scroll-card" style={{ padding: '1.8rem 2rem 1.8rem' }}>
            <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.05rem', color: 'var(--gold-light)', letterSpacing: '.12em', marginBottom: '1rem' }}>Our Story</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: 1.85, color: 'var(--text-primary)' }}>
              The Colombo Natyanjali Foundation was founded in 2024 with a heartfelt mission to preserve, promote, and create awareness of Indian and Sri Lankan culture through traditional classical music and classical dance. For centuries, art has been a sacred language of the soul — through graceful movements and divine rhythms, our heritage continues to speak to generations.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: 1.85, color: 'var(--text-primary)', marginTop: '1rem' }}>
              With this vision, the Foundation proudly nurtures timeless classical dance forms such as Bharatanatyam, Kathak, Kuchipudi, Odissi, Mohiniyattam and Manipuri, keeping their spirit alive for the future.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="velvet-scroll-card" style={{ padding: '1.8rem 2rem 1.8rem' }}>
            <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '1.05rem', color: 'var(--gold-light)', letterSpacing: '.12em', marginBottom: '1rem' }}>The Night of Shiva</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: 1.85, color: 'var(--text-primary)' }}>
              Yet this journey of devotion began even earlier. From the year 2014, on the sacred night of Mahashivarathri, a divine offering has been continuously presented — the festival known as Colombo Natyanjali. Every year, at the holy grounds of New Kathiresan Kovil, Bambalapitiya, devotees and artistes gather as one to worship Lord Shiva through the sacred language of traditional dance.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: 1.85, color: 'var(--text-primary)', marginTop: '1rem' }}>
              With each step offered in faith, each movement becomes prayer, and dance becomes meditation — with the unwavering support of gurus, artistes, devotees and well-wishers, Colombo Natyanjali has grown into a symbol of unity, spirituality and cultural pride.
            </p>
          </motion.div>
        </motion.div>

        <motion.p variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} className="text-center mb-16"
                  style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--gold-light)', letterSpacing: '.02em', maxWidth: 640, margin: '0 auto 4rem' }}>
          &ldquo;Because here, art is worship, culture is identity, and dance is devotion.&rdquo;
        </motion.p>

        {/* Pillars of philosophy */}
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'show' : 'hidden'}
                    className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { icon: '💃', title: 'Devotion', desc: 'Every step offered as prayer to Lord Shiva' },
            { icon: '🏛️', title: 'Tradition', desc: 'Bharatanatyam, Kathak, Kuchipudi, Odissi, Mohiniyattam & Manipuri' },
            { icon: '🪔', title: 'Community', desc: 'Uniting artistes, gurus and devotees in Sri Lanka and abroad' },
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
