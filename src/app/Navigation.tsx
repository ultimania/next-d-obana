'use client';

import Link from 'next/link';
import { Navbar } from '@nextui-org/react';
import styles from './Navigation.module.css';

export default function Navigation({ className }: { className: string }) {
  const navItems = [
    'ABOUT',
    'ALL',
    'WEB',
    'IDENTITY',
    'DM / CARD',
    'EDITORIAL',
    'OTHER',
  ];
  return (
    <div className={`${styles.navigation} ${className} p-2`}>
      <div className="fixed">
        <Navbar disableBlur containerCss={{ backgroundColor: 'transparent' }}>
          <Navbar.Brand>
            <Navbar.Toggle aria-label="toggle navigation" showIn="sm" />
          </Navbar.Brand>
          <Navbar.Content
            hideIn="sm"
            variant="underline"
            css={{ flexDirection: 'column' }}
          >
            {navItems.map((item) => (
              <Navbar.Link href="#" key={item}>
                {item}
              </Navbar.Link>
            ))}
          </Navbar.Content>
          <Navbar.Collapse>
            {navItems.map((item) => (
              <Navbar.CollapseItem key={item}>
                <Link href="/">{item}</Link>
              </Navbar.CollapseItem>
            ))}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}
