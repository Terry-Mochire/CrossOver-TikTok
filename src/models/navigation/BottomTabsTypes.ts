import { ParamListBase } from '@react-navigation/native'

import NavigationScreens from 'utils/consts/NavigationScreens'

interface BottomTabsParamList extends ParamListBase {
  [NavigationScreens.HomeScreen]: undefined
  [NavigationScreens.DiscoverScreen]: undefined
  [NavigationScreens.ActivityScreen]: undefined
  [NavigationScreens.BookmarksScreen]: undefined
  [NavigationScreens.ProfileScreen]: undefined
}

export default BottomTabsParamList
