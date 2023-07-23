'use client';

import Image from 'next/image';
import clsx from 'clsx';
import Rating from 'react-star-rating-component';

import styles from './Content.module.css';

type ContentContainerProps = {
  title: string;
  items: ContentContainerItem[];
};

export type ContentContainerItem = {
  id: string;
  iconUrl: string;
  lank: number;
  description: string;
};

export const ContentContainer = (props: ContentContainerProps) => {
  const { title, items } = props;
  const iconImageSize = 80;

  return (
    <div className="flex flex-col text-right mt-8 mb-28">
      <h1 className="mb-12 text-center">{title}</h1>

      <div className="grid grid-cols-2 gap-16">
        {items.map((item) => (
          <div key={item.id} className="relative w-full flex flex-col">
            <div className="flex flex-row justify-left items-center">
              <Image
                src={item.iconUrl}
                alt={item.id}
                width={iconImageSize}
                height={iconImageSize}
                className="mx-8"
              />
              <div className="flex flex-col h-full justify-around">
                <span className="text-left">{item.id}</span>
                <span className="text-left">
                  <Rating value={item.lank} emptyStarColor="#ccc" />
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
