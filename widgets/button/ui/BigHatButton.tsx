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

    // Common props
    children,
    onClick,
    color,
    type = 'main',
    toUpperCase = true,

    // Locale-related props
    name = 'main',
    ns = 'home',

    // Size related props
    w = 270,
    h = 65,

    // Provide props to all components inside of button
    typographyProps,
    frontProps,
    backProps,

    // Left props go to wrapper
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

    // Define wether it's translatable text (name & ns are defined) or static (children is defined)
    const insides = children ? children : t(name)

    return (

        // Wrapper of the page
        <WrapperBigButton

            h={h} w={w}
            darkButtonColor={darkButtonColor}
            onClick={onClick}

            {...props}
        >

            {/* Part that's behind main button (needed to create sharp angles for button) */}
            {/* It's Box Component (from MUI) so you can provide all props available to Box */}
            <BackBigButton

                buttonColor={buttonColor}
                h={h} w={w}

                {...backProps}
            />

            {/* Front part, which is a Button (from MUI) inside, so you can provide all props to it */}
            <FrontBigButton

                buttonColor={buttonColor}
                h={h} w={w}
                variant="contained"

                disableElevation
                disableRipple
                disableFocusRipple

                {...frontProps}
            >

                {/* Typography is needed to be able to change font size, weight, family ... props. */}
                {/* Provide everything needed to "typographyProps", it accepts all props available to Typography (MUI) */}
                <Typography {...typographyProps}>
                    {toUpperCase ? (insides as string).toUpperCase() : insides}
                </Typography>

            </FrontBigButton>

        </WrapperBigButton>
    );
}