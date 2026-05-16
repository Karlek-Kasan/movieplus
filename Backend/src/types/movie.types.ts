export type MovieBadge = 'Premium' | 'Free';

export type MediaType = 'Movie' | 'Series';

export type Movie = {
  id: string;
  title: string;
  image: string;
  rating: number;
  genre: string;
  releaseDate?: string;
  year?: string;
  durationMinutes?: number;
  certification?: string;
  genres?: string[];
  badge?: MovieBadge;
  mediaType?: MediaType;
  overview?: string;
  cast?: string[];
  actorIds?: string[];
};

/** Shape used by Frontend `movieService` / `movieTypes.ts` */
export type MovieApiDto = {
  id: number;
  title: string;
  overview: string;
  posterPath?: string;
  releaseDate?: string;
  voteAverage?: number;
};

export type Category = {
  id: string;
  name: string;
};
