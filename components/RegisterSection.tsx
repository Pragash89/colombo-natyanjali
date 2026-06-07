'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trishul, CrescentMoon } from './icons/ShivaIcons';

const TABS = [
  { id: 'student', label: 'Student Performer' },
  { id: 'school', label: 'Nadanalaya' },
  { id: 'audience', label: 'Audience / Patron' },
];

const Input = ({ label, type = 'text', placeholder }: { label: string; type?: string; placeholder?: string }) => (
  <div>
    <label style={{ display: 'block', fontFamily: 'var(--font-title)', fontSize: '.7rem', letterSpacing: '.18em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '.4rem' }}>{label}</label>
    <input type={type} placeholder={placeholder}
           style={{ width: '100%', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(201,162,39,.2)', padding: '.65rem .9rem', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', fontSize: '1rem', outline: 'none', borderRadius: 1 }} />
  </div>
);

const Select = ({ label, options }: { label: string; options: string[] }) => (
  <div>
    <label style={{ display: 'block', fontFamily: 'var(--font-title)', fontSize: '.7rem', letterSpacing: '.18em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '.4rem' }}>{label}</label>
    <select style={{ width: '100%', background: '#14100a', border: '1px solid rgba(201,162,39,.2)', padding: '.65rem .9rem', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', fontSize: '1rem', outline: 'none', borderRadius: 1 }}>
      <option value="">— Select —</option>
      {options.map(o => <option key={o}>{o}</option>)}
    </select>
  </div>
);

export default function RegisterSection() {
  const [activeTab, setActiveTab] = useState('student');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="register" className="relative py-24 px-6 overflow-hidden"
             style={{ background: 'linear-gradient(to bottom, #080603, #0d0b07)' }}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden>
        <Trishul style={{ width: '38vw', height: '38vw', color: 'rgba(201,162,39,.05)' }} />
      </div>

      <div className="relative max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p style={{ fontFamily: 'var(--font-sub)', fontSize: '.68rem', letterSpacing: '.4em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1rem' }}>Natyanjali 2026</p>
          <h2 className="gold-text" style={{ fontFamily: 'var(--font-hd)', fontSize: 'clamp(1.4rem,2.8vw,2.8rem)', letterSpacing: '.12em' }}>Register</h2>
          <div className="mt-5 mx-auto" style={{ width: 160, height: 1, background: 'linear-gradient(to right, transparent, var(--gold), transparent)' }} />
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {TABS.map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
                    style={{ fontFamily: 'var(--font-title)', fontSize: '.68rem', letterSpacing: '.18em', textTransform: 'uppercase', padding: '.5rem 1.2rem', border: `1px solid ${activeTab === t.id ? 'var(--gold)' : 'rgba(201,162,39,.2)'}`, color: activeTab === t.id ? 'var(--gold-pale)' : 'var(--text-muted)', background: activeTab === t.id ? 'rgba(201,162,39,.1)' : 'transparent', cursor: 'pointer', transition: 'all .3s' }}>
              {t.label}
            </button>
          ))}
        </div>

        <div className="stone-card p-8">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div key="success" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                          className="text-center py-8">
                <CrescentMoon className="w-10 h-10 mx-auto mb-4" style={{ color: 'var(--gold)' }} />
                <h3 className="gold-text" style={{ fontFamily: 'var(--font-hd)', fontSize: '1.2rem', marginBottom: '1rem' }}>OM Namah Shivaya</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  Thank you for your registration. The Natyanjali team will respond within 14 days. May Lord Nataraja bless your journey.
                </p>
              </motion.div>
            ) : (
              <motion.form key={activeTab} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                           transition={{ duration: .3 }} onSubmit={handleSubmit} className="space-y-5">
                {activeTab === 'student' && <>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input label="Student Name" placeholder="Full name" />
                    <Input label="Age" type="number" placeholder="Age in years" />
                  </div>
                  <Input label="Nadanalaya Name" placeholder="Your school of dance" />
                  <Select label="Level" options={['Beginner (< 3 years)', 'Intermediate (3–6 years)', 'Advanced (6+ years)', 'Senior Artist']} />
                  <Input label="Contact Number" type="tel" placeholder="+94 7X XXX XXXX" />
                  <Input label="Email" type="email" placeholder="your@email.com" />
                </>}

                {activeTab === 'school' && <>
                  <Input label="Nadanalaya Name" placeholder="Institution name" />
                  <Input label="Guru / Principal" placeholder="Head instructor name" />
                  <Input label="City" placeholder="City, Sri Lanka" />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input label="Years Active" type="number" placeholder="Years" />
                    <Input label="Number of Students" type="number" placeholder="Students registering" />
                  </div>
                  <Input label="Contact Email" type="email" placeholder="school@email.com" />
                </>}

                {activeTab === 'audience' && <>
                  <Input label="Full Name" placeholder="Your name" />
                  <Input label="Email" type="email" placeholder="your@email.com" />
                  <Input label="Phone" type="tel" placeholder="+94 7X XXX XXXX" />
                  <Select label="Patron Category" options={['General Audience', 'Arts Patron', 'Corporate Sponsor', 'Media']} />
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-title)', fontSize: '.7rem', letterSpacing: '.18em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '.4rem' }}>Message (optional)</label>
                    <textarea rows={3} style={{ width: '100%', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(201,162,39,.2)', padding: '.65rem .9rem', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', fontSize: '1rem', outline: 'none', resize: 'vertical', borderRadius: 1 }} />
                  </div>
                </>}

                <button type="submit" style={{ width: '100%', padding: '.85rem', fontFamily: 'var(--font-title)', fontSize: '.78rem', letterSpacing: '.22em', textTransform: 'uppercase', background: 'linear-gradient(135deg, rgba(201,162,39,.25), rgba(201,162,39,.1))', border: '1px solid rgba(201,162,39,.45)', color: 'var(--gold-pale)', cursor: 'pointer', transition: 'all .3s' }}>
                  Submit Registration ✦
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
