'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Image from 'next/image';

import ru from '@/public/icons/ru.svg';
import uk from '@/public/icons/uk.svg';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { styled } from '@mui/system';
import { useTranslation } from '@/i18n/client';
import { useTheme } from '@emotion/react';
import { Theme } from "@mui/material/styles";
import { Typography } from '@mui/material';

function LanguageSelector({ lng }: { lng:string }) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [selectedLanguage, setSelectedLanguage] = React.useState<string>('en');

    const pathname = usePathname();
    const { t } = useTranslation(lng, 'header')
    const theme = useTheme() as Theme;

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (language: string) => {
        setSelectedLanguage(language);
        setAnchorEl(null);
    };

    const languageToggle: (lang: string) => string = (lang) => {
        let pathArr = pathname.split('/')
        pathArr[1] = lang
        pathArr.join('/')

        return pathArr.join('/')
    }

    const StyledLink = styled(Link)(({ theme }) => ({
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            color: theme.palette.primary.main,
        },
    }));


    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Button startIcon={<LanguageRoundedIcon/>} onClick={handleClick} sx={{fontWeight: 600}} variant={theme.palette.mode === 'dark' ? 'outlined' : 'contained'}>{t('language')}</Button>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => handleClose(selectedLanguage)}
            >
                <MenuItem onClick={() => handleClose('ru')}>
                    <StyledLink href={languageToggle('ru')}>
                        <Image src={ru} alt="Russian" width={20} height={15} />
                        <Typography component='span' color="plain_text.main" sx={{ marginLeft: '10px' }}>Русский</Typography>
                    </StyledLink>
                </MenuItem>
                <MenuItem onClick={() => handleClose('en')}>
                    <StyledLink href={languageToggle('en')}>
                        <Image src={uk} alt="English" width={20} height={15} />
                        <Typography component='span' color="plain_text.main" sx={{ marginLeft: '10px' }}>English</Typography>
                    </StyledLink>
                </MenuItem>
            </Menu>
        </Box>
    );
}

export default LanguageSelector;