import { getEpisodes } from '@/services/anime';
import { useQuery } from '@tanstack/react-query';

export const useEpisodes = (animeId: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['anime', { episodes: animeId }],
    queryFn: () => getEpisodes(animeId),
    staleTime: 1000 * 60 * 60,
  });

  return {
    data,
    isLoading,
  };
};
