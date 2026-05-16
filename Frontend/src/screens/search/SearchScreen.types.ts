import type { CompositeNavigationProp } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type {
  AppNavigatorParamList,
  AppTabParamList,
  MovieDetailsMovie,
} from '../../types/navigation.types';

export type SearchScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<AppTabParamList, 'Search'>,
  NativeStackNavigationProp<AppNavigatorParamList>
>;

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

export const isSearchMovie = (movie: SearchMovie | TodayMovie): movie is SearchMovie =>
  'genre' in movie;

export const toMovieDetailsParams = (movie: SearchMovie | TodayMovie): MovieDetailsMovie => ({
  id: movie.id,
  title: movie.title,
  image: movie.image,
  rating: movie.rating,
  genre: isSearchMovie(movie) ? movie.genre : (movie.genres[0] ?? 'Movie'),
  releaseDate: isSearchMovie(movie) ? undefined : movie.year,
});

