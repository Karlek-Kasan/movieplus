export type Category = {
  id: string;
  name: string;
};

export type SearchMovie = {
  id: string;
  title: string;
  image: string;
  rating: number;
  genre: string;
};

export type TodayMovie = {
  id: string;
  title: string;
  image: string;
  rating: number;
  year: string;
  durationMinutes: number;
  certification: string;
  genres: string[];
  badge: string;
};

