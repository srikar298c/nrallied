
import { MachinerySection } from '@/components/landing/machinery-section';
import { ProductsSection } from '@/components/landing/products-section';
import { QualitySection } from '@/components/landing/quality-section';
import { BrandTrustSection } from '@/components/landing/brand-trust-section';
import HomeHero from '@/components/landing/home/HomeHero';
import AboutSection from '@/components/landing/home/AboutSection';


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
      <section id="about"><AboutSection /></section>
      
      <MachinerySection />
      <ProductsSection />
      <QualitySection />
      <BrandTrustSection />
      
    </main>
  );
}