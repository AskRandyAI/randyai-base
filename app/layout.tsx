import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { OnchainProviders } from '@/components/OnchainProviders';
import { Navigation } from '@/components/Navigation';
import '@coinbase/onchainkit/styles.css';

const inter = Inter({ subsets: ['latin'] });

// Frame metadata for Base mini app
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'RandyAI - Water & Wastewater Training on Base',
  description: 'AI-powered blockchain training for water and wastewater operators. Chat with Randy the Raccoon.',
  manifest: '/manifest.json',
  openGraph: {
    title: 'RandyAI - Chat with Randy the Raccoon',
    description: 'Your AI study buddy for water & wastewater operators',
    images: [`${baseUrl}/og-image.png`],
  },
  // Frame metadata (makes it work as a Base mini app/Frame)
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': `${baseUrl}/og-image.png`,
    'fc:frame:button:1': 'Chat with Randy 🦝',
    'fc:frame:button:1:action': 'link',
    'fc:frame:button:1:target': `${baseUrl}/chat`,
  }
};

export const viewport: Viewport = {
  themeColor: '#0052FF',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <OnchainProviders>
          <Navigation />
          <main className="min-h-screen bg-gray-50">{children}</main>
        </OnchainProviders>
      </body>
    </html>
  );
}
