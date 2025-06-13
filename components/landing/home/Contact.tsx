'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import SectionTitle from '../SectionTitle';

const ContactUsSection = () => {
  return (
    <div id="contact" className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <SectionTitle
          title="CONTACT US"
          subtitle="  Whether you have questions, need a quote, or just want to connect, we’d love to hear from you."
        />
        

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
            <CardContent className="p-8">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                  <Input type="text" placeholder="Your Name" />
                </div>

                {/* Email */}
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <Input type="email" placeholder="you@example.com" />
                </div>

                {/* Subject (full width) */}
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                  <Input type="text" placeholder="Subject of your message" />
                </div>

                {/* Message (full width) */}
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <Textarea rows={5} placeholder="Write your message here..." />
                </div>

                {/* Button (full width) */}
                <div className="col-span-1 md:col-span-2 text-center mt-4">
                  <Button type="submit" className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700">
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
