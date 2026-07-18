



import React from 'react';
import Link from 'next/link';
import { ArrowUpRightIcon } from 'lucide-react';
import { Section, SectionHeading } from '../shared/Section';
import { Reveal } from '../shared/Reveal';
import { SERVICES, type Service } from '../../constants/site';

function ServiceCard({ service, index }: {service: Service;index: number;}) {
  const Icon = service.icon;
  return (
    <Reveal delay={index % 3 * 0.06}>
      <Link
        href={`/services/${service.slug}`}
        className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/50 hover:bg-surface">
        
        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
        <div className="flex items-start justify-between">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-surface text-accent-soft ring-1 ring-border transition-colors group-hover:text-ink">
            <Icon className="h-5 w-5" />
          </span>
          <ArrowUpRightIcon className="h-5 w-5 -translate-y-1 translate-x-1 text-muted opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-ink group-hover:opacity-100" />
        </div>
        <div className="mt-8">
          <h3 className="font-display text-base font-semibold text-ink">{service.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">{service.blurb}</p>
        </div>
      </Link>
    </Reveal>);

}

export function ServicesGrid({ showAll = false }: {showAll?: boolean;}) {
  const list = showAll ? SERVICES : SERVICES.slice(0, 9);
  return (
    <Section>
      <SectionHeading
        eyebrow="What we do"
        title={<>Full-stack capability,<br />one accountable team.</>}
        subtitle="From first sketch to production scale — design, engineering, and growth under one roof." />
      
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((service, i) =>
        <ServiceCard key={service.slug} service={service} index={i} />
        )}
      </div>
      {!showAll &&
      <div className="mt-10 flex justify-center">
          <Link
        href="/services"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent/60">
          
            Explore all 18 services <ArrowUpRightIcon className="h-4 w-4" />
          </Link>
        </div>
      }
    </Section>);

}