'use client';

import Link from 'next/link';

export default function Navigation({ className }: { className: string }) {
  const navItems = [
    { id: 'ABOUT', href: '/about' },
    { id: 'ALL', href: '/all' },
    { id: 'WEB', href: '/web' },
    { id: 'IDENTITY', href: '/identity' },
    { id: 'DM / CARD', href: '/dm-card' },
    { id: 'EDITORIAL', href: '/editorial' },
    { id: 'OTHER', href: 'other' },
  ];
  return (
    <div className={`${className} p-2`}>
      <div className="fixed">
        {navItems.map((item) => (
          <div key={item.id}>
            <Link href={item.href}>{item.id}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
