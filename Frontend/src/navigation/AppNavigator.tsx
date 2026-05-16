
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import MovieDetailsScreen from '../screens/home/MovieDetailsScreen';
import SearchResultScreen from '../screens/search/SearchResultScreen';
import SearchByActorScreen from '../screens/search/SearchByActorScreen';
import SearchBlankScreen from '../screens/search/SearchBlankScreen';
import type { AppNavigatorParamList } from '../types/navigation.types';

const Stack = createNativeStackNavigator<AppNavigatorParamList>();

const AppNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Tabs" component={BottomTabs} />
    <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
    <Stack.Screen name="SearchResult" component={SearchResultScreen} />
    <Stack.Screen name="SearchByActor" component={SearchByActorScreen} />
    <Stack.Screen name="SearchBlank" component={SearchBlankScreen} />
  </Stack.Navigator>
);

export default React.memo(AppNavigator);