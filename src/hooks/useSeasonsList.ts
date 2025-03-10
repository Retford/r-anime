import { getSeasonsList } from '@/services/seasons';
import { useQuery } from '@tanstack/react-query';

export const useSeasonsList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['seasons'],
    queryFn: getSeasonsList,
    staleTime: 1000 * 60 * 60,
  });

  return { data, isLoading };
};
