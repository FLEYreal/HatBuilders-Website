// Language
import { useTranslation } from '@/shared/i18n'

// Material-UI
import { Box, Divider } from '@mui/material'

// Widgets
import { HatButton } from '@/widgets/button';
import { HatInput } from '@/widgets/input';
import { Modal } from '@/widgets/modal'
import { Cross } from '@/widgets/cross'

// Styles
import './globals.css'
import { HatSwitch } from '@/widgets/switch'

export default async function Home({ params: { lng } }: { params: { lng: string } }) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = await useTranslation(lng, 'home')


    return (
        <Box component="main">
            <Divider sx={{ m: '16px' }} />

            <HatButton color='primary'>{t('discord')}</HatButton>
            <HatButton color='secondary'>{t('discord')}</HatButton>
            <HatButton color='info'>{t('discord')}</HatButton>
            <HatButton color='warning'>{t('discord')}</HatButton>
            <HatButton color='error'>{t('discord')}</HatButton>

            <Divider sx={{ m: '16px' }} />

            <HatButton color='primary' variant='outlined'>{t('discord')}</HatButton>
            <HatButton color='secondary' variant='outlined'>{t('discord')}</HatButton>
            <HatButton color='info' variant='outlined'>{t('discord')}</HatButton>
            <HatButton color='warning' variant='outlined'>{t('discord')}</HatButton>
            <HatButton color='error' variant='outlined'>{t('discord')}</HatButton>

            <Divider sx={{ m: '16px' }} />

            <Cross />

            <HatInput color='primary' />
            <HatInput color='secondary' />
            <HatInput color='info' />
            <HatInput color='warning' />
            <HatInput color='error' />

            <Modal variant='black'>Modal test 1</Modal>
            <Modal variant='gray'>Modal test 2</Modal>

            <HatSwitch />
        </Box>
    )
}
