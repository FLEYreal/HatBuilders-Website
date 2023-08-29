// Basic Imports
import Link from 'next/link'

// Material-UI
import { Box, Button } from "@mui/material";

// Language
import { useTranslation } from '@/i18n'

// Styles
import {
    // Import vars with styles in SX (Material-UI) format
    $container_based,
    $title_size,
    $main_buttons
} from '@/mui/styles';
import global from '@/app/globals.module.scss'

// Components
import Album from "@/components/Album/Album";

// Types
import { imageData } from "@/types/image";

// Images & Icons
import FolderSpecialRoundedIcon from '@mui/icons-material/FolderSpecialRounded';

// Files
import portfolio from '@/public/en/lists/portfolio.json'

export default async function Portfolio({ lng }: { lng: string }) {

    const images: imageData[] = portfolio

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = await useTranslation(
        lng, // Current language
        'home' // What file to take translation from
    )

    return (
        <Box component='section' sx={{ width: '100%', mt: '125px' }}>

            {/* INNER CONTENT */}
            <Box sx={{
                ...$container_based
            }}>
                {/* Title of the block */}
                <Box sx={{
                    fontSize: $title_size
                }}>
                    {t('our_portfolio')}
                </Box>

                <Album
                    images={images}
                    sx={{
                        mt: '16px'
                    }}
                    sizes={{
                        height: 202.5,
                        width: 360
                    }}
                    limit={3}
                />

                <Link href="/screenshots">
                    <Button
                        sx={{
                            ...$main_buttons,
                            mt: '40px'
                        }}
                        className={global.appearance}
                        startIcon={<FolderSpecialRoundedIcon />}
                        color="white"
                        variant="outlined">
                        {t('more')}
                    </Button>
                </Link>

            </Box>

        </Box>
    );
}