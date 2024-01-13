'use client'

// Basics
import { createElement as e } from "react";

// Material-UI
import { Box, BoxProps } from "@mui/material";

// Emotion
import styled from "@emotion/styled";

// Widgets
import { HatButton, HatButtonInterface } from "@/widgets/button";

// Features
import { Center, CenterInterface, defaultWrapper } from "@/features/wrappers";

// Shared
import { styledDefaultInterface } from "@/shared/mui";

// Variables
import { albumBig, albumSmall } from ".";

// Interfaces
export interface PortfolioButtonInterface extends HatButtonInterface, styledDefaultInterface { }
export interface PortfolioExampleInterface extends BoxProps, styledDefaultInterface { }

// Styled Components
const StyledWrapperComponent = styled(Center) <CenterInterface>`
    height: 100vh;
`

const StyledPortfolioButton = styled(({ def, ...props }: PortfolioButtonInterface) => e(HatButton, props)) <PortfolioButtonInterface>`
    ${({ def }) => def!.b('xs')} { height: 44px; padding: 0px 20px; }
    ${({ def }) => def!.b('md')} { height: 50px; padding: 0px 30px; }
    ${({ def }) => def!.b('lg')} { height: 56px; padding: 0px 45px; }
    ${({ def }) => def!.b('xl')} { height: 60px; padding: 0px 60px; }
    font-weight: 600;
`

const StyledPortfolioExample = styled(({ def, ...props }: PortfolioExampleInterface) => e(Box, props)) <PortfolioExampleInterface>`

`

// Export all styled components
export const StyledWrapper = defaultWrapper(StyledWrapperComponent)
export const PortfolioButton = defaultWrapper<PortfolioButtonInterface>(StyledPortfolioButton)
export const PortfolioExample = defaultWrapper<PortfolioExampleInterface>(StyledPortfolioExample)