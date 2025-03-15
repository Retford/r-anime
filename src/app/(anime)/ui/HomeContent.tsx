'use client';

import { SectionCardGrid } from '@/components/share/section-cards/SectionCardGrid';
import { Loader } from '@/components/ui/loader/Loader';
import { useSeasonNow } from '@/hooks/useSeasonNow';
import { useSeasonsList } from '@/hooks/useSeasonsList';

export const HomeContent = () => {
  const { data: seasonList, isLoading: isLoadingList } = useSeasonsList();
  const { data: seasonNow, isLoading: isLoadingNow } = useSeasonNow();
  //   const {} = useSeasonNow

  if (!seasonList || !seasonNow) {
    return <div>No data available!</div>;
  }

  const { data: seasons } = seasonList;
  const { data: season } = seasonNow;

  console.log({ seasons });
  console.log({ season });

  return (
    <div className='container m-auto'>
      HomeContent
      {isLoadingList && <Loader />}
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
      {isLoadingNow && <Loader />}
    </div>
  );
};
