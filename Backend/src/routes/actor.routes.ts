import { Router } from 'express';

import {
  getActorById,
  getActorMovies,
  getActors,
  searchByActor,
} from '../controllers/actor.controller';

const actorRoutes = Router();

actorRoutes.get('/search', searchByActor);
actorRoutes.get('/', getActors);
actorRoutes.get('/:id/movies', getActorMovies);
actorRoutes.get('/:id', getActorById);

export default actorRoutes;
