import { Router } from 'express';

import { unifiedSearch } from '../controllers/search.controller';

const searchRoutes = Router();

searchRoutes.get('/', unifiedSearch);

export default searchRoutes;
