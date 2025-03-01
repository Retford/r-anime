import { CardGrid } from '@/components/cards/card-grid/CardGrid';
import { PaginationWithLinks } from '@/components/ui/pagination-with-links/pagination-with-links';
import { GetDataAnimes } from '@/fetch/FetchData';

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export default async function AnimePage({ searchParams }: Props) {
  const pages = (await searchParams).page;
  const page = pages ? parseInt(pages) : 1;
  const { data, pagination } = await GetDataAnimes(page);
  console.log(data);

  return (
    <main className='container m-auto'>
      <CardGrid data={data} tag='anime' />
      <PaginationWithLinks
        page={pagination.current_page}
        pageSize={pagination.items.per_page}
        totalCount={pagination.items.total}
      />
    </main>
  );
}
