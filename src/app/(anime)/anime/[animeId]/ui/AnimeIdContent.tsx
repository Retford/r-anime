'use client';

import { ChevronLeft, ChevronRight, Home } from 'lucide-react';

import { useAnime } from '@/hooks/useAnime';

import { Loader } from '@/components/ui/loader/Loader';
import { HeroSection } from '@/components/anime/hero-section/HeroSection';
import { EpisodeList } from '@/components/anime/episode-list/EpisodeList';
import { Button } from '@/components/ui/button';

import { CardSkeleton } from '@/components/comics/skeleton/CardSkeleton';
import { useShowMore } from '@/hooks/useShowMore';

interface Props {
  animeId: number;
}

export const AnimeIdContent = ({ animeId }: Props) => {
  const { animeByIdQuery, episodesQuery } = useAnime(animeId);

  const {
    handleLoadReset,
    handleLoadMore,
    handleLoadLess,
    allEpisodes,
    visibleEpisodes,
  } = useShowMore(animeId);

  return (
    <div className='flex flex-col gap-8 xl:gap-16'>
      {animeByIdQuery.isLoading && <Loader />}
      {animeByIdQuery.data?.data && (
        <HeroSection anime={animeByIdQuery.data.data} />
      )}

      {episodesQuery.isLoading && <CardSkeleton />}
      <section className='container m-auto pt-2 pb-12 p-6'>
        <EpisodeList
          episodes={allEpisodes.slice(visibleEpisodes - 5, visibleEpisodes)}
        />
        <div className='flex justify-center items-center gap-8'>
          <div className='flex gap-1'>
            {visibleEpisodes > 4 && allEpisodes.length > 4 && (
              <Button
                variant='orange'
                disabled={visibleEpisodes < 6}
                onClick={handleLoadLess}
              >
                <ChevronLeft />
              </Button>
            )}
            {allEpisodes.length > 5 && (
              <Button
                variant='orange'
                onClick={handleLoadMore}
                disabled={
                  !episodesQuery.hasNextPage &&
                  visibleEpisodes >= allEpisodes.length
                }
              >
                <ChevronRight />
              </Button>
            )}
          </div>

          {visibleEpisodes > 4 && allEpisodes.length > 4 && (
            <Button
              variant='orange'
              onClick={handleLoadReset}
              disabled={visibleEpisodes < 6}
            >
              <Home />
            </Button>
          )}
        </div>
      </section>
    </div>
  );
};
