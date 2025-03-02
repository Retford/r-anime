import { CardGrid } from '@/components/cards/card-grid/CardGrid';
import SlideShow from '@/components/comics/slide-show/SlideShow';
import { PaginationWithLinks } from '@/components/ui/pagination-with-links/pagination-with-links';
import { GetDataAnimes } from '@/fetch/FetchData';
import { GetDataRecommendationAnimes } from '@/fetch/FetchDataRecommendation';

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export default async function AnimePage({ searchParams }: Props) {
  const pages = (await searchParams).page;
  const page = pages ? parseInt(pages) : 1;
  const { data, pagination } = await GetDataAnimes(page);
  const { data: dataRecommendations } = await GetDataRecommendationAnimes();
  const recommendations = dataRecommendations.splice(0, 5);

  return (
    <>
      <main className='container m-auto pt-2 pb-12'>
        <SlideShow recommendations={recommendations} />
        <CardGrid data={data} tag='anime' />
        <PaginationWithLinks
          page={pagination.current_page}
          pageSize={pagination.items.per_page}
          totalCount={pagination.items.total}
        />
      </main>
    </>
  );
}
