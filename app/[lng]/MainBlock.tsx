// Basic Imports
import React from 'react';
import Link from 'next/link'

// Material-UI
import { Typography, Box, Button } from '@mui/material'

// Language
import { useTranslation } from '@/i18n'

// Styles
import global from '@/app/globals.module.scss'
import {
    // Import vars with styles in SX (Material-UI) format
    $container_based,
    $green_background,
    $main_text_size,
    $main_portfolio_size,
    $portfolio_image,
    $portfolio_image_box,
    $green_bubble,
    $main_buttons,
    $big_title_size
} from '@/mui/styles';

// Components
import AlbumImage from '@/components/Album/AlbumImage'

// Icons & Images
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import FolderSpecialRoundedIcon from '@mui/icons-material/FolderSpecialRounded';

export default async function MainBlock({ lng }: { lng: string }) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = await useTranslation(
        lng, // Current language
        'home' // What file to take translation from
    )

    function toPortfolio() {

    }

    return (
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
                display: 'flex',
                flexFlow: {
                    xl: 'row nowrap',
                    lg: 'row nowrap',
                    md: 'row nowrap',
                    sm: 'column nowrap',
                    xs: 'column nowrap'
                },
                mt: '80px',
                mb: '80px',
                justifyContent: 'space-between',
                position: 'relative',
            }}>

                {/* Text Content */}
                <Box sx={{
                    width: $main_text_size,
                    zIndex: '10'
                }}>

                    {/* Title of the block */}
                    <Typography className={global.appearance} component='h1' sx={{
                        color: '#fff',
                        fontWeight: '600',
                        mb: '18px',
                        fontSize: $big_title_size
                    }}>
                        {t('name')} -
                    </Typography>

                    {/* Main Description of the block */}
                    <Typography className={global.appearance} component='p' sx={{
                        color: '#fff',
                        mb: '32px',
                        fontSize: { xl: '24px', lg: '22px', md: '17.5px', sm: '19px', xs: '19px' }
                    }}>
                        {t('main_description')}
                    </Typography>

                    {/* 2nd Paragraph of the Main Description */}
                    <Typography className={global.appearance} component='p' sx={{
                        color: '#fff',
                        fontSize: { xl: '24px', lg: '22px', md: '17.5px', sm: '19px', xs: '19p' }
                    }}>
                        {t('submain_description')}
                    </Typography>

                    {/* Buttons */}
                    <Box sx={{ mt: '60px' }}>

                        {/* Buy Button */}
                        <Button
                            sx={$main_buttons}
                            className={global.appearance}
                            startIcon={<LocalMallRoundedIcon />}
                            color="white"
                            variant="outlined">
                            {t('buy')}
                        </Button>

                        {/* Portfolio button */}
                        <Link href="/screenshots">
                            <Button
                                sx={$main_buttons}
                                className={global.appearance}
                                startIcon={<FolderSpecialRoundedIcon />}
                                color="white"
                                variant="outlined">
                                {t('see_portfolio')}
                            </Button>
                        </Link>
                    </Box>
                </Box>

                {/* Examples from Portfolio */}
                <Box sx={{
                    width: $main_portfolio_size,
                    display: { xs: 'none', sm: 'flex' },
                    height: { xl: 'inherit', lg: 'inherit', md: 'inherit', sm: '320px', xs: '320px' },
                    position: 'relative'
                }}>

                    {/* Example 1 */}
                    <Box className={`${global.appearance} ${global.screenshot}`} component='div' sx={{
                        ...$portfolio_image_box,
                        position: 'absolute',
                        top: { xs: '70px', sm: '70px', md: '70px', lg: '60px', xl: '60px' },
                        left: { xs: '50px', sm: '50px', md: '50px', lg: '60px', xl: '60px' },
                        zIndex: '10'
                    }}>
                        <AlbumImage height={337.5} width={600} src='/en/images/portfolio/1.png' alt='Example from portfolio #1' style={$portfolio_image} />
                    </Box>

                    {/* Example 2 */}
                    <Box className={`${global.appearance} ${global.screenshot}`} component='div' sx={{
                        ...$portfolio_image_box,
                        position: 'absolute',
                        top: { xs: '50px', sm: '50px', md: '50px', lg: '30px', xl: '30px' },
                        left: { xs: '30px', sm: '30px', md: '30px', lg: '30px', xl: '30px' },
                        zIndex: '9'
                    }}>
                        <AlbumImage height={337.5} width={600} src='/en/images/portfolio/2.png' alt='Example from portfolio #2' style={{ ...$portfolio_image }} />
                    </Box>

                    {/* Example 3 */}
                    <Box className={`${global.appearance} ${global.screenshot}`} component='div' sx={{
                        ...$portfolio_image_box,
                        position: 'absolute',
                        top: { xs: '30px', sm: '30px', md: '30px', lg: '0px', xl: '0px' },
                        left: { xs: '10px', sm: '10px', md: '10px', lg: '0px', xl: '0px' },
                        zIndex: '8'
                    }}>
                        <AlbumImage height={337.5} width={600} src='/en/images/portfolio/3.jpeg'  alt='Example from portfolio #3' style={{ ...$portfolio_image }} />
                    </Box>
                </Box>

                {/* Bubbles */}
                <Box component='span' className={global.wave} sx={{
                    ...$green_bubble,
                    width: '105px',
                    height: '105px',
                    top: 0,
                    left: -340,
                    zIndex: '1'
                }}></Box>
                <Box component='span' className={global.wave} sx={{
                    ...$green_bubble,
                    width: '180px',
                    height: '180px',
                    top: 250,
                    left: -170,
                    zIndex: '1'
                }}></Box>
                <Box component='span' className={global.wave} sx={{
                    ...$green_bubble,
                    width: '140px',
                    height: '140px',
                    top: -40,
                    left: -50,
                    zIndex: '1'
                }}></Box>
                <Box component='span' className={global.wave} sx={{
                    ...$green_bubble,
                    width: '225px',
                    height: '225px',
                    top: -80,
                    right: -120,
                    zIndex: '1'
                }}></Box>
                <Box component='span' className={global.wave} sx={{
                    ...$green_bubble,
                    width: '140px',
                    height: '140px',
                    bottom: -40,
                    right: -60,
                    zIndex: '1'
                }}></Box>
                <Box component='span' className={global.wave} sx={{
                    ...$green_bubble,
                    width: '320px',
                    height: '320px',
                    right: 420,
                    bottom: -250,
                    zIndex: '1'
                }}></Box>
                <Box component='span' className={global.wave} sx={{
                    ...$green_bubble,
                    width: '220px',
                    height: '220px',
                    left: 460,
                    top: -100,
                    zIndex: '1',
                    display: {
                        xs: 'none',
                        md: 'block'
                    }
                }}></Box>
            </Box>
        </Box>
    )
}