'use client';

import { formatApi } from '@/app/helpers/formatApi';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Data } from '@/interfaces/comic.interface';
import { Heart, Star } from 'lucide-react';
import Link from 'next/link';

interface Props {
  comic: Data;
  tag: string;
}

export const CardGridItem = ({ comic, tag }: Props) => {
  const rate = formatApi(comic.rating || '');
  return (
    <Link href={`/${tag}/${comic.mal_id}`}>
      <Card
        className='relative overflow-hidden group bg-cover bg-center aspect-[11/16] sm:h-72 md:h-64 lg:h-[22rem] hover:transition-all hover:duration-500 hover:shadow-[0px_0px_15px_5px_rgba(251,_44,_54,_0.48)]'
        style={{ backgroundImage: `url(${comic.images.jpg.image_url})` }}
      >
        {comic.episodes && (
          <Badge variant='personality' className='absolute top-3 left-3 z-10'>
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
              <Badge className='bg-red-600 select-none text-white'>
                Eps&#32;{comic.episodes}
              </Badge>
            )}
            {comic.score && (
              <Badge className='bg-amber-400 text-white'>
                <Star /> {comic.score}
              </Badge>
            )}
            <Badge className='text-white bg-rose-600'>
              <Heart /> {comic.favorites}
            </Badge>
          </div>
          <p className='line-clamp-7 text-sm'>{comic.synopsis}</p>
          {/* <Button
            variant='outline'
            asChild
            size='icon'
            className='flex justify-center items-center w-3/4 px-8 mt-2 bg-gray-400 border border-transparent hover:bg-gray-800 hover:duration-500 transition-colors hover:transition-colors duration-500'
          >
            <Link
              href={`/${tag}/${comic.mal_id}`}
              className='group-hover:text-white flex items-center gap-1'
            >
              Ver más
              <ChevronRight className='group-hover:text-white transition-colors duration-500' />
            </Link>
          </Button> */}
        </div>
      </Card>
    </Link>
  );
};
