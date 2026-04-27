import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/home/HomeScreen';
import SearchScreen from '../screens/search/SearchScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';

const Tab = createBottomTabNavigator();

const DownloadScreen = React.memo(() => (
  <View style={styles.downloadScreen}>
    <Text style={styles.downloadText}>Download Screen</Text>
  </View>
));

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#00D2FF',
        tabBarInactiveTintColor: '#8E92A8',
        tabBarIcon: ({ focused, color }) => {
          const iconText: Record<string, string> = {
            Home: '⌂',
            Search: '⌕',
            Download: '↓',
            Profile: '●',
          };

          return (
            <View style={[styles.iconWrap, focused && styles.iconWrapActive]}>
              <Text style={[styles.iconText, { color }]}>{iconText[route.name]}</Text>
              {focused ? <Text style={[styles.activeLabel, { color }]}>{route.name}</Text> : null}
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Download" component={DownloadScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  downloadScreen: {
    flex: 1,
    backgroundColor: '#141327',
    alignItems: 'center',
    justifyContent: 'center',
  },
  downloadText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  tabBar: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 22,
    borderRadius: 22,
    height: 66,
    backgroundColor: '#1D1F33',
    borderTopWidth: 0,
    elevation: 0,
    shadowColor: '#000000',
    shadowOpacity: 0.35,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
  },
  iconWrap: {
    minWidth: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapActive: {
    minWidth: 92,
    flexDirection: 'row',
    backgroundColor: '#12384C',
    paddingHorizontal: 12,
  },
  iconText: {
    fontSize: 19,
  },
  activeLabel: {
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 7,
  },
});

export default React.memo(BottomTabs);