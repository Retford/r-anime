import { getAnimes } from '@/services/anime';
import { useQuery } from '@tanstack/react-query';

export const useAnimes = (page: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['animes', { page }],
    queryFn: () => getAnimes(page),
    staleTime: 24 * 60 * 60,
  });

  return {
    data,
    isLoading,
  };
};
