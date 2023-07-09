'use client';

import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';

import { useProfile } from './hooks/useProfile';

export default function ProvidersWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const profile = useProfile();

  return (
    <SessionProvider>
      <NextUIProvider>
        <div className="w-full sticky top-0 z-10">{profile.getProfile}</div>
        <main className="flex flex-row z-0">{children}</main>
      </NextUIProvider>
    </SessionProvider>
  );
}
