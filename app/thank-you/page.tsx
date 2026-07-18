'use client';









import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
import { Aurora } from '../../components/shared/Aurora';
import { MagneticButton } from '../../components/shared/MagneticButton';

export default function ThankYou() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 pt-28">
      <div className="absolute inset-0 bg-grid bg-grid-fade" aria-hidden />
      <Aurora />
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.span
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 14 }}
          className="grid h-20 w-20 place-items-center rounded-full bg-accent/20 text-accent-soft shadow-glow">
          
          <CheckIcon className="h-9 w-9" />
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-8 font-display text-4xl font-semibold tracking-tight text-ink md:text-6xl">
          
          Thank you.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-5 max-w-md text-base text-muted md:text-lg">
          
          We have got your message and a senior lead will be in touch within one business day. Keep an eye on your inbox.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row">
          
          <MagneticButton to="/" variant="primary">Back to home</MagneticButton>
          <MagneticButton to="/portfolio" variant="ghost">Explore our work</MagneticButton>
        </motion.div>
      </div>
    </section>);

}