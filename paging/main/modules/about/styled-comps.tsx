'use client'

// Basics
import { createElement as e } from "react";

// Material-UI
import { Box, BoxProps, Divider, DividerProps } from "@mui/material";

// Emotion
import styled from "@emotion/styled";

// Widgets
import { HatButton, HatButtonInterface } from "@/widgets/button";

// Features
import { Flex, defaultWrapper } from "@/features/wrappers";
import { FlexInterface } from "@/features/wrappers/types";
import { ArticleInterface } from '@/features/article/config/types'
import { Article } from '@/features/article'

// Types
import { styledDefaultInterface, useResolution } from "@/shared/mui";

// Assets
import dio from '@/public/images/dio-about.png';

// Interfaces
export interface IllustrationInterface extends BoxProps, styledDefaultInterface { }
export interface PrimaryDividerInterface extends DividerProps, styledDefaultInterface { }
export interface StyledArticleInterface extends ArticleInterface, styledDefaultInterface { }
export interface OrderButtonInterface extends HatButtonInterface, styledDefaultInterface { }


// Styled Components


// WRAPPER STYLING
const StyledWrapperComponent = styled(Flex) <FlexInterface>`
    width: 100%;
`


// ILLUSTRATION STYLING
const StyledIllustration = styled(({ def, ...props }: IllustrationInterface) => e(Box, props)) <IllustrationInterface>`
    position: absolute;
    right: 0;
    background-image: url(${dio.src});
    background-size: cover;
    z-index: -1;


    
    ${({ def }) => def!.b('lg')} {
        top: calc(50vh - 220px);
        width: 440px;
        height: 440px;
    }

    ${({ def }) => def!.b('xl')} {
        top: calc(50vh - 340px);
        width: 680px;
        height: 680px;
    }
`


// DIVIDER STYLING
const StyledPrimaryDivider = styled(({ def, ...props }: PrimaryDividerInterface) => e(Divider, props)) <PrimaryDividerInterface>`
    background-color: ${({ def }) => def!.t.palette.primary.light};
    ${({ def }) => def!.b('xs')} { margin: 12px 0; }
    ${({ def }) => def!.b('md')} { margin: 14px 0; }
    ${({ def }) => def!.b('lg')} { margin: 18px 0; }
    ${({ def }) => def!.b('xl')} { margin: 24px 0; }
`


// ARTICLE STYLING && ARTICLE COMPONENT
const StyledArticleComponent = styled(({ def, ...props }: StyledArticleInterface) => e(Article, props)) <StyledArticleInterface>`
    background: ${({ def }) => def!.t.palette.background.default};

    ${({ def }) => def!.b('lg')} { box-shadow: 0px 0px 100px 150px ${({ def }) => def!.t.palette.background.default}; }
    ${({ def }) => def!.b('xl')} { box-shadow: 0px 0px 300px 400px ${({ def }) => def!.t.palette.background.default}; }
`

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


// ORDER BUTTON STYLING
const StyledOrderButton = styled(({ def, ...props }: OrderButtonInterface) => e(HatButton, props)) <OrderButtonInterface>`
    ${({ def }) => def!.b('xs')} { height: 44px; padding: 0px 30px; }
    ${({ def }) => def!.b('md')} { height: 50px; padding: 0px 40px; }
    ${({ def }) => def!.b('lg')} { height: 56px; padding: 0px 55px; }
    ${({ def }) => def!.b('xl')} { height: 60px; padding: 0px 70px; }
    font-weight: 600;
`


// Exports
export const StyledWrapper = defaultWrapper<FlexInterface>(StyledWrapperComponent)
export const Illustration = defaultWrapper<IllustrationInterface>(StyledIllustration)
export const PrimaryDivider = defaultWrapper<PrimaryDividerInterface>(StyledPrimaryDivider)
export const StyledArticle = defaultWrapper<StyledArticleInterface>(ArticleComponent)
export const OrderButton = defaultWrapper<OrderButtonInterface>(StyledOrderButton)
