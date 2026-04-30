import React, { useMemo, useState } from 'react';
import {
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  Text,
  SafeAreaView,
  View,
} from 'react-native';


import { carouselWidth, styles } from '../home/Home.styles';
import type { Category, Movie } from '../home/Home.types';

type FeaturedMovie = Movie & { releaseDate: string };

const featuredMovies: FeaturedMovie[] = [
  {
    id: 'featured-1',
    title: 'Black Panther: Wakanda Forever',
    image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1200&auto=format&fit=crop',
    rating: 4.8,
    genre: 'Action',
    releaseDate: 'On March 2, 2022',
  },
  {
    id: 'featured-2',
    title: 'The Way of Water',
    image: 'https://images.unsplash.com/photo-1518674660708-0e2c0473e68e?q=80&w=1200&auto=format&fit=crop',
    rating: 4.6,
    genre: 'Sci-Fi',
    releaseDate: 'On December 16, 2022',
  },
  {
    id: 'featured-3',
    title: 'Dune: Part One',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1200&auto=format&fit=crop',
    rating: 4.7,
    genre: 'Adventure',
    releaseDate: 'On October 22, 2021',
  },
];

const categories: Category[] = [
  { id: 'all', name: 'All' },
  { id: 'comedy', name: 'Comedy' },
  { id: 'animation', name: 'Animation' },
  { id: 'documentary', name: 'Documentary' },
];

const popularMovies: Movie[] = [
  {
     id: 'popular-1',
    title: 'Spider-Man No Way Home',
    image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=900&auto=format&fit=crop',
    rating: 4.5,
    genre: 'Action',
  },
  {
    id: 'popular-2',
    title: 'The Jungle Waiting',
    image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=900&auto=format&fit=crop',
    rating: 4.5,
    genre: 'Action',
  },
  {
      id: 'popular-3',
    title: 'Riverdale',
    image: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=900&auto=format&fit=crop',
    rating: 4.5,
    genre: 'Action',
  },
];

const HomeScreen = () => {
   const [activeCategory, setActiveCategory] = useState('all');
  const [activeIndex, setActiveIndex] = useState(0);

     const onCarouselScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const nextIndex = Math.round(offsetX / carouselWidth);
    if (nextIndex !== activeIndex) {
      setActiveIndex(nextIndex);
    }
  };

   const paginationDots = useMemo(
    () =>
      featuredMovies.map((movie, index) => (
       <View key={movie.id} style={[styles.dot, index === activeIndex && styles.dotActive]} />
      )),
     [activeIndex],
  );

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={popularMovies}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        ListHeaderComponent={
          <>
            <View style={styles.header}>
               <View style={styles.profileBlock}>
                <Image
                  source={{ uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop' }}
                  style={styles.profileImage}
                />
                <View>
                    <Text style={styles.helloText}>Hello, Kasim</Text>
                  <Text style={styles.subtitle}>Let’s stream your favorite movie</Text>
                </View>
              </View>
              <Pressable style={styles.favoriteButton}>
                <Text style={styles.favoriteIcon}>♥</Text>
              </Pressable>
            </View>

            <View style={styles.searchRow}>
              <View style={styles.searchWrap}>
              <Text style={styles.icon}>⌕</Text>
              <Text style={styles.searchPlaceholder}>Search a title...</Text>
              <View style={styles.searchDivider} />
              <Pressable style={styles.filterButton}>
              <Text style={styles.icon}>☷</Text>
              </Pressable>
            </View>

            <FlatList
              data={featuredMovies}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              onMomentumScrollEnd={onCarouselScrollEnd}
              renderItem={({ item }) => (
                <View style={styles.carouselItem}>
                  <Image source={{ uri: item.image }} style={styles.carouselImage} />
                  <View style={styles.carouselOverlay} />
                  <View style={styles.carouselTextWrap}>
                    <Text style={styles.carouselTitle} numberOfLines={2}>
                      {item.title}
                    </Text>
                    <Text style={styles.carouselSubtitle}>{item.releaseDate}</Text>
                  </View>
                </View>
              )}
            />

             <View style={styles.paginationRow}>{paginationDots}</View>

            <Text style={styles.sectionTitle}>Categories</Text>
            <FlatList
              data={categories}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoriesList}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                const isActive = item.id === activeCategory;
                return (
                  <Pressable
                    onPress={() => setActiveCategory(item.id)}
                    style={[styles.categoryTab, isActive && styles.categoryTabActive]}
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
              }}
            />

           <View style={styles.rowBetween}>
              <Text style={styles.sectionTitle}>Most popular</Text>
              <Pressable>
                <Text style={styles.seeAll}>See All</Text>
              </Pressable>
            </View>
          </>
        }
        renderItem={({ item }) => (
          <View style={styles.popularCard}>
            <Image source={{ uri: item.image }} style={styles.poster} />
            <View style={styles.ratingBadge}>
              <Text style={styles.star}>★</Text>
               <Text style={styles.rating}>{item.rating}</Text>
            </View>
            <View style={styles.popularMeta}>
              <Text style={styles.popularTitle} numberOfLines={1}>
                {item.title}
              </Text>
              <Text style={styles.popularGenre}>{item.genre}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default React.memo(HomeScreen);