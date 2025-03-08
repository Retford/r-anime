import { fetchData } from './fetch-data';

import type { Comics } from '@/interfaces/comic.interface';

export const getSearch = (q: string, page: number = 1) =>
  fetchData<Comics>('/anime', { q, page, limit: 24 });
