import axios from 'axios';
import rateLimit from 'axios-rate-limit';

export const comicsApi = rateLimit(
  axios.create({
    baseURL: 'https://api.jikan.moe/v4',
  }),
  {
    maxRequests: 10,
    perMilliseconds: 1000,
  }
);
