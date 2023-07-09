'use client';

import { Image } from '@nextui-org/react';
import { ContentCategory } from '../../../types';
import { Line } from '../Line';

import styles from './Content.module.css';

export const Content = () => (
  <div className="flex flex-col text-right mt-20">
    <Line />
    <div className={styles.title}>Ordinary Dayes Calendar 2020</div>
    <div className={styles.category}>{ContentCategory.other}</div>
    <div className={styles.date}>2020.01.01</div>
    <Image src="/content01.jpg" alt="content01" width="320" height="240" />
  </div>
);
