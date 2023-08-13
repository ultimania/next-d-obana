'use client';

import Image from 'next/image';
import clsx from 'clsx';
import Rating from 'react-star-rating-component';
import { useInView } from 'react-intersection-observer';

import styles from './ContentContainer.module.scss';

type ContentContainerProps = {
  title: string;
  items: ContentContainerItem[];
  fadeIndex: number;
};

export type ContentContainerItem = {
  id: string;
  iconUrl: string;
  lank?: number;
  subtitle?: string;
  description?: string;
};

export const ContentContainer = (props: ContentContainerProps) => {
  const { fadeIndex, title, items } = props;
  const iconImageSize = 80;
  const { ref, inView } = useInView({
    rootMargin: '-200px',
    triggerOnce: true,
  });

  return (
    <div
      className={clsx(
        'flex',
        'flex-col',
        'text-right',
        'mt-8',
        'mb-28',
        styles['fade-in'],
        styles[`index-${fadeIndex % 2}`],
        inView && styles.visible,
      )}
      ref={ref}
    >
      <h1 className={clsx('mb-12', 'text-center')}>{title}</h1>

      <div className={clsx('grid', 'grid-cols-2', 'gap-16')}>
        {items.map((item) => (
          <div
            key={item.id}
            className={clsx('relative', 'w-full', 'flex', 'flex-col')}
          >
            <div
              className={clsx(
                'flex',
                'flex-row',
                'justify-left',
                'items-center',
                'overflow-x-hidden',
              )}
            >
              <Image
                src={item.iconUrl}
                alt={item.id}
                width={iconImageSize}
                height={iconImageSize}
                className={clsx('mx-8')}
              />
              <div
                className={clsx('flex', 'flex-col', 'h-full', 'justify-around')}
              >
                <span className={clsx('text-left')}>{item.id}</span>
                <span className={clsx('text-left')}>
                  {item.subtitle && (
                    <div className={clsx('font-bold')}>{item.subtitle}</div>
                  )}
                  {item.lank && (
                    <Rating
                      value={item.lank}
                      emptyStarColor="#ccc"
                      name="skill_lank"
                    />
                  )}
                </span>
              </div>
            </div>
            <div
              className={clsx(
                styles.description,
                'w-full',
                'mx-8',
                'mt-4',
                'text-left',
              )}
            >
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
