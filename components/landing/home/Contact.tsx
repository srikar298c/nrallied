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

const scriptURL= "https://script.google.com/macros/s/AKfycbzmTMSTA2288M3LZy6fcRl13IMhIGd4hsBNxkSrCWPKAI6hDHtaa7O1RgtVDX3zuJ3b/exec";
const [isLoading, setIsLoading] = useState(false);

// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();

//   if (isLoading) return;
//   setIsLoading(true);

//   // const formDataToSend = new FormData();
//   // formDataToSend.append('name', formData.name.trim());
//   // formDataToSend.append('company', formData.company.trim());
//   // formDataToSend.append('email', formData.email.trim());
//   // formDataToSend.append('phone', formData.phone.trim());
//   // formDataToSend.append('inquiryType', formData.inquiryType.trim());
//   // formDataToSend.append('message', formData.message.trim());
//   const trimmedData = {
//     name: formData.name.trim(),
//     company: formData.company.trim(),
//     email: formData.email.trim(),
//     phone: formData.phone.trim(),
//     inquiryType: formData.inquiryType.trim(),
//     message: formData.message.trim(),
//   };

//   // Step 2: Basic client-side validation
//   if (!trimmedData.name || !trimmedData.email || !trimmedData.message) {
//     toast.error('Name, email, and message are required.');
//     setIsLoading(false);
//     return;
//   }
// // Step 3: Convert to FormData
//   const formDataToSend = new FormData();
//   for (const key in trimmedData) {
//     formDataToSend.append(key, trimmedData[key as keyof typeof trimmedData]);
//   }

  

//   const controller = new AbortController();
//   const timeoutId = setTimeout(() => controller.abort(), 6000); // 7s timeout

//   try {
//     const response = await fetch(scriptURL, {
//       method: 'POST',
//       body: formDataToSend,
//       signal: controller.signal,
//       keepalive: true, // Allows request to finish if user navigates away

//     });

//     clearTimeout(timeoutId);

//     if (!response.ok) throw new Error('Network response was not ok');

//     toast.success("Thank you for reaching out. We'll be in touch soon!", {
//       duration: 3000,
//       icon: '🚀',
//       style: {
//         background: 'green',
//         color: '#fff',
//         fontSize: '20px',
//       },
//     });

//     setFormData({
//       name: '',
//       company: '',
//       email: '',
//       phone: '',
//       inquiryType: '',
//       message: '',
//     });
//   } catch (error: any) {
//     if (error.name === 'AbortError') {
//       toast.error('Server is taking too long. Please try again later.', {
//         duration: 5000,
//         icon: '⏱️',
//         style: { background: 'orange', color: '#fff', fontSize: '18px' },
//       });
//     } else {
//       console.error('Form submission error:', error);
//       toast.error('Something went wrong. Please try again later.', {
//         duration: 5000,
//         icon: '❌',
//         style: {
//           background: 'red',
//           color: '#fff',
//           fontSize: '20px',
//         },
//       });
//     }
//   } finally {
//     setIsLoading(false);
//   }
// };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true); // Start loading

  const formDataToSend = new FormData();
  formDataToSend.append('name', formData.name);
  formDataToSend.append('company', formData.company);
  formDataToSend.append('email', formData.email);
  formDataToSend.append('phone', formData.phone);
  formDataToSend.append('inquiryType', formData.inquiryType);
  formDataToSend.append('message', formData.message);

  try {
    await fetch(scriptURL, {
      method: 'POST',
      body: formDataToSend,
    });

    toast.success("Thank you for reaching out. We'll be in touch soon!", {
      duration: 4000,
      icon: '🚀',
      style: {
        background: 'green',
        color: '#fff',
        fontSize: '20px',
      },
    });

    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      inquiryType: '',
      message: '',
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    toast.error('Something went wrong. Please try again later.', {
      duration: 5000,
      icon: '❌',
      style: {
        background: 'red',
        color: '#fff',
        fontSize: '20px',
      },
    });
  } finally {
    setIsLoading(false); // End loading
  }
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
                       {isLoading ? (
    <div className="flex items-center justify-center gap-2">
      <svg
        className="animate-spin h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        ></path>
      </svg>
      Submitting...
    </div>
  ) : (
    "Let’s Build Together"
  )}
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
