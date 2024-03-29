// UI
export {

    // Hook to get theme object
    useThemeContext,

    // Provider to access theming throughout the project
    GlobalThemeProvider,

    // Context that contains theme
    ThemeContext,

} from './ui/provider'


// Modal
export { darkTheme, lightTheme } from './model/theme' // Import theme object
export {

    // Returns boolean(s) that help you define resolution size
    useResolution,
    useSingleResolution

} from './model/hooks'


// Types
export type { styledDefaultInterface } from './types'

