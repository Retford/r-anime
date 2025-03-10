'use client';

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
    <div>
      HomeContent
      {isLoadingList && <Loader />}
      {isLoadingNow && <Loader />}
    </div>
  );
};
