


import React from 'react';
import { Section } from '../shared/Section';
import { Reveal } from '../shared/Reveal';
import { Counter } from '../shared/Counter';
import { STATS } from '../../constants/site';

export function Stats() {
  return (
    <Section className="py-16 md:py-20">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
        {STATS.map((s, i) =>
        <Reveal key={s.label} delay={i * 0.08} className="bg-surface">
            <div className="flex flex-col items-center gap-1 px-6 py-10 text-center">
              <span className="font-display text-4xl font-semibold text-ink md:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </span>
              <span className="text-sm text-muted">{s.label}</span>
            </div>
          </Reveal>
        )}
      </div>
    </Section>);

}