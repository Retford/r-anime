'use client';

import { CardSkeleton } from '@/components/comics/skeleton/CardSkeleton';
import { MagazineGrid } from '@/components/magazines/magazine-grid/MagazineGrid';

import { PaginationWithLinks } from '@/components/ui/pagination-with-links/pagination-with-links';
import { useMagazines } from '@/hooks/useMagazines';

interface Props {
  page: number;
}

export const MagazineContent = ({ page }: Props) => {
  const { isLoading, data } = useMagazines(page);

  if (isLoading) return <CardSkeleton />;

  if (!data) return <p>No data available</p>;

  const { data: magazines, pagination } = data;

  return (
    <div className='container m-auto'>
      <MagazineGrid data={magazines} />

      {pagination && (
        <PaginationWithLinks
          page={pagination.current_page}
          pageSize={pagination.items.per_page}
          totalCount={pagination.items.total}
        />
      )}
    </div>
  );
};
