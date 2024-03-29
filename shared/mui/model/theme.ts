// Material-UI
import { createTheme, Theme } from '@mui/material/styles';


// Declarations
declare module "@mui/material/styles"
{
    // Tell TypeScript about custom Breakpoints.
    interface BreakpointOverrides {
        smWidth: true,
        mdWidth: true,
        lgWidth: true,
        xlWidth: true
    }
}


// Palette of colors
export const paletteDark = {
    primary: {
        main: '#00A624',
        light: '#26F153',
        dark: '#008D1F',
    },
    secondary: {
        main: '#EC264A',
        light: '#F84666',
        dark: '#B40F2D'
    },
    info: {
        main: '#03A9F4',
        light: '#1CB8FF',
        dark: '#0288D1'
    },
    warning: {
        main: '#ECB526',
        light: '#FFC93F',
        dark: '#CD9F28'
    },
    error: {
        main: '#D32F2F',
        light: '#EF5350',
        dark: '#B91818'
    }
}


// Palette of colors
export const paletteLight = {
    primary: {
        main: '#00E132',
        light: '#36F661',
        dark: '#0CB932',
    },
    secondary: {
        main: '#AC0624',
        light: '#E02143',
        dark: '#9E0520'
    },
    info: {
        main: '#03A9F4',
        light: '#1CB8FF',
        dark: '#0288D1'
    },
    warning: {
        main: '#ECB526',
        light: '#FFC93F',
        dark: '#CD9F28'
    },
    error: {
        main: '#D32F2F',
        light: '#EF5350',
        dark: '#B91818'
    }
}


// Duration of transitions
export const transitions = {
    duration: {
        shortest: 75,
        shorter: 100,
        short: 150,
        standard: 100,
        complex: 275,
        enteringScreen: 225,
        leavingScreen: 195,
    }
}


// Breakpoints for responsive layout
export const breakpoints = {
    values: {

        // Default breakpoints: Used to define at what width to apply styles
        xs: 0,
        sm: 321,
        md: 481,
        lg: 920,
        xl: 1200,

        // Custom breakpoints: Used to define width of content (for Wrapper component) per their default version
        // It doesn't contain "xs" because there's no reason to specify different property with same "0" int.
        smWidth: 321,
        mdWidth: 520,
        lgWidth: 790,
        xlWidth: 1080
    },
}


// Custom dark theme
export const darkTheme = createTheme({
    breakpoints: breakpoints,
    palette: {
        background: {
            default: "#070707"
        },
        mode: 'dark',
        ...paletteDark
    },
    shadows: Array(25).fill('none') as Theme['shadows'],
    transitions: transitions,
    shape: { borderRadius: 0 },
    typography: {
        fontFamily: 'inherit'
    }
});


// Custom light theme
export const lightTheme = createTheme({
    breakpoints: breakpoints,
    palette: {
        background: {
            default: "#ffffff"
        },
        mode: 'light',
        ...paletteLight
    },
    shadows: Array(25).fill('none') as Theme['shadows'],
    transitions: transitions,
    shape: { borderRadius: 0 },
    typography: {
        fontFamily: 'inherit'
    }
});


const themes = [darkTheme, lightTheme]


// Define styling for typography. Needed to standartized article creation
// This all's been used in Text sort of components.
for (let i = 0; i < themes.length; i++) {

    themes[i].typography.h6 = {
        fontFamily: 'inherit',
        color: ['#585858', '#B9B9B9'][i],
        fontWeight: '400',
        fontSize: '7px',
        [themes[i].breakpoints.up('md')]: { fontSize: '9px' },
        [themes[i].breakpoints.up('lg')]: { fontSize: '10px' },
        [themes[i].breakpoints.up('xl')]: { fontSize: '12px' }
    }


    // Type: Regular Sub-Text
    // Example: Small Signs, Sub-Strings, Post-Scriptum
    themes[i].typography.h5 = {
        fontFamily: 'inherit',
        color: ['#585858', '#B9B9B9'][i],
        fontWeight: '400',
        fontSize: '9px',
        margin: '2px 0',
        [themes[i].breakpoints.up('md')]: { fontSize: '10px' },
        [themes[i].breakpoints.up('lg')]: { fontSize: '11px' },
        [themes[i].breakpoints.up('xl')]: { fontSize: '14px' }
    }


    // Type: Small Paragtaph
    // Example: Signs, Post-Scriptum
    themes[i].typography.h4 = {
        fontFamily: 'inherit',
        color: ['#9F9F9F', '#505050'][i],
        fontWeight: '400',
        fontSize: '10px',
        margin: '4px 0',
        [themes[i].breakpoints.up('md')]: { fontSize: '11px' },
        [themes[i].breakpoints.up('lg')]: { fontSize: '12px' },
        [themes[i].breakpoints.up('xl')]: { fontSize: '15px' }
    }


    // Type: Regular Paragraph
    // Example: Text of the Article, Buttons
    themes[i].typography.h3 = {
        fontFamily: 'inherit',
        color: ['#CECECE', '#505050'][i],
        fontWeight: '400',
        fontSize: '12px',
        margin: '4px 0',
        [themes[i].breakpoints.up('md')]: { fontSize: '14px' },
        [themes[i].breakpoints.up('lg')]: { fontSize: '15px' },
        [themes[i].breakpoints.up('xl')]: { fontSize: '17px' }
    }


    // Type: Small Title
    // Example: Subtitles, Block's titles
    themes[i].typography.h2 = {
        fontFamily: 'inherit',
        color: ['#FFFFFF', '#000000'][i],
        fontWeight: '500',
        fontSize: '14px',
        margin: '6px 0',
        [themes[i].breakpoints.up('md')]: { fontSize: '16px' },
        [themes[i].breakpoints.up('lg')]: { fontSize: '20px' },
        [themes[i].breakpoints.up('xl')]: { fontSize: '26px' }
    }


    // Type: Regular Title
    // Examples: Logos, Articles' Titles
    themes[i].typography.h1 = {
        fontFamily: 'inherit',
        color: ['#FFFFFF', '#000000'][i],
        fontWeight: '600',
        fontSize: '16px',
        margin: '8px 0',
        [themes[i].breakpoints.up('md')]: { fontSize: '20px' },
        [themes[i].breakpoints.up('lg')]: { fontSize: '26px' },
        [themes[i].breakpoints.up('xl')]: { fontSize: '30px' }
    }


    // Type: Button Name
    themes[i].typography.button = {
        fontFamily: 'inherit',
        fontWeight: '500',
        fontSize: '14px',
        [themes[i].breakpoints.up('md')]: { fontSize: '15px' },
        [themes[i].breakpoints.up('lg')]: { fontSize: '16px' },
        [themes[i].breakpoints.up('xl')]: { fontSize: '17px' }
    }
}