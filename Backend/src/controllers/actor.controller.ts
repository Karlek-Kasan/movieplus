import type { Request, Response } from 'express';

import { actorService } from '../services/actor.service';
import { movieService } from '../services/movie.service';
import { asyncHandler } from '../utils/asyncHandler';
import { sendSuccess } from '../utils/response';

export const getActors = asyncHandler(async (req: Request, res: Response) => {
  const query = String(req.query.q ?? req.query.query ?? '');
  const results = actorService.search(query);
  sendSuccess(res, { results, count: results.length, query: query.trim() });
});

export const getActorById = asyncHandler(async (req: Request, res: Response) => {
  const id = String(req.params.id);
  sendSuccess(res, { actor: actorService.getById(id) });
});

export const getActorMovies = asyncHandler(async (req: Request, res: Response) => {
  const id = String(req.params.id);
  const results = movieService.getMoviesForActor(id);
  sendSuccess(res, { results, count: results.length, actorId: id });
});

export const searchByActor = asyncHandler(async (req: Request, res: Response) => {
  const query = String(req.query.q ?? req.query.query ?? '');
  const { actors, movies } = movieService.searchByActorName(query);
  sendSuccess(res, {
    query: query.trim(),
    actors,
    movies,
    count: movies.length,
  });
});
