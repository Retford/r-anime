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
    <div>
      <div className='grid grid-cols-12 grid-rows-7 gap-12 w-full'>
        {isLoading && <CardSkeleton />}
        <div className='flex items-center justify-center col-span-3 row-span-5 col-start-2 row-start-2 relative'>
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
            className='h-full object-cover'
          />
        </div>
        <div className='col-span-7 row-span-5 col-start-5 row-start-2 flex flex-col gap-8 justify-center text-pretty'>
          <div className={`${titleFont.className} text-6xl flex items-center`}>
            {title}
          </div>

          <div className='flex gap-2'>
            <Badge variant='personality'>{type}</Badge>
            {episodes && (
              <Badge variant='personality'>Eps&#32;{episodes}</Badge>
            )}
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
          <div className='flex items-center justify-center'>{synopsis}</div>

          <div className='flex gap-2'>
            {genres.map((genre) => (
              <Badge variant='genres' key={genre.mal_id}>
                {genre.name}
              </Badge>
            ))}
            <Badge variant='genres'>{status}</Badge>
          </div>
          {season && (
            <Badge
              className={clsx({
                fall: season === 'fall',
                spring: season === 'spring',
                summer: season === 'summer',
                winter: season === 'winter',
              })}
            >
              {season}
            </Badge>
          )}
          <div>
            {trailer && <TrailerModal title={title} trailer={trailer} />}
          </div>
        </div>
      </div>
    </div>
  );
};
