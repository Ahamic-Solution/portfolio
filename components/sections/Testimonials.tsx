




import React from 'react';
import { QuoteIcon, StarIcon } from 'lucide-react';
import { Section, SectionHeading } from '../shared/Section';
import { Reveal } from '../shared/Reveal';
import { TESTIMONIALS } from '../../constants/site';

export function Testimonials() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Client stories"
        title="Loved by the people we build with" />
      
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {TESTIMONIALS.map((t, i) =>
        <Reveal key={t.name} delay={i % 2 * 0.08}>
            <figure className="gradient-border flex h-full flex-col rounded-3xl p-8">
              <QuoteIcon className="h-8 w-8 text-accent/40" />
              <div className="mt-4 flex gap-0.5 text-warning">
                {Array.from({ length: 5 }).map((_, s) =>
              <StarIcon key={s} className="h-4 w-4 fill-current" />
              )}
              </div>
              <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-ink">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-accent/15 font-display text-sm font-semibold text-accent-soft">
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        )}
      </div>
    </Section>);

}