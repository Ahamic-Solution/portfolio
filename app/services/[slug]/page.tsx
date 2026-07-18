import React from 'react';
import { notFound } from 'next/navigation';
import { CheckIcon } from 'lucide-react';
import { PageHero } from '../../../components/shared/PageHero';
import { Section, SectionHeading } from '../../../components/shared/Section';
import { Reveal } from '../../../components/shared/Reveal';
import { Process } from '../../../components/sections/Process';
import { FeaturedProjects } from '../../../components/sections/FeaturedProjects';
import { FAQ } from '../../../components/sections/FAQ';
import { CTA } from '../../../components/sections/CTA';
import { SERVICES } from '../../../constants/site';

const BENEFITS = [
'A senior team accountable to your outcomes, not billable hours.',
'A complete, documented deliverable you fully own.',
'Transparent timelines with weekly demos and honest tradeoffs.',
'Architecture and design built to scale without rewrites.'];


const FEATURES = [
{ title: 'Discovery & strategy', body: 'We start by understanding your users, constraints, and what success actually means.' },
{ title: 'Design & prototyping', body: 'High-fidelity interfaces backed by a reusable design system.' },
{ title: 'Engineering', body: 'Clean, tested, production-grade code shipped in tight iterations.' },
{ title: 'Launch & iterate', body: 'Zero-downtime deploys, monitoring, and ongoing optimization.' }];


export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetail({
  params
}: {params: Promise<{slug: string;}>;}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();
  const Icon = service.icon;

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: service.title }]}
        eyebrow={service.category}
        title={service.title}
        subtitle={service.blurb} />
      

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              align="left"
              eyebrow="Overview"
              title={<>Purpose-built {service.title.toLowerCase()}<br />for teams that ship.</>}
              subtitle={`Our ${service.title.toLowerCase()} engagements combine senior craft with disciplined process, so you get work that looks exceptional and holds up in production.`} />
            
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {FEATURES.map((f, i) =>
              <Reveal key={f.title} delay={i * 0.06}>
                  <div className="rounded-3xl border border-border bg-card p-6">
                    <h3 className="font-display text-base font-semibold text-ink">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
                  </div>
                </Reveal>
              )}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="gradient-border sticky top-28 rounded-3xl p-8">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-accent-soft">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-lg font-semibold text-ink">What you get</h3>
              <ul className="mt-4 space-y-3">
                {BENEFITS.map((b) =>
                <li key={b} className="flex gap-3 text-sm text-muted">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" />
                    {b}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Process />
      <FeaturedProjects />
      <FAQ />
      <CTA />
    </>);

}
