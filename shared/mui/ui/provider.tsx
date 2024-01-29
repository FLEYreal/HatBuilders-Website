'use client'

// Basics
import { useLayoutEffect, useState, createContext, useContext } from 'react';

// Material-UI
import { Theme } from '@mui/material/styles';

// Emotion
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { darkTheme, lightTheme } from '../model/theme';


// Define the structure for the ThemeContext
interface ThemeContextProps {
    toggleTheme: () => void; // Function to toggle between dark and light themes
}


// Create a context for theme-related functions and values
export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useThemeContext = () => useContext(ThemeContext)

/**
 * @function GlobalThemeProvider
 * @description A Provider component that provides the global theme to the application
 * @param {object} props.children children components
 * @returns {object} the global theme provider component
 */
export const GlobalThemeProvider = ({ children }: { children: any }) => {

    // STATES
    const [theme, setTheme] = useState<Theme>(darkTheme); // State to manage the current theme

    // EFFECTS
    useLayoutEffect(() => { // Effect to set the theme based on the stored value in localStorage

        const storedTheme = localStorage.getItem('theme'); // Get current theme
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

            {/* Apply the selected theme */}
            <EmotionThemeProvider theme={theme}>
                {children}
            </EmotionThemeProvider>

        </ThemeContext.Provider>
    );
};
