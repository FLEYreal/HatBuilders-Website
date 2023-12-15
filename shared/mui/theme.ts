// Material-UI
import { createTheme, Theme } from '@mui/material/styles';
import Minecraft from '@/public/fonts/minecraft.ttf';

export const palette = {
    primary: {
        main: '#26F153',
        light: '#6FFF8E',
        dark: '#0DBA33',
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
    },
}

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

export const typography = {
    fontFamily: [
        'Minecraft Rus',
        'Arial',
        'sans-serif'
    ].join(',')
}

const MinecraftFont = {
    fontFamily: 'Minecraft Rus',
    fontWeight: '500',
    src: `
        local('Minecraft Rus'),
        url(${Minecraft}) format('otf')
    `
}

// Custom dark theme
export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        ...palette
    },
    shadows: Array(25).fill('none') as Theme['shadows'],
    transitions: transitions,
    shape: { borderRadius: 8 },
    typography: typography,
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                '@global': {
                    '@font-face': [MinecraftFont],
                },
            },
        },
    },
});

// Custom light theme
export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        ...palette
    },
    shadows: Array(25).fill('none') as Theme['shadows'],
    transitions: transitions,
    shape: { borderRadius: 8 },
    typography: typography,
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                '@global': {
                    '@font-face': [MinecraftFont],
                },
            },
        },
    },
});
