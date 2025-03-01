import { ItemByIDResponse } from '@/interfaces/comicById.interface';

export const GetDataById = async <T,>(
  type: 'anime' | 'manga',
  id: string
): Promise<T> => {
  const resp = await fetch(`https://api.jikan.moe/v4/${type}/${id}`);

  if (!resp.ok) {
    throw new Error(`Error fetching ${type} data: ${resp.statusText}`);
  }

  return resp.json();
};

export const GetDataAnimesById = (id: string) =>
  GetDataById<ItemByIDResponse>('anime', id);
export const GetDataMangasById = (id: string) =>
  GetDataById<ItemByIDResponse>('manga', id);
