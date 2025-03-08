'use client';

import { useEffect, useState } from 'react';

import type { Data } from '@/interfaces/comic.interface';
import type { Pagination } from '@/interfaces/common.interface';
import type { ComicType } from '@/interfaces/api-types';

import { CardGrid } from '@/components/cards/card-grid/CardGrid';
import { CardSkeleton } from '@/components/comics/skeleton/CardSkeleton';

import { PaginationWithLinks } from '@/components/ui/pagination-with-links/pagination-with-links';
import { getTopComics } from '@/services/comics';

interface Props {
  page: number;
  type: ComicType;
}

export const TopContent = ({ page, type }: Props) => {
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const { data, pagination } = await getTopComics(type, page);
      setData(data);
      setPagination(pagination);
      setLoading(false);
    }
    fetchData();
  }, [type, page]);

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
