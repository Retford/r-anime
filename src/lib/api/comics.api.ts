import axios, { AxiosError } from 'axios';
import rateLimit from 'axios-rate-limit';
import axiosRetry from 'axios-retry';

export const comicsApi = rateLimit(
  axios.create({
    baseURL: 'https://api.jikan.moe/v4',
    timeout: 5000,
  }),
  {
    maxRequests: 1,
    perMilliseconds: 1000,
  }
);

axiosRetry(comicsApi, {
  retries: 3,
  retryDelay: (retryCount: number) => retryCount * 1000,
  retryCondition: (error: AxiosError) =>
    error.response?.status === 429 ||
    error.response?.status === 500 ||
    error.response?.status === 503 ||
    error.code === 'ECONNABORTED' ||
    error.message.includes('timeout'),
});
