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
import { useManga } from '@/hooks/useManga';

import Image from 'next/image';

interface Props {
  mangaId: number;
}

export const MangaIdContent = ({ mangaId }: Props) => {
  const { isLoading, data } = useManga(mangaId);

  if (isLoading) return <CardSkeleton />;

  if (!data) return <p>No data available</p>;

  const { data: manga } = data;

  return (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>{manga.title}</CardTitle>
        <CardDescription className='line-clamp-5'>
          {manga.synopsis}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={manga.images.webp.image_url}
          width={250}
          height={250}
          alt={manga.title}
        />
      </CardContent>
      <CardFooter className='flex justify-between'>
        <span>{manga.episodes}</span>
        <span>{manga.status}</span>
        <p>{manga.synopsis}</p>
      </CardFooter>
    </Card>
  );
};
