// Basics
import dynamic from 'next/dynamic';

// Widgets
import { ThemeSelector } from '@/widgets/theme-selector'

// Shared
import { useLanguage } from '@/shared/i18n/provider';

const LanguageSelector = dynamic(() => import('@/widgets/lng-selector').then((module) => ({ default: module.LanguageSelector })), {
    ssr: false
});


export function Header() {

    let lng = useLanguage()
    console.log('LNG:', lng)

    return (
        <header>
            <LanguageSelector lng={lng} type='button' menu={undefined} />
            <ThemeSelector />
        </header>
    )
}