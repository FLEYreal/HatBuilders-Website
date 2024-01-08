'use client'

// Basic
import React, { useMemo } from "react";

// MUI
import { Theme } from "@mui/material/styles";
import { useTheme } from "@emotion/react";
import { PaletteColor, Button } from "@mui/material";

// Libs
import hexToRgba from 'hex-to-rgba';

// Interfaces
import { HatButtonType } from "../types";

export function HatButton({
    children,
    onClick,
    sx,
    color,
    type = 'main',
    variant = "contained"
}: HatButtonType) {

    // Hooks
    const theme = useTheme() as Theme;

    // Styling variables
    const buttonColor = useMemo(() => (theme.palette[color || "primary"] as PaletteColor)[type], [color, type, theme.palette]);
    const lightButtonColor = useMemo(() => (theme.palette[color || "primary"] as PaletteColor)['light'], [color, theme.palette])

    const buttonStyles = useMemo(() => {
        return {

            // Default Styles for Button
            transition: variant == 'contained' ? '0s' : 'all 0.2s ease-in-out',
            fontFamily: 'inherit',
            // padding: '16px 36px',
            margin: '3px',
            cursor: 'pointer',
            color: variant === 'contained' ? '#000000' : buttonColor,
            background: variant === 'contained' ? buttonColor : 'transparent',
            border: variant === 'contained' ? '2px solid #000' : `2px solid ${buttonColor}`,
            boxShadow: variant === 'contained'
                ? '4px 4px 0px 0px rgba(255, 255, 255, 0.50) inset, -4px -4px 0px 0px rgba(0, 0, 0, 0.30) inset'
                : `0px 0px 0px 2px ${hexToRgba(buttonColor, 0.3)}`,

            // Styles for Events
            '&:hover': {
                background: variant === 'contained' ? buttonColor : `${hexToRgba(buttonColor, 0.1)}`,
                border: variant === 'contained' ?
                    theme.palette.mode === 'dark' ?
                        '2px solid #fff' : '2px solid #000' :
                    `2px solid ${buttonColor}`,
                boxShadow: variant === 'contained'
                    ? '4px 4px 0px 0px rgba(255, 255, 255, 0.50) inset, -4px -4px 0px 0px rgba(0, 0, 0, 0.30) inset'
                    : `0px 0px 0px 5px ${hexToRgba(buttonColor, 0.3)}`,
            },

            '&:active': {
                background: variant === 'contained' ? buttonColor : `${hexToRgba(buttonColor, 0.2)}`,
                border: variant === 'contained' ?
                    theme.palette.mode === 'dark' ?
                        '2px solid #fff' : '2px solid #000' :
                    `2px solid ${lightButtonColor}`,
                color: variant === 'contained' ? '#000000' : lightButtonColor,
                boxShadow: variant === 'contained'
                    ? '-4px -4px 0px 0px rgba(255, 255, 255, 0.50) inset, 4px 4px 0px 0px rgba(0, 0, 0, 0.30) inset'
                    : `0px 0px 0px 8px ${hexToRgba(buttonColor, 0.3)}`,
            },

            // Custom styles overwriting button default styles
            ...sx,
        }
    }, [buttonColor, lightButtonColor, sx, theme.palette.mode, variant]);

    return (

        <Button
            disableElevation
            onClick={onClick}
            sx={buttonStyles}
        >
            {children}
        </Button>
    );
}