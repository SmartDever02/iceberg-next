import { ReactElement } from 'react';
import { RemoveIcon } from './icons';

export default function Badge({
  index,
  children,
  removeHandler,
}: {
  removeHandler?: () => void;
  index: number;
  children: string;
}): ReactElement {
  return (
    <span
      className={`inline-block rounded-full text-black px-3 py-1 text-sm opacity-0 group-hover:opacity-100 select-none ${
        removeHandler ? `${delays[index]} bg-red-200` : 'bg-white'
      } shadow-textBadge flex items-center gap-x-1`}
    >
      {children}
      {removeHandler && (
        <button onClick={removeHandler}>
          <RemoveIcon />
        </button>
      )}
    </span>
  );
}

const delays = [
  'delay-50',
  'delay-100',
  'delay-150',
  'delay-200',
  'delay-250',
  'delay-300',
  'delay-350',
  'delay-400',
  'delay-450',
  'delay-500',
  'delay-550',
  'delay-600',
];
