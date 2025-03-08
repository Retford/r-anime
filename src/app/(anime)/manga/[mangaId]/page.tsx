import { getMangaById } from '@/services/manga';
import { Metadata } from 'next';

import { MangaIdContent } from './ui/MangaIdContent';

interface Props {
  params: Promise<{ mangaId: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { mangaId } = await params;

  const { data } = await getMangaById(+mangaId);

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

  return <MangaIdContent mangaId={+mangaId} />;
}
