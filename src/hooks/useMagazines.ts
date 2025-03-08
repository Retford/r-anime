import { getMagazines } from '@/services/magazine';
import { useQuery } from '@tanstack/react-query';

export const useMagazines = (page: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['magazines', { page }],
    queryFn: () => getMagazines(page),
    staleTime: 1000 * 60 * 60,
  });

  return {
    data,
    isLoading,
  };
};
