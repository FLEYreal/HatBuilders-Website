'use client'

// Basic imports
import React from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

// Material-UI
import { Menu, MenuItem, Typography, IconButton } from '@mui/material'

// Icons
import ru from '@/public/icons/ru.svg';
import uk from '@/public/icons/uk.svg';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';

export function LanguageSelector() {

    // States
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    // Other Hooks
    const pathname = usePathname();
    const router = useRouter()

    // Show menu
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
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
        <>
            {/* Button that displays menu with languages */}
            <IconButton

                // Click handler
                onClick={handleClick}

                // Make font weight
                sx={{ fontWeight: 600 }}>
                <LanguageRoundedIcon color='primary' />
            </IconButton>

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
        </>
    );
}