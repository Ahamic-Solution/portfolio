




import React from 'react';
import { Section, SectionHeading } from '../shared/Section';
import { Reveal } from '../shared/Reveal';
import { PROCESS } from '../../constants/site';

export function Process() {
  return (
    <Section>
      <SectionHeading
        eyebrow="How we work"
        title="A process built for momentum"
        subtitle="Nine deliberate steps that keep quality high and surprises low — from first conversation to long-term care." />
      
      <div className="relative mt-16">
        <div className="absolute left-0 top-0 hidden h-px w-full bg-border md:block" aria-hidden />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS.map((p, i) =>
          <Reveal key={p.step} delay={i % 3 * 0.08}>
              <div className="relative rounded-3xl border border-border bg-card p-7 transition-colors hover:border-accent/40">
                <span className="font-display text-5xl font-semibold text-border">{p.step}</span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </Section>);

}