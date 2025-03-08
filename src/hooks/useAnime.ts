import { useQuery } from '@tanstack/react-query';
import { getAnimeById } from '../services/anime';
export const useAnime = (animeId: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['anime', { animeId }],
    queryFn: () => getAnimeById(animeId),
  });
  return {
    data,
    isLoading,
  };
};
