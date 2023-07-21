'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';
import { RxCross1 } from 'react-icons/rx';

import useStore from '../../store';
import styles from './Navigation.module.scss';

export default function Navigation({ className }: { className: string }) {
  const navItems = [
    { id: 'ALL', href: '/all' },
    { id: 'SKILLSET', href: '/skillset' },
    { id: 'CERTIFIED', href: '/certified' },
    { id: 'HISTORY', href: '/history' },
    { id: 'BLOG', href: '/blog' },
    { id: 'GALARY', href: '/galary' },
  ];
  const toggle = useStore((state) => state.toggle);
  const isShowProfile = useStore((state) => state.isShowProfile);

  return (
    <div className={clsx(styles.navigation, className)}>
      <div className="fixed flex flex-col h-full w-1/12">
        <div className="p-4">
          <button type="submit" onClick={toggle}>
            <span className="flex flex-row items-center justify-between">
              {isShowProfile ? 'CLOSE' : 'ABOUT'}
              {isShowProfile ? (
                <RxCross1 className="mx-2" />
              ) : (
                <IoIosArrowDown className="mx-2" />
              )}
            </span>
          </button>
        </div>
        <div className="fixed bottom-0 p-4">
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
