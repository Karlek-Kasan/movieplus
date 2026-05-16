import React, { useMemo, useState } from 'react';
import { Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './SearchByActorScreen.style';
import type { SearchByActorScreenProps } from './SearchByActorScreen.types';
import type { ActorItem } from './SearchByActorScreen.types';

const actors: ActorItem[] = [
  {
    id: 'a1',
    name: 'John Wilson',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 'a2',
    name: 'John Deere',
    image: 'https://images.unsplash.com/photo-1520975958225-8a0f5d2f9b4f?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 'a3',
    name: 'John Cena',
    image: 'https://images.unsplash.com/photo-1589156280085-8b5a1f1f1f1f?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 'a4',
    name: 'John Stamos',
    image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=200&auto=format&fit=crop',
  },
];

const SearchByActorScreen: React.FC<SearchByActorScreenProps> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actors;
    return actors.filter((a) => a.name.toLowerCase().includes(q));
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
        <Text style={styles.topTitle}>Search by actor</Text>
        <View style={{ width: 42 }} />
      </View>

      <Text style={styles.helperText}>Tap an actor below to see prototype results.</Text>

      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Type actor name..."
        placeholderTextColor="#7E839B"
        style={styles.input}
        onSubmitEditing={() => navigation.navigate('SearchResult', { query: query.trim() || 'John' })}
      />

      <Text style={styles.sectionTitle}>Actors</Text>

      {filtered.length === 0 ? (
        <View style={styles.emptyWrap}>
          <Text style={styles.emptyTitle}>No actors found</Text>
          <Text style={styles.emptyText}>Try a different name.</Text>
        </View>
      ) : (
        <View style={styles.actorRow}>
          {filtered.map((actor) => (
            <Pressable
              key={actor.id}
              style={styles.actorPill}
              onPress={() => navigation.navigate('SearchResult', { query: actor.name })}
            >
              <Image source={{ uri: actor.image }} style={styles.actorImage} />
              <Text style={styles.actorName}>{actor.name}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default React.memo(SearchByActorScreen);

