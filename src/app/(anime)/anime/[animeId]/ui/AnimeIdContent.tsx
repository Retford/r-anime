'use client';

import { TrailerModal } from '@/components/animes/anime-id/modal/TrailerModal';
import { CardSkeleton } from '@/components/comics/skeleton/CardSkeleton';
import { Badge } from '@/components/ui/badge';
import { titleFont } from '@/config/font';

import { useAnime } from '@/hooks/useAnime';

import Image from 'next/image';

interface Props {
  animeId: number;
}

export const AnimeIdContent = ({ animeId }: Props) => {
  const { isLoading, data } = useAnime(animeId);

  if (!data) return <p>No data available</p>;

  const { data: anime } = data;

  console.log(anime);

  return (
    <div>
      <div className='grid grid-cols-12 grid-rows-7 gap-12 w-full'>
        {isLoading && <CardSkeleton />}
        <div className='flex items-center justify-center col-span-3 row-span-5 col-start-2 row-start-2'>
          <Image
            src={anime.images.webp.large_image_url}
            alt={anime.title}
            width={1500}
            height={1100}
            className='h-full object-contain'
          />
        </div>
        <div className='col-span-7 row-span-5 col-start-5 row-start-2 flex flex-col gap-4 justify-center'>
          <div className={`${titleFont.className} text-3xl flex items-center`}>
            {anime.title}
          </div>
          <div className='flex items-center justify-center'>
            {anime.synopsis}
          </div>

          <div className=''>
            {anime.genres.map((genre) => (
              <Badge key={genre.mal_id}>{genre.name}</Badge>
            ))}
          </div>
          <div className='flex gap-2'>
            <span>{anime.type}</span>
            <span>{anime.episodes}</span>
            <div className=''>{anime.duration}</div>
            <div>{anime.rank}</div>
            <div>{anime.favorites}</div>
            <div>{anime.score}</div>
          </div>
          <div className='flex gap-2'>
            <div>{anime.season}</div>
            <div>{anime.status}</div>
            <div>{anime.rating}</div>
          </div>
          <div>
            <TrailerModal {...anime} />
          </div>
        </div>
      </div>
    </div>
  );
};
