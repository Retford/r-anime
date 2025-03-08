import { fetchData } from './fetch-data';
import type { Comics } from '@/interfaces/comic.interface';
import type { ComicType } from '@/interfaces/api-types';

export const getTopComics = (type: ComicType, page: number = 1) =>
  fetchData<Comics>(`/top/${type}`, { page, limit: 24 });
