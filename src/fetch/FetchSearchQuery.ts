import { ResultsSearch } from '@/interfaces/resultsSearch';

export const FetchSearchQuery = async (q: string): Promise<ResultsSearch> => {
  const response = await fetch(`https://api.jikan.moe/v4/anime?q=${q}`);

  return response.json();
};
