import React from 'react';
import Link from 'next/link';

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-3.5" aria-label="Ahamic Solutions home">
      <span className="relative flex items-center">
        <svg width="42" height="42" viewBox="0 0 110 90" fill="none" aria-hidden="true" className="transition-transform group-hover:scale-105">
          <defs>
            <linearGradient id="blue-grad" x1="4" y1="10" x2="63" y2="74" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00c0ff" />
              <stop offset="0.6" stopColor="#0052ff" />
              <stop offset="1" stopColor="#0022cc" />
            </linearGradient>
            <linearGradient id="dark-grad" x1="52" y1="12" x2="82" y2="82" gradientUnits="userSpaceOnUse">
              <stop stopColor="#253053" />
              <stop offset="1" stopColor="#0c1122" />
            </linearGradient>
            <linearGradient id="cyan-grad" x1="59" y1="44" x2="75" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00d4ff" />
              <stop offset="1" stopColor="#0088ff" />
            </linearGradient>
          </defs>

          {/* Stylized 'A' - Left ribbon */}
          <path d="M 38 10 L 6 74 H 19 L 45 22 Z" fill="url(#blue-grad)" />
          <path d="M 45 22 L 56 74 H 43 L 38 10 Z" fill="url(#blue-grad)" opacity="0.85" />
          
          {/* Stylized 'S' - Dark interlocking ribbon */}
          <path 
            d="M 52 24 C 72 10, 102 18, 102 40 C 102 54, 88 60, 78 62 C 68 64, 62 66, 62 70 C 62 74, 72 74, 80 70 L 84 80 C 72 84, 52 82, 52 72 C 52 64, 58 60, 68 58 C 78 56, 92 52, 92 40 C 92 22, 68 18, 52 32 Z" 
            fill="url(#dark-grad)" 
            stroke="#0052ff" 
            strokeWidth="1.5" 
          />

          {/* Code tag symbol </> nested in the S loop */}
          {/* Left bracket < */}
          <path d="M 64 47 L 59 52 L 64 57" stroke="url(#cyan-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Slash / */}
          <path d="M 71 44 L 67 60" stroke="#0052ff" strokeWidth="2.5" strokeLinecap="round" />
          {/* Right bracket > */}
          <path d="M 70 47 L 75 52 L 70 57" stroke="url(#cyan-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>

      {!compact && (
        <>
          {/* Vertical Separator Line */}
          <span className="h-9 w-px bg-border/60" aria-hidden="true" />
          
          {/* Brand Text Stack */}
          <div className="flex flex-col justify-center">
            <span className="font-sans text-[15px] font-bold uppercase tracking-[0.1em] text-ink leading-none">
              Ahamic
            </span>
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-accent leading-none mt-1">
              Solutions
            </span>
            <span className="font-sans text-[6px] font-medium uppercase tracking-[0.18em] text-muted leading-none mt-1 flex items-center gap-0.5">
              Code <span className="text-accent">•</span> Create <span className="text-accent">•</span> Solve
            </span>
          </div>
        </>
      )}
    </Link>
  );
}
