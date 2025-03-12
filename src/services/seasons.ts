import { fetchData } from './fetch-data';

import type { SeasonsList } from '@/interfaces/seasonsList.interface';
import type { Comics } from '@/interfaces/comic.interface';

export const getSeasonsList = () => fetchData<SeasonsList>('/seasons');

export const getSeasonNow = () =>
  fetchData<Comics>('/seasons/now', { limit: 24 });
