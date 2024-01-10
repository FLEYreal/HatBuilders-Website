'use client'

// Basic
import React, { useMemo } from "react";

// MUI
import { Theme } from "@mui/material/styles";
import { useTheme } from "@emotion/react";
import { PaletteColor, Typography } from "@mui/material";

// Shared
import { useLanguage } from "@/shared/i18n";
import { useTranslation } from "@/shared/i18n/client";

// Insides
import { FrontBigButton, BackBigButton, WrapperBigButton } from "./styled-comps";

// Interfaces
import { BigHatButtonInterface } from "../types";

export function BigHatButton({
    children,
    onClick,
    color,
    type = 'main',
    toUpperCase = true,

    name = 'main',
    ns = 'home',

    w = 270,
    h = 65,

    typographyProps,
    frontProps,
    backProps,

    ...props
}: BigHatButtonInterface) {

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
        <WrapperBigButton
            h={h} w={w}
            darkButtonColor={darkButtonColor}
            onClick={onClick}
            {...props}
        >
            <BackBigButton
                buttonColor={buttonColor}
                h={h} w={w}

                {...backProps}
            />
            <FrontBigButton
                buttonColor={buttonColor}
                h={h} w={w}
                variant="contained"
                disableElevation
                disableRipple
                disableFocusRipple

                {...frontProps}
            >
                <Typography {...typographyProps}>
                    {
                        toUpperCase ? (insides as string).toUpperCase() : insides
                    }
                </Typography>
            </FrontBigButton>
        </WrapperBigButton>
    );
}