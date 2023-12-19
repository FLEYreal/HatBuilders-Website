'use client'

// Basics
import React, { createContext, useContext } from 'react';

// Types
import { langType } from './types';

// Creates context for language
export const LanguageContext = createContext<langType>('en');

// A Hook to get the language property
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) return 'en';
    return context;
};

// Wrapper for every component that depends on language, provides language to every children
export default function LanguageProvider({ children, value }: { children?: React.ReactNode, value: langType }) {

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )

}