import { Palette, SxProps } from "@mui/material";

export interface HatButtonType {
    children: React.ReactNode;
    onClick?: () => any;
    sx?: SxProps;
    color?: string & keyof Palette;
    type?: 'main' | 'light' | 'dark'| 'discord'| 'vk';
    variant?: 'contained' | 'outlined'
}