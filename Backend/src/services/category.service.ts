import { categories } from '../models/category.model';
import type { Category } from '../types/movie.types';

export const categoryService = {
  getAll(): Category[] {
    return [...categories];
  },
};
