import { actors } from '../models/actor.model';
import type { Actor } from '../types/actor.types';
import { ApiError } from '../utils/ApiError';

const normalize = (value: string): string => value.trim().toLowerCase();

export const actorService = {
  getAll(): Actor[] {
    return [...actors];
  },

  getById(id: string): Actor {
    const actor = actors.find((item) => item.id === id);
    if (!actor) {
      throw new ApiError(404, `Actor with id "${id}" not found`);
    }
    return actor;
  },

  search(query: string): Actor[] {
    const q = normalize(query);
    if (!q) {
      return this.getAll();
    }
    return actors.filter((actor) => actor.name.toLowerCase().includes(q));
  },
};
