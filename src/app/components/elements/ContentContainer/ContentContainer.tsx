import Image from 'next/image';

// import styles from './Content.module.css';

type ContentContainerProps = {
  title: string;
  items: ContentContainerItem[];
};

export type ContentContainerItem = {
  id: string;
  iconUrl: string;
};

export const ContentContainer = (props: ContentContainerProps) => {
  const { title, items } = props;

  return (
    <div className="flex flex-col text-right mt-8 mb-28">
      <h1 className="mb-12 text-center">{title}</h1>

      <div className="grid grid-cols-4 gap-16">
        {items.map((item) => (
          <div key={item.id} className="relative w-full h-24">
            <Image src={item.iconUrl} alt={item.id} fill />
          </div>
        ))}
      </div>
    </div>
  );
};
