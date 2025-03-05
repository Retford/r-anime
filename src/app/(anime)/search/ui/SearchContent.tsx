'use client';

import { useEffect, useState } from 'react';

import type { Data } from '@/interfaces/comic.interface';
import type { Pagination } from '@/interfaces/common.interface';

import { CardSkeleton } from '@/components/comics/skeleton/CardSkeleton';
import { CardGrid } from '@/components/cards/card-grid/CardGrid';

import { PaginationWithLinks } from '@/components/ui/pagination-with-links/pagination-with-links';
import { FetchSearchQuery } from '@/fetch/FetchSearchQuery';
import { NoResultsFound } from '@/components/search/no-results-found/NoResultsFound';

interface Props {
  page: number;
  q: string;
}

export const SearchContent = ({ page, q }: Props) => {
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const { data, pagination } = await FetchSearchQuery(q, page);
      setData(data);
      setPagination(pagination);
      setLoading(false);
    }
    fetchData();
  }, [page, q]);

  return (
    <>
      {loading ? (
        <CardSkeleton />
      ) : data.length === 0 ? (
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
