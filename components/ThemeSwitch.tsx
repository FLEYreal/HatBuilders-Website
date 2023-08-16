'use client';
import { IconButton, Switch } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { useTheme } from "@emotion/react";
import { useThemeContext } from '@/app/Theme/provider';

import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';

function ThemeSwitch() {
    const { toggleTheme } = useThemeContext();
    const theme = useTheme() as Theme;
    const dark = theme.palette.mode === 'dark';

    return (
        <>
            <IconButton onClick={toggleTheme} sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
            }} >{
                    theme.palette.mode === 'dark' ? <WbSunnyRoundedIcon color='primary' /> : <DarkModeRoundedIcon color='white' />
                }</IconButton>
            <Switch checked={dark} onChange={toggleTheme} />
        </>
    );
}

export default ThemeSwitch;
