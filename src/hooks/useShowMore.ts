import { useEffect, useState } from 'react';
import { useAnime } from './useAnime';

export const useShowMore = (animeId: number) => {
  const [visibleEpisodes, setVisibleEpisodes] = useState(0);

  const { episodesQuery } = useAnime(animeId);
  const allEpisodes =
    episodesQuery.data?.pages.flatMap((page) => page.data) ?? [];

  useEffect(() => {
    if (allEpisodes.length > visibleEpisodes)
      setVisibleEpisodes((prev) => prev + 5);
  }, [allEpisodes.length]);

  const handleLoadMore = async () => {
    if (visibleEpisodes < allEpisodes.length) {
      setVisibleEpisodes((prev) => prev + 5);
    } else if (episodesQuery.hasNextPage) {
      await episodesQuery.fetchNextPage();
      setVisibleEpisodes((prev) => prev + 5);
    }
  };

  const handleLoadLess = () => {
    setVisibleEpisodes((prev) => Math.max(5, prev - 5));
  };

  const handleLoadReset = () => {
    setVisibleEpisodes(5);
  };
  return {
    allEpisodes,
    visibleEpisodes,

    handleLoadReset,
    handleLoadMore,
    handleLoadLess,
  };
};
