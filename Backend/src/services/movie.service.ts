import { actors } from '../models/actor.model';
import {
  featuredMovieIds,
  movies,
  popularMovieIds,
  recommendedMovieIds,
  todayMovieId,
} from '../models/movie.model';
import { categories } from '../models/category.model';
import type { HomeFeedResponse, SearchResponse } from '../types/api.types';
import type { Movie } from '../types/movie.types';
import { ApiError } from '../utils/ApiError';

const normalize = (value: string): string => value.trim().toLowerCase();

const getByIds = (ids: string[]): Movie[] =>
  ids
    .map((id) => movies.find((movie) => movie.id === id))
    .filter((movie): movie is Movie => Boolean(movie));

export const movieService = {
  getAll(): Movie[] {
    return [...movies];
  },

  getById(id: string): Movie {
    const movie = movies.find((item) => item.id === id);
    if (!movie) {
      throw new ApiError(404, `Movie with id "${id}" not found`);
    }
    return movie;
  },

  getFeatured(): Movie[] {
    return getByIds(featuredMovieIds);
  },

  getPopular(): Movie[] {
    return getByIds(popularMovieIds);
  },

  getRecommended(): Movie[] {
    return getByIds(recommendedMovieIds);
  },

  getToday(): Movie {
    return this.getById(todayMovieId);
  },

  getCategories() {
    return categories;
  },

  getHomeFeed(): HomeFeedResponse {
    return {
      featured: this.getFeatured(),
      popular: this.getPopular(),
      categories: this.getCategories(),
      today: this.getToday(),
      recommended: this.getRecommended(),
    };
  },

  searchMovies(query: string): Movie[] {
    const q = normalize(query);
    if (!q) {
      return this.getAll();
    }

    return movies.filter((movie) => {
      const titleMatch = movie.title.toLowerCase().includes(q);
      const genreMatch = movie.genre.toLowerCase().includes(q);
      const genresMatch = movie.genres?.some((g) => g.toLowerCase().includes(q)) ?? false;
      const categoryMatch = categories.some(
        (c) => c.name.toLowerCase().includes(q) && movie.genres?.includes(c.name),
      );
      return titleMatch || genreMatch || genresMatch || categoryMatch;
    });
  },

  searchByActorName(actorQuery: string): { actors: typeof actors; movies: Movie[] } {
    const q = normalize(actorQuery);
    const matchedActors = q
      ? actors.filter((actor) => actor.name.toLowerCase().includes(q))
      : actors;

    const movieIdSet = new Set<string>();
    matchedActors.forEach((actor) => {
      actor.movieIds.forEach((id) => movieIdSet.add(id));
    });

    const relatedMovies = getByIds([...movieIdSet]);
    return { actors: matchedActors, movies: relatedMovies };
  },

  unifiedSearch(query: string): SearchResponse {
    const trimmed = query.trim();
    const movieResults = this.searchMovies(trimmed);
    const { actors: actorResults } = this.searchByActorName(trimmed);

    const isEmpty = movieResults.length === 0 && actorResults.length === 0;

    return {
      query: trimmed,
      movies: movieResults,
      actors: actorResults,
      count: movieResults.length + actorResults.length,
      isEmpty,
    };
  },

  getMoviesForActor(actorId: string): Movie[] {
    const actor = actors.find((item) => item.id === actorId);
    if (!actor) {
      throw new ApiError(404, `Actor with id "${actorId}" not found`);
    }
    return getByIds(actor.movieIds);
  },
};
