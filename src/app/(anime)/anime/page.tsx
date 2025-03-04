import { Hero } from '@/components/animes/ui/Hero';
import { CardGrid } from '@/components/cards/card-grid/CardGrid';
import { PaginationWithLinks } from '@/components/ui/pagination-with-links/pagination-with-links';
import { GetDataAnimes } from '@/fetch/FetchData';
import { Metadata } from 'next';

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export const metadata: Metadata = {
  title: 'Anime',
  description:
    'Explore our anime collection with detailed profiles, synopsis, genres and seasons. Find your next favorite anime with ease.',
};

export default async function AnimePage({ searchParams }: Props) {
  const pages = (await searchParams).page;
  const page = pages ? parseInt(pages) : 1;
  const { data, pagination } = await GetDataAnimes(page);

  return (
    <>
      <Hero />
      <div className='container m-auto pt-2 pb-12'>
        <CardGrid data={data} tag='anime' />
        <PaginationWithLinks
          page={pagination.current_page}
          pageSize={pagination.items.per_page}
          totalCount={pagination.items.total}
        />
      </div>
    </>
  );
}
