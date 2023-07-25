import clsx from 'clsx';

export const Spinner = ({ color = 'border-blue-500' }) => (
  <div className="my-16 flex justify-center">
    <div
      className={clsx(
        'h-10',
        'w-10',
        'animate-spin',
        'rounded-full',
        'border-4',
        color,
        'border-t-transparent',
      )}
    />
  </div>
);
