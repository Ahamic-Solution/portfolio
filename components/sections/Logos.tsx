


import React from 'react';
import { Marquee } from '../shared/Marquee';
import { CLIENTS } from '../../constants/site';

export function Logos() {
  return (
    <div className="w-full py-12">
      <p className="mb-8 text-center text-xs uppercase tracking-[0.25em] text-muted">
        Trusted by teams building the future
      </p>
      <Marquee items={CLIENTS} />
    </div>);

}