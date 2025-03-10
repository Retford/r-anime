import { fetchData } from './fetch-data';

import type { Comics } from '@/interfaces/comic.interface';
import type { ItemByIDResponse } from '@/interfaces/comicById.interface';
import type { Recommendations } from '@/interfaces/recommendations.interface';

export const getAnimes = (page: number = 1) =>
  fetchData<Comics>('/anime', { page, limit: 24 });

export const getAnimeById = (animeId: number) =>
  fetchData<ItemByIDResponse>(`/anime/${animeId}`);

export const getRecommendationsAnime = () =>
  fetchData<Recommendations>('/recommendations/anime');
