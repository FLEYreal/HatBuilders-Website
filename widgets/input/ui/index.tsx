'use client'
// Basic
import React, { CSSProperties } from "react";

// MUI
import { Theme } from "@mui/material/styles";
import { useTheme } from "@emotion/react";
import { Palette, PaletteColor } from "@mui/material";
import { typography } from "@/shared/mui/theme";

// Interfaces
export interface HatInputType {
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    style?: CSSProperties;
    color?: string & keyof Palette;
    type?: 'main' | 'light' | 'dark';
}

export function HatInput({
    value,
    onChange,
    style,
    color,
    type = 'main'
}: HatInputType) {

    const theme = useTheme() as Theme;

    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            style={{
                fontFamily: typography.fontFamily,
                outline: 0,
                outlineOffset: 0,
                border: '2px solid ' + (theme.palette[color || "primary"] as PaletteColor)[type],
                ...style,
            }}
        />
    );
}