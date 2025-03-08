'use client';

import { CardGrid } from '@/components/cards/card-grid/CardGrid';
import { CardSkeleton } from '@/components/comics/skeleton/CardSkeleton';

import { PaginationWithLinks } from '@/components/ui/pagination-with-links/pagination-with-links';
import { useMangas } from '@/hooks/useMangas';

interface Props {
  page: number;
}

export const MangaContent = ({ page }: Props) => {
  const { data, isLoading } = useMangas(page);

  if (isLoading) {
    return <CardSkeleton />;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  const { data: mangas, pagination } = data;

  return (
    <>
      <CardGrid data={mangas} tag='manga' />
      {pagination && (
        <PaginationWithLinks
          page={pagination.current_page}
          pageSize={pagination.items.per_page}
          totalCount={pagination.items.total}
        />
      )}
    </>
  );
};
