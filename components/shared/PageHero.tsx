'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRightIcon } from 'lucide-react';
import { Aurora } from './Aurora';
import { Eyebrow } from './Section';

type Crumb = {label: string;to?: string;};

type PageHeroProps = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  crumbs?: Crumb[];
};

export function PageHero({ eyebrow, title, subtitle, crumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border pt-40 pb-20 md:pt-48 md:pb-28">
      <div className="absolute inset-0 bg-grid bg-grid-fade" aria-hidden />
      <Aurora />
      <div className="relative z-10 mx-auto w-full max-w-container px-6 text-center">
        {crumbs &&
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center justify-center gap-1.5 text-xs text-muted">
            {crumbs.map((c, i) =>
          <span key={i} className="flex items-center gap-1.5">
                {c.to ?
            <Link href={c.to} className="hover:text-ink">{c.label}</Link> :

            <span className="text-ink">{c.label}</span>
            }
                {i < crumbs.length - 1 && <ChevronRightIcon className="h-3 w-3" />}
              </span>
          )}
          </nav>
        }
        {eyebrow &&
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-6 flex justify-center">
            <Eyebrow>{eyebrow}</Eyebrow>
          </motion.div>
        }
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink md:text-6xl">
          
          {title}
        </motion.h1>
        {subtitle &&
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted md:text-lg">
          
            {subtitle}
          </motion.p>
        }
      </div>
    </section>);

}
