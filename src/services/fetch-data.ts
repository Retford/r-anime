import { comicsApi } from '@/lib/api/comics.api';

export const fetchData = async <T>(
  endpoint: string,
  params?: Record<string, string | number>
): Promise<T> => {
  try {
    const res = await comicsApi.get<T>(endpoint, { params });
    return res.data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    throw new Error(`Error fetching ${endpoint}`);
  }
};
