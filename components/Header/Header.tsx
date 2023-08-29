// Basic Imports
import dynamic from 'next/dynamic';

// Material-UI
import { AppBar, Toolbar, Button, Box } from '@mui/material'

// Components
import ThemeSwitch from '../ThemeSwitch';
import HeaderBG from './HeaderBG';

// Icons & Images
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';

// Language
import { useTranslation } from '@/i18n'

// Styles
import { $container_based, $flex_row_center } from '@/mui/styles';
import HeaderMobileMenu from '@/components/Header/HeaderMobileMenu';
import HeaderTitle from './HeaderTitle';

async function Header({ lng }: { lng: string }) {

    // { t } is a function to get all translations in the current language

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = await useTranslation(
        lng, // Current language
        'header' // What file to take translation from
    )

    // dynamically import LanguageSelector component
    const LanguageSelector = dynamic(() => import('../LanguageSelector'), {
        ssr: false
    });

    return (
        // Header itself
        <AppBar position="fixed" sx={{ background: 'none' }}>

            {/* Header background, it's client side component as its background depends on scroll position */}
            <HeaderBG></HeaderBG>

            {/* Toolbar with all buttons and other interaction elements */}
            <Toolbar disableGutters={true} color='primary'>
                <Box sx={{
                    justifyContent: 'space-between',
                    ...$flex_row_center,
                    ...$container_based
                }}>
                    <HeaderTitle lng={lng}/>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>

                        {/* Switch for theme */}
                        <ThemeSwitch />

                        {/* Button to choose website's language */}
                        <LanguageSelector lng={lng} type='button' menu={undefined} />

                        {/* Button to Buy Service */}
                        {/* !!! It's not finished yet !!! */}
                        <Button startIcon={<LocalMallRoundedIcon />} variant="contained" color="primary" sx={{ fontWeight: 600, ml: 2 }}>{t('buy')}</Button>
                    </Box>
                    <HeaderMobileMenu lng={lng} />
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;