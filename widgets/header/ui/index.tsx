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
        <Box component='header' sx={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '56px',
            background: 'rgba(0, 0, 0, 0.40)',
            boxShadow: '0px 4px 12px 2px rgba(0, 0, 0, 0.20)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'space-between',
            zIndex: '1000'
        }}>

            {/* Wrapper setups proper width */}
            <Wrapper sx={{
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
                    justifyContent: 'center',
                    flexFlow: 'row nowrap'
                }}>
                    <ThemeSelector iconColor='secondary' switchColor='secondary' />
                    <LanguageSelector color='secondary' />
                </Box >
            </Wrapper >
        </Box >
    )
}