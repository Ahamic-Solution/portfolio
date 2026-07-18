'use client';


import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/** Soft spotlight that follows the cursor. Hidden on touch / small screens. */
export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 120, damping: 20, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 120, damping: 20, mass: 0.4 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 250);
      y.set(e.clientY - 250);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-0 hidden h-[500px] w-[500px] rounded-full md:block"
      style={{
        x: sx,
        y: sy,
        background: 'radial-gradient(circle, rgba(124,92,255,0.10) 0%, transparent 60%)'
      }} />);


}