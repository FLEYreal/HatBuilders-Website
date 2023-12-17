// Basics
import dynamic from 'next/dynamic';

// Language
import { useTranslation } from '@/shared/i18n'

// Material-UI
import { Button, Typography } from '@mui/material'

// Widgets
import { ThemeSelector } from '@/widgets/theme-selector'
import { HatButton } from '@/widgets/button';
import { HatInput } from '@/widgets/input';

// Styles
import './globals.css'

const LanguageSelector = dynamic(() => import('@/widgets/lng-selector').then((module) => ({ default: module.LanguageSelector })), {
    ssr: false
});

export default async function Home({ params: { lng } }: { params: { lng: string } }) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = await useTranslation(lng, 'home')


    return (
        <main>
            Page.tsx
            <LanguageSelector lng={lng} type='button' menu={undefined} />
            <ThemeSelector />
            <HatButton color='primary'>HatButton</HatButton>
            <HatButton color='secondary'>HatButton</HatButton>
            <HatButton color='info'>HatButton</HatButton>
            <HatButton color='warning'>HatButton</HatButton>
            <HatButton color='error'>HatButton</HatButton>
            <Button color='primary'>Button</Button>
            <Button color='secondary'>Button</Button>
            <Button color='info'>Button</Button>
            <Button color='warning'>Button</Button>
            <Button color='error'>Button</Button>
           <HatInput color='error'
            /> 
        </main>
    )
}
