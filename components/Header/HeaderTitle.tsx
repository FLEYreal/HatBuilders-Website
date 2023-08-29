'use client'

// Basic Imports
import { useContext } from 'react';
import Image from 'next/image';

// Material-UI
import { Box, Typography } from '@mui/material'
import { Theme } from "@mui/material/styles";
import { useTheme } from "@emotion/react";

// Icons & Images
import logo from '@/public/en/images/logo.jpg'

// Language
import { useTranslation } from '@/i18n/client'

// Context
import { scrollContext } from '../Providers/GlobalScrollEvent';

// Styles
import Link from 'next/link';

function HeaderTitle({ lng }: { lng: string }) {

    // { t } is a function to get all translations in the current language

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = useTranslation(
        lng, // Current language
        'header' // What file to take translation from
    )

    // Theme
    const theme = useTheme() as Theme;
    const dark = theme.palette.mode === 'dark';

    // Get scroll context
    const { isScrolled } = useContext(scrollContext)

    return (
        <Box>
            <Link href='/' 
                style={{ 
                    color: dark ? '#ffffff' : 
                        isScrolled ? '#ffffff' : '#000000',
                    textDecoration: 'none', 
                    display: 'flex', 
                    alignItems: 'center' 
                }}>
                
                <Image src={logo} style={{
                    borderRadius: '100%',
                    width: '40px',
                    height: '40px',
                    marginRight: '10px'
                }}
                alt='HatBuilders Logo' />

                <Typography sx={{
                    fontSize: {
                        xs: '15px',
                        md: '22px'
                    },
                    fontWeight: '600'
                }}>{t('name')} | {t('official')}</Typography>
            </Link>
        </Box>
    );
}

export default HeaderTitle;