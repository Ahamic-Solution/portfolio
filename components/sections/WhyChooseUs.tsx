



import React from 'react';
import { CheckIcon } from 'lucide-react';
import { Section, SectionHeading } from '../shared/Section';
import { Reveal } from '../shared/Reveal';
import { WHY } from '../../constants/site';

export function WhyChooseUs() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            align="left"
            eyebrow="Why Ahamic"
            title={<>The partner you wish<br />you had hired first.</>}
            subtitle="We are the small, senior team that behaves like an extension of yours — obsessed with quality, honest about tradeoffs, and accountable to outcomes." />
          
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {WHY.map((item, i) =>
          <Reveal key={item.title} delay={i * 0.08}>
              <div className="gradient-border h-full rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent-soft">
                  <CheckIcon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </Section>);

}