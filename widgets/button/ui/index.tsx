'use client'

// Basic
import React, { CSSProperties } from "react";

// MUI
import { Theme } from "@mui/material/styles";
import { useTheme } from "@emotion/react";
import { Palette, PaletteColor } from "@mui/material";

// Styles
import s from './index.module.css';

// Interfaces
export interface HatButtonType {
    children: React.ReactNode;
    onClick?: () => any;
    style?: CSSProperties;
    color?: string & keyof Palette;
    type?: 'main' | 'light' | 'dark'
}

export function HatButton({
    children,
    onClick,
    style,
    color,
    type = 'main'
}: HatButtonType) {

    const theme = useTheme() as Theme;

    return (
        <button
            onClick={onClick}
            className={s.button}
            style={{
                background: (theme.palette[color || "primary"] as PaletteColor)[type],
                fontFamily: 'inherit',
                color: color === 'primary' || color === 'info' || color === 'warning'
                    ? '#000000'
                    : '#ffffff',
                ...style,
            }}
        >
            {children}
        </button>
    );
}


// export default function HatButton({
//     children,
//     sx,
//     color
// }: {
//     children: React.ReactNode,
//     sx?: SxProps,
//     color: ButtonOwnProps['color']
// }) {

//     return (
//         <Button variant="contained" color={color} disableElevation disableRipple sx={{
//             ...sx
//         }}>
//             {children}
//         </Button>
//     )

// }