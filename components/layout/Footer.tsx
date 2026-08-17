'use client';



import React from 'react';
import Link from 'next/link';
import { ArrowUpRightIcon, Facebook, LinkedinIcon } from 'lucide-react';
import { Logo } from './Logo';
import { SITE, SERVICES, INDUSTRIES } from '../../constants/site';

const columns = [
{
  title: 'Company',
  links: [
  { label: 'About', to: '/about' },
  { label: 'Team', to: '/about' },
  { label: 'Careers', to: '/careers' },
  { label: 'Process', to: '/about' },
  { label: 'Contact', to: '/contact' }]

},
{
  title: 'Services',
  links: SERVICES.slice(0, 6).map((s) => ({ label: s.title, to: `/services/${s.slug}` }))
},
{
  title: 'Resources',
  links: [
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Case Studies', to: '/portfolio' },
  { label: 'Blog', to: '/blog' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'FAQ', to: '/contact' }]

},
{
  title: 'Legal',
  links: [
  { label: 'Privacy Policy', to: '/legal/privacy' },
  { label: 'Terms & Conditions', to: '/legal/terms' },
  { label: 'Cookie Policy', to: '/legal/cookies' }]

}];


const socials = [
  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/ahamicsolutions' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/company/ahamicsolutions/' }
];


export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-border bg-surface">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="mx-auto w-full max-w-container px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">{SITE.subline}</p>
            <div className="mt-6 flex flex-col gap-2 text-sm text-muted">
              <a href={`mailto:${SITE.email}`} className="hover:text-ink">{SITE.email}</a>
              <a href={`tel:${SITE.phone}`} className="hover:text-ink">{SITE.phone}</a>
              <span>{SITE.address}</span>
            </div>
            <div className="mt-6 flex gap-2">
              {socials.map((s) =>
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted transition-colors hover:border-accent/60 hover:text-ink">
                
                  <s.icon className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {columns.map((col) =>
            <div key={col.title}>
                <h3 className="text-sm font-semibold text-ink">{col.title}</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map((link) =>
                <li key={link.label}>
                      <Link href={link.to} className="text-sm text-muted transition-colors hover:text-ink">
                        {link.label}
                      </Link>
                    </li>
                )}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-border bg-card p-8 md:flex md:items-center md:justify-between">
          <div>
            <h3 className="font-display text-xl font-semibold text-ink">Get sharp product insight, monthly.</h3>
            <p className="mt-1 text-sm text-muted">No noise. Just what we are learning building software.</p>
          </div>
          <form
            className="mt-5 flex w-full max-w-md gap-2 md:mt-0"
            onSubmit={(e) => e.preventDefault()}>
            
            <label htmlFor="newsletter" className="sr-only">Email address</label>
            <input
              id="newsletter"
              type="email"
              required
              placeholder="you@company.com"
              className="w-full rounded-full border border-border bg-bg px-5 py-3 text-sm text-ink placeholder:text-muted focus:border-accent/60 focus:outline-none" />
            
            <button className="flex items-center gap-1.5 rounded-full bg-ink px-5 py-3 text-sm font-medium text-bg hover:bg-white">
              Subscribe <ArrowUpRightIcon className="h-4 w-4" />
            </button>
          </form>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted md:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
            {INDUSTRIES.slice(0, 5).join(' · ')} & more
          </p>
        </div>
      </div>
    </footer>);

}