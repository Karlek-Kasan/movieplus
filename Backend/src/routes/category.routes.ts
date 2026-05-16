import { Router } from 'express';

import { getCategories } from '../controllers/category.controller';

const categoryRoutes = Router();

categoryRoutes.get('/', getCategories);

export default categoryRoutes;
