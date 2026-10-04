'use client';

import React from 'react';
import { motion } from 'framer-motion';

/*
  AboutGalleryShowcase — Vivasoft-style mosaic arch-grid, standalone.

  KEY BUG FIX: Never put `display` in the inline style of a responsive
  motion.div that also has `hidden lg:block` or `lg:hidden` Tailwind classes.
  Tailwind sets display:none via CSS class, but an inline `display` always
  wins, causing BOTH grids to render simultaneously.
  Solution: move display/grid onto a CHILD div inside the motion wrapper.
*/

/* ── Photos ───────────────────────────────────────────────── */
const PH = {
  desk:   '/team_dev_1.jpg',
  woman:  '/team_dev_2.jpg',
  pair:   '/team_dev_3.jpg',
  team:   '/ahamic_team_collaboration.jpg',
  extra:  '/3d4a654d-d018-4e89-98dd-8db47647ae36.jpg',
  extra2: '/80b80db9-5472-4e5c-91e1-09bfcef8ccc4.jpg',
};

/* ── Asymmetric border-radii (1 large corner, Vivasoft style) */
const R = {
  TR:   '0.85rem 3rem 0.85rem 0.85rem',
  TL:   '3rem 0.85rem 0.85rem 0.85rem',
  ARCH: '3.5rem 3.5rem 0.85rem 0.85rem',
  TR_s: '0.85rem 2rem 0.85rem 0.85rem',
  TL_s: '2rem 0.85rem 0.85rem 0.85rem',
};

const imgBase: React.CSSProperties = {
  display: 'block', width: '100%', height: '100%',
  objectFit: 'cover', objectPosition: 'center top',
};

interface CardProps {
  bg: string; lc: string; nc: string;
  label: string; num: string;
  radius: string; style?: React.CSSProperties;
}
function Card({ bg, lc, nc, label, num, radius, style = {} }: CardProps) {
  return (
    <div style={{
      background: bg, borderRadius: radius,
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      padding: '0 22px 24px', ...style,
    }}>
      <span style={{ fontSize: 13, fontWeight: 600, color: lc, display: 'block', marginBottom: 4, letterSpacing: '0.01em' }}>
        {label}
      </span>
      <span style={{ fontSize: '2.6rem', fontWeight: 700, color: nc, lineHeight: 1, fontFamily: '"Space Grotesk", system-ui, sans-serif' }}>
        {num}
      </span>
    </div>
  );
}

