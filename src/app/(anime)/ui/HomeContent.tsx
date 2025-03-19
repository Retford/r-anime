'use client';

import { SlideHome } from '@/components/home/slide-home/SlideHome';
// import { SectionCardGrid } from '@/components/share/section-cards/SectionCardGrid';
import { Loader } from '@/components/ui/loader/Loader';
import { useAnimesByIds } from '@/hooks/useAnimesByIds';
// import { useSeasonNow } from '@/hooks/useSeasonNow';
// import { useSeasonsList } from '@/hooks/useSeasonsList';

export const HomeContent = () => {
  const { arrayAnimes } = useAnimesByIds({
    animeId: [60108, 1735, 40028, 30694, 34572, 49596],
  });

  return (
    <>
      {arrayAnimes.isLoading && <Loader />}
      {arrayAnimes.data && <SlideHome animes={arrayAnimes.data} />}
      <div className='container m-auto'>
        {/* {isLoadingList && <Loader />}
        <SectionCardGrid
          name='Season'
          items={seasonNow.data}
          getItemProps={(item) => ({
            id: item.mal_id,
            imageUrl: item.images.webp.image_url,
            title: item.title,
            url: `/anime/${item.mal_id}`,
          })}
        />
        {isLoadingNow && <Loader />} */}
      </div>
    </>
  );
};
