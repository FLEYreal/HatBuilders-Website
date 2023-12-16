'use client'

// Basic
import React, { CSSProperties } from "react";

// MUI
import { Theme } from "@mui/material/styles";
import { useTheme } from "@emotion/react";
import { Palette, PaletteColor } from "@mui/material";
import { typography } from "@/shared/mui/theme";

export function HatButton({
    children,
    onClick,
    style,
    color,
    type = 'main'
}: {
    children: React.ReactNode;
    onClick?: () => any;
    style?: CSSProperties;
    color?: string & keyof Palette;
    type?: 'main' | 'light' | 'dark'
}) {

    const theme = useTheme() as Theme;

    return (
        <button
            onClick={onClick}
            style={{
                background: (theme.palette[color || "primary"] as PaletteColor)[type],
                fontFamily: typography.fontFamily,
                padding: '10px 24px',
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