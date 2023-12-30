'use client'

// Basics
import React, { createContext, useContext } from 'react';

// Types
import { langType } from './types';

// Creates context for language
export const LanguageContext = createContext<langType>('en');

// Wrapper for every component that depends on language, provides language to every children
export function LanguageProvider({ children, value }: { children?: React.ReactNode, value: langType }) {

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )

}

export const useLanguage = () => useContext(LanguageContext);