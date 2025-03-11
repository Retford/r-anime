'use client';

import { CardSkeleton } from '@/components/comics/skeleton/CardSkeleton';

import { useAnime } from '@/hooks/useAnime';

import { Loader } from '@/components/ui/loader/Loader';
import { HeroSection } from '@/components/anime/hero-section/HeroSection';
import { EpisodeList } from '@/components/anime/episode-list/EpisodeList';

interface Props {
  animeId: number;
}

export const AnimeIdContent = ({ animeId }: Props) => {
  const { animeByIdQuery, episodesQuery } = useAnime(animeId, 1);

  return (
    <div className='flex flex-col gap-8 xl:gap-16'>
      {animeByIdQuery.isLoading && <Loader />}
      {animeByIdQuery.data?.data && (
        <HeroSection anime={animeByIdQuery.data.data} />
      )}
      {/* <HeroSection anime={animeByIdQuery.data.data} /> */}
      {episodesQuery.isLoading && <CardSkeleton />}
      {episodesQuery.data?.data && (
        <EpisodeList episodes={episodesQuery.data.data} />
      )}
    </div>
  );
};
