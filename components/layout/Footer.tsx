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
    <footer className="relative w-full overflow-hidden border-t border-slate-200 bg-slate-100/80 text-slate-600">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="mx-auto w-full max-w-container px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-500">{SITE.subline}</p>
            <div className="mt-6 flex flex-col gap-2 text-sm text-slate-500">
              <a href={`mailto:${SITE.email}`} className="hover:text-accent transition-colors">{SITE.email}</a>
              <a href={`tel:${SITE.phone}`} className="hover:text-accent transition-colors">{SITE.phone}</a>
              <span>{SITE.address}</span>
            </div>
            <div className="mt-6 flex gap-2">
              {socials.map((s) =>
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all hover:border-accent hover:bg-blue-50 hover:text-accent shadow-sm">
                
                  <s.icon className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {columns.map((col) =>
            <div key={col.title}>
                <h3 className="text-sm font-semibold text-slate-900">{col.title}</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map((link) =>
                <li key={link.label}>
                      <Link href={link.to} className="text-sm text-slate-500 transition-colors hover:text-accent">
                        {link.label}
                      </Link>
                    </li>
                )}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 md:flex md:items-center md:justify-between shadow-md">
          <div>
            <h3 className="font-display text-xl font-semibold text-slate-900">Get sharp product insight, monthly.</h3>
            <p className="mt-1 text-sm text-slate-500">No noise. Just what we are learning building software.</p>
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
              className="w-full rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-accent focus:bg-white focus:outline-none" />
            
            <button className="flex items-center gap-1.5 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white hover:bg-blue-600 transition-colors shrink-0 shadow-md shadow-blue-500/20">
              Subscribe <ArrowUpRightIcon className="h-4 w-4" />
            </button>
          </form>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-sm text-slate-400 md:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
            {INDUSTRIES.slice(0, 5).join(' · ')} & more
          </p>
        </div>
      </div>
    </footer>);

}