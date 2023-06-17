import Image from 'next/image';

import getLikedSongs from '@/action/getLikedSongs';
import Header from '@/components/Header';
import LikedContent from '@/components/LikedContent';

export const revalidate = 0;

const Liked = async () => {
  const songs = await getLikedSongs();

  return (
    <div className="h-full w-full overflow-hidden overflow-y-auto rounded-lg bg-neutral-900">
      <Header>
        <div className="mt-20">
          <div className="flex flex-col items-center gap-x-5 md:flex-row">
            <div className="relatvie lg-2044 h-32 w-32 lg:h-44">
              <Image
                fill
                src="/images/liked.svg"
                alt="Playlist"
                className="object-cover"
              />
            </div>
            <div className="gap-xy-2 mt-4 flex flex-col md:mt-0">
              <p className="hidden text-sm font-semibold md:block">Playlist</p>
              <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">
                Liked Songs
              </h1>
            </div>
          </div>
        </div>
      </Header>
      <LikedContent songs={songs} />
    </div>
  );
};

export default Liked;
