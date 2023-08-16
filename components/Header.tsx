// Basic Imports
import dynamic from 'next/dynamic';

// Material-UI
import { AppBar, Toolbar, Button, Box } from '@mui/material'

// Components
import ThemeSwitch from './ThemeSwitch';
import HeaderBG from './HeaderBG';

// Icons
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';

// Language
import { useTranslation } from '@/i18n'

async function Header({ lng }: { lng: string }) {

    // { t } is a function to get all translations in the current language

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = await useTranslation(
        lng, // Current language
        'header' // What file to take translation from
    )

    // dynamically import LanguageSelector component
    const LanguageSelector = dynamic(() => import('./LanguageSelector'), {
        ssr: false
    });

    return (
        // Header itself
        <AppBar position="fixed" sx={{ background: 'none' }}>

            {/* Header background, it's client side component as its background depends on scroll position */}
            <HeaderBG></HeaderBG>

            {/* Toolbar with all buttons and other interaction elements */}
            <Toolbar color='primary'>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>

                    {/* Switch for theme */}
                    <ThemeSwitch />

                    {/* Button to choose website's language */}
                    <LanguageSelector lng={lng} />

                    {/* Button to Buy Service */}
                    {/* !!! It's not finished yet !!! */}
                    <Button startIcon={<LocalMallRoundedIcon />} variant="contained" color="primary" sx={{ fontWeight: 600, ml: 2 }}>{t('buy')}</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;