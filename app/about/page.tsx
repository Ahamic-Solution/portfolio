



import React from 'react';
import { PageHero } from '../../components/shared/PageHero';
import { Stats } from '../../components/sections/Stats';
import { Process } from '../../components/sections/Process';
import { Section, SectionHeading } from '../../components/shared/Section';
import { Reveal } from '../../components/shared/Reveal';
import { CTA } from '../../components/sections/CTA';

const VALUES = [
{ title: 'Craft over volume', body: 'We take fewer projects so each one gets the obsessive attention it deserves.' },
{ title: 'Outcomes over output', body: 'Shipping is the start, not the goal. We measure ourselves against your results.' },
{ title: 'Honesty over comfort', body: 'We tell you what we would do if it were our own company — even when it is hard to hear.' },
{ title: 'Ownership over ego', body: 'We leave you with clean code, clear docs, and a team that can run without us.' }];


const TEAM = [
{ name: 'Amir Haque', role: 'Founder & Principal Engineer', initials: 'AH' },
{ name: 'Nadia Rahman', role: 'Head of Design', initials: 'NR' },
{ name: 'Leo Martins', role: 'Engineering Lead', initials: 'LM' },
{ name: 'Sofia Alvarez', role: 'Product Strategy', initials: 'SA' }];


export default function About() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
        eyebrow="Our story"
        title={<>A studio built on craft,<br />candor, and consequence.</>}
        subtitle="Ahamic Solutions started with a simple conviction: the best software comes from small, senior teams who care deeply and stay accountable. Years later, that is still exactly how we work." />
      

      <Stats />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              align="left"
              eyebrow="What we believe"
              title="Principles we refuse to compromise" />
            
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {VALUES.map((v, i) =>
            <Reveal key={v.title} delay={i * 0.06}>
                <div className="gradient-border h-full rounded-3xl p-7">
                  <h3 className="font-display text-lg font-semibold text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{v.body}</p>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading eyebrow="The team" title="Senior people, hands on keyboards" subtitle="No account managers between you and the people doing the work." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m, i) =>
          <Reveal key={m.name} delay={i * 0.06}>
              <div className="group rounded-3xl border border-border bg-card p-6 text-center transition-colors hover:border-accent/50">
                <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-accent/15 font-display text-xl font-semibold text-accent-soft">
                  {m.initials}
                </span>
                <h3 className="mt-5 font-display text-base font-semibold text-ink">{m.name}</h3>
                <p className="mt-1 text-sm text-muted">{m.role}</p>
              </div>
            </Reveal>
          )}
        </div>
      </Section>

      <Process />
      <CTA />
    </>);

}