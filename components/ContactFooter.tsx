'use client';

import { useState } from 'react';
import { Trishul } from './icons/ShivaIcons';

export default function ContactFooter() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-6 overflow-hidden"
               style={{ background: 'linear-gradient(to bottom, #0d0b07, #080603)', borderTop: '1px solid rgba(201,162,39,.1)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p style={{ fontFamily: 'var(--font-sub)', fontSize: '.68rem', letterSpacing: '.4em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1rem' }}>Reach Out</p>
            <h2 className="gold-text" style={{ fontFamily: 'var(--font-hd)', fontSize: 'clamp(1.4rem,2.8vw,2.8rem)', letterSpacing: '.12em' }}>Contact</h2>
            <div className="mt-5 mx-auto" style={{ width: 160, height: 1, background: 'linear-gradient(to right, transparent, var(--gold), transparent)' }} />
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact info */}
            <div className="space-y-6">
              <div className="stone-card p-6">
                <p style={{ fontFamily: 'var(--font-title)', fontSize: '.8rem', letterSpacing: '.18em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1.2rem' }}>Colombo Natyanjali</p>
                {[
                  { icon: '📍', label: 'Venue', val: 'Premier Classical Arts Hall, Colombo, Sri Lanka' },
                  { icon: '📅', label: 'Date', val: 'Maha Shivaratri — 26 February 2026' },
                  { icon: '📧', label: 'Email', val: 'natyanjali@colombo.lk' },
                  { icon: '📞', label: 'Phone', val: '+94 11 XXX XXXX' },
                ].map((c, i) => (
                  <div key={i} className="flex gap-3 mb-3">
                    <span style={{ fontSize: '1.1rem', flexShrink: 0, marginTop: '.1rem' }}>{c.icon}</span>
                    <div>
                      <div style={{ fontFamily: 'var(--font-title)', fontSize: '.65rem', letterSpacing: '.18em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '.15rem' }}>{c.label}</div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: '.95rem', color: 'var(--text-muted)' }}>{c.val}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="stone-card p-6">
                <p style={{ fontFamily: 'var(--font-sub)', fontSize: '.8rem', color: 'var(--text-muted)', lineHeight: 1.7, fontStyle: 'italic' }}>
                  &ldquo;Natyanjali is not an event — it is an act of grace, a collective surrender at the feet of Lord Nataraja through the medium of the most sacred art form known to humanity.&rdquo;
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="stone-card p-6">
              {sent ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-8">
                  <Trishul className="w-9 h-9 mb-4" style={{ color: 'var(--gold)' }} />
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-muted)' }}>Message received. We&apos;ll be in touch soon. OM Namah Shivaya.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { label: 'Name', type: 'text', placeholder: 'Your name' },
                    { label: 'Email', type: 'email', placeholder: 'your@email.com' },
                    { label: 'Subject', type: 'text', placeholder: 'Your subject' },
                  ].map((f, i) => (
                    <div key={i}>
                      <label style={{ display: 'block', fontFamily: 'var(--font-title)', fontSize: '.68rem', letterSpacing: '.18em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '.35rem' }}>{f.label}</label>
                      <input type={f.type} placeholder={f.placeholder} style={{ width: '100%', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(201,162,39,.2)', padding: '.6rem .85rem', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', fontSize: '1rem', outline: 'none', borderRadius: 1 }} />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-title)', fontSize: '.68rem', letterSpacing: '.18em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '.35rem' }}>Message</label>
                    <textarea rows={4} style={{ width: '100%', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(201,162,39,.2)', padding: '.6rem .85rem', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', fontSize: '1rem', outline: 'none', resize: 'vertical', borderRadius: 1 }} />
                  </div>
                  <button type="submit" style={{ width: '100%', padding: '.8rem', fontFamily: 'var(--font-title)', fontSize: '.72rem', letterSpacing: '.2em', textTransform: 'uppercase', background: 'linear-gradient(135deg, rgba(201,162,39,.2), rgba(201,162,39,.06))', border: '1px solid rgba(201,162,39,.4)', color: 'var(--gold-pale)', cursor: 'pointer', transition: 'all .3s' }}>
                    Send Message ✦
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-10 px-6 text-center overflow-hidden"
              style={{ background: '#040302', borderTop: '1px solid rgba(201,162,39,.12)' }}>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
          <span style={{ fontFamily: 'serif', fontSize: '30vw', color: 'rgba(201,162,39,.02)', lineHeight: 1 }}>ॐ</span>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="gold-text mb-2" style={{ fontFamily: 'var(--font-hd)', fontSize: 'clamp(.9rem,1.8vw,1.6rem)', letterSpacing: '.18em' }}>
            Colombo Natyanjali
          </div>
          <p style={{ fontFamily: 'var(--font-sub)', fontSize: '.65rem', letterSpacing: '.3em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            Sri Lanka · Maha Shivaratri · Since 2023
          </p>
          <div style={{ height: 1, background: 'linear-gradient(to right, transparent, rgba(201,162,39,.25), transparent)', marginBottom: '1.5rem' }} />
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            {['About', 'Nadanalayas', 'Performances', 'History', 'Gallery', 'Register', 'Contact'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`}
                 style={{ fontFamily: 'var(--font-title)', fontSize: '.62rem', letterSpacing: '.2em', color: 'var(--text-muted)', textTransform: 'uppercase', textDecoration: 'none', transition: 'color .3s' }}
                 onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                 onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
                {link}
              </a>
            ))}
          </div>
          <p style={{ fontFamily: 'var(--font-sub)', fontSize: '.6rem', color: 'rgba(168,144,96,.4)', letterSpacing: '.15em' }}>
            OM நம சிவாய &nbsp;✦&nbsp; OM NAMAH SHIVAYA &nbsp;✦&nbsp; ॐ नमः शिवाय
          </p>
          <p style={{ fontFamily: 'var(--font-sub)', fontSize: '.55rem', color: 'rgba(168,144,96,.25)', letterSpacing: '.12em', marginTop: '.5rem' }}>
            © 2026 Colombo Natyanjali. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
