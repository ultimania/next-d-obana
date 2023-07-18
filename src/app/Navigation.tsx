'use client';

import Link from 'next/link';
import useStore from '../../store';

export default function Navigation({ className }: { className: string }) {
  const navItems = [
    { id: 'ALL', href: '/all' },
    { id: 'WEB', href: '/web' },
    { id: 'IDENTITY', href: '/identity' },
    { id: 'DM / CARD', href: '/dm-card' },
    { id: 'EDITORIAL', href: '/editorial' },
    { id: 'OTHER', href: 'other' },
  ];
  const toggle = useStore((state) => state.toggle);
  return (
    <div className={`${className}`}>
      <div className="fixed flex flex-col">
        <div className="top-0 p-4">
          <button type="submit" onClick={toggle}>
            ABOUT
          </button>
        </div>
        <div className="fixed bottom-0 p-4">
          {navItems.map((item) => (
            <div key={item.id} className="py-2">
              <Link href={item.href}>{item.id}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
