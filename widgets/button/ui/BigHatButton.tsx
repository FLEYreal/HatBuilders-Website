'use client'

// Basic
import React, { useMemo } from "react";

// MUI
import { Theme } from "@mui/material/styles";
import { useTheme } from "@emotion/react";
import { PaletteColor, Box, Button, Typography } from "@mui/material";

// Libs
import hexToRgba from 'hex-to-rgba';

// Shared
import { useLanguage } from "@/shared/i18n";
import { useTranslation } from "@/shared/i18n/client";

// Insides
import { FrontBigButton, BackBigButton, WrapperBigButton } from "./styles";

// Interfaces
import { BigButtonInterface } from "../types";

export function BigHatButton({
    children,
    onClick,
    sx,
    color,
    type = 'main',
    toUpperCase = true,

    name = 'main',
    ns = 'home',

    w = 270,
    h = 65
}: BigButtonInterface) {

    // Hooks
    const theme = useTheme() as Theme;

    // Translation
    const lng = useLanguage()
    const { t } = useTranslation(lng, ns)

    // Styling variables
    const buttonColor = useMemo(() => (theme.palette[color || "primary"] as PaletteColor)[type], [color, type, theme.palette]);
    const darkButtonColor = useMemo(() => (theme.palette[color || "primary"] as PaletteColor)['dark'], [color, theme.palette])

    const insides = children ? children : t(name)
    return (
        <WrapperBigButton sx={sx} h={h} w={w}>
            <BackBigButton
                buttonColor={buttonColor} darkButtonColor={darkButtonColor}
                h={h} w={w}
            />
            <FrontBigButton
                buttonColor={buttonColor} darkButtonColor={darkButtonColor}
                h={h} w={w}
                variant="contained"
                disableElevation
                disableRipple
                disableFocusRipple
            >
                <Typography variant="h2">
                    {
                        // toUpperCase ? (insides as string).toUpperCase() : insides
                    }
                </Typography>
            </FrontBigButton>
        </WrapperBigButton>
    );
}