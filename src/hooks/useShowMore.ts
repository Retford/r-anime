import { useEffect, useState } from 'react';
import { UseQueryResult } from '@tanstack/react-query';

interface QueryData<T> {
  data: T[];
}

interface Props<T> {
  query: UseQueryResult<QueryData<T>, Error>;
  showNumber: number;
}

export const useShowMore = <T>({ query, showNumber }: Props<T>) => {
  const allItems = query.data?.data ?? [];
  const [visible, setVisible] = useState(showNumber);

  useEffect(() => {
    setVisible(showNumber);
  }, [allItems.length, showNumber]);

  const handleLoadMore = async () => {
    if (visible < allItems.length) {
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
    allItems,
    visible,

    handleLoadReset,
    handleLoadMore,
    handleLoadLess,
  };
};
