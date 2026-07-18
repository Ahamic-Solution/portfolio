'use client';






import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRightIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageHero } from '../../components/shared/PageHero';
import { Section } from '../../components/shared/Section';
import { CTA } from '../../components/sections/CTA';
import { PROJECTS } from '../../constants/site';
import { img } from '../../constants/images';
import { cn } from '../../lib/cn';

export default function Portfolio() {
  const categories = useMemo(() => ['All', ...Array.from(new Set(PROJECTS.map((p) => p.category)))], []);
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Portfolio' }]}
        eyebrow="Selected work"
        title={<>Work we are proud<br />to put our name on.</>}
        subtitle="A look at products we have designed and engineered across fintech, healthcare, AI, and beyond." />
      

      <Section>
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {categories.map((c) =>
          <button
            key={c}
            onClick={() => setActive(c)}
            className={cn(
              'rounded-full border px-5 py-2 text-sm font-medium transition-colors',
              active === c ? 'border-accent bg-accent/15 text-ink' : 'border-border bg-card text-muted hover:text-ink'
            )}>
            
              {c}
            </button>
          )}
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) =>
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
              
                <Link
                href={`/portfolio/${project.slug}`}
                className="group block overflow-hidden rounded-3xl border border-border bg-card transition-colors hover:border-accent/50">
                
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                    src={img(project.image)}
                    alt={`${project.client} — ${project.title}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  
                    <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white backdrop-blur">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-4 p-6">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted">{project.client} · {project.year}</p>
                      <h3 className="mt-1.5 font-display text-lg font-semibold text-ink">{project.title}</h3>
                    </div>
                    <ArrowUpRightIcon className="mt-1 h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-ink" />
                  </div>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Section>

      <CTA />
    </>);

}