'use client';

// Basic imports
import { useContext } from "react";

// Material-UI
import { IconButton, Switch } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { useTheme } from "@emotion/react";

// Contexts
import { useThemeContext } from '@/app/Theme/provider';
import { scrollContext } from '@/components/GlobalScrollEvent'

// Icons
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';


function ThemeSwitch() {

    // Contexts
    const { toggleTheme } = useThemeContext();
    const scroll = useContext(scrollContext);

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
                    theme.palette.mode === 'dark' ? <WbSunnyRoundedIcon color='primary' /> : <DarkModeRoundedIcon color={scroll.isScrolled ? 'white' : 'primary'} />
                }
            </IconButton>

            {/* Switch that changes theme */}
            <Switch checked={dark} onChange={toggleTheme} sx={
                scroll.isScrolled ?
                    // Change color, depends on either scrolled or not
                    {
                        '& .MuiSwitch-thumb': {
                            backgroundColor: ''
                        },
                        '& .MuiSwitch-track': {
                            backgroundColor: ''
                        }
                    } :
                    {
                        '& .MuiSwitch-thumb': {
                            backgroundColor: theme.palette.primary.main
                        },
                        '& .MuiSwitch-track': {
                            backgroundColor: theme.palette.primary.main
                        }
                    }
            } />
        </>
    );
}

export default ThemeSwitch;
