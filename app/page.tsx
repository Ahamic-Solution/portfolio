import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Logos } from '../components/sections/Logos';
import { Stats } from '../components/sections/Stats';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { ServicesGrid } from '../components/sections/ServicesGrid';
import { FeaturedProjects } from '../components/sections/FeaturedProjects';
import { Technologies } from '../components/sections/Technologies';
import { Industries } from '../components/sections/Industries';
import { Process } from '../components/sections/Process';
import { Testimonials } from '../components/sections/Testimonials';
import { Awards } from '../components/sections/Awards';
import { FAQ } from '../components/sections/FAQ';
import { BlogPreview } from '../components/sections/BlogPreview';
import { CTA } from '../components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Logos />
      <Stats />
      <WhyChooseUs />
      <ServicesGrid />
      <FeaturedProjects />
      <Technologies />
      <Industries />
      <Process />
      <Testimonials />
      <Awards />
      <FAQ />
      <BlogPreview />
      <CTA />
    </>);

}
