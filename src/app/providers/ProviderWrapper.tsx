'use client';

import clsx from 'clsx';

import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';
import useStore from '../../../store';
import Profile from '../components/Profile';

export default function ProvidersWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isShowProfile } = useStore();

  return (
    <SessionProvider>
      <NextUIProvider>
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
      </NextUIProvider>
    </SessionProvider>
  );
}
