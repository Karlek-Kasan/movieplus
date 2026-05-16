import { Router } from 'express';

import actorRoutes from './actor.routes';
import categoryRoutes from './category.routes';
import movieRoutes from './movie.routes';
import searchRoutes from './search.routes';

const apiRouter = Router();

apiRouter.get('/health', (_req, res) => {
  res.json({ success: true, message: 'MoviePlusPro API is running' });
});

apiRouter.use('/movies', movieRoutes);
apiRouter.use('/actors', actorRoutes);
apiRouter.use('/categories', categoryRoutes);
apiRouter.use('/search', searchRoutes);

export default apiRouter;
