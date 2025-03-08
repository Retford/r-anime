'use client';

import { CardGrid } from '@/components/cards/card-grid/CardGrid';

import { PaginationWithLinks } from '@/components/ui/pagination-with-links/pagination-with-links';
import { NoResultsFound } from '@/components/search/no-results-found/NoResultsFound';
import { useSearch } from '@/hooks/useSearch';
import { Loader } from '@/components/ui/loader/Loader';

interface Props {
  page: number;
  query: string;
}

export const SearchContent = ({ page, query }: Props) => {
  const { data: comics } = useSearch(query, page);

  if (!comics) {
    return <Loader />;
  }

  const { data, pagination } = comics;
  return (
    <>
      {data.length === 0 ? (
        <NoResultsFound />
      ) : (
        <CardGrid data={data} tag='anime' />
      )}

      {pagination && data.length !== 0 && (
        <PaginationWithLinks
          page={pagination.current_page}
          pageSize={pagination.items.per_page}
          totalCount={pagination.items.total}
        />
      )}
    </>
  );
};
