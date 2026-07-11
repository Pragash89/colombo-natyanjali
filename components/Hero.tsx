'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = [
  { label: 'Home',                     link: '#hero' },
  { label: 'About Us',                 link: '#about' },
  { label: 'Performances',             link: '#performances' },
  { label: 'History & Milestones',     link: '#timeline' },
  { label: 'Gallery',                  link: '#gallery' },
];

export default function Hero() {
  const heroRef   = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /* Entrance choreography */
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('.hero-title',    { y: -32, opacity: 0, duration: 1.1 }, .2)
      .from('.hero-nav-row',  { y: -24, opacity: 0, duration: 1 }, .7)
      .from('.temple-stack',  { scale: .82, opacity: 0, duration: 1.7, ease: 'back.out(1.3)' }, .5)
      .from('.hero-scroll',   { opacity: 0, duration: .8 }, 2.3);
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

      {/* ===== TITLE ===== */}
      <div className="hero-title absolute left-1/2 z-[20] text-center pointer-events-none"
           style={{ top: 'clamp(20px, 4.5vh, 48px)', transform: 'translateX(-50%)', width: 'min(680px, 92vw)' }}>
        <p style={{ fontFamily: 'var(--font-sub)', fontSize: 'clamp(.58rem, 1.4vw, .72rem)', letterSpacing: '.34em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '.5rem' }}>
          Maha Shivaratri · Annual Dance Tribute
        </p>
        <h1 className="gold-text" style={{ fontFamily: 'var(--font-hd)', fontSize: 'clamp(1.5rem, 4.6vw, 3.2rem)', letterSpacing: '.1em', lineHeight: 1.1 }}>
          Colombo Natyanjali
        </h1>
        <p style={{ fontFamily: 'var(--font-sub)', fontSize: 'clamp(.8rem, 2vw, 1.15rem)', color: 'var(--gold-light)', letterSpacing: '.04em', marginTop: '.35rem' }}>
          கொழும்பு நாட்டியாஞ்சலி
        </p>
      </div>

      {/* ===== NAV ROW — real stone-plaque button assets ===== */}
      <div className="absolute left-1/2 z-[22] flex flex-col items-center pointer-events-none"
           style={{ top: 'clamp(146px, 21vh, 226px)', transform: 'translateX(-50%)', width: 'min(1080px, 96vw)' }}>
        <nav className="hero-nav-row pointer-events-auto flex flex-nowrap items-center justify-center gap-1 sm:gap-2"
             style={{ width: '100%' }}
             aria-label="Primary">
          {NAV_LINKS.map((item, i) => (
            <a key={i} href={item.link} className="hero-nav-btn group relative flex items-center justify-center text-center"
               style={{ width: 'clamp(98.4px, 16.2vw, 194.4px)', aspectRatio: '1154 / 291', flexShrink: 0, cursor: 'pointer' }}
               onClick={e => { const href = item.link; if (href.startsWith('#')) { e.preventDefault(); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); } }}>
              <Image src="/images/plaque-blank.png" alt="" fill quality={90}
                     className="plaque-bg object-contain pointer-events-none" />
              <span className="plaque-label relative px-2" style={{
                fontFamily: 'var(--font-title)', fontSize: 'clamp(.48rem, .984vw, .672rem)',
                letterSpacing: '.07em', textTransform: 'uppercase', color: 'var(--gold-light)',
                lineHeight: 1.1, whiteSpace: 'normal',
              }}>
                {item.label}
              </span>
            </a>
          ))}
        </nav>
      </div>

      {/* ===== TEMPLE STACK — Koburam (tower) → Sivalingam (glowing, from its midline) → Nandhi (front, at its base) ===== */}
      <div className="temple-stack absolute z-[12] pointer-events-none"
           style={{ left: '50%', bottom: 'clamp(14px, 3.5vh, 40px)', transform: 'translateX(-50%)',
                    width: 'min(64vw, 82vh, 720px)', minWidth: 230, aspectRatio: '1822 / 1996' }}>

        {/* 1. Koburam — the temple tower, back layer, fills the frame */}
        <div className="absolute inset-0">
          <Image src="/images/koburam.webp" alt="Koburam — temple tower of New Kathiresan Kovil" fill priority quality={90}
                 sizes="(max-width: 768px) 68vw, 720px" className="object-contain"
                 style={{ objectPosition: 'center top', filter: 'drop-shadow(0 24px 44px rgba(0,0,0,.6))' }} />
        </div>

        {/* Soft golden glow behind the Sivalingam */}
        <div className="absolute pointer-events-none"
             style={{ bottom: '2%', left: '55%', width: '64%', height: '62%', transform: 'translate(-50%,0)',
                      background: 'radial-gradient(ellipse, rgba(255,207,110,.55) 0%, rgba(232,197,71,.2) 45%, transparent 74%)',
                      filter: 'blur(20px)', animation: 'glowDrift 7s ease-in-out infinite' }} />

        {/* 2. Sivalingam — enlarged, resting on the tower's base, glowing */}
        <div className="absolute" style={{ bottom: '0%', left: '55%', width: '53%', transform: 'translate(-50%,0)', aspectRatio: '1634 / 1878' }}>
          <Image src="/images/siva-lingam.webp" alt="Sivalingam" fill quality={92}
                 sizes="(max-width: 768px) 36vw, 380px" className="object-contain"
                 style={{ objectPosition: 'center bottom', filter: 'drop-shadow(0 0 28px rgba(255,207,110,.55)) drop-shadow(0 0 60px rgba(201,120,30,.35)) drop-shadow(0 14px 22px rgba(0,0,0,.55))' }} />
        </div>

        {/* 3. Nandhi — foremost layer, seated almost at the tower's base */}
        <div className="absolute" style={{ bottom: '0.5%', left: '50%', width: '34%', transform: 'translateX(-50%)', aspectRatio: '1462 / 1918' }}>
          <Image src="/images/nandhi.webp" alt="Nandhi — Lord Shiva's sacred bull" fill quality={92}
                 sizes="(max-width: 768px) 24vw, 250px" className="object-contain"
                 style={{ objectPosition: 'center bottom', filter: 'drop-shadow(0 16px 28px rgba(0,0,0,.65))' }} />
        </div>
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
