import { CardGrid } from '@/components/cards/card-grid/CardGrid';
import { PaginationWithLinks } from '@/components/ui/pagination-with-links/pagination-with-links';
import { FetchDataTopAnime } from '@/fetch/FetchDataTopAnime';

interface Props {
  searchParams: Promise<{ type: 'anime' | 'manga'; page?: string }>;
}
export default async function TopAnimePage({ searchParams }: Props) {
  const pages = (await searchParams).page;
  const page = pages ? parseInt(pages) : 1;
  const { type } = await searchParams;

  const { data, pagination } = await FetchDataTopAnime(type, page);

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
