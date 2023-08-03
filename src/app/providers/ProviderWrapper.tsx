'use client';

import clsx from 'clsx';

import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';
import useStore from '../../../store';
import Profile from '../layouts/Profile';
import FontProvider from './FontProvider';

export default function ProvidersWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isShowProfile } = useStore();

  return (
    <SessionProvider>
      <NextUIProvider>
        <FontProvider>
          <div
            className={clsx(
              isShowProfile && 'show',
              'about',
              'w-full',
              'sticky',
              'relative',
              'top-0',
              'z-10',
            )}
          >
            <Profile />
          </div>
          <main className="flex flex-row z-0">{children}</main>
        </FontProvider>
      </NextUIProvider>
    </SessionProvider>
  );
}
