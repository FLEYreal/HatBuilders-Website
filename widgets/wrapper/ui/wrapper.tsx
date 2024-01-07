'use client'

// Basics
import { ReactNode } from "react";

// Material-UI
import { Box, SxProps, Theme } from "@mui/material"
import { styledDefaultInterface } from "@/shared/mui";

// Emotion
import { useTheme } from "@emotion/react"
import styled from '@emotion/styled'

// Styled Component
const StyledWrapper = styled(Box) <styledDefaultInterface>`
    
    // Styles independent of screen resolution
    margin: 0 auto;

    // Define Width for Wrapper
    ${({ def }) => def.b('xs')} { width: ${({ def }) => def.v.sm + 'px'} }
    ${({ def }) => def.b('md')} { width: ${({ def }) => def.v.md + 'px'} }
    ${({ def }) => def.b('lg')} { width: ${({ def }) => def.v.lg + 'px'} }
    ${({ def }) => def.b('xl')} { width: ${({ def }) => def.v.xl + 'px'} }

`


// Component
export function Wrapper({ children, sx }: { children?: ReactNode, sx?: SxProps }) {

    // Theme
    const theme = useTheme() as Theme

    return (
        <StyledWrapper
            def={{
                b: theme.breakpoints.up,
                v: theme.breakpoints.values,
                t: theme
            }}
            component="section"
            sx={sx}
        >
            {children}
        </StyledWrapper>
    )

}
