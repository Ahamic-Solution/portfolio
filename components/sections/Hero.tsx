'use client';




import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon, PlayIcon, StarIcon } from 'lucide-react';
import { MagneticButton } from '../shared/MagneticButton';
import { Aurora } from '../shared/Aurora';
import { img } from '../../constants/images';
import { SITE } from '../../constants/site';

const words = ['We', 'engineer', 'software', 'worth', 'trusting.'];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
};
const word = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden pt-28">
      <div className="absolute inset-0 bg-grid bg-grid-fade" aria-hidden />
      <Aurora />

      <div className="relative z-10 mx-auto flex w-full max-w-container flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs text-muted backdrop-blur">
          
          <span className="flex items-center gap-0.5 text-warning">
            {Array.from({ length: 5 }).map((_, i) =>
            <StarIcon key={i} className="h-3 w-3 fill-current" />
            )}
          </span>
          Rated 5.0 by 40+ founders & product leaders
        </motion.div>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          
          {words.map((w, i) =>
          <motion.span
            key={i}
            variants={word}
            className={i >= 3 ? 'text-gradient inline-block' : 'inline-block'}>
            
              {w}
              {i < words.length - 1 && '\u00A0'}
            </motion.span>
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-7 max-w-2xl text-balance text-base text-muted md:text-lg">
          
          {SITE.subline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          
          <MagneticButton to="/book" variant="primary">
            Book a consultation <ArrowUpRightIcon className="h-4 w-4" />
          </MagneticButton>
          <MagneticButton to="/portfolio" variant="ghost">
            <PlayIcon className="h-4 w-4" /> View our work
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-16 w-full max-w-5xl">
          
          <div className="animate-floaty gradient-border overflow-hidden rounded-3xl shadow-glow">
            <img
              src={img('PROJECT_NORTHWIND')}
              alt="Ahamic Solutions product dashboard preview"
              className="w-full"
              loading="eager" />
            
          </div>
          <div className="pointer-events-none absolute -inset-x-10 -bottom-10 h-40 bg-gradient-to-t from-bg to-transparent" />
        </motion.div>
      </div>
    </section>);

}