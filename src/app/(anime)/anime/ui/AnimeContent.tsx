'use client';

import { CardGrid } from '@/components/cards/card-grid/CardGrid';
import { CardSkeleton } from '@/components/comics/skeleton/CardSkeleton';

import { PaginationWithLinks } from '@/components/ui/pagination-with-links/pagination-with-links';
import { useAnimes } from '@/hooks/useAnimes';

interface Props {
  page: number;
}

export const AnimeContent = ({ page }: Props) => {
  const { isLoading, data } = useAnimes(page);

  if (isLoading) return <CardSkeleton />;

  if (!data) return <p>No data available</p>;

  const { data: animes, pagination } = data;

  return (
    <>
      <CardGrid data={animes} tag='anime' />
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
