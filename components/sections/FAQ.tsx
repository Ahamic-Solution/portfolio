'use client';







import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusIcon } from 'lucide-react';
import { Section, SectionHeading } from '../shared/Section';
import { FAQS } from '../../constants/site';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section>
      <SectionHeading eyebrow="FAQ" title="Answers, upfront" />
      <div className="mx-auto mt-14 max-w-3xl">
        {FAQS.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div key={faq.q} className="border-b border-border">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-6 text-left"
                aria-expanded={isOpen}>
                
                <span className="font-display text-base font-medium text-ink md:text-lg">{faq.q}</span>
                <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="shrink-0 text-accent-soft">
                  <PlusIcon className="h-5 w-5" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen &&
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden">
                  
                    <p className="pb-6 text-sm leading-relaxed text-muted md:text-base">{faq.a}</p>
                  </motion.div>
                }
              </AnimatePresence>
            </div>);

        })}
      </div>
    </Section>);

}