/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from '@rneui/themed'
import React from 'react'
import { StatusBar, useColorScheme, View } from 'react-native'

import BottomTabsNavigator from 'navigation/BottomTabs/BottomTabsNavigator'

import commonColors from 'themes/colors/common'
import theme from 'themes/theme'

function App(): React.ReactElement {
  const colorScheme = useColorScheme()
  const isDarkMode = colorScheme === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? commonColors.black : commonColors.white,
    flex: 1,
  }

  return (
    <View style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ThemeProvider theme={{ ...theme, mode: isDarkMode ? 'dark' : 'light' }}>
        <NavigationContainer>
          <BottomTabsNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </View>
  )
}

export default App
