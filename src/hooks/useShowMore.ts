import { useEffect, useState } from 'react';
import { useAnime } from './useAnime';

export const useShowMore = (animeId: number, showNumber: number) => {
  const [visible, setVisible] = useState(0);

  const { charactersQuery } = useAnime(animeId);
  const allCharacters = charactersQuery.data?.data ?? [];

  useEffect(() => {
    if (allCharacters.length > visible) setVisible((prev) => prev + showNumber);
  }, [allCharacters.length]);

  const handleLoadMore = async () => {
    if (visible < allCharacters.length) {
      setVisible((prev) => prev + showNumber);
    }
  };

  const handleLoadLess = () => {
    setVisible((prev) => Math.max(showNumber, prev - showNumber));
  };

  const handleLoadReset = () => {
    setVisible(showNumber);
  };
  return {
    allCharacters,
    visible,

    handleLoadReset,
    handleLoadMore,
    handleLoadLess,
  };
};
