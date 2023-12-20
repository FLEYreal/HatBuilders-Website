// Basics
import dynamic from 'next/dynamic';

// Material-UI
import { Box } from '@mui/material';

// Widgets
import { ThemeSelector } from '@/widgets/theme-selector'
import { Wrapper } from '@/widgets/wrapper/ui';
const LanguageSelector = dynamic(() => import('@/widgets/lng-selector').then((module) => ({ default: module.LanguageSelector })), {
    ssr: false
});


export function Header() {

    return (

        // Header Container
        <Box component='header' sx={{ width: '100%' }}>

            {/* Wrapper setups proper width */}
            <Wrapper sx={{
                border: '2px solid red',
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'space-between',
            }}>
                {/* Left: Logo Section */}
                <Box></Box>

                {/* Center: Navigation Section */}
                <Box></Box>

                {/* Right: Settings Seciton */}
                <Box sx={{
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'space-between'
                }}>
                    <ThemeSelector />
                    <LanguageSelector />
                </Box>
            </Wrapper>
        </Box>
    )
}