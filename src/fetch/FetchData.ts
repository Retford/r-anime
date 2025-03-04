import type { Comics } from '@/interfaces/comic.interface';
import type { Magazines } from '@/interfaces/magazine.interface';

export const GetData = async <T>(
  type: 'anime' | 'manga' | 'magazines',
  page: number = 1
): Promise<T> => {
  try {
    const resp = await fetch(`https://api.jikan.moe/v4/${type}?page=${page}`);
    if (!resp.ok) {
      throw new Error(`Error fetching ${type} data: ${resp.statusText}`);
    }
    return resp.json();
  } catch (error) {
    throw new Error(`Error fetching ${type}, error: ${error}`);
  }
};

export const GetDataAnimes = (page?: number) => GetData<Comics>('anime', page);
export const GetDataMangas = (page?: number) => GetData<Comics>('manga', page);
export const GetDataMagazines = (page?: number) =>
  GetData<Magazines>('magazines', page);
