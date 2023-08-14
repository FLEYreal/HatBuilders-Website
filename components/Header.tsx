'use client'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Typography';

import { useTheme } from '@mui/material/styles';
import ThemeSwitch from './ThemeSwitch';

function Header() {
    return (
        <AppBar position="static">
            <Toolbar color='primary'>
                <Box style={{ display: 'flex', alignItems: 'center' }}>
                    Dark Mode:
                    <ThemeSwitch />
                </Box>


            </Toolbar>
        </AppBar>
    );
}

export default Header;