export function AboutGalleryShowcase() {
  return (
    <div className="w-full" style={{ backgroundColor: '#e8f5fd' }}>

      {/* ══ DESKTOP (lg+) ══════════════════════════════════════════════════ */}
      {/*
        IMPORTANT: `height` and `overflow` live here on the motion.div.
        `display:grid` goes on the CHILD div — NOT here — so that
        `hidden lg:block` (display:none → display:block) is not overridden
        by an inline style.
      */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:block w-full"
        style={{ height: 440, overflow: 'hidden' }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.05fr 1fr 1fr 1.1fr 1fr 1.1fr 1.05fr',
          gap: 8, width: '100%', height: '100%', alignItems: 'end',
        }}>

          {/* COL 1 — tall arch (520px → clips 80px above) */}
          <div style={{ height: 520, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ flex: 1, overflow: 'hidden', borderRadius: R.TR }}>
              <img src={PH.extra} alt="Team member" style={{ ...imgBase, objectPosition: 'center 30%' }} />
            </div>
            <div style={{ height: 176, overflow: 'hidden', borderRadius: R.TL }}>
              <img src={PH.team} alt="Ahamic team" style={imgBase} />
            </div>
          </div>

          {/* COL 2 — Blue + Pink stat cards */}
          <div style={{ height: 440, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Card bg="#dbeafe" lc="#1e40af" nc="#1d4ed8" label="Top Talents" num="300+" radius={R.TR} style={{ flex: 1 }} />
            <Card bg="#fce7f3" lc="#be185d" nc="#db2777" label="Projects"    num="100+" radius={R.TR} style={{ flex: 1 }} />
          </div>

          {/* COL 3 — Portrait (380px → 60px space above) */}
          <div style={{ height: 380, overflow: 'hidden', borderRadius: R.TR }}>
            <img src={PH.woman} alt="Team member" style={{ ...imgBase, objectPosition: 'center top' }} />
          </div>

          {/* COL 4 — CENTER arch peak (500px → clips 60px above) */}
          <div style={{ height: 500, overflow: 'hidden', borderRadius: R.ARCH }}>
            <img src={PH.pair} alt="Pair programming" style={{ ...imgBase, objectPosition: 'center center' }} />
          </div>

          {/* COL 5 — Mint card + photo */}
          <div style={{ height: 440, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Card bg="#d1fae5" lc="#047857" nc="#059669" label="Experience" num="10+" radius={R.TR} style={{ height: 175 }} />
            <div style={{ flex: 1, overflow: 'hidden', borderRadius: R.TL }}>
              <img src={PH.desk} alt="Developer" style={{ ...imgBase, objectPosition: 'center 40%' }} />
            </div>
          </div>

          {/* COL 6 — [Portrait | Tech Stack] + discussion photo */}
          <div style={{ height: 440, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ height: 178, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              <div style={{ overflow: 'hidden', borderRadius: R.TL_s }}>
                <img src={PH.extra2} alt="Team member" style={{ ...imgBase, objectPosition: 'center top' }} />
              </div>
              <div style={{
                background: '#ede9fe', borderRadius: R.TR_s,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                padding: '10px 8px', textAlign: 'center',
              }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: '#6d28d9', display: 'block', marginBottom: 5, lineHeight: 1.3 }}>Tech Stack</span>
                <span style={{ fontSize: '1.7rem', fontWeight: 700, color: '#7c3aed', lineHeight: 1, fontFamily: '"Space Grotesk", system-ui, sans-serif' }}>180+</span>
              </div>
            </div>
            <div style={{ flex: 1, overflow: 'hidden', borderRadius: R.TR }}>
              <img src={PH.team} alt="Team discussion" style={imgBase} />
            </div>
          </div>

          {/* COL 7 — tall arch, mirrors col 1 */}
          <div style={{ height: 520, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ flex: 1, overflow: 'hidden', borderRadius: R.TL }}>
              <img src={PH.pair} alt="Engineers" style={{ ...imgBase, objectPosition: 'center 20%' }} />
            </div>
            <div style={{ height: 176, overflow: 'hidden', borderRadius: R.TR }}>
              <img src={PH.desk} alt="Workstation" style={{ ...imgBase, objectPosition: 'center 20%' }} />
            </div>
          </div>

        </div>
      </motion.div>

      {/* ══ MOBILE / TABLET (<lg) ══════════════════════════════════════════ */}
      {/*
        Same rule: `lg:hidden` is on the motion.div. display:grid goes
        on the CHILD div so it cannot override the display:none from lg:hidden.
      */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="lg:hidden w-full"
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, padding: '0 8px 40px' }}>

          <div style={{ height: 160, overflow: 'hidden', borderRadius: R.TR }}>
            <img src={PH.desk}  alt="Developer"    style={{ ...imgBase, objectPosition: 'center 20%' }} />
          </div>
          <Card bg="#dbeafe" lc="#1e40af" nc="#1d4ed8" label="Top Talents" num="300+" radius={R.TR} style={{ height: 160 }} />

          <Card bg="#fce7f3" lc="#be185d" nc="#db2777" label="Projects"    num="100+" radius={R.TL} style={{ height: 140 }} />
          <div style={{ height: 140, overflow: 'hidden', borderRadius: R.TR }}>
            <img src={PH.woman} alt="Team member" style={{ ...imgBase, objectPosition: 'center top' }} />
          </div>

          <div style={{ height: 160, overflow: 'hidden', borderRadius: R.TL }}>
            <img src={PH.pair}  alt="Pair programming" style={imgBase} />
          </div>
          <Card bg="#d1fae5" lc="#047857" nc="#059669" label="Experience"  num="10+"  radius={R.TR} style={{ height: 160 }} />

          <Card bg="#ede9fe" lc="#6d28d9" nc="#7c3aed" label="Tech Stack"  num="180+" radius={R.TR} style={{ height: 130 }} />
          <div style={{ height: 130, overflow: 'hidden', borderRadius: R.TL }}>
            <img src={PH.team}  alt="Team"          style={imgBase} />
          </div>

        </div>
      </motion.div>

    </div>
  );
}
