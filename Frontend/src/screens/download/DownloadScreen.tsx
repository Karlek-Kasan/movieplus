import React, { useCallback } from 'react';
import { FlatList, Image, Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './DownloadScreen.style';
import type { DownloadItem } from './DownloadScreen.types';

const downloads: DownloadItem[] = [
  {
    id: 'd1',
    genre: 'Action',
    title: 'Spider-Man No Way Home',
    thumbnailUri: '',
    status: 'downloading',
    progressLabel: '1.25 of 1.78 GB | 75%',
  },
  {
    id: 'd2',
    genre: 'Action',
    title: 'Spider-Man No Way Home',
    thumbnailUri:
      'https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=400&auto=format&fit=crop',
    status: 'completed',
    metaLabel: 'Movie | 1.78 GB',
  },
];

const DownloadScreen = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const onBack = useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }, [navigation]);

  const renderItem = useCallback(
    ({ item }: { item: DownloadItem }) => (
      <View style={styles.card}>
        <View style={styles.thumbWrap}>
          {item.status === 'downloading' ? (
            <View style={styles.thumbDownloading}>
              <View style={styles.progressRingTrack} />
              <View style={styles.progressRingFill} />
              <Text style={styles.pauseIcon}>⏸</Text>
            </View>
          ) : (
            <Image source={{ uri: item.thumbnailUri }} style={styles.thumbImage} />
          )}
        </View>
        <View style={styles.cardBody}>
          <Text style={styles.genre}>{item.genre}</Text>
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
          <View style={styles.metaRow}>
            {item.status === 'downloading' ? (
              <>
                <Text style={styles.metaIcon}>↓</Text>
                <Text style={styles.metaText}>{item.progressLabel}</Text>
              </>
            ) : (
              <Text style={styles.metaText}>{item.metaLabel}</Text>
            )}
          </View>
        </View>
      </View>
    ),
    [],
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Pressable style={styles.backButton} onPress={onBack} hitSlop={8}>
            <Text style={styles.backIcon}>‹</Text>
          </Pressable>
          <Text style={styles.headerTitle}>Download</Text>
        </View>

        <FlatList
          data={downloads}
          keyExtractor={(i) => i.id}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default React.memo(DownloadScreen);
