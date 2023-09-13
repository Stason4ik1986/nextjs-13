import { Poppins } from 'next/font/google';
import type { Metadata } from 'next';

import './globals.css';

import Header from 'components/Header';

const poppins = Poppins({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nest JS',
  description: 'Test project',
  keywords: 'typescript, javascript, ssr, react, next js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
