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
  const [hoveredControlIndex, setHoveredControlIndex] = useState<number | null>(
    null,
  );

  const buttonItems = [
    {
      id: 'instagram',
      icon: LiaInstagram,
      href: 'https://www.instagram.com/yng.ultimania/',
    },
    { id: 'twitter', icon: LiaTwitter, href: 'https://twitter.com/fclout' },
    { id: 'github', icon: LiaGithub, href: 'https://github.com/ultimania' },
    {
      id: 'youtube',
      icon: LiaYoutube,
      href: 'https://www.youtube.com/channel/UCww-CdVELKU524T9Ip0ai-w',
    },
    {
      id: 'linkedin',
      icon: LiaLinkedin,
      href: 'https://www.linkedin.com/in/takumi-fukaya-529627256/',
    },
  ];

  const controlItems = [
    { id: 'up', icon: IoIosArrowUp, class: 'control-button-up' },
    { id: 'down', icon: IoIosArrowDown, class: 'control-button-down' },
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
          {controlItems.map((item, index) => (
            <item.icon
              key={item.id}
              className={clsx(
                'my-4',
                'cursor-pointer',
                index === hoveredControlIndex && styles.hoverd,
                styles[item.class],
              )}
              onMouseEnter={() => setHoveredControlIndex(index)}
              onMouseLeave={() => setHoveredControlIndex(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
