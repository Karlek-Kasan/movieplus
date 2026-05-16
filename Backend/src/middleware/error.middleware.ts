import type { NextFunction, Request, Response } from 'express';

import { ApiError } from '../utils/ApiError';
import type { ApiErrorBody } from '../types/api.types';
import { env } from '../config/env';

export const errorMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  const statusCode = err instanceof ApiError ? err.statusCode : 500;
  const message =
    err instanceof ApiError
      ? err.message
      : env.nodeEnv === 'production'
        ? 'Internal server error'
        : err.message;

  const body: ApiErrorBody = {
    success: false,
    message,
    statusCode,
  };

  if (env.nodeEnv !== 'production') {
    console.error(err);
  }

  res.status(statusCode).json(body);
};
