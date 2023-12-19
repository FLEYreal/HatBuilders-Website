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

export default async function Home({ params: { lng } }: { params: { lng: string } }) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = await useTranslation(lng, 'home')


    return (
        <Box component="main">
            <Divider sx={{ m: '16px' }} />

            <HatButton color='primary'>HatButton</HatButton>
            <HatButton color='secondary'>HatButton</HatButton>
            <HatButton color='info'>HatButton</HatButton>
            <HatButton color='warning'>HatButton</HatButton>
            <HatButton color='error'>HatButton</HatButton>

            <Divider sx={{ m: '16px' }} />

            <HatButton color='primary' variant='outlined'>HatButton</HatButton>
            <HatButton color='secondary' variant='outlined'>HatButton</HatButton>
            <HatButton color='info' variant='outlined'>HatButton</HatButton>
            <HatButton color='warning' variant='outlined'>HatButton</HatButton>
            <HatButton color='error' variant='outlined'>HatButton</HatButton>

            <Divider sx={{ m: '16px' }} />

            <Cross />

            <HatInput color='primary' />
            <HatInput color='secondary' />
            <HatInput color='info' />
            <HatInput color='warning' />
            <HatInput color='error' />

            <Modal variant='black'>Modal test 1</Modal>
            <Modal variant='gray'>Modal test 2</Modal>
        </Box>
    )
}
