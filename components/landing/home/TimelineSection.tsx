import React from 'react';
import SectionTitle from '../SectionTitle';
import Timeline from '../Timeline';
import { timelineItems } from '@/constants/timeline';


const TimelineSection: React.FC = () => {
  return (
    <section id="timeline" className="py-20 bg-gradient-to-r from-[#F0F4F9] to-[#95D7FA]">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Our "
          highlight='Journey'
          subtitle="From humble beginnings to a multi-division plastic packaging powerhouse"
        />
        
        <Timeline items={timelineItems} />
      </div>
    </section>
  );
};

export default TimelineSection;