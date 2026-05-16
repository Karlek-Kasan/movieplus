import type { AppNavigatorScreenProps } from '../../types/navigation.types';
import type { MovieDetailsMovie } from '../../types/navigation.types';

export type MovieDetailsScreenProps = AppNavigatorScreenProps<'MovieDetails'>;

export type MovieDetailsRouteParams = MovieDetailsScreenProps['route']['params'];

export type MovieDetailsPropsMovie = MovieDetailsMovie;

