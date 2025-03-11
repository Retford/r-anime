import { fetchData } from './fetch-data';

import type { Comics } from '@/interfaces/comic.interface';
import type { ItemByIDResponse } from '@/interfaces/comicById.interface';
import { Episodes } from '@/interfaces/episodes';
import type { Recommendations } from '@/interfaces/recommendations.interface';

export const getAnimes = (page: number = 1) =>
  fetchData<Comics>('/anime', { page, limit: 24 });

export const getAnimeById = (animeId: number) =>
  fetchData<ItemByIDResponse>(`/anime/${animeId}`);

export const getRecommendationsAnime = () =>
  fetchData<Recommendations>('/recommendations/anime');

export const getEpisodes = (animeId: number, page: number = 1) =>
  fetchData<Episodes>(`/anime/${animeId}/episodes`, { page });
