import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Cursor } from '../components/shared/Cursor';
import { PageTransition } from '../components/layout/PageTransition';
import { SITE } from '../constants/site';

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.subline
};

export default function RootLayout({
  children
}: Readonly<{children: React.ReactNode;}>) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.ahamicsolutions.com/#organization",
      "name": "Ahamic Solutions",
      "url": "https://www.ahamicsolutions.com/",
      "logo": "https://www.ahamicsolutions.com/icon.svg",
      "description": SITE.subline,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dhaka",
        "addressCountry": "BD"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+8801575890667",
        "contactType": "customer service",
        "email": "ahamicsolutions@gmail.com"
      },
      "sameAs": [
        "https://www.facebook.com/ahamicsolutions",
        "https://www.linkedin.com/company/ahamicsolutions/"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://www.ahamicsolutions.com/#website",
      "url": "https://www.ahamicsolutions.com/",
      "name": "Ahamic Solutions",
      "description": SITE.subline,
      "publisher": {
        "@id": "https://www.ahamicsolutions.com/#organization"
      }
    }
  ];

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="relative min-h-screen w-full bg-bg text-ink">
        <Cursor />
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
