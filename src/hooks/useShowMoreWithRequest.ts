import { useEffect, useState } from 'react';
import { useAnime } from './useAnime';

export const useShowMoreWithRequest = (animeId: number, showNumber: number) => {
  const [visibleEpisodes, setVisibleEpisodes] = useState(0);

  const { episodesQuery } = useAnime(animeId);
  const allEpisodes =
    episodesQuery.data?.pages.flatMap((page) => page.data) ?? [];

  useEffect(() => {
    if (allEpisodes.length > visibleEpisodes)
      setVisibleEpisodes((prev) => prev + showNumber);
  }, [allEpisodes.length]);

  const handleLoadMore = async () => {
    if (visibleEpisodes < allEpisodes.length) {
      setVisibleEpisodes((prev) => prev + showNumber);
    } else if (episodesQuery.hasNextPage) {
      await episodesQuery.fetchNextPage();
      setVisibleEpisodes((prev) => prev + showNumber);
    }
  };

  const handleLoadLess = () => {
    setVisibleEpisodes((prev) => Math.max(showNumber, prev - showNumber));
  };

  const handleLoadReset = () => {
    setVisibleEpisodes(showNumber);
  };
  return {
    allEpisodes,
    visibleEpisodes,

    handleLoadReset,
    handleLoadMore,
    handleLoadLess,
  };
};
