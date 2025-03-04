import type { ItemByIDResponse } from '@/interfaces/comicById.interface';

export const GetDataById = async <T>(
  type: 'anime' | 'manga',
  id: string
): Promise<T> => {
  try {
    const resp = await fetch(`https://api.jikan.moe/v4/${type}/${id}`);

    if (!resp.ok) {
      throw new Error(`Error fetching ${type} data: ${resp.statusText}`);
    }

    return resp.json();
  } catch (error) {
    throw new Error(`Error fetching by id: ${id} error: ${error}`);
  }
};

export const GetDataAnimesById = (id: string) =>
  GetDataById<ItemByIDResponse>('anime', id);
export const GetDataMangasById = (id: string) =>
  GetDataById<ItemByIDResponse>('manga', id);
