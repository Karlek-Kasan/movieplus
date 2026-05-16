import React, { useMemo } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './SearchResultScreen.style';
import type { SearchResultScreenProps } from './SearchResultScreen.types';
import type { MovieDetailsMovie } from '../../types/navigation.types';

const demoMovies: MovieDetailsMovie[] = [
  {
    id: 'sr1',
    title: 'Spider-Man No Way...',
    image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=900&auto=format&fit=crop',
    rating: 4.5,
    genre: 'Action',
    releaseDate: '2021',
  },
  {
    id: 'sr2',
    title: 'Riverdale',
    image: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=900&auto=format&fit=crop',
    rating: 4.5,
    genre: 'Action',
    releaseDate: '2021',
  },
  {
    id: 'sr3',
    title: 'Life of PI',
    image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=900&auto=format&fit=crop',
    rating: 4.5,
    genre: 'Action',
    releaseDate: '2021',
  },
  {
    id: 'sr4',
    title: 'The Jungle Wa..',
    image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=900&auto=format&fit=crop',
    rating: 4.5,
    genre: 'Action',
    releaseDate: '2021',
  },
  {
    id: 'sr5',
    title: 'Black Panther: Wakanda Forever',
    image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1200&auto=format&fit=crop',
    rating: 4.8,
    genre: 'Action',
    releaseDate: '2022',
  },
];

const SearchResultScreen: React.FC<SearchResultScreenProps> = ({ navigation, route }) => {
  const insets = useSafeAreaInsets();
  const query = route.params?.query ?? '';

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return demoMovies;
    return demoMovies.filter((m) => {
      const titleMatch = m.title.toLowerCase().includes(q);
      const genreMatch = m.genre.toLowerCase().includes(q);
      return titleMatch || genreMatch;
    });
  }, [query]);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[styles.contentContainer, { paddingTop: insets.top + 6 }]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.topBar}>
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>←</Text>
        </Pressable>
        <Text style={styles.topTitle} numberOfLines={1}>
          Search results
        </Text>
        <Pressable style={styles.actionButton} onPress={() => navigation.navigate('SearchByActor')}>
          <Text style={styles.actionButtonText}>By actor</Text>
        </Pressable>
      </View>

      {!!query.trim() && <Text style={styles.queryText}>“{query}”</Text>}
      <Text style={styles.countText}>{results.length} results</Text>

      {results.length === 0 ? (
        <View style={styles.emptyWrap}>
          <Text style={styles.emptyTitle}>No movies found</Text>
          <Text style={styles.emptyText}>Try a different keyword or browse by actor.</Text>
        </View>
      ) : (
        results.map((movie) => (
          <Pressable
            key={movie.id}
            style={styles.card}
            onPress={() => navigation.navigate('MovieDetails', { movie })}
          >
            <Image source={{ uri: movie.image }} style={styles.poster} />
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>{movie.title}</Text>
              <View style={styles.metaRow}>
                <Text style={styles.genreText}>{movie.genre}</Text>
                <View style={styles.ratingPill}>
                  <Text style={styles.star}>★</Text>
                  <Text style={styles.ratingText}>{movie.rating.toFixed(1)}</Text>
                </View>
              </View>
            </View>
          </Pressable>
        ))
      )}
    </ScrollView>
  );
};

export default React.memo(SearchResultScreen);

