'use client';

import {
  LiaInstagram,
  LiaTwitter,
  LiaGithub,
  LiaYoutube,
  LiaLinkedin,
} from 'react-icons/lia';
import { BiArrowToTop, BiArrowToBottom } from 'react-icons/bi';

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

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className={`${className}`}>
      <div className="fixed flex flex-col items-center h-full w-1/12">
        <div className="text-center pt-4">
          {buttonItems.map((item) => (
            <item.icon
              key={item.id}
              onClick={() => {
                router.push(item.href);
              }}
              className="my-4 cursor-pointer"
            />
          ))}
        </div>
        <div className="fixed bottom-0 p-4 flex flex-col items-center">
          <button type="submit" className="my-4" onClick={returnTop}>
            top
          </button>
          <BiArrowToTop className="my-4" />
          <BiArrowToBottom className="my-4" />
        </div>
      </div>
    </div>
  );
}
