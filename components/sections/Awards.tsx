





import React from 'react';
import { TrophyIcon } from 'lucide-react';
import { Section } from '../shared/Section';
import { Reveal } from '../shared/Reveal';
import { AWARDS } from '../../constants/site';

export function Awards() {
  return (
    <Section className="py-16">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {AWARDS.map((a, i) =>
        <Reveal key={a.name} delay={i * 0.06}>
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-6">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent-soft">
                <TrophyIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-ink">{a.name}</p>
                <p className="text-xs text-muted">{a.detail}</p>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </Section>);

}