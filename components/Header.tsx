import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { useTheme } from '@mui/material/styles';
import ThemeSwitch from './ThemeSwitch';

async function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                Hello

                <ThemeSwitch />
            </Toolbar>
        </AppBar>
    );
}

export default Header;