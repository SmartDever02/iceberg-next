'use client';

import { ReactElement } from 'react';
import Image from 'next/image';

import Badge from '@/components/badge';
import Input from './Input';

import useRemoveTagHandler from '@/app/hooks/useRemoveTagHandler';

interface PropsType extends NFT {
  editable?: boolean;
}

export default function NFTCard(props: PropsType): ReactElement {
  const tags = props.info.split(' ');
  const customTags = props.customized?.info.split(' ');
  const value = props.customized?.value || props.value;

  const { removeTagHandler } = useRemoveTagHandler(props);

  return (
    <div className='w-[400px] bg-[#151515] rounded-lg overflow-hidden shadow-lg m-5'>
      <div className='group h-[300px] overflow-hidden hover:backdrop-blur-sm relative'>
        <Image
          src={props.image}
          alt={props.name}
          width={300}
          height={300}
          draggable={false}
          fetchPriority='low'
          priority
          className='object-cover w-full h-full group-hover:scale-125 group-hover:rotate-2 transition-all duration-300'
        />
        <div className='opacity-0 group-hover:opacity-100 transition-all duration-200 backdrop-blur-sm absolute top-0 left-0 w-full h-full bg-black/50 p-4 flex flex-col justify-between'>
          <ol className='flex flex-wrap gap-x-3 gap-y-2'>
            {tags.map((word: string, index: number) => (
              <Badge index={index} key={word}>
                {word}
              </Badge>
            ))}
            {customTags?.map((word: string, index: number) => (
              <Badge
                index={index}
                key={word}
                removeHandler={
                  props.editable ? () => removeTagHandler(index) : undefined
                }
              >
                {word}
              </Badge>
            ))}
          </ol>
          {props.editable && <Input nft={props} />}
        </div>
      </div>
      <div className='p-5 pb-6 flex justify-between items-end'>
        <p className='text-xl font-semibold text-white'>{props.name}</p>
        <p className='font-semibold text-white'>
          <span className='text-2xl font-semibold'>
            {value.toLocaleString()}
          </span>
          <span className='text-gray-300'>{' ETH'}</span>
        </p>
      </div>
    </div>
  );
}
