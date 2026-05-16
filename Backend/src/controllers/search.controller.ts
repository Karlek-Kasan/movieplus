import type { Request, Response } from 'express';

import { movieService } from '../services/movie.service';
import { asyncHandler } from '../utils/asyncHandler';
import { sendSuccess } from '../utils/response';

export const unifiedSearch = asyncHandler(async (req: Request, res: Response) => {
  const query = String(req.query.q ?? req.query.query ?? '');
  const data = movieService.unifiedSearch(query);
  sendSuccess(res, data);
});
