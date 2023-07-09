'use client';

import { createTheme, NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import { useProfile } from './hooks/useProfile';

const lightTheme = createTheme({
  type: 'light',
});

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      gradient:
        'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%',
    },
  },
});

export default function ProvidersWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const profile = useProfile();

  return (
    <SessionProvider>
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          {profile.getProfile}
          <main className="flex">{children}</main>
        </NextUIProvider>
      </NextThemesProvider>
    </SessionProvider>
  );
}
