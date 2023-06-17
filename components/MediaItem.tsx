'use client';

import Image from 'next/image';

import useLoadImage from '@/hooks/useLoadImage';
import { Song } from '@/types';

interface MediaItemProps {
  onClick: (id: string) => void;
  data: Song;
}

const MediaItem: React.FC<MediaItemProps> = ({ onClick, data }) => {
  const imageURL = useLoadImage(data);

  const handleClick = () => {
    if (onClick) {
      return onClick(data.id);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="flex w-full cursor-pointer items-center gap-x-3 rounded-md p-2 hover:bg-neutral-800/50"
    >
      <div className="relative min-h-[48px] min-w-[48px] overflow-hidden rounded-md">
        <Image
          fill
          src={imageURL || '/images/liked.png'}
          alt="Media Item"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="truncate text-white">{data.title}</p>

        <p className="text-white-400 truncate text-sm">{data.author}</p>
      </div>
    </div>
  );
};

export default MediaItem;
