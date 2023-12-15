'use client';

// Basic imports
import * as React from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

// Material-UI
import { Box, Menu, MenuItem, Button, Typography, ListItemIcon, ListItemText, SxProps } from '@mui/material'
import { Theme } from "@mui/material/styles";
import { useTheme } from '@emotion/react';

// Icons
import ru from '@/public/icons/ru.svg';
import uk from '@/public/icons/uk.svg';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';

// Translation
import { useTranslation } from '@/shared/i18n/client';

interface LanguageSelectorType {

    // Param of the link, indicates what language is used on the page
    lng: string,

    // Type of the selector, either it's just a button or a part of the menu
    type: 'button' | 'list',

    // Menu is a optional type, only used in the case of type: "list"
    menu?: {
        sxMenu: SxProps, // Styles for the menu item (paddings / width for example)
        handleMenuClose: () => void // Function to close the menu
    } | undefined
}

export default function LanguageSelector({
    lng,
    type = 'button',
    menu
}: LanguageSelectorType) {

    // States
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    // Other Hooks
    const pathname = usePathname();
    const router = useRouter()
    const { t } = useTranslation(lng, 'header')
    const theme = useTheme() as Theme;

    // Show menu
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    // Show menu but for Mobile
    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        menu!.handleMenuClose
    };

    // Close menu as language is selected
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Close menu and change language
    const handleCloseAndChange = (language: string) => {
        setAnchorEl(null);

        let pathArr = pathname.split('/')
        pathArr[1] = language
        pathArr.join('/')

        router.push(pathArr.join('/'))
    }

    return (
        // Language selector
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            {
                type === 'button' ?
                    <>
                        {/* Button that displays menu with languages */}
                        <Button
                            // Icon shown before text
                            startIcon={<LanguageRoundedIcon />}

                            // Click handler
                            onClick={handleClick}

                            // Make font weight
                            sx={{ fontWeight: 600 }}

                            // Variant, outlined for dark theme, contained for light
                            variant={theme.palette.mode === 'dark' ? 'outlined' : 'contained'}>

                            {/* Displayed text */}
                            {t('language')}
                        </Button>
                    </> :
                    <MenuItem

                        // Apply styles
                        sx={menu!.sxMenu}

                        // Click handler
                        onClick={handleMenuOpen}
                    >

                        {/* Icon of the menu item */}
                        <ListItemIcon>
                            <LanguageRoundedIcon />
                        </ListItemIcon>

                        {/* Displayed text */}
                        <ListItemText>
                            {t('language').toUpperCase()}
                        </ListItemText>
                    </MenuItem>
            }

            {/* Menu with languages */}
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => handleClose()}
            >
                {/* 2 Menu items with Russian and English languages */}

                <MenuItem onClick={() => handleCloseAndChange('ru')}>

                    {/* Image of the flag */}
                    <Image src={ru} alt="Russian" width={20} height={15} />

                    {/* Displayed text */}
                    <Typography component='span' color="plain_text.main" sx={{ marginLeft: '10px' }}>Русский</Typography>

                </MenuItem>

                <MenuItem onClick={() => handleCloseAndChange('en')}>

                    {/* Image of the flag */}
                    <Image src={uk} alt="English" width={20} height={15} />

                    {/* Displayed text */}
                    <Typography component='span' color="plain_text.main" sx={{ marginLeft: '10px' }}>English</Typography>

                </MenuItem>
            </Menu>
        </Box >
    );
}