// Basic Imports
import React from 'react';
import Image from 'next/image';

// Material-UI
import { Typography, Box, Button } from '@mui/material'

// Language
import { useTranslation } from '@/i18n'

// Styles
import {
    $container_based,
    $flex_row,
    $green_background,
    $main_text_size,
    $main_portfolio_size,
    $portfolio_image,
    $portfolio_image_box,
    $green_bubble
} from '@/mui/styles';

// Icons & Images
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import FolderSpecialRoundedIcon from '@mui/icons-material/FolderSpecialRounded';
import portfolio_1 from '@/public/images/portfolio/1.png'
import portfolio_2 from '@/public/images/portfolio/2.png'
import portfolio_3 from '@/public/images/portfolio/3.jpeg'

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
                overflow: 'hidden',
                position: 'relative',
            }}>

                {/* INNER CONTENT */}
                <Box sx={{
                    ...$container_based,
                    ...$flex_row,
                    mt: '80px',
                    justifyContent: 'space-between',
                    position: 'relative',
                }}>

                    {/* Text Content */}
                    <Box sx={{
                        width: $main_text_size,
                        zIndex: '10'
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
                        <Box sx={{ mt: '60px' }}>
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
                    <Box sx={{
                        width: $main_portfolio_size,
                        height: 'inherit',
                        position: 'relative'
                    }}>
                        <Box component='div' sx={{
                            ...$portfolio_image_box,
                            position: 'absolute',
                            top: '60px',
                            left: '60px',
                            zIndex: '10'
                        }}>
                            <Image src={portfolio_1} alt='Example from portfolio #1' style={$portfolio_image} />
                        </Box>
                        <Box component='div' sx={{
                            ...$portfolio_image_box,
                            position: 'absolute',
                            top: '30px',
                            left: '30px',
                            zIndex: '9'
                        }}>
                            <Image src={portfolio_2} alt='Example from portfolio #1' style={{ ...$portfolio_image, opacity: '0.6' }} />
                        </Box>
                        <Box component='div' sx={{
                            ...$portfolio_image_box,
                            position: 'absolute',
                            top: '0px',
                            left: '0px',
                            zIndex: '8'
                        }}>
                            <Image src={portfolio_3} alt='Example from portfolio #1' style={{ ...$portfolio_image, opacity: '0.3' }} />
                        </Box>
                    </Box>

                    {/* Bubbles */}
                    <Box component='span' sx={{
                        ...$green_bubble,
                        width: '105px',
                        height: '105px',
                        top: 0,
                        left: -340,
                        zIndex: '1'
                    }}></Box>
                    <Box component='span' sx={{
                        ...$green_bubble,
                        width: '180px',
                        height: '180px',
                        top: 250,
                        left: -170,
                        zIndex: '1'
                    }}></Box>
                    <Box component='span' sx={{
                        ...$green_bubble,
                        width: '140px',
                        height: '140px',
                        top: -40,
                        left: -50,
                        zIndex: '1'
                    }}></Box>


                    <Box component='span' sx={{
                        ...$green_bubble,
                        width: '225px',
                        height: '225px',
                        top: -80,
                        right: -120,
                        zIndex: '1'
                    }}></Box>
                    <Box component='span' sx={{
                        ...$green_bubble,
                        width: '140px',
                        height: '140px',
                        bottom: 55,
                        right: -60,
                        zIndex: '1'
                    }}></Box>
                    <Box component='span' sx={{
                        ...$green_bubble,
                        width: '320px',
                        height: '320px',
                        right: 420,
                        bottom: -250,
                        zIndex: '1'
                    }}></Box>

                    <Box component='span' sx={{
                        ...$green_bubble,
                        width: '220px',
                        height: '220px',
                        left: 460,
                        top: -100,
                        zIndex: '1'
                    }}></Box>
                </Box>

            </Box>

        </Typography>
    )
}