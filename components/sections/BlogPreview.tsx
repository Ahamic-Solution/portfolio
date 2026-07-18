





import React from 'react';
import Link from 'next/link';
import { ArrowUpRightIcon, ClockIcon } from 'lucide-react';
import { Section, SectionHeading } from '../shared/Section';
import { Reveal } from '../shared/Reveal';
import { BLOG } from '../../constants/site';

export function BlogPreview() {
  return (
    <Section>
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading align="left" eyebrow="Insights" title={<>From the<br />Ahamic journal</>} />
        <Link
        href="/blog"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent/60">
          
          All articles <ArrowUpRightIcon className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {BLOG.map((post, i) =>
        <Reveal key={post.slug} delay={i * 0.08}>
            <Link
        href="/blog"
            className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-colors hover:border-accent/50">
            
              <div className="flex items-center gap-3 text-xs text-muted">
                <span className="rounded-full bg-accent/15 px-3 py-1 text-accent-soft">{post.category}</span>
                <span className="inline-flex items-center gap-1"><ClockIcon className="h-3 w-3" />{post.read}</span>
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
    </Section>);

}