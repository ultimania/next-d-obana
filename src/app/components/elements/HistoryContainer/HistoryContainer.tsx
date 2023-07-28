import clsx from 'clsx';
import { ImageIcon, ImageIconType } from '../ImageIcon';

export type HistoryContainerItem = {
  startDate: string;
  endDate: string;
  title: string;
  description: string;
  positions: string[];
  members: number;
  skills: ImageIconType[];
};

type HistoryContainerProps = {
  item: HistoryContainerItem;
  index: number;
};

export const HistoryContainer = (props: HistoryContainerProps) => {
  const { item, index } = props;

  return (
    <div className={clsx(index, 'flex', 'flex-col', 'mt-8', 'mb-28')}>
      <div
        className={clsx('flex', 'flex-row', 'items-center', 'justify-around')}
      >
        <div
          className={clsx(
            'flex',
            'flex-col',
            'justify-between',
            'relative',
            'h-16',
          )}
        >
          <div>{item.startDate}</div>
          <div> ~ </div>
          <div>{item.endDate}</div>
        </div>
        <div className={clsx('flex', 'flex-row')}>
          {item.skills.map((skill) => (
            <ImageIcon id={skill} key={skill} size={40} />
          ))}
        </div>
        <div className={clsx('flex', 'flex-row')}>
          {item.positions.map((position) => (
            <span key={position} className={clsx('mx-2')}>
              {position}
            </span>
          ))}
        </div>
      </div>
      <div className={clsx('text-left', 'mt-4')}>
        <h3>{item.title}</h3>
        <div>{item.description}</div>
      </div>
    </div>
  );
};
