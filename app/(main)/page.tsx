

import { QualitySection } from '@/components/landing/home/QualitySection';
import HomeHero from '@/components/landing/home/HomeHero';
import AboutSection from '@/components/landing/home/AboutSection';
import TimelineSection from '@/components/landing/home/TimelineSection';
import InfrastructureSection from '@/components/landing/home/InfrastructureSection';
import ContactUsSection from '@/components/landing/home/Contact';
import IndustrySection from '@/components/landing/home/IndustrySection';
import ProductsSection from '@/components/landing/home/ProductsSection';


/**
 * NR Allied Landing Page
 * Comprehensive, responsive landing page for plastic packaging manufacturing company
 */
export default function Home() {
  return (
    <main className="scroll-smooth min-h-screen overflow-hidden">
         <section id="home">
      <HomeHero/>
      </section>
      <section id="about"><AboutSection /></section>
      
    <section id='our-journey'> 
      <TimelineSection/>
    </section>
    <section id='infrastructure'>
        <InfrastructureSection/>
    </section>
    <section id='industries'>
      <IndustrySection />
      </section>
      <section id = 'products'>
        <ProductsSection />
        </section>
            <section id='quality-control'>

      <QualitySection />
      </section>

<section id='contact'>  <ContactUsSection/>
 </section>
      
    </main>
  );
}