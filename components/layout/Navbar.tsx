'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon, ArrowUpRightIcon } from 'lucide-react';
import { NAV_LINKS } from '../../constants/site';
import { Logo } from './Logo';
import { MagneticButton } from '../shared/MagneticButton';
import { cn } from '../../lib/cn';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'flex w-full max-w-container items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300',
          scrolled ? 'glass shadow-card' : 'border border-transparent'
        )}>
        
        <Logo />

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.to;
            return (
              <li key={link.to}>
                <Link
                  href={link.to}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    active ? 'text-ink' : 'text-muted hover:text-ink'
                  )}>
                  
                  {active &&
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-card ring-1 ring-border"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }} />

                  }
                  {link.label}
                </Link>
              </li>);

          })}
        </ul>

        <div className="hidden md:block">
          <MagneticButton to="/book" variant="primary" className="px-5 py-2.5">
            Book a call
            <ArrowUpRightIcon className="h-4 w-4" />
          </MagneticButton>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-full text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}>
          
          {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open &&
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="absolute left-4 right-4 top-20 z-40 glass rounded-3xl p-4 md:hidden">
          
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) =>
            <li key={link.to}>
                  <Link
                href={link.to}
                className="block rounded-2xl px-4 py-3 text-base font-medium text-ink hover:bg-card">
                
                    {link.label}
                  </Link>
                </li>
            )}
            </ul>
            <Link
            href="/book"
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-bg">
            
              Book a call <ArrowUpRightIcon className="h-4 w-4" />
            </Link>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}
