import { sleep } from '@/helpers/sleep';
import { fetchData } from './fetch-data';

import type { Comics } from '@/interfaces/comic.interface';
import type { ItemByIDResponse } from '@/interfaces/comicById.interface';
import { Episodes } from '@/interfaces/episodes';
import type { Recommendations } from '@/interfaces/recommendations.interface';

export const getAnimes = (page: number = 1) =>
  fetchData<Comics>('/anime', { page, limit: 24 });

export const getAnimeById = async (animeId: number) => {
  await sleep(2);
  return fetchData<ItemByIDResponse>(`/anime/${animeId}`);
};

export const getRecommendationsAnime = () =>
  fetchData<Recommendations>('/recommendations/anime');

export const getEpisodes = async (animeId: number, page: number = 1) => {
  await sleep(2);

  return fetchData<Episodes>(`/anime/${animeId}/episodes`, { page });
};
