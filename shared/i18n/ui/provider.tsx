'use client'

// Basics
import React, { createContext, useContext } from 'react';

// Types
import { langType } from '../types';


// Creates context for language
export const LanguageContext = createContext<langType>('en');


/**
 * Hook for getting the current language
 * @returns {langType} current language
 */
export const useLanguage = () => useContext(LanguageContext);


/**
 * Wrapper for every component that depends on language, provides language to every children
 * @param children - React.ReactNode
 * @param value - langType
 */
export function LanguageProvider({ children, value }: { children?: React.ReactNode, value: langType }) {

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )

}
