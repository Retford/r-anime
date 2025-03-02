import type { Recommendations } from '@/interfaces/recommendations.interface';

export const GetDataRecommendation = async <T>(
  type: 'anime' | 'manga'
): Promise<T> => {
  const resp = await fetch(`https://api.jikan.moe/v4/recommendations/${type}`);

  if (!resp.ok) {
    throw new Error(`Error fetching ${type} data: ${resp.statusText}`);
  }

  return resp.json();
};

export const GetDataRecommendationAnimes = () =>
  GetDataRecommendation<Recommendations>('anime');
export const GetDataRecommendationMangas = () =>
  GetDataRecommendation<Recommendations>('manga');
