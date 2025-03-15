'use client';

import type { ComicType } from '@/interfaces/api-types';

import { CardGrid } from '@/components/cards/card-grid/CardGrid';
import { CardSkeleton } from '@/components/comics/skeleton/CardSkeleton';

import { PaginationWithLinks } from '@/components/ui/pagination-with-links/pagination-with-links';
import { useTopComics } from '@/hooks/useTopComics';

interface Props {
  page: number;
  type: ComicType;
}

export const TopContent = ({ page, type }: Props) => {
  const { data, isLoading } = useTopComics(type, page);

  if (isLoading) {
    return <CardSkeleton />;
  }

  if (!data) {
    return <>No data available!</>;
  }

  const { data: comics, pagination } = data;

  return (
    <>
      <CardGrid data={comics} tag={type} />
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
