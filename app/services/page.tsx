



import React from 'react';
import { PageHero } from '../../components/shared/PageHero';
import { ServicesGrid } from '../../components/sections/ServicesGrid';
import { Process } from '../../components/sections/Process';
import { Technologies } from '../../components/sections/Technologies';
import { FAQ } from '../../components/sections/FAQ';
import { CTA } from '../../components/sections/CTA';

export default function Services() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
        eyebrow="Capabilities"
        title={<>Everything you need to<br />design, build, and scale.</>}
        subtitle="Eighteen disciplines, one integrated team. Whatever stage you are at, we plug in exactly where you need us." />
      
      <ServicesGrid showAll />
      <Technologies />
      <Process />
      <FAQ />
      <CTA />
    </>);

}