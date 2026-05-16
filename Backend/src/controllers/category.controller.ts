import type { Request, Response } from 'express';

import { categoryService } from '../services/category.service';
import { asyncHandler } from '../utils/asyncHandler';
import { sendSuccess } from '../utils/response';

export const getCategories = asyncHandler(async (_req: Request, res: Response) => {
  const results = categoryService.getAll();
  sendSuccess(res, { results, count: results.length });
});
