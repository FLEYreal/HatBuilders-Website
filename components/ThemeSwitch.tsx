'use client';
import { Switch } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { useTheme } from "@emotion/react";
import { useThemeContext } from '@/app/Theme/provider';

function ThemeSwitch() {
    const { toggleTheme } = useThemeContext();
    const theme = useTheme() as Theme;
    const dark = theme.palette.mode === 'dark';

    return (
        <Switch checked={dark} onChange={toggleTheme} />
    );
}

export default ThemeSwitch;
