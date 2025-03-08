import { getAnimeById } from '@/services/anime';
import { Metadata } from 'next';

import { AnimeIdContent } from './ui/AnimeIdContent';

interface Props {
  params: Promise<{ animeId: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { animeId } = await params;

  const { data } = await getAnimeById(+animeId);

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

export default async function AnimeById({ params }: Props) {
  const { animeId } = await params;

  return <AnimeIdContent animeId={+animeId} />;
}
