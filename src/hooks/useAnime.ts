import { useQuery } from '@tanstack/react-query';
import { getAnimeById } from '../services/anime';
export const useAnime = (animeId: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['anime', { animeId }],
    queryFn: () => getAnimeById(animeId),
    staleTime: 1000 * 60 * 60,
  });

  return {
    data,
    isLoading,
  };
};
