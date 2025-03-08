import { useQuery } from '@tanstack/react-query';
import { getMangaById } from '@/services/manga';
export const useManga = (mangaId: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['manga', { mangaId }],
    queryFn: () => getMangaById(mangaId),
    staleTime: 1000 * 60 * 60,
  });

  return {
    data,
    isLoading,
  };
};
