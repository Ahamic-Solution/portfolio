
import React from 'react';
import { cn } from '../../lib/cn';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn('relative w-full py-24 md:py-32', className)}>
      <div className="mx-auto w-full max-w-container px-6">{children}</div>
    </section>);

}

type EyebrowProps = {children: React.ReactNode;className?: string;};

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted',
        className
      )}>
      
      <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-glow" />
      {children}
    </span>);

}

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeading({ eyebrow, title, subtitle, align = 'center', className }: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}>
      
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
        {title}
      </h2>
      {subtitle &&
      <p className={cn('max-w-2xl text-base text-muted md:text-lg', align === 'center' && 'mx-auto')}>
          {subtitle}
        </p>
      }
    </div>);

}