import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2', // Darker primary color
        },
        secondary: {
            main: '#c2185b', // Darker secondary color
        },
        info: {
            main: '#2196f3', // Darker info color
        },
        warning: {
            main: '#f57c00', // Darker warning color
        },
        error: {
            main: '#d32f2f', // Darker error color
        },
    },
});

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
});
