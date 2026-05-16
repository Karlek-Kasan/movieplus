import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

import { env } from './config/env';
import { errorMiddleware } from './middleware/error.middleware';
import { notFoundMiddleware } from './middleware/notFound.middleware';
import { requestLogger } from './middleware/requestLogger.middleware';
import apiRouter from './routes';

export const createApp = () => {
  const app = express();

  app.use(helmet());
  app.use(cors({ origin: env.corsOrigin }));
  app.use(express.json());
  app.use(requestLogger);

  app.use(env.apiPrefix, apiRouter);

  app.use(notFoundMiddleware);
  app.use(errorMiddleware);

  return app;
};
