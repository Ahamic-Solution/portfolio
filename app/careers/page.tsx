








import React from 'react';
import Link from 'next/link';
import { ArrowUpRightIcon, MapPinIcon } from 'lucide-react';
import { PageHero } from '../../components/shared/PageHero';
import { Section } from '../../components/shared/Section';
import { Reveal } from '../../components/shared/Reveal';
import { CTA } from '../../components/sections/CTA';

const ROLES = [
{ title: 'Senior Product Designer', team: 'Design', location: 'Remote', type: 'Full-time' },
{ title: 'Senior Full-Stack Engineer', team: 'Engineering', location: 'Remote', type: 'Full-time' },
{ title: 'AI Engineer', team: 'Engineering', location: 'Remote', type: 'Full-time' },
{ title: 'Product Manager', team: 'Product', location: 'San Francisco', type: 'Full-time' }];


export default function Careers() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Careers' }]}
        eyebrow="Join us"
        title={<>Do the best work<br />of your career.</>}
        subtitle="We are a small team of senior people who care about craft. If that sounds like you, we would love to talk." />
      
      <Section className="pt-16">
        <div className="mx-auto max-w-3xl space-y-4">
          {ROLES.map((role, i) =>
          <Reveal key={role.title} delay={i * 0.06}>
              <Link href="/contact" className="group flex items-center justify-between gap-4 rounded-3xl border border-border bg-card p-6 transition-colors hover:border-accent/50">
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{role.title}</h3>
                  <p className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
                    <span>{role.team}</span>
                    <span className="inline-flex items-center gap-1"><MapPinIcon className="h-3.5 w-3.5" />{role.location}</span>
                    <span>{role.type}</span>
                  </p>
                </div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border text-muted transition-colors group-hover:border-accent/60 group-hover:text-ink">
                  <ArrowUpRightIcon className="h-5 w-5" />
                </span>
              </Link>
            </Reveal>
          )}
        </div>
      </Section>
      <CTA />
    </>);

}