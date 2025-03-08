import { getMangas } from '@/services/manga';
import { useQuery } from '@tanstack/react-query';

export const useMangas = (page: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['mangas', { page }],
    queryFn: () => getMangas(page),
    staleTime: 1000 * 60 * 60,
  });

  return {
    data,
    isLoading,
  };
};
