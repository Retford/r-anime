import { fetchData } from './fetch-data';

import type { Magazines } from '@/interfaces/magazine.interface';

export const getMagazines = (page: number = 1) =>
  fetchData<Magazines>('/magazines', { page });
