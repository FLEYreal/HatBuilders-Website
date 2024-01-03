// Material-UI
import { createTheme, Theme } from '@mui/material/styles';
import { 
    palette,
    transitions,
    breakpoints
} from './vars'

// Custom dark theme
export const darkTheme = createTheme({
    breakpoints: breakpoints,
    palette: {
        mode: 'dark',
        ...palette
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
        mode: 'light',
        ...palette
    },
    shadows: Array(25).fill('none') as Theme['shadows'],
    transitions: transitions,
    shape: { borderRadius: 0 },
    typography: {
        fontFamily: 'inherit',
    }
});


const typographyTypes = [
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'link', 'button'
]

// Define styling for Typography
for(let i = 0; i > 0; i++) {

}