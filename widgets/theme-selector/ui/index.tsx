'use client';

// Material-UI
import { IconButton } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { useTheme } from "@emotion/react";

// Contexts
import { useThemeContext } from '@/shared/mui/provider';

// Widgets
import { HatSwitch } from "@/widgets/switch"; 

// Icons
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';


export function ThemeSelector() {

    // Contexts
    const { toggleTheme } = useThemeContext();

    // Theme
    const theme = useTheme() as Theme;
    const dark = theme.palette.mode === 'dark';

    return (
        <>

            {/* Switch that changes theme */}
            <HatSwitch checked={dark} onChange={toggleTheme}/>

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
        </>
    );
}