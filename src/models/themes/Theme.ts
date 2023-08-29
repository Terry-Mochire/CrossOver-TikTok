import '@rneui/themed'
import lightColors from 'themes/colors/light'

declare module '@rneui/themed' {
  export interface Colors extends Record<keyof typeof lightColors, string> {}
}
