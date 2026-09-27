





import React from 'react';
import { ArrowUpRightIcon } from 'lucide-react';
import { Section } from '../shared/Section';
import { Reveal } from '../shared/Reveal';
import { Aurora } from '../shared/Aurora';
import { MagneticButton } from '../shared/MagneticButton';

export function CTA() {
  return (
    <Section>
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-white px-6 py-20 text-center text-slate-900 shadow-xl shadow-slate-900/5 md:px-16 md:py-28">
          <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
          <Aurora />
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-6xl">
              Let's build something<br /><span className="bg-gradient-to-r from-slate-900 via-accent to-blue-600 bg-clip-text text-transparent">worth trusting.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base text-slate-600 md:text-lg">
              Tell us where you want to go. We will show you the fastest credible path to get there — with a plan you can act on immediately.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <MagneticButton to="/book" variant="primary" className="bg-accent text-white hover:bg-blue-600 shadow-md shadow-blue-500/20">
                Book a consultation <ArrowUpRightIcon className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton to="/contact" variant="ghost" className="border-slate-200 bg-slate-50 text-slate-900 hover:bg-slate-100 hover:border-slate-300">
                Get in touch
              </MagneticButton>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>);

}