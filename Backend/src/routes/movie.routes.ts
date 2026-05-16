import { Router } from 'express';

import {
  getFeaturedMovies,
  getHomeFeed,
  getMovieById,
  getPopularMovies,
  getRecommendedMovies,
  getTodayMovie,
  searchMovies,
} from '../controllers/movie.controller';

const movieRoutes = Router();

movieRoutes.get('/popular', getPopularMovies);
movieRoutes.get('/featured', getFeaturedMovies);
movieRoutes.get('/recommended', getRecommendedMovies);
movieRoutes.get('/today', getTodayMovie);
movieRoutes.get('/home', getHomeFeed);
movieRoutes.get('/search', searchMovies);
movieRoutes.get('/:id', getMovieById);

export default movieRoutes;
