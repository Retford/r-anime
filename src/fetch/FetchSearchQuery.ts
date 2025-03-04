import { Comics } from '@/interfaces/comic.interface';

export const FetchSearchQuery = async (
  q: string,
  page: number = 1
): Promise<Comics> => {
  try {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime?q=${q}&page=${page}&limit=24`
    );

    if (!response.ok) {
      throw new Error(
        `Error fetching search anime data: ${response.statusText}`
      );
    }

    return response.json();
  } catch (error) {
    console.log(error);
    throw new Error(`Error fetching search anime, error: ${error}`);
  }
};
