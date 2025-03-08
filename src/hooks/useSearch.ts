import { getSearch } from '@/services/search';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';

export const useSearch = (q: string, page?: number) => {
  const [debouncedQuery, setDebouncedQuery] = useState(q);

  useEffect(() => {
    const handler = debounce((newQuery) => {
      setDebouncedQuery(newQuery);
    }, 700);
    handler(q);

    return () => {
      handler.cancel();
    };
  }, [q]);

  const shouldFetch = debouncedQuery.trim().length > 2;
  const { data, isLoading } = useQuery({
    queryKey: ['search', { q: debouncedQuery, page }],
    queryFn: () => getSearch(debouncedQuery, page),
    staleTime: 1000 * 60 * 60,
    enabled: shouldFetch,
  });

  return {
    data,
    isLoading,
  };
};
