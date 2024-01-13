'use client'

// Basics
import { CSSProperties, createElement as e } from "react";
import Image, { ImageProps } from "next/image";

// Material-UI
import { Box, BoxProps } from "@mui/material";

// Emotion
import styled from "@emotion/styled";

// Widgets
import { HatButton, HatButtonInterface } from "@/widgets/button";

// Features
import { Flex, FlexInterface, defaultWrapper } from "@/features/wrappers";
import { Article, ArticleInterface } from "@/features/article";

// Shared
import { styledDefaultInterface, useResolution } from "@/shared/mui";

// Interfaces
export interface ShadowInterface extends styledDefaultInterface, BoxProps { }
export interface IllustrationInterface extends styledDefaultInterface, ImageProps { }
export interface StyledArticleInterface extends ArticleInterface, styledDefaultInterface { }
export interface ActionButtonInterface extends styledDefaultInterface, HatButtonInterface {
    bg: CSSProperties['background']
}

// Styled Components
const StyledWrapperComponent = styled(Flex) <FlexInterface>``

const StyledShadow = styled(({ def, ...props }: ShadowInterface) => e(Box, props)) <ShadowInterface>`

    // Static styles
    z-index: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100vh;

    // Dynamic styles
    ${({ def }) => def!.b('xs')} { 

        background: ${({ def }) => def!.t.palette.mode === 'dark' ?
        'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #070707 100%);' :
        'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #ffffff 100%);'};

        width: 100%;

    }

    ${({ def }) => def!.b('lg')} { 

        background: ${({ def }) => def!.t.palette.mode === 'dark' ?
        'linear-gradient(270deg, rgba(12, 12, 12, 0.00) 0%, rgba(8, 8, 8, 0.20) 12.5%, rgba(4, 4, 4, 0.60) 25%, #121212 50%, #000 100%);' :
        'linear-gradient(270deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.20) 12.5%, rgba(255, 255, 255, 0.60) 25%, #ffffff 50%, #ffffff 100%);'};

        width: 70%;

    }

`

const StyledIllustration = styled(({ def, ...props }: IllustrationInterface) => e(Image, props))`

    // Static
    bottom: 0;

    // Dynamic styles
    ${({ def }) => def!.b('xs')} { 
        right: 0px;
        height: auto;
        width: 100%;
    }

    ${({ def }) => def!.b('lg')} { 
        right: -110px;
        height: calc(25vw + 300px);
        width: auto;
    }

`

const StyledActionButton = styled(({ def, bg, ...props }: ActionButtonInterface) => e(HatButton, props))`

    // Static styles
    color: #fff;
    & .MuiButton-startIcon { margin-right: 16px; }

    // Dynamic styles
    ${({ def }) => def!.b('xs')} { 
        width: 100%; 
        padding: 24px;
        margin: 6px 4px;
    }
    ${({ def }) => def!.b('md')} { 
        width: auto; 
        padding: 26px;
        margin-right: 6px;
    }
    ${({ def }) => def!.b('lg')} { 
        width: 100%;
        padding: 28px 0px;
        margin: 6px 0;
    }
    ${({ def }) => def!.b('xl')} {
        width: auto; 
        padding: 26px;
        margin: 0px;
        margin-right: 12px;
    }

    background: ${({ bg, def }) => bg ? bg : def!.t.palette.primary.main};

    &:hover {
        background: ${({ bg, def }) => bg ? bg : def!.t.palette.primary.main};
    }

    &:active {
        background: ${({ bg, def }) => bg ? bg : def!.t.palette.primary.main};
    }
`

const StyledArticleComponent = styled(({ def, ...props }: StyledArticleInterface) => e(Article, props)) <StyledArticleInterface>``
const ArticleComponent = ({ children, ...props }: StyledArticleInterface) => {

    const { xs, lg } = useResolution()

    return (
        <StyledArticleComponent

            textAlign={lg ? 'start' : xs ? 'center' : 'start'}
            align={lg ? 'start' : xs ? 'center' : 'start'}

            {...props}>
            {children}
        </StyledArticleComponent>
    )
}

// Export all styled components
export const StyledWrapper = defaultWrapper<ShadowInterface>(StyledWrapperComponent)
export const Shadow = defaultWrapper<ShadowInterface>(StyledShadow)
export const Illustration = defaultWrapper<IllustrationInterface>(StyledIllustration)
export const ActionButton = defaultWrapper<ActionButtonInterface>(StyledActionButton)
export const StyledArticle = defaultWrapper<StyledArticleInterface>(ArticleComponent)









