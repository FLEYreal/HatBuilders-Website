// Basic Imports
import Image from 'next/image'
import Link from 'next/link'

// Material-UI
import { Typography, Box, ListItemIcon, ListItemText } from '@mui/material'

// Language
import { useTranslation } from '@/i18n'

// Styles
import styles from './page.module.scss'
import {
    $flex_column,
    $container_based,

    $title_size,
    $text_size,
    $flex_row_center
} from '@/mui/styles'

// Icons & Images
import yt from '@/public/icons/social/yt.svg'
import vk from '@/public/icons/social/vk.svg'
import dc from '@/public/icons/social/dc.svg'
import tk from '@/public/icons/social/tk.svg'

export default async function SocialBlock({ lng }: { lng: string }) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = await useTranslation(
        lng, // Current language
        'home' // What file to take translation from
    )

    return (
        <Box component='section' sx={{ width: '100%', mt: '125px' }}>

            {/* Inner Content */}
            <Box sx={{
                ...$flex_column,
                ...$container_based
            }}>

                {/* Title of the page */}
                <Box sx={{
                    fontSize: $title_size
                }}>
                    {t('social_networks')}
                </Box>

                {/* List of the links */}
                <Box sx={{
                    ...$flex_row_center
                }}>
                    <Link href='https://discord.gg/7cNAGPbGQu' title={t('discord')} style={{ ...$flex_row_center, marginRight: '24px', marginTop: '32px'}} className={styles.social_link}>
                        <ListItemIcon><Image src={dc} alt='YouTube Icon' width={50} height={50}/></ListItemIcon>
                    </Link>
                    <Link href='https://www.youtube.com/' style={{ ...$flex_row_center, marginRight: '24px', marginTop: '32px' }} className={styles.social_link}>
                        <ListItemIcon><Image src={yt} alt='YouTube Icon' width={50} height={50}/></ListItemIcon>
                    </Link>
                    <Link href='https://www.vk.com/' style={{ ...$flex_row_center, marginRight: '24px', marginTop: '32px' }} className={styles.social_link}>
                        <ListItemIcon><Image src={vk} alt='YouTube Icon' width={50} height={50}/></ListItemIcon>
                    </Link>
                    <Link href='https://www.tiktok.com/' style={{ ...$flex_row_center, marginRight: '24px', marginTop: '32px' }} className={styles.social_link}>
                        <ListItemIcon><Image src={tk} alt='YouTube Icon' width={50} height={50}/></ListItemIcon>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}