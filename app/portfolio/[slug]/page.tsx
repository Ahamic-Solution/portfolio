import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeftIcon, QuoteIcon } from 'lucide-react';
import { PageHero } from '../../../components/shared/PageHero';
import { Section, SectionHeading } from '../../../components/shared/Section';
import { Reveal } from '../../../components/shared/Reveal';
import { CTA } from '../../../components/sections/CTA';
import { PROJECTS } from '../../../constants/site';
import { img } from '../../../constants/images';

const SECTIONS = [
{ title: 'The challenge', body: 'The client came to us with a system straining under growth — slow, brittle, and difficult to extend. Users were frustrated and the roadmap was stalled.' },
{ title: 'Research & planning', body: 'We embedded with their team, mapped every workflow, and interviewed users to find the highest-leverage improvements. From there we defined a phased architecture and roadmap.' },
{ title: 'Design & development', body: 'We rebuilt the experience around clarity and speed, backed by a scalable design system and a clean, well-tested codebase deployed through a zero-downtime pipeline.' },
{ title: 'Results', body: 'The new platform launched on schedule and immediately moved the metrics that mattered — while giving the internal team a foundation they could confidently build on.' }];


const STACK = ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Tailwind'];

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default async function PortfolioDetail({
  params
}: {params: Promise<{slug: string;}>;}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Portfolio', to: '/portfolio' }, { label: project.client }]}
        eyebrow={`${project.category} · ${project.year}`}
        title={project.title}
        subtitle={project.summary} />
      

      <Section className="pt-16">
        <Reveal>
          <div className="gradient-border overflow-hidden rounded-3xl shadow-glow">
            <img src={img(project.image)} alt={`${project.client} platform`} className="w-full" loading="lazy" />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {[{ label: 'Client', value: project.client }, { label: 'Industry', value: project.category }, { label: 'Year', value: project.year }].map((item) =>
          <div key={item.label} className="rounded-3xl border border-border bg-card p-6">
              <p className="text-xs uppercase tracking-wider text-muted">{item.label}</p>
              <p className="mt-1.5 font-display text-lg font-semibold text-ink">{item.value}</p>
            </div>
          )}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {project.metrics.concat([{ label: 'Team size', value: '5' }, { label: 'Timeline', value: '16 wks' }]).map((m) =>
          <div key={m.label} className="rounded-3xl border border-border bg-surface p-8">
              <p className="font-display text-4xl font-semibold text-gradient">{m.value}</p>
              <p className="mt-1 text-sm text-muted">{m.label}</p>
            </div>
          )}
        </div>

        <div className="mx-auto mt-16 max-w-3xl space-y-12">
          {SECTIONS.map((s, i) =>
          <Reveal key={s.title} delay={i * 0.05}>
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink">{s.title}</h2>
                <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
              </div>
            </Reveal>
          )}

          <div>
            <SectionHeading align="left" title="Technology stack" />
            <div className="mt-6 flex flex-wrap gap-2">
              {STACK.map((t) =>
              <span key={t} className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted">{t}</span>
              )}
            </div>
          </div>

          <figure className="gradient-border rounded-3xl p-8">
            <QuoteIcon className="h-8 w-8 text-accent/40" />
            <blockquote className="mt-4 text-lg leading-relaxed text-ink">
              "Ahamic delivered exactly what they promised, on time, and left us stronger than they found us. We would work with them again in a heartbeat."
            </blockquote>
            <figcaption className="mt-5 text-sm text-muted">— Product leadership, {project.client}</figcaption>
          </figure>
        </div>

        <div className="mt-14 flex justify-center">
          <Link href="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-ink hover:border-accent/60">
            <ArrowLeftIcon className="h-4 w-4" /> Back to all work
          </Link>
        </div>
      </Section>

      <CTA />
    </>);

}
