// Basics
import dynamic from 'next/dynamic';

// Material-UI
import { Box } from '@mui/material';


// Widgets
import { ThemeSelector } from '@/widgets/theme-selector'
const LanguageSelector = dynamic(() => import('@/widgets/lng-selector').then((module) => ({ default: module.LanguageSelector })), {
    ssr: false
});

export function Buttons() {

    return (
        <Box sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            flexFlow: 'row nowrap'
        }}>
            <ThemeSelector iconColor='secondary' switchColor='secondary' />
            <LanguageSelector color='secondary' />
        </Box>
    )
}