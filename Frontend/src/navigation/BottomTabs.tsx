import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/home/HomeScreen';
import SearchScreen from '../screens/search/SearchScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';

const Tab = createBottomTabNavigator();


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

const BottomTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: styles.tabBar,
      tabBarItemStyle: styles.tabBarItem,
      tabBarActiveTintColor: '#10D6FF',
      tabBarInactiveTintColor: '#8B90A7',
      tabBarIcon: ({ focused, color }) => (
        <View style={[styles.iconShell, focused && styles.iconShellActive]}>
          <Text style={[styles.iconText, { color }]}>{TAB_ICONS[route.name]}</Text>
          {focused && <Text style={[styles.activeLabel, { color }]}>{route.name}</Text>}
        </View>
      ),
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Search" component={SearchScreen} />
    <Tab.Screen name="Download" component={DownloadScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);




const styles = StyleSheet.create({
   placeholderScreen:{
    flex: 1,
    backgroundColor: '#101229',
    alignItems: 'center',
    justifyContent: 'center',
  },
   placeholderText: {
    color: '#F7F8FC',
    fontSize: 16,
    fontWeight: '600',
  },
  tabBar: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 22,
    height: 68,
    borderRadius: 26,
    borderTopWidth: 0,
    backgroundColor: '#1A1F3B',
    elevation: 0,
    shadowColor: '#000000',
      shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.32,
    shadowRadius: 14,
  },
   tabBarItem: {
    paddingVertical: 9,
  },
  iconShell: {
    minWidth: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
   iconShellActive: {
    minWidth: 96,
    flexDirection: 'row',
    backgroundColor: '#12384C',
    paddingHorizontal: 12,
  },
  iconText: {
      fontSize: 22,
    lineHeight: 22,
    fontWeight: '500',
  },
  activeLabel: {
    fontWeight: '600',
    fontSize: 6,
    marginLeft: 7,
  },
});

export default React.memo(BottomTabs);