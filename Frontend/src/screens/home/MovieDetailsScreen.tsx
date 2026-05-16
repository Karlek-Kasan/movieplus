import React, { useMemo } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './MovieDetailsScreen.style';
import type { MovieDetailsScreenProps } from './MovieDetailsScreen.types';

const MovieDetailsScreen: React.FC<MovieDetailsScreenProps> = ({ navigation, route }) => {
  const insets = useSafeAreaInsets();
  const { movie } = route.params;

  const storyText = useMemo(() => {
    const release = movie.releaseDate ? `Released: ${movie.releaseDate}` : 'Released: —';
    return `For the first time in the cinematic history of ${movie.title}, our friendly hero takes on a new challenge. ${release}. More stories coming soon.`;
  }, [movie.genre, movie.releaseDate, movie.title]);

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
          {movie.title}
        </Text>
      </View>

      <Image source={{ uri: movie.image }} style={styles.poster} />

      <View style={styles.ratingRow}>
        <View style={styles.ratingPill}>
          <Text style={styles.star}>★</Text>
          <Text style={styles.ratingText}>{movie.rating.toFixed(1)}</Text>
        </View>
      </View>

      <Text style={styles.title}>{movie.title}</Text>

      <View style={styles.metaRow}>
        <Text style={styles.metaText}>{movie.releaseDate ?? '—'}</Text>
        <Text style={styles.metaDot}>•</Text>
        <Text style={styles.metaText}>{movie.genre}</Text>
      </View>

      <Text style={styles.sectionTitle}>Story line</Text>
      <Text style={styles.storyText}>{storyText}</Text>

      <Pressable
        style={styles.primaryButton}
        onPress={() => navigation.navigate('SearchResult', { query: movie.title })}
      >
        <Text style={styles.primaryButtonText}>Play</Text>
      </Pressable>

      <Pressable
        style={styles.secondaryButton}
        onPress={() => navigation.navigate('SearchResult', { query: movie.genre })}
      >
        <Text style={styles.secondaryButtonText}>More like this</Text>
      </Pressable>
    </ScrollView>
  );
};

export default React.memo(MovieDetailsScreen);

