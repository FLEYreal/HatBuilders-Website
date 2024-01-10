// Material-UI
import { BoxProps, ButtonProps, Palette, SxProps, TypographyProps } from "@mui/material";

// Shared
import { styledDefaultInterface } from "@/shared/mui";

// Root interfaces whose props are inherited by every component in the slice
export interface RootInterface {
    children?: React.ReactNode;
    onClick?: () => any;
    sx?: SxProps;

    name?: string;
    ns?: string;
}

// Button Interfaces
export interface HatButtonInterface extends RootInterface {
    color?: string & keyof Palette;
    type?: 'main' | 'light' | 'dark';
    variant?: 'contained' | 'outlined';
    toUpperCase?: boolean;
}

export interface BigHatButtonInterface extends RootInterface {
    color?: string & keyof Palette;
    type?: 'main' | 'light' | 'dark';
    toUpperCase?: boolean;
    w?: number;
    h?: number;

    typographyProps?: TypographyProps;
    frontProps?: FrontBigButtonInterface;
    backProps?: BackBigButtonInterface;
}

// Button's components interfaces
export interface WrapperBigButtonInterface extends styledDefaultInterface, BoxProps {
    w?: number;
    h?: number;
    darkButtonColor?: string;
}
export interface BackBigButtonInterface extends styledDefaultInterface, BoxProps {
    w?: number;
    h?: number;
    buttonColor?: string;
}
export interface FrontBigButtonInterface extends styledDefaultInterface, ButtonProps {
    w?: number;
    h?: number;
    buttonColor?: string;
}
