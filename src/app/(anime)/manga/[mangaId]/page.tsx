import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getMangaById } from '@/services/manga';
import { Metadata } from 'next';

import Image from 'next/image';

interface Props {
  params: Promise<{ mangaId: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { mangaId } = await params;

  const { data } = await getMangaById(mangaId);

  return {
    title: data.title,
    description: data.synopsis,
    openGraph: {
      title: data.title,
      description: data.synopsis,
      images: [data.images.webp.large_image_url],
    },
  };
}

export default async function MangaById({ params }: Props) {
  const { mangaId } = await params;

  const { data } = await getMangaById(mangaId);

  console.log(data);

  return (
    <Card className='w-[350px]'>
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
        <CardDescription className='line-clamp-5'>
          {data.synopsis}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={data.images.webp.image_url}
          width={250}
          height={250}
          alt={data.title}
        />
      </CardContent>
      <CardFooter className='flex justify-between'>
        <span>{data.episodes}</span>
        <span>{data.status}</span>
        <p>{data.synopsis}</p>
      </CardFooter>
    </Card>
  );
}
