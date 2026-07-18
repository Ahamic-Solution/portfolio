



import React from 'react';
import Link from 'next/link';
import { ArrowUpRightIcon } from 'lucide-react';
import { Section, SectionHeading } from '../shared/Section';
import { Reveal } from '../shared/Reveal';
import { PROJECTS } from '../../constants/site';
import { img } from '../../constants/images';

export function FeaturedProjects() {
  return (
    <Section>
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          align="left"
          eyebrow="Selected work"
          title={<>Products people<br />rely on every day.</>} />
        
        <Link
        href="/portfolio"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent/60">
          
          All projects <ArrowUpRightIcon className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {PROJECTS.map((project, i) =>
        <Reveal key={project.slug} delay={i % 2 * 0.1}>
            <Link
        href={`/portfolio/${project.slug}`}
            className="group block overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:border-accent/50">
            
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                src={img(project.image)}
                alt={`${project.client} — ${project.title}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white backdrop-blur">
                  {project.category}
                </span>
              </div>
              <div className="flex items-start justify-between gap-4 p-6">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted">{project.client} · {project.year}</p>
                  <h3 className="mt-1.5 font-display text-lg font-semibold text-ink">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
                  <div className="mt-4 flex gap-6">
                    {project.metrics.map((m) =>
                  <div key={m.label}>
                        <p className="font-display text-xl font-semibold text-gradient">{m.value}</p>
                        <p className="text-xs text-muted">{m.label}</p>
                      </div>
                  )}
                  </div>
                </div>
                <ArrowUpRightIcon className="mt-1 h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-ink" />
              </div>
            </Link>
          </Reveal>
        )}
      </div>
    </Section>);

}