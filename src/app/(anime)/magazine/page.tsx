import { MagazineGrid } from '@/components/magazines/magazine-grid/MagazineGrid';
import { PaginationWithLinks } from '@/components/ui/pagination-with-links/pagination-with-links';
import { GetDataMagazines } from '@/fetch/FetchData';
import { Metadata } from 'next';

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export const metadata: Metadata = {
  title: 'Anime',
  description:
    'Discover a collection of anime magazines with detailed information, featured issues and exclusive content about your favorite series.',
};

export default async function MagazinePage({ searchParams }: Props) {
  const pages = (await searchParams).page;
  const page = pages ? parseInt(pages) : 1;
  const { data, pagination } = await GetDataMagazines(page);

  console.log(data);
  console.log(pagination);

  return (
    <div className='container m-auto'>
      <MagazineGrid data={data} />
      <PaginationWithLinks
        page={pagination.current_page}
        pageSize={pagination.items.per_page}
        totalCount={pagination.items.total}
      />
    </div>
  );
}
