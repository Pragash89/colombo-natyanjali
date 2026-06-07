'use client';

import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

const STATS = [
  { value: 3,   suffix: '',   label: 'Consecutive Years', sub: '2023 – Present' },
  { value: 9,   suffix: '+',  label: 'Nadanalayas', sub: 'Across Sri Lanka' },
  { value: 200, suffix: '+',  label: 'Artists', sub: 'Student & Senior' },
  { value: 5000,suffix: '+',  label: 'Audience Members', sub: 'Annual attendance' },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const dur = 2200;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * target));
      if (p < 1) requestAnimationFrame(tick);
      else setVal(target);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return <span ref={ref}>{val >= 1000 ? `${(val / 1000).toFixed(val % 1000 === 0 ? 0 : 1)}K` : val}{suffix}</span>;
}

export default function StatsStrip() {
  return (
    <div className="relative py-10 px-4 overflow-hidden"
         style={{ background: 'linear-gradient(to right, #0d0b07, #1a1408, #0d0b07)', borderTop: '1px solid rgba(201,162,39,.15)', borderBottom: '1px solid rgba(201,162,39,.15)' }}>
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {STATS.map((s, i) => (
          <div key={i}>
            <div style={{ fontFamily: 'var(--font-hd)', fontSize: 'clamp(1.6rem,3vw,2.8rem)', lineHeight: 1 }} className="gold-text">
              <Counter target={s.value} suffix={s.suffix} />
            </div>
            <div style={{ fontFamily: 'var(--font-title)', fontSize: '.72rem', letterSpacing: '.18em', color: 'var(--gold-light)', textTransform: 'uppercase', marginTop: '.5rem' }}>{s.label}</div>
            <div style={{ fontFamily: 'var(--font-sub)', fontSize: '.65rem', color: 'var(--text-muted)', letterSpacing: '.1em', marginTop: '.25rem' }}>{s.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
