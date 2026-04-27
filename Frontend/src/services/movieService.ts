import { request } from './api';
import type { Movie } from '../types/movieTypes';

type MovieListResponse = {
  results: Movie[];
};

export async function fetchPopularMovies(): Promise<Movie[]> {
  try {
    const data = await request<MovieListResponse>('/movies/popular');
    return data.results;
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Could not load movies';
    throw new Error(`fetchPopularMovies failed: ${message}`);
  }
}