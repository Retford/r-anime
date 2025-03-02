import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { GetDataAnimesById } from '@/fetch/FetchDataById';

import Image from 'next/image';

interface Props {
  params: Promise<{ animeId: string }>;
}

export default async function AnimeById({ params }: Props) {
  const { animeId } = await params;

  const { data } = await GetDataAnimesById(animeId);

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
