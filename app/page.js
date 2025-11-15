import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import Workflow from '../components/Workflow';
import CampaignBuilder from '../components/CampaignBuilder';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Page() {
  return (
    <>
      <main>
        <Hero />
        <FeatureGrid />
        <Workflow />
        <CampaignBuilder />
        <Pricing />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
