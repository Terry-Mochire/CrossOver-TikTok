import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'

import FollowingScreen from 'screens/Home/Following/FollowingScreen'
import ForYouScreen from 'screens/Home/ForYou/ForYouScreen'

import NavigationScreens from 'utils/consts/NavigationScreens'

const Tab = createMaterialTopTabNavigator()

const HomeTopTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={NavigationScreens.HomeForYouTab}
        component={ForYouScreen}
      />
      <Tab.Screen
        name={NavigationScreens.HomeFollowingTab}
        component={FollowingScreen}
      />
    </Tab.Navigator>
  )
}

export default HomeTopTabsNavigator
