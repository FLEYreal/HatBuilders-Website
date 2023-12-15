// Basics
import dynamic from 'next/dynamic';

// Language
import { useTranslation } from '@/shared/i18n'
//import { useTranslation } from '@/shared/i18n/client';

// Material-UI
import { Typography } from '@mui/material'

// Widgets
import { ThemeSelector } from '@/widgets/theme-selector'

export default async function Home({ params: { lng } }: { params: { lng: string } }) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = await useTranslation(lng, 'home')

    // dynamically import LanguageSelector component
    const LanguageSelector = dynamic(() => import('../../widgets/lng-selector'), {
        ssr: false
    });

    return (
        <Typography component='main'>
            <LanguageSelector lng={lng} type='button' menu={undefined} />
            <ThemeSelector />
            Test: {t('our_portfolio')}
        </Typography>
    )
}
