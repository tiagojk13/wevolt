import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import PortfolioSection from '@/components/sections/portfolio';
import ProcessSection from '@/components/sections/process';
import ValuePropositionSection from '@/components/sections/value-proposition';
import SocialProofSection from '@/components/sections/social-proof';
import CTASection from '@/components/sections/cta';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ProcessSection />
      <ValuePropositionSection />
      <SocialProofSection />
      <CTASection />
      <Footer />
    </main>
  );
}