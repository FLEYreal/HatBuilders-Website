'use server';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Typography';
import { Menu, MenuItem, Typography } from '@mui/material';

import dynamic from 'next/dynamic';

import ThemeSwitch from './ThemeSwitch';

// Language
import { useTranslation } from '@/i18n'
//import LanguageSelector from './LanguageSelector';

async function Header({ lng }: { lng: string }) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = await useTranslation(lng, 'components')

    const LanguageSelector = dynamic(() => import('./LanguageSelector'), {
        ssr: false
    });

    return (
        <AppBar position="fixed" sx={{backdropFilter: 'blur(2px)', background: 'rgba(0,0,0,0.4)'}}>
            <Toolbar color='primary'>
                <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography>{t('dark-mode')}:</Typography>
                    <ThemeSwitch />
                    <LanguageSelector lng={lng} />
                </Box>


            </Toolbar>
        </AppBar>
    );
}

export default Header;