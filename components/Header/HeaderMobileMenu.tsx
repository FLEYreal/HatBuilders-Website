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
import LanguageSelector from '../LanguageSelector';
import ThemeSwitch from '../ThemeSwitch';

function HeaderMobileMenu({ lng }: { lng: string }) {
    // Show / Hide menu
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    // Translation
    const { t } = useTranslation(lng, 'header')

    // Handlers for menu:

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {/* Burger Menu Button */}
            <IconButton
                sx={{ display: { xs: 'flex', md: 'none' } }}
                onClick={handleMenuOpen}
            >
                {/* Icon Component */}
                <MenuRoundedIcon />
            </IconButton>

            {/* Menu which opens by Burger Menu Button */}
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                {/* List of Menu Items: */}

                {/* Buy button Item */}
                <MenuItem onClick={handleMenuClose} sx={{p: '15px 0px', pl: '20px', width: '225px'}}>
                    <ListItemIcon><LocalMallRoundedIcon/></ListItemIcon>
                    <ListItemText>{t('buy').toUpperCase()}</ListItemText>
                </MenuItem>

                {/* Language Selector Item */}
                <LanguageSelector lng={lng} type='list' menu={{ sxMenu: {p: '15px 0px', pl: '20px', width: '225px'}, handleMenuClose }}/>

                <Divider/>

                {/* Theme Switch Item */}
                <MenuItem sx={{p: '15px 0px', pl: '20px', width: '225px'}}><ThemeSwitch isMobile={true}/></MenuItem>
            </Menu>
        </>
    );
}

export default HeaderMobileMenu;
