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
  return (
    <html lang="en">
      <body className="relative min-h-screen w-full bg-bg text-ink">
        <Cursor />
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>);

}
