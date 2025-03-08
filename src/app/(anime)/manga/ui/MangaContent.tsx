'use client';

import { useEffect, useState } from 'react';

import type { Data } from '@/interfaces/comic.interface';
import type { Pagination } from '@/interfaces/common.interface';

import { CardGrid } from '@/components/cards/card-grid/CardGrid';
import { CardSkeleton } from '@/components/comics/skeleton/CardSkeleton';

import { PaginationWithLinks } from '@/components/ui/pagination-with-links/pagination-with-links';
import { getMangas } from '@/services/manga';

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
      const { data, pagination } = await getMangas(page);
      setData(data);
      setPagination(pagination);
      setLoading(false);
    }
    fetchData();
  }, [page]);

  return (
    <>
      {loading ? <CardSkeleton /> : <CardGrid data={data} tag='manga' />}
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
