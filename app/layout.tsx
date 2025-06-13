import './globals.css';
import 'animate.css';
import type { Metadata } from 'next';
import Navbar from '@/components/landing/common/Navbar';
import Footer from '@/components/landing/common/Footer';

export const metadata: Metadata = {
  title: 'NR Allied - Leading Plastic Packaging Manufacturing | 17L+ Bottles Daily',
  description: 'NR Allied specializes in sustainable plastic packaging solutions with 6 specialized units producing 17L+ bottles daily. RPET & FSSAI approved manufacturing for FMCG and pharmaceutical brands.',
  keywords: 'plastic packaging, manufacturing, RPET, FSSAI approved, bottles, containers, sustainable packaging, FMCG, pharmaceuticals',
  authors: [{ name: 'NR Allied' }],
  creator: 'NR Allied',
  publisher: 'NR Allied',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nrallied.com',
    title: 'NR Allied - Leading Plastic Packaging Manufacturing',
    description: 'We mold not just plastic — but partnerships. Sustainable packaging solutions with 17L+ daily capacity.',
    siteName: 'NR Allied',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NR Allied - Plastic Packaging Manufacturing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NR Allied - Leading Plastic Packaging Manufacturing',
    description: 'We mold not just plastic — but partnerships. Sustainable packaging solutions with 17L+ daily capacity.',
    images: ['/og-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="canonical" href="https://nrallied.com" />
        <meta name="theme-color" content="#0476D9" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body>
        <Navbar />
        <main className="relative z-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
