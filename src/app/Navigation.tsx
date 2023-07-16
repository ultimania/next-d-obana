'use client';

import Link from 'next/link';
import { useProfile } from './hooks/useProfile';

export default function Navigation({ className }: { className: string }) {
  const navItems = [
    { id: 'ALL', href: '/all' },
    { id: 'WEB', href: '/web' },
    { id: 'IDENTITY', href: '/identity' },
    { id: 'DM / CARD', href: '/dm-card' },
    { id: 'EDITORIAL', href: '/editorial' },
    { id: 'OTHER', href: 'other' },
  ];
  const profile = useProfile();
  return (
    <div className={`${className} p-2`}>
      <div className="fixed">
        <div>
          <Link href="/" onClick={() => profile.toggle()}>
            ABOUT
          </Link>
        </div>
        {navItems.map((item) => (
          <div key={item.id}>
            <Link href={item.href}>{item.id}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
