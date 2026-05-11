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

<<<<<<< Updated upstream
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
=======
// ✅ FIX 1: Use this component properly
const DownloadScreenComponent: React.FC = () => {
  return (
    <View style={styles.placeholderScreen}>
      <Text style={styles.placeholderText}>Download</Text>
    </View>
  );
};

const TAB_ICONS: Record<string, string> = {
  Home: '⌂',
  Search: '⌕',
  Download: '↓',
  Profile: '●',
};


// ✅ FIX 2: Move icon renderer outside (no ESLint warning)
const renderTabIcon = (routeName: string, focused: boolean, color: string) => {
  return (
    <View style={[styles.iconShell, focused && styles.iconShellActive]}>
      <Text style={[styles.iconText, { color }]}>
        {TAB_ICONS[routeName]}
      </Text>
      {focused && (
        <Text style={[styles.activeLabel, { color }]}>
          {routeName}
        </Text>
      )}
    </View>
  );
};


const BottomTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: styles.tabBar,
      tabBarItemStyle: styles.tabBarItem,
      tabBarActiveTintColor: '#10D6FF',
      tabBarInactiveTintColor: '#8B90A7',

      // ✅ FIX 3: Use external function
      tabBarIcon: ({ focused, color }) =>
        renderTabIcon(route.name, focused, color),
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Search" component={SearchScreen} />

    {/* ✅ FIX 4: Correct component */}
    <Tab.Screen name="Download" component={DownloadScreenComponent} />

    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);


const styles = StyleSheet.create({
  placeholderScreen: {
>>>>>>> Stashed changes
    flex: 1,
    backgroundColor: '#141327',
    alignItems: 'center',
    justifyContent: 'center',
  },
<<<<<<< Updated upstream
  downloadText: {
    color: '#FFFFFF',
=======
  placeholderText: {
    color: '#F7F8FC',
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    shadowOpacity: 0.35,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
  },
  iconWrap: {
=======
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.32,
    shadowRadius: 14,
  },
  tabBarItem: {
    paddingVertical: 9,
  },
  iconShell: {
>>>>>>> Stashed changes
    minWidth: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
<<<<<<< Updated upstream
  iconWrapActive: {
    minWidth: 92,
=======
  iconShellActive: {
    minWidth: 96,
>>>>>>> Stashed changes
    flexDirection: 'row',
    backgroundColor: '#12384C',
    paddingHorizontal: 12,
  },
  iconText: {
<<<<<<< Updated upstream
    fontSize: 19,
=======
    fontSize: 22,
    lineHeight: 22,
    fontWeight: '500',
>>>>>>> Stashed changes
  },

  // ✅ FIX: readable label
  activeLabel: {
    fontWeight: '600',
<<<<<<< Updated upstream
    fontSize: 14,
=======
    fontSize: 10,
>>>>>>> Stashed changes
    marginLeft: 7,
  },
});

export default React.memo(BottomTabs);