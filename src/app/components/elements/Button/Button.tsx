/* eslint-disable react/button-has-type */
/* eslint-disable object-curly-newline */
/* eslint-disable react/require-default-props */

import { ReactNode } from 'react';
import clsx from 'clsx';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  color?: 'blue';
  outline?: boolean;
  hover?: boolean;
  href?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
};

export const Button = (props: ButtonProps) => {
  const { onClick, children, className, href, type, color, outline, hover } =
    props;
  const defaultClasses = [
    'font-semibold',
    'py-2',
    'px-4',
    'border',
    'rounded-xl',
    type === 'button' && 'cursor-default',
  ];
  const colorClass = {
    none: [],
    blue: [
      'bg-blue-500',
      hover && 'hover:bg-transparent',
      'text-white',
      hover && 'hover:text-blue-700',
      'border-blue-700',
    ],
  };
  const colorClassOutline = {
    none: [],
    blue: [
      'bg-transparent',
      hover && 'hover:bg-blue-500',
      'text-blue-700',
      hover && 'hover:text-white',
      'border-blue-500',
    ],
  };
  const buttonClasses = clsx(
    className,
    defaultClasses,
    outline ? colorClassOutline[color ?? 'none'] : colorClass[color ?? 'none'],
  );

  if (href) {
    return (
      <a href={href}>
        <button className={buttonClasses} type={type} onClick={onClick}>
          {children}
        </button>
      </a>
    );
  }

  return (
    <button className={buttonClasses} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
