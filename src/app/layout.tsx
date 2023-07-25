import './globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ProvidersWrapper from './providers/ProviderWrapper';

import Navigation from './layouts/Navigation';
import ButtonArea from './layouts/ButtonArea';
import LogoArea from './layouts/LogoArea';

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
          <div className="w-9/12">
            <LogoArea className="w-1/3 relative z-10" />
            <div className="w-3/3 text-center">{children}</div>
          </div>
          <ButtonArea className="w-1/12" />
        </ProvidersWrapper>
      </body>
    </html>
  );
}
