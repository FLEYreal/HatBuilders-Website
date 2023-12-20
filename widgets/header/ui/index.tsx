'use client'
// Basics
import dynamic from 'next/dynamic';

// Widgets
import { ThemeSelector } from '@/widgets/theme-selector'
const LanguageSelector = dynamic(() => import('@/widgets/lng-selector').then((module) => ({ default: module.LanguageSelector })), {
    ssr: false
});


export function Header() {

    function handleMenuClose() {

    }

    return (
        <header>
            <LanguageSelector/>
            <ThemeSelector />
        </header>
    )
}