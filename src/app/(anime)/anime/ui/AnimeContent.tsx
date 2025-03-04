'use client';

import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

import { GetDataAnimes } from '@/fetch/FetchData';
import type { Data } from '@/interfaces/comic.interface';
import type { Pagination } from '@/interfaces/common.interface';

import { CardGrid } from '@/components/cards/card-grid/CardGrid';
import { PaginationWithLinks } from '@/components/ui/pagination-with-links/pagination-with-links';

interface Props {
  page: number;
}

export const AnimeContent = ({ page }: Props) => {
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const { data, pagination } = await GetDataAnimes(page);
      setData(data);
      setPagination(pagination);
      setLoading(false);
    }
    fetchData();
  }, [page]);

  return (
    <>
      {loading ? (
        <Loader2 className='animate-spin mx-auto' />
      ) : (
        <CardGrid data={data} tag='anime' />
      )}
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
