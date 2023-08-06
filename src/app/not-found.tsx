import { Noto_Serif_JP } from 'next/font/google';
import clsx from 'clsx';
import Link from 'next/link';

const notojp = Noto_Serif_JP({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Custom404() {
  return (
    <div
      className={clsx('h-screen', 'relative', notojp.className, 'bg-slate-50')}
    >
      <div className={clsx('top-1/3', 'relative')}>
        <h1>Page Not Found</h1>
        <h2>- 404 -</h2>
        <Link href="/">Go Home</Link>
      </div>
    </div>
  );
}
