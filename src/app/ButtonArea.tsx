'use client';

import {
  LiaInstagram,
  LiaTwitter,
  LiaGithub,
  LiaYoutube,
  LiaLinkedin,
} from 'react-icons/lia';

import { useRouter } from 'next/navigation';

export default function Navigation({ className }: { className: string }) {
  const router = useRouter();
  const buttonItems = [
    { id: 'instagram', icon: LiaInstagram, href: 'https://www.instagram.com' },
    { id: 'twitter', icon: LiaTwitter, href: 'https://www.instagram.com' },
    { id: 'github', icon: LiaGithub, href: 'https://www.instagram.com' },
    { id: 'youtube', icon: LiaYoutube, href: 'https://www.instagram.com' },
    { id: 'linkedin', icon: LiaLinkedin, href: 'https://www.instagram.com' },
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
