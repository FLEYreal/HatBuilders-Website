'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Image from 'next/image';

import ru from '@/public/icons/ru.svg';
import uk from '@/public/icons/uk.svg';

import Link from 'next/link'
import { Trans } from 'react-i18next/TransWithoutContext'
import { languages } from '@/i18n/settings'

function LanguageSelector() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [selectedLanguage, setSelectedLanguage] = React.useState<string>('en');

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (language: string) => {
        setSelectedLanguage(language);
        setAnchorEl(null);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Button onClick={handleClick}>Language</Button>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => handleClose(selectedLanguage)}
            >
                <MenuItem onClick={() => handleClose('ru')}>
                    <Image src={ru} alt="Russian" width={20} height={15} />
                    <span style={{ marginLeft: '10px' }}>Russian</span>
                </MenuItem>
                <MenuItem onClick={() => handleClose('en')}>
                    <Image src={uk} alt="English" width={20} height={15} />
                    <span style={{ marginLeft: '10px' }}>English</span>
                </MenuItem>
            </Menu>
        </Box>
    );
}

export default LanguageSelector;