'use client'

// Basics
import { createElement as e } from "react"

// Material-UI
import { Box } from "@mui/material"

// Emotion
import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"

// Features
import { defaultWrapper } from "@/features/wrappers"

// Insides
import { AppearanceInterface } from "../types"

// Animation
const appearanceKeyframes = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-6vh);
    }
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
`

// Styled-Component
const StyledAppearance = styled(({ dur, delay, ...props }: AppearanceInterface) => e(Box, props))<AppearanceInterface>`

    opacity: 0;

    animation: ${appearanceKeyframes} ${({ dur }) => dur ? dur : '1'}s ease-in-out;
    animation-delay: ${({ delay }) => delay ? delay : '0'}s;
    animation-fill-mode: forwards;

`

// Component
const AppearanceComponent = ({ children, ...props }: AppearanceInterface) => {

    return (
        <StyledAppearance {...props}>

            {children}

        </StyledAppearance>
    )

}

export const Appearance = defaultWrapper<AppearanceInterface>(AppearanceComponent)



