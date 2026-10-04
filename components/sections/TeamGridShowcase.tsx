'use client';

import React from 'react';
import { motion } from 'framer-motion';

/*
 ╔══════════════════════════════════════════════════════════════════════════╗
 ║  TeamGridShowcase — Pixel-exact Vivasoft 7-column mosaic               ║
 ║                                                                          ║
 ║  REFERENCE MATCH: 7-column grid                                          ║
 ║  Col 1: [tall photo] + [group photo]    — 560px, clips 80px above       ║
 ║  Col 2: [Blue "Top Talents 300+"] +                                       ║
 ║          [Pink "Projects 100+"]         — 480px, fills container         ║
 ║  Col 3: [Woman portrait]               — 420px, 60px gap at top         ║
 ║  Col 4: CENTER arch photo              — 540px, arch peak               ║
 ║  Col 5: [Mint "Experience 10+"] +                                         ║
 ║          [dev photo]                   — 480px, fills container          ║
 ║  Col 6: [portrait|TechStack 180+] top +                                   ║
 ║          [team photo] bottom           — 480px, fills container          ║
 ║  Col 7: single tall portrait           — 480px, full height              ║
 ╚══════════════════════════════════════════════════════════════════════════╝
*/

/* ── Photos ─────────────────────────────────────────────────────────────── */
const PH = {
  desk:  '/team_dev_1.jpg',
  woman: '/team_dev_2.jpg',
  pair:  '/team_dev_3.jpg',
  team:  '/ahamic_team_collaboration.jpg',
};

/* ── Asymmetric border-radii (Vivasoft style: 1 large corner per element) ─ */
const R = {
  TR:   '0.85rem 3.5rem 0.85rem 0.85rem',
  TL:   '3.5rem 0.85rem 0.85rem 0.85rem',
  ARCH: '4rem 4rem 0.85rem 0.85rem',
  TR_s: '0.85rem 2rem 0.85rem 0.85rem',
  TL_s: '2rem 0.85rem 0.85rem 0.85rem',
};

/* ── Shared image fill ───────────────────────────────────────────────────── */
const imgBase: React.CSSProperties = {
  display: 'block', width: '100%', height: '100%',
  objectFit: 'cover', objectPosition: 'center top',
};

