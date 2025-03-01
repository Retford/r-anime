'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Data } from '@/interfaces/comic.interface';
import { ChevronRight, Heart, Star } from 'lucide-react';
import Link from 'next/link';

interface Props {
  comic: Data;
  tag: string;
}

export const CardGridItem = ({ comic, tag }: Props) => {
  return (
    <Card
      className='relative overflow-hidden group bg-cover bg-center aspect-[11/16] h-80'
      style={{ backgroundImage: `url(${comic.images.jpg.image_url})` }}
    >
      <Badge variant='personality'>
        Eps&#32;{comic.episodes !== null ? comic.episodes : 'En emisión'}
      </Badge>

      <Link href={`/${tag}/${comic.mal_id}`}>
        <div className='absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/95 to-transparent' />
        <div className='absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/95 to-transparent' />
        <div className='absolute inset-x-0 bottom-0 p-4'>
          <h3 className='text-lg font-semibold text-white text-center'>
            {comic.title}
          </h3>
        </div>
        <div className='absolute inset-0 p-4 flex flex-col items-center bg-gradient-to-br from-red-500 to-transparent backdrop-blur-md text-white transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-1/4'>
          <h4>{comic.title}</h4>
          <div className='flex flex-wrap w-full'>
            {comic.rating && (
              <Badge>{comic.rating.split(' ', 1).join('')}</Badge>
            )}
            <Badge>{comic.type}</Badge>
            <Badge>{comic.episodes}</Badge>
            <Badge>
              <Star /> {comic.score}
            </Badge>
            <Badge>
              <Heart /> {comic.favorites}
            </Badge>
          </div>
          <p className='line-clamp-3'>{comic.synopsis}</p>
          <Button variant='outline' size='icon' className='px-8 mt-2'>
            <ChevronRight />
          </Button>
        </div>
      </Link>
    </Card>
  );
};
