import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import {
  getAnimeById,
  getAnimeRecommendationsById,
  getCharactersAnime,
  getEpisodes,
} from '../services/anime';
export const useAnime = (animeId: number) => {
  const animeByIdQuery = useQuery({
    queryKey: ['anime', { animeId }],
    queryFn: () => getAnimeById(animeId),
    staleTime: 1000 * 60 * 60,
  });

  const episodesQuery = useInfiniteQuery({
    queryKey: ['anime', 'infinity', { animeId }, 'episodes'],
    queryFn: ({ pageParam }) => {
      return getEpisodes(animeId, pageParam);
    },
    staleTime: 1000 * 60 * 60,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.pagination.has_next_page ? pages.length + 1 : undefined;
    },
  });

  const recommendationsByIdQuery = useQuery({
    queryKey: ['anime', { animeId }, 'recommendations'],
    queryFn: () => getAnimeRecommendationsById(animeId),
    staleTime: 1000 * 60 * 60,
  });

  const charactersQuery = useQuery({
    queryKey: ['anime', { animeId }, 'characters'],
    queryFn: () => getCharactersAnime(animeId),
    staleTime: 1000 * 60 * 60,
  });

  return {
    animeByIdQuery,
    episodesQuery,
    charactersQuery,
    recommendationsByIdQuery,
  };
};
