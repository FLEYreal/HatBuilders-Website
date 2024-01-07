// Material-UI & Emotion
import { Theme } from "@mui/material"


// Interfaces for usage outside of the component

/**
 * Interface used to define default values for styled components.
 * 
 * @param {Theme['breakpoints']['up']} b - It has to contain Material-UI function: theme.breakpoints.up().
 * @param {Theme['breakpoints']['values']} v - It has to contain values of breakpoints potentially needed: theme.breakpoints.values
 * @param {Theme} t - It's theme object from Material-UI
 */
export interface styledInterface {
    b?: Theme['breakpoints']['up'],
    v?: Theme['breakpoints']['values'],
    t?: Theme
}

/**
 * This is the same interface as "styledInterface" but uses default wrapper for attributes to enhance attribute coding for styled
 * component.
 */
export interface styledDefaultInterface {
    def?: {
        b: Theme['breakpoints']['up'],
        v: Theme['breakpoints']['values'],
        t: Theme
    }
}