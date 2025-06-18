

import { QualitySection } from '@/components/landing/quality-section';
import HomeHero from '@/components/landing/home/HomeHero';
import AboutSection from '@/components/landing/home/AboutSection';
import TimelineSection from '@/components/landing/home/TimelineSection';
import InfrastructureSection from '@/components/landing/home/InfrastructureSection';
import ContactUsSection from '@/components/landing/home/Contact';


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
      {/* <ProductsSection /> */}
      <section id='quality-control'>

      <QualitySection />
      </section>

<section id='contact'>  <ContactUsSection/>
 </section>
      
    </main>
  );
}