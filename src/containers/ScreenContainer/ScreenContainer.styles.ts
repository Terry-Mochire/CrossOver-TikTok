import { makeStyles } from '@rneui/themed'

type StylesProps = {
  insets: {
    paddingTop?: number
    paddingBottom?: number
    paddingLeft?: number
    paddingRight?: number
  }
}

const useScreenContainerStyles = makeStyles(
  (theme, { insets }: StylesProps) => ({
    insetsContainer: { ...insets },
  })
)

export default useScreenContainerStyles
