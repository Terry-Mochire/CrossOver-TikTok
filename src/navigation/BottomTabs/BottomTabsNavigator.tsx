import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from '@rneui/themed'
import React from 'react'

import ActivityScreen from 'screens/Activity/ActivityScreen'
import BookmarksScreen from 'screens/Bookmarks/BookmarksScreen'
import DiscoverScreen from 'screens/Discover/DiscoverScreen'
import HomeScreen from 'screens/Home/HomeScreen'
import ProfileScreen from 'screens/Profile/ProfileScreen'

import { headerlessScreenOptions } from 'utils/consts/NavigationOptions'
import NavigationScreens from 'utils/consts/NavigationScreens'

import BottomTabsParamList from 'models/navigation/BottomTabsTypes'

const Tab = createBottomTabNavigator<BottomTabsParamList>()

const BottomTabsNavigator = () => {
  const { theme } = useTheme()
  return (
    <Tab.Navigator
      screenOptions={{
        ...headerlessScreenOptions,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.primaryInactive,
        tabBarStyle: { backgroundColor: theme.colors.background },
      }}>
      <Tab.Screen
        name={NavigationScreens.HomeScreen}
        component={HomeScreen}
        options={
          {
            // tabBarIcon: icons.Home,
          }
        }
      />
      <Tab.Screen
        name={NavigationScreens.DiscoverScreen}
        component={DiscoverScreen}
        options={
          {
            // tabBarIcon: icons.Discover,
          }
        }
      />
      <Tab.Screen
        name={NavigationScreens.ActivityScreen}
        component={ActivityScreen}
        options={
          {
            // tabBarIcon: icons.Activity,
          }
        }
      />
      <Tab.Screen
        name={NavigationScreens.BookmarksScreen}
        component={BookmarksScreen}
        options={
          {
            // tabBarIcon: icons.Bookmarks,
          }
        }
      />
      <Tab.Screen
        name={NavigationScreens.ProfileScreen}
        component={ProfileScreen}
        options={
          {
            // tabBarIcon: icons.Profile,
          }
        }
      />
    </Tab.Navigator>
  )
}

export default BottomTabsNavigator
