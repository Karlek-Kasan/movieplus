import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';

import { styles } from './HomeScreen.style';
import type { Category, Movie } from './HomeScreen.types';



const featuredMovies: Movie[] = [
  {
    id: 'f1',
    title: 'Black Panther: Wakanda Forever',
    image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1200&auto=format&fit=crop',
    rating: 4.8,
    genre: 'Action',
    releaseDate: 'On March 2, 2022',
  },
  {
    id: 'f2',
    title: 'The Way of Water',
    image: 'https://images.unsplash.com/photo-1518674660708-0e2c0473e68e?q=80&w=1200&auto=format&fit=crop',
    rating: 4.6,
    genre: 'Sci-Fi',
    releaseDate: 'On December 16, 2022',
  },
  {
    id: 'f3',
    title: 'Dune: Part One',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1200&auto=format&fit=crop',
    rating: 4.7,
    genre: 'Adventure',
    releaseDate: 'On October 22, 2021',
  },
];

const categories: Category[] = [
  { id: 'c1', name: 'All' },
  { id: 'c2', name: 'Comedy' },
  { id: 'c3', name: 'Animation' },
  { id: 'c4', name: 'Dokumenter' },
];

const popularMovies: Movie[] = [
  {
    id: 'p1',
    title: 'Spider-Man No..',
    image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=900&auto=format&fit=crop',
    rating: 4.5,
    genre: 'Action',
  },
  {
    id: 'p2',
    title: 'Life of PI',
    image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=900&auto=format&fit=crop',
    rating: 4.5,
    genre: 'Action',
  },
  {
    id: 'p3',
    title: 'Riverdale',
    image: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=900&auto=format&fit=crop',
    rating: 4.5,
    genre: 'Action',
  },
];

const HomeScreen = () => {
  const [activeCategoryId, setActiveCategoryId] = useState('c1');
  const [activeBannerIndex, setActiveBannerIndex] = useState(0);
  const bannerWidthRef = useRef(1);

  const onBannerScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;
    const cardWidth = layoutMeasurement.width;
    bannerWidthRef.current = cardWidth;
    const index = Math.round(contentOffset.x / cardWidth);

    if (index !== activeBannerIndex) {
      setActiveBannerIndex(index);
    }
  }, [activeBannerIndex]);

  const dots = useMemo(
    () =>
      featuredMovies.map((movie, index) => (
        <View key={movie.id} style={[styles.dot, index === activeBannerIndex && styles.dotActive]} />
      )),
    [activeBannerIndex],
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.profileWrap}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop' }}
              style={styles.profileImage}
            />
            <View>
              <Text style={styles.greeting}>Hello, Smith</Text>
              <Text style={styles.subtitle}>Let’s stream your favorite movie</Text>
            </View>
          </View>
          <Pressable style={styles.favoriteButton}>
            <Text style={styles.favoriteIcon}>♥</Text>
          </Pressable>
        </View>

        <View style={styles.searchRow}>
          <Text style={styles.searchIcon}>⌕</Text>
          <TextInput placeholder="Search a title..." placeholderTextColor="#84889B" style={styles.input} />
          <View style={styles.filterDivider} />
          <Pressable style={styles.filterButton}>
            <Text style={styles.filterIcon}>☷</Text>
          </Pressable>
        </View>

        <FlatList
          data={featuredMovies}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToAlignment="start"
          decelerationRate="fast"
          pagingEnabled
          onMomentumScrollEnd={onBannerScroll}
          renderItem={({ item }) => (
            <View style={styles.carouselItem}>
              <Image source={{ uri: item.image }} style={styles.carouselImage} />
              <View style={styles.carouselOverlay} />
              <View style={styles.carouselTextWrap}>
                <Text style={styles.carouselTitle}>{item.title}</Text>
                <Text style={styles.carouselSubtitle}>{item.releaseDate}</Text>
              </View>
            </View>
          )}
        />

        <View style={styles.dotsRow}>{dots}</View>

        <Text style={styles.sectionTitle}>Categories</Text>
        <View style={styles.categoriesWrap}>
          {categories.map((item) => {
            const isActive = item.id === activeCategoryId;
            return (
              <Pressable
                key={item.id}
                style={[styles.categoryItem, styles.categoryItemWrapped, isActive && styles.categoryItemActive]}
                onPress={() => setActiveCategoryId(item.id)}
              >
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={[styles.categoryText, isActive && styles.categoryTextActive]}
                >
                  {item.name}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Most popular</Text>
          <Pressable>
            <Text style={styles.seeAll}>See All</Text>
          </Pressable>
        </View>

        <FlatList
          data={popularMovies}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.popularCard}>
              <Image source={{ uri: item.image }} style={styles.poster} />
              <View style={styles.ratingBadge}>
                <Text style={styles.star}>★</Text>
                <Text style={styles.ratingText}>{item.rating}</Text>
              </View>
              <View style={styles.cardBody}>
                <Text numberOfLines={1} style={styles.cardTitle}>
                  {item.title}
                </Text>
                <Text style={styles.cardGenre}>{item.genre}</Text>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default React.memo(HomeScreen);