import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Typography';
import { Menu, MenuItem } from '@mui/material';

import dynamic from 'next/dynamic';

import ThemeSwitch from './ThemeSwitch';

// Language
import { useTranslation } from '@/i18n'
//import LanguageSelector from './LanguageSelector';

async function Header({ lng }: { lng: string }) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = await useTranslation(lng, 'home')

    const LanguageSelector = dynamic(() => import('./LanguageSelector'), {
        ssr: false
    });

    return (
        <AppBar position="static">
            <Toolbar color='primary'>
                <Box style={{ display: 'flex', alignItems: 'center' }}>
                    {t('dark-mode')}:
                    <ThemeSwitch />
                    <LanguageSelector />
                </Box>


            </Toolbar>
        </AppBar>
    );
}

export default Header;