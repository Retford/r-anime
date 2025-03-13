'use client';

import { useAnime } from '@/hooks/useAnime';

import { HeroSection } from '@/components/anime/hero-section/HeroSection';
import { EpisodeList } from '@/components/anime/episode-list/EpisodeList';

import { useShowMoreWithRequest } from '@/hooks/useShowMoreWithRequest';
import { useShowMore } from '@/hooks/useShowMore';
import { AnimeNavigation } from '@/components/anime/navigation/AnimeNavigation';
import { EpisodeSkeleton } from '@/components/anime/skeleton/episode-skeleton/EpisodeSkeleton';
import { CharacterSkeleton } from '@/components/anime/skeleton/character-skeleton/CharacterSkeleton';
import { HeroSkeleton } from '@/components/anime/skeleton/hero-skeleton/HeroSkeleton';

import type { DataAnimeRecommendationsById } from '@/interfaces/animeRecommendationsById.interface';
import type { DataCharacters } from '@/interfaces/characters.interface';
import { CardSkeleton } from '@/components/comics/skeleton/CardSkeleton';
import { SectionCardGrid } from '@/components/share/section-cards/SectionCardGrid';
import { SectionTitle } from '@/components/share/section-cards/SectionTitle';
import { SectionReviews } from '@/components/share/section-reviews/SectionReviews';
import { Loader } from '@/components/ui/loader/Loader';
// import { SectionReviews } from '@/components/share/section-reviews/SectionReviews';

interface Props {
  animeId: number;
}

export const AnimeIdContent = ({ animeId }: Props) => {
  const {
    animeByIdQuery,
    episodesQuery,
    charactersQuery,
    recommendationsByIdQuery,
    animeReviewQuery,
  } = useAnime(animeId);

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
    allItems: allCharacters,
    visible,
    handleLoadLess: handleLoadLessCharacter,
    handleLoadMore: handleLoadMoreCharacter,
    handleLoadReset: handleLoadResetCharacter,
  } = useShowMore<DataCharacters>({
    query: charactersQuery,
    showNumber: showNumberCharacters,
  });

  const {
    allItems: allRecommendations,
    visible: visibleRecommendation,
    handleLoadLess: handleLoadLessRecommendation,
    handleLoadMore: handleLoadMoreRecommendation,
    handleLoadReset: handleLoadResetRecommendation,
  } = useShowMore<DataAnimeRecommendationsById>({
    query: recommendationsByIdQuery,
    showNumber: showNumberCharacters,
  });

  return (
    <div className='flex flex-col gap-8 xl:gap-16'>
      {animeByIdQuery.isLoading && <HeroSkeleton />}
      {animeByIdQuery.data?.data && (
        <HeroSection anime={animeByIdQuery.data.data} />
      )}
      <section className='container m-auto pt-2 pb-12 p-6 flex flex-col gap-16'>
        {/*  Episodes Section  */}
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

        {/* Characters Section  */}

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
            <SectionCardGrid
              items={allCharacters.slice(
                visible - showNumberCharacters,
                visible
              )}
              name='Characters'
              getItemProps={(item) => ({
                id: item.character.mal_id,
                imageUrl: item.character.images.webp.image_url,
                title: item.character.name,
                badgeText: item.role,
              })}
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

        {/* Reviews Section  */}

        <SectionTitle name='Reviews' />

        {animeReviewQuery.isLoading && <Loader />}

        {animeReviewQuery.data?.data && (
          <SectionReviews reviews={animeReviewQuery.data.data} />
        )}
        {/* 
        {animeReviewQuery.data?.data.map((review) => (
          <SectionReviews key={review.mal_id} reviews={review} />
        ))} */}

        {/* <SectionReviews /> */}
        {/* Fin Reviews Section */}

        {recommendationsByIdQuery.isLoading && <CardSkeleton />}

        {/* Recommendation Section   */}
        {allRecommendations.length === 0 ? (
          <>
            {recommendationsByIdQuery.isLoading ? (
              ''
            ) : (
              <div className='text-center py-12 bg-black/30 border border-white/10 rounded-lg'>
                <p className='text-white/60'>
                  There are no recommendations for this anime yet.
                </p>
              </div>
            )}
          </>
        ) : (
          <div className='relative'>
            <SectionCardGrid
              items={allRecommendations.slice(
                visibleRecommendation - showNumberCharacters,
                visibleRecommendation
              )}
              name='Recommended anime like this'
              getItemProps={(item) => ({
                id: item.entry.mal_id,
                imageUrl: item.entry.images.webp.image_url,
                url: `/anime/${item.entry.mal_id}`,
                title: item.entry.title,
              })}
            />
            <AnimeNavigation
              visible={visibleRecommendation}
              items={allRecommendations}
              limit={showNumberCharacters}
              className='relative sm:absolute top-0 right-0'
              handleLoadLess={handleLoadLessRecommendation}
              handleLoadMore={handleLoadMoreRecommendation}
              handleLoadReset={handleLoadResetRecommendation}
            />
          </div>
        )}
      </section>
    </div>
  );
};
