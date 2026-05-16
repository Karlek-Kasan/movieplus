import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './SearchBlankScreen.style';
import type { SearchBlankScreenProps } from './SearchBlankScreen.types';

const SearchBlankScreen: React.FC<SearchBlankScreenProps> = ({ navigation }) => {
  const insets = useSafeAreaInsets();

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
        <View style={{ width: 42 }} />
      </View>

      <View style={styles.centerWrap}>
        <Text style={styles.icon}>🔎</Text>
        <Text style={styles.title}>We are sorry, we can’t find the movie</Text>
        <Text style={styles.text}>Find your movie by typing title, categories, years, etc.</Text>

        <Pressable
          style={styles.primaryButton}
          onPress={() => navigation.navigate('SearchResult', { query: 'Spider-Man' })}
        >
          <Text style={styles.primaryButtonText}>Try “Spider-Man”</Text>
        </Pressable>

        <Pressable style={styles.secondaryButton} onPress={() => navigation.goBack()}>
          <Text style={styles.secondaryButtonText}>Go back</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default React.memo(SearchBlankScreen);

