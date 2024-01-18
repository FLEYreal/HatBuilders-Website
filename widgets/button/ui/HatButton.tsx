'use client'

// Basic
import React, { useMemo } from "react";

// MUI
import { Theme } from "@mui/material/styles";
import { useTheme } from "@emotion/react";
import { PaletteColor } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import CircularProgress, { circularProgressClasses } from '@mui/material/CircularProgress';

// Libs
import hexToRgba from 'hex-to-rgba';

// Shared
import { useLanguage } from "@/shared/i18n";
import { useTranslation } from "@/shared/i18n/client";

// Interfaces
import { HatButtonInterface } from "../types";

export function HatButton({
    children,
    onClick = () => { },
    sx,
    color,
    type = 'main',
    variant = "contained",
    toUpperCase = false,
    loading = false,

    name = 'main',
    ns = 'home',

    ...props
}: HatButtonInterface) {

    // Theme object
    const theme = useTheme() as Theme;

    // Translation
    const lng = useLanguage()
    const { t } = useTranslation(lng, ns)

    // Styling variables
    const buttonColor = useMemo(() => (theme.palette[color || "primary"] as PaletteColor)[type], [color, type, theme.palette]);
    const lightButtonColor = useMemo(() => (theme.palette[color || "primary"] as PaletteColor)['light'], [color, theme.palette])

    const buttonStyles = useMemo(() => {
        return {

            // Default Styles for Button
            height: '36px',
            transition: variant == 'contained' ? '0s' : 'all 0.2s ease-in-out',
            fontFamily: 'inherit',
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

            ...(loading && {
                background: variant === 'contained' ? buttonColor : `${hexToRgba(buttonColor, 0.1)}`,
                border: variant === 'contained' ?
                    theme.palette.mode === 'dark' ?
                        '2px solid #fff' : '2px solid #000' :
                    `2px solid ${buttonColor}`
            }),

            // Custom styles overwriting button default styles
            ...sx,
        }
    }, [buttonColor, lightButtonColor, sx, theme.palette.mode, variant, loading]);

    // Define wether it's translatable text (name & ns are defined) or static (children is defined)
    const insides = children ? children : t(name)

    return (

        <LoadingButton

            // Loading indicator that will be displayed in the state of loading button
            loadingIndicator={
                <CircularProgress
                    size={35}
                    thickness={6}

                    // Override default styles for item to make it more visible
                    sx={{
                        [`& .${circularProgressClasses.circle}`]: {
                            opacity: 1,
                            color: theme.palette.mode === 'dark' ? '#fff' : '#000'
                        }
                    }}
                />
            }

            // Other attributes
            disableElevation
            onClick={onClick}
            sx={buttonStyles}
            loading={loading}

            // Provided attributes
            {...props}
        >
            {toUpperCase ? (insides as string).toUpperCase() : insides}
        </LoadingButton>
    );
}