'use client';

import {
  LiaInstagram,
  LiaTwitter,
  LiaGithub,
  LiaYoutube,
  LiaLinkedin,
} from 'react-icons/lia';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import clsx from 'clsx';

import styles from './ButtonArea.module.scss';

export default function Navigation({ className }: { className: string }) {
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const buttonItems = [
    { id: 'instagram', icon: LiaInstagram, href: 'https://www.instagram.com' },
    { id: 'twitter', icon: LiaTwitter, href: 'https://www.instagram.com' },
    { id: 'github', icon: LiaGithub, href: 'https://www.instagram.com' },
    { id: 'youtube', icon: LiaYoutube, href: 'https://www.instagram.com' },
    { id: 'linkedin', icon: LiaLinkedin, href: 'https://www.instagram.com' },
  ];

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`${className}`}>
      <div className="fixed flex flex-col items-center h-full w-1/12">
        <div className="flex flex-col items-center pt-4 w-full">
          {buttonItems.map((item, index) => (
            <div
              key={item.id}
              className={clsx(
                'w-full',
                'flex',
                'flex-col',
                'items-center',
                'cursor-pointer',
                index === hoveredIndex && styles.hoverd,
              )}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <item.icon
                onClick={() => {
                  router.push(item.href);
                }}
                className={clsx(styles['sns-icon'], 'h-6', 'w-auto')}
              />
              <span className={clsx(styles['sns-text'])}>{item.id}</span>
            </div>
          ))}
        </div>
        <div className="fixed bottom-0 p-4 flex flex-col items-center">
          <button type="submit" className="my-4" onClick={returnTop}>
            top
          </button>
          <IoIosArrowUp className="my-4" />
          <IoIosArrowDown className="my-4" />
        </div>
      </div>
    </div>
  );
}
