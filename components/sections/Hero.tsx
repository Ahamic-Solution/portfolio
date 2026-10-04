'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, FileTextIcon } from 'lucide-react';
import { MagneticButton } from '../shared/MagneticButton';
import { Aurora } from '../shared/Aurora';
import { SITE } from '../../constants/site';
import { TeamGridShowcase } from './TeamGridShowcase';

const words = ['Software', 'Development', '&', 'Digital', 'Solutions'];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const word = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  show:   { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen w-full flex-col items-center justify-start pt-28 lg:pt-32"
      style={{ backgroundColor: '#e8f5fd' }}
    >
      {/* Subtle dot-grid background */}
      <div className="absolute inset-0 bg-grid bg-grid-fade" aria-hidden />
      <Aurora />

      {/* ── Badge + Title + Subtitle + CTA buttons ── */}
      <div className="relative z-10 mx-auto flex w-full max-w-container flex-col items-center px-4 sm:px-6 text-center mb-8 lg:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1.5 text-xs text-blue-700 backdrop-blur font-display font-medium tracking-wider uppercase shadow-sm"
        >
          Ahamic Solutions · Software Development Company
        </motion.div>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-[5.25rem] max-w-4xl"
        >
          {words.map((w, i) => (
            <motion.span
              key={i}
              variants={word}
              className={i >= 3 ? 'text-gradient inline-block' : 'inline-block'}
            >
              {w}
              {i < words.length - 1 && '\u00A0'}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-5 max-w-xl text-balance text-base text-muted md:text-lg"
        >
          {SITE.subline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-7 flex flex-col items-center gap-3 sm:flex-row"
        >
          <MagneticButton to="/book" variant="primary">
            Hire The Best Team <ArrowRightIcon className="h-4 w-4" />
          </MagneticButton>
          <MagneticButton to="/portfolio" variant="ghost">
            <FileTextIcon className="h-4 w-4" /> Company Deck
          </MagneticButton>
        </motion.div>
      </div>

      {/* ── Full-width edge-to-edge 7-col mosaic photo grid ── */}
      <div className="relative z-10 w-full">
        <TeamGridShowcase />
      </div>
    </section>
  );
}

