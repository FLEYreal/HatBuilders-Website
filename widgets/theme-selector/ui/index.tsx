'use client';

// Material-UI
import { IconButton, Switch } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { useTheme } from "@emotion/react";

// Contexts
import { useThemeContext } from '@/shared/mui/provider';

// Icons
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';


export function ThemeSelector({ isMobile }: { isMobile?: boolean }) {

    // Contexts
    const { toggleTheme } = useThemeContext();

    // Theme
    const theme = useTheme() as Theme;
    const dark = theme.palette.mode === 'dark';

    return (
        <>
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
                        <WbSunnyRoundedIcon color='primary' /> :
                        <DarkModeRoundedIcon color='primary' />
                }
            </IconButton>

            {/* Switch that changes theme */}
            <Switch checked={dark} onChange={toggleTheme} sx={
                isMobile ?
                    {
                        '& .MuiSwitch-thumb': {
                            backgroundColor: theme.palette.primary.main
                        },
                        '& .MuiSwitch-track': {
                            backgroundColor: theme.palette.primary.main
                        }
                    } :
                    {
                        '& .MuiSwitch-thumb': {
                            backgroundColor: ''
                        },
                        '& .MuiSwitch-track': {
                            backgroundColor: ''
                        }
                    }
            } />
        </>
    );
}