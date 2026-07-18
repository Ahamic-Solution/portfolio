




import React from 'react';
import { Section, SectionHeading } from '../shared/Section';
import { Reveal } from '../shared/Reveal';
import { INDUSTRIES } from '../../constants/site';

export function Industries() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Industries"
        title="Deep context across sectors"
        subtitle="We have shipped in regulated, high-stakes environments — so we speak your domain from day one." />
      
      <div className="mt-14 flex flex-wrap justify-center gap-3">
        {INDUSTRIES.map((industry, i) =>
        <Reveal key={industry} delay={i % 8 * 0.03}>
            <span className="inline-flex items-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-glow">
              {industry}
            </span>
          </Reveal>
        )}
      </div>
    </Section>);

}