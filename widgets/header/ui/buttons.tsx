'use client'

// Basics
import { useMemo, useState } from 'react';
import dynamic from 'next/dynamic';

// Material-UI
import { Box, IconButton, SwitchProps, Menu, MenuItem } from '@mui/material';

// Widgets
import { ThemeSelector } from '@/widgets/theme-selector';
import { HatMenu } from '@/widgets/menu';
const LanguageSelector = dynamic(() => import('@/widgets/lng-selector').then((module) => ({ default: module.LanguageSelector })), { ssr: false });

// Features
import { useModules, StepfulTabsInterface } from '@/features/stepful-display';

// Shared
import { useLanguage } from '@/shared/i18n';
import { useTranslation } from '@/shared/i18n/client';

// Icons
import MenuIcon from '@mui/icons-material/Menu';

/**
 * Buttons for right part of the header
 */
export function Buttons({ moduleTheme }: { moduleTheme: StepfulTabsInterface['moduleTheme'] }) {

    // Data from Hooks
    const { current, modules, switchModule } = useModules();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    // Get Translation
    const lng = useLanguage()
    const { t } = useTranslation(lng, 'header')

    // Memoized props to define color for buttons
    const commonThemeProps = useMemo(() => {
        return {
            iconColor: moduleTheme![current].color || 'primary',
            switchColor: moduleTheme![current].color as SwitchProps['color'] || 'primary',
        }
    }, [current, moduleTheme]);


    // Handlers
    const handleTabMenu = (event: React.MouseEvent<HTMLButtonElement>) => { setAnchorEl(event.currentTarget) }
    const handleClose = () => { setAnchorEl(null) }
    const handleSwitchModule = (index: number) => {
        switchModule(index)
    }

    return (
        <Box sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            flexFlow: 'row nowrap',
        }}>

            {/* Use this for desktop screens */}
            <Box sx={{ display: { xs: 'none', xl: 'block' } }}>
                <ThemeSelector {...commonThemeProps} />
            </Box>

            {/* Use this for laptop screens */}
            <Box sx={{ display: { xs: 'flex', xl: 'none' }, alignItems: 'center', justifyContent: 'center' }}>
                <ThemeSelector isSwitch={false} {...commonThemeProps} />
            </Box>

            <LanguageSelector color={commonThemeProps.iconColor} />

            {/* Burger menu for small screens */}
            <IconButton
                sx={{
                    display: {
                        xs: 'block',
                        lg: 'none'
                    }
                }}
                onClick={handleTabMenu}
                color={commonThemeProps.iconColor}>
                <MenuIcon />
            </IconButton>

            {/* Menu that works for small screens */}
            <HatMenu
                anchorEl={anchorEl}
                onClick={() => handleClose()}
            >
                {
                    // Parse modules and create a menu item for each
                    modules.map((_, ind) => {

                        // Setup translatable name for tab, if not, use "main"
                        let translation = 'main';
                        if (moduleTheme && moduleTheme[ind]) translation = moduleTheme[ind].translation

                        return (
                            <MenuItem key={ind} onClick={() => handleSwitchModule(ind)}>
                                <Box sx={{ mr: '16px' }}>
                                    {moduleTheme && moduleTheme[ind].icon}
                                </Box>
                                <Box>
                                    {t(translation)}
                                </Box>
                            </MenuItem>
                        )
                    })
                }
            </HatMenu>
        </Box>
    );
}
