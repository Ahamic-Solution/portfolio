
import React from 'react';

/** Decorative animated background glow. Purely visual. */
export function Aurora({ className = '' }: {className?: string;}) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div className="aurora animate-drift absolute -top-32 left-1/4 h-[420px] w-[420px] rounded-full bg-accent/25" />
      <div className="aurora animate-drift absolute top-10 right-1/4 h-[360px] w-[360px] rounded-full bg-cyan-glow/20 [animation-delay:-6s]" />
      <div className="aurora animate-drift absolute bottom-0 left-1/2 h-[300px] w-[300px] rounded-full bg-accent/15 [animation-delay:-12s]" />
    </div>);

}