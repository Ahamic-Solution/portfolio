
import React from 'react';
import { cn } from '../../lib/cn';

type MarqueeProps = {
  items: string[];
  className?: string;
};

export function Marquee({ items, className }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div className={cn('relative flex overflow-hidden', className)}>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent"
        aria-hidden />
      
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent"
        aria-hidden />
      
      <div className="flex min-w-full shrink-0 animate-marquee items-center gap-16" aria-hidden>
        {doubled.map((item, i) =>
        <span key={i} className="whitespace-nowrap font-display text-xl font-medium text-muted/70">
            {item}
          </span>
        )}
      </div>
    </div>);

}