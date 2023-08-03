import clsx from 'clsx';
import { Noto_Serif_JP } from 'next/font/google';
import { ReactNode } from 'react';

const notojp = Noto_Serif_JP({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
});

export default function FontProvider(props: { children: ReactNode }) {
  const { children } = props;
  return (
    <div className={clsx(notojp.className, 'bg-slate-50')}>{children}</div>
  );
}
