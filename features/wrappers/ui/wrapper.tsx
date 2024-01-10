'use client'

// Basics
import { createElement as e } from "react";

// Material-UI
import { Box } from "@mui/material"
import { styledDefaultInterface } from "@/shared/mui";

// Emotion
import styled from '@emotion/styled'

// Higher-Order Components
import { defaultWrapper } from "./hocs";
import { WrapperInterface } from "../types";

// Define custom props type
type StyledWrapperProps = styledDefaultInterface & React.ComponentProps<typeof Box>;

// Styled Component
const StyledWrapper = styled(({ def, ...props }: StyledWrapperProps) => e(Box, props)) <StyledWrapperProps>` 
    // Styles independent of screen resolution
    margin: 0 auto;

    // Define Width for Wrapper
    ${({ def }) => def!.b('xs')} { width: ${({ def }) => def!.v.sm + 'px'} }
    ${({ def }) => def!.b('md')} { width: ${({ def }) => def!.v.md + 'px'} }
    ${({ def }) => def!.b('lg')} { width: ${({ def }) => def!.v.lg + 'px'} }
    ${({ def }) => def!.b('xl')} { width: ${({ def }) => def!.v.xl + 'px'} }

`


// Component
function WrapperComponent({ children, def, ...props }: WrapperInterface) {

    return (
        <StyledWrapper
            def={def}
            component="section"

            {...props}
        >
            {children}
        </StyledWrapper>
    )

}

// Export New Wrapper
export const Wrapper = defaultWrapper<WrapperInterface>(WrapperComponent)
