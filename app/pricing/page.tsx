





import React from 'react';
import { CheckIcon } from 'lucide-react';
import { PageHero } from '../../components/shared/PageHero';
import { Section } from '../../components/shared/Section';
import { Reveal } from '../../components/shared/Reveal';
import { MagneticButton } from '../../components/shared/MagneticButton';
import { FAQ } from '../../components/sections/FAQ';
import { CTA } from '../../components/sections/CTA';
import { PRICING } from '../../constants/site';
import { cn } from '../../lib/cn';

export default function Pricing() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Pricing' }]}
        eyebrow="Engagements"
        title={<>Simple, senior,<br />built around your stage.</>}
        subtitle="Transparent ways to work together — from a focused sprint to a long-term product partnership." />
      

      <Section className="pt-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {PRICING.map((plan, i) =>
          <Reveal key={plan.name} delay={i * 0.08}>
              <div
              className={cn(
                'relative flex h-full flex-col rounded-3xl border p-8',
                plan.featured ? 'gradient-border border-transparent shadow-glow' : 'border-border bg-card'
              )}>
              
                {plan.featured &&
              <span className="absolute right-6 top-6 rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent-soft">
                    Most popular
                  </span>
              }
                <h3 className="font-display text-lg font-semibold text-ink">{plan.name}</h3>
                <div className="mt-4 flex items-end gap-1">
                  <span className="font-display text-4xl font-semibold text-ink">{plan.price}</span>
                  <span className="pb-1 text-sm text-muted">{plan.period}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{plan.desc}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) =>
                <li key={f} className="flex gap-3 text-sm text-muted">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" />
                      {f}
                    </li>
                )}
                </ul>
                <div className="mt-8">
                  <MagneticButton
                  to="/book"
                  variant={plan.featured ? 'primary' : 'ghost'}
                  className="w-full justify-center">
                  
                    {plan.price === 'Custom' ? 'Talk to us' : 'Get started'}
                  </MagneticButton>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </Section>

      <FAQ />
      <CTA />
    </>);

}