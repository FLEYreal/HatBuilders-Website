'use client'

// Basics
import { createElement as e } from "react";

// Emotion
import styled from "@emotion/styled";

// Widgets
import { HatButton, HatButtonInterface } from "@/widgets/button";

// Features
import { Center, CenterInterface, Flex, FlexInterface, defaultWrapper } from "@/features/wrappers";

// Shared
import { styledDefaultInterface } from "@/shared/mui";

// Variables
import { albumBig, albumSmall } from ".";

// Interfaces
export interface PortfolioButtonInterface extends HatButtonInterface, styledDefaultInterface { }
export interface PortfolioExampleInterface extends FlexInterface, styledDefaultInterface { }

// Styled Components
const StyledWrapperComponent = styled(Center) <CenterInterface>`
    height: 100vh;
`

const StyledPortfolioButton = styled(({ def, ...props }: PortfolioButtonInterface) => e(HatButton, props)) <PortfolioButtonInterface>`
    
    // Static styles
    font-weight: 600;

    // Dynamic styles
    ${({ def }) => def!.b('xs')} { height: 44px; padding: 0px 20px; }
    ${({ def }) => def!.b('md')} { height: 50px; padding: 0px 30px; }
    ${({ def }) => def!.b('lg')} { height: 56px; padding: 0px 45px; }
    ${({ def }) => def!.b('xl')} { height: 60px; padding: 0px 60px; }

`

const StyledPortfolioExample = styled(({ def, ...props }: PortfolioExampleInterface) => e(Flex, props)) <PortfolioExampleInterface>`

    // Static styles
    position: absolute;
    border: 1px solid white;
    width: 100%;
    justify-content: space-between;

    // Dynamic styles
    ${({ def }) => def!.b('xs')} { 
        height: ${albumBig.xs.h}px;    
    }
    ${({ def }) => def!.b('md')} { 
        height: ${albumBig.md.h}px;
    }
    ${({ def }) => def!.b('lg')} {
        height: ${albumBig.lg.h}px;
        max-width: 873.16;
    }
    ${({ def }) => def!.b('xl')} {
        height: ${albumBig.xl.h}px;
        max-width: 1600px;
    }

`

// Export all styled components
export const StyledWrapper = defaultWrapper(StyledWrapperComponent)
export const PortfolioButton = defaultWrapper<PortfolioButtonInterface>(StyledPortfolioButton)
export const PortfolioExample = defaultWrapper<PortfolioExampleInterface>(StyledPortfolioExample)