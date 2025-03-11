import { Metadata } from 'next';

import { Hero } from '@/components/animes/hero/Hero';
import { AnimeContent } from './ui/AnimeContent';

export const metadata: Metadata = {
  title: 'Anime',
  description:
    'Explore our anime collection with detailed profiles, synopsis, genres and seasons. Find your next favorite anime with ease.',
};

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export default async function AnimePage({ searchParams }: Props) {
  const params = await searchParams;
  const page = params.page ? parseInt(params.page) : 1;

  return (
    <>
      <Hero />
      <div className='container m-auto pt-2 pb-12'>
        <AnimeContent page={page} />
      </div>
    </>
  );
}
