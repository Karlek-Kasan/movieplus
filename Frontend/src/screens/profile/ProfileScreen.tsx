import React, { useCallback, useMemo } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './ProfileScreen.style';
import type { ProfileUser, SettingSection } from './ProfileScreen.types';

const user: ProfileUser = {
  name: 'Tiffany',
  email: 'Tiffanyjearsey@gmail.com',
  avatarUri:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
};

const sections: SettingSection[] = [
  {
    id: 'account',
    title: 'Account',
    items: [
      { id: 'member', label: 'Member', iconChar: '👤' },
      { id: 'password', label: 'Change Password', iconChar: '🔒' },
    ],
  },
  {
    id: 'general',
    title: 'General',
    items: [
      { id: 'notif', label: 'Notification', iconChar: '🔔' },
      { id: 'lang', label: 'Language', iconChar: '🌐' },
      { id: 'country', label: 'Country', iconChar: '📍' },
      { id: 'cache', label: 'Clear Cache', iconChar: '🗑' },
    ],
  },
  {
    id: 'more',
    title: 'More',
    items: [
      { id: 'legal', label: 'Legal and Policies', iconChar: '📄' },
      { id: 'help', label: 'Help & Feedback', iconChar: '💬' },
      { id: 'about', label: 'About Us', iconChar: 'ℹ️' },
    ],
  },
];

const ProfileScreen = () => {
  const insets = useSafeAreaInsets();

  const onLogout = useCallback(() => {
    // Wire to auth when ready
  }, []);

  const sectionNodes = useMemo(
    () =>
      sections.map((section) => (
        <View key={section.id}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          <View style={styles.sectionCard}>
            {section.items.map((item, index) => (
              <View key={item.id}>
                {index > 0 ? <View style={styles.rowDivider} /> : null}
                <Pressable style={styles.row} android_ripple={{ color: 'rgba(255,255,255,0.08)' }}>
                  <View style={styles.rowIconCircle}>
                    <Text style={styles.rowIconText}>{item.iconChar}</Text>
                  </View>
                  <Text style={styles.rowLabel}>{item.label}</Text>
                  <Text style={styles.rowChevron}>›</Text>
                </Pressable>
              </View>
            ))}
          </View>
        </View>
      )),
    [],
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.screenTitle}>Profile</Text>

        <View style={styles.profileCard}>
          <Image source={{ uri: user.avatarUri }} style={styles.avatar} />
          <View style={styles.profileTextBlock}>
            <Text style={styles.profileName}>{user.name}</Text>
            <Text style={styles.profileEmail}>{user.email}</Text>
          </View>
          <Pressable style={styles.editButton} hitSlop={8}>
            <Text style={styles.editIcon}>✎</Text>
          </Pressable>
        </View>

        <View style={styles.premiumOuter}>
          <View style={styles.premiumGradientTop} />
          <View style={styles.premiumGradientBottom} />
          <View style={styles.premiumInner}>
            <View style={styles.premiumIconWrap}>
              <Text style={styles.premiumIcon}>🏅</Text>
            </View>
            <View style={styles.premiumTextBlock}>
              <Text style={styles.premiumTitle}>Premium Member</Text>
              <Text style={styles.premiumSubtitle}>
                New movies are coming for you, Download Now!
              </Text>
            </View>
          </View>
        </View>

        {sectionNodes}

        <Pressable style={styles.logoutButton} onPress={onLogout}>
          <Text style={styles.logoutText}>Log Out</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default React.memo(ProfileScreen);
