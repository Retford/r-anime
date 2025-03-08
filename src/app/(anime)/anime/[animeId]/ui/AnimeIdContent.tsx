'use client';

import { CardSkeleton } from '@/components/comics/skeleton/CardSkeleton';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useAnime } from '@/hooks/useAnime';

import Image from 'next/image';

interface Props {
  animeId: number;
}

export const AnimeIdContent = ({ animeId }: Props) => {
  const { isLoading, data } = useAnime(animeId);

  if (isLoading) return <CardSkeleton />;

  if (!data) return <p>No data available</p>;

  const { data: anime } = data;

  return (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>{anime.title}</CardTitle>
        <CardDescription className='line-clamp-5'>
          {anime.synopsis}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={anime.images.webp.image_url}
          width={250}
          height={250}
          alt={anime.title}
        />
      </CardContent>
      <CardFooter className='flex justify-between'>
        <span>{anime.episodes}</span>
        <span>{anime.status}</span>
        <p>{anime.synopsis}</p>
      </CardFooter>
    </Card>
  );
};
