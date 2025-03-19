import { getAnimeById } from '@/services/anime';
import { useQuery } from '@tanstack/react-query';

interface Props {
  animeId: number[];
}

export const useAnimesByIds = ({ animeId }: Props) => {
  const arrayAnimes = useQuery({
    queryKey: ['anime', animeId],
    queryFn: () => Promise.all(animeId.map((id) => getAnimeById(id))),
  });

  return { arrayAnimes };
};
