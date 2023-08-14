'use client';
import { useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Theme } from '@mui/material/styles';
import { darkTheme, lightTheme } from '@/mui/theme';

export const GlobalThemeProvider = ({ children }: { children: any }) => {
    let theme: Theme = darkTheme;

    if (typeof window !== 'undefined') {
        if (localStorage.getItem('theme') && localStorage.getItem('theme') === '0')
            theme = lightTheme;
        else
            localStorage.setItem('theme', '1');
    }

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}
