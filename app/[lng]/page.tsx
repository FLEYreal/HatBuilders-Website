// Basic Imports
import React from 'react';

// Material-UI
import { Typography, Box, Button } from '@mui/material'

// Language
import { useTranslation } from '@/i18n'

// Styles
import { $container_based, $flex_row_center, $green_background, $main_text_size } from '@/mui/styles';

// Icons & Images
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import FolderSpecialRoundedIcon from '@mui/icons-material/FolderSpecialRounded';

export default async function Home({ params: { lng } }: { params: { lng: string } }) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = await useTranslation(
        lng, // Current language
        'home' // What file to take translation from
    )

    return (
        <Typography component='main'>

            {/* MAIN BLOCK 1 OF THE PAGE */}
            <Box sx={{
                marginTop: '64px',
                width: '100%',
                minHeight: '640px',
                background: $green_background,
                overflow: 'hidden'
            }}>

                {/* INNER CONTENT */}
                <Box sx={{
                    ...$container_based,
                    ...$flex_row_center,
                    mt: '80px'
                }}>

                    {/* Text Content */}
                    <Box sx={{
                        width: $main_text_size
                    }}>
                        <Typography variant='h3' component='h1' sx={{ fontWeight: '600', mb: '18px' }}>
                            {t('name')} -
                        </Typography>
                        <Typography variant='h5' component='p' sx={{ mb: '32px' }}>
                            {t('main_description')}
                        </Typography>
                        <Typography variant='h5' component='p'>
                            {t('submain_description')}
                        </Typography>
                        <Box sx={{mt: '60px'}}>
                            <Button
                                sx={{
                                    padding: '8px 20px',
                                    mr: '16px',
                                    fontSize: '20px',
                                }}
                                startIcon={<LocalMallRoundedIcon />}
                                color="white"
                                variant="outlined">
                                BUY
                            </Button>
                            <Button
                                sx={{
                                    padding: '8px 20px',
                                    fontSize: '20px',
                                }}
                                startIcon={<FolderSpecialRoundedIcon />}
                                color="white"
                                variant="outlined">
                                SEE PORTFOLIO
                            </Button>
                        </Box>
                    </Box>

                    {/* Examples from Portfolio */}
                    <Box>

                    </Box>
                </Box>

            </Box>

        </Typography>
    )
}