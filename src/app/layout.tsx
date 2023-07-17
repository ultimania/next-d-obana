import './globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ProvidersWrapper from './ProviderWrapper';

import Navigation from './Navigation';
import ButtonArea from './ButtonArea';
import LogoArea from './LogoArea';

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
          <Navigation className="w-1/6" />
          <LogoArea className="w-1/6" />
          <div className="w-3/6 text-center">{children}</div>
          <ButtonArea className="w-1/6" />
        </ProvidersWrapper>
      </body>
    </html>
  );
}
