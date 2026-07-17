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
    tl.from('.hero-pillar-l', { x: -60, opacity: 0, duration: 1.3 }, 0)
      .from('.hero-pillar-r', { x: 60, opacity: 0, duration: 1.3 }, 0)
      .from('.hero-plank',    { y: -24, opacity: 0, duration: 1 }, .3)
      .from('.hero-nav-row',  { y: -24, opacity: 0, duration: 1 }, .7)
      .from('.courtyard-scene .koburam-layer', { opacity: 0, duration: 1.4 }, .5)
      .from('.courtyard-scene .altar-layer',   { scale: .8, opacity: 0, duration: 1.3, ease: 'back.out(1.3)' }, 1)
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

      {/* ===== SCENE WRAPPER — backdrop, temple/altar, pillars, logo and nav all live in here as one group ===== */}
      <div className="hero-scene absolute inset-0">

        {/* ===== COURTYARD BACKDROP — painted dusk scene, sized/cropped like CSS background-size:cover
             while staying aspect-ratio-locked so the Koburam/altar overlays (positioned by %) always
             land on the same spot in the painting regardless of viewport shape ===== */}
        <div className="courtyard-scene absolute z-0 pointer-events-none" aria-hidden
             style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
                      width: 'max(100%, calc(100vh * 2000 / 1340))', aspectRatio: '2000 / 1340' }}>
          <Image src="/images/courtyard-backdrop.webp" alt="New Kathiresan Kovil courtyard at dusk" fill priority quality={90}
                 sizes="100vw" className="object-cover" />

          {/* Koburam — rises behind the altar platform, centered between the palm trees. Reduced and pulled
              up from its previous size/position, still centered on the shared vertical axis below. */}
          <div className="koburam-layer absolute pointer-events-none"
               style={{ width: '13.5%', bottom: '40%', left: '50%', transform: 'translateX(-50%)', aspectRatio: '2000 / 1985' }}>
            <Image src="/images/koburam.webp" alt="Koburam — temple tower" fill quality={90}
                   sizes="(max-width: 768px) 26vw, 280px" className="object-contain"
                   style={{ objectPosition: 'center bottom', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,.5))' }} />
          </div>

          {/* soft golden glow — centered on the mandala ring painted into the backdrop */}
          <div className="absolute pointer-events-none"
               style={{ bottom: '27.2%', left: '50%', width: '12%', height: '9%', transform: 'translate(-50%,0)',
                        background: 'radial-gradient(ellipse, rgba(255,207,110,.6) 0%, rgba(232,197,71,.22) 45%, transparent 74%)',
                        filter: 'blur(6px)', animation: 'glowDrift 7s ease-in-out infinite' }} />

          {/* Sivalingam — base planted exactly on the mandala ring's center point painted into the backdrop */}
          <div className="absolute pointer-events-none" style={{ bottom: '29.9%', left: '50%', width: '6.8%', transform: 'translateX(-50%)', aspectRatio: '1634 / 1878' }}>
            <Image src="/images/siva-lingam.webp" alt="Sivalingam" fill quality={92}
                   sizes="100px" className="object-contain"
                   style={{ objectPosition: 'center bottom', filter: 'drop-shadow(0 0 10px rgba(255,207,110,.6)) drop-shadow(0 0 20px rgba(201,120,30,.4)) drop-shadow(0 4px 6px rgba(0,0,0,.5))' }} />
          </div>

          {/* Nandhi — seated just forward of the Sivalingam, facing it across the ring */}
          <div className="absolute pointer-events-none" style={{ bottom: '25%', left: '50%', width: '4.3%', transform: 'translateX(-50%)', aspectRatio: '1462 / 1918' }}>
            <Image src="/images/nandhi.webp" alt="Nandhi — Lord Shiva's sacred bull" fill quality={92}
                   sizes="80px" className="object-contain"
                   style={{ objectPosition: 'center bottom', filter: 'drop-shadow(0 6px 10px rgba(0,0,0,.6))' }} />
          </div>
        </div>

        {/* Ember particles */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-[4] pointer-events-none" />

        {/* ===== GUARDIAN PILLARS — Nandhi-topped stone columns flanking the temple stack, inset
             from the viewport edges to sit roughly where an archway's legs would (per the framing
             reference), taller than before ===== */}
        <div className="hero-pillar-l absolute bottom-0 z-[15] pointer-events-none"
             style={{ left: 'clamp(20px, 13.2vw, 190px)', width: 'clamp(88px, 12.4vw, 224px)', height: 'clamp(340px, 78vh, 760px)' }}>
          <Image src="/images/pillar-left.webp" alt="" fill quality={90} className="object-contain"
                 style={{ objectPosition: 'left bottom', filter: 'drop-shadow(6px 8px 20px rgba(0,0,0,.65))' }} />
        </div>
        <div className="hero-pillar-r absolute bottom-0 z-[15] pointer-events-none"
             style={{ right: 'clamp(20px, 13.2vw, 190px)', width: 'clamp(88px, 12.4vw, 224px)', height: 'clamp(340px, 78vh, 760px)' }}>
          <Image src="/images/pillar-right.webp" alt="" fill quality={90} className="object-contain"
                 style={{ objectPosition: 'right bottom', filter: 'drop-shadow(-6px 8px 20px rgba(0,0,0,.65))' }} />
        </div>

        {/* ===== LOGO — carved stone plaque title mark, lifted clear above the nav row ===== */}
        <div className="hero-plank absolute left-1/2 z-[20] pointer-events-none"
             style={{ top: 'clamp(8px, 3.4vh, 34px)', transform: 'translateX(-50%)', width: 'min(480px, 33.1vw)', aspectRatio: '3858 / 1548' }}>
          <Image src="/images/natyanjali-logo-plaque.webp" alt="Colombo Natyanjali — கொழும்பு நாட்டியாஞ்சலி" fill priority quality={92}
                 sizes="(max-width: 768px) 40vw, 480px" className="object-contain"
                 style={{ filter: 'drop-shadow(0 8px 18px rgba(0,0,0,.6))' }} />
        </div>

        {/* ===== NAV ROW — real stone-plaque button assets, lifted clear above the Koburam and pillar tops ===== */}
        <div className="absolute left-1/2 z-[22] flex flex-col items-center pointer-events-none"
             style={{ top: 'clamp(64px, 21.5vh, 178px)', transform: 'translateX(-50%)', width: 'min(1080px, 96vw)' }}>
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
