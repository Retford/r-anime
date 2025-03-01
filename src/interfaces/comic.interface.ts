import {
  Pagination,
  Image,
  Trailer,
  Title,
  Broadcast,
  Demographic,
  Aired,
} from './common.interface';

export interface Comics {
  pagination: Pagination;
  data: Data[];
}

export interface Data {
  mal_id: number;
  url: string;
  images: { [key: string]: Image };
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string | null;
  title_japanese: string;
  title_synonyms: string[];
  type: DataType;
  source: Source;
  episodes: number | null;
  status: Status;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: Rating;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: Season | null;
  year: number | null;
  broadcast: Broadcast;
  producers: Demographic[];
  licensors: Demographic[];
  studios: Demographic[];
  genres: Demographic[];
  themes: Demographic[];
  demographics: Demographic[];
}

export enum DataType {
  Movie = 'Movie',
  Tv = 'TV',
}

export enum Source {
  LightNovel = 'Light novel',
  Manga = 'Manga',
  Original = 'Original',
}

export enum Status {
  CurrentlyAiring = 'Currently Airing',
  FinishedAiring = 'Finished Airing',
}

export enum Rating {
  PG13Teens13OrOlder = 'PG-13 - Teens 13 or older',
  PGChildren = 'PG - Children',
  R17ViolenceProfanity = 'R - 17+ (violence & profanity)',
  RMildNudity = 'R+ - Mild Nudity',
}

export enum Season {
  Fall = 'fall',
  Spring = 'spring',
  Summer = 'summer',
}
