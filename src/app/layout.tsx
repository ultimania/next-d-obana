import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ProvidersWrapper from './ProviderWrapper';

import Navigation from './Navigation';
import ButtonArea from './ButtonArea';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TAKUMI FUKAYA',
  description: 'Who is TAKUMI FUKAYA',
  keywords: [
    'Next.js',
    'React',
    'TypeScript',
    'Server Components',
    'NextUI',
    'NextAuth',
  ],
  authors: [
    {
      name: 'Takumi Fukaya',
      url: 'https://github.com/ultimania',
    },
  ],
  creator: 'Takumi Fukaya',
  publisher: 'Takumi Fukaya',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <ProvidersWrapper>
          <Navigation />
          {children}
          <ButtonArea />
        </ProvidersWrapper>
      </body>
    </html>
  );
}
