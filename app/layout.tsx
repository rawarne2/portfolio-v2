import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './styles/globals.css';
import rawData from '../public/data.json';

const inter = Inter({ subsets: ['latin'] });

// Get the name from data.json
const portfolioName = rawData.name || 'Firstname Lastname';

export const metadata: Metadata = {
  title: portfolioName,
  description: `${portfolioName}'s Portfolio Website`,
  icons: {
    icon: '/next.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
