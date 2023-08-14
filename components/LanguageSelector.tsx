'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Image from 'next/image';

import globals from '@/globals.module.scss'

import ru from '@/public/icons/ru.svg';
import uk from '@/public/icons/uk.svg';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { styled } from '@mui/system';
import { useTheme } from "@emotion/react";
import { Theme } from '@mui/material';

function LanguageSelector() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [selectedLanguage, setSelectedLanguage] = React.useState<string>('en');

    const pathname = usePathname();

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

    const theme = useTheme() as Theme;
    console.log('THEME: ', theme.palette.mode)

    const StyledLink = styled(Link)(({ theme }) => ({
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            color: theme.palette.primary.main,
        },
    }));

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Button onClick={handleClick}>Language</Button>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => handleClose(selectedLanguage)}
            >
                <MenuItem onClick={() => handleClose('ru')}>
                    <StyledLink href={languageToggle('ru')}>
                        <Image src={ru} alt="Russian" width={20} height={15} />
                        <span style={{ marginLeft: '10px' }}>Русский</span>
                    </StyledLink>
                </MenuItem>
                <MenuItem onClick={() => handleClose('en')}>
                    <StyledLink href={languageToggle('en')}>
                        <Image src={uk} alt="English" width={20} height={15} />
                        <span style={{ marginLeft: '10px' }}>English</span>
                    </StyledLink>
                </MenuItem>
            </Menu>
        </Box>
    );
}

export default LanguageSelector;