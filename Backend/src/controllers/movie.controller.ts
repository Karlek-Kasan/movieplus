import type { Request, Response } from 'express';

import { movieService } from '../services/movie.service';
import { asyncHandler } from '../utils/asyncHandler';
import { sendSuccess } from '../utils/response';
import { toMovieApiDto } from '../utils/movieMapper';

export const getPopularMovies = asyncHandler(async (_req: Request, res: Response) => {
  const movies = movieService.getPopular();
  sendSuccess(res, {
    results: movies.map(toMovieApiDto),
  });
});

export const getFeaturedMovies = asyncHandler(async (_req: Request, res: Response) => {
  const movies = movieService.getFeatured();
  sendSuccess(res, { results: movies, count: movies.length });
});

export const getRecommendedMovies = asyncHandler(async (_req: Request, res: Response) => {
  const movies = movieService.getRecommended();
  sendSuccess(res, { results: movies, count: movies.length });
});

export const getTodayMovie = asyncHandler(async (_req: Request, res: Response) => {
  sendSuccess(res, { movie: movieService.getToday() });
});

export const getHomeFeed = asyncHandler(async (_req: Request, res: Response) => {
  sendSuccess(res, movieService.getHomeFeed());
});

export const getMovieById = asyncHandler(async (req: Request, res: Response) => {
  const id = String(req.params.id);
  sendSuccess(res, { movie: movieService.getById(id) });
});

export const searchMovies = asyncHandler(async (req: Request, res: Response) => {
  const query = String(req.query.q ?? req.query.query ?? '');
  const results = movieService.searchMovies(query);
  sendSuccess(res, { results, count: results.length, query: query.trim() });
});
