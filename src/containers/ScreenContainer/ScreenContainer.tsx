import React, { PropsWithChildren } from 'react'
import { SafeAreaView, StyleSheet, View, ViewStyle } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import useScreenContainerStyles from './ScreenContainer.styles'

import useCommonStyles from 'themes/styles/common'

type Insets = 'top' | 'bottom' | 'right' | 'left'

interface ScreenContainerProps extends PropsWithChildren {
  isSafeArea?: boolean
  containerStyle?: ViewStyle
  safeAreaInsets?: Insets | Insets[]
}

const ScreenContainer = ({
  isSafeArea,
  safeAreaInsets,
  children,
  containerStyle,
}: ScreenContainerProps) => {
  const commonStyles = useCommonStyles()
  const insets = useSafeAreaInsets()
  const styleProps = {
    insets:
      !isSafeArea && safeAreaInsets && typeof safeAreaInsets !== 'string'
        ? Object.fromEntries(
            safeAreaInsets.map(value => {
              return [
                `padding${value[0].toUpperCase()}${value.substring(1)}`,
                insets[value],
              ]
            })
          )
        : {},
  }

  const styles = useScreenContainerStyles(styleProps)
  const Container = isSafeArea ? SafeAreaView : View
  return (
    <Container
      style={StyleSheet.flatten([
        commonStyles.flexContainer,
        commonStyles.flatBackground,
        styles.insetsContainer,
        containerStyle,
      ])}>
      {children}
    </Container>
  )
}

export default ScreenContainer
