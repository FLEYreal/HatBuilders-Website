'use client'

// Basic Imports
import React, { useState } from 'react';

// Material-UI
import { IconButton, Menu, MenuItem, ListItemText, ListItemIcon } from '@mui/material';

// Images & Icons
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';

// Language
import { useTranslation } from '@/i18n/client';
import LanguageSelector from './LanguageSelector';

function HeaderMobileMenu({ lng }: { lng: string }) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [subMenuAnchor, setSubMenuAnchor] = useState<null | HTMLElement>(null);

    const { t } = useTranslation(lng, 'header')

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleSubMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setSubMenuAnchor(event.currentTarget);
    };

    const handleSubMenuClose = () => {
        setSubMenuAnchor(null);
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

                <MenuItem onClick={handleMenuClose} sx={{p: '15px 0px', pl: '20px', width: '225px'}}>Пункт меню 3</MenuItem>
            </Menu>
            <Menu
                anchorEl={subMenuAnchor}
                open={Boolean(subMenuAnchor)}
                onClose={handleSubMenuClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem>Дополнительная опция 1</MenuItem>
                <MenuItem>Дополнительная опция 2</MenuItem>
            </Menu>
        </>
    );
}

export default HeaderMobileMenu;
