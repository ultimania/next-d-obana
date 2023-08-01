import clsx from 'clsx';
import { ImageIcon, ImageIconType } from '../../elements/ImageIcon';
import { Button } from '../../elements/Button';

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
    <div className={clsx(index, 'flex', 'flex-col', 'mt-8', 'mb-28', 'w-full')}>
      <div
        className={clsx('flex', 'flex-row', 'items-center', 'justify-between')}
      >
        <div
          className={clsx('flex', 'flex-row', 'justify-between', 'relative')}
        >
          <span>{item.startDate}</span>
          <span className={clsx('mx-4')}> ~ </span>
          <span>{item.endDate}</span>
        </div>
      </div>
      <div className={clsx('text-left', 'mt-4')}>
        <h3>{item.title}</h3>
        <div>{item.description}</div>
      </div>
      <div className={clsx('flex', 'flex-row', 'relative', 'my-4')}>
        {item.positions.map((position) => (
          <span key={position} className={clsx('mr-4')}>
            <Button color="blue" outline={position !== 'エンジニア'}>
              {position}
            </Button>
          </span>
        ))}
        <Button>{`${item.members}名体制`}</Button>
      </div>
      <div className={clsx('flex-1')}>
        <div
          className={clsx(
            'grid',
            'grid-cols-auto-fit',
            'gap-4',
            'auto-rows-min',
            'justify-content: center',
          )}
        >
          {item.skills.map((skill) => (
            <ImageIcon id={skill} key={skill} size={40} />
          ))}
        </div>
      </div>
    </div>
  );
};
