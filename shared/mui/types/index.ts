// Material-UI & Emotion
import { Theme } from "@mui/material"

/**
 * This interface defines the default values for the breakpoints and theme for the styled components througout the project.
 * 
 * @property {object} def - "def" is shortcut for "default", it provides theming features to styled components
 * @property {object} def.b - "b" is shortcut for "breakpoints", it's used to define responsive styles to styled components.
 * @property {object} def.v - "v" is shortcut for "values", it provides all MUI's breakpoints' values.
 * @property {object} def.t - "t" is shortcut for "theme". Literally a theme object from Material-UI.
 */
export interface styledDefaultInterface {
    def?: {
        b: Theme['breakpoints']['up'],
        v: Theme['breakpoints']['values'],
        t: Theme
    }
}