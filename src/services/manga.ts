import { fetchData } from './fetch-data';

import type { Comics } from '@/interfaces/comic.interface';
import type { ItemByIDResponse } from '@/interfaces/comicById.interface';
import type { Recommendations } from '@/interfaces/recommendations.interface';

export const getMangas = (page: number = 1) =>
  fetchData<Comics>('/manga', { page, limit: 24 });

export const getMangaById = (id: string) =>
  fetchData<ItemByIDResponse>(`/manga/${id}`);

export const getRecommendationsManga = () =>
  fetchData<Recommendations>('/recommendations/manga');
