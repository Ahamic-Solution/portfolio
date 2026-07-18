







import React from 'react';
import { Aurora } from '../components/shared/Aurora';
import { MagneticButton } from '../components/shared/MagneticButton';

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 pt-28">
      <div className="absolute inset-0 bg-grid bg-grid-fade" aria-hidden />
      <Aurora />
      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="font-display text-[8rem] font-semibold leading-none text-gradient md:text-[12rem]">404</p>
        <h1 className="mt-2 font-display text-2xl font-semibold text-ink md:text-3xl">This page wandered off.</h1>
        <p className="mt-4 max-w-md text-muted">
          The page you are looking for does not exist or has moved. Let's get you back on track.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <MagneticButton to="/" variant="primary">Back to home</MagneticButton>
          <MagneticButton to="/contact" variant="ghost">Contact us</MagneticButton>
        </div>
      </div>
    </section>);

}