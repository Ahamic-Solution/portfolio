'use client';








import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MailIcon, PhoneIcon, MapPinIcon, ArrowUpRightIcon, Loader2Icon } from 'lucide-react';
import { PageHero } from '../../components/shared/PageHero';
import { Section } from '../../components/shared/Section';
import { Reveal } from '../../components/shared/Reveal';
import { SITE } from '../../constants/site';

const budgets = ['< $25k', '$25k – $75k', '$75k – $150k', '$150k+'];

export default function Contact() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => router.push('/thank-you'), 900);
  }

  const contactCards = [
  { icon: MailIcon, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: PhoneIcon, label: 'Phone', value: SITE.phone, href: `tel:${SITE.phone}` },
  { icon: MapPinIcon, label: 'Studio', value: SITE.address }];


  return (
    <>
      <PageHero
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        eyebrow="Let's talk"
        title={<>Tell us what you're<br />trying to build.</>}
        subtitle="Share a few details and we will get back within one business day with clear next steps." />
      

      <Section className="pt-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="space-y-4">
              {contactCards.map((c) => {
                const Inner =
                <div className="flex items-center gap-4 rounded-3xl border border-border bg-card p-6 transition-colors hover:border-accent/50">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent-soft">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted">{c.label}</p>
                      <p className="mt-0.5 font-medium text-ink">{c.value}</p>
                    </div>
                  </div>;

                return c.href ?
                <a key={c.label} href={c.href} className="block">{Inner}</a> :

                <div key={c.label}>{Inner}</div>;

              })}
            </div>

            <div className="mt-4 overflow-hidden rounded-3xl border border-border">
              <div className="relative aspect-[16/10] bg-surface bg-grid">
                <div className="absolute inset-0 grid place-items-center">
                  <span className="animate-floaty grid h-14 w-14 place-items-center rounded-full bg-accent/20 text-accent-soft shadow-glow">
                    <MapPinIcon className="h-6 w-6" />
                  </span>
                </div>
                <span className="absolute bottom-4 left-4 rounded-full bg-black/50 px-3 py-1 text-xs text-white backdrop-blur">
                  Dhaka, Bangladesh · Remote worldwide
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <form onSubmit={onSubmit} className="gradient-border rounded-3xl p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="name" label="Full name" placeholder="Jane Cooper" required />
                  <Field id="email" label="Work email" type="email" placeholder="jane@company.com" required />
                  <Field id="company" label="Company" placeholder="Acme Inc." />
                  <Field id="phone" label="Phone (optional)" placeholder="+1 555 000 0000" />
                </div>

                <fieldset className="mt-6">
                  <legend className="mb-2 text-sm font-medium text-ink">Budget range</legend>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b, i) =>
                    <label key={b} className="cursor-pointer">
                        <input type="radio" name="budget" defaultChecked={i === 1} className="peer sr-only" />
                        <span className="inline-block rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted transition-colors peer-checked:border-accent peer-checked:bg-accent/15 peer-checked:text-ink">
                          {b}
                        </span>
                      </label>
                    )}
                  </div>
                </fieldset>

                <div className="mt-6">
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">Project details</label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    placeholder="Tell us about your goals, timeline, and where you need help…"
                    className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-accent/60 focus:outline-none" />
                  
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-bg transition-colors hover:bg-white disabled:opacity-60 sm:w-auto">
                  
                  {submitting ?
                  <><Loader2Icon className="h-4 w-4 animate-spin" /> Sending…</> :

                  <>Send message <ArrowUpRightIcon className="h-4 w-4" /></>
                  }
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </Section>
    </>);

}

function Field({
  id, label, type = 'text', placeholder, required
}: {id: string;label: string;type?: string;placeholder?: string;required?: boolean;}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-ink">
        {label}{required && <span className="text-accent-soft"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-accent/60 focus:outline-none" />
      
    </div>);

}