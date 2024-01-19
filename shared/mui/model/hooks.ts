'use client'

// Material-UI
import { useMediaQuery, Theme, Breakpoint } from '@mui/material';

// Emotion
import { useTheme } from '@emotion/react';


// Types
type resolutionReturnType = { 
    xs: boolean, 
    sm: boolean, 
    md: boolean, 
    lg: boolean, 
    xl: boolean
}
type singleResolutionReturnType = boolean


// Interfaces
interface resolutionInterface {
    direction: 'up' | 'down'
}

interface singleResolutionInterface {
    direction: 'up' | 'down'
    breakpoint: Breakpoint | number
}


/**
 * Hook that helps defining current screen resolution.
 * 
 * @param {string} direction - Define direction of breakpoint applying. Example: If you use "xl" which is a 1080px breakpoint,
 * it means, that if direction is "up", It will be true if screen is greater than 1080px, if it's "down", it will be true if screen is
 * lower than 1080px.
 * 
 * @returns returns { xs, sm, md, lg xl } breakpoints as boolean type that help you define current screen size
 */
export const useResolution = (

    direction: resolutionInterface['direction'] = 'up'

): resolutionReturnType => {

    // CUSTOM VARIABLES & HOOKS
    const theme = useTheme() as Theme // Get theme object

    
    // Get all breakpoints
    const xs = useMediaQuery(theme.breakpoints[direction]('xs'))
    const sm = useMediaQuery(theme.breakpoints[direction]('sm'))
    const md = useMediaQuery(theme.breakpoints[direction]('md'))
    const lg = useMediaQuery(theme.breakpoints[direction]('lg'))
    const xl = useMediaQuery(theme.breakpoints[direction]('xl'))

    // Return object with all breakpoints
    return { xs, sm, md, lg, xl }

}


/**
 * Hook that helps defining current screen resolution.
 * 
 * @param {string} breakpoint - What breakpoint (From Material-UI) to return.
 * @param {string} direction - Define direction of breakpoint applying. Example: If you use "xl" which is a 1080px breakpoint,
 * it means, that if direction is "up", It will be true if screen is greater than 1080px, if it's "down", it will be true if screen is
 * lower than 1080px.
 * 
 * @returns returns a single breakpoint as boolean type that help you define current screen size
 */
export const useSingleResolution = (

    breakpoint: singleResolutionInterface['breakpoint'] = "xl",
    direction: singleResolutionInterface['direction'] = 'up'

): singleResolutionReturnType => {

    // Get theme & Return breakpoint defined in argument
    const theme = useTheme() as Theme
    return useMediaQuery(theme.breakpoints[direction](breakpoint))

}
