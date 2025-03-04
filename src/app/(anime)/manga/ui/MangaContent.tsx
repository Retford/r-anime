'use client';

import { useEffect, useState } from 'react';

import { GetDataMangas } from '@/fetch/FetchData';
import type { Data } from '@/interfaces/comic.interface';
import type { Pagination } from '@/interfaces/common.interface';

import { CardGrid } from '@/components/cards/card-grid/CardGrid';
import { CardSkeleton } from '@/components/comics/skeleton/CardSkeleton';

import { PaginationWithLinks } from '@/components/ui/pagination-with-links/pagination-with-links';

interface Props {
  page: number;
}

export const MangaContent = ({ page }: Props) => {
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState<Pagination>();
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const { data, pagination } = await GetDataMangas(page);
      setData(data);
      setPagination(pagination);
      setLoading(false);
    }
    fetchData();
  }, [page]);

  return (
    <>
      {loading ? <CardSkeleton /> : <CardGrid data={data} tag='anime' />}
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
