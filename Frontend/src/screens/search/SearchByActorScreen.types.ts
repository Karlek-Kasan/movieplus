import type { AppNavigatorScreenProps } from '../../types/navigation.types';

export type SearchByActorScreenProps = AppNavigatorScreenProps<'SearchByActor'>;

export type SearchByActorRouteParams = SearchByActorScreenProps['route']['params'];

export type ActorItem = {
  id: string;
  name: string;
  image: string;
};

