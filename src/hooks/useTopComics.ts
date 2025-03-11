import type { ComicType } from '@/interfaces/api-types';
import { useQuery } from '@tanstack/react-query';
import { getTopComics } from '@/services/comics';

export const useTopComics = (type: ComicType, page: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['top', { type, page }],
    queryFn: () => getTopComics(type, page),
    staleTime: 1000 * 60 * 60,
  });

  return {
    data,
    isLoading,
  };
};
