'use client'

// Material-UI
import { Box } from "@mui/material"
import { styledDefaultInterface } from "@/shared/mui";

// Emotion
import styled from '@emotion/styled'

// Higher-Order Components
import { defaultWrapper } from "./hocs";
import { WrapperInterface } from "../types";

// Styled Component
const StyledWrapper = styled(Box) <styledDefaultInterface>`
    
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
