import { Hero } from '@/components/animes/ui/Hero';
import { CardGrid } from '@/components/cards/card-grid/CardGrid';
import { PaginationWithLinks } from '@/components/ui/pagination-with-links/pagination-with-links';
import { GetDataMangas } from '@/fetch/FetchData';
import { Metadata } from 'next';

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export const metadata: Metadata = {
  title: 'Anime',
  description:
    'Find a wide collection of manga with synopsis, genres and volumes. From classics to the most recent, enjoy the best content.',
};

export default async function MangaPage({ searchParams }: Props) {
  const pages = (await searchParams).page;
  const page = pages ? parseInt(pages) : 1;
  const { data, pagination } = await GetDataMangas(page);

  return (
    <>
      <Hero />
      <div className='container m-auto'>
        <CardGrid data={data} tag='manga' />
        <PaginationWithLinks
          page={pagination.current_page}
          pageSize={pagination.items.per_page}
          totalCount={pagination.items.total}
        />
      </div>
    </>
  );
}
