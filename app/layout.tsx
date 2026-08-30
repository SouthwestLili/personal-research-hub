import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import './globals.css';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Personal Research Hub · Lili Wang',
    template: '%s · Lili Wang',
  },
  description:
    'Research activities, paper notes, and academic interests of Lili Wang.',
  openGraph: {
    title: 'Personal Research Hub · Lili Wang',
    description:
      'Research activities, paper notes, and academic interests of Lili Wang.',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Personal Research Hub — Lili Wang',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal Research Hub · Lili Wang',
    description:
      'Research activities, paper notes, and academic interests of Lili Wang.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geist.variable}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
