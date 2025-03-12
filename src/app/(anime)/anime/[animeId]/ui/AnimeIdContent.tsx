'use client';

import { useAnime } from '@/hooks/useAnime';

import { HeroSection } from '@/components/anime/hero-section/HeroSection';
import { EpisodeList } from '@/components/anime/episode-list/EpisodeList';

import { CharacterGrid } from '@/components/anime/character-grid/CharacterGrid';
import { useShowMoreWithRequest } from '@/hooks/useShowMoreWithRequest';
import { useShowMore } from '@/hooks/useShowMore';
import { AnimeNavigation } from '@/components/anime/navigation/AnimeNavigation';
import { EpisodeSkeleton } from '@/components/anime/skeleton/episode-skeleton/EpisodeSkeleton';
import { CharacterSkeleton } from '@/components/anime/skeleton/character-skeleton/CharacterSkeleton';
import { HeroSkeleton } from '@/components/anime/skeleton/hero-skeleton/HeroSkeleton';

interface Props {
  animeId: number;
}

export const AnimeIdContent = ({ animeId }: Props) => {
  const { animeByIdQuery, episodesQuery, charactersQuery } = useAnime(animeId);

  const showNumberEpisodes = 5;
  const showNumberCharacters = 18;

  const {
    handleLoadReset,
    handleLoadMore,
    handleLoadLess,
    allEpisodes,
    visibleEpisodes,
  } = useShowMoreWithRequest(animeId, showNumberEpisodes);

  const {
    allCharacters,
    visible,
    handleLoadLess: handleLoadLessCharacter,
    handleLoadMore: handleLoadMoreCharacter,
    handleLoadReset: handleLoadResetCharacter,
  } = useShowMore(animeId, showNumberCharacters);

  return (
    <div className='flex flex-col gap-8 xl:gap-16'>
      {animeByIdQuery.isLoading && <HeroSkeleton />}
      {animeByIdQuery.data?.data && (
        <HeroSection anime={animeByIdQuery.data.data} />
      )}

      <section className='container m-auto pt-2 pb-12 p-6 flex flex-col gap-16'>
        {episodesQuery.isLoading && <EpisodeSkeleton />}

        {allEpisodes.length === 0 ? (
          <>
            {episodesQuery.isLoading ? (
              ''
            ) : (
              <div className='text-center py-12 bg-black/30 border border-white/10 rounded-lg'>
                <p className='text-white/60'>
                  There are no episodes for this anime yet.
                </p>
              </div>
            )}
          </>
        ) : (
          <div className='relative'>
            <EpisodeList
              episodes={allEpisodes.slice(
                visibleEpisodes - showNumberEpisodes,
                visibleEpisodes
              )}
            />
            <AnimeNavigation
              visible={visibleEpisodes}
              items={allEpisodes}
              limit={showNumberEpisodes}
              className='relative sm:absolute top-0 right-0'
              query={episodesQuery}
              handleLoadLess={handleLoadLess}
              handleLoadMore={handleLoadMore}
              handleLoadReset={handleLoadReset}
            />
          </div>
        )}

        {charactersQuery.isLoading && <CharacterSkeleton />}

        {allCharacters.length === 0 ? (
          <>
            {charactersQuery.isLoading ? (
              ''
            ) : (
              <div className='text-center py-12 bg-black/30 border border-white/10 rounded-lg'>
                <p className='text-white/60'>
                  There are no characters for this anime yet.
                </p>
              </div>
            )}
          </>
        ) : (
          <div className='relative'>
            <CharacterGrid
              characters={allCharacters.slice(
                visible - showNumberCharacters,
                visible
              )}
            />
            <AnimeNavigation
              visible={visible}
              items={allCharacters}
              limit={showNumberCharacters}
              className='relative sm:absolute top-0 right-0'
              handleLoadLess={handleLoadLessCharacter}
              handleLoadMore={handleLoadMoreCharacter}
              handleLoadReset={handleLoadResetCharacter}
            />
          </div>
        )}
      </section>
    </div>
  );
};
