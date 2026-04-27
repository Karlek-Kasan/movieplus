export type Movie = {
  id: string;
  title: string;
  image: string;
  rating: number;
  genre: string;
  releaseDate?: string;
};

export type Category = {
  id: string;
  name: string;
};