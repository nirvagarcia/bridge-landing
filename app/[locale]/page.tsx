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
import { routing } from '../../i18n.routing';

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Impact />
        <Team />
        <Vision />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
