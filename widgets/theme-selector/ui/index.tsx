'use client';

// Material-UI
import { IconButton, Box, SxProps, SwitchProps, SvgIconOwnProps } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { useTheme } from "@emotion/react";

// Contexts
import { useThemeContext } from '@/shared/mui/ui/provider';

// Widgets
import { HatSwitch } from "@/widgets/switch";

// Icons
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';


export function ThemeSelector({
    sx,
    switchColor,
    iconColor
}: {
    sx?: SxProps,
    switchColor?: SwitchProps['color'],
    iconColor?: SvgIconOwnProps['color']
}) {

    // Contexts
    const { toggleTheme } = useThemeContext();

    // Theme
    const theme = useTheme() as Theme;
    const dark = theme.palette.mode === 'dark';

    return (
        <Box sx={{
            display: 'flex',
            flexFlow: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            ...sx
        }}>

            {/* Switch that changes theme */}
            <HatSwitch color={switchColor} checked={dark} onChange={toggleTheme} />

            {/* Icon near switch, changes theme on click as well */}
            <IconButton onClick={toggleTheme} sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
            }} >
                {
                    // Changes icon between sun and moon depending on theme
                    theme.palette.mode === 'dark' ?
                        <WbSunnyRoundedIcon color={iconColor || 'primary'} /> :
                        <DarkModeRoundedIcon color={iconColor || 'primary'} />
                }
            </IconButton>
        </Box>
    );
}