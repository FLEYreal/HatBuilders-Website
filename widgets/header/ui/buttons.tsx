'use client'

// Basics
import dynamic from 'next/dynamic';

// Material-UI
import { Box, SwitchProps, SvgIconOwnProps } from '@mui/material';


// Widgets
import { ThemeSelector } from '@/widgets/theme-selector'
const LanguageSelector = dynamic(() => import('@/widgets/lng-selector').then((module) => ({ default: module.LanguageSelector })), {
    ssr: false
});

// Hooks
import { useModules, StepfulTabsInterface } from '@/features/stepful-display';

export function Buttons({ moduleTheme }: { moduleTheme: StepfulTabsInterface['moduleTheme'] }) {

    // Get current module's index to find a color needed from moduleTheme array
    const { current } = useModules()

    return (
        <Box sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            flexFlow: 'row nowrap'
        }}>
            <ThemeSelector 

                // Setup color from theme of the module that's provided from parent header element
                iconColor={moduleTheme![current].color || 'primary'}
                switchColor={moduleTheme![current].color as SwitchProps['color'] || 'primary'}
            />
            <LanguageSelector 
                color={moduleTheme![current].color || 'primary'}
                />
        </Box>
    )
}