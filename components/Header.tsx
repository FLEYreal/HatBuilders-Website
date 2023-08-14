import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { useTheme } from '@mui/material/styles';

async function Header() {

    return (
        <AppBar position="static">
            <Toolbar>
                Hello
            </Toolbar>
        </AppBar>
    );
}

export default Header;