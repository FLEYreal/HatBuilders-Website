'use client'

// Basics
import { createElement as e } from "react";

// Material-UI
import { Box, BoxProps, Divider, DividerProps } from "@mui/material";

// Emotion
import styled from "@emotion/styled";

// Features
import { Flex, defaultWrapper } from "@/features/wrappers";
import { FlexInterface } from "@/features/wrappers/types";
import { ArticleInterface } from '@/features/article/config/types'
import { Article } from '@/features/article'

// Types
import { styledDefaultInterface } from "@/shared/mui";

// Assets
import dio from '@/public/images/dio-about.png';

// Interfaces
export interface IllustrationInterface extends BoxProps, styledDefaultInterface { }
export interface PrimaryDividerInterface extends DividerProps, styledDefaultInterface { }
export interface StyledArticleInterface extends ArticleInterface, styledDefaultInterface { }

// Styled Components
const StyledWrapperComponent = styled(Flex) <FlexInterface>`
    width: 100%;
`

const StyledIllustration = styled(({ def, ...props }: IllustrationInterface) => e(Box, props)) <IllustrationInterface>`
    position: absolute;
    right: 0;
    top: 100px;
    background-image: url(${dio.src});
    background-size: cover;
    width: 680px;
    height: 680px;
    z-index: -1;
`

const StyledPrimaryDivider = styled(({ def, ...props }: PrimaryDividerInterface) => e(Divider, props)) <PrimaryDividerInterface>`
    background-color: ${({ def }) => def!.t.palette.primary.light};
    margin: 24px 0;
`

const StyledArticleComponent = styled(({ def, ...props }: StyledArticleInterface) => e(Article, props)) <StyledArticleInterface>`
    background: ${({ def }) => def!.t.palette.background.default};
    box-shadow: 0px 0px 300px 400px ${({ def }) => def!.t.palette.background.default};

`



export const StyledWrapper = defaultWrapper<FlexInterface>(StyledWrapperComponent)
export const Illustration = defaultWrapper<IllustrationInterface>(StyledIllustration)
export const PrimaryDivider = defaultWrapper<PrimaryDividerInterface>(StyledPrimaryDivider)
export const StyledArticle = defaultWrapper<StyledArticleInterface>(StyledArticleComponent)