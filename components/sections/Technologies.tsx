




import React from 'react';
import { Section, SectionHeading } from '../shared/Section';
import { Reveal } from '../shared/Reveal';
import { TECHNOLOGIES } from '../../constants/site';

export function Technologies() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Our stack"
        title="Modern tools, chosen deliberately"
        subtitle="We stay fluent across the ecosystem and pick the right tool for your problem — never the trendiest." />
      
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {TECHNOLOGIES.map((group, i) =>
        <Reveal key={group.group} delay={i % 4 * 0.06}>
            <div className="h-full rounded-3xl border border-border bg-card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-soft">{group.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) =>
              <li
                key={item}
                className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent/50 hover:text-ink">
                
                    {item}
                  </li>
              )}
              </ul>
            </div>
          </Reveal>
        )}
      </div>
    </Section>);

}