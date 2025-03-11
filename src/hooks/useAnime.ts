import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getAnimeById, getEpisodes } from '../services/anime';
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
      console.log({ lastPage, pages });
      return lastPage.pagination.has_next_page ? pages.length + 1 : undefined;
    },
  });

  return {
    animeByIdQuery,
    episodesQuery,
  };
};
