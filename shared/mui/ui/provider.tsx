'use client'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { Theme } from '@mui/material/styles';
import { darkTheme, lightTheme } from '../modal/theme';
import { useEffect, useState, createContext, useContext } from 'react';

// Define the structure for the ThemeContext
interface ThemeContextProps {
    toggleTheme: () => void; // Function to toggle between dark and light themes
}

// Create a context for theme-related functions and values
export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// Custom hook to use the ThemeContext
export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeProvider'); // Error handling if context is not available
    }
    return context;
};

// Global Theme Provider component
export const GlobalThemeProvider = ({ children }: { children: any }) => {
    const [theme, setTheme] = useState<Theme>(darkTheme); // State to manage the current theme

    // Effect to set the theme based on the stored value in localStorage
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme && storedTheme === '0') {
            setTheme(lightTheme);
        }
    }, []);

    // Function to toggle the theme between dark and light
    const toggleTheme = () => {
        if (theme.palette.mode === 'dark') {
            setTheme(lightTheme);
            localStorage.setItem('theme', '0'); // Store the theme preference in localStorage
        } else {
            setTheme(darkTheme);
            localStorage.setItem('theme', '1'); // Store the theme preference in localStorage
        }
    };

    return (
        // Provide the toggleTheme function to the rest of the app
        <ThemeContext.Provider value={{ toggleTheme }}>
            <EmotionThemeProvider theme={theme}> {/* Apply the selected theme */}
                {children}
            </EmotionThemeProvider>
        </ThemeContext.Provider>
    );
};
