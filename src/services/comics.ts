import { fetchData } from './fetch-data';
import type { Comics } from '@/interfaces/comic.interface';
import type { ComicType } from '@/interfaces/api-types';
import { Recommendations } from '@/interfaces/recommendations.interface';

export const getTopComics = (type: ComicType, page: number = 1) =>
  fetchData<Comics>(`/top/${type}`, { page, limit: 24 });

export const getRecommendationsAnime = () =>
  fetchData<Recommendations>('/recommendations/anime');
