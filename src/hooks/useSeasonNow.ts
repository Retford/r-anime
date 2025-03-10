import { getSeasonNow } from '@/services/seasons';
import { useQuery } from '@tanstack/react-query';

export const useSeasonNow = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['season', 'now'],
    queryFn: getSeasonNow,
    staleTime: 1000 * 60 * 60,
  });

  return {
    data,
    isLoading,
  };
};
