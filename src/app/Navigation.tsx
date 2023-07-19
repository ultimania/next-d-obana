'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';

import useStore from '../../store';
import styles from './Navigation.module.scss';

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
    <div className={clsx(styles.navigation, className)}>
      <div className="fixed flex flex-col justify-between h-full w-1/12">
        <div className="p-4">
          <button type="submit" onClick={toggle}>
            <span className="flex flex-row items-center justify-between">
              ABOUT
              <IoIosArrowDown className="mx-2" />
            </span>
          </button>
        </div>
        <div className="p-4">
          {navItems.map((item) => (
            <div key={item.id} className="py-2">
              <Link href={item.href} className="text-inherit">
                {item.id}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
