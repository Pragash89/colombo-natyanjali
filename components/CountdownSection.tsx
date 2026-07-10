'use client';

import { useEffect, useState } from 'react';

const TARGET = new Date('2026-02-15T17:30:00+05:30').getTime();

function pad(n: number) { return String(n).padStart(2, '0'); }

export default function CountdownSection() {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, TARGET - Date.now());
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { val: time.d, label: 'Days' },
    { val: time.h, label: 'Hours' },
    { val: time.m, label: 'Minutes' },
    { val: time.s, label: 'Seconds' },
  ];

  return (
    <section className="relative py-20 px-6 overflow-hidden"
             style={{ background: 'linear-gradient(135deg, #0d0b07 0%, #1a1408 50%, #0d0b07 100%)', borderTop: '1px solid rgba(201,162,39,.15)', borderBottom: '1px solid rgba(201,162,39,.15)' }}>
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(201,162,39,.06) 0%, transparent 65%)' }} />

      <div className="relative max-w-3xl mx-auto text-center">
        <p style={{ fontFamily: 'var(--font-sub)', fontSize: '.68rem', letterSpacing: '.4em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1rem' }}>Next Sacred Night</p>
        <h2 className="gold-text" style={{ fontFamily: 'var(--font-hd)', fontSize: 'clamp(1.2rem,2.5vw,2.4rem)', letterSpacing: '.12em', marginBottom: '.5rem' }}>
          Natyanjali 2026
        </h2>
        <p style={{ fontFamily: 'var(--font-sub)', fontSize: '.72rem', letterSpacing: '.28em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '2.5rem' }}>
          Maha Shivaratri · 15 February 2026 · New Kathiresan Kovil, Bambalapitiya
        </p>

        <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto mb-8">
          {units.map((u, i) => (
            <div key={i} className="stone-card p-4 text-center">
              <div className="gold-text" style={{ fontFamily: 'var(--font-hd)', fontSize: 'clamp(1.6rem,4vw,2.8rem)', letterSpacing: '.06em', lineHeight: 1 }}>
                {pad(u.val)}
              </div>
              <div style={{ fontFamily: 'var(--font-sub)', fontSize: '.6rem', letterSpacing: '.22em', color: 'var(--text-muted)', textTransform: 'uppercase', marginTop: '.4rem' }}>
                {u.label}
              </div>
            </div>
          ))}
        </div>

        <div style={{ height: 1, background: 'linear-gradient(to right, transparent, rgba(201,162,39,.3), transparent)', margin: '0 auto 1.5rem', maxWidth: 360 }} />
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-muted)', fontStyle: 'italic', letterSpacing: '.04em' }}>
          &ldquo;Nartana Ganapathim Nayami — I bow to the dancing lord of new beginnings&rdquo;
        </p>
      </div>
    </section>
  );
}
