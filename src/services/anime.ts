import { fetchData } from './fetch-data';

import type { Comics } from '@/interfaces/comic.interface';
import type { ItemByIDResponse } from '@/interfaces/comicById.interface';
import type { Episodes } from '@/interfaces/episodes.interface';
import type { Characters } from '@/interfaces/characters.interface';
import type { AnimeRecommendationsById } from '@/interfaces/animeRecommendationsById.interface';
// import { sleep } from '@/helpers/sleep';

export const getAnimes = (page: number = 1) =>
  fetchData<Comics>('/anime', { page, limit: 24 });

export const getAnimeById = (animeId: number) =>
  fetchData<ItemByIDResponse>(`/anime/${animeId}`);

export const getEpisodes = (animeId: number, page: number = 1) =>
  fetchData<Episodes>(`/anime/${animeId}/episodes`, { page });

export const getCharactersAnime = (animeId: number) =>
  fetchData<Characters>(`/anime/${animeId}/characters`);

export const getAnimeRecommendationsById = (animeId: number) =>
  fetchData<AnimeRecommendationsById>(`/anime/${animeId}/recommendations`);