/* ── Stat card ───────────────────────────────────────────────────────────── */
interface CardProps {
  bg: string; lc: string; nc: string;
  label: string; num: string;
  radius: string; style?: React.CSSProperties;
}
function Card({ bg, lc, nc, label, num, radius, style = {} }: CardProps) {
  return (
    <div style={{
      background: bg,
      borderRadius: radius,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '0 24px 26px',
      boxSizing: 'border-box',
      ...style,
    }}>
      <span style={{
        fontSize: 13,
        fontWeight: 600,
        color: lc,
        display: 'block',
        marginBottom: 6,
        letterSpacing: '0.03em',
        textTransform: 'uppercase' as const,
        fontFamily: 'Inter, system-ui, sans-serif',
      }}>
        {label}
      </span>
      <span style={{
        fontSize: '3rem',
        fontWeight: 700,
        color: nc,
        lineHeight: 1,
        fontFamily: '"Space Grotesk", system-ui, sans-serif',
        letterSpacing: '-0.02em',
      }}>
        {num}
      </span>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
export function TeamGridShowcase() {
  return (
    <>

      {/* ━━━━━━━━━━━━━━━━  DESKTOP  (lg and above)  ━━━━━━━━━━━━━━━━━━━━━━━ */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:block w-full"
        style={{ height: 480, overflow: 'hidden' }}
      >
        <div style={{
          display: 'grid',
          /* 7 columns — exact Vivasoft proportions */
          gridTemplateColumns: '1.1fr 0.85fr 1fr 1.2fr 0.65fr 1.1fr 1.0fr',
          gap: 8,
          width: '100%',
          height: '100%',
          alignItems: 'end',
        }}>

          {/* COL 1 — tall flanking photo + group photo */}
          <div style={{ height: 560, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ flex: 1, overflow: 'hidden', borderRadius: R.TR }}>
              <img src={PH.desk} alt="Developer at desk"
                style={{ ...imgBase, objectPosition: 'center 20%' }} />
            </div>
            <div style={{ height: 185, overflow: 'hidden', borderRadius: R.TL }}>
              <img src={PH.team} alt="Team meeting" style={imgBase} />
            </div>
          </div>

          {/* COL 2 — Blue "Top Talents 300+" + Pink "Projects 100+" */}
          <div style={{ height: 480, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Card bg="#dbeafe" lc="#1e40af" nc="#1d4ed8" label="Top Talents" num="300+"
              radius={R.TR} style={{ flex: 1 }} />
            <Card bg="#fce7f3" lc="#be185d" nc="#db2777" label="Projects" num="100+"
              radius={R.TR} style={{ flex: 1 }} />
          </div>

          {/* COL 3 — woman portrait (shorter, space at top) */}
          <div style={{ height: 420, overflow: 'hidden', borderRadius: R.TR }}>
            <img src={PH.woman} alt="Team member" style={{ ...imgBase, objectPosition: 'center top' }} />
          </div>

          {/* COL 4 — CENTER arch (tallest, overflows top to create arch peak) */}
          <div style={{ height: 540, overflow: 'hidden', borderRadius: R.ARCH }}>
            <img src={PH.pair} alt="Engineers collaborating"
              style={{ ...imgBase, objectPosition: 'center center' }} />
          </div>

          {/* COL 5 — Mint "Experience 10+" card + dev photo */}
          <div style={{ height: 480, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Card bg="#d1fae5" lc="#047857" nc="#059669" label="Experience" num="10+"
              radius={R.TR} style={{ height: 175 }} />
            <div style={{ flex: 1, overflow: 'hidden', borderRadius: R.TL }}>
              <img src={PH.desk} alt="Developer" style={{ ...imgBase, objectPosition: 'center 40%' }} />
            </div>
          </div>

          {/* COL 6 — [portrait | Tech Stack 180+] top + [team discussion] bottom */}
          <div style={{ height: 480, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ height: 178, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              <div style={{ overflow: 'hidden', borderRadius: R.TL_s }}>
                <img src={PH.woman} alt="Team member" style={{ ...imgBase, objectPosition: 'center top' }} />
              </div>
              <div style={{
                background: '#ede9fe',
                borderRadius: R.TR_s,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-end',
                padding: '0 14px 16px',
                boxSizing: 'border-box',
              }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: '#6d28d9', display: 'block', marginBottom: 5, letterSpacing: '0.03em', textTransform: 'uppercase' }}>
                  Tech Stack
                </span>
                <span style={{ fontSize: '2.1rem', fontWeight: 700, color: '#7c3aed', lineHeight: 1, fontFamily: '"Space Grotesk", system-ui, sans-serif', letterSpacing: '-0.02em' }}>
                  180+
                </span>
              </div>
            </div>
            <div style={{ flex: 1, overflow: 'hidden', borderRadius: R.TR }}>
              <img src={PH.team} alt="Team discussion" style={imgBase} />
            </div>
          </div>

          {/* COL 7 — single tall portrait (right flank) */}
          <div style={{ height: 480, overflow: 'hidden', borderRadius: R.TL }}>
            <img src={PH.pair} alt="Engineer" style={{ ...imgBase, objectPosition: 'center 20%' }} />
          </div>

        </div>
      </motion.div>

      {/* ━━━━━━━━━━━━━━━━  TABLET / MOBILE  (<lg)  ━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="lg:hidden w-full"
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, padding: '0 8px 48px' }}>
          {/* row 1 */}
          <div style={{ height: 200, overflow: 'hidden', borderRadius: R.TR }}>
            <img src={PH.desk} alt="Developer" style={{ ...imgBase, objectPosition: 'center 20%' }} />
          </div>
          <Card bg="#dbeafe" lc="#1e40af" nc="#1d4ed8" label="Top Talents" num="300+" radius={R.TR} style={{ height: 200 }} />
          {/* row 2 */}
          <Card bg="#fce7f3" lc="#be185d" nc="#db2777" label="Projects" num="100+" radius={R.TL} style={{ height: 180 }} />
          <div style={{ overflow: 'hidden', borderRadius: R.TR, height: 180 }}>
            <img src={PH.woman} alt="Team member" style={{ ...imgBase, objectPosition: 'center top' }} />
          </div>
          {/* row 3 */}
          <div style={{ height: 200, overflow: 'hidden', borderRadius: R.TL }}>
            <img src={PH.pair} alt="Pair programming" style={imgBase} />
          </div>
          <Card bg="#d1fae5" lc="#047857" nc="#059669" label="Experience" num="10+" radius={R.TR} style={{ height: 200 }} />
          {/* row 4 */}
          <Card bg="#ede9fe" lc="#6d28d9" nc="#7c3aed" label="Tech Stack" num="180+" radius={R.TR} style={{ height: 160 }} />
          <div style={{ overflow: 'hidden', borderRadius: R.TL, height: 160 }}>
            <img src={PH.team} alt="Team" style={imgBase} />
          </div>
        </div>
      </motion.div>

    </>
  );
}