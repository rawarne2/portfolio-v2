import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './styles/globals.css';
import data from '../public/data.json';

const inter = Inter({ subsets: ['latin'] });

const { name, urls } = data;
export const metadata: Metadata = {
  title: `${name}'s Portfolio`,
  description: `${name}'s Portfolio Website`,
  icons: {
    icon: urls.profilePic,
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
