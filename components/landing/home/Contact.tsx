'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import SectionTitle from '../SectionTitle';
//import { appendToGoogleSheets } from '@/lib/google-sheets';
import toast from 'react-hot-toast';

const inquiryTypes = [
  'Product Inquiry',
  'Partnership Opportunity',
  'Technical Support',
  'General Question',
  'Custom Solution',
  'Other',
];

export default function ContactUsSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   try {
  //     await appendToGoogleSheets(formData);
  //     toast.success("Thank you for reaching out. We'll be in touch soon!");
  //     setFormData({
  //       company: '',
  //       name: '',
  //       email: '',
  //       phone: '',
  //       inquiryType: '',
  //       message: '',
  //     });
  //   } catch (error) {
  //     console.error('Contact form submission error:', error);
  //     toast.error('Something went wrong. Please try again later.');
  //   }
  // };
  //const scriptURL = 'https://script.google.com/macros/s/AKfycbw3mNXSZUGhpRs4TJdCEZXQLXHekPQf6O1n0xeBdXyIHFhPc9XKGZbhT0xVZ6ZMnDPD/exec'; // your Apps Script URL
  //https://script.google.com/macros/s/AKfycbwCrdj_SZ1AIEMO6KUvcxId2Z4Ffyn3IsrndUcy3MENs9yQVhg339qLvkBPUqdIWHO1/exec
const scriptURL= "https://script.google.com/macros/s/AKfycbzmTMSTA2288M3LZy6fcRl13IMhIGd4hsBNxkSrCWPKAI6hDHtaa7O1RgtVDX3zuJ3b/exec";

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const formDataToSend = new FormData();
  formDataToSend.append('name', formData.name);
  formDataToSend.append('company', formData.company);
  formDataToSend.append('email', formData.email);
  formDataToSend.append('phone', formData.phone);
  formDataToSend.append('inquiryType', formData.inquiryType);
  formDataToSend.append('message', formData.message);

  
    fetch(scriptURL, {
      method: 'POST',
      body: formDataToSend,
    })

    .then(()=>{
      toast.success("Thank you for reaching out. We'll be in touch soon!");
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: '',
      })
    })
    .catch ((error) =>{
    console.error('Contact form submission error:', error);
    toast.error('Something went wrong. Please try again later.');
  });
};
  return (
    <section id="contact" className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="CONTACT "
          highlight="Us"
          subtitle="Whether you have questions, need a quote, or just want to connect, we'd love to hear from you."
        />

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-center mt-8">
          {/* Image */}
          <div className="lg:w-1/2 w-full relative h-[560px] max-w-[456px] mx-auto">
            <Image
              src="/images/cta-bottom-image.png"
              alt="Contact Us"
              fill
              className="object-cover rounded-2xl shadow-xl"
              priority
            />
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2 w-full">
            <Card className="shadow-xl border-0 bg-white/70 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      required
                    />
                  </div>


                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your Phone Number"
                      required
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div className="md:col-span-2">
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-slate-700 mb-1">
                      Inquiry Type
                    </label>
                    <Input
                      id="inquiryType"
                      name="inquiryType"
                      type="text"
                      list="inquiry-types"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      placeholder="Select Inquiry Type"
                      required
                    />
                    <datalist id="inquiry-types">
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type} />
                      ))}
                    </datalist>
                  </div>

                  {/* Message */}
                  <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Write your message here..."
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="md:col-span-2 text-center mt-4">
                    <Button
                      type="submit"
                      className="px-8 py-3 text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 rounded-xl shadow-lg transform transition-all hover:scale-105"
                    >
                      Let&apos;s Build Together
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
