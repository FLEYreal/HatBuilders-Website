'use client';

// Basic imports
import * as React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

// Material-UI
import { Box, Menu, MenuItem, Button, Typography } from '@mui/material'
import { Theme } from "@mui/material/styles";
import { useTheme } from '@emotion/react';
import { styled } from '@mui/system';

// Icons
import ru from '@/public/icons/ru.svg';
import uk from '@/public/icons/uk.svg';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';

// Translation
import { useTranslation } from '@/i18n/client';

function LanguageSelector({ lng }: { lng: string }) {

    // States
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [selectedLanguage, setSelectedLanguage] = React.useState<string>('en');

    // Other Hooks
    const pathname = usePathname();
    const { t } = useTranslation(lng, 'header')
    const theme = useTheme() as Theme;

    // Show menu
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    // Close menu as language is selected
    const handleClose = (language: string) => {
        setSelectedLanguage(language);
        setAnchorEl(null);
    };

    // Change language
    const languageToggle: (lang: string) => string = (lang) => {
        let pathArr = pathname.split('/')
        pathArr[1] = lang
        pathArr.join('/')

        return pathArr.join('/')
    }

    // Styled link component so it didnt show basic link styles
    const StyledLink = styled(Link)(({ theme }) => ({
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            color: theme.palette.primary.main,
        },
    }));


    return (
        // Language selector
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

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

            {/* Menu with languages */}
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => handleClose(selectedLanguage)}
            >
                {/* 2 Menu items with Russian and English languages */}

                <MenuItem onClick={() => handleClose('ru')}>
                    {/* Wraped into link */}
                    <StyledLink href={languageToggle('ru')}>

                        {/* Image of the flag */}
                        <Image src={ru} alt="Russian" width={20} height={15} />

                        {/* Displayed text */}
                        <Typography component='span' color="plain_text.main" sx={{ marginLeft: '10px' }}>Русский</Typography>
                    </StyledLink>
                </MenuItem>

                <MenuItem onClick={() => handleClose('en')}>
                    {/* Wraped into link */}
                    <StyledLink href={languageToggle('en')}>

                        {/* Image of the flag */}
                        <Image src={uk} alt="English" width={20} height={15} />

                        {/* Displayed text */}
                        <Typography component='span' color="plain_text.main" sx={{ marginLeft: '10px' }}>English</Typography>
                    </StyledLink>
                </MenuItem>
            </Menu>
        </Box>
    );
}

export default LanguageSelector;