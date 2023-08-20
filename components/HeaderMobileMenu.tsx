'use client'

// Basic Imports
import React, { useState } from 'react';

// Material-UI
import { IconButton, Menu, MenuItem, ListItemText, ListItemIcon, Divider } from '@mui/material';

// Images & Icons
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';

// Language
import { useTranslation } from '@/i18n/client';

// Components
import LanguageSelector from './LanguageSelector';
import ThemeSwitch from './ThemeSwitch';

function HeaderMobileMenu({ lng }: { lng: string }) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const { t } = useTranslation(lng, 'header')

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton
                sx={{ display: { xs: 'flex', md: 'none' } }}
                onClick={handleMenuOpen}
            >
                <MenuRoundedIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <MenuItem onClick={handleMenuClose} sx={{p: '15px 0px', pl: '20px', width: '225px'}}>
                    <ListItemIcon><LocalMallRoundedIcon/></ListItemIcon>
                    <ListItemText>{t('buy').toUpperCase()}</ListItemText>
                </MenuItem>

                <LanguageSelector lng={lng} type='list' menu={{ sxMenu: {p: '15px 0px', pl: '20px', width: '225px'}, handleMenuClose }}/>

                <Divider/>

                <MenuItem sx={{p: '15px 0px', pl: '20px', width: '225px'}}><ThemeSwitch/></MenuItem>
            </Menu>
        </>
    );
}

export default HeaderMobileMenu;
