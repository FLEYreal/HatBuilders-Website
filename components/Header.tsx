import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Typography';

import dynamic from 'next/dynamic';

import ThemeSwitch from './ThemeSwitch';
import HeaderBG from './HeaderBG';

import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';

// Language
import { useTranslation } from '@/i18n'

async function Header({ lng }: { lng: string }) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = await useTranslation(lng, 'header')

    const LanguageSelector = dynamic(() => import('./LanguageSelector'), {
        ssr: false
    });

    return (
        <AppBar position="fixed" sx={{ background: 'none'}}>
            <HeaderBG></HeaderBG>
            <Toolbar color='primary'>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <ThemeSwitch />
                    <LanguageSelector lng={lng} />
                    <Button startIcon={<LocalMallRoundedIcon />} variant="contained" color="primary" sx={{ fontWeight: 600, ml: 2 }}>{t('buy')}</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;