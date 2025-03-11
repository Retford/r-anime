'use client';

import { useAnime } from '@/hooks/useAnime';

import { Loader } from '@/components/ui/loader/Loader';
import { HeroSection } from '@/components/anime/hero-section/HeroSection';
import { EpisodeList } from '@/components/anime/episode-list/EpisodeList';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { CardSkeleton } from '@/components/comics/skeleton/CardSkeleton';

interface Props {
  animeId: number;
}

export const AnimeIdContent = ({ animeId }: Props) => {
  const { animeByIdQuery, episodesQuery } = useAnime(animeId);

  const episodes = episodesQuery.data?.pages.flatMap((page) => page.data) ?? [];

  return (
    <div className='flex flex-col gap-8 xl:gap-16'>
      {animeByIdQuery.isLoading && <Loader />}
      {animeByIdQuery.data?.data && (
        <HeroSection anime={animeByIdQuery.data.data} />
      )}

      {episodesQuery.isLoading && <CardSkeleton />}
      <EpisodeList episodes={episodes} />
      <div className='flex justify-center mt-8'>
        <Button onClick={() => episodesQuery.fetchNextPage()}>
          <span className='font-medium'>CARGAR MÁS</span>
          <ChevronDown className='h-5 w-5' />
        </Button>
      </div>
    </div>
  );
};
