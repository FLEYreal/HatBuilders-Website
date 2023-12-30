'use client'
// Material-UI
import { ReactNode } from "react";
import { Box, SxProps, Theme } from "@mui/material"
import { useTheme } from "@emotion/react"

export function Wrapper({ children, sx }: { children?: ReactNode, sx?: SxProps }) {

    const theme = useTheme() as Theme;

    return (
        <Box component="section" sx={{
            width: {
                xs: theme.breakpoints.values.sm,
                md: theme.breakpoints.values.md,
                lg: theme.breakpoints.values.lg,
                xl: theme.breakpoints.values.xl
            },
            margin: '0 auto',
            ...sx
        }}>
            {children}
        </Box>
    )

}