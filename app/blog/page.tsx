







import React from 'react';
import Link from 'next/link';
import { ArrowUpRightIcon, ClockIcon } from 'lucide-react';
import { PageHero } from '../../components/shared/PageHero';
import { Section } from '../../components/shared/Section';
import { Reveal } from '../../components/shared/Reveal';
import { CTA } from '../../components/sections/CTA';
import { BLOG } from '../../constants/site';

export default function Blog() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Blog' }]}
        eyebrow="Journal"
        title={<>Ideas from the<br />people who build.</>}
        subtitle="Practical writing on design, engineering, and shipping software that lasts." />
      
      <Section className="pt-16">
        <div className="grid gap-6 md:grid-cols-3">
          {BLOG.map((post, i) =>
          <Reveal key={post.slug} delay={i * 0.08}>
              <Link href="/blog" className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-colors hover:border-accent/50">
                <div className="flex items-center gap-3 text-xs text-muted">
                  <span className="rounded-full bg-accent/15 px-3 py-1 text-accent-soft">{post.category}</span>
                  <span className="inline-flex items-center gap-1"><ClockIcon className="h-3 w-3" />{post.read}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">{post.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-ink">
                  Read article <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          )}
        </div>
      </Section>
      <CTA />
    </>);

}