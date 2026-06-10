'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = [
  { label: 'Home',                     link: '#hero' },
  { label: 'About Us & Nadanalayas',   link: '#about' },
  { label: 'Performances',             link: '#performances' },
  { label: 'History & Milestones',     link: '#timeline' },
  { label: 'Gallery',                  link: '#gallery' },
];

/* Diya positions arranged in an 8-point star / mandala radiating from the statue */
const DIYA_RING = Array.from({ length: 16 }, (_, i) => {
  const angle = (i / 16) * Math.PI * 2 - Math.PI / 2;
  const r = 38 + (i % 2 === 0 ? 0 : 9);
  return { x: 50 + Math.cos(angle) * r * 0.62, y: 62 + Math.sin(angle) * r * 0.34 };
});


export default function Hero() {
  const heroRef   = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /* Entrance choreography */
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('.arch-pillar-l', { x: -100, opacity: 0, duration: 1.5 }, 0)
      .from('.arch-pillar-r', { x:  100, opacity: 0, duration: 1.5 }, 0)
      .from('.hero-arch',     { y: -40, opacity: 0, duration: 1.1 }, .4)
      .from('.hero-nav-row',  { y: -24, opacity: 0, duration: 1 }, .8)
      .from('.statue-wrap',   { scale: .72, opacity: 0, duration: 1.7, ease: 'back.out(1.4)' }, .5)
      .from('.diya-dot',      { scale: 0, opacity: 0, duration: .6, stagger: .04 }, 1.1)
      .from('.info-panel',    { y: 50, opacity: 0, duration: .9, stagger: .15 }, 1.7)
      .from('.hero-scroll',   { opacity: 0, duration: .8 }, 2.4);
  }, { scope: heroRef });

  /* Ember particle canvas */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let W = 0, H = 0, raf = 0;
    const particles: { x: number; y: number; vx: number; vy: number; size: number; life: number; decay: number; hue: number }[] = [];
    const rand = (a: number, b: number) => Math.random() * (b - a) + a;
    const resize = () => { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize, { passive: true });
    for (let i = 0; i < 50; i++) particles.push({ x: rand(.2, .8) * W, y: rand(.4, 1) * H, vx: rand(-.25, .25), vy: rand(-1.2, -.4), size: rand(.8, 2), life: rand(.2, 1), decay: rand(.004, .009), hue: rand(28, 48) });
    const loop = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy; p.vx += rand(-.04, .04); p.life -= p.decay;
        if (p.life <= 0 || p.y < 0) { p.x = rand(.15, .85) * W; p.y = rand(.75, 1) * H; p.life = 1; }
        ctx.globalAlpha = p.life * .4;
        ctx.fillStyle = `hsl(${p.hue},90%,65%)`;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
      });
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <section id="hero" ref={heroRef} className="relative w-full overflow-hidden"
             style={{ minHeight: '100svh', background: '#0c0a08' }}>

      {/* ===== PAINTED DUSK SKY ===== */}
      <div className="absolute inset-0 z-0" aria-hidden
           style={{ background: 'linear-gradient(to bottom, #131b32 0%, #2c2f4d 18%, #5c5571 36%, #9b6f6a 52%, #d59259 66%, #4a3326 82%, #14100a 100%)' }} />
      {/* Sun glow on horizon */}
      <div className="absolute left-1/2 z-0 pointer-events-none" aria-hidden
           style={{ top: '38%', width: 420, height: 420, transform: 'translate(-50%,-50%)', borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255,200,120,.35) 0%, rgba(255,150,80,.12) 45%, transparent 75%)' }} />

      {/* ===== STARS ===== */}
      <div className="absolute inset-0 z-[1] pointer-events-none" aria-hidden>
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} style={{
            position: 'absolute',
            left: `${(i * 53) % 100}%`,
            top: `${(i * 29) % 42}%`,
            width: i % 5 === 0 ? 2 : 1, height: i % 5 === 0 ? 2 : 1,
            borderRadius: '50%', background: '#fff',
            opacity: .15 + (i % 4) * .12,
          }} />
        ))}
      </div>

      {/* ===== TEMPLE SKYLINE SILHOUETTE ===== */}
      <svg className="absolute bottom-0 left-0 right-0 z-[2] w-full" viewBox="0 0 1920 460"
           preserveAspectRatio="xMidYMax slice" style={{ height: '38%' }} aria-hidden>
        <defs>
          <linearGradient id="skylineFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1c1c28" stopOpacity=".88"/>
            <stop offset="100%" stopColor="#0c0a08" stopOpacity=".96"/>
          </linearGradient>
        </defs>
        {/* Palm trees — far left & right */}
        <g fill="url(#skylineFade)" opacity=".8">
          <path d="M70,460 L82,300 Q60,290 40,300 Q66,294 82,300 Q92,270 78,250 Q98,268 86,300 Q110,292 124,308 Q98,300 84,304 L96,460 Z"/>
          <path d="M1850,460 L1838,310 Q1862,300 1882,312 Q1854,304 1838,310 Q1830,278 1846,258 Q1824,278 1834,310 Q1808,304 1796,320 Q1822,310 1836,314 L1824,460 Z"/>
        </g>
        {/* Side buildings (colonial-style w/ domes) */}
        <g fill="url(#skylineFade)">
          <rect x="190" y="330" width="190" height="130"/>
          <rect x="225" y="295" width="34" height="40"/>
          <circle cx="242" cy="290" r="17"/>
          <rect x="320" y="300" width="30" height="35"/>
          <circle cx="335" cy="296" r="15"/>
          <rect x="1540" y="330" width="190" height="130"/>
          <rect x="1660" y="295" width="34" height="40"/>
          <circle cx="1677" cy="290" r="17"/>
          <rect x="1580" y="300" width="30" height="35"/>
          <circle cx="1595" cy="296" r="15"/>
        </g>
        {/* Central gopuram tower (stepped pyramid silhouette) */}
        <g fill="url(#skylineFade)">
          <rect x="860" y="380" width="200" height="80"/>
          <rect x="878" y="330" width="164" height="56"/>
          <rect x="894" y="286" width="132" height="50"/>
          <rect x="908" y="248" width="104" height="44"/>
          <rect x="922" y="214" width="76" height="40"/>
          <rect x="936" y="184" width="48" height="36"/>
          <polygon points="936,184 960,156 984,184"/>
          <circle cx="960" cy="148" r="8"/>
          {/* Tower decorative tiers */}
          <rect x="884" y="376" width="192" height="6" opacity=".5"/>
          <rect x="900" y="326" width="160" height="5" opacity=".5"/>
          <rect x="916" y="282" width="128" height="5" opacity=".5"/>
        </g>
        {/* Distant tree line */}
        <g fill="url(#skylineFade)" opacity=".55">
          {Array.from({ length: 22 }).map((_, i) => (
            <ellipse key={i} cx={120 + i * 80} cy={420} rx="34" ry="20"/>
          ))}
        </g>
      </svg>

      {/* ===== COURTYARD FLOOR GLOW ===== */}
      <div className="absolute bottom-0 left-0 right-0 z-[3] pointer-events-none" aria-hidden
           style={{ height: '46%',
                    background: 'radial-gradient(ellipse 60% 100% at 50% 100%, rgba(232,197,71,.16) 0%, rgba(150,90,30,.10) 38%, transparent 72%)' }} />

      {/* Ember particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-[4] pointer-events-none" />

      {/* ===== ARCH PILLARS (real sculpture asset, full Nandhi-crowned columns) ===== */}
      <div className="arch-pillar-l absolute bottom-0 left-0 z-[15] pointer-events-none"
           style={{ width: 'clamp(120px, 14vw, 240px)', height: '88%' }}>
        <Image src="/images/pillar-left.png" alt="" fill quality={90} className="object-contain"
               style={{ objectPosition: 'left bottom', filter: 'drop-shadow(8px 6px 20px rgba(0,0,0,.65))' }}/>
      </div>
      <div className="arch-pillar-r absolute bottom-0 right-0 z-[15] pointer-events-none"
           style={{ width: 'clamp(120px, 14vw, 240px)', height: '88%' }}>
        <Image src="/images/pillar-right.png" alt="" fill quality={90} className="object-contain"
               style={{ objectPosition: 'right bottom', filter: 'drop-shadow(-8px 6px 20px rgba(0,0,0,.65))' }}/>
      </div>

      {/* ===== ARCH WITH LOGO — spans the gap between the pillars, replaces the title card ===== */}
      <div className="hero-arch absolute left-1/2 z-[11] pointer-events-none"
           style={{ top: 0, transform: 'translateX(-50%)', width: 'min(1300px, 92vw)', aspectRatio: '2400 / 1542' }}>
        <Image src="/images/arch-logo.png" alt="Colombo Natyanjali — The Annual Maha Shivaratri Dance Tribute" fill priority quality={95}
               className="object-contain"
               style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,.55))' }}/>
      </div>

      {/* ===== DIYA STAR-PATTERN + NATARAJA (framed inside the arch opening, sized to avoid clipping its corners) ===== */}
      <div className="statue-wrap absolute z-[12] pointer-events-none"
           style={{ left: '50%', top: 'calc(min(1300px, 92vw) * 0.22)', transform: 'translateX(-50%)', width: 'min(59.8vw, 72.8vh, 936px)', minWidth: 230 }}>
        {/* Star/mandala diya ring */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full" style={{ height: '100%' }} aria-hidden>
          <defs>
            <radialGradient id="diyaGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffcf6e" stopOpacity=".95"/>
              <stop offset="100%" stopColor="#ffcf6e" stopOpacity="0"/>
            </radialGradient>
          </defs>
          {/* Connecting star lines */}
          <g stroke="rgba(232,197,71,.22)" strokeWidth=".25" fill="none">
            {DIYA_RING.filter((_, i) => i % 2 === 0).map((p, i, arr) => {
              const next = arr[(i + 2) % arr.length] || arr[0];
              return <line key={i} x1={p.x} y1={p.y} x2={next.x} y2={next.y} />;
            })}
          </g>
          {DIYA_RING.map((p, i) => (
            <g key={i} className="diya-dot">
              <circle cx={p.x} cy={p.y} r="3.4" fill="url(#diyaGlow)" />
              <circle cx={p.x} cy={p.y} r="0.8" fill="#fff3cf" />
            </g>
          ))}
        </svg>

        {/* Glow beneath statue — breathes and drifts gently for an air of majesty (statue itself stays still) */}
        <div className="absolute left-1/2 pointer-events-none"
             style={{ bottom: '4%', left: '50%', width: '54%', height: '20%', transformOrigin: 'center',
                      background: 'radial-gradient(ellipse, rgba(255,207,110,.5) 0%, transparent 72%)', filter: 'blur(8px)',
                      animation: 'glowDrift 7s ease-in-out infinite' }} />

        {/* Nataraja — Lord of Dance, the heart of the composition (kept still, full majesty) */}
        <div className="relative" style={{ width: '78%', margin: '0 auto' }}>
          <div className="relative w-full" style={{ paddingBottom: '100%' }}>
            <Image src="/images/nataraja-statue.png" alt="Nataraja — Lord of Dance" fill quality={95}
                   className="object-contain" sizes="(max-width: 768px) 75vw, 36vw"
                   style={{ filter: 'drop-shadow(0 0 38px rgba(255,207,110,.6)) drop-shadow(0 0 80px rgba(201,120,30,.4)) drop-shadow(0 20px 26px rgba(0,0,0,.6))' }}/>
          </div>
        </div>
      </div>

      {/* ===== NAV ROW — real stone-plaque button assets, riding along the top of the arch ===== */}
      <div className="absolute left-1/2 z-[22] flex flex-col items-center pointer-events-none"
           style={{ top: 'calc(min(1300px, 92vw) * 0.17)', transform: 'translateX(-50%)', width: 'min(1080px, 96vw)' }}>
        <nav className="hero-nav-row pointer-events-auto flex flex-nowrap items-center justify-center gap-1 sm:gap-2"
             style={{ width: '100%' }}
             aria-label="Primary">
          {NAV_LINKS.map((item, i) => (
            <a key={i} href={item.link} className="hero-nav-btn group relative flex items-center justify-center text-center"
               style={{ width: 'clamp(82px, 13.5vw, 162px)', aspectRatio: '1154 / 291', flexShrink: 0, cursor: 'pointer' }}
               onClick={e => { const href = item.link; if (href.startsWith('#')) { e.preventDefault(); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); } }}>
              <Image src="/images/plaque-blank.png" alt="" fill quality={90}
                     className="plaque-bg object-contain pointer-events-none" />
              <span className="plaque-label relative px-2" style={{
                fontFamily: 'var(--font-title)', fontSize: 'clamp(.4rem, .82vw, .56rem)',
                letterSpacing: '.07em', textTransform: 'uppercase', color: 'var(--gold-light)',
                lineHeight: 1.1, whiteSpace: 'normal',
              }}>
                {item.label}
              </span>
            </a>
          ))}
        </nav>
      </div>

      {/* Scroll cue */}
      <div className="hero-scroll absolute z-[24] flex flex-col items-center gap-2 pointer-events-none"
           style={{ bottom: 'clamp(24px, 4vh, 44px)', left: '50%', transform: 'translateX(-50%)' }}>
        <span style={{ fontFamily: 'var(--font-sub)', fontSize: '.55rem', letterSpacing: '.3em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: 14, height: 14, borderRight: '1.5px solid var(--gold-dark)', borderBottom: '1.5px solid var(--gold-dark)', animation: 'scrollBounce 2s ease-in-out infinite' }} />
      </div>

      {/* Bottom fade to stone */}
      <div className="absolute bottom-0 left-0 right-0 z-[10] pointer-events-none" style={{ height: '90px', background: 'linear-gradient(to bottom, transparent, #080603)' }} />
    </section>
  );
}
