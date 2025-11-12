'use client';

import {
  Hero,
  About,
  Impact,
  HowItWorks,
  Team,
  Vision,
  DownloadSection,
} from '../../modules';
import { Navbar, Footer } from '../../shared/components';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Impact />
        <HowItWorks />
        <Team />
        <Vision />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}