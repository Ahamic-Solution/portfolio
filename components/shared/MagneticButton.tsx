'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '../../lib/cn';

type Variant = 'primary' | 'ghost';

type MagneticButtonProps = {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  type?: 'button' | 'submit';
};

const base =
'group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none';

const variants: Record<Variant, string> = {
  primary: 'bg-ink text-bg hover:bg-white shadow-[0_10px_40px_-12px_rgba(124,92,255,0.6)]',
  ghost: 'border border-border bg-card/60 text-ink hover:border-accent/60 hover:bg-card'
};

export function MagneticButton({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  className,
  type = 'button'
}: MagneticButtonProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setPos({ x, y });
  }

  const inner =
  <motion.span
    ref={ref}
    onMouseMove={handleMove}
    onMouseLeave={() => setPos({ x: 0, y: 0 })}
    animate={{ x: pos.x, y: pos.y }}
    transition={{ type: 'spring', stiffness: 250, damping: 18, mass: 0.4 }}
    className={cn(base, variants[variant], className)}>
    
      {children}
    </motion.span>;


  if (to) return <Link href={to}>{inner}</Link>;
  if (href) return <a href={href}>{inner}</a>;
  return (
    <button type={type} onClick={onClick} className="contents">
      {inner}
    </button>);

}
