import type { Actor } from './actor.types';
import type { Category, Movie } from './movie.types';

export type ApiSuccess<T> = {
  success: true;
  data: T;
};

export type ApiErrorBody = {
  success: false;
  message: string;
  statusCode: number;
};

export type PaginatedResults<T> = {
  results: T[];
  count: number;
};

export type MovieListResponse = PaginatedResults<Movie>;

export type SearchResponse = {
  query: string;
  movies: Movie[];
  actors: Actor[];
  count: number;
  isEmpty: boolean;
};

export type HomeFeedResponse = {
  featured: Movie[];
  popular: Movie[];
  categories: Category[];
  today: Movie;
  recommended: Movie[];
};
