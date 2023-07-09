'use client';

import { Link, Navbar } from '@nextui-org/react';
import styles from './navigation.module.css';

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
    <div className={`${styles.navigation} ${className}`}>
      <div className="fixed">
        <Navbar variant="sticky">
          <Navbar.Brand>
            <Navbar.Toggle
              aria-label="toggle navigation"
              showIn="sm"
              style={{ paddingRight: 12 }}
            />
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
