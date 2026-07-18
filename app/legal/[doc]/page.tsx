import React from 'react';
import { notFound } from 'next/navigation';
import { PageHero } from '../../../components/shared/PageHero';
import { Section } from '../../../components/shared/Section';

const DOCS: Record<string, {title: string;intro: string;sections: {h: string;p: string;}[];}> = {
  privacy: {
    title: 'Privacy Policy',
    intro: 'Your privacy matters to us. This policy explains what we collect, why, and how we protect it.',
    sections: [
    { h: 'Information we collect', p: 'We collect only what we need to serve you — contact details you provide, and basic analytics about how our site is used. We never sell your data.' },
    { h: 'How we use it', p: 'To respond to inquiries, improve our services, and communicate updates you have opted into. That is it.' },
    { h: 'Data protection', p: 'We use industry-standard security practices and encryption to keep your information safe, and limit access to those who need it.' },
    { h: 'Your rights', p: 'You can request access to, correction of, or deletion of your data at any time by contacting us.' }]

  },
  terms: {
    title: 'Terms & Conditions',
    intro: 'These terms govern your use of the Ahamic Solutions website and services.',
    sections: [
    { h: 'Use of our site', p: 'You may use our site for lawful purposes only. Content is provided for information and may change without notice.' },
    { h: 'Intellectual property', p: 'All content on this site is owned by Ahamic Solutions unless otherwise stated. Client work IP transfers per individual agreements.' },
    { h: 'Engagements', p: 'Specific project terms are governed by the individual statement of work signed for each engagement.' },
    { h: 'Liability', p: 'Our site is provided as-is. We are not liable for indirect damages arising from its use.' }]

  },
  cookies: {
    title: 'Cookie Policy',
    intro: 'This policy explains how and why we use cookies on our website.',
    sections: [
    { h: 'What cookies are', p: 'Small text files stored on your device that help websites function and understand usage.' },
    { h: 'Cookies we use', p: 'Essential cookies for site functionality and anonymous analytics cookies to help us improve. No advertising cookies.' },
    { h: 'Managing cookies', p: 'You can control or delete cookies through your browser settings at any time.' }]

  }
};

export function generateStaticParams() {
  return Object.keys(DOCS).map((doc) => ({ doc }));
}

export default async function Legal({
  params
}: {params: Promise<{doc: string;}>;}) {
  const { doc } = await params;
  const content = DOCS[doc];
  if (!content) notFound();

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Legal' }, { label: content.title }]}
        title={content.title}
        subtitle={content.intro} />
      
      <Section className="pt-16">
        <div className="mx-auto max-w-3xl space-y-10">
          <p className="text-sm text-muted">Last updated: July 2026</p>
          {content.sections.map((s) =>
          <div key={s.h}>
              <h2 className="font-display text-xl font-semibold text-ink">{s.h}</h2>
              <p className="mt-3 leading-relaxed text-muted">{s.p}</p>
            </div>
          )}
        </div>
      </Section>
    </>);

}
