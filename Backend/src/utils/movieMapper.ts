import type { Movie, MovieApiDto } from '../types/movie.types';

const toNumericId = (id: string): number =>
  [...id].reduce((acc, char) => acc + char.charCodeAt(0), 0);

export const toMovieApiDto = (movie: Movie): MovieApiDto => ({
  id: toNumericId(movie.id),
  title: movie.title,
  overview: movie.overview ?? '',
  posterPath: movie.image,
  releaseDate: movie.releaseDate ?? movie.year,
  voteAverage: movie.rating,
});
