'use client'

// Basics
import { createElement as e } from "react"

// Material-UI
import { Box, BoxProps } from "@mui/material"

// Emotion
import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"

// Features
import { defaultWrapper } from "@/features/wrappers"

// Shared
import { styledDefaultInterface } from "@/shared/mui"

// Interfaces
export interface FloatInterface extends BoxProps, styledDefaultInterface {
    dur?: number
}

// Animation
const floatKeyframes = keyframes`
    0% {
        transform: translateY(-10px)
    }
    50% {
        transform: translateY(10px)
    }
    100% {
        transform: translateY(-10px)
    }
`

// Styled-Component
const StyledFloat = styled(({ dur, ...props }: FloatInterface) => e(Box, props))<FloatInterface>`

    animation: ${floatKeyframes} ${({ dur }) => dur ? dur : '6'}s ease-in-out infinite;

`

// Component
const FloatComponent = ({ children, ...props }: FloatInterface) => {

    return (
        <StyledFloat {...props}>

            {children}

        </StyledFloat>
    )

}

export const Float = defaultWrapper<FloatInterface>(FloatComponent)



