import { Metadata } from 'next';

import { Hero } from '@/components/animes/ui/Hero';
import { MangaContent } from './ui/MangaContent';

export const metadata: Metadata = {
  title: 'Anime',
  description:
    'Find a wide collection of manga with synopsis, genres and volumes. From classics to the most recent, enjoy the best content.',
};

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export default async function MangaPage({ searchParams }: Props) {
  const pages = (await searchParams).page;
  const page = pages ? parseInt(pages) : 1;

  return (
    <>
      <Hero />
      <div className='container m-auto pt-2 pb-12'>
        <MangaContent page={page} />
      </div>
    </>
  );
}
