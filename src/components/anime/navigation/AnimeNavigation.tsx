import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { InfiniteData, UseInfiniteQueryResult } from '@tanstack/react-query';
import { Episodes } from '@/interfaces/episodes';

interface Props<T> {
  visible: number;
  items: T[];
  limit: number;

  query?: UseInfiniteQueryResult<InfiniteData<Episodes, unknown>, Error>;
  handleLoadLess: () => void;
  handleLoadMore: () => void;
  handleLoadReset: () => void;
}

export const AnimeNavigation = <T,>({
  visible,
  items,
  limit,
  query,
  handleLoadLess,
  handleLoadMore,
  handleLoadReset,
}: Props<T>) => {
  return (
    <div className='flex justify-center items-center gap-8 mb-16'>
      <div className='flex gap-1'>
        {visible > limit - 1 && items.length > limit - 1 && (
          <Button
            variant='orange'
            disabled={visible < limit + 1}
            onClick={handleLoadLess}
          >
            <ChevronLeft />
          </Button>
        )}
        {items.length > limit && (
          <Button
            variant='orange'
            onClick={handleLoadMore}
            disabled={
              query && 'hasNextPage' in query
                ? !query.hasNextPage && visible >= items.length
                : visible >= items.length
            }
          >
            <ChevronRight />
          </Button>
        )}
      </div>

      {visible > limit - 1 && items.length > limit - 1 && (
        <Button
          variant='orange'
          onClick={handleLoadReset}
          disabled={visible < limit + 1}
        >
          <Home />
        </Button>
      )}
    </div>
  );
};
