import clsx from 'clsx';

export type HistoryContainerItem = {
  startDate: string;
  endDate: string;
  title: string;
  description: string;
  positions: string[];
  members: number;
  skills: string[];
};

type HistoryContainerProps = {
  item: HistoryContainerItem;
  index: number;
};

export const HistoryContainer = (props: HistoryContainerProps) => {
  const { item, index } = props;

  return (
    <div className={clsx(index)}>
      <div>{item.startDate}</div>
      <div>{item.endDate}</div>
    </div>
  );
};
