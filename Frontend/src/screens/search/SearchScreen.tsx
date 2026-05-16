<<<<<<< Updated upstream
// src/screens/search/SearchScreen.tsx
import React from 'react';
import Screen from '../../components/common/Screen';

const SearchScreen = () => {
 return <Screen title="Search Screen" />;
=======
import React, { useCallback, useMemo, useState } from 'react';
import { FlatList, Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './SearchScreen.style';
import type { Category, SearchMovie, TodayMovie } from './SearchScreen.types';
import {
  toMovieDetailsParams,
  type SearchScreenNavigationProp,
} from './SearchScreen.types';

const categories: Category[] = [
  { id: 'c1', name: 'All' },
  { id: 'c2', name: 'Comedy' },
  { id: 'c3', name: 'Animation' },
  { id: 'c4', name: 'Dokumenter' },
];

const today: TodayMovie = {
  id: 't1',
  title: 'Spider-Man No Way...',
  image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=900&auto=format&fit=crop',
  rating: 4.5,
  year: '2021',
  durationMinutes: 148,
  certification: 'PG-13',
  genres: ['Action', 'Movie'],
  badge: 'Premium',
};

const recommended: SearchMovie[] = [
  {
    id: 'r1',
    title: 'The Jungle Wa..',
    image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=900&auto=format&fit=crop',
    rating: 4.5,
    genre: 'Action',
  },
  {
    id: 'r2',
    title: 'Life of PI',
    image: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=900&auto=format&fit=crop',
    rating: 4.5,
    genre: 'Action',
  },
  {
    id: 'r3',
    title: 'Documentary',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=900&auto=format&fit=crop',
    rating: 4.5,
    genre: 'Action',
  },
];

const SearchScreen = () => {
  const navigation = useNavigation<SearchScreenNavigationProp>();
  const [activeCategoryId, setActiveCategoryId] = useState('c1');
  const [query, setQuery] = useState('');

  const onSearchPress = useCallback(() => {
    const q = query.trim();
    if (!q) {
      navigation.navigate('SearchBlank');
      return;
    }
    navigation.navigate('SearchResult', { query: q });
  }, [navigation, query]);

  const goToMovieDetails = useCallback(
    (movie: SearchMovie | TodayMovie) => {
      navigation.navigate('MovieDetails', { movie: toMovieDetailsParams(movie) });
    },
    [navigation],
  );

  const goToActorSearch = useCallback(() => navigation.navigate('SearchByActor'), [navigation]);

  const filteredRecommended = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return recommended;
    return recommended.filter((m) => m.title.toLowerCase().includes(q));
  }, [query]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.searchBar}>
          <Pressable onPress={onSearchPress}>
            <Text style={styles.searchIcon}>⌕</Text>
          </Pressable>
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Type title, categories, years, etc"
            placeholderTextColor="#7E839B"
            style={styles.searchInput}
            onSubmitEditing={onSearchPress}
          />

          <Pressable onPress={goToActorSearch}>
            <Text style={styles.actorLink}>Actor</Text>
          </Pressable>
        </View>

        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesRow}
          renderItem={({ item }) => {
            const isActive = item.id === activeCategoryId;
            return (
              <Pressable
                style={[styles.categoryChip, isActive && styles.categoryChipActive]}
                onPress={() => {
                  setActiveCategoryId(item.id);
                  setQuery(item.name);
                  navigation.navigate('SearchResult', { query: item.name });
                }}
              >
                <Text style={[styles.categoryChipText, isActive && styles.categoryChipTextActive]}>{item.name}</Text>
              </Pressable>
            );
          }}
        />

        <Text style={styles.sectionTitle}>Today</Text>
        <Pressable style={styles.todayCard} onPress={() => goToMovieDetails(today)}>
          <Image source={{ uri: today.image }} style={styles.todayPoster} />
          <View style={styles.todayBody}>
            <View style={styles.todayBadgeRow}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{today.badge}</Text>
              </View>
              <View style={styles.todayRatingPill}>
                <Text style={styles.todayStar}>★</Text>
                <Text style={styles.todayRatingText}>{today.rating}</Text>
              </View>
            </View>

            <Text numberOfLines={1} style={styles.todayTitle}>
              {today.title}
            </Text>

            <View style={styles.metaRow}>
              <Text style={styles.metaText}>🗓 {today.year}</Text>
              <Text style={styles.metaDot}>•</Text>
              <Text style={styles.metaText}>⏱ {today.durationMinutes} Minutes</Text>
              <Text style={styles.metaDot}>•</Text>
              <Text style={styles.certPill}>{today.certification}</Text>
            </View>

            <Text style={styles.genresText}>{today.genres.join('  |  ')}</Text>
          </View>
        </Pressable>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recommend for you</Text>
          <Pressable onPress={onSearchPress}>
            <Text style={styles.seeAll}>See All</Text>
          </Pressable>
        </View>

        <FlatList
          data={filteredRecommended}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.recommendRow}
          renderItem={({ item }) => (
            <Pressable style={styles.recommendCard} onPress={() => goToMovieDetails(item)}>
              <Image source={{ uri: item.image }} style={styles.recommendPoster} />
              <View style={styles.recommendRating}>
                <Text style={styles.recommendStar}>★</Text>
                <Text style={styles.recommendRatingText}>{item.rating}</Text>
              </View>
              <View style={styles.recommendBody}>
                <Text numberOfLines={1} style={styles.recommendTitle}>
                  {item.title}
                </Text>
                <Text style={styles.recommendGenre}>{item.genre}</Text>
              </View>
            </Pressable>
          )}
        />
      </ScrollView>
    </View>
  );
>>>>>>> Stashed changes
};

export default React.memo(SearchScreen);