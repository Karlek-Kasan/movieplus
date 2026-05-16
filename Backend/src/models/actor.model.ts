import type { Actor } from '../types/actor.types';

export const actors: Actor[] = [
  {
    id: 'a1',
    name: 'John Wilson',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop',
    movieIds: ['p1', 'sr1'],
  },
  {
    id: 'a2',
    name: 'John Deere',
    image: 'https://images.unsplash.com/photo-1520975958225-8a0f5d2f9b4f?q=80&w=200&auto=format&fit=crop',
    movieIds: ['p2', 'sr3'],
  },
  {
    id: 'a3',
    name: 'John Cena',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    movieIds: ['p1', 'f1'],
  },
  {
    id: 'a4',
    name: 'John Stamos',
    image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=200&auto=format&fit=crop',
    movieIds: ['p3', 'sr2'],
  },
  {
    id: 'a5',
    name: 'Tom Holland',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    movieIds: ['p1', 'sr1', 't1'],
  },
];
