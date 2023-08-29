import { makeStyles } from '@rneui/themed'

const useCommonStyles = makeStyles(theme => ({
  flexContainer: {
    flex: 1,
  },
  flatBackground: {
    backgroundColor: theme.colors.background,
  },
}))

export default useCommonStyles
