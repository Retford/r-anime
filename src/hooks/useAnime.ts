import { useQuery } from '@tanstack/react-query';
import { getAnimeById, getEpisodes } from '../services/anime';
export const useAnime = (animeId: number, page?: number) => {
  const animeByIdQuery = useQuery({
    queryKey: ['anime', { animeId }],
    queryFn: () => getAnimeById(animeId),
    staleTime: 1000 * 60 * 60,
  });

  const episodesQuery = useQuery({
    queryKey: ['anime', { animeId }, 'episodes', { page }],
    queryFn: () => getEpisodes(animeId, page),
    staleTime: 1000 * 60 * 60,
  });

  return {
    animeByIdQuery,
    episodesQuery,
  };
};
