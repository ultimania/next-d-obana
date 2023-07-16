'use client';

import { LiaInstagram } from 'react-icons/lia';

import { useRouter } from 'next/navigation';

export default function Navigation({ className }: { className: string }) {
  const router = useRouter();
  const buttonItems = [
    { id: 'instagram', icon: LiaInstagram, href: 'https://www.instagram.com' },
    { id: 'instagram', icon: LiaInstagram, href: 'https://www.instagram.com' },
    { id: 'instagram', icon: LiaInstagram, href: 'https://www.instagram.com' },
    { id: 'instagram', icon: LiaInstagram, href: 'https://www.instagram.com' },
    { id: 'instagram', icon: LiaInstagram, href: 'https://www.instagram.com' },
  ];
  return (
    <div className={`${className}`}>
      <div className="fixed flex flex-col items-center">
        <div>button area dayo</div>
        <div className="text-center">
          {buttonItems.map((item) => (
            <item.icon
              key={item.id}
              onClick={() => {
                router.push(item.href);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
