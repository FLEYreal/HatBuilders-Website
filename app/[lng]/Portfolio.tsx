// Material-UI
import { Box } from "@mui/material";

// Language
import { useTranslation } from '@/i18n'

import {
    // Import vars with styles in SX (Material-UI) format
    $container_based,
    $title_size
} from '@/mui/styles';


export default async function Portfolio({ lng }: { lng: string }) {

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
            </Box>

        </Box>
    );
}