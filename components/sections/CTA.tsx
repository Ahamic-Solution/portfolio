





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
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-surface px-6 py-20 text-center md:px-16 md:py-28">
          <div className="absolute inset-0 bg-grid bg-grid-fade opacity-60" aria-hidden />
          <Aurora />
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-ink md:text-6xl">
              Let's build something<br /><span className="text-gradient">worth trusting.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base text-muted md:text-lg">
              Tell us where you want to go. We will show you the fastest credible path to get there — with a plan you can act on immediately.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <MagneticButton to="/book" variant="primary">
                Book a consultation <ArrowUpRightIcon className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton to="/contact" variant="ghost">
                Get in touch
              </MagneticButton>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>);

}