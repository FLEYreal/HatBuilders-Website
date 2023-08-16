import { createTheme } from '@mui/material/styles';

declare module "@mui/material/styles" {
    interface Palette {
        opposite: string;
    }
    interface PaletteOptions {
        opposite?: {
            main: string,
            light: string,
            dark: string
        };
    }
}

declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
        opposite: true;
    }
}
