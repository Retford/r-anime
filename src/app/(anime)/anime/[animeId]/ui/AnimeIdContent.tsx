'use client';

import { useAnime } from '@/hooks/useAnime';

import { Loader } from '@/components/ui/loader/Loader';
import { HeroSection } from '@/components/anime/hero-section/HeroSection';
import { EpisodeList } from '@/components/anime/episode-list/EpisodeList';

import { CardSkeleton } from '@/components/comics/skeleton/CardSkeleton';
import { CharacterGrid } from '@/components/anime/character-grid/CharacterGrid';
import { useShowMoreWithRequest } from '@/hooks/useShowMoreWithRequest';
import { useShowMore } from '@/hooks/useShowMore';
import { AnimeNavigation } from '@/components/anime/navigation/AnimeNavigation';

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
      {animeByIdQuery.isLoading && <Loader />}
      {animeByIdQuery.data?.data && (
        <HeroSection anime={animeByIdQuery.data.data} />
      )}

      {episodesQuery.isLoading && <CardSkeleton />}
      <section className='container m-auto pt-2 pb-12 p-6'>
        <EpisodeList
          episodes={allEpisodes.slice(
            visibleEpisodes - showNumberEpisodes,
            visibleEpisodes
          )}
        />
        <AnimeNavigation
          visible={visibleEpisodes}
          items={allEpisodes}
          handleLoadLess={handleLoadLess}
          handleLoadMore={handleLoadMore}
          handleLoadReset={handleLoadReset}
          limit={showNumberEpisodes}
          query={episodesQuery}
        />

        {charactersQuery.isLoading && <Loader />}
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
          handleLoadLess={handleLoadLessCharacter}
          handleLoadMore={handleLoadMoreCharacter}
          handleLoadReset={handleLoadResetCharacter}
        />
      </section>
    </div>
  );
};
