import type { NavigatorScreenParams } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ResetPassword: undefined;
  Verification: { email: string };
  CreatePassword: { email: string; verificationCode: string };
};

export type AppTabParamList = {
  Home: undefined;
  Search: undefined;
  Profile: undefined;
};

export type MovieDetailsMovie = {
  id: string;
  title: string;
  image: string;
  rating: number;
  genre: string;
  releaseDate?: string;
};

export type AppNavigatorParamList = {
  Tabs: NavigatorScreenParams<AppTabParamList>;
  MovieDetails: { movie: MovieDetailsMovie };
  SearchResult: { query?: string };
  SearchByActor: undefined;
  SearchBlank: undefined;
};

export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Auth: NavigatorScreenParams<AuthStackParamList>;
  App: NavigatorScreenParams<AppTabParamList>;
};

export type RootScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type AuthScreenProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;

export type AppTabScreenProps<T extends keyof AppTabParamList> =
  BottomTabScreenProps<AppTabParamList, T>;

export type AppNavigatorScreenProps<T extends keyof AppNavigatorParamList> =
  NativeStackScreenProps<AppNavigatorParamList, T>;