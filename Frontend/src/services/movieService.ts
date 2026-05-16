import { request } from './api';
import type { Movie } from '../types/movieTypes';
import type { MovieDetailsMovie } from '../types/navigation.types';

type ApiList<T> = {
  results: T[];
  count?: number;
};

type ApiItem<T> = {
  movie: T;
};

type HomeFeed = {
  featured: MovieDetailsMovie[];
  popular: MovieDetailsMovie[];
  categories: { id: string; name: string }[];
  today: MovieDetailsMovie;
  recommended: MovieDetailsMovie[];
};

type SearchPayload = {
  query: string;
  movies: MovieDetailsMovie[];
  actors: { id: string; name: string; image: string }[];
  count: number;
  isEmpty: boolean;
};

export async function fetchPopularMovies(): Promise<Movie[]> {
  try {
    const data = await request<ApiList<Movie>>('/movies/popular');
    return data.results;
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Could not load movies';
    throw new Error(`fetchPopularMovies failed: ${message}`);
  }
}

export async function fetchHomeFeed(): Promise<HomeFeed> {
  return request<HomeFeed>('/movies/home');
}

export async function fetchMovieById(id: string): Promise<MovieDetailsMovie> {
  const data = await request<ApiItem<MovieDetailsMovie>>(`/movies/${id}`);
  return data.movie;
}

export async function searchMovies(query: string): Promise<MovieDetailsMovie[]> {
  const data = await request<ApiList<MovieDetailsMovie>>(
    `/movies/search?q=${encodeURIComponent(query)}`,
  );
  return data.results;
}

export async function searchActors(query: string) {
  const data = await request<ApiList<{ id: string; name: string; image: string }>>(
    `/actors?q=${encodeURIComponent(query)}`,
  );
  return data.results;
}

export async function searchByActor(query: string) {
  return request<{
    query: string;
    actors: { id: string; name: string; image: string }[];
    movies: MovieDetailsMovie[];
    count: number;
  }>(`/actors/search?q=${encodeURIComponent(query)}`);
}

export async function unifiedSearch(query: string): Promise<SearchPayload> {
  return request<SearchPayload>(`/search?q=${encodeURIComponent(query)}`);
}
