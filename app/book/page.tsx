'use client';








import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CalendarIcon, ClockIcon, CheckIcon, ArrowUpRightIcon } from 'lucide-react';
import { PageHero } from '../../components/shared/PageHero';
import { Section } from '../../components/shared/Section';
import { Reveal } from '../../components/shared/Reveal';
import { cn } from '../../lib/cn';

const days = ['Mon 21', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'];
const times = ['9:00 AM', '10:30 AM', '1:00 PM', '2:30 PM', '4:00 PM'];

const included = [
'A 30-minute call with a senior lead',
'Honest feedback on your idea or roadmap',
'Clear next steps — no obligation'];


export default function Book() {
  const router = useRouter();
  const [day, setDay] = useState(days[2]);
  const [time, setTime] = useState(times[1]);

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Book a consultation' }]}
        eyebrow="Free consultation"
        title={<>Book 30 minutes<br />with a senior lead.</>}
        subtitle="No sales script. Just a focused conversation about where you want to go and how to get there." />
      

      <Section className="pt-16">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="gradient-border rounded-3xl p-8">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-accent-soft">
                <CalendarIcon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold text-ink">Strategy consultation</h3>
              <p className="mt-2 flex items-center gap-2 text-sm text-muted"><ClockIcon className="h-4 w-4" /> 30 minutes · Video call</p>
              <ul className="mt-6 space-y-3">
                {included.map((item) =>
                <li key={item} className="flex gap-3 text-sm text-muted">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" />
                    {item}
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <form
                onSubmit={(e) => {e.preventDefault();router.push('/thank-you');}}
                className="rounded-3xl border border-border bg-card p-8">
                
                <div>
                  <p className="mb-3 text-sm font-medium text-ink">Pick a day</p>
                  <div className="grid grid-cols-5 gap-2">
                    {days.map((d) =>
                    <button
                      type="button"
                      key={d}
                      onClick={() => setDay(d)}
                      className={cn(
                        'rounded-2xl border px-2 py-3 text-sm font-medium transition-colors',
                        day === d ? 'border-accent bg-accent/15 text-ink' : 'border-border bg-surface text-muted hover:text-ink'
                      )}>
                      
                        {d}
                      </button>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <p className="mb-3 text-sm font-medium text-ink">Pick a time</p>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {times.map((t) =>
                    <button
                      type="button"
                      key={t}
                      onClick={() => setTime(t)}
                      className={cn(
                        'rounded-2xl border px-3 py-3 text-sm font-medium transition-colors',
                        time === t ? 'border-accent bg-accent/15 text-ink' : 'border-border bg-surface text-muted hover:text-ink'
                      )}>
                      
                        {t}
                      </button>
                    )}
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <input required placeholder="Full name" className="rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-accent/60 focus:outline-none" aria-label="Full name" />
                  <input required type="email" placeholder="Work email" className="rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-accent/60 focus:outline-none" aria-label="Work email" />
                </div>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <p className="text-sm text-muted">Selected: <span className="text-ink">{day} · {time}</span></p>
                  <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-bg hover:bg-white">
                    Confirm booking <ArrowUpRightIcon className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </Section>
    </>);

}