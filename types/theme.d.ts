// Material-UI
import { createTheme } from '@mui/material/styles';

// Change basic theme types so I could use custom palettes
declare module "@mui/material/styles" {
    interface Palette {
        plain_text: string;
        white: string;
        black: string;
    }

    interface PaletteOptions {
        plain_text?: {
            main: string,
            light: string,
            dark: string
        };
        white?: {
            main: string,
            light: string,
            dark: string
        };
        black?: {
            main: string,
            light: string,
            dark: string
        }
    }
}

declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
        plain_text: true;
        white: true;
        black: true;
    }
}