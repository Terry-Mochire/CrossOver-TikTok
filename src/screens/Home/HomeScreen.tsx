import React from 'react'

import ScreenContainer from 'containers/ScreenContainer/ScreenContainer'
import HomeTopTabsNavigator from 'navigation/BottomTabs/Home/HomeTopTabsNavigator'

import useCommonStyles from 'themes/styles/common'

const HomeScreen = () => {
  const commonStyles = useCommonStyles()
  return (
    <ScreenContainer
      safeAreaInsets={['top']}
      containerStyle={commonStyles.flexContainer}>
      <HomeTopTabsNavigator />
    </ScreenContainer>
  )
}

export default HomeScreen
