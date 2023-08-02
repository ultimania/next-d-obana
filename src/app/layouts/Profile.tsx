import clsx from 'clsx';
import Image from 'next/image';
import { RadarGraph } from '../components/charts/RadarChart';

export default function Profile() {
  const responsiveWidth = [
    'lg:w-80',
    'md:w-40',
    'sm:w-30',
    'max-sm:w-20',
    'h-60',
  ];
  const itemList = [
    {
      id: 'PROFILE',
      rows: [
        '深谷匠',
        'Fullstack Engineer',
        '札幌生まれ、札幌育ち、実家は岩手、埼玉在住',
      ],
    },
    {
      id: 'CONTACT',
      rows: ['yng.ultimania@gmail.com'],
    },
    {
      id: 'ADDRESS',
      rows: ['埼玉県川口市'],
    },
  ];

  return (
    <div
      className={clsx(
        'w-full',
        'text-center',
        'bg-slate-200',
        'py-4',
        'h-full',
      )}
    >
      <div className={clsx('flex', 'flex-row', 'justify-around')}>
        <div className={clsx(responsiveWidth)}>
          <Image
            src="/img_profile.jpg"
            width={180}
            height={180}
            alt="Picture of the author"
          />
        </div>
        <div className={clsx('flex', 'flex-col', 'flex-1')}>
          {itemList.map((item) => (
            <div
              key={item.id}
              className={clsx(
                'grid',
                'sm:grid-cols-3',
                'max-sm:grid-cols-none',
              )}
            >
              <div className={clsx('text-left', 'sm:mx-4')}>{item.id}</div>
              <div
                className={clsx(
                  'flex',
                  'flex-col',
                  'text-left',
                  'col-span-2',
                  'max-sm:mb-4',
                )}
              >
                {item.rows.map((row) => (
                  <span key={row}>{row}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={clsx(responsiveWidth)}>
          <RadarGraph />
        </div>
      </div>
    </div>
  );
}
