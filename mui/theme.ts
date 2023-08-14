import { createTheme } from '@mui/material/styles';
import Coloring from '@/utils/Coloring';
import { colors } from '@mui/material';

// Main vars
export const $primary = '#5FA60C';
export const $secondary = '#2D8721';
export const $info = '#01828C';
export const $warning = '#FFAB28';
export const $error = '#FF0300';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: Coloring.lightenColor($primary, 0.25),
            light: Coloring.darkenColor($primary, 0.55),
            dark: Coloring.darkenColor($primary, 0.025),
        },
        secondary: {
            main: Coloring.lightenColor($secondary, 0.25),
            light: Coloring.lightenColor($secondary, 0.55),
            dark: Coloring.darkenColor($secondary, 0.025)
        },
        info: {
            main: Coloring.lightenColor($info, 0.25),
            light: Coloring.lightenColor($info, 0.55),
            dark: Coloring.darkenColor($info, 0.025)

        },
        warning: {
            main: Coloring.lightenColor($warning, 0.25),
            light: Coloring.lightenColor($warning, 0.55),
            dark: Coloring.darkenColor($warning, 0.025)
        },
        error: {
            main: Coloring.lightenColor($error, 0.25),
            light: Coloring.lightenColor($error, 0.55),
            dark: Coloring.darkenColor($error, 0.025)
        },
    },
    shadows: [
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
    ],
    transitions: {
        duration: {
            shortest: 75,
            shorter: 100,
            short: 150,
            standard: 100,
            complex: 275,
            enteringScreen: 225,
            leavingScreen: 195,
        }
    },
    shape: {
        borderRadius: 8
    }
});

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: $primary,
            light: Coloring.lightenColor($primary, 0.30),
            dark: Coloring.darkenColor($primary, 0.15),
        },
        secondary: {
            main: $secondary,
            light: Coloring.lightenColor($secondary, 0.30),
            dark: Coloring.darkenColor($secondary, 0.15),
        },
        info: {
            main: $info,
            light: Coloring.lightenColor($info, 0.30),
            dark: Coloring.darkenColor($info, 0.15),
        },
        warning: {
            main: $warning,
            light: Coloring.lightenColor($warning, 0.30),
            dark: Coloring.darkenColor($warning, 0.15),
        },
        error: {
            main: $error,
            light: Coloring.lightenColor($error, 0.30),
            dark: Coloring.darkenColor($error, 0.15),
        }
    },
    shadows: [
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
    ],
    transitions: {
        duration: {
            shortest: 75,
            shorter: 100,
            short: 150,
            standard: 100,
            complex: 275,
            enteringScreen: 225,
            leavingScreen: 195,
        }
    },
    shape: {
        borderRadius: 8
    }
});
