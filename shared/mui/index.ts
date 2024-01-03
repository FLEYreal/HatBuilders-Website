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
export * from './modal/theme/vars' // Import all MUI related variables
export { darkTheme, lightTheme } from './modal/theme' // Import theme object