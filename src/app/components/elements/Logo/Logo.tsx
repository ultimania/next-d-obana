import Image from 'next/image';
import styles from './Logo.module.css';

export const Logo = () => (
  <div className="fixed flex flex-col mt-20">
    <Image src="/logo.svg" alt="logo.svg" width="64" height="48" />
    <h1 className={styles.name}>Takumi Fukaya</h1>
    <div className={styles.url}>https://takumi-fukaya.com</div>
    <div className={styles.copyright}>copyright©️TAKUMI FUKAYA</div>
  </div>
);
