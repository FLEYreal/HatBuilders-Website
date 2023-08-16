'use client';
import { useContext } from "react";

import { IconButton, Switch } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { useTheme } from "@emotion/react";
import { useThemeContext } from '@/app/Theme/provider';

import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';

import { scrollContext } from '@/components/GlobalScrollEvent'

function ThemeSwitch() {
    const { toggleTheme } = useThemeContext();
    const scroll = useContext(scrollContext);

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
                    theme.palette.mode === 'dark' ? <WbSunnyRoundedIcon color='primary' /> : <DarkModeRoundedIcon color={scroll.isScrolled ? 'white' : 'primary'} />
                }</IconButton>
            <Switch checked={dark} onChange={toggleTheme} sx={
                scroll.isScrolled ?
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
