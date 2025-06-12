import { HeroSection } from '@/components/landing/hero-section';
import { StatsSection } from '@/components/landing/stats-section';
import { AboutSection } from '@/components/landing/about-section';
import { MachinerySection } from '@/components/landing/machinery-section';
import { ProductsSection } from '@/components/landing/products-section';
import { QualitySection } from '@/components/landing/quality-section';
import { BrandTrustSection } from '@/components/landing/brand-trust-section';
import HomeHero from '@/components/landing/home/HomeHero';


/**
 * NR Allied Landing Page
 * Comprehensive, responsive landing page for plastic packaging manufacturing company
 */
export default function Home() {
  return (
    <main className="scroll-smooth min-h-screen bg-gray-50">
         <section id="home">
      <HomeHero/>
      </section>
      <StatsSection />
      <AboutSection />
      <MachinerySection />
      <ProductsSection />
      <QualitySection />
      <BrandTrustSection />
      
    </main>
  );
}