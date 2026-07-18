import React from 'react';
import Link from 'next/link';

export function Logo({ compact = false }: {compact?: boolean;}) {
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5" aria-label="Ahamic Solutions home">
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-card ring-1 ring-border transition-transform group-hover:scale-105">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 2L22 20H2L12 2Z" stroke="url(#g)" strokeWidth="2" strokeLinejoin="round" />
          <path d="M8 20L12 12L16 20" stroke="url(#g)" strokeWidth="2" strokeLinejoin="round" />
          <defs>
            <linearGradient id="g" x1="2" y1="2" x2="22" y2="20" gradientUnits="userSpaceOnUse">
              <stop stopColor="#a58bff" />
              <stop offset="1" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute inset-0 rounded-xl bg-accent/20 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
      </span>
      {!compact &&
      <span className="font-display text-lg font-semibold tracking-tight text-ink">
          Ahamic<span className="text-muted"> Solutions</span>
        </span>
      }
    </Link>);

}
