'use client';

import Image from 'next/image';

import { TrailerModal } from '@/components/animes/anime-id/modal/TrailerModal';
import { CardSkeleton } from '@/components/comics/skeleton/CardSkeleton';
import { Badge } from '@/components/ui/badge';
import { titleFont } from '@/config/font';

import { useAnime } from '@/hooks/useAnime';
import { Heart, Star } from 'lucide-react';
import clsx from 'clsx';

import '@/components/animes/anime-id/style.css';
import { Loader } from '@/components/ui/loader/Loader';

interface Props {
  animeId: number;
}

export const AnimeIdContent = ({ animeId }: Props) => {
  const { isLoading, data } = useAnime(animeId);

  if (!data) return <Loader />;

  const { data: anime } = data;

  console.log(anime);

  const {
    rank,
    title,
    images,
    episodes,
    duration,
    favorites,
    type,
    status,
    score,
    rating,
    synopsis,
    genres,
    season,
    trailer,
  } = anime;

  return (
    <div className='p-6 flex flex-col justify-center items-center lg:justify-start lg:grid lg:grid-cols-3 lg:gap-4 2xl:grid-cols-12 2xl:grid-rows-7 2xl:gap-12 w-full'>
      {isLoading && <CardSkeleton />}
      <div className='m-3 flex items-center justify-center 2xl:col-span-3 2xl:row-span-5 2xl:col-start-2 2xl:row-start-2 relative'>
        {rank && (
          <Badge
            variant='rank'
            className='absolute -rotate-45 z-20 top-5 -left-10 px-5 w-36'
          >
            Rank: {rank}
          </Badge>
        )}

        <Image
          src={images.webp.large_image_url}
          alt={title}
          width={1500}
          height={1100}
          className='h-full object-cover rounded-lg shadow-lg'
          // max-w-full h-auto rounded-lg shadow-lg
        />
      </div>
      <div className='lg:col-span-2 lg:justify-start 2xl:col-span-7 2xl:row-span-5 2xl:col-start-5 2xl:row-start-2 flex flex-col gap-3 2xl:gap-8 justify-center text-pretty my-4 lg:my-0'>
        <div
          className={`${titleFont.className} text-lg text-center sm:text-[32px] md:text-4xl lg:text-2xl lg:justify-start lg:text-start justify-center xl:text-3xl 2xl:text-6xl flex items-center`}
        >
          {title}
        </div>

        <div className='flex gap-2 flex-wrap justify-center items-center mt-4 lg:mt-2 lg:justify-start'>
          <Badge variant='personality'>{type}</Badge>
          {episodes && <Badge variant='personality'>Eps&#32;{episodes}</Badge>}
          {duration !== 'Unknown' && (
            <Badge variant='personality'>{duration}</Badge>
          )}
          {favorites !== 0 && (
            <Badge variant='personality'>
              <Heart /> {favorites}
            </Badge>
          )}
          {score && (
            <Badge variant='personality'>
              <Star /> {score}
            </Badge>
          )}
          {rating && <Badge variant='personality'>{rating}</Badge>}
        </div>
        <div className='flex items-center justify-center text-sm my-6 sm:text-lg md:text-2xl lg:text-sm lg:my-2 xl:text-base 2xl:my-0'>
          {synopsis}
        </div>

        <div className='flex gap-2 flex-wrap justify-center items-center lg:justify-start'>
          {genres.map((genre) => (
            <Badge variant='genres' key={genre.mal_id}>
              {genre.name}
            </Badge>
          ))}
          <Badge variant='genres' className='w-full md:w-auto'>
            {status}
          </Badge>
        </div>
        <div className='flex justify-center lg:justify-start'>
          {season && (
            <Badge
              className={clsx(
                'w-full mt-4 md:w-1/2 lg:w-1/3 xl:w-auto 2xl:mt-0',
                {
                  fall: season === 'fall',
                  spring: season === 'spring',
                  summer: season === 'summer',
                  winter: season === 'winter',
                }
              )}
            >
              {season}
            </Badge>
          )}
        </div>

        <div className='flex justify-center lg:justify-start'>
          {trailer && <TrailerModal title={title} trailer={trailer} />}
        </div>
      </div>
    </div>
  );
};
