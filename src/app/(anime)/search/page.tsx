import { CardGrid } from '@/components/cards/card-grid/CardGrid';
import { PaginationWithLinks } from '@/components/ui/pagination-with-links/pagination-with-links';
import { FetchSearchQuery } from '@/fetch/FetchSearchQuery';
import { Metadata } from 'next';

interface Props {
  searchParams: Promise<{ q: string; page?: string }>;
}

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const { q } = await searchParams;

  return {
    title: `Search: ${q}`,
    description:
      'Easily find your favorite anime, manga or magazine with our advanced search engine. Browse titles, genres and discover new stories instantly.',
  };
}

export default async function SearchPage({ searchParams }: Props) {
  const pages = (await searchParams).page;
  const page = pages ? parseInt(pages) : 1;
  const { q } = await searchParams;

  const { data, pagination } = await FetchSearchQuery(q, page);
  return (
    <div className='container m-auto pt-2 pb-12'>
      <CardGrid data={data} tag='anime' />
      <PaginationWithLinks
        page={pagination.current_page}
        pageSize={pagination.items.per_page}
        totalCount={pagination.items.total}
      />
    </div>
  );
}
