import { Comics } from '@/interfaces/comic.interface';

export const FetchDataTopAnime = async (
  type: 'anime' | 'manga',
  page: number = 1
): Promise<Comics> => {
  try {
    const response = await fetch(
      `https://api.jikan.moe/v4/top/${type}?page=${page}&limit=24`
    );

    if (!response.ok) {
      throw new Error(`Error fetching Top Anime, data: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    throw new Error(`Error fetching Top Anime error: ${error}`);
  }
};
