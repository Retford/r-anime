'use client';

import Link from 'next/link';
import { useQueryClient } from '@tanstack/react-query';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { formatApi } from '@/helpers/formatApi';
import { Heart, Star } from 'lucide-react';

import type { Data } from '@/interfaces/comic.interface';
import type { ComicType } from '@/interfaces/api-types';
import { getAnimeById } from '@/services/anime';

interface Props {
  comic: Data;
  tag: ComicType;
}

export const CardGridItem = ({ comic, tag }: Props) => {
  const rate = formatApi(comic.rating || '');

  const queryClient = useQueryClient();
  const prefetchAnime = () => {
    queryClient.prefetchQuery({
      queryKey: ['anime', { animeId: comic.mal_id }],
      queryFn: () => getAnimeById(comic.mal_id),
      staleTime: 1000 * 60 * 60,
    });
  };

  return (
    <Link href={`/${tag}/${comic.mal_id}`} onMouseEnter={prefetchAnime}>
      <Card
        className='relative overflow-hidden group bg-cover bg-center aspect-[11/16] sm:h-72 md:h-64 lg:h-[22rem] hover:transition-all hover:duration-500 hover:shadow-[0px_0px_15px_5px_rgba(251,_44,_54,_0.48)]'
        style={{ backgroundImage: `url(${comic.images.jpg.image_url})` }}
      >
        {comic.episodes && (
          <Badge variant='personality' className='absolute top-3 left-3 z-[1]'>
            Eps&#32;{comic.episodes}
          </Badge>
        )}
        <div className='absolute inset-x-0 bottom-0 h-full group-hover:backdrop-blur-sm z-10' />
        <div className='absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/95 to-transparent' />
        <div className='absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/95 to-transparent' />
        <div className='absolute inset-x-0 bottom-0 p-4'>
          <h3 className='text-sm sm:text-base xl:text-lg font-semibold text-white text-center line-clamp-2 lg:line-clamp-none'>
            {comic.title}
          </h3>
        </div>
        <div className='absolute inset-0 p-4 flex flex-col items-center bg-gradient-to-br from-red-500 to-transparent text-white transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-1/4 gap-3 z-20'>
          <h4 className='line-clamp-1 text-base font-semibold'>
            {comic.title}
          </h4>
          <div className='flex flex-wrap w-full gap-2 items-center justify-center'>
            {comic.rating && (
              <Badge className='bg-green-600 text-white'>{rate}</Badge>
            )}
            {comic.type && (
              <Badge className='bg-sky-500 text-white'>{comic.type}</Badge>
            )}
            {comic.episodes && (
              <Badge className='bg-black select-none text-white'>
                Eps&#32;{comic.episodes}
              </Badge>
            )}
            {comic.score && (
              <Badge className='bg-amber-400 text-white'>
                <Star /> {comic.score}
              </Badge>
            )}
            <Badge className='text-white bg-teal-600'>
              {/* <Badge variant='outline' className='text-white border-white'> */}
              <Heart /> {comic.favorites}
            </Badge>
          </div>
          <p className='line-clamp-7 text-sm'>{comic.synopsis}</p>
        </div>
      </Card>
    </Link>
  );
};